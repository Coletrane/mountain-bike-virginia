webpackJsonp([6],{"+r8F":function(e,t,n){"use strict";function a(e){n("oftF"),n("3FS4")}var i=n("VtpU"),r=n("MXTL"),s=n("VU/8"),o=a,m=s(i.a,r.a,o,"data-v-ffbddf5c",null);t.a=m.exports},"00uS":function(e,t,n){"use strict";var a=n("gXwj");n.n(a);t.a={name:"mtbva-header",props:["header-height","image","title","subtitle","button","buttonLink"],data:function(){return{img:""+a.s3+a.s3StaticImg}},computed:{parallaxStyle:function(){return"\n        background-image: url("+this.image+");\n        height: "+this.headerHeight+"px;\n      "}}}},"0Mwl":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("gXwj"),i=(n.n(a),function(e,t,n,i){var r=[{name:"description",content:t},{name:"keywords",content:n},{name:"og:title",content:e},{name:"og:description",content:t},{name:"og:type",content:"website"}];if(i.route&&r.push({name:"og:url",content:a.baseUrl+"/"+i.route}),i.imgSrc||i.img){var s={name:"og:image"};i.imgSrc?s.content=a.s3+"/"+i.imgSrc:i.img&&(s.content=i.img),r.push(s)}return{title:e,meta:r}})},"3FS4":function(e,t,n){var a=n("ZGfQ");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("28198f53",a,!0)},"4y25":function(e,t,n){"use strict";var a=n("mvHQ"),i=n.n(a),r=n("oQRd"),s=n("+r8F"),o=n("gXwj"),m=(n.n(o),n("kOwo")),c=n("0Mwl"),l=""+o.s3+o.s3Pages+o.results+"/podium.png";t.a={name:"results",components:{MTBVAHeader:r.a,PostCard:s.a},head:function(){return Object(c.a)("Race Results","Results from races sanctioned by The Virginia Championship Commission","mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails, creature, carvins cove, douthat, middle mountain momma, ",{imgSrc:l})},data:function(){return{image:l,races:this.initRaces().reverse(),currentRace:this.initRaces().reverse()[0],headers:[{text:"Position",align:"center",sortable:!1,value:"position"},{text:"Name",align:"center",sortable:!1,value:"name"},{text:"Time",align:"center",sortable:!1,value:"time"}]}},methods:{initRaces:function(){var e=JSON.parse(i()(m.a));return e.forEach(function(e){e.results.classes.forEach(function(e){e.riders.forEach(function(e,t,n){e.position=t+1,e.value=!1})})}),e},divide:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(e.slice(n,n+2));return t}}}},"7cH7":function(e,t,n){"use strict";function a(e){n("X5aZ")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("4y25"),r=n("IF7j"),s=n("VU/8"),o=a,m=s(i.a,r.a,o,null,null);t.default=m.exports},"Dzz+":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"img[data-v-ffbddf5c]{width:100%}.link[data-v-ffbddf5c]{cursor:pointer}",""])},HinN:function(e,t,n){var a=n("ivTa");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("58387172",a,!0)},IF7j:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("m-t-b-v-a-header",{attrs:{"header-height":480,image:e.image}}),n("v-content",[n("v-container",[n("post-card",[n("div",{attrs:{slot:"top"},slot:"top"},[n("v-select",{attrs:{items:e.races,"item-text":"race",placeholder:e.currentRace.race,label:"Select",bottom:""},model:{value:e.currentRace,callback:function(t){e.currentRace=t},expression:"currentRace"}}),e._l(e.currentRace.results.classes,function(t){return n("div",[n("h5",{staticClass:"center clazz"},[e._v(e._s(t.name))]),n("v-data-table",{attrs:{headers:e.headers,items:t.riders,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",{staticClass:"center"},[e._v(e._s(t.item.position))]),n("td",{staticClass:"center"},[e._v(e._s(t.item.name))]),n("td",{staticClass:"center"},[e._v(e._s(t.item.time))])]}}])})],1)})],2)])],1)],1)],1)},i=[],r={render:a,staticRenderFns:i};t.a=r},MXTL:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"post-card"},[n("div",{staticClass:"post card card--hover"},[n("div",{staticClass:"card__text"},[e._t("top")],2),e._t("middle"),n("div",[e._t("bottom")],2),e.post?n("social-actions",{attrs:{post:e.post}}):e._e()],2)])},i=[],r={render:a,staticRenderFns:i};t.a=r},Mgj7:function(e,t,n){var a=n("ZT22");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("1d1be217",a,!0)},VtpU:function(e,t,n){"use strict";var a=n("ncmZ");t.a={name:"post-card",props:["post"],components:{SocialActions:a.a}}},W2nU:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function r(e){if(u===clearTimeout)return clearTimeout(e);if((u===a||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(e);try{return u(e)}catch(t){try{return u.call(null,e)}catch(t){return u.call(this,e)}}}function s(){h&&p&&(h=!1,p.length?f=p.concat(f):v=-1,f.length&&o())}function o(){if(!h){var e=i(s);h=!0;for(var t=f.length;t;){for(p=f,f=[];++v<t;)p&&p[v].run();v=-1,t=f.length}p=null,h=!1,r(e)}}function m(e,t){this.fun=e,this.array=t}function c(){}var l,u,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{u="function"==typeof clearTimeout?clearTimeout:a}catch(e){u=a}}();var p,f=[],h=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new m(e,t)),1!==f.length||h||i(o)},m.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},X5aZ:function(e,t,n){var a=n("cLHa");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("e87ef2d2",a,!0)},ZGfQ:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".post-card{margin:0!important;padding-top:24px;padding-top:1.5rem;padding-bottom:24px;padding-bottom:1.5rem}",""])},ZT22:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".header-wrapper{background-color:#000}.toolbar{background-color:transparent!important;margin-bottom:512px;margin-bottom:32rem}@media screen and (max-width:480px){.xxcva{display:none}}.xxcva{width:192px;width:12rem}.mtbva{width:128px;width:8rem}.xxcva-link{margin-left:16px;margin-left:1rem}.fb{width:40px;width:2.5rem}.nav-text{margin-top:72px!important;margin-top:4.5rem!important;color:#fff!important;margin-left:16px;margin-left:1rem;margin-right:16px;margin-right:1rem;text-decoration:none;font-size:24px;font-size:1.5rem}.nav-link{margin-top:72px;margin-top:4.5rem}.mtbva-title{text-align:center}.header-button{background-color:transparent!important;border:2px solid #fff!important;color:#fff!important}",""])},cLHa:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".clazz{margin-bottom:0!important;margin-top:16px;margin-top:1rem;padding-left:6%}.post{margin:auto;padding:16px;padding:1rem;margin-top:24px;margin-top:1.5rem;margin-bottom:24px;margin-bottom:1.5rem}.center{text-align:center}.results-container{padding:16px;padding:1rem;background-color:#fff}",""])},gXwj:function(e,t){var n=["results","first-ride-2018","dody-ridge-run-fall-2017","spec-mines-oct-29-2017","pivot-switchblade-review","creature-2017-recap","relaunch","creature-2016"],a={};n.forEach(function(e){a[e]=e}),n.forEach(function(e,t,n){n[t]="/"+e}),n.unshift("/");var i={};n.forEach(function(e){i[e]=""}),i["/"]="foliage.png",i[a.results]="podium.png",i[a.relaunch]="rockymthi8.jpg",i[a["creature-2017-recap"]]="lumberjack.jpg",i[a["pivot-switchblade-review"]]="IMG_3009.jpg",i[a["spec-mines-oct-29-2017"]]="IMG_2795.jpg",i[a["first-ride-2018"]]="classic-shot-2018.jpg";e.exports={results:"results",firstRide2018:"first-ride-2018",dodyRidgeRunFall2017:"dody-ridge-run-fall-2017",specMines29Oct17:"spec-mines-oct-29-2017",pivotSwitchbladeReview:"pivot-switchblade-review",creature2017Recap:"creature-2017-recap",relaunch:"relaunch",creature2016:"creature-2016",appRoutes:n,appRoutesObj:a,imgRoutes:i,s3:"http://d2i660bt0ywr9a.cloudfront.net",s3StaticImg:"/static/img/",s3Pages:"/pages/",baseUrl:"http://bikeva.com"}},hOW6:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"social"},[n("v-btn",{staticClass:"blue--text text--darken-4 social-button",attrs:{icon:"",href:e.facebookLink}},[n("v-icon",{attrs:{medium:""}},[e._v("fa-facebook")])],1),n("v-btn",{staticClass:"red--text social-button",attrs:{icon:"",href:e.redditLink}},[n("v-icon",{attrs:{medium:""}},[e._v("fa-reddit")])],1),n("v-btn",{staticClass:"light-blue--text social-button",attrs:{icon:"",href:e.twitterLink}},[n("v-icon",{attrs:{medium:""}},[e._v("fa-twitter")])],1)],1)},i=[],r={render:a,staticRenderFns:i};t.a=r},ivTa:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"@media screen and (max-width:600px){.social-button{margin:0!important;width:2rem!important}.icon{font-size:1.5rem!important}}",""])},kOwo:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=[{race:"Creature From Carvins Cove 2017",results:{classes:[{name:"XXC Men",riders:[{name:"Andrew Dunlap",time:"4:09"},{name:"Robbie Bruce",time:"4:09"},{name:"Jeffery Glenn",time:"4:25"},{name:"Derek Dotson",time:"4:27"},{name:"Alan Dyer",time:"4:28"},{name:"Jeff Cheng",time:"4:51"},{name:"Reid Bailey",time:"4:58"},{name:"Joshua Cave",time:"4:59"},{name:"Chris Blankenship",time:"5:05"},{name:"David Mccurdy",time:"5:07"},{name:"Jeff Morris",time:"5:29"},{name:"Scott Horner",time:"5:30"},{name:"Roy Pruett",time:"5:33"},{name:"Michael Cummings",time:"5:42"},{name:"Derek Johnson",time:"5:46"},{name:"Daniel Blankenship",time:"5:56"},{name:"Cole Inman",time:"5:57"},{name:"Sebastian Suppes",time:"6:27"},{name:"Dan Richardson",time:"6:27"},{name:"Andrew Burton",time:"6:29"},{name:"Carlo Dy",time:"7:42"},{name:"Phillip Mitchell",time:"7:42"}]},{name:"XXC Master Men 45-55",riders:[{name:"Acie Hylton",time:"4:11"},{name:"Wake Fulp",time:"4:21"},{name:"Chris Powhosky",time:"4:36"},{name:"Ronny Angell",time:"4:44"},{name:"Steve Schumaker",time:"4:52"},{name:"Daniel Hockenberger",time:"5:06"},{name:"Charles Dye",time:"5:11"},{name:"Scott Ramsey",time:"5:17"},{name:"Jamison Baker",time:"5:18"},{name:"Paul Sullivan",time:"5:21"},{name:"Pierson Hotchkiss",time:"5:30"},{name:"Rob Issem",time:"5:41"},{name:"John McDowell",time:"5:47"},{name:"Brian Bond",time:"6:00"},{name:"Todd Hoge",time:"6:13"},{name:"Mike Meadows",time:"6:29"},{name:"Rob Odenwelder",time:"6:34"},{name:"Jeff Baker",time:"7:08"}]},{name:"XXC Veteran Men 55+",riders:[{name:"David Lanchlet",time:"5:49"}]},{name:"XXC Women",riders:[{name:"Anna Sortore",time:"5:26"},{name:"Susannah Cadwalader",time:"5:36"},{name:"Becky Barkett",time:"6:06"},{name:"Natalie Morris",time:"6:34"}]},{name:"XXC Singlespeed",riders:[{name:"Scottie Pendeleton",time:"4:30"},{name:"Tommy Oravetz",time:"4:34"},{name:"Shannon Willis",time:"4:39"},{name:"Laura Hamm",time:"4:41"},{name:"Eric Sauer",time:"4:41:02"},{name:"Benjamin Crandell",time:"4:44"},{name:"Bryan Carpenter",time:"4:45"},{name:"Dave Williams",time:"4:54"},{name:"Gabor Szilagyi",time:"5:25"}]}]}},{race:"Creature From Carvins Cove 2016",results:{classes:[{name:"XXC Men",riders:[{name:"Jeremiah Bishop",time:"4:04"},{name:"Adam Williams",time:"4:24"},{name:"Alan Dyer",time:"4:30"},{name:"Adam Stephens",time:"4:48"},{name:"Charlie Ornsby",time:"4:48"},{name:"Jackson Hotchkiss",time:"4:48"},{name:"Ryan Miracle",time:"4:53"},{name:"Ben Klimas",time:"4:58"},{name:"Dave Williams",time:"5:02"},{name:"Gary Carrier",time:"5:04"},{name:"Sean Keefe",time:"5:06"},{name:"Jeff Jennings",time:"5:11"},{name:"John Compton",time:"5:12"},{name:"Jeff Cheng",time:"5:14"},{name:"Bradley Bayne",time:"5:14"},{name:"Joshua Cave",time:"5:18"},{name:"Carter Teague",time:"5:22"},{name:"Ray Crowder",time:"5:23"},{name:"Corey Heitz",time:"5:24"},{name:"Jeffery Glenn",time:"5:54"},{name:"Simon Rice",time:"5:54"},{name:"Kyle Little",time:"6:02"},{name:"Drew Duke",time:"6:03"},{name:"Georg Kaufman",time:"5:22"},{name:"Billy Miller",time:"5:23"},{name:"Robbie Bruce",time:"6:18"},{name:"Brian Poston",time:"6:23"},{name:"Andrew Burton",time:"6:26"},{name:"Jonas Malever",time:"6:29"},{name:"Benjamin Martin",time:"6:34"}]},{name:"XXC Master Men 45+",riders:[{name:"Wake Fulp",time:"4:38"},{name:"Rob Issem",time:"4:49"},{name:"Chris Pohowsky",time:"4:53"},{name:"Jon Gaudio",time:"4:53"},{name:"Charles Dye",time:"5:19"},{name:"John Lewis",time:"6:02"},{name:"Mike Meadows",time:"6:04"},{name:"David Phlegar",time:"6:06"},{name:"Michael Comer",time:"6:21"},{name:"Martin Piedl",time:"6:25"},{name:"Pierson Hotchkiss",time:"6:30"},{name:"Paul Sullivan",time:"6:30"},{name:"Gibson Barbee",time:"6:33"},{name:"Mark McCardell",time:"6:35"},{name:"Todd Hodge",time:"6:42"},{name:"Don Crisp",time:"6:44"},{name:"Rob Odenwelder",time:"6:53"},{name:"Steve Johnson",time:"6:54"}]},{name:"XXC Women",riders:[{name:"Laura Hamm",time:"4:46"},{name:"Lauren Cantwell",time:"5:24"},{name:"Christine Putnam",time:"5:55"},{name:"Sydney Compton",time:"6:02"},{name:"Sue George",time:"6:34"},{name:"Susannah Cadwalader",time:"6:35"},{name:"Mackenzie Prandi",time:"6:42"},{name:"Melissa Cooper",time:"7:11"}]},{name:"XXC Singlespeed",riders:[{name:"Bob Moss",time:"4:17:51"},{name:"Victor Guerara",time:"4:32:33"},{name:"Rich Dillen",time:"4:39:02"},{name:"Cliff Hatchett",time:"4:40:24"},{name:"Tommy Oravetz",time:"4:48:03"},{name:"Gabor Szilagyi",time:"4:50"},{name:"Michael Blankenship",time:"7:05"}]}]}}].reverse()},ncmZ:function(e,t,n){"use strict";function a(e){n("HinN")}var i=n("nqZV"),r=n("hOW6"),s=n("VU/8"),o=a,m=s(i.a,r.a,o,null,null);t.a=m.exports},nqZV:function(e,t,n){"use strict";(function(e){t.a={name:"social-actions",props:["post"],computed:{facebookLink:function(){return"http://www.facebook.com/share.php?u="+e.env.baseUrl+"/"+this.post.route},redditLink:function(){return"http://www.reddit.com/submit?url="+e.env.baseUrl+"/"+this.post.route},twitterLink:function(){return"http://twitter.com/home?status="+this.post.title+" "+this.baseUrl+"/"+this.post.route}}}}).call(t,n("W2nU"))},oQRd:function(e,t,n){"use strict";function a(e){n("Mgj7")}var i=n("00uS"),r=n("wEsp"),s=n("VU/8"),o=a,m=s(i.a,r.a,o,null,null);t.a=m.exports},oftF:function(e,t,n){var a=n("Dzz+");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("16e5bdfb",a,!0)},wEsp:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-parallax",{staticClass:"header-wrapper",attrs:{src:e.image,height:e.headerHeight}},[n("v-toolbar",{staticClass:"toolbar",attrs:{extended:"",absolute:""}},[n("nuxt-link",{staticClass:"nav-link",attrs:{to:"/"}},[n("img",{staticClass:"mtbva",attrs:{src:e.img+"mtbva.png"}})]),n("nuxt-link",{staticClass:"xxcva-link nav-link",attrs:{to:"/"}},[n("img",{staticClass:"xxcva",attrs:{src:e.img+"XXCVA.jpg",alt:"XXCVA"}})]),n("v-spacer"),n("nuxt-link",{staticClass:"nav-text",attrs:{to:"/results"}},[e._v("\n      Results\n    ")]),n("a",{staticClass:"nav-link",attrs:{href:"https://www.facebook.com/xxcva/"}},[n("img",{staticClass:"fb",attrs:{src:e.img+"fb.svg"}})])],1),n("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[n("h3",{staticClass:"white--text mtbva-title"},[e._v(e._s(e.title))]),n("h5",{staticClass:"white--text mtbva-title"},[e._v(e._s(e.subtitle))]),e.buttonLink?n("v-btn",{staticClass:"header-button",attrs:{raised:"",href:e.buttonLink}},[e._v("\n      "+e._s(e.button)+"\n    ")]):e._e()],1)],1)},i=[],r={render:a,staticRenderFns:i};t.a=r}});
//# sourceMappingURL=results.a16163d66bb1469d5ba0.js.map