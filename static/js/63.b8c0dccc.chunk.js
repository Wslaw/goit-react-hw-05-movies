"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[63],{63:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(861),a=n(439),s=n(757),i=n.n(s),c=n(791),o=n(689),u=n(87),l=n(713),d="movie-details_article__OBSEd",p="movie-details_title__0HjVA",v="movie-details_list__W-kHO",f="movie-details_item__1sH2a",h="movie-details_btn__7lR9k",m="movie-details_wrap__+VyZD",_="movie-details_img__UYao0",x="movie-details_additional__JG1H8",g="movie-details_add__vPhTy",j="movie-details_link__5RuGV",w="movie-details_cast__cbx-6",k="movie-details_reviews__RtR2D",b=n(184),N=function(){var e,t=(0,c.useState)(),n=(0,a.Z)(t,2),s=n[0],N=n[1],y=(0,c.useState)(!1),Z=(0,a.Z)(y,2),S=Z[0],U=Z[1],O=(0,c.useState)(null),R=(0,a.Z)(O,2),L=R[0],C=R[1],E=(0,o.UO)().id,G=(0,o.s0)();(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,U(!0),e.next=4,(0,l.YJ)(E);case 4:t=e.sent,n=t.data,N(n),console.log(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),C(e.t0.message);case 13:return e.prev=13,U(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[E]);var H=s||{},V=H.poster_path,B=H.title;return(0,b.jsxs)("div",{children:[S&&(0,b.jsx)("p",{children:"...Loading"}),L&&(0,b.jsxs)("p",{children:["Error:",L]}),(0,b.jsx)("button",{onClick:function(){G(-1)},type:"button",className:h,children:"Go Back"}),s?(0,b.jsxs)("div",{className:m,children:[s&&s.poster_path&&(0,b.jsx)("img",{className:_,src:V?"https:image.tmdb.org/t/p/w300"+V:"",alt:B}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("h2",{className:d,children:[s.title," ","(",s.release_date.split("-")[0],")"]}),(0,b.jsxs)("span",{children:["User Score: ",Math.floor(10*s.vote_average),"%"]}),(0,b.jsx)("h3",{className:p,children:"Overview"}),(0,b.jsx)("p",{children:s.overview}),(0,b.jsx)("h3",{className:p,children:"Genres"}),(0,b.jsx)("ul",{className:v,children:(null===(e=s.genres)||void 0===e?void 0:e.length)&&s.genres.map((function(e){return(0,b.jsx)("li",{className:f,children:e.name},e.id)}))})]})]}):(0,b.jsx)("p",{children:"...Loading"}),(0,b.jsxs)("div",{className:x,children:[(0,b.jsx)("h3",{children:"Additional information"}),(0,b.jsxs)("ul",{className:g,children:[(0,b.jsx)(u.OL,{className:"".concat(j," ").concat(w),to:"cast",children:(0,b.jsx)("span",{children:"Cast"})}),(0,b.jsx)(u.OL,{className:"".concat(j," ").concat(k),to:"reviews",children:(0,b.jsx)("span",{children:"Reviews"})})]})]}),(0,b.jsx)(o.j3,{})]})},y="movie-details-page_back__PBT+E",Z=function(){return(0,b.jsx)("div",{className:y,children:(0,b.jsx)(N,{})})}},713:function(e,t,n){n.d(t,{Df:function(){return c},V0:function(){return u},YJ:function(){return o},tx:function(){return d},zv:function(){return l}});var r=n(861),a=n(757),s=n.n(a),i=n(340).Z.create({baseURL:"".concat("https://api.themoviedb.org/3/"),params:{api_key:"".concat("a5e80a241b45048d42e42bcf67dfe2f1")}}),c=function(){return i.get("trending/movie/day")},o=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.get("movie/".concat(t,"?language=en-US")),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.get("search/movie?include_adult=false&language=en-US&page=1&query=".concat(t)),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.get("movie/".concat(t,"/credits?language=en-US")),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.get("movie/".concat(t,"/reviews?language=en-US&page=1")),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=63.b8c0dccc.chunk.js.map