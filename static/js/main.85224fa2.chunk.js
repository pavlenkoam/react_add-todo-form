(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),s=a(2),c=a(7),o=a(1),u=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),l=a(0),d=function(e){var t=e.user;return Object(l.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},m=function(e){var t=e.todo;return Object(l.jsxs)("article",{"data-id":t.id,children:[Object(l.jsx)("h2",{className:"TodoInfo__title title is-2 is-spaced",children:t.title}),t.user&&Object(l.jsx)(d,{user:t.user})]})},j=function(e){var t=e.todos,a=void 0===t?[]:t;return Object(l.jsx)("section",{className:"TodoList",children:a.map((function(e){return Object(l.jsx)(m,{todo:e},e.id)}))})};function b(e){return u.find((function(t){return t.id===e}))||null}var h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:b(e.userId)})})),O=function(){var e=Object(o.useState)(h),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(s.a)(i,2),d=c[0],m=c[1],O=Object(o.useState)(0),f=Object(s.a)(O,2),p=f[0],x=f[1],v=Object(o.useState)(!1),y=Object(s.a)(v,2),S=y[0],N=y[1],g=Object(o.useState)(!1),C=Object(s.a)(g,2),I=C[0],_=C[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Add todo form"}),Object(l.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),N(!d),_(!p),d&&p){var t={id:Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))))+1,title:d,userId:p,completed:!1,user:b(p)};n((function(e){return[].concat(Object(r.a)(e),[t])})),m(""),x(0)}},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("input",{type:"text","data-cy":"titleInput",onChange:function(e){m(e.target.value),N(!1)}}),S&&Object(l.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(l.jsxs)("div",{className:"field",children:[Object(l.jsxs)("select",{"data-cy":"userSelect",onChange:function(e){x(+e.target.value),_(!1)},children:[Object(l.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),u.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),I&&Object(l.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(l.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(l.jsx)(j,{todos:a})]})};i.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.85224fa2.chunk.js.map