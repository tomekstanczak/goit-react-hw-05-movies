"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[390],{390:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(861),c=n(439),a=n(757),o=n.n(a),s=n(791),i=n(689),u=n(340),l=n(184);function p(){var e=(0,i.UO)().movieId,t=(0,s.useState)([]),n=(0,c.Z)(t,2),a=n[0],p=n[1],f=(0,s.useState)(!1),h=(0,c.Z)(f,2),d=h[0],v=h[1],m=(0,s.useState)(!1),k=(0,c.Z)(m,2),g=k[0],w=k[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(o().mark((function t(){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.prev=1,t.next=4,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=6f0a7e90748cec36ca14cbe73d2c8153"));case 4:n=t.sent,console.log(n),r=n.data.cast,console.log(r),p(r),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0,"Error"),w(!0);case 15:return t.prev=15,v(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[1,11,15,18]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,l.jsx)("div",{children:(0,l.jsxs)("ul",{children:[g&&(0,l.jsx)("p",{children:"Something went wrong..."}),d&&(0,l.jsx)("p",{children:"Loading ..."}),a.map((function(e){return(0,l.jsx)("li",{children:e.name},e.id)}))]})})}}}]);
//# sourceMappingURL=390.8fcb6159.chunk.js.map