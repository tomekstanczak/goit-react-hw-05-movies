"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[440],{440:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),c=r(439),a=r(757),s=r.n(a),i=r(791),o=r(87),u=r(340),l=r(184);function d(){var e=(0,i.useState)([]),t=(0,c.Z)(e,2),r=t[0],a=t[1],d=(0,i.useState)(!1),h=(0,c.Z)(d,2),p=h[0],f=h[1],v=(0,i.useState)(!1),m=(0,c.Z)(v,2),x=m[0],k=m[1];return(0,i.useEffect)((function(){f(!0);var e=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=6f0a7e90748cec36ca14cbe73d2c8153");case 3:t=e.sent,r=t.data,console.log(r),a(r.results),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),k(!0),console.error("error");case 13:return e.prev=13,f(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Trending today"}),(0,l.jsxs)("ul",{children:[x&&(0,l.jsx)("p",{children:"Something went wrong..."}),p&&(0,l.jsx)("p",{children:"Loading ..."}),r.map((function(e,t){return(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"movies/".concat(e.id),children:e.title})},t)}))]})]})}}}]);
//# sourceMappingURL=440.c396d151.chunk.js.map