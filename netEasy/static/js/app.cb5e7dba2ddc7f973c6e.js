webpackJsonp([7],{IcnI:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=s(n("7+uW")),i=s(n("NYxO")),o=s(n("mUbh")),u=s(n("ukYY")),c=s(n("UjVw"));s(n("mtWM"));r.default.use(i.default);var a=new i.default.Store({state:{isLogin:!1,curPage:"recommend",Chapter:"discover"},getters:c.default,actions:o.default,mutations:u.default});e.default=a},M93x:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("xJD8"),r=n.n(s),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view")],1)},staticRenderFns:[]},o=function(t){n("b851")},u=n("VU/8")(r.a,i,!1,o,null,null);e.default=u.exports},NHnr:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var r=s(n("7+uW")),i=(s(n("zNUS")),s(n("/ocq"))),o=s(n("YaEn")),u=s(n("IcnI"));r.default.config.productionTip=!1,r.default.use(i.default);var c=new i.default({routes:o.default});new r.default({router:c,store:u.default}).$mount("#app")},UjVw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={isLogin:function(t){return t.isLogin},getPage:function(t){return t.curPage},getChapter:function(t){return t.Chapter}}},YaEn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){return Promise.all([n.e(1),n.e(0)]).then(function(){return t(n("vkyI"),"home")}.bind(null,n)).catch(n.oe)},r=[{path:"/",component:function(t){return t&&t.__esModule?t:{default:t}}(n("M93x")).default,children:[{path:"/home",component:s},{path:"/discover",component:function(t){return Promise.all([n.e(0),n.e(5)]).then(function(){return t(n("PgGO"),"main")}.bind(null,n)).catch(n.oe)},children:[{path:"toplist",component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){return t(n("Xh7l"),"toplist")}.bind(null,n)).catch(n.oe)}},{path:"playlist",component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){return t(n("zJhx"),"playlist")}.bind(null,n)).catch(n.oe)}},{path:"djradio",component:function(t){return Promise.all([n.e(2),n.e(0)]).then(function(){return t(n("QHg+"),"djradio")}.bind(null,n)).catch(n.oe)}}]},{path:"",component:s}]}];e.default=r},b851:function(t,e){},mUbh:function(t,e,n){"use strict"},telf:function(t,e,n){"use strict";var s=function(t){return t&&t.__esModule?t:{default:t}}(n("woOf")),r=n("zNUS"),i=r.Random,o=[{title:"云音乐飙升榜",src:"src/assets/toplist/biaosheng.png"},{title:"云音乐新歌榜",src:"src/assets/toplist/xinge.png"},{title:"网易原创歌曲榜",src:"src/assets/toplist/yuanchuang.png"},{title:"云音乐热歌榜",src:"src/assets/toplist/rege.png"},{title:"云音乐电音榜",src:"src/assets/toplist/dianyin.jpg"},{title:"云音乐嘻哈榜",src:"src/assets/toplist/xiha.png"},{title:"云音乐ACG音乐榜",src:"src/assets/toplist/acg.png"},{title:"云音乐新电力榜",src:"src/assets/toplist/xindianli.png"},{title:"Beatport全球电子舞曲榜",src:"src/assets/toplist/beatport.jpg"},{title:"日本Oricon周榜",src:"src/assets/toplist/oricon.jpg"},{title:"云音乐古典音乐榜",src:"src/assets/toplist/gudian.png"},{title:"UK排行榜周榜",src:"src/assets/toplist/uk.jpg"},{title:"美国Billboard周榜",src:"src/assets/toplist/billboard.jpg"},{title:"法国 NRJ Vos Hits 周榜",src:"src/assets/toplist/NRJVH.jpg"},{title:"iTunes榜",src:"src/assets/toplist/itunes.jpg"},{title:"Hit FM Top榜",src:"src/assets/toplist/hitfmtop.jpg"},{title:"英国Q杂志中文版周榜",src:"src/assets/toplist/Qzazhi.jpg"},{title:"电竞音乐榜",src:"src/assets/toplist/dianjing.png"},{title:"KTV唛榜",src:"src/assets/toplist/KTV.jpg"},{title:"台湾Hito排行榜",src:"src/assets/toplist/hito.jpg"},{title:"中国TOP排行榜（港台榜）",src:"src/assets/toplist/chinaTopHK.jpg"},{title:"中国TOP排行榜（内地榜）",src:"src/assets/toplist/chinaTop.jpg"},{title:"香港电台中文歌曲龙虎榜",src:"src/assets/toplist/HKlonghu.jpg"},{title:"中国嘻哈榜",src:"src/assets/toplist/chinaxiha.jpg"}];r.mock("http://g.cn",{name:"@name","age|1-100":100,"level|1-10":10,"action|1-100":100,"followers|1-100":100,"following|1-100":100,color:"@color",img:i.image("30x30")}),r.mock("http://picSlider.cn",{"albums|10":[{link:"123",listen:"123",name:function(){return i.sentence(8,16)},artist:function(){return i.name()},src:function(){return i.image("100x100")}}]}),r.mock("http://picHot.cn",{"hots|8":[{src:function(){return i.image("140x140")},to:"/discover/playlist",count:function(){return i.natural(100,1e4)},text:function(){return i.csentence(10,20)}}]});var u={};u.songsTopRank=[],u.listData=[];for(var c=function(t){u.songsTopRank[t-1]={sortBy:function(){return t},src:function(){if(t<=3)return i.image("50x50")},songsName:function(){return i.csentence(4,10)},songsDesc:function(){return i.csentence(8,20)},isOld:function(){return i.boolean(0,1)},isUp:function(){return i.boolean(0,1)},rankChange:function(){return i.natural(1,50)},time:function(){return i.time("mm:ss")},singer:function(){return i.name()},isHover:!1}},a=1;a<101;a++)c(a);u.listData={title:o,headImg:"src/assets/toplist/biaosheng.png",addCount:function(){return i.natural(1,1e6)},shareCount:function(){return i.natural(1,1e4)},recommendCount:function(){return i.natural(1,1e5)},songsCount:100,playTimes:function(){return i.natural(1e8,1e9)},lastUpdate:function(){return i.date("MM月dd日")},updateTime:function(){return"("+i.csentence(4,5)+")"}};r.mock("http://toplist.cn",u);for(a=0;a<24;a++)u.listData={title:o[a].title,headImg:o[a].src,addCount:function(){return i.natural(1,1e6)},shareCount:function(){return i.natural(1,1e4)},recommendCount:function(){return i.natural(1,1e5)},songsCount:100,playTimes:function(){return i.natural(1e8,1e9)},lastUpdate:function(){return i.date("MM月dd日")},updateTime:function(){return"("+i.csentence(4,5)+")"}},r.mock("http://toplist.cn?key="+a,(0,s.default)({},u))},ukYY:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={setLoginIn:function(t){t.isLogin=!0},setLoginOut:function(t){t.isLogin=!1},setPage:function(t,e){t.curPage=e},setChapter:function(t,e){t.Chapter=e}}},xJD8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n("telf"),n("j1ja"),e.default={name:"app",mounted:function(){}}}},["NHnr"]);
//# sourceMappingURL=app.cb5e7dba2ddc7f973c6e.js.map