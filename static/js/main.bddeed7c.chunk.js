(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,n){e.exports={cover:"ProfileInfo_cover__301bp",description:"ProfileInfo_description__2yWda"}},102:function(e,t,n){e.exports={formControl:"Valid_formControl__2lBvQ",error:"Valid_error__26C_X"}},105:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(27),c=n(5),s="SEND-MESSAGE",a={dialogs:[{id:"1",name:"Vova"},{id:"2",name:"Anna"},{id:"3",name:"Max"}],messages:[{id:"1",message:"Hi"},{id:"2",message:"Hi people"},{id:"3",message:"yo"}]},i=function(e){return{type:s,value:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:"4",message:t.value}])});default:return e}}},106:function(e,t,n){},11:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE",bestFriends:"Navbar_bestFriends__1_KNx",bestFriendsName:"Navbar_bestFriendsName__3Y3zo"}},141:function(e,t,n){e.exports={currentPage:"Paginator_currentPage__1H8mX"}},142:function(e,t,n){e.exports={photoUser:"Users_photoUser__N2Vkt"}},144:function(e,t,n){"use strict";var r=n(50),c=n.n(r),s=n(101),a=n.n(s),i=n(47),o=n(33),u=n(1),l=n(0),j=function(e){var t=Object(u.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],s=Object(u.useState)(e.status),a=Object(o.a)(s,2),i=a[0],j=a[1];Object(u.useEffect)((function(){j(e.status)}),[e.status]);return Object(l.jsxs)("div",{children:[!r&&Object(l.jsxs)("div",{onDoubleClick:function(){c(!0)},children:["My status:",e.status," "]}),r&&Object(l.jsx)("div",{children:Object(l.jsx)("input",{autoFocus:!0,onChange:function(e){j(e.currentTarget.value)},onBlur:function(){c(!1),e.updateStatus(i)},value:i})})]})},d=function(e){var t=e.profileInfo,n=e.status,r=e.updateStatus;return t?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:a.a.cover,children:Object(l.jsx)("img",{src:"https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:t.photos.large}),Object(l.jsxs)("div",{className:a.a.description,children:[Object(l.jsxs)("div",{children:["My name: ",t.fullName]}),Object(l.jsx)(j,{status:n,updateStatus:r})]})]})]}):Object(l.jsx)(i.a,{})},f=n(70),b=n(97),p=n.n(b),h=n(58),O=n.n(h),g=n.p+"static/media/pngwing.com.08d13399.png",m=function(e){var t=e.message,n=e.likeCount;return Object(l.jsxs)("div",{className:O.a.item,children:[Object(l.jsx)("img",{src:"https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"}),Object(l.jsx)("span",{children:t}),Object(l.jsx)("div",{children:Object(l.jsx)("span",{className:O.a.textMessage,children:Object(l.jsxs)("button",{className:O.a.likeButton,children:[Object(l.jsx)("img",{className:O.a.imgLike,src:g}),n]})})})]})},v=n(136),x=n(30),w=n(26),_=Object(x.a)(20),P=Object(v.a)({form:"myPosts"})((function(e){var t=e.handleSubmit;return Object(l.jsxs)("form",{onSubmit:t,children:[Object(w.c)("newPostText",w.b,[x.b,_],"New text"),Object(l.jsx)("div",{children:Object(l.jsx)("button",{children:"Add"})})]})})),y=u.memo((function(e){e.profilePage;var t=e.posts.map((function(e){return Object(l.jsx)(m,{message:e.message,likeCount:e.likeCount})}));return Object(l.jsxs)("div",{className:p.a.posts,children:[Object(l.jsx)("h3",{children:"My posts"}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:Object(l.jsx)(P,{onSubmit:function(t){e.addPostActionCreator(t.newPostText)}})})}),Object(l.jsx)("div",{children:t})]})})),C=n(13),S=Object(C.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{addPostActionCreator:f.a})(y);t.a=function(e){return Object(l.jsxs)("div",{className:c.a.content,children:[Object(l.jsx)(d,{profileInfo:e.profileInfo,status:e.status,updateStatus:e.updateStatus}),Object(l.jsx)(S,{store:e.store})]})}},17:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(96),c=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b1ae9ead-f45f-4043-a7ce-212f583e09f0"}}),s={getUsers:function(e,t){return c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},a={follow:function(e){return c.post("follow/".concat(e))},unfollow:function(e){return c.delete("follow/".concat(e))}},i={checkAuth:function(){return c.get("auth/me")},singIn:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return c.post("auth/login",{email:e,password:t,rememberMe:n})},singOut:function(){return c.delete("auth/login")}},o={getProfile:function(e){return c.get("profile/"+e)},getStatus:function(e){return c.get("profile/status/"+e)},updateStatus:function(e){return c.put("profile/status",{status:e})}}},174:function(e,t,n){},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return d}));var r=n(5),c=n(76),s=(n(1),n(102)),a=n.n(s),i=n(98),o=(n(30),n(0)),u=function(e){e.input;var t=e.meta,n=(e.child,Object(c.a)(e,["input","meta","child"])),r=t.touched&&t.error;return Object(o.jsxs)("div",{className:a.a.formControl+" "+(r?a.a.error:""),children:[Object(o.jsx)("div",{children:n.children}),r&&Object(o.jsx)("span",{children:t.error})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e,t,n,r){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,{name:e,component:t,validate:n,placeholder:r,type:c}),s]})}},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"required"},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbol")}}},306:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(68),a=n.n(s),i=(n(174),n(37)),o=n(38),u=n(43),l=n(42),j=(n(106),n(72)),d=n.n(j),f=n(16),b=n(0),p=function(e){return Object(b.jsxs)("header",{className:d.a.header,children:[Object(b.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"}),Object(b.jsx)("div",{className:d.a.authLogin,children:e.isAuth?Object(b.jsxs)("div",{children:[e.login," ",Object(b.jsx)("button",{onClick:e.singOut,children:"SingOut "})]}):Object(b.jsx)(f.b,{to:"/login",children:"Login"})})]})},h=n(11),O=n.n(h),g=n(13),m=function(e){return Object(b.jsxs)("div",{className:O.a.bestFriends,children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"})}),Object(b.jsx)("div",{className:O.a.bestFriendsName,children:e.name})]})},v=function(e){var t=e.sidebarPage.friend.map((function(e){return Object(b.jsx)(m,{id:e.id,name:e.name})}));return Object(b.jsx)("div",{className:O.a.bestFriends,children:t})},x=Object(g.b)((function(e){return{sidebarPage:e.sidebarPage}}),(function(e){return{}}))(v),w=function(e){return Object(b.jsxs)("nav",{className:O.a.nav,children:[Object(b.jsx)("div",{className:O.a.item,children:Object(b.jsx)(f.b,{to:"/profile",activeClassName:O.a.activeLink,children:"Profile"})}),Object(b.jsx)("div",{className:"".concat(O.a.item," ").concat(O.a.active),children:Object(b.jsx)(f.b,{to:"/dialogs",activeClassName:O.a.activeLink,children:"Message"})}),Object(b.jsx)("div",{className:O.a.item,children:Object(b.jsx)(f.b,{to:"/news",activeClassName:O.a.activeLink,children:"News"})}),Object(b.jsx)("div",{className:O.a.item,children:Object(b.jsx)(f.b,{to:"/music",activeClassName:O.a.activeLink,children:"Music"})}),Object(b.jsx)("div",{className:O.a.item,children:Object(b.jsx)(f.b,{to:"/settings",activeClassName:O.a.activeLink,children:"Settings"})}),Object(b.jsx)("div",{className:O.a.item,children:Object(b.jsx)(f.b,{to:"/users",activeClassName:O.a.activeLink,children:"Users"})}),Object(b.jsx)("div",{className:O.a.bestFriends,children:Object(b.jsx)(x,{store:e.store})})]})},_=(n(144),n(12)),P=function(){return Object(b.jsx)("div",{children:"News"})},y=function(){return Object(b.jsx)("div",{children:"Music"})},C=function(){return Object(b.jsx)("div",{children:"Settings"})},S=n(33),k=n(141),N=n.n(k),I=function(e){for(var t=e.totalItemCount,n=e.pageSize,c=e.currentPage,s=e.onChangeCurrentPage,a=e.countPortion,i=void 0===a?10:a,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var j=Math.ceil(o/i);console.log(j);var d=Object(r.useState)(1),f=Object(S.a)(d,2),p=f[0],h=f[1],O=(p-1)*i+1,g=p*i;return Object(b.jsxs)("div",{children:[p>1&&Object(b.jsx)("button",{onClick:function(){return h(p-1)},children:"Left"}),u.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(b.jsx)("span",{className:c===e&&N.a.currentPage,onClick:function(){s(e)},children:e})})),j>p&&Object(b.jsx)("button",{onClick:function(){return h(p+1)},children:"right"})]})},E=n.p+"static/media/usersicon.4ce1ce10.jpeg",L=n(142),U=n.n(L),F=function(e){var t=e.user,n=e.followingProgress,r=e.unfollow,c=e.follow;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(f.b,{to:"/profile/"+t.id,children:Object(b.jsx)("img",{src:null!=t.photos.small?t.photos.small:E,className:U.a.photoUser})})}),Object(b.jsx)("div",{children:t.followed?Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})}),Object(b.jsx)("div",{children:t.name}),Object(b.jsx)("div",{children:t.status}),Object(b.jsx)("div",{children:"u.location.city"}),Object(b.jsx)("div",{children:"u.location.country"})]})},T=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(I,{totalItemCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onChangeCurrentPage:e.onChangeCurrentPage}),e.users.map((function(t){return Object(b.jsx)(F,{user:t,follow:e.follow,unfollow:e.unfollow,followingProgress:e.followingProgress})}))]})},A=n(9),z=n.n(A),M=n(18),R=n(27),D=n(5),G=n(17),H=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(D.a)(Object(D.a)({},e),r):e}))},B="FOLLOW",V="UNFOLLOW",q="SET_USERS",W="SET_CURRENT_PAGE",X="SET_USERS_COUNT",J="TOGGLE_IS_FETCHING",K="TOGGLE_FOLLOWING_PROGRESS",Q={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingProgress:[]},Y=function(e){return{type:B,userId:e}},Z=function(e){return{type:V,userId:e}},$=function(e){return{type:q,users:e}},ee=function(e){return{type:W,page:e}},te=function(e){return{type:J,isFetching:e}},ne=function(e,t){return{type:K,isFetching:e,userId:t}},re=function(){var e=Object(M.a)(z.a.mark((function e(t,n,r,c){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ne(!0,n)),e.next=3,r;case 3:0===e.sent.data.resultCode&&t(c),t(ne(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(D.a)(Object(D.a)({},e),{},{users:H(e.users,t.userId,"id",{followed:!0})});case V:return Object(D.a)(Object(D.a)({},e),{},{users:H(e.users,t.userId,"id",{followed:!1})});case q:return Object(D.a)(Object(D.a)({},e),{},{users:t.users});case W:return Object(D.a)(Object(D.a)({},e),{},{currentPage:t.page});case X:return Object(D.a)(Object(D.a)({},e),{},{totalUsersCount:t.count});case J:return Object(D.a)(Object(D.a)({},e),{},{isFetching:t.isFetching});case K:return Object(D.a)(Object(D.a)({},e),{},{followingProgress:t.isFetching?[].concat(Object(R.a)(e.followingProgress),[t.userId]):Object(R.a)(e.followingProgress.filter((function(e){return e!=t.userId})))});default:return e}},se=n(47),ae=n(10),ie=function(e){return e.usersPage.users},oe=function(e){return e.usersPage.pageSize},ue=function(e){return e.usersPage.totalUsersCount},le=function(e){return e.usersPage.currentPage},je=function(e){return e.usersPage.isFetching},de=function(e){return e.usersPage.followingProgress},fe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).onChangeCurrentPage=function(t){e.props.changeCurrentPage(t,e.props.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)(se.a,{}):null,Object(b.jsx)(T,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onChangeCurrentPage:this.onChangeCurrentPage,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingProgress:this.props.followingProgress})]})}}]),n}(c.a.Component),be=Object(ae.d)(Object(g.b)((function(e){return{users:ie(e),pageSize:oe(e),totalUsersCount:ue(e),currentPage:le(e),isFetching:je(e),followingProgress:de(e)}}),{requestUsers:function(e,t){return function(){var n=Object(M.a)(z.a.mark((function n(r){var c;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(te(!0)),n.next=3,G.d.getUsers(e,t);case 3:c=n.sent,r(te(!1)),r($(c.items)),r((s=c.totalCount,{type:X,count:s}));case 7:case"end":return n.stop()}var s}),n)})));return function(e){return n.apply(this,arguments)}}()},changeCurrentPage:function(e,t){return function(){var n=Object(M.a)(z.a.mark((function n(r){var c;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(te(!0)),r(ee(e)),n.next=4,G.d.getUsers(e,t);case 4:c=n.sent,r(te(!1)),r($(c.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(M.a)(z.a.mark((function t(n){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,re(n,e,G.b.follow(e),Y(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(M.a)(z.a.mark((function t(n){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,re(n,e,G.b.unfollow(e),Z(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(fe),pe=n(41),he="SET_AUTH_USER",Oe={userId:null,login:null,email:null,isAuth:!1},ge=function(e,t,n,r){return{type:he,data:{userId:e,login:t,email:n,isAuth:r}}},me=function(){return function(){var e=Object(M.a)(z.a.mark((function e(t){var n,r,c,s,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.checkAuth();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,s=r.login,a=r.email,t(ge(c,s,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:return Object(D.a)(Object(D.a)({},e),t.data);default:return e}},xe=(n(96),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(p,Object(D.a)({},this.props))}}]),n}(c.a.Component)),we=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{checkAuth:me,singOut:function(){return function(){var e=Object(M.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.singOut();case 2:0===e.sent.data.resultCode&&t(ge(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(xe),_e=n(136),Pe=n(26),ye=n(30),Ce=Object(ye.a)(20),Se=Object(_e.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(b.jsxs)("form",{onSubmit:t,children:[Object(Pe.c)("email",Pe.a,[ye.b,Ce],"Email"),Object(Pe.c)("password",Pe.a,[ye.b,Ce],"Password","password"),Object(Pe.c)("rememberMe",Pe.a,[],"","checkbox","Remember me"),n&&Object(b.jsx)("div",{children:n}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Submit"})})]})})),ke=Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}),{singIn:function(e,t,n){return function(){var r=Object(M.a)(z.a.mark((function r(c){var s;return z.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,G.a.singIn(e,t,n);case 2:0===(s=r.sent).data.resultCode?c(me()):c(Object(pe.a)("login",{_error:s.data.messages[0]}));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(b.jsx)(_.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(Se,{onSubmit:function(t){e.singIn(t.email,t.password,t.rememberMe)}})]})})),Ne="INITIALIZE_SUCCESS",Ie={initialize:!1},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(D.a)(Object(D.a)({},e),{},{initialize:!0});default:return e}},Le=function(e){return function(t){return Object(b.jsx)(c.a.Suspense,{fallback:Object(b.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(b.jsx)(e,Object(D.a)({},t))})}},Ue=c.a.lazy((function(){return n.e(3).then(n.bind(null,311))})),Fe=c.a.lazy((function(){return n.e(4).then(n.bind(null,309))})),Te=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialize?Object(b.jsx)(f.a,{children:Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(we,{}),Object(b.jsx)(w,{}),Object(b.jsxs)("div",{className:"app-wrapper-content",children:[Object(b.jsx)(_.b,{path:"/dialogs",render:Le(Ue)}),Object(b.jsx)(_.b,{path:"/profile/:userId?",render:Le(Fe)}),Object(b.jsx)(_.b,{path:"/users",render:function(){return Object(b.jsx)(be,{})}}),Object(b.jsx)(_.b,{path:"/login",render:function(){return Object(b.jsx)(ke,{})}}),Object(b.jsx)(_.b,{path:"/news",component:P}),Object(b.jsx)(_.b,{path:"/music",component:y}),Object(b.jsx)(_.b,{path:"/settings",component:C})]})]})}):Object(b.jsx)(se.a,{})}}]),n}(c.a.Component),Ae=Object(ae.d)(Object(g.b)((function(e){return{initialize:e.app.initialize}}),{initializeApp:function(){return function(e){var t=e(me());Promise.all([t]).then((function(){e({type:Ne})}))}}}))(Te),ze=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,310)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))},Me=n(70),Re=n(105),De={friend:[{id:"1",name:"Sasha"},{id:"2",name:"Petya"},{id:"3",name:"Gera"}]},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;return e},He=n(143),Be=n(137),Ve=Object(ae.c)({profilePage:Me.b,dialogsPage:Re.a,sidebarPage:Ge,usersPage:ce,auth:ve,form:Be.a,app:Ee}),qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,We=Object(ae.e)(Ve,qe(Object(ae.a)(He.a)));a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g.a,{store:We,children:Object(b.jsx)(Ae,{})})}),document.getElementById("root")),ze()},47:function(e,t,n){"use strict";n(1);var r=n.p+"static/media/Spinner-1s-200px.b767aab4.svg",c=n(0);t.a=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:r})})}},50:function(e,t,n){},58:function(e,t,n){e.exports={item:"Post_item__ihtu9",likeButton:"Post_likeButton__iek-s"}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(9),c=n.n(r),s=n(18),a=n(27),i=n(5),o=n(17),u="ADD_POST",l="DELETE_POST",j="SET_PROFILE_USER",d="SET_STATUS",f={posts:[{id:"1",message:"Hello my name is Vova ",likeCount:32},{id:"2",message:"Hello my name is dima ",likeCount:11}],newPostText:"",profileInfo:null,status:""},b=function(e){return{type:u,value:e}},p=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((c=r.data,{type:j,profileInfo:c}));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.updateStatus(e);case 2:t.sent,n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:"3",message:t.value,likeCount:1};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[n])});case l:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.id}))});case j:return Object(i.a)(Object(i.a)({},e),{},{profileInfo:t.profileInfo});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}}},72:function(e,t,n){e.exports={header:"Header_header__1VCKf",authLogin:"Header_authLogin__1d8z7"}},97:function(e,t,n){e.exports={item:"MyPosts_item__R6Jlo",posts:"MyPosts_posts__3tZ1c"}}},[[306,1,2]]]);
//# sourceMappingURL=main.bddeed7c.chunk.js.map