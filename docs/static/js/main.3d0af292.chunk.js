(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(10),u=n(8),o=n.n(u),j=n(0),d=function(e){var t=e.setCategoriess,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],u=r[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return[c].concat(Object(s.a)(e))})),u(""))},children:Object(j.jsx)("input",{type:"text",value:c,onChange:function(e){u(e.target.value)}})})};d.protoTypes={setCategoriess:o.a.func.isRequired};var l=n(11),p=n(6),f=n.n(p),b=n(9),O=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,a,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t)," &limit=10&api_key=QQ8Bi2o1cop9ZlW2IOxrBiFHeyfOyDVD"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.id,n=e.title,a=e.url;return console.log(t,n,a),Object(j.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(j.jsx)("img",{src:a,alt:n}),Object(j.jsxs)("p",{children:[" ",n," "]})]})},h=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){O(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",t," "]}),c&&Object(j.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(j.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(j.jsx)(m,Object(l.a)({},e),e.id)}))})]})},x=function(){var e=Object(a.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"GifExpertApp"}),Object(j.jsx)(d,{setCategoriess:r}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(e){return Object(j.jsx)(h,{category:e},e)}))})]})};n(20);c.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.3d0af292.chunk.js.map