(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c325faf"],{1787:function(e,t,n){},"8f6f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.sellerInfo?n("div",{staticClass:"seller"},[n("section",[n("img",{attrs:{src:e.sellerInfo.header_image,alt:""}}),n("h3",[e._v(e._s(e.sellerInfo.title))]),n("p",[e._v(e._s(e.sellerInfo.brand_intros[0].brief))]),n("div",[e._v("查看品牌故事")])])]):e._e()},s=[],l={name:"Seller",data:function(){return{sellerInfo:null}},created:function(){this.getData()},methods:{getData:function(){var e=this;this.$axios("/api/profile/seller").then((function(t){e.sellerInfo=t.data}))}}},r=l,i=(n("f4c6"),n("2877")),f=Object(i["a"])(r,a,s,!1,null,"6795aa0a",null);t["default"]=f.exports},f4c6:function(e,t,n){"use strict";var a=n("1787"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-5c325faf.38f7ef2a.js.map