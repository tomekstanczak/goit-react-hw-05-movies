"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[137],{137:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var i=n(861),r=n(439),s=n(757),c=n.n(s),a=n(791),o=n(689),l=n(87),d=n(340),h="MovieDetails_boxMovieStyle__Idv-Y",p="MovieDetails_additionalStyle__PKl3J",u=n(184);function v(){var e=(0,o.s0)(),t=(0,o.UO)().movieId,n=(0,a.useState)(!1),s=(0,r.Z)(n,2),v=s[0],x=s[1],j=(0,a.useState)({overview:"",poster_path:"",title:"",genres:[]}),f=(0,r.Z)(j,2),m=f[0],g=f[1];(0,a.useEffect)((function(){var e=function(){var e=(0,i.Z)(c().mark((function e(){var n,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,d.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=6f0a7e90748cec36ca14cbe73d2c8153"));case 4:n=e.sent,i=n.data,console.log(i),g(i),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0,"Error");case 13:return e.prev=13,x(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);return(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{type:"button",onClick:function(){e(-1)},children:"Go back"}),(0,u.jsxs)("div",{className:h,children:[(0,u.jsxs)("div",{children:[v&&(0,u.jsx)("p",{children:"Loading ..."}),(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(m.poster_path),alt:m.title,width:"200px",height:"300px"})]}),(0,u.jsxs)("div",{children:[v&&(0,u.jsx)("p",{children:"Loading ..."}),(0,u.jsx)("h1",{children:m.title}),(0,u.jsx)("h2",{children:"Overview"}),v&&(0,u.jsx)("p",{children:"Loading ..."}),(0,u.jsx)("p",{children:m.overview}),(0,u.jsx)("h3",{children:"Genres"}),v&&(0,u.jsx)("p",{children:"Loading ..."}),(0,u.jsx)("p",{children:m.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,u.jsxs)("div",{className:p,children:[(0,u.jsx)("h4",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(l.rU,{to:"reviews",children:"Reviews"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.rU,{to:"cast",children:"CAST"})})]})]}),(0,u.jsx)(o.j3,{})]})}}}]);
//# sourceMappingURL=137.59fdf367.chunk.js.map