(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{78:function(t,e,n){},80:function(t,e,n){t.exports={container:"Container_container__3PBT8"}},81:function(t,e,n){},85:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(6),r=n(11),s=n.n(r),u=n(18),i=n(13),o=n.n(i),l=n(8),b=function(){return function(){var t=Object(u.a)(s.a.mark((function t(e){var n,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(l.h)()),t.prev=1,t.next=4,o.a.get("/contacts");case 4:n=t.sent,c=n.data,e(Object(l.i)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(l.g)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},j=function(t){return t.contacts.filter},f=function(t){var e=function(t){return t.contacts.items}(t),n=j(t);return e.filter((function(t){return t.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}))},m=n(80),d=n.n(m),O=n(1);function h(t){var e=t.children;return Object(O.jsx)("div",{className:d.a.container,children:e})}var p=n(15);n(78);function x(){var t=Object(c.useState)(""),e=Object(p.a)(t,2),n=e[0],r=e[1],s=Object(c.useState)(""),u=Object(p.a)(s,2),i=u[0],b=u[1],j=Object(a.c)(),f=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":b(c);break;default:return}},m=function(t,e){return j(function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(Object(l.b)()),o.a.post("/contacts",c).then((function(e){var n=e.data;return t(Object(l.c)(n))})).catch((function(e){return t(Object(l.a)(e))}))}}(t))},d=function(){r(""),b("")};return Object(O.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),m({name:n,number:i}),d()},children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{className:"form__label",children:"Name "}),Object(O.jsx)("input",{className:"form__input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:n,onChange:f,required:!0})]}),Object(O.jsxs)("label",{className:"form__label",children:[Object(O.jsx)("p",{className:"form__label",children:" Number"}),Object(O.jsx)("input",{className:"form__input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438",value:i,onChange:f,required:!0})]}),Object(O.jsx)("button",{type:"submit",className:"button",children:"Add contact"})]})}function v(){var t=Object(a.d)(j),e=Object(a.c)();return Object(O.jsxs)("div",{className:"filter-container",children:[Object(O.jsx)("p",{className:"title-text",children:"Find contacts by name"}),Object(O.jsx)("input",{className:"form__input",type:"text",name:"filter",value:t,onChange:function(t){return e(l.j(t.currentTarget.value))}})]})}n(81);e.default=Object(a.b)(null,(function(t){return{fetchContacts:function(){return t(b())}}}))((function(){var t=Object(a.d)(f),e=Object(a.c)(),n=function(t){return e((n=t,function(t){t(Object(l.e)()),o.a.delete("/contacts/".concat(n)).then((function(){return t(Object(l.f)(n))})).catch((function(e){return t(Object(l.d)(e))}))}));var n};return Object(c.useEffect)((function(){return e(b())}),[e]),Object(O.jsxs)(h,{children:[Object(O.jsx)(x,{}),Object(O.jsx)(v,{}),Object(O.jsx)("ul",{className:"contact-list",children:t.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(O.jsxs)("li",{className:"contact-list__item",children:[Object(O.jsx)("p",{className:"contact-list__text",children:c}),Object(O.jsx)("p",{className:"contact-list__text",children:a}),Object(O.jsx)("button",{className:"button",id:e,onClick:function(){return n(e)},children:"Delete contact"})]},e)}))})]})}))}}]);
//# sourceMappingURL=3.337e8f6c.chunk.js.map