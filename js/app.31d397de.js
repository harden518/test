(function(e){function n(n){for(var c,r,u=n[0],f=n[1],i=n[2],d=0,s=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&s.push(o[r][0]),o[r]=0;for(c in f)Object.prototype.hasOwnProperty.call(f,c)&&(e[c]=f[c]);h&&h(n);while(s.length)s.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],c=!0,r=1;r<t.length;r++){var u=t[r];0!==o[u]&&(c=!1)}c&&(a.splice(n--,1),e=f(f.s=t[0]))}return e}var c={},r={app:0},o={app:0},a=[];function u(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-023fb097":"31b5fe2c","chunk-08aec464":"ae8268fa","chunk-0ef19dea":"985d2e85","chunk-19f1cf1d":"db5f6750","chunk-2591197c":"1bfaef36","chunk-2d0b724a":"af788416","chunk-5075ec7a":"15bad6f5","chunk-71e4acf2":"710ee591","chunk-3b394b8f":"3b193f9d","chunk-4c4460e6":"ae9b5e71","chunk-58aa5e30":"e82a1f68","chunk-5c325faf":"38f7ef2a","chunk-64ecf4ad":"cd8b42d8","chunk-67b5bd9c":"cc343d64","chunk-700dcf06":"41379e24","chunk-76054cf5":"e5a041e8","chunk-a408ad7a":"3d80a949","chunk-d8b77560":"11965e22","chunk-0f3fa249":"74f56795","chunk-681be756":"0636e79b"}[e]+".js"}function f(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(e){var n=[],t={"chunk-023fb097":1,"chunk-08aec464":1,"chunk-0ef19dea":1,"chunk-19f1cf1d":1,"chunk-2591197c":1,"chunk-5075ec7a":1,"chunk-71e4acf2":1,"chunk-3b394b8f":1,"chunk-4c4460e6":1,"chunk-58aa5e30":1,"chunk-5c325faf":1,"chunk-64ecf4ad":1,"chunk-67b5bd9c":1,"chunk-700dcf06":1,"chunk-76054cf5":1,"chunk-a408ad7a":1,"chunk-d8b77560":1,"chunk-0f3fa249":1,"chunk-681be756":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-023fb097":"eb229dc0","chunk-08aec464":"42e57938","chunk-0ef19dea":"ffe87982","chunk-19f1cf1d":"4cdf8a53","chunk-2591197c":"c2ca72c7","chunk-2d0b724a":"31d6cfe0","chunk-5075ec7a":"bd7a1f7c","chunk-71e4acf2":"b90236e2","chunk-3b394b8f":"4e5e01ac","chunk-4c4460e6":"40aea183","chunk-58aa5e30":"90c5270b","chunk-5c325faf":"daf930db","chunk-64ecf4ad":"603aba8e","chunk-67b5bd9c":"7174756d","chunk-700dcf06":"2e702f0f","chunk-76054cf5":"ff98744e","chunk-a408ad7a":"e7c90d08","chunk-d8b77560":"463bc181","chunk-0f3fa249":"621d36ae","chunk-681be756":"fbd80e7b"}[e]+".css",o=f.p+c,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===c||d===o))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){i=s[u],d=i.getAttribute("data-href");if(d===c||d===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var c=n&&n.target&&n.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete r[e],h.parentNode.removeChild(h),t(a)},h.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(h)})).then((function(){r[e]=0})));var c=o[e];if(0!==c)if(c)n.push(c[2]);else{var a=new Promise((function(n,t){c=o[e]=[n,t]}));n.push(c[2]=a);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.src=u(e);var s=new Error;i=function(n){d.onerror=d.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",s.name="ChunkLoadError",s.type=c,s.request=r,t[1](s)}o[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(n)},f.m=e,f.c=c,f.d=function(e,n,t){f.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,n){if(1&n&&(e=f(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)f.d(t,c,function(n){return e[n]}.bind(null,c));return t},f.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var h=d;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var c=t("85ec"),r=t.n(c);r.a},"56d7":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",[t("router-view")],1)],1)},o=[],a=(t("ac1f"),t("1276"),{name:"app",created:function(){this.getLocation()},methods:{getLocation:function(){var e=this;AMap.plugin("AMap.Geolocation",(function(){var n=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4});function t(n){e.$store.dispatch("setLocation",n),e.$store.dispatch("setAddress",n.formattedAddress)}function c(n){e.getLngLatLocation()}n.getCurrentPosition(),AMap.event.addListener(n,"complete",t),AMap.event.addListener(n,"error",c)}))},getLngLatLocation:function(){var e=this;AMap.plugin("AMap.CitySearch",(function(){var n=new AMap.CitySearch;n.getLocalCity((function(n,t){"complete"===n&&"OK"===t.info&&AMap.plugin("AMap.Geocoder",(function(){var n=new AMap.Geocoder({city:t.adcode}),c=t.rectangle.split(";")[0].split(",");n.getAddress(c,(function(n,c){"complete"===n&&"OK"===c.info&&(e.$store.dispatch("setLocation",{addressComponent:{city:t.city,province:t.province},formattedAddress:c.regeocode.formattedAddress}),e.$store.dispatch("setAddress",c.regeocode.formattedAddress))}))}))}))}))}}}),u=a,f=(t("034f"),t("2877")),i=Object(f["a"])(u,r,o,!1,null,null,null),d=i.exports,s=t("76a0"),h=t.n(s),l=(t("aa35"),t("8c4f"));c["default"].use(l["a"]);var p=[{path:"/",component:function(){return t.e("chunk-700dcf06").then(t.bind(null,"d504"))},children:[{path:"",redirect:"/home"},{path:"/home",name:"home",component:function(){return Promise.all([t.e("chunk-d8b77560"),t.e("chunk-0f3fa249")]).then(t.bind(null,"bb51"))}},{path:"/order",name:"order",component:function(){return t.e("chunk-a408ad7a").then(t.bind(null,"cf2a"))}},{path:"/me",name:"me",component:function(){return t.e("chunk-64ecf4ad").then(t.bind(null,"0a99"))}},{path:"/address",name:"Address",component:function(){return t.e("chunk-58aa5e30").then(t.bind(null,"a821"))}},{path:"/city",name:"City",component:function(){return Promise.all([t.e("chunk-2d0b724a"),t.e("chunk-71e4acf2")]).then(t.bind(null,"0d5f"))}}]},{path:"/login",name:"login",component:function(){return t.e("chunk-023fb097").then(t.bind(null,"a55b"))}},{path:"/search",name:"search",component:function(){return Promise.all([t.e("chunk-d8b77560"),t.e("chunk-681be756")]).then(t.bind(null,"2d3b"))}},{path:"/shop",name:"shop",redirect:"/goods",component:function(){return t.e("chunk-4c4460e6").then(t.bind(null,"fd46"))},children:[{path:"/goods",name:"goods",component:function(){return Promise.all([t.e("chunk-2d0b724a"),t.e("chunk-5075ec7a")]).then(t.bind(null,"e0a9"))}},{path:"/comments",name:"comments",component:function(){return t.e("chunk-3b394b8f").then(t.bind(null,"8f78"))}},{path:"/seller",name:"seller",component:function(){return t.e("chunk-5c325faf").then(t.bind(null,"8f6f"))}}]},{path:"/myAddress",name:"MyAddress",component:function(){return t.e("chunk-67b5bd9c").then(t.bind(null,"7911"))}},{path:"/addAddress",name:"AddAddress",component:function(){return t.e("chunk-08aec464").then(t.bind(null,"0e45"))}},{path:"/settlement",name:"Settlement",component:function(){return t.e("chunk-2591197c").then(t.bind(null,"bc78"))}},{path:"/remark",name:"Remark",component:function(){return t.e("chunk-19f1cf1d").then(t.bind(null,"21b7"))}},{path:"/pay",name:"Pay",component:function(){return t.e("chunk-0ef19dea").then(t.bind(null,"16c2"))}},{path:"/orderInfo",name:"OrderInfo",component:function(){return t.e("chunk-76054cf5").then(t.bind(null,"0f76"))}}],m=new l["a"]({mode:"hash",base:"",linkActiveClass:"active",routes:p});m.beforeEach((function(e,n,t){var c=!!localStorage.ele_login;"/login"==e.path?t():c?t():t("/login")}));var b,k=m,v=(t("4160"),t("159b"),t("2fa7")),g=t("2f62");c["default"].use(g["a"]);var O={SET_LOCATION:"SETLOCATION",SET_ADDRESS:"SET_ADDRESS",ORDER_INFO:"ORDER_INFO",USER_INFO:"USER_INFO",REMARK_INFO:"REMARK_INFO"},y={location:{},address:"",orderInfo:null,userInfo:null,remarkInfo:{tableware:"",remark:""}},A={location:function(e){return e.location},address:function(e){return e.address},orderInfo:function(e){return e.orderInfo},userInfo:function(e){return e.userInfo},totalPrice:function(e){var n=0;if(e.orderInfo){var t=e.orderInfo.selectFoods;t.forEach((function(e){n+=e.activity.fixed_price*e.count})),n+=e.orderInfo.shopInfo.float_delivery_fee}return n},remarkInfo:function(e){return e.remarkInfo}},I=(b={},Object(v["a"])(b,O.SET_LOCATION,(function(e,n){e.location=n||null})),Object(v["a"])(b,O.SET_ADDRESS,(function(e,n){e.address=n||""})),Object(v["a"])(b,O.ORDER_INFO,(function(e,n){e.orderInfo=n||null})),Object(v["a"])(b,O.USER_INFO,(function(e,n){e.userInfo=n||null})),Object(v["a"])(b,O.REMARK_INFO,(function(e,n){e.remarkInfo=n||null})),b),E={setLocation:function(e,n){var t=e.commit;t(O.SET_LOCATION,n)},setAddress:function(e,n){var t=e.commit;t(O.SET_ADDRESS,n)},setOrderInfo:function(e,n){var t=e.commit;t(O.ORDER_INFO,n)},setUserInfo:function(e,n){var t=e.commit;t(O.USER_INFO,n)},setRemarkInfo:function(e,n){var t=e.commit;t(O.REMARK_INFO,n)}},S=new g["a"].Store({state:y,getters:A,mutations:I,actions:E}),_=t("bc3a"),R=t.n(_),L=t("4328"),w=t.n(L);c["default"].config.productionTip=!1,c["default"].prototype.$axios=R.a,c["default"].use(h.a),R.a.defaults.baseURL="https://ele-interface.herokuapp.com/",R.a.interceptors.request.use((function(e){return"post"==e.method&&(e.data=w.a.stringify(e.data)),s["Indicator"].open(),e}),(function(e){return Promise.reject(e)})),R.a.interceptors.response.use((function(e){return s["Indicator"].close(),e}),(function(e){return s["Indicator"].close(),Promise.reject(e)})),new c["default"]({router:k,store:S,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.31d397de.js.map