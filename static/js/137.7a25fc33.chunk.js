"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[137],{137:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(791),i=t(689),s=t(87),c="MovieDetails_boxMovieStyle__Idv-Y",o="MovieDetails_additionalStyle__PKl3J",a=t(934),u=t(132),l=t(184);function d(){var e=(0,i.s0)(),n=(0,i.UO)().movieId,t=(0,a.Z)(u.TP,n,!1),d=t.isLoading,h=t.data,f=t.getResults;console.log(h),(0,r.useEffect)((function(){f()}),[n]);return(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{type:"button",onClick:function(){e(-1)},children:"Go back"}),(0,l.jsxs)("div",{className:c,children:[(0,l.jsxs)("div",{children:[d&&(0,l.jsx)("p",{children:"Loading ..."}),(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(h&&h.poster_path),alt:h&&h.title,width:"200px",height:"300px"})]}),(0,l.jsxs)("div",{children:[d&&(0,l.jsx)("p",{children:"Loading ..."}),(0,l.jsxs)("h1",{children:[" ",h&&h.title]}),(0,l.jsx)("h2",{children:"Overview"}),d&&(0,l.jsx)("p",{children:"Loading ..."}),(0,l.jsx)("p",{children:h&&h.overview}),(0,l.jsx)("h3",{children:"Genres"}),d&&(0,l.jsx)("p",{children:"Loading ..."}),(0,l.jsx)("p",{children:h&&h.genres&&h.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,l.jsxs)("div",{className:o,children:[(0,l.jsx)("h4",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(s.rU,{to:"reviews",children:"Reviews"})}),(0,l.jsx)("li",{children:(0,l.jsx)(s.rU,{to:"cast",children:"CAST"})})]})]}),(0,l.jsx)(i.j3,{})]})}},934:function(e,n,t){var r=t(861),i=t(439),s=t(757),c=t.n(s),o=t(791);n.Z=function(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=(0,o.useState)([]),a=(0,i.Z)(s,2),u=a[0],l=a[1],d=(0,o.useState)(!1),h=(0,i.Z)(d,2),f=h[0],v=h[1],p=(0,o.useState)(!1),x=(0,i.Z)(p,2),g=x[0],j=x[1],m=function(){var i=(0,r.Z)(c().mark((function r(){var i,s;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return v(!0),r.prev=1,r.next=4,e(n);case 4:i=r.sent,s=i.data,console.log("Data from API:",s),l(t?s.results:s),console.log(s),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(1),j(!0),console.error("error",r.t0);case 15:return r.prev=15,v(!1),r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[1,11,15,18]])})));return function(){return i.apply(this,arguments)}}();return{data:u,isLoading:f,isError:g,getResults:m}}},132:function(e,n,t){t.d(n,{IQ:function(){return i},Jh:function(){return s},TP:function(){return o},z1:function(){return c},zN:function(){return a}});var r=t(340);function i(e){return r.Z.get("/movie/".concat(e,"/credits"))}function s(e){return r.Z.get("/movie/".concat(e,"/reviews"))}function c(e){return r.Z.get("/search/movie",{params:{query:e}})}function o(e){return r.Z.get("/movie/".concat(e))}function a(){return r.Z.get("/trending/movie/day")}r.Z.defaults.baseURL="https://api.themoviedb.org/3",r.Z.defaults.params={api_key:"6f0a7e90748cec36ca14cbe73d2c8153"}}}]);
//# sourceMappingURL=137.7a25fc33.chunk.js.map