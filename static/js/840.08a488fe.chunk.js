"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[840],{9546:function(n,e,t){t.d(e,{Tg:function(){return i},W0:function(){return x},ad:function(){return p},pI:function(){return v},vq:function(){return d}});var r=t(5861),a=t(4687),c=t.n(a),s=t(1044),o="457f80f59e5c5ed289022502f172a9f5";function i(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.ZP.get("trending/movie/day?api_key=".concat(o));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.ZP.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.ZP.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.ZP.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}s.ZP.defaults.baseURL="https://api.themoviedb.org/3"},8840:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,c,s,o,i,u,p,l=t(5861),d=t(885),h=t(4687),x=t.n(h),f=t(2791),v=t(6731),g=t(7689),m=t(9546),w=t(168),j=t(7402),Z=j.Z.div(r||(r=(0,w.Z)(["\n  padding: 20px;\n"]))),k=j.Z.div(a||(a=(0,w.Z)(["\ntext-align:center;"]))),b=j.Z.div(c||(c=(0,w.Z)(["\n  display: flex;\n  gap: 40px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),y=j.Z.div(s||(s=(0,w.Z)(["\n  padding-right: 20px;\n"]))),_=j.Z.div(o||(o=(0,w.Z)(["\n  width: 100%;\n  height: 2px;\n  background-color: 0px 4px 4px rgba(0, 0, 0, 0.15), #333c4e;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n"]))),S=j.Z.button(i||(i=(0,w.Z)(["\n  width: 150px;\n  padding: 5px;\n  border-radius: 4px;\n  outline: none;\n  border: none;\n  background-color: teal;\n  font-size: 16px;\n  color: white;\n"]))),U=j.Z.li(u||(u=(0,w.Z)(["\n  margin-bottom: 10px;\n  list-style: none;\n"]))),P=(0,j.Z)(v.rU)(p||(p=(0,w.Z)(["\n  text-decoration: none;\n  color: black;\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    background-color: teal;\n    color: white;\n    border-radius: 4px;\n  }\n"]))),E=t(7596),F=(t(5462),t(6036)),N=t(7692),C=t(3959),G=t(184),T=function(){var n,e,t=(0,g.UO)().id,r=(0,g.TH)(),a=null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",c=(0,f.useState)([]),s=(0,d.Z)(c,2),o=s[0],i=s[1],u=(0,f.useState)(""),p=(0,d.Z)(u,2),h=p[0],w=p[1],j=(0,f.useState)(null),T=(0,d.Z)(j,2),q=T[0],z=T[1];return(0,f.useEffect)((function(){function n(){return(n=(0,l.Z)(x().mark((function n(){return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{(0,m.vq)(t).then((function(n){n?(z(n),i(n.genres),w(n.poster_path)):E.Am.warn("There is no movie with such name. Please Go Back and try another one.",{theme:"dark"})}))}catch(e){console.log(e)}case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),(0,G.jsxs)(Z,{children:[(0,G.jsx)(v.rU,{to:a,children:(0,G.jsx)(S,{children:"Go Back \ud83d\udd19 "})}),q?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(b,{children:[(0,G.jsx)("img",{src:h?"https://image.tmdb.org/t/p/w500/".concat(h):"".concat("https://cdn.pixabay.com/photo/2021/12/29/17/34/girl-6902365_1280.png"),alt:q.title,width:"350"}),(0,G.jsxs)(y,{children:[(0,G.jsxs)("h1",{children:[q.title,"(",q.release_date&&q.release_date.slice(0,4),")"]}),(0,G.jsxs)("p",{children:["User Score: ",Math.round(Number(q.popularity)),"% "]}),(0,G.jsx)("h2",{children:"Overview"}),(0,G.jsx)("p",{children:q.overview}),(0,G.jsx)("h2",{children:"Genres"}),0!==o.length&&o.map((function(n){return(0,G.jsxs)("span",{children:[" ",(0,G.jsx)("span",{children:n.name})]},n.id)}))]})]}),(0,G.jsx)(_,{}),(0,G.jsxs)(k,{children:[(0,G.jsx)("h3",{children:"Additional Information"}),(0,G.jsxs)("ul",{children:[(0,G.jsx)(U,{children:(0,G.jsxs)(P,{to:"cast",state:r.state,children:[(0,G.jsx)(N.kGm,{size:"16px"})," Cast"," "]})}),(0,G.jsx)(U,{children:(0,G.jsxs)(P,{to:"reviews",state:r.state,children:[" ",(0,G.jsx)(F.DQk,{size:"16px"})," Reviews"," "]})})]}),(0,G.jsx)(_,{})]})]}):(0,G.jsxs)("div",{children:["There is no movie with such name. Please Go Back and try another one."," "]}),(0,G.jsx)(E.Ix,{autoClose:3e3,closeOnClick:!0}),(0,G.jsx)(f.Suspense,{fallback:(0,G.jsx)(C.a,{}),children:(0,G.jsx)(g.j3,{})})]})}}}]);
//# sourceMappingURL=840.08a488fe.chunk.js.map