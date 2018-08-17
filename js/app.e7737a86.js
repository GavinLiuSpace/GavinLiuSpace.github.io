(function(t){function e(e){for(var r,o,u=e[0],s=e[1],c=e[2],f=0,p=[];f<u.length;f++)o=u[f],a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("04f5"),a=n.n(r);a.a},"04f5":function(t,e,n){},"2aa7":function(t,e,n){"use strict";var r=n("eb95"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{dark:""}},[n("GavinCard")],1)],1)},i=[],o=n("ce5b"),u=n.n(o),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{"justify-center":"","align-center":"","mt-5":t.$vuetify.breakpoint.smAndUp}},[n("v-flex",{attrs:{xs5:t.$vuetify.breakpoint.smAndUp}},[n("v-card",{attrs:{raised:"",width:"11.7cm"}},[n("v-tabs",{attrs:{grow:"",color:"teal darken-3","slider-color":"amber lighten-5"}},[n("v-tab",{attrs:{ripple:""}},[t._v("\n        About\n      ")]),n("v-tab",{attrs:{ripple:""}},[t._v("\n        Links\n      ")]),n("v-tab",{attrs:{ripple:""}},[t._v("\n        Contact\n      ")]),n("v-tab-item",[n("v-card-text",[n("h2",[t._v("\n            "+t._s(t.home.header)+"\n          ")]),n("p",{staticClass:"text-sm-left",staticStyle:{"text-indent":"20px"}},[t._v("\n              "+t._s(t.home.text[0])+"\n          ")]),n("p",{staticClass:"text-sm-left",staticStyle:{"text-indent":"20px"}},[t._v("\n              "+t._s(t.home.text[1])+"\n          ")])])],1),n("v-tab-item",[n("AboutPage",{attrs:{items:t.about.items}})],1),n("v-tab-item",[n("AboutPage",{attrs:{items:t.contact.items}})],1)],1)],1)],1)],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list",{attrs:{id:"list"}},t._l(t.items,function(e){return n("v-list-tile",{key:e.header,attrs:{"pa-0":"",avatar:""},on:{click:e.func}},[n("v-list-tile-avatar",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.header))])],1)],1)}))],1)},f=[],p={name:"AboutPage",props:{items:Array}},d=p,v=(n("2aa7"),n("2877")),m=Object(v["a"])(d,l,f,!1,null,"22ac83bd",null),b=m.exports;function h(t){window.location=t}var g={home:{header:"Introduction",text:["Hello! I'm Gavin Liu, a graduate student at Stanford University pursuing an MS degree in Aeronautics and Astronautics.","I am a mechanical engineering BSE graduate passionate about space and immensely interested in launch vehicles; I aspire to reduce launch costs to enable easier access to space. I aim to complete a PhD to best prepare myself for impactful research in the space industry."]},about:{items:[{header:"Resume",icon:"description",func:function(){return h("resume.pdf")}},{header:"LinkedIn",icon:"account_box",func:function(){return h("https://www.linkedin.com/in/gavinliu06/")}},{header:"Google Scholar",icon:"book",func:function(){return h("https://scholar.google.com/citations?user=AlU1oucAAAAJ&hl=en")}}]},contact:{items:[{header:"gavin.liu@stanford.edu",icon:"mail",func:function(){return h("mailto:gavin.liu@stanford.edu")}}]}},y=g,_={name:"GavinCard",components:{AboutPage:b},data:function(){return y}},x=_,w=(n("6f9f"),Object(v["a"])(x,s,c,!1,null,"22bae73e",null)),A=w.exports;n("bf40");r["default"].use(u.a);var k={name:"app",components:{GavinCard:A}},j=k,O=(n("034f"),Object(v["a"])(j,a,i,!1,null,null,null)),P=O.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(P)}}).$mount("#app")},"6f9f":function(t,e,n){"use strict";var r=n("9496"),a=n.n(r);a.a},9496:function(t,e,n){},eb95:function(t,e,n){}});
//# sourceMappingURL=app.e7737a86.js.map