webpackJsonp([4],{"+r8F":function(t,i,e){"use strict";var s=e("LmEA"),a=e("p1aq"),r=!1;var n=function(t){r||(e("PX2a"),e("oVly"))},o=e("K60R")(s.a,a.a,!1,n,"data-v-f3c9cfaa",null);o.options.__file="components/PostCard.vue",i.a=o.exports},"/OxS":function(t,i,e){"use strict";var s=function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"author-container",class:this.inline?"":"float"},[i("a",{attrs:{href:this.author.fbUrl}},[i("img",{staticClass:"author-img",attrs:{src:this.author.imgUrl,alt:"author"}}),i("div",[this._v(this._s(this.author.name))])])])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};i.a=a},"0Mwl":function(t,i,e){"use strict";e.d(i,"a",function(){return a});var s=e("gXwj"),a=(e.n(s),function(t,i,e,a){var r=[{name:"description",content:i},{name:"keywords",content:e},{name:"og:title",content:t},{name:"og:description",content:i},{name:"og:type",content:"website"}];if(a.route&&r.push({name:"og:url",content:s.baseUrl+"/"+a.route}),a.imgSrc||a.img){var n={name:"og:image"};a.imgSrc?n.content=s.s3+"/"+a.imgSrc:a.img&&(n.content=a.img),r.push(n)}return{title:t,meta:r}})},"6QH1":function(t,i,e){"use strict";i.a={name:"ride-with-gps",props:["url"]}},"8VPi":function(t,i,e){(t.exports=e("YHym")(!1)).push([t.i,"@media screen and (max-width:600px){.social-button{margin:0!important;width:2rem!important}.icon{font-size:1.5rem!important}}",""])},Fpmm:function(t,i,e){"use strict";i.a={name:"author",props:["author","inline"]}},H64U:function(t,i,e){"use strict";(function(t){i.a={name:"social-actions",props:["post"],computed:{facebookLink:function(){return"http://www.facebook.com/share.php?u="+t.env.baseUrl+"/"+this.post.route},redditLink:function(){return"http://www.reddit.com/submit?url="+t.env.baseUrl+"/"+this.post.route},twitterLink:function(){return"http://twitter.com/home?status="+this.post.title+" "+this.baseUrl+"/"+this.post.route}}}}).call(i,e("W2nU"))},K0LZ:function(t,i,e){var s=e("MDqJ");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("bf5f98d8",s,!1)},LmEA:function(t,i,e){"use strict";var s=e("ncmZ");i.a={name:"post-card",props:["post"],components:{SocialActions:s.a}}},MDqJ:function(t,i,e){(t.exports=e("YHym")(!1)).push([t.i,"@media screen and (min-width:600px){.container{max-width:1350px!important;padding-left:30px;padding-right:30px}}@media screen and (max-width:600px){h6{font-size:20px!important}}.blog-img{width:100%!important}.blog-img-portrait{width:50%!important;display:block;margin:auto}.blog-p{padding:16px;padding:1rem}",""])},MpS3:function(t,i,e){"use strict";e.d(i,"a",function(){return o});var s=e("gXwj"),a=(e.n(s),{name:"Cole Inman",imgUrl:s.s3+"/static/img/cole.jpg",fbUrl:"https://www.facebook.com/uhmcole"}),r={name:"Kyle Inman",imgUrl:s.s3+"/static/img/kyle.jpg",fbUrl:"https://www.facebook.com/kylnman"},n={name:"Corey Heitz",imgUrl:s.s3+"/static/img/corey.jpg",fbUrl:"https://www.facebook.com/corey.heitz"},o={};o.firstRide2018={title:"28th Annual First Ride O' The New Year",subtitle:"The coldest year on record.",img:s.s3+"/pages/first-ride-2018/classic-shot-2018.jpg",route:s.firstRide2018,author:n},o.dodyRidgeRunFall2017={title:"Video: Dody Ridge Run, Fall 2017",subtitle:"Don't call her Doddie.",ytSrc:"https://www.youtube.com/embed/5cIs1e8Sos4",route:s.dodyRidgeRunFall2017,author:a},o.specMines29Oct17={title:"Blue Ridge Parkway tuckaway into Spec Mines",subtitle:"Wind, Rain, Cold. Pick Two.",img:s.s3+"/pages/spec-mines-oct-29-2017/IMG_3089.jpg",route:s.specMines29Oct17,author:a},o.pivotSwitchbladeReview={title:"Review: Pivot Switchblade",subtitle:"In a world obsessed with what discipline you ride, this bike doesn't have time for that.",img:s.s3+"/pages/pivot-switchblade-review/IMG_3009.jpg",route:s.pivotSwitchbladeReview,author:a},o.creature2017Recap={title:"Virginia's Blue Ridge Creature from Carvins Cove",subtitle:"Oct 1st, 2017",altText:"View the Results.",ytSrc:"https://www.youtube.com/embed/uO44Tt0woT8",route:s.creature2017Recap,author:r},o.relaunch={title:"Full Site Relaunch!",subtitle:"The same pirates are still at it.",img:s.s3+"/pages/relaunch/rockymthi8.jpg",route:"/",author:a},o.creature2016={title:"Virginia's Blue Ridge Creature from Carvins Cove",subtitle:"Oct 2nd, 2016",altText:"View the Results.",ytSrc:"https://www.youtube.com/embed/i5Lxb4wtuCs",route:"/",author:r}},NBrS:function(t,i,e){"use strict";i.a={name:"youtube",props:["src"],data:function(){return{url:""}},mounted:function(){this.url=this.src}}},NWaD:function(t,i,e){(t.exports=e("YHym")(!1)).push([t.i,".author-container{width:40%;text-align:center;padding-top:19.2px;padding-top:1.2rem;max-width:180px}.float{float:left}.author-img{border-radius:50%;width:50%}",""])},PX2a:function(t,i,e){var s=e("fjYC");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("11765b1f",s,!1)},RLW5:function(t,i,e){"use strict";var s=function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("blog-post",{attrs:{"header-height":480,image:this.img+"lumberjack.jpg",post:this.post}},[i("div",{attrs:{slot:"content"},slot:"content"},[i("div",[i("img",{staticClass:"blog-img",attrs:{src:this.img+"fence.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          The view of Carvins Cove’s backside from Hollins University. Outdoor Trails, a terrific outdoor store in\n          Daleville and Lynchburg, sponsored the free Saturday camping along with Hollins.\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"woods-creature.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          The Woods Family are staunch supporters of all types of cycling in the Roanoke region. Virginia’s Blue Ridge\n          Creature From Carvins Cove is fortunate to be able to use the Woods Family Heating and AC parking lot for\n          post-race awards, and the Parkway Brewing Parking Lot Pub, with Get Bent IPA on hand to benefit Roanoke’s\n          highly active IMBA chapter.\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"parkinglotpub.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          The Parkway Parking Lot Pub is ready to serve thirsty 44 mile racers!\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"uptosomethin.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          Amazing ride by #1 son Cole, his longest on any bike. 44 miles registered where it matters…Strava!\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"gather.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          Awesome weather for mountain bikers to gather.\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"future.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          Future Creatures!\n        ")])]),this.showPgOne?i("div",[i("img",{staticClass:"blog-img",attrs:{src:this.img+"singlespeeds.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          Harrisonburg’s Scottie Pendleton, singlespeed winner, was taller than our photographer could handle. But he\n          won the singlespeed regardless, on his first ever ride at Carvins Cove. Tommy Oravetz, runner up.\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"opens.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          Open class winner Roanoke’s Andrew Dunlap, center, had the ride of his year. Robbie Bruce 2nd (right) and\n          Jeff Glenn.\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"womens.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          Women’s full podium. Roanoke’s 17 year old sensation Anna Sortore victorious (center) in likely her first\n          ever 40+ mile ride. Susannah Cadawalder 2nd (right), Becku Barkett 3rd.\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"masters.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          Masters aged 45-54. First, Acie Hylton (center), Roanoker Wake Fulp 2nd, Chris Pohowsky from Blacksburg 3rd.\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"veterans.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          The man with the most amazing variety of Strava ride locales, nationwide mountain biking trucker David\n          Lachniet locked up the new Master 55+ competition.\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"laura.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          Laura Hamm is amazing, and she rides with only one gear. Check her time in results to see just how so. First\n          ever singlespeed woman in the XXC-VA Series.\n        ")])]):this._e(),this.showPgTwo?i("div",[i("img",{staticClass:"blog-img",attrs:{src:this.img+"xxcva-champs.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          Adam Stephens of Fayetteville, WV, wins the XXC-VA open title and Champion’s jersey, flanked by runner up\n          Andrew Dunlap. Adam raced all 5 series events that took place in 2 different Virginias, and throughout the\n          Blue Ridge and Shenandoah Valley.\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"feelingit.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          Adam Stephens feeling it!\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"scottie-champ.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          Scottie Pendleton modeling the champion’s jersey of the singlespeed XXC-VA Series!\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"wake-champ.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          Wake Fulp repeats! The first 2-time XXC-VA Champion, Master 45+. Wake faced much tougher competition this\n          year and came out a better rider as a result.\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"truckyeah.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          Long haul mountain biker David Lachniet’s new custom bike shop on wheels.\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"oneoff.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          One-off bike rack system.\n        ")]),i("img",{staticClass:"blog-img",attrs:{src:this.img+"woods-sign.jpg"}}),i("div",{staticClass:"blog-p"},[this._v("\n          Many thanks to Woods Family HVAC. We’ll see you again next year!\n        ")]),i("youtube",{attrs:{src:this.post.ytSrc}})],1):this._e()])])],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};i.a=a},"SV+H":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("ynLX"),a=e("RLW5"),r=e("K60R")(s.a,a.a,!1,null,null,null);r.options.__file="pages/creature-2017-recap.vue",i.default=r.exports},TDze:function(t,i,e){"use strict";var s=function(){var t=this.$createElement;return(this._self._c||t)("iframe",{staticStyle:{width:"1px","min-width":"100%",border:"none"},attrs:{src:this.url,scrolling:"no"}})};s._withStripped=!0;var a={render:s,staticRenderFns:[]};i.a=a},"UF+R":function(t,i,e){"use strict";var s=e("NBrS"),a=e("mnof"),r=!1;var n=function(t){r||e("ac2B")},o=e("K60R")(s.a,a.a,!1,n,null,null);o.options.__file="components/Youtube.vue",i.a=o.exports},ZwX6:function(t,i,e){"use strict";var s=function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"social"},[i("v-btn",{staticClass:"blue--text text--darken-4 social-button",attrs:{icon:"",href:this.facebookLink}},[i("v-icon",{attrs:{medium:""}},[this._v("fa-facebook")])],1),i("v-btn",{staticClass:"red--text social-button",attrs:{icon:"",href:this.redditLink}},[i("v-icon",{attrs:{medium:""}},[this._v("fa-reddit")])],1),i("v-btn",{staticClass:"light-blue--text social-button",attrs:{icon:"",href:this.twitterLink}},[i("v-icon",{attrs:{medium:""}},[this._v("fa-twitter")])],1)],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};i.a=a},aTd5:function(t,i,e){"use strict";var s=function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"blog-post"},[i("m-t-b-v-a-header",{attrs:{"header-height":this.headerHeight,image:this.image,title:this.post.title}}),i("v-content",[i("v-container",[i("post-card",{attrs:{post:this.post}},[i("div",{attrs:{slot:"top"},slot:"top"},[i("div",{staticClass:"blog-p subheading"},[(this.inlineAuthor,i("div",[i("h6",[this._v(this._s(this.post.subtitle))]),i("author",{attrs:{author:this.post.author,inline:this.inlineAuthor}})],1))])]),i("div",{attrs:{slot:"middle"},slot:"middle"},[this._t("content")],2)])],1)],1)],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};i.a=a},ac2B:function(t,i,e){var s=e("jtPA");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("6a952acc",s,!1)},b9Nt:function(t,i,e){(t.exports=e("YHym")(!1)).push([t.i,".post-card{margin:0!important;padding-top:24px;padding-top:1.5rem;padding-bottom:24px;padding-bottom:1.5rem}",""])},cfQ9:function(t,i,e){var s=e("8VPi");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("1d98e826",s,!1)},"d3/z":function(t,i,e){"use strict";var s=function(){var t=this.$createElement,i=this._self._c||t;return i("v-parallax",{staticClass:"header-wrapper",attrs:{src:this.image,height:this.headerHeight}},[i("v-toolbar",{staticClass:"toolbar",attrs:{extended:"",absolute:"","scroll-off-screen":"","scroll-target":"#main-content"}},[i("nuxt-link",{staticClass:"nav-link",attrs:{to:"/"}},[i("img",{staticClass:"mtbva",attrs:{src:this.img+"mtbva.png"}})]),i("nuxt-link",{staticClass:"xxcva-link nav-link",attrs:{to:"/"}},[i("img",{staticClass:"xxcva",attrs:{src:this.img+"XXCVA.jpg",alt:"XXCVA"}})]),i("v-spacer"),i("nuxt-link",{staticClass:"nav-text",attrs:{to:"/results"}},[this._v("\n      Results\n    ")]),i("a",{staticClass:"nav-link",attrs:{href:"https://www.facebook.com/xxcva/"}},[i("img",{staticClass:"fb",attrs:{src:this.img+"fb.svg"}})])],1),i("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[i("h3",{staticClass:"white--text mtbva-title"},[this._v(this._s(this.title))]),i("h5",{staticClass:"white--text mtbva-title"},[this._v(this._s(this.subtitle))]),this.buttonLink?i("v-btn",{staticClass:"header-button",attrs:{raised:"",href:this.buttonLink}},[this._v("\n      "+this._s(this.button)+"\n    ")]):this._e()],1)],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};i.a=a},"f/Te":function(t,i,e){var s=e("NWaD");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("6e091d8a",s,!1)},fjYC:function(t,i,e){(t.exports=e("YHym")(!1)).push([t.i,"img[data-v-f3c9cfaa]{width:100%}.link[data-v-f3c9cfaa]{cursor:pointer}",""])},gXwj:function(t,i){var e="first-ride-2018",s="dody-ridge-run-fall-2017",a="spec-mines-oct-29-2017",r="pivot-switchblade-review",n="creature-2017-recap",o="relaunch",c="creature-2016",l=["results",e,s,a,r,n,o,c],u={};l.forEach(function(t){u[t]=t}),l.forEach(function(t,i,e){e[i]="/"+t}),l.unshift("/");var h={};l.forEach(function(t){h[t]=""}),h["/"]="foliage.png",h[u.results]="podium.png",h[u[o]]="rockymthi8.jpg",h[u[n]]="lumberjack.jpg",h[u[r]]="IMG_3009.jpg",h[u[a]]="IMG_2795.jpg",h[u[e]]="classic-shot-2018.jpg";t.exports={results:"results",firstRide2018:e,dodyRidgeRunFall2017:s,specMines29Oct17:a,pivotSwitchbladeReview:r,creature2017Recap:n,relaunch:o,creature2016:c,appRoutes:l,appRoutesObj:u,imgRoutes:h,s3:"http://d2i660bt0ywr9a.cloudfront.net",s3StaticImg:"/static/img/",s3Pages:"/pages/",baseUrl:"http://bikeva.com"}},gsXG:function(t,i,e){var s=e("o6T8");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("60465dca",s,!1)},jtPA:function(t,i,e){(t.exports=e("YHym")(!1)).push([t.i,".yt-wrapper{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden}.yt-wrapper iframe{position:absolute;top:0;left:0;width:100%;height:100%}",""])},k2Wg:function(t,i,e){"use strict";var s=e("oQRd"),a=e("UF+R"),r=e("+r8F"),n=e("wKWP"),o=e("ncmZ"),c=e("nKPD");i.a={name:"blog-post",components:{MTBVAHeader:s.a,Youtube:a.a,PostCard:r.a,RideWithGps:n.a,SocialActions:o.a,Author:c.a},props:["headerHeight","image","post","inlineAuthor"]}},mnof:function(t,i,e){"use strict";var s=function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"yt-wrapper"},[i("iframe",{attrs:{width:"100%",src:this.src,frameborder:"0",allowfullscreen:""}})])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};i.a=a},nKPD:function(t,i,e){"use strict";var s=e("Fpmm"),a=e("/OxS"),r=!1;var n=function(t){r||e("f/Te")},o=e("K60R")(s.a,a.a,!1,n,null,null);o.options.__file="components/Author.vue",i.a=o.exports},ncmZ:function(t,i,e){"use strict";var s=e("H64U"),a=e("ZwX6"),r=!1;var n=function(t){r||e("cfQ9")},o=e("K60R")(s.a,a.a,!1,n,null,null);o.options.__file="components/SocialActions.vue",i.a=o.exports},o6T8:function(t,i,e){(t.exports=e("YHym")(!1)).push([t.i,".header-wrapper{background-color:#000}.toolbar{background-color:transparent!important;margin-bottom:512px;margin-bottom:32rem}.toolbar-solid{background-color:#fff!important;opacity:.8}@media screen and (max-width:480px){.xxcva{display:none}}.xxcva{width:192px;width:12rem}.mtbva{width:128px;width:8rem}.xxcva-link{margin-left:16px;margin-left:1rem}.fb{width:40px;width:2.5rem}.nav-text{margin-top:72px!important;margin-top:4.5rem!important;color:#fff!important;margin-left:16px;margin-left:1rem;margin-right:16px;margin-right:1rem;text-decoration:none;font-size:24px;font-size:1.5rem}.nav-link{margin-top:72px;margin-top:4.5rem}.mtbva-title{text-align:center}.header-button{background-color:transparent!important;border:2px solid #fff!important;color:#fff!important}",""])},oQRd:function(t,i,e){"use strict";var s=e("qefc"),a=e("d3/z"),r=!1;var n=function(t){r||e("gsXG")},o=e("K60R")(s.a,a.a,!1,n,null,null);o.options.__file="components/MTBVAHeader.vue",i.a=o.exports},oVly:function(t,i,e){var s=e("b9Nt");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("c34357fe",s,!1)},p1aq:function(t,i,e){"use strict";var s=function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"post-card"},[i("div",{staticClass:"post card card--hover"},[i("div",{staticClass:"card__text"},[this._t("top")],2),this._t("middle"),i("div",[this._t("bottom")],2),this.post?i("social-actions",{attrs:{post:this.post}}):this._e()],2)])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};i.a=a},qefc:function(t,i,e){"use strict";var s=e("gXwj");e.n(s);i.a={name:"mtbva-header",props:["header-height","image","title","subtitle","button","buttonLink"],data:function(){return{img:""+s.s3+s.s3StaticImg}},computed:{parallaxStyle:function(){return"\n        background-image: url("+this.image+");\n        height: "+this.headerHeight+"px;\n      "}}}},rO9R:function(t,i,e){"use strict";var s=e("k2Wg"),a=e("aTd5"),r=!1;var n=function(t){r||e("K0LZ")},o=e("K60R")(s.a,a.a,!1,n,null,null);o.options.__file="components/BlogPost.vue",i.a=o.exports},wKWP:function(t,i,e){"use strict";var s=e("6QH1"),a=e("TDze"),r=e("K60R")(s.a,a.a,!1,null,null,null);r.options.__file="components/RideWithGps.vue",i.a=r.exports},ynLX:function(t,i,e){"use strict";var s=e("rO9R"),a=e("UF+R"),r=e("gXwj"),n=(e.n(r),e("MpS3")),o=e("0Mwl"),c=n.a.creature2017Recap;i.a={name:"creature-2017-recap",components:{BlogPost:s.a,Youtube:a.a},head:function(){return Object(o.a)("Creature from Carvin's Cove 2017","Results and pictures from the second annual race in Roanoke's fine Carvin's Cove","mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails, creature, carvins cove",c)},data:function(){return{img:""+r.s3+r.s3Pages+c.route+"/",post:c,showPgOne:!1,showPgTwo:!1}},methods:{handleScroll:function(){window.scrollY>3e3&&(this.showPgOne=!0),window.scrollY>6e3&&(this.showPgTwo=!0)}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}}}});