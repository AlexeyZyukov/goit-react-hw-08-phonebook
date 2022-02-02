(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{10:function(e,t,c){e.exports={link:"Navigation_link__3DyUu",activeLink:"Navigation_activeLink__p2VN2"}},11:function(e,t,c){e.exports={form:"login_form__3Ffey",label:"login_label__3dz7t",input:"login_input__1FCNT",button:"login_button__d8fA6"}},21:function(e,t,c){e.exports={container:"Container_container__3PBT8"}},22:function(e,t,c){e.exports={header:"homePage_header__FdZlA"}},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n,a,s=c(0),r=c.n(s),o=c(15),i=c.n(o),l=c(8),b=c(23),j=c(16),u=c(3),O=c(12),d=c(20),m=c.n(d),p=c(5),h=c(4),x=Object(u.b)("contacts/fetchContactRequest"),f=Object(u.b)("contacts/fetchContactSuccess"),_=Object(u.b)("contacts/fetchContactError"),g=Object(u.b)("contacts/addContactRequest"),N=Object(u.b)("contacts/addContactSuccess"),v=Object(u.b)("contacts/addContactError"),y=Object(u.b)("contacts/delContactRequest"),C=Object(u.b)("contacts/delContactSuccess"),k=Object(u.b)("contacts/delContactError"),w=(Object(u.b)("contacts/DELETE"),Object(u.b)("contacts/FILTER")),E=Object(u.c)([],(n={},Object(p.a)(n,f,(function(e,t){return t.payload})),Object(p.a)(n,N,(function(e,t){var c=t.payload;return e.map((function(e){return e.name})).includes(c.name)?(alert("".concat(c.name," is already in contacts!")),e):[].concat(Object(j.a)(e),[c])})),Object(p.a)(n,C,(function(e,t){var c=t.payload;return e.filter((function(e){return e.id!==c}))})),n)),L=Object(u.c)("",Object(p.a)({},w,(function(e,t){return t.payload}))),F=Object(u.c)(!1,(a={},Object(p.a)(a,x,(function(){return!0})),Object(p.a)(a,f,(function(){return!1})),Object(p.a)(a,_,(function(){return!1})),Object(p.a)(a,g,(function(){return!0})),Object(p.a)(a,N,(function(){return!1})),Object(p.a)(a,v,(function(){return!1})),Object(p.a)(a,y,(function(){return!0})),Object(p.a)(a,C,(function(){return!1})),Object(p.a)(a,k,(function(){return!1})),a)),P=Object(h.b)({items:E,filter:L,loading:F}),T=[].concat(Object(j.a)(Object(u.d)({serializableCheck:{ignoredActions:[O.a,O.f,O.b,O.c,O.d,O.e]}})),[m.a]),R={store:Object(u.a)({reducer:{contacts:P},middleware:T,devTools:!1})},S=c(2),A=c(10),q=c.n(A),z=c(1),D=function(){return Object(z.jsxs)("nav",{children:[Object(z.jsx)(l.b,{exact:!0,to:"/",className:q.a.link,activeClassName:q.a.activeLink,children:"Home"}),Object(z.jsx)(l.b,{exact:!0,to:"/register",className:q.a.link,activeClassName:q.a.activeLink,children:"Register"}),Object(z.jsx)(l.b,{exact:!0,to:"/login",className:q.a.link,activeClassName:q.a.activeLink,children:"Login"})]})},H=c(21),J=c.n(H);function U(e){var t=e.children;return Object(z.jsx)("div",{className:J.a.container,children:t})}function V(){return Object(z.jsxs)(U,{children:[Object(z.jsx)(D,{}),Object(z.jsx)("hr",{})]})}var W=c(22),B=c.n(W);function I(){return Object(z.jsx)("h1",{className:B.a.header,children:'Welcome! Please login or register to use "Phonebook"'})}var M=c(7),Q=c.n(M);function Z(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("h2",{style:{textAlign:"center",marginTop:20},children:"Create an account"}),Object(z.jsx)("br",{}),Object(z.jsxs)("form",{className:Q.a.form,autoComplete:"off",children:[Object(z.jsxs)("label",{className:Q.a.label,children:["Name",Object(z.jsx)("input",{type:"text",name:"name",placeholder:"enter your name",className:Q.a.input,autoFocus:"on"})]}),Object(z.jsxs)("label",{className:Q.a.label,children:["E-mail",Object(z.jsx)("input",{type:"email",name:"email",placeholder:"enter e-mail",className:Q.a.input})]}),Object(z.jsxs)("label",{className:Q.a.label,children:["Password",Object(z.jsx)("input",{type:"password",name:"password",placeholder:"create password",className:Q.a.input})]}),Object(z.jsx)("button",{type:"submit",className:Q.a.button,children:"Register"})]})]})}var G=c(11),K=c.n(G);function X(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("h2",{style:{textAlign:"center",marginTop:20},children:"Sign in to use Phonebook"}),Object(z.jsxs)("form",{className:K.a.form,autoComplete:"off",children:[Object(z.jsxs)("label",{className:K.a.label,children:["E-mail",Object(z.jsx)("input",{type:"email",name:"email",placeholder:"enter e-mail",className:K.a.input,autoFocus:"on"})]}),Object(z.jsxs)("label",{className:K.a.label,children:["Password",Object(z.jsx)("input",{type:"password",name:"password",placeholder:"enter password",className:K.a.input})]}),Object(z.jsx)("button",{type:"submit",className:K.a.button,children:"Login"})]})]})}function Y(){return Object(z.jsxs)(U,{children:[Object(z.jsx)(V,{}),Object(z.jsxs)(S.c,{children:[Object(z.jsx)(S.a,{path:"/",exact:!0,element:Object(z.jsx)(I,{})}),Object(z.jsx)(S.a,{path:"/register",element:Object(z.jsx)(Z,{})}),Object(z.jsx)(S.a,{path:"/login",element:Object(z.jsx)(X,{})})]})]})}c(33);i.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(l.a,{children:Object(z.jsx)(b.a,{store:R.store,children:Object(z.jsx)(Y,{})})})}),document.querySelector("#root"))},7:function(e,t,c){e.exports={form:"register_form__3rf-O",label:"register_label__3Hwel",input:"register_input__1jWPQ",button:"register_button__UxnOV"}}},[[34,1,2]]]);
//# sourceMappingURL=main.bdf8942b.chunk.js.map