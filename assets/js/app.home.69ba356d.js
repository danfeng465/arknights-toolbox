(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app.home"],{"1a7d":function(t,e,a){},"6ca0":function(t,e,a){"use strict";a("f429")},bb51:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mdui-row mdui-center",staticStyle:{"max-width":"1012px"}},[a("div",{staticClass:"mdui-col-xs-12 mdui-typo"},[a("h1",{staticClass:"mdui-m-t-0"},[t._v(t._s(t.$t("app.title")))]),a("p",[t._v("Github: "),a("a",{attrs:{href:t.$root.githubRepo,target:"_blank"}},[t._v("arkntools/arknights-toolbox")]),t._v(" ("),a("a",{attrs:{href:t.$root.githubRepo+"/discussions",target:"_blank"}},[t._v("discussions")]),t._v(")")]),a("welcome"),a("h2",[t._v(t._s(t.$t("common.setting")))]),a("div",{staticClass:"no-sl"},[a("locale-select",{key:t.$root.localeSelectKey}),a("theme-select"),a("div",{staticClass:"mdui-m-b-2"},[a("mdui-switch",{model:{value:t.setting.rememberLastPage,callback:function(e){t.$set(t.setting,"rememberLastPage",e)},expression:"setting.rememberLastPage"}},[t._v(t._s(t.$t("app.setting.rememberLastPage")))])],1),a("div",{staticClass:"mdui-m-b-2"},[a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:["mdui-btn-raised mdui-color-pink-accent","mdui-color-indigo-a100 mdui-ripple-black"],expression:"[\n            'mdui-btn-raised mdui-color-pink-accent',\n            'mdui-color-indigo-a100 mdui-ripple-black',\n          ]"}],staticClass:"mdui-btn mdui-ripple mdui-m-r-1",on:{click:t.clearStorage}},[t._v(t._s(t.$t("app.setting.clearStorage")))]),a("i",{staticClass:"mdui-icon material-icons mdui-m-r-1 help no-sl",attrs:{"mdui-tooltip":"{content:'"+t.$t("app.setting.clearStorageTip")+"',position:'top'}"}},[t._v(t._s(t.$root.dark?"info":"info_outline"))]),t._v(t._s(t.$t("home.used"))+t._s(t.lsSize)+" ")]),a("div",[a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:["mdui-btn-raised mdui-color-pink-accent","mdui-color-indigo-a100 mdui-ripple-black"],expression:"[\n            'mdui-btn-raised mdui-color-pink-accent',\n            'mdui-color-indigo-a100 mdui-ripple-black',\n          ]"}],staticClass:"mdui-btn mdui-ripple mdui-m-r-1",attrs:{disabled:!t.checkNavigatorStorage()},on:{click:t.clearCaches}},[t._v(t._s(t.$t("app.setting.clearCaches")))]),a("i",{staticClass:"mdui-icon material-icons mdui-m-r-1 help no-sl",attrs:{"mdui-tooltip":"{content:'"+t.$t("app.setting.clearCachesTip")+"',position:'top'}"}},[t._v(t._s(t.$root.dark?"info":"info_outline"))]),t._v(t._s(t.$t("home.used"))+t._s(t.csSize)+" ")])],1),a("add-to-home-screen"),t.$root.localeCN?[a("h2",[t._v("主要功能")]),t._m(0)]:t.$root.localeTW?[a("h2",[t._v("主要功能")]),t._m(1)]:t._e(),a("h2",[t._v(t._s(t.$t("home.credits")))]),a("ul",[t._l(t.creditsList,(function(e,i){var s=e.name,r=e.type,n=e.url;return a("li",{key:i},[a("a",{attrs:{href:n,target:"_blank"}},[t._v(t._s(s))]),t._v("（"+t._s(r)+"） ")])})),t._m(2)],2),a("p",[a("a",{attrs:{href:"https://github.com/arkntools",target:"_blank"}},[t._v("组织")]),t._v("头像及本项目"),a("a",{attrs:{href:t.$root.githubRepo+"/tree/master/public/assets/icons",target:"_blank"}},[t._v("应用图标")]),t._v("由"),a("a",{attrs:{href:"https://www.pixiv.net/users/8745555",target:"_blank"}},[t._v("冬夏")]),t._v("绘制并授权使用")]),a("p",[t._v("本项目所使用的游戏资源（包括但不限于：游戏图片、文本原文或其转译版本等）仅用于更好地表现游戏资料、增强用户体验，其版权属于上海鹰角网络科技有限公司和其关联公司")]),a("h2",[t._v(t._s(t.$t("home.contributors")))])],2),a("div",{staticClass:"mdui-col-xs-12"},[a("contributor-list",{attrs:{title:"Developers",list:t.developers,"note-prop":"work",icon:"code"}})],1),a("div",{staticClass:"mdui-col-xs-12"},[a("contributor-list",{attrs:{title:"Translators",list:t.translators,"note-prop":"translation",icon:"g_translate"}})],1),a("div",{staticClass:"mdui-col-xs-12 mdui-typo"},[a("h2",[t._v(t._s(t.$t("home.changelog")))]),a("changelog")],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("公开招募计算 + 词条截图识别")]),a("li",[t._v("精英材料计算 + 干员材料预设 + 仓库截图识别 + 刷图规划")]),a("li",[t._v("干员升级计算")]),a("li",[t._v("基建技能筛选")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("公開招募計算 + 詞條截圖識別")]),a("li",[t._v("精英材料計算 + 幹員材料預設 + 倉庫截圖識別 + 材料獲取最優策略規劃")]),a("li",[t._v("幹員陞級計算")]),a("li",[t._v("基建技能篩選")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[t._v(" Wiki "),a("ul",[a("li",[t._v("CN & TW - "),a("a",{attrs:{href:"http://prts.wiki",target:"_blank"}},[t._v("PRTS Wiki")])]),a("li",[t._v("EN - "),a("a",{attrs:{href:"https://gamepress.gg/arknights/",target:"_blank"}},[t._v("GamePress")])]),a("li",[t._v("JP - "),a("a",{attrs:{href:"https://wiki.gamerclub.jp/anwiki/",target:"_blank"}},[t._v("GamerClub")])]),a("li",[t._v("KR - "),a("a",{attrs:{href:"https://namu.wiki/",target:"_blank"}},[t._v("Namu Wiki")])])])])}],r=a("b85c"),n=a("1da1"),o=a("5530"),l=(a("96cf"),a("4de4"),a("d3b7"),a("ddb0"),a("caad"),a("2532"),a("3ca3"),a("d81d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v(t._s(t.$t("welcome.texts.0"))),a("br"),t._v(t._s(t.$t("welcome.texts.1")))]),a("i18n",{attrs:{path:"welcome.texts.2"}},[a("a",{attrs:{href:t.$root.githubRepo+"/issues",target:"_blank"}},[t._v("issue")]),a("a",{attrs:{href:t.$root.githubRepo+"/discussions",target:"_blank"}},[t._v(t._s(t.$t("welcome.discussionArea")))])]),a("p",[t._v(t._s(t.$t("welcome.texts.3")))])],1)}),c=[],u=a("0c7c"),m={},d=Object(u["a"])(m,l,c,!1,null,null,null),p=d.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"localeSelect",attrs:{id:"lang-server-setting"}},[a("div",{staticClass:"mdui-m-b-2"},[a("label",[t._v("Language:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.$root.locale,expression:"$root.locale"}],attrs:{"mdui-select":""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.$root,"locale",e.target.multiple?a:a[0])}}},t._l(t.$root.locales,(function(e){return a("option",{key:e.short,domProps:{value:e.short}},[t._v(t._s(e.long))])})),0)]),a("div",{staticClass:"mdui-m-b-2",attrs:{id:"server-select"}},[a("label",[t._v("Server:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.$root.server,expression:"$root.server"}],attrs:{"mdui-select":""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.$root,"server",e.target.multiple?a:a[0])}}},t._l(t.$root.locales,(function(e){return a("option",{key:e.short,domProps:{value:e.short}},[t._v(t._s(e.short.toUpperCase()))])})),0)])])},v=[],_={name:"lang-server-setting",mounted:function(){this.$mutation(this.$refs.localeSelect)}},g=_,b=(a("6ca0"),Object(u["a"])(g,h,v,!1,null,null,null)),f=b.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mdui-m-b-2",attrs:{id:"theme-select"}},[a("table",{staticClass:"thin-table mdui-m-b-0"},[a("tbody",[a("tr",[a("td",{staticClass:"no-wrap"},[a("span",{staticClass:"inline-block mdui-m-r-2"},[t._v(t._s(t.$t("app.setting.appearance")))])]),a("td",t._l(t.$root.themeEnum,(function(e,i){return a("label",{key:i,staticClass:"mdui-radio mdui-p-l-3 mdui-m-r-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.$root.themeSetting,expression:"$root.themeSetting"}],attrs:{type:"radio",name:"theme-select"},domProps:{value:e,checked:t._q(t.$root.themeSetting,e)},on:{change:function(a){return t.$set(t.$root,"themeSetting",e)}}}),a("i",{staticClass:"mdui-radio-icon"}),t._v(" "+t._s(t.$t("app.setting.appearanceList."+i))+" ")])})),0)])])])])},$=[],C={name:"theme-select"},w=C,S=Object(u["a"])(w,k,$,!1,null,null,null),y=S.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v(t._s(t.$t("a2hs.title")))]),a("p",[t._v(t._s(t.$t("a2hs.explains.0")))]),a("p",[t._v(t._s(t.$t("a2hs.explains.1")))]),a("div",{staticClass:"mdui-panel mdui-panel-gapless",attrs:{"mdui-panel":""}},[a("div",{staticClass:"mdui-panel-item"},[a("div",{staticClass:"mdui-panel-item-header"},[a("div",{staticClass:"mdui-panel-item-title",staticStyle:{width:"auto"}},[t._v(t._s(t.$t("a2hs.guide.title")))]),a("i",{staticClass:"mdui-panel-item-arrow mdui-icon material-icons"},[t._v("keyboard_arrow_down")])]),a("div",{staticClass:"mdui-panel-item-body"},[a("h4",{staticClass:"mdui-m-t-1 h-ul"},[t._v("Chrome")]),a("button",{staticClass:"mdui-btn mdui-btn-raised mdui-ripple mdui-color-pink-accent mdui-m-b-2",attrs:{disabled:!1===t.$root.deferredPrompt},on:{click:t.$root.installPWA}},[t._v(t._s(t.$t("a2hs.guide.button")))]),a("p",[t._v(t._s(t.$t("a2hs.guide.buttonTip")))]),a("h4",{staticClass:"h-ul"},[t._v("Windows - Chrome")]),a("i18n",{attrs:{path:"a2hs.guide.windows",tag:"p"}},[a("i",{staticClass:"mdui-icon material-icons no-sl"},[t._v("more_vert")]),a("code",[t._v(t._s(t.$t("a2hs.guide.install",{name:"明日方舟工具箱"})))])]),a("h4",{staticClass:"h-ul"},[t._v("Android - Chrome")]),a("i18n",{attrs:{path:"a2hs.guide.android",tag:"p"}},[a("i",{staticClass:"mdui-icon material-icons no-sl"},[t._v("more_vert")]),a("code",[t._v(t._s(t.$t("common.a2hs")))])]),a("h4",{staticClass:"h-ul"},[t._v("iOS ≥ 11.3")]),a("i18n",{attrs:{path:"a2hs.guide.ios",tag:"p"}},[a("span",[a("i",{staticClass:"mdui-icon material-icons no-sl"},[t._v("crop_5_4")]),a("i",{staticClass:"mdui-icon material-icons no-sl",staticStyle:{"margin-left":"-24px","margin-top":"-20px"}},[t._v("arrow_upward")])]),a("code",[t._v(t._s(t.$t("common.a2hs")))])])],1)])])])},P=[],N={name:"add-to-home-screen"},z=N,L=Object(u["a"])(z,x,P,!1,null,null,null),O=L.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"changelog"}},[a("p",[t._v(t._s(t.$t("home.lastUpdateDate"))),a("code",[t._v(t._s(t.time))])]),t._l(t.first,(function(e){return a("div",{key:e.time},[a("h4",[t._v(t._s(e.time))]),a("ul",t._l(e.changes,(function(e,i){return a("li",{key:i,domProps:{innerHTML:t._s(e)}})})),0)])})),a("div",{staticClass:"mdui-panel mdui-panel-gapless",attrs:{"mdui-panel":""}},[a("div",{staticClass:"mdui-panel-item"},[a("div",{staticClass:"mdui-panel-item-header"},[a("div",{staticClass:"mdui-panel-item-title",staticStyle:{width:"auto"}},[t._v(t._s(t.$t("home.earlyChangelog")))]),a("i",{staticClass:"mdui-panel-item-arrow mdui-icon material-icons"},[t._v("keyboard_arrow_down")])]),a("div",{staticClass:"mdui-panel-item-body"},t._l(t.second,(function(e){return a("div",{key:e.time},[a("h4",[t._v(t._s(e.time))]),a("ul",t._l(e.changes,(function(e,i){return a("li",{key:i,domProps:{innerHTML:t._s(e)}})})),0)])})),0)])])],2)},j=[],A=(a("fb6a"),a("44fe")),E=a("7a3b"),T={name:"changelog",data:function(){return{time:A["a"],first:E.slice(0,5),second:E.slice(5)}}},W=T,D=Object(u["a"])(W,R,j,!1,null,null,null),G=D.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"mdui-list"},[t.title?a("li",{staticClass:"mdui-subheader-inset"},[t.icon?a("i",{staticClass:"mdui-icon material-icons"},[t._v(t._s(t.icon))]):t._e(),t._v(t._s(t.title))]):t._e(),t._l(t.list,(function(e){return a("a",{key:e.name,staticClass:"mdui-list-item mdui-ripple",class:{"cursor-unset":!e.url},attrs:{href:e.url,target:"_blank","data-note":t.getNote(e)}},[a("div",{staticClass:"mdui-list-item-avatar"},[a("img",{attrs:{src:e.avatar,crossorigin:"anonymous"}})]),a("div",{staticClass:"mdui-list-item-content"},[t._v(t._s(e.name))])])})),t._l(6,(function(t){return a("li",{key:"placeholder-"+t,staticClass:"mdui-list-placeholder mdui-p-x-1"})}))],2)},K=[],H=(a("a15b"),{name:"contributor-list",props:{title:{type:String,default:""},list:{type:Array,default:function(){return[]}},icon:{type:String,default:""},noteProp:{type:String,default:""}},methods:{openLink:function(t){var e=t.url;e&&window.open(e,"_blank")},getNote:function(t){return this.noteProp&&(t[this.noteProp]||[]).join(" ")||!1}}}),M=H,U=(a("e6bb"),Object(u["a"])(M,J,K,!1,null,"2b8a6177",null)),q=U.exports,Y=a("60bb"),B=a.n(Y),F=a("8fc5"),I=a("bba1");B.a.each(I["a"],(function(t,e){"url"in t?null===t.url&&delete t.url:t.url="https://github.com/".concat(e)}));var Q=function(t){return t.map((function(t){return I["a"][t]}))},V={developers:Q(I["b"]),translators:Q(I["c"])},X={name:"home",components:{Welcome:p,LocaleSelect:f,ThemeSelect:y,AddToHomeScreen:O,Changelog:G,ContributorList:q},data:function(){return Object(o["a"])(Object(o["a"])({lsSize:this.$t("home.calculating"),csSize:this.$t("home.calculating"),setting:this.$root.setting},V),{},{creditsList:[{name:"Kengxxiao/ArknightsGameData",type:"数据",url:"https://github.com/Kengxxiao/ArknightsGameData"},{name:"Dimbreath/ArknightsData",type:"数据",url:"https://github.com/Dimbreath/ArknightsData"},{name:"灰格猫",type:"起源",url:"https://github.com/graueneko"},{name:"PRTS Wiki",type:"干员、材料图片",url:"http://prts.wiki/"},{name:"企鹅物流数据统计",type:"掉落数据",url:"https://penguin-stats.io/"},{name:"材料获取最优策略",type:"思路",url:"https://bbs.nga.cn/read.php?tid=17507710"},{name:"OCR Space",type:"OCR",url:"https://ocr.space/"},{name:"JsonStorage",type:"数据同步",url:"https://jsonstorage.net/"}]})},methods:{checkNavigatorStorage:function(){return"storage"in navigator&&"estimate"in navigator.storage},clearStorage:function(){localStorage.clear(),this.$snackbar(this.$t("common.success")),this.lsSize=this.calcLsSize()},clearCaches:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,i,s,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("serviceWorker"in navigator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,caches.keys();case 4:return a=e.sent.filter((function(t){return B.a.includes(t,"runtime")})),e.next=7,Promise.all(a.map((function(t){return caches.open(t)})));case 7:i=e.sent,s=Object(r["a"])(i),e.prev=9,o=regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n.value,t.next=3,e.keys().then((function(t){return Promise.all(t.map((function(t){return e.delete(t)})))}));case 3:case"end":return t.stop()}}),t)})),s.s();case 12:if((n=s.n()).done){e.next=16;break}return e.delegateYield(o(),"t0",14);case 14:e.next=12;break;case 16:e.next=21;break;case 18:e.prev=18,e.t1=e["catch"](9),s.e(e.t1);case 21:return e.prev=21,s.f(),e.finish(21);case 24:return e.next=26,Promise.all(a.map((function(t){return caches.delete(t)})));case 26:return t.$snackbar(t.$t("common.success")),e.next=29,t.calcCsSize();case 29:t.csSize=e.sent;case 30:case"end":return e.stop()}}),e,null,[[9,18,21,24]])})))()},calcLsSize:function(){return this.$root.humanReadableSize(2*Object(F["a"])(JSON.stringify(localStorage)))},calcCsSize:function(){var t=this;return this.checkNavigatorStorage()?navigator.storage.estimate().then((function(e){var a=e.usage;return t.$root.humanReadableSize(a)})).catch((function(){return"N/A"})):Promise.resolve("N/A")}},activated:function(){var t=this;this.lsSize=this.calcLsSize(),this.calcCsSize().then((function(e){return t.csSize=e}))}},Z=X,tt=Object(u["a"])(Z,i,s,!1,null,null,null);e["default"]=tt.exports},e6bb:function(t,e,a){"use strict";a("1a7d")},f429:function(t,e,a){}}]);