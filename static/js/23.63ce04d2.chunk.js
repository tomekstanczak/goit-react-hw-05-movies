"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[23],{23:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),c=n(439),s=n(757),a=n.n(s),i=n(791),o=n(689),u=n(340),l=n(184);function h(){var e=(0,o.UO)().movieId,t=(0,i.useState)([]),n=(0,c.Z)(t,2),s=n[0],h=n[1],p=(0,i.useState)(!1),d=(0,c.Z)(p,2),f=d[0],v=d[1],m=(0,i.useState)(!1),x=(0,c.Z)(m,2),w=x[0],k=x[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(a().mark((function t(){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.prev=1,t.next=4,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=6f0a7e90748cec36ca14cbe73d2c8153"));case 4:n=t.sent,r=n.data,console.log(r.results),h(r.results),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0,"Error"),k(!0);case 14:return t.prev=14,v(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,10,14,17]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,l.jsx)("div",{children:(0,l.jsxs)("ul",{children:[w&&(0,l.jsx)("p",{children:"Something went wrong..."}),f&&(0,l.jsx)("p",{children:"Loading ..."}),s.length>0?s.map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsx)("p",{children:e.content}),(0,l.jsx)("p",{children:e.author})]},e.id)})):(0,l.jsx)("p",{children:" We don't have any reviewes for this movie"})]})})}}}]);
//# sourceMappingURL=23.63ce04d2.chunk.js.map