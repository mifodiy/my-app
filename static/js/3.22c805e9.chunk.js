(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{307:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialog:"Dialogs_dialog__lk_cw",activeLink:"Dialogs_activeLink__34w6e",dialogItems:"Dialogs_dialogItems__3flRc",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},308:function(e,a,s){"use strict";var t=s(5),i=s(37),n=s(38),c=s(43),r=s(42),o=s(1),l=s.n(o),j=s(12),d=s(13),g=s(0),u=function(e){return{isAuth:e.auth.isAuth}};a.a=function(e){var a=function(a){Object(c.a)(o,a);var s=Object(r.a)(o);function o(){return Object(i.a)(this,o),s.apply(this,arguments)}return Object(n.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(g.jsx)(e,Object(t.a)({},this.props)):Object(g.jsx)(j.a,{to:"/login"})}}]),o}(l.a.Component);return Object(d.b)(u)(a)}},311:function(e,a,s){"use strict";s.r(a);s(1);var t=s(105),i=s(307),n=s.n(i),c=s(16),r=s(0),o=function(e){var a=e.id,s=e.name,t="/dialogs/"+a;return Object(r.jsx)("div",{className:n.a.dialog+" "+n.a.active,children:Object(r.jsx)(c.b,{to:t,activeClassName:n.a.activeLink,children:s})})},l=function(e){var a=e.massage;return Object(r.jsx)("div",{className:n.a.message,children:a})},j=s(98),d=s(136),g=s(26),u=s(30),b=Object(u.a)(200),m=Object(d.a)({form:"messagePage"})((function(e){var a=e.handleSubmit;return Object(r.jsxs)("form",{onSubmit:a,children:[Object(r.jsx)(j.a,{name:"newMessage",component:g.b,validate:[u.b,b]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Enter"})})]})})),O=function(e){var a=e.dialogsPage,s=a.dialogs.map((function(e){return Object(r.jsx)(o,{id:e.id,name:e.name})})),t=a.messages.map((function(e){return Object(r.jsx)(l,{massage:e.message})}));return Object(r.jsxs)("div",{className:n.a.dialogs,children:[Object(r.jsx)("div",{className:n.a.dialogItems,children:s}),Object(r.jsxs)("div",{className:n.a.messages,children:[Object(r.jsx)("div",{children:t}),Object(r.jsx)("div",{children:Object(r.jsx)(m,{onSubmit:function(a){e.sendMessageCreator(a.newMessage)}})})]})]})},h=s(13),v=s(308),_=s(10);a.default=Object(_.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendMessageCreator:t.b}),v.a)(O)}}]);
//# sourceMappingURL=3.22c805e9.chunk.js.map