(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2591197c"],{"0418":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLeft,expression:"isLeft"}],staticClass:"header-button is-left"},[s("i",{staticClass:"fa fa-chevron-left"}),s("button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])]),s("h1",{staticClass:"header-title"},[t._v(t._s(t.title))])])},r=[],n={name:"Header",props:{title:String,isLeft:{type:Boolean,default:!1}}},i=n,o=(s("fc64"),s("2877")),c=Object(o["a"])(i,a,r,!1,null,"256d0b90",null);e["a"]=c.exports},"0d03":function(t,e,s){var a=s("6eeb"),r=Date.prototype,n="Invalid Date",i="toString",o=r[i],c=r.getTime;new Date(NaN)+""!=n&&a(r,i,(function(){var t=c.call(this);return t===t?o.call(this):n}))},1012:function(t,e,s){},"20ad":function(t,e,s){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var a=s("1d80"),r=s("5899"),n="["+r+"]",i=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),c=function(t){return function(e){var s=String(a(e));return 1&t&&(s=s.replace(i,"")),2&t&&(s=s.replace(o,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,s){var a=s("861d"),r=s("d2bb");t.exports=function(t,e,s){var n,i;return r&&"function"==typeof(n=e.constructor)&&n!==s&&a(i=n.prototype)&&i!==s.prototype&&r(t,i),t}},"75be":function(t,e,s){},"942b":function(t,e,s){"use strict";var a=s("75be"),r=s.n(a);r.a},a833:function(t,e,s){"use strict";var a=s("caa0"),r=s.n(a);r.a},a9e3:function(t,e,s){"use strict";var a=s("83ab"),r=s("da84"),n=s("94ca"),i=s("6eeb"),o=s("5135"),c=s("c6b6"),l=s("7156"),u=s("c04e"),f=s("d039"),d=s("7c73"),v=s("241c").f,p=s("06cf").f,h=s("9bf2").f,_=s("58a8").trim,m="Number",I=r[m],b=I.prototype,C=c(d(b))==m,g=function(t){var e,s,a,r,n,i,o,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=_(l),e=l.charCodeAt(0),43===e||45===e){if(s=l.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+l}for(n=l.slice(2),i=n.length,o=0;o<i;o++)if(c=n.charCodeAt(o),c<48||c>r)return NaN;return parseInt(n,a)}return+l};if(n(m,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var k,w=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof w&&(C?f((function(){b.valueOf.call(s)})):c(s)!=m)?l(new I(g(e)),s,w):g(e)},y=a?v(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;y.length>$;$++)o(I,k=y[$])&&!o(w,k)&&h(w,k,p(I,k));w.prototype=b,b.constructor=w,i(r,m,w)}},b892:function(t,e,s){},bb0a:function(t,e,s){"use strict";var a=s("20ad"),r=s.n(a);r.a},bc78:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"settlement"},[s("Header",{attrs:{isLeft:!0,title:"确认订单"}}),t.orderInfo?s("div",{staticClass:"view-body"},[s("div",{},[s("section",{staticClass:"cart-address"},[s("p",{staticClass:"title"},[t._v(" 订单配送至 "),t.userInfo&&t.userInfo.tag?s("span",{staticClass:"address-tag"},[t._v(t._s(t.userInfo.tag))]):t._e()]),s("p",{staticClass:"address-detail"},[t.userInfo?s("span",{on:{click:function(e){return t.$router.push("/myAddress")}}},[t._v(t._s(t.userInfo.address)+t._s(t.userInfo.bottom))]):s("span",[t.haveAddress?s("span",{on:{click:function(e){return t.$router.push("/myAddress")}}},[t._v("选择收货地址")]):s("span",{on:{click:t.addAddress}},[t._v("新增收货地址")])]),s("i",{staticClass:"fa fa-angle-right"})]),t.userInfo?s("h2",{staticClass:"address-name"},[s("span",[t._v(t._s(t.userInfo.name))]),t.userInfo.sex?s("span",[t._v("("+t._s(t.userInfo.sex)+")")]):t._e(),s("span",{staticClass:"phone"},[t._v(t._s(t.userInfo.phone))])]):t._e()]),s("Delivery",{attrs:{shopInfo:t.orderInfo.shopInfo}}),s("CartGroup",{attrs:{orderInfo:t.orderInfo,totalPrice:t.totalPrice}}),s("section",{staticClass:"checkout-section"},[s("CartItem",{attrs:{title:"餐具份数",subHead:t.remarkInfo.tableware||"未选择"},on:{click:function(e){t.showTableware=!0}}}),s("CartItem",{attrs:{title:"订单备注",subHead:t.remarkInfo.remark||"口味 偏好"},on:{click:function(e){return t.$router.push("/remark")}}}),s("CartItem",{attrs:{title:"发票信息",subHead:"不需要开发票"}})],1),s("Tableware",{attrs:{isShow:t.showTableware},on:{close:function(e){t.showTableware=!1}}})],1)]):t._e(),s("footer",{staticClass:"action-bar"},[s("span",[t._v("￥"+t._s(t.totalPrice))]),s("button",{on:{click:t.handlePay}},[t._v("去支付")])])],1)},r=[],n=s("0418"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"checkout-section"},[s("div",{staticClass:"delivery"},[s("div",{staticClass:"delivery-left"},[s("span",{staticClass:"delivery-time"},[t._v("送达时间")]),t.shopInfo.delivery_mode.text?s("div",{staticClass:"delivery-extra"},[s("span",[t._v(t._s(t.shopInfo.delivery_mode.text))])]):t._e()]),s("div",{staticClass:"delivery-right"},[s("span",{staticClass:"delivery-select"},[t._v("尽快送达 ("+t._s(t.deliveryTime(t.shopInfo.order_lead_time))+"送达)")]),s("i",{staticClass:"fa fa-angle-right"})])]),t._m(0)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-item"},[s("div",{staticClass:"cart-item title"},[t._v("支付方式")]),s("div",{staticClass:"pay-text"},[t._v("在线支付")])])}],c=(s("0d03"),{name:"Delivery",props:{shopInfo:Object},methods:{deliveryTime:function(t){var e=new Date;return e.setMinutes(e.getMinutes()+t),e.getHours()+":"+e.getMinutes()}}}),l=c,u=(s("bd60"),s("2877")),f=Object(u["a"])(l,i,o,!1,null,"01df0b28",null),d=f.exports,v=s("df23"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-item",on:{click:function(e){return t.$emit("click")}}},[s("div",{staticClass:"cart-item-title"},[t._v(t._s(t.title))]),t.subHead?s("div",{staticClass:"cart-item-right"},[s("span",[t._v(t._s(t.subHead))]),s("i",{staticClass:"fa fa-angle-right"})]):t._e()])},h=[],_={name:"CartItem",props:{title:String,subHead:String}},m=_,I=(s("c399"),Object(u["a"])(m,p,h,!1,null,"4f02e576",null)),b=I.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",[t.isShow?s("div",{staticClass:"tableware"},[s("div",{staticClass:"actions-sheet"},[s("i",{staticClass:"fa fa-remove",on:{click:function(e){return t.$emit("close")}}}),s("h2",{staticClass:"actions-sheet-header"},[s("span",{staticClass:"tag"}),s("span",{staticClass:"title"},[t._v("餐具份数")]),s("span",{staticClass:"tag"})]),s("ul",t._l(t.tablewareList,(function(e,a){return s("li",{key:a,class:{selected:t.selectItem==e},on:{click:function(s){return t.clickItem(e)}}},[t._v(t._s(e))])})),0)])]):t._e()])},g=[],k={name:"Tableware",data:function(){return{tablewareList:["1","2","3","4","5","6"],selectItem:""}},props:{isShow:Boolean},methods:{clickItem:function(t){this.selectItem=t,this.$store.dispatch("setRemarkInfo",{tableware:t+"份餐具",remark:this.$store.getters.remarkInfo.remark}),this.$emit("close")}}},w=k,y=(s("a833"),Object(u["a"])(w,C,g,!1,null,"c8926e54",null)),$=y.exports,x=s("76a0"),N={name:"Settlement",components:{Header:n["a"],Delivery:d,CartGroup:v["a"],CartItem:b,Tableware:$},data:function(){return{haveAddress:!1,showTableware:!1}},beforeRouteEnter:function(t,e,s){s((function(t){t.userInfo||t.getData()}))},computed:{userInfo:function(){return this.$store.getters.userInfo},orderInfo:function(){return this.$store.getters.orderInfo},totalPrice:function(){return this.$store.getters.totalPrice},remarkInfo:function(){return this.$store.getters.remarkInfo}},methods:{addAddress:function(){this.$router.push({name:"AddAddress",params:{title:"添加地址",addressInfo:{name:"",sex:"",phone:"",address:"",bottom:"",tag:""}}})},getData:function(){var t=this;this.$axios("/api/user/user_info/".concat(localStorage.ele_login)).then((function(e){e.data.myAddress.length>0?t.haveAddress=!0:t.haveAddress=!1}))},handlePay:function(){this.userInfo?this.$router.push("/pay"):Object(x["Toast"])({message:"请选择收货地址",position:"bottom",duration:2e3})}}},A=N,E=(s("bb0a"),Object(u["a"])(A,a,r,!1,null,"5feecfb5",null));e["default"]=E.exports},bd60:function(t,e,s){"use strict";var a=s("c0da"),r=s.n(a);r.a},c0da:function(t,e,s){},c399:function(t,e,s){"use strict";var a=s("1012"),r=s.n(a);r.a},caa0:function(t,e,s){},df23:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"checkout-section cart-group"},[s("h3",[t._v(t._s(t.orderInfo.shopInfo.name))]),s("ul",[t._l(t.orderInfo.selectFoods,(function(e,a){return s("li",{key:a},[s("img",{attrs:{src:e.image_path,alt:""}}),s("div",{staticClass:"cart-group-info"},[s("span",[t._v(t._s(e.name))]),s("span",[t._v("x "+t._s(e.count))]),s("span",[t._v(t._s(e.activity.fixed_price))])])])})),s("li",{staticClass:"cart-group-total"},[s("div",[t._v("配送费")]),s("div",[t._v("￥"+t._s(t.orderInfo.shopInfo.float_delivery_fee))])]),s("li",{staticClass:"cart-group-total"},[s("div",{staticClass:"discounts"}),s("div",{staticClass:"subtotal"},[s("span",[t._v("小计￥")]),s("span",{staticClass:"price"},[t._v(t._s(t.totalPrice))])])])],2)])},r=[],n=(s("a9e3"),{name:"CartGroup",props:{orderInfo:Object,totalPrice:Number}}),i=n,o=(s("942b"),s("2877")),c=Object(o["a"])(i,a,r,!1,null,"35bffc8b",null);e["a"]=c.exports},fc64:function(t,e,s){"use strict";var a=s("b892"),r=s.n(a);r.a}}]);
//# sourceMappingURL=chunk-2591197c.1bfaef36.js.map