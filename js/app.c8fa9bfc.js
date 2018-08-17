(function(t){function e(e){for(var r,o,u=e[0],c=e[1],s=e[2],f=0,d=[];f<u.length;f++)o=u[f],a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("04f5"),a=n.n(r);a.a},"04f5":function(t,e,n){},"25e4":function(t,e,n){},"2aa7":function(t,e,n){"use strict";var r=n("eb95"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{dark:""}},[n("GavinCard")],1)],1)},i=[],o=n("ce5b"),u=n.n(o),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{"justify-center":"","align-center":"","mt-5":t.$vuetify.breakpoint.smAndUp}},[n("v-flex",{attrs:{xs4:t.$vuetify.breakpoint.smAndUp}},[n("v-card",{attrs:{raised:""}},[n("v-tabs",{attrs:{grow:"",color:"teal darken-3","slider-color":"amber lighten-5"}},[n("v-tab",{attrs:{ripple:""}},[t._v("\n        Home\n      ")]),n("v-tab",{attrs:{ripple:""}},[t._v("\n        About\n      ")]),n("v-tab",{attrs:{ripple:""}},[t._v("\n        Contact\n      ")]),n("v-tab-item",[n("v-card-text",[n("h2",[t._v("\n            "+t._s(t.home.header)+"\n          ")]),n("br"),n("p",[t._v("\n            "+t._s(t.home.text)+"\n          ")])])],1),n("v-tab-item",[n("AboutPage",{attrs:{items:t.about.items}})],1),n("v-tab-item",[n("AboutPage",{attrs:{items:t.contact.items}})],1)],1)],1)],1)],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list",{attrs:{id:"list"}},t._l(t.items,function(e){return n("v-list-tile",{key:e.header,attrs:{"pa-0":"",avatar:""},on:{click:e.func}},[n("v-list-tile-avatar",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.header))])],1)],1)}))],1)},f=[],d={name:"AboutPage",props:{items:Array}},p=d,v=(n("2aa7"),n("2877")),b=Object(v["a"])(p,l,f,!1,null,"22ac83bd",null),m=b.exports;function h(t){window.location=t}var g={home:{header:"Introduction",text:"Hello! I'm Gavin Liu, a graduate student at Stanford University pursuing an MS degree in Aeronautics and Astronautics. I am a mechanical engineering BSE graduate passionate about space and immensely interested in launch vehicles; I aspire to reduce launch costs to enable easier access to space. I aim to complete a PhD to best prepare myself for impactful research in the space industry."},about:{items:[{header:"Resume",icon:"description",func:function(){return h("resume.pdf")}},{header:"LinkedIn",icon:"account_box",func:function(){return h("https://www.linkedin.com/in/gavinliu06/")}},{header:"Google Scholar",icon:"book",func:function(){return h("https://scholar.google.com/citations?user=AlU1oucAAAAJ&hl=en")}}]},contact:{items:[{header:"gavin.liu@stanford.edu",icon:"mail",func:function(){return h("mailto:gavin.liu@stanford.edu")}}]}},y=g,_={name:"GavinCard",components:{AboutPage:m},data:function(){return y}},w=_,x=(n("de1f"),Object(v["a"])(w,c,s,!1,null,"42db3fbe",null)),A=x.exports;n("bf40");r["default"].use(u.a);var j={name:"app",components:{GavinCard:A}},k=j,O=(n("034f"),Object(v["a"])(k,a,i,!1,null,null,null)),P=O.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(P)}}).$mount("#app")},de1f:function(t,e,n){"use strict";var r=n("25e4"),a=n.n(r);a.a},eb95:function(t,e,n){}});
//# sourceMappingURL=app.c8fa9bfc.js.map