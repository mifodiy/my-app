(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{310:function(t,e,s){"use strict";var r=s(3),a=s(37),n=s(38),u=s(43),i=s(42),o=s(1),p=s.n(o),c=s(12),h=s(13),f=s(0),b=function(t){return{isAuth:t.auth.isAuth}};e.a=function(t){var e=function(e){Object(u.a)(o,e);var s=Object(i.a)(o);function o(){return Object(a.a)(this,o),s.apply(this,arguments)}return Object(n.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(f.jsx)(t,Object(r.a)({},this.props)):Object(f.jsx)(c.a,{to:"/login"})}}]),o}(p.a.Component);return Object(h.b)(b)(e)}},311:function(t,e,s){"use strict";s.r(e);var r=s(3),a=s(37),n=s(38),u=s(43),i=s(42),o=s(1),p=s.n(o),c=s(13),h=s(145),f=s(44),b=s(12),j=s(310),O=s(10),d=s(0),l=function(t){Object(u.a)(s,t);var e=Object(i.a)(s);function s(){return Object(a.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshUser",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authtorizeUserId)||this.props.history.push("/login"),this.props.getProfileUsers(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshUser()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!=t.match.params.userId&&this.refreshUser()}},{key:"render",value:function(){return Object(d.jsx)(h.a,Object(r.a)(Object(r.a)({},this.props),{},{isOwner:!this.props.match.params.userId}))}}]),s}(p.a.Component);e.default=Object(O.d)(Object(c.b)((function(t){return{profileInfo:t.profilePage.profileInfo,status:t.profilePage.status,authtorizeUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfileUsers:f.c,getStatus:f.d,updateStatus:f.f,savePhoto:f.e}),b.f,j.a)(l)}}]);
//# sourceMappingURL=4.278a92c8.chunk.js.map