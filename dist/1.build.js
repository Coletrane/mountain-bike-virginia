webpackJsonp([1],{375:function(t,e,i){"use strict";function a(t){i(460)}Object.defineProperty(e,"__esModule",{value:!0});var r=i(462),A=i.n(r),o=i(465),s=i(90),n=a,l=s(A.a,o.a,n,null,null);e.default=l.exports},376:function(t,e,i){"use strict";function a(t){i(377)}Object.defineProperty(e,"__esModule",{value:!0});var r=i(379),A=i.n(r),o=i(380),s=i(90),n=a,l=s(A.a,o.a,n,null,null);e.default=l.exports},377:function(t,e,i){var a=i(378);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(370)("7ac197a4",a,!0)},378:function(t,e,i){e=t.exports=i(125)(void 0),e.push([t.i,".header-wrapper{background-color:#000}.toolbar{background-color:transparent!important;margin-bottom:32rem}@media screen and (max-width:480px){.xxcva{display:none}}.xxcva{width:12rem}.mtbva{width:8rem}.xxcva-link{margin-left:1rem}.fb{width:2.5rem}.nav-text{margin-top:4.5rem!important;color:#fff!important;margin-left:1rem;margin-right:1rem;text-decoration:none;font-size:1.5rem}.nav-link{margin-top:4.5rem}.mtbva-title{text-align:center}.header-button{background-color:transparent!important;border:2px solid #fff!important;color:#fff!important}",""])},379:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mtbva-header",props:["header-height","image","title","subtitle","button","buttonLink"]}},380:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-parallax",{staticClass:"header-wrapper",attrs:{src:t.image,height:t.headerHeight}},[a("v-toolbar",{staticClass:"toolbar",attrs:{extended:"",absolute:""}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[a("img",{staticClass:"mtbva",attrs:{src:i(381)}})]),a("router-link",{staticClass:"xxcva-link nav-link",attrs:{to:"/"}},[a("img",{staticClass:"xxcva",attrs:{src:i(382),alt:"XXCVA"}})]),a("v-spacer"),a("router-link",{staticClass:"nav-text",attrs:{to:"/results"}},[t._v("\n        Results\n    ")]),a("a",{staticClass:"nav-link",attrs:{href:"https://www.facebook.com/xxcva/"}},[a("img",{staticClass:"fb",attrs:{src:i(383)}})])],1),a("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[a("h3",{staticClass:"white--text mtbva-title"},[t._v(t._s(t.title))]),a("h5",{staticClass:"white--text mtbva-title"},[t._v(t._s(t.subtitle))]),t.buttonLink?a("v-btn",{staticClass:"header-button",attrs:{raised:"",href:t.buttonLink}},[t._v("\n      "+t._s(t.button)+"\n    ")]):t._e()],1)],1)},r=[],A={render:a,staticRenderFns:r};e.a=A},381:function(t,e,i){t.exports=i.p+"mtbva.png"},382:function(t,e,i){t.exports=i.p+"XXCVA.jpg"},383:function(t,e,i){t.exports=i.p+"fb.svg"},384:function(t,e,i){"use strict";var a=i(126),r={};a.appRoutes.forEach(function(t,e,i){r[t]={}}),r["/"]={title:"Mountain Bike Virginia",meta:[{charset:"utf-8"},{description:"Rides, Races, and Reviews. XXC VA race series. Just 40 more miles."},{keywords:"mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails"}]},r["/results"]={title:"Results",meta:[{description:"Results from races sanctioned by The Virginia Championship Commission"},{keywords:"mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails, creature, carvins cove, douthat, middle mountain momma, "},{property:"og:type",content:"website"},{property:"og:image",content:a.imgRoutes["/"]}]},r["/relaunch"]={title:"Mountain Bike Virginia Site Relaunch",meta:[{}]},r["/creature2017recap"]={title:"Creature from Carvin's Cove 2017",meta:[{description:"Results and pictures from the second annual race in Roanoke's fine Carvin's Cove"},{keywords:"mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails, creature, carvins cove"}]},r["/pivot-switchblade-review"]={title:"Review: Pivot Switchblade",meta:[{description:"Review of the 27.5 plus and 29 Pivot Switchblade in a beautiful blue"},{keywords:"mountain, bike, pivot, carbon, pivot bikes, review, switchblade, 29, 27 plus, 29er, enduro, all mountain, trail"}]};for(var A in r)r.hasOwnProperty(A)&&(r[A].meta.push({property:"og:type",content:"website"}),r[A].meta.push({property:"og:url",content:"http://bikeva.com"+a[A]}),r[A].meta.push({property:"og:image",content:a.imgRoutes[A]}),r[A].meta.push({property:"og:title",content:r[A].title}),r[A].meta.push({property:"og:description",content:r[A].description}),r[A].meta.push({property:"fb:app_id",content:"1426359417419881"}));t.exports=r},385:function(t,e,i){t.exports=i.p+"IMG_3009.jpg"},386:function(t,e,i){"use strict";function a(t){i(387)}Object.defineProperty(e,"__esModule",{value:!0});var r=i(389),A=i.n(r),o=i(390),s=i(90),n=a,l=s(A.a,o.a,n,null,null);e.default=l.exports},387:function(t,e,i){var a=i(388);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(370)("56993d6c",a,!0)},388:function(t,e,i){e=t.exports=i(125)(void 0),e.push([t.i,".yt-wrapper{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden}.yt-wrapper iframe{position:absolute;top:0;left:0;width:100%;height:100%}",""])},389:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"youtube",props:["src"]}},390:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"yt-wrapper"},[i("iframe",{attrs:{width:"100%",src:t.src,frameborder:"0",allowfullscreen:""}})])},r=[],A={render:a,staticRenderFns:r};e.a=A},391:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(392),r=i.n(a),A=i(393),o=i(90),s=o(r.a,A.a,null,null,null);e.default=s.exports},392:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"paragraph-with-links",props:["paragraph"]}},393:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"paragraph-with-links"},t._l(t.paragraph,function(e){return i("span",[e.url?i("a",{attrs:{href:e.url}},[t._v("\n      "+t._s(e.words)+"\n    ")]):i("span",[t._v("\n      "+t._s(e.words)+"\n    ")])])}))},r=[],A={render:a,staticRenderFns:r};e.a=A},394:function(t,e,i){"use strict";function a(t){i(395)}Object.defineProperty(e,"__esModule",{value:!0});var r=i(397),A=i.n(r),o=i(398),s=i(90),n=a,l=s(A.a,o.a,n,null,null);e.default=l.exports},395:function(t,e,i){var a=i(396);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(370)("54f0067b",a,!0)},396:function(t,e,i){e=t.exports=i(125)(void 0),e.push([t.i,"@media screen and (max-width:600px){.social-button{margin:0!important;width:2rem!important}.icon{font-size:1.5rem!important}}.social-right{margin-top:-.5rem}",""])},397:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"social-actions",props:["post"],data:function(){return{baseUrl:"http://bikeva.com"}},methods:{facebookLink:function(t){return"http://www.facebook.com/share.php?u="+this.baseUrl+t.href},redditLink:function(t){return"http://www.reddit.com/submit?url="+this.baseUrl+t.href},twitterLink:function(t){return"http://twitter.com/home?status="+t.title+" "+this.baseUrl+t.href}}}},398:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"social-right"},[i("v-btn",{staticClass:"blue--text text--darken-4 social-button",attrs:{icon:"",href:t.facebookLink(t.post)}},[i("v-icon",{attrs:{medium:""}},[t._v("fa-facebook")])],1),i("v-btn",{staticClass:"red--text social-button",attrs:{icon:"",href:t.redditLink(t.post)}},[i("v-icon",{attrs:{medium:""}},[t._v("fa-reddit")])],1),i("v-btn",{staticClass:"light-blue--text social-button",attrs:{icon:"",href:t.twitterLink(t.post)}},[i("v-icon",{attrs:{medium:""}},[t._v("fa-twitter")])],1)],1)},r=[],A={render:a,staticRenderFns:r};e.a=A},399:function(t,e,i){"use strict";var a=i(400),r=i(385),A={name:"Cole Inman",imgUrl:i(401),fbUrl:"https://www.facebook.com/uhmcole"},o={name:"Kyle Inman",imgUrl:i(402),fbUrl:"https://www.facebook.com/kylnman"};t.exports=[{title:"Virginia's Blue Ridge Creature from Carvins Cove",subtitle:"Oct 2nd, 2016",promoParagraph:[{words:"The innagural year of Virginia's Blue Ridge Creature from Carvins Cove was a smashing success. We were even graced by the presence of the fantastic Mr. "},{words:"Jeremiah Bishop",url:"https://en.wikipedia.org/wiki/Jeremiah_Bishop"},{words:"who still managed to take first despite starting 3 minutes late."}],altUrl:"/results",altText:"View the Results.",resultsIdx:1,youtubeSrc:"https://www.youtube.com/embed/i5Lxb4wtuCs",href:"/creature2016",author:o},{title:"Full Site Relaunch!",subtitle:"The same pirates are still at it.",img:a,href:"/relaunch",author:A},{title:"Virginia's Blue Ridge Creature from Carvins Cove",subtitle:"Oct 1st, 2017",promoParagraph:[{words:"Once again Virginia's Blue Ridge Creature from Carvins Cove was a resounding success. Special thanks to Debbie Inman, Renee Powers, Chris Lee, and all the wonderful staff who helped make the Creature come alive."}],altUrl:"/results",altText:"View the Results.",resultsIdx:0,youtubeSrc:"https://www.youtube.com/embed/uO44Tt0woT8",href:"/creature2017recap",author:o},{title:"Review: Pivot Switchblade",subtitle:"In a world obsessed with what discipline you ride, this bike doesn't have time for that.",promoParagraph:[{words:"With over a 5 grand pricetag, the Pivot Switchblade is easily a great deal. It's not enduro, it's not trail. Perhaps they should have called it the Swiss Army. No, that would never fly."}],img:r,href:"/pivot-switchblade-review",author:A}]},400:function(t,e,i){t.exports=i.p+"rockymthi8.jpg"},401:function(t,e){t.exports="data:image/jpeg;base64,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"},402:function(t,e,i){t.exports=i.p+"kyle.jpg"},403:function(t,e,i){"use strict";function a(t){i(404)}Object.defineProperty(e,"__esModule",{value:!0});var r=i(406),A=i.n(r),o=i(415),s=i(90),n=a,l=s(A.a,o.a,n,null,null);e.default=l.exports},404:function(t,e,i){var a=i(405);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(370)("367641b4",a,!0)},405:function(t,e,i){e=t.exports=i(125)(void 0),e.push([t.i,"@media screen and (min-width:600px){.container{max-width:1350px!important;padding-left:30px;padding-right:30px}}@media screen and (max-width:600px){h6{font-size:20px!important}}.blog-img{width:100%!important}.blog-p{padding:1rem}",""])},406:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(376),A=a(r),o=i(386),s=a(o),n=i(407),l=a(n),c=i(394),u=a(c),h=i(391),p=a(h),d=i(410),m=a(d);e.default={name:"blog-post",components:{MTBVAHeader:A.default,Youtube:s.default,RideWithGps:l.default,SocialActions:u.default,ParagraphWithLinks:p.default,Author:m.default},props:["headerHeight","image","post","content"]}},407:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(408),r=i.n(a),A=i(409),o=i(90),s=o(r.a,A.a,null,null,null);e.default=s.exports},408:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ride-with-gps",props:["url"]}},409:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("iframe",{staticStyle:{width:"1px","min-width":"100%",border:"none"},attrs:{src:t.url,scrolling:"no"}})},r=[],A={render:a,staticRenderFns:r};e.a=A},410:function(t,e,i){"use strict";function a(t){i(411)}Object.defineProperty(e,"__esModule",{value:!0});var r=i(413),A=i.n(r),o=i(414),s=i(90),n=a,l=s(A.a,o.a,n,null,null);e.default=l.exports},411:function(t,e,i){var a=i(412);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(370)("fa5dde9c",a,!0)},412:function(t,e,i){e=t.exports=i(125)(void 0),e.push([t.i,".author-container{width:40%;text-align:center;float:left;padding-top:1.2rem;max-width:180px}.author-img{border-radius:50%;width:50%}",""])},413:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"author",props:["author"]}},414:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"author-container"},[i("a",{attrs:{href:t.author.fbUrl}},[i("img",{staticClass:"author-img",attrs:{src:t.author.imgUrl,alt:"author"}}),i("div",[t._v(t._s(t.author.name))])])])},r=[],A={render:a,staticRenderFns:r};e.a=A},415:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"blog-post"}},[i("m-t-b-v-a-header",{attrs:{"header-height":t.headerHeight,image:t.image,title:t.post.title}}),i("v-content",[i("v-container",[i("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[i("v-card",[i("div",{staticClass:"blog-p subheading"},[i("h6",[t._v(t._s(t.post.subtitle))]),i("author",{attrs:{author:t.post.author}}),t._l(t.content,function(e){return i("div",[e.img?i("img",{staticClass:"blog-img",attrs:{src:e.img}}):t._e(),e.p?i("paragraph-with-links",{staticClass:"blog-p",attrs:{paragraph:e.p}}):t._e(),e.youtubeSrc?i("youtube",{attrs:{src:e.youtubeSrc}}):t._e(),e.rwgps?i("ride-with-gps",{attrs:{src:e.rwgpsSrc}}):t._e()],1)}),i("div",[i("social-actions",{attrs:{post:t.post}})],1)],2)])],1)],1)],1)],1)},r=[],A={render:a,staticRenderFns:r};e.a=A},460:function(t,e,i){var a=i(461);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(370)("4060dc5a",a,!0)},461:function(t,e,i){e=t.exports=i(125)(void 0),e.push([t.i,".mtbva-title{text-shadow:0 0 10px #000}",""])},462:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(403),A=a(r),o=i(399),s=a(o),n=i(385),l=a(n),c=i(463),u=a(c),h=i(464),p=a(h),d=i(384),m=a(d),w=s.default[3];e.default={name:"pivot-switchblade-review",components:{BlogPost:A.default},metaInfo:m.default["/pivot-switchblade-review"],data:function(){return{headerHeight:700,image:l.default,post:w,content:[{p:[{words:"Upon being a convert to the church of the DW Link, my interest in Pivot Cycles far outmatches many other companies. Attending the Pivot demo was a must, for I yearned to know if the secret sauce tasted just as good on a different sandwich."}]},{p:[{words:"I arrive at the demo and of course there are no large 29ers in sight. I agree to take the 27.5 Plus Switchblade out while I wait for a bike with wheels in the correct size. My course is Percy Warner Park in Nashville TN. Percy has some XCish trails, no big climbs, and a main feature downhill/bike park section. Seemingly the perfect combo for my bike with too much rubber. The Switchblade is LOW, and slack, a winning 1-2 punch in the modern mountain bike industry. Yet, there is nothing winning about how many times I struck my pedal. Yes, yes, I know, time my pedaling better, but the problem with that is that there are an array of bikes (one sitting in my car right now) where striking pedals is of no concern. I head to the Broduro section of this already washed out course, just as a light rain begins. Ah, here's where the plus will shine, nimble and grippy. The bike absolutely demolishes the bike park section, giving me more confidence than I feel even on my own horse. At the bottom I continue this confidence until, finally, she lets go. I lose the rear and go crashing down, and not even 2.8 inches of Maxxis Rekon knobby rubber could save me. I promptly return the bike with the XTR derailleur shifting just as when I received it."}]},{p:[{words:'Brendan, or as I call him, Pivot Jesus, promptly switches the 27.5 plus wheels for 29s. This is possible by some foreign technology Pivot Jesus calls "Super Boost" which is actually just downhill spacing, and another spacing you don\'t have hubs for. At the very least downhill spacing will actually fulfill its promise of stiffness you can feel unlike the 5mm lie the industry has hoist upon us. The 29er is sublime. It is right at the end of the threshold of too low without crossing it. The 67.25° head tube angle sits in this same equilibrium. The Fox 36 Factory 150mm fork (despite its negative air issues, causing me to bottom it out previously) is just that, a fork. Its good, not as good as a Pike, nothing unexpected here. The 135mm Fox Float shock is plush, yet climbs well. I never even thought about the lockout switch. I suspect the DW Link is to blame here as the Pivot 429 Trail and my own Turner Sultan (with a Cane Creek DB Air) climb just as well.'}],img:u.default},{p:[{words:"The Pivot Switchblade marks a convergence on the map of the discipline captivated mountain bike industry. It can run any tires you want, climb anything you want, and give you PRs on any type of descent. It is neither a Trail bike, nor an Enduro bike, nor an All Mountain bike, but it is all three. Yet it is also none of these. A machine that holds practical utility buried under an audaciously indifferent style. This knife carves its own path, as it propels you down yours."}],img:p.default}]}}}},463:function(t,e,i){t.exports=i.p+"IMG_3005.jpg"},464:function(t,e,i){t.exports=i.p+"IMG_3011.jpg"},465:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"creature-2017"}},[i("blog-post",{attrs:{"header-height":t.headerHeight,image:t.image,post:t.post,content:t.content}})],1)},r=[],A={render:a,staticRenderFns:r};e.a=A}});