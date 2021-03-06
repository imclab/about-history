/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
'use strict';

const { DatabaseFactory } = require('indexed-db-storage');
const { resolve } = require('sdk/core/promise');
const { emit } = require('sdk/event/core');

const { events } = require('../history/service');
const { Metadata } = require('./events');

const dbName = 'history-meta';
const storeName = 'history-meta';

const idbPromise = DatabaseFactory.open(dbName).then(db => {
  return db.createObjectStore(storeName, {keyPath : 'url'}).then(store => {
    return store;
  }).catch(console.exception);
});

function remove(url) {
  idbPromise.then(idb => idb.remove(url));
}
exports.remove = remove;

function get(url) {
  return idbPromise.then(idb => idb.get(url));
}
exports.get = get;

function find(url) {
  return idbPromise.then(idb => idb.find(url));
}
exports.find = find;

function add(metas) {
  return idbPromise.then(idb => idb.remove(metas.url)).
  then(_ => idbPromise).
  then(idb => idb.add(metas)).
  then(_ => {
    emit(Metadata, 'add', metas);
  }, err => {
    console.log(err);
  });
}
exports.add = add;

// remove a single history item via the URL
events.on('delete', (url) => remove(url));

// clear the entier history-meta databasse
events.on('clear', function() {
  if (idbPromise) {
    idbPromise.all().then(function(items) {
      items.forEach(function(item) {
        remove(item.url);
      });
    });
  }
});
