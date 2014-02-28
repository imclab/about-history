/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

var addon = {
  on: function (signal, callback, arg) {
    // console.log(signal, "registered with callback", callback);
    if (signal === "history:reset") {
      callback(
        [{"url":"http://www.latimes.com/entertainment/tv/showtracker/la-et-st-bachelor-recap-juan-pablo-hometowns-episode-eight-20140225,0,1445717.story#axzz2uN2YK3j6","title":"'Bachelor' recap: Juan Pablo isn't feeling the love in hometowns - latimes.com","visitCount":1,"time":"2014-02-25T21:12:54.244Z","host":"www.latimes.com","scheme":"http","icon":"http://www.latimes.com/favicon.ico","og:title":"'Bachelor' recap: Juan Pablo isn't feeling the love in hometowns","og:description":"OK, serious question: Have we ever before reached the hometown date episode of &ldquo;The Bachelor&rdquo; without the L-bomb being dropped?","og:type":"article","og:url":"http://www.latimes.com/entertainment/tv/showtracker/la-et-st-bachelor-recap-juan-pablo-hometowns-episode-eight-20140225,0,1445717.story","og:image":"http://www.trbimg.com/img-530cce85/turbine/la-et-st-bachelor-recap-juan-pablo-hometowns-episode-eight-20140225","og:site_name":"latimes.com","twitter:card":"summary","twitter:site":"@latimes"},{"url":"http://www.latimes.com/local/abcarian/la-me-ra-bree-walker-arrest-mugshot-20140224,0,6928428.story#axzz2uN2YK3j6","title":"Bree Walker talks about her sobriety, her arrest, and that mugshot - latimes.com","visitCount":1,"time":"2014-02-25T21:12:54.084Z","host":"www.latimes.com","scheme":"http","icon":"http://www.latimes.com/favicon.ico","og:title":"Bree Walker talks about her sobriety, her arrest, and that mugshot","og:description":"On Monday morning, Bree Walker opened the door of her home in Venice and ushered me in. Her very blond, slightly messy hair was tumbling out of a bun on top of her head. Her face was bare, as were her feet. She wore a loose-fitting pair of polka dot drawstring pajama bottoms and a purple sweatshirt over a blue satin shirt. Very Westside hot mom.","og:type":"article","og:url":"http://www.latimes.com/local/abcarian/la-me-ra-bree-walker-arrest-mugshot-20140224,0,6928428.story","og:image":"http://www.trbimg.com/img-530be424/turbine/la-me-ra-bree-walker-arrest-mugshot-20140224","og:site_name":"latimes.com","twitter:card":"summary","twitter:site":"@latimes"},{"url":"http://www.latimes.com/entertainment/tv/showtracker/la-et-st-bachelor-recap-juan-pablo-hometowns-episode-eight-20140225,0,1445717.story","title":"'Bachelor' recap: Juan Pablo isn't feeling the love in hometowns - latimes.com","visitCount":1,"time":"2014-02-25T21:12:50.676Z","host":"www.latimes.com","scheme":"http","icon":"http://www.latimes.com/favicon.ico"},{"url":"http://www.latimes.com/local/abcarian/la-me-ra-bree-walker-arrest-mugshot-20140224,0,6928428.story","title":"Bree Walker talks about her sobriety, her arrest, and that mugshot - latimes.com","visitCount":1,"time":"2014-02-25T21:12:50.171Z","host":"www.latimes.com","scheme":"http","icon":"http://www.latimes.com/favicon.ico"},{"url":"https://www.google.ca/search?q=nyt&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:official&client=firefox-a&channel=fflb&gfe_rd=cr&ei=8wYNU-mXGqWV8Qf53IBI#channel=fflb&q=la+times&rls=org.mozilla:en-US:official","title":"la times - Google Search","visitCount":2,"time":"2014-02-25T21:12:45.976Z","host":"www.google.ca","scheme":"https","icon":"https://www.google.ca/favicon.ico"},{"url":"http://www.washingtonpost.com/local/trafficandcommuting/silver-line-faces-another-delay/2014/02/24/17b2d4d6-9d8f-11e3-9ba6-800d1192d08b_story.html","title":"Silver Line faces another delay - The Washington Post","visitCount":1,"time":"2014-02-25T21:12:24.337Z","host":"www.washingtonpost.com","scheme":"http","icon":"http://www.washingtonpost.com/favicon.ico","og:title":"Silver Line faces another delay","og:type":"article","og:url":"http://www.washingtonpost.com/local/trafficandcommuting/silver-line-faces-another-delay/2014/02/24/17b2d4d6-9d8f-11e3-9ba6-800d1192d08b_story.html","og:site_name":"Washington Post","og:description":"Construction of the first phase of the rail line is not yet complete, MWAA says.","twitter:creator":"@loriara","og:image":"http://img.washingtonpost.com/rf/image_2048w/2010-2019/WashingtonPost/2013/12/18/Production/CapitalBusiness/Images/silver line4921383623892.jpg","twitter:card":"summary","twitter:site":"@WashingtonPost"},{"url":"http://www.washingtonpost.com/world/africa/uganda-tabloid-prints-list-of-top-homosexuals/2014/02/25/4b9a9498-9df6-11e3-878c-65222df220eb_story.html","title":"Ugandan newspaper prints list of ‘200 top’ gays - The Washington Post","visitCount":1,"time":"2014-02-25T21:12:24.318Z","host":"www.washingtonpost.com","scheme":"http","icon":"http://www.washingtonpost.com/favicon.ico","og:title":"Ugandan newspaper prints list of '200 top' gays","og:type":"article","og:url":"http://www.washingtonpost.com/world/africa/uganda-tabloid-prints-list-of-top-homosexuals/2014/02/25/4b9a9498-9df6-11e3-878c-65222df220eb_story.html","og:site_name":"Washington Post","og:description":"A Ugandan newspaper published a list Tuesday of what it called the country’s “200 top” homosexuals, outing some Ugandans who previously had not identified themselves as gay one day after the president enacted a harsh anti-gay law.","og:image":"http://img.washingtonpost.com/rf/image_2048w/2010-2019/WashingtonPost/2014/02/25/Production/WashingtonPost/Images/Uganda Gays.JPEG-0dc8c-3382.jpg","twitter:card":"summary","twitter:site":"@WashingtonPost"},{"url":"http://www.washingtonpost.com/politics/congress/vets-benefits-bill-should-win-initial-senate-vote/2014/02/25/a8c56afa-9df4-11e3-878c-65222df220eb_story.html","title":"Vets benefits bill clears initial Senate hurdle - The Washington Post","visitCount":1,"time":"2014-02-25T21:12:23.234Z","host":"www.washingtonpost.com","scheme":"http","icon":"http://www.washingtonpost.com/favicon.ico","og:title":"Vets benefits bill clears initial Senate hurdle","og:type":"article","og:url":"http://www.washingtonpost.com/politics/congress/vets-benefits-bill-should-win-initial-senate-vote/2014/02/25/a8c56afa-9df4-11e3-878c-65222df220eb_story.html","og:site_name":"Washington Post","og:description":"The Senate has voted overwhelmingly to begin debating a sprawling Democratic bill expanding health, education and other benefits for millions of veterans.","og:image":"http://img.washingtonpost.com/rf/image_2048w/2010-2019/Wires/Online/2014-02-25/AP/Images/Veterans Bill.JPEG-0c9a7.jpg","twitter:card":"summary","twitter:site":"@WashingtonPost"},{"url":"https://www.google.ca/search?q=nyt&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:official&client=firefox-a&channel=fflb&gfe_rd=cr&ei=8wYNU-mXGqWV8Qf53IBI#channel=fflb&q=washington+post&rls=org.mozilla:en-US:official","title":"washington post - Google Search","visitCount":2,"time":"2014-02-25T21:12:19.885Z","host":"www.google.ca","scheme":"https","icon":"https://www.google.ca/favicon.ico"},{"url":"https://www.google.ca/search?q=nyt&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:official&client=firefox-a&channel=fflb&gfe_rd=cr&ei=8wYNU-mXGqWV8Qf53IBI#channel=fflb&q=washington+post&rls=org.mozilla:en-US:official&tbm=nws","title":"washington post - Google Search","visitCount":2,"time":"2014-02-25T21:12:17.539Z","host":"www.google.ca","scheme":"https","icon":"https://www.google.ca/favicon.ico"},{"url":"http://www.nytimes.com/2014/02/25/nyregion/owner-of-opulent-long-island-castle-is-shot-in-head-by-gunman.html","title":"Developer Is Shot in the Head Outside His Long Island Castle - NYTimes.com","visitCount":1,"time":"2014-02-25T21:12:11.635Z","host":"www.nytimes.com","scheme":"http","icon":"http://static01.nyt.com/favicon.ico","og:url":"http://www.nytimes.com/2014/02/25/nyregion/owner-of-opulent-long-island-castle-is-shot-in-head-by-gunman.html","og:type":"article","og:title":"Developer Is Shot in the Head Outside His Long Island Castle","og:description":"A masked gunman shot Gary Melius, a well-known Long Island developer and prominent political patron, in the parking lot of his estate, according to the police.","twitter:card":"summary","twitter:site":"@nytimes","twitter:url":"http://www.nytimes.com/2014/02/25/nyregion/owner-of-opulent-long-island-castle-is-shot-in-head-by-gunman.html","twitter:title":"Developer Is Shot in the Head Outside His Long Island Castle","twitter:description":"A masked gunman shot Gary Melius, a well-known Long Island developer and prominent political patron, in the parking lot of his estate, according to the police.","og:image":"http://static01.nyt.com/images/2014/02/25/nyregion/25shoot-02/25shoot-02-videoSixteenByNine1050.jpg","twitter:image":"http://static01.nyt.com/images/2014/02/25/nyregion/25shoot-02/25shoot-02-thumbLarge.jpg"},{"url":"https://www.google.ca/search?q=nyt&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:official&client=firefox-a&channel=fflb&gfe_rd=cr&ei=8wYNU-mXGqWV8Qf53IBI#channel=fflb&q=nyt&rls=org.mozilla:en-US:official&tbm=nws","title":"nyt - Google Search","visitCount":2,"time":"2014-02-25T21:12:06.838Z","host":"www.google.ca","scheme":"https","icon":"https://www.google.ca/favicon.ico"},{"url":"http://www.nytimes.com/2014/02/25/world/middleeast/obama-worried-about-effects-of-waging-cyberwar-in-syria.html","title":"Syria War Stirs New U.S. Debate on Cyberattacks - NYTimes.com","visitCount":1,"time":"2014-02-25T21:12:05.861Z","host":"www.nytimes.com","scheme":"http","icon":"http://static01.nyt.com/favicon.ico","og:url":"http://www.nytimes.com/2014/02/25/world/middleeast/obama-worried-about-effects-of-waging-cyberwar-in-syria.html","og:type":"article","og:title":"Syria War Stirs New U.S. Debate on Cyberattacks","og:description":"Considerations that led President Obama to hesitate about using cyberweapons against Syria reflect larger concerns about a new and untested tactic.","twitter:card":"summary","twitter:site":"@nytimes","twitter:url":"http://www.nytimes.com/2014/02/25/world/middleeast/obama-worried-about-effects-of-waging-cyberwar-in-syria.html","twitter:title":"Syria War Stirs New U.S. Debate on Cyberattacks","twitter:description":"Considerations that led President Obama to hesitate about using cyberweapons against Syria reflect larger concerns about a new and untested tactic.","og:image":"http://static01.nyt.com/images/icons/t_logo_291_black.png","twitter:image":"http://static01.nyt.com/images/icons/t_logo_150_black.png"},{"url":"http://www.nytimes.com/2014/02/26/world/europe/moazzam-begg-arrested-in-britain.html","title":"British Police Arrest Former Guantánamo Detainee - NYTimes.com","visitCount":1,"time":"2014-02-25T21:12:03.656Z","host":"www.nytimes.com","scheme":"http","icon":"http://static01.nyt.com/favicon.ico","og:url":"http://www.nytimes.com/2014/02/26/world/europe/moazzam-begg-arrested-in-britain.html","og:type":"article","og:title":"British Police Arrest Former Guantánamo Detainee","og:description":"The arrested man, Moazzam Begg, is by far the most prominent of the Britons suspected of supporting jihadist groups fighting President Bashar al-Assad’s forces in Syria.","twitter:card":"summary","twitter:site":"@nytimes","twitter:url":"http://www.nytimes.com/2014/02/26/world/europe/moazzam-begg-arrested-in-britain.html","twitter:title":"British Police Arrest Former Guantánamo Detainee","twitter:description":"The arrested man, Moazzam Begg, is by far the most prominent of the Britons suspected of supporting jihadist groups fighting President Bashar al-Assad’s forces in Syria.","og:image":"http://static01.nyt.com/images/icons/t_logo_291_black.png","twitter:image":"http://static01.nyt.com/images/icons/t_logo_150_black.png"},{"url":"http://www.nytimes.com/2014/02/24/us/politics/pentagon-plans-to-shrink-army-to-pre-world-war-ii-level.html?_r=0","title":"Pentagon Plans to Shrink Army to Pre-World War II Level - NYTimes.com","visitCount":1,"time":"2014-02-25T21:11:19.129Z","host":"www.nytimes.com","scheme":"http","icon":"http://static01.nyt.com/favicon.ico","og:url":"http://www.nytimes.com/2014/02/24/us/politics/pentagon-plans-to-shrink-army-to-pre-world-war-ii-level.html","og:type":"article","og:title":"Pentagon Plans to Shrink Army to Pre-World War II Level","og:description":"Defense Secretary Chuck Hagel’s budget proposal would eliminate an entire class of Air Force attack jets and scale back the size of the Army not just to pre-9/11 levels, but to the force’s size in 1940.","twitter:card":"summary","twitter:site":"@nytimes","twitter:url":"http://www.nytimes.com/2014/02/24/us/politics/pentagon-plans-to-shrink-army-to-pre-world-war-ii-level.html","twitter:title":"Pentagon Plans to Shrink Army to Pre-World War II Level","twitter:description":"Defense Secretary Chuck Hagel’s budget proposal would eliminate an entire class of Air Force attack jets and scale back the size of the Army not just to pre-9/11 levels, but to the force’s size in 1940.","og:image":"http://static01.nyt.com/images/2013/12/10/us/politics/video-thinkback-military-spend/video-thinkback-military-spend-videoSixteenByNine600.jpg","twitter:image":"http://static01.nyt.com/images/2013/12/10/us/politics/video-thinkback-military-spend/video-thinkback-military-spend-thumbLarge.jpg"},{"url":"https://www.google.ca/search?q=nyt&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:official&client=firefox-a&channel=fflb&gfe_rd=cr&ei=8wYNU-mXGqWV8Qf53IBI","title":"nyt - Google Search","visitCount":1,"time":"2014-02-25T21:11:15.851Z","host":"www.google.ca","scheme":"https","icon":"https://www.google.ca/favicon.ico"}]
      );
    } else if (signal === "url:bookmark") {
      setTimeout(function () { callback({ url : "http://www.latimes.com/entertainment/tv/showtracker/la-et-st-bachelor-recap-juan-pablo-hometowns-episode-eight-20140225,0,1445717.story#axzz2uN2YK3j6"}); }, 100);
    }
  },
  emit: function (signal) {
    console.log("signal", _.first(_.rest(arguments)));
  }
};

