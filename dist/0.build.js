webpackJsonp([0],{367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(398),n=r.n(a),i=r(427),s=r(92),o=s(n.a,i.a,null,null,null);t.default=o.exports},368:function(e,t,r){"use strict";function a(e){r(369)}Object.defineProperty(t,"__esModule",{value:!0});var n=r(371),i=r.n(n),s=r(372),o=r(92),l=a,u=o(i.a,s.a,l,null,null);t.default=u.exports},369:function(e,t,r){var a=r(370);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(93)("32e87a3a",a,!0)},370:function(e,t,r){t=e.exports=r(63)(void 0),t.push([e.i,".toolbar{background-color:transparent!important;margin-bottom:32rem}@media screen and (max-width:480px){.xxcva{display:none}}.xxcva{width:12rem}.mtbva{width:8rem}.xxcva-link{margin-left:1rem}.fb{width:2.5rem}.nav-text{margin-top:4.5rem!important;color:#fff!important;margin-left:1rem;margin-right:1rem;text-decoration:none;font-size:1.5rem}.nav-link{margin-top:4.5rem}.mtbva-title{text-align:center}.header-button{background-color:transparent!important;border:2px solid #fff!important;color:#fff!important}",""])},371:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"mtbva-header",props:["header-height","image","title","subtitle","button","buttonLink"]}},372:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-parallax",{attrs:{src:e.image,height:e.headerHeight}},[a("v-toolbar",{staticClass:"toolbar",attrs:{extended:"",absolute:""}},[a("router-link",{staticClass:"nav-link",attrs:{to:"blog"}},[a("img",{staticClass:"mtbva",attrs:{src:r(373)}})]),e._v(" "),a("router-link",{staticClass:"xxcva-link nav-link",attrs:{to:"blog"}},[a("img",{staticClass:"xxcva",attrs:{src:r(374),alt:"XXCVA"}})]),e._v(" "),a("v-spacer"),e._v(" "),a("router-link",{staticClass:"nav-text",attrs:{to:"/results"}},[e._v("\n        Results\n    ")]),e._v(" "),a("a",{staticClass:"nav-link",attrs:{href:"https://www.facebook.com/xxcva/"}},[a("img",{staticClass:"fb",attrs:{src:r(375)}})])],1),e._v(" "),a("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[a("h3",{staticClass:"white--text mtbva-title"},[e._v(e._s(e.title))]),e._v(" "),a("h5",{staticClass:"white--text mtbva-title"},[e._v(e._s(e.subtitle))]),e._v(" "),e.buttonLink?a("v-btn",{staticClass:"header-button",attrs:{raised:"",href:e.buttonLink}},[e._v("\n      "+e._s(e.button)+"\n    ")]):e._e()],1)],1)},n=[],i={render:a,staticRenderFns:n};t.a=i},373:function(e,t,r){e.exports=r.p+"mtbva.png"},374:function(e,t,r){e.exports=r.p+"XXCVA.jpg"},375:function(e,t,r){e.exports=r.p+"589924bbb44fa4e84071f87517704017.svg"},376:function(e,t,r){"use strict";function a(e){r(377)}Object.defineProperty(t,"__esModule",{value:!0});var n=r(379),i=r.n(n),s=r(380),o=r(92),l=a,u=o(i.a,s.a,l,null,null);t.default=u.exports},377:function(e,t,r){var a=r(378);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(93)("15026327",a,!0)},378:function(e,t,r){t=e.exports=r(63)(void 0),t.push([e.i,".yt-wrapper{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden}.yt-wrapper iframe{position:absolute;top:0;left:0;width:100%;height:100%}",""])},379:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"youtube",props:["src"]}},380:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"yt-wrapper"},[r("iframe",{attrs:{width:"100%",src:e.src,frameborder:"0",allowfullscreen:""}})])},n=[],i={render:a,staticRenderFns:n};t.a=i},381:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(382),n=r.n(a),i=r(383),s=r(92),o=s(n.a,i.a,null,null,null);t.default=o.exports},382:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"paragraph-with-links",props:["paragraph"]}},383:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"paragraph-with-links"},e._l(e.paragraph,function(t){return r("span",[t.url?r("a",{attrs:{href:t.url}},[e._v("\n      "+e._s(t.words)+"\n    ")]):r("span",[e._v("\n      "+e._s(t.words)+"\n    ")])])}))},n=[],i={render:a,staticRenderFns:n};t.a=i},384:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(385),n=r.n(a),i=r(386),s=r(92),o=s(n.a,i.a,null,null,null);t.default=o.exports},385:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"social-actions",props:["post"],data:function(){return{baseUrl:"http://bikeva.com/"}},methods:{facebookLink:function(e){return"http://www.facebook.com/share.php?u="+this.baseUrl+e.href},redditLink:function(e){return"http://www.reddit.com/submit?url="+this.baseUrl+e.href},twitterLink:function(e){return"http://twitter.com/home?status="+e.title+" "+this.baseUrl+e.href}}}},386:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-btn",{staticClass:"blue--text text--darken-4",attrs:{icon:"",href:e.facebookLink(e.post.href)}},[r("v-icon",{attrs:{medium:""}},[e._v("fa-facebook")])],1),e._v(" "),r("v-btn",{staticClass:"red--text",attrs:{icon:"",href:e.redditLink(e.post.href)}},[r("v-icon",{attrs:{medium:""}},[e._v("fa-reddit")])],1),e._v(" "),r("v-btn",{staticClass:"light-blue--text",attrs:{icon:"",href:e.twitterLink(e.post)}},[r("v-icon",{attrs:{medium:""}},[e._v("fa-twitter")])],1)],1)},n=[],i={render:a,staticRenderFns:n};t.a=i},387:function(e,t,r){"use strict";var a=r(388);t.posts=[{title:"Virginia's Blue Ridge Creature from Carvins Cove",subtitle:"Oct 2nd, 2016",promoParagraph:[{words:"The innagural year of Virginia's Blue Ridge Creature from Carvins Cove was a smashing success. We were even graced by the presence of the fantastic Mr. "},{words:"Jeremiah Bishop",url:"https://en.wikipedia.org/wiki/Jeremiah_Bishop"},{words:"who still managed to take first despite starting 3 minutes late."}],altUrl:"/results",altText:"View the Results.",youtubeSrc:"https://www.youtube.com/embed/656HZ2mYpc0",href:"/creature2016"},{title:"Full Site Relaunch!",subtitle:"The same pirates are still at it.",img:a,href:"/relaunch"},{title:"Virginia's Blue Ridge Creature from Carvins Cove",subtitle:"Oct 1st, 2017",promoParagraph:[{words:"Once again Virginia's Blue Ridge Creature from Carvins Cove was a resounding success. Special thanks to Debbie Inman, Renee Powers, Chris Lee, and all the wonderful staff who helped make the Creature come alive."}],altUrl:"/results",altText:"View the Results.",youtubeSrc:"https://www.youtube.com/embed/uO44Tt0woT8",href:"/creature2017"}]},388:function(e,t,r){e.exports=r.p+"rockymthi8.jpg"},398:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(399),i=a(n),s=r(387),o=a(s),l=r(407),u=a(l),c=r(408),p=a(c),d=r(409),f=a(d),h=r(410),g=a(h),m=r(411),v=a(m),b=r(412),w=a(b),_=r(413),k=a(_),y=r(414),x=a(y),C=r(415),j=a(C),P=r(416),R=a(P),M=r(417),S=a(M),O=r(418),A=a(O),B=r(419),F=a(B),L=r(420),V=a(L),H=r(421),T=a(H),W=r(422),X=a(W),E=r(423),U=a(E),$=r(424),D=a($),z=r(425),J=a(z),G=r(426),I=a(G),Y=o.default.posts[2];t.default={name:"creature2017",components:{BlogPost:i.default},data:function(){return{headerHeight:480,image:u.default,post:Y,content:[{p:[{words:"The view of Carvins Cove’s backside from Hollins University. Outdoor Trails, a terrific outdoor store in Daleville and Lynchburg, sponsored the free Saturday camping along with Hollins."}],img:p.default},{p:[{words:"The Woods Family are staunch supporters of all types of cycling in the Roanoke region. Virginia’s Blue Ridge Creature From Carvins Cove is fortunate to be able to use the Woods Family Heating and AC parking lot for post-race awards, and the Parkway Brewing Parking Lot Pub, with Get Bent IPA on hand to benefit Roanoke’s highly active IMBA chapter."}],img:f.default},{p:[{words:"The Parkway Parking Lot Pub is ready to serve thirsty 43 mile racers!"}],img:g.default},{p:[{words:"Amazing ride by #1 son Cole, his longest on any bike. 44 miles registered where it matters…Strava!"}],img:v.default},{p:[{words:"Awesome weather for mountain bikers to gather."}],img:w.default},{p:[{words:" Future Creatures!"}],img:k.default},{p:[{words:"Harrisonburg’s Scottie Pendleton, singlespeed winner, was taller than our photographer could handle. But he won the singlespeed regardless, on his first ever ride at Carvins Cove. Tommy Oravetz, runner up."}],img:x.default},{p:[{words:"Open class winner Roanoke’s Andrew Dunlap, center, had the ride of his year. Robbie Bruce 2nd (right) and Jeff Glenn."}],img:j.default},{p:[{words:"Women’s full podium. Roanoke’s 17 year old sensation Anna Sortore victorious (center) in likely her first ever 40+ mile ride. Susannah Cadawalder 2nd (right), Becku Barkett 3rd."}],img:R.default},{p:[{words:"Masters aged 45-54. First, Acie Hylton (center),  Roanoker Wake Fulp 2nd, Chris Pohowsky from Blacksburg 3rd."}],img:S.default},{p:[{words:"The man with the most amazing variety of  Strava ride locales, nationwide mountain biking trucker David Lachniet locked up the new Master 55+ competition. "}],img:A.default},{p:[{words:"Laura Hamm is amazing, and she rides with only one gear. Check her time in results to see just how so. First ever singlespeed woman in the XXC-VA Series. "}],img:F.default},{p:[{words:"Adam Stephens of Fayetteville, WV, wins the XXC-VA open title and Champion’s jersey, flanked by runner up Andrew Dunlap. Adam raced all 5 series events that took place in 2 different Virginias, and throughout the Blue Ridge and Shenandoah Valley."}],img:V.default},{p:[{words:"Adam Stephens feeling it!"}],img:T.default},{p:[{words:"Scottie Pendleton modeling the champion’s jersey of the singlespeed XXC-VA Series!"}],img:X.default},{p:[{words:"Wake Fulp repeats! The first 2-time XXC-VA Champion, Master 45+. Wake faced much tougher competition this year and came out a better rider as a result."}],img:U.default},{p:[{words:"Long haul mountain biker David Lachniet’s new custom bike shop on wheels."}],img:D.default},{p:[{words:"One-off bike rack system."}],img:J.default},{p:[{words:"Many thanks to Woods Family HVAC. We’ll see you again next year!"}],img:I.default},{youtubeSrc:Y.youtubeSrc}]}}}},399:function(e,t,r){"use strict";function a(e){r(400)}Object.defineProperty(t,"__esModule",{value:!0});var n=r(402),i=r.n(n),s=r(406),o=r(92),l=a,u=o(i.a,s.a,l,null,null);t.default=u.exports},400:function(e,t,r){var a=r(401);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(93)("eb67d1a4",a,!0)},401:function(e,t,r){t=e.exports=r(63)(void 0),t.push([e.i,".blog-img{width:100%!important}.blog-p{padding:1rem}.social-right{margin-top:-1rem;float:right}",""])},402:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(368),i=a(n),s=r(376),o=a(s),l=r(403),u=a(l),c=r(384),p=a(c),d=r(381),f=a(d);t.default={name:"blog-post",components:{MTBVAHeader:i.default,Youtube:o.default,RideWithGps:u.default,SocialActions:p.default,ParagraphWithLinks:f.default},props:["headerHeight","image","post","content"]}},403:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(404),n=r.n(a),i=r(405),s=r(92),o=s(n.a,i.a,null,null,null);t.default=o.exports},404:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ride-with-gps",props:["url"]}},405:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("iframe",{staticStyle:{width:"1px","min-width":"100%",border:"none"},attrs:{src:e.url,scrolling:"no"}})},n=[],i={render:a,staticRenderFns:n};t.a=i},406:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"blog-post"}},[r("m-t-b-v-a-header",{attrs:{"header-height":e.headerHeight,image:e.image,title:e.post.title}}),e._v(" "),r("v-content",[r("v-container",[r("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[r("v-card",[r("div",{staticClass:"blog-p subheading"},[r("span",[e._v(e._s(e.post.subtitle))]),e._v(" "),r("social-actions",{staticClass:"social-right",attrs:{post:e.post}})],1),e._v(" "),e._l(e.content,function(t){return r("div",[t.img?r("img",{staticClass:"blog-img",attrs:{src:t.img}}):e._e(),e._v(" "),t.p?r("paragraph-with-links",{staticClass:"blog-p",attrs:{paragraph:t.p}}):e._e(),e._v(" "),t.youtubeSrc?r("youtube",{attrs:{src:t.youtubeSrc}}):e._e(),e._v(" "),t.rwgps?r("ride-with-gps",{attrs:{src:t.rwgpsSrc}}):e._e()],1)})],2)],1)],1)],1)],1)},n=[],i={render:a,staticRenderFns:n};t.a=i},407:function(e,t,r){e.exports=r.p+"lumberjack.jpg"},408:function(e,t,r){e.exports=r.p+"fence.jpg"},409:function(e,t,r){e.exports=r.p+"woods-creature.jpg"},410:function(e,t,r){e.exports=r.p+"parkinglotpub.jpg"},411:function(e,t,r){e.exports=r.p+"uptosomethin.jpg"},412:function(e,t,r){e.exports=r.p+"gather.jpg"},413:function(e,t,r){e.exports=r.p+"future.jpg"},414:function(e,t,r){e.exports=r.p+"singlespeeds.jpg"},415:function(e,t,r){e.exports=r.p+"opens.jpg"},416:function(e,t,r){e.exports=r.p+"womens.jpg"},417:function(e,t,r){e.exports=r.p+"masters.jpg"},418:function(e,t,r){e.exports=r.p+"veterans.jpg"},419:function(e,t,r){e.exports=r.p+"laura.jpg"},420:function(e,t,r){e.exports=r.p+"xxcva-champs.jpg"},421:function(e,t,r){e.exports=r.p+"feelingit.jpg"},422:function(e,t,r){e.exports=r.p+"scottie-champ.jpg"},423:function(e,t,r){e.exports=r.p+"wake-champ.jpg"},424:function(e,t,r){e.exports=r.p+"truckyeah.jpg"},425:function(e,t,r){e.exports=r.p+"oneoff.jpg"},426:function(e,t,r){e.exports=r.p+"woods-sign.jpg"},427:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"creature-2017"}},[r("blog-post",{attrs:{"header-height":e.headerHeight,image:e.image,post:e.post,content:e.content}})],1)},n=[],i={render:a,staticRenderFns:n};t.a=i}});