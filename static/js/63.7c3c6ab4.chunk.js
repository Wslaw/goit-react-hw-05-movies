"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[63],{63:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(861),a=n(439),s=n(757),i=n.n(s),c=n(791),o=n(689),u=n(87),l=n(713),d=n(119),v="movie-details_article__OBSEd",p="movie-details_title__0HjVA",m="movie-details_list__W-kHO",f="movie-details_item__1sH2a",h="movie-details_btn__7lR9k",_="movie-details_wrap__+VyZD",x="movie-details_img__UYao0",g="movie-details_additional__JG1H8",j="movie-details_add__vPhTy",w="movie-details_link__5RuGV",k="movie-details_cast__cbx-6",b="movie-details_reviews__RtR2D",N=n(184),y=function(){var e,t=(0,c.useState)(),n=(0,a.Z)(t,2),s=n[0],y=n[1],Z=(0,c.useState)(!1),S=(0,a.Z)(Z,2),U=S[0],O=S[1],R=(0,c.useState)(null),C=(0,a.Z)(R,2),E=C[0],H=C[1],V=(0,o.UO)().id,B=(0,o.s0)(),G=(0,o.TH)();(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),e.next=4,(0,l.YJ)(V);case 4:t=e.sent,n=t.data,y(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),H(e.t0.message);case 12:return e.prev=12,O(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[V]);var A=(null===(e=G.state)||void 0===e?void 0:e.from)||"/",D=s||{},J=D.poster_path,L=D.title,T=D.overview,Y=D.genres,q=D.vote_average,I=D.release_date;return(0,N.jsxs)("div",{children:[U&&(0,N.jsx)(d.Z,{}),E&&(0,N.jsxs)("p",{children:["Error:",E]}),(0,N.jsxs)("button",{onClick:function(){B(A)},type:"button",className:h,children:[" ","Go Back"," "]}),s?(0,N.jsxs)("div",{className:_,children:[s&&J&&(0,N.jsx)("img",{className:x,src:J?"https://image.tmdb.org/t/p/w300"+J:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=300x240",alt:L}),(0,N.jsxs)("div",{children:[(0,N.jsxs)("h2",{className:v,children:[L," ","(",I.split("-")[0],")"]}),(0,N.jsxs)("span",{children:["User Score: ",Math.floor(10*q),"%"]}),(0,N.jsx)("h3",{className:p,children:"Overview"}),(0,N.jsx)("p",{children:T}),(0,N.jsx)("h3",{className:p,children:"Genres"}),(0,N.jsx)("ul",{className:m,children:(null===Y||void 0===Y?void 0:Y.length)&&Y.map((function(e){return(0,N.jsx)("li",{className:f,children:e.name},e.id)}))})]})]}):(0,N.jsx)(d.Z,{}),(0,N.jsxs)("div",{className:g,children:[(0,N.jsx)("h3",{children:"Additional information"}),(0,N.jsxs)("ul",{className:j,children:[(0,N.jsx)(u.OL,{className:"".concat(w," ").concat(k),to:"cast",state:{from:A},onClick:function(){var e=document.getElementById("cast");e&&e.scrollIntoView({behavior:"smooth"})},children:(0,N.jsx)("span",{children:"Cast"})}),(0,N.jsx)(u.OL,{className:"".concat(w," ").concat(b),to:"reviews",state:{from:A},children:(0,N.jsx)("span",{children:"Reviews"})})]})]}),(0,N.jsx)(o.j3,{})]})},Z="movie-details-page_back__PBT+E",S=function(){return(0,N.jsx)("div",{className:Z,children:(0,N.jsx)(y,{})})}},713:function(e,t,n){n.d(t,{Df:function(){return c},V0:function(){return u},YJ:function(){return o},tx:function(){return d},zv:function(){return l}});var r=n(861),a=n(757),s=n.n(a),i=n(294).Z.create({baseURL:"".concat("https://api.themoviedb.org/3/"),params:{api_key:"".concat("a5e80a241b45048d42e42bcf67dfe2f1")}}),c=function(){return i.get("trending/movie/day")},o=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.get("movie/".concat(t,"?language=en-US")),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.get("/search/movie?query=".concat(t,"}&include_adult=false&page=").concat(n,"&language=en-US")),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.get("movie/".concat(t,"/credits?language=en-US")),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.get("movie/".concat(t,"/reviews?language=en-US&page=1")),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=63.7c3c6ab4.chunk.js.map