(this["webpackJsonplogin-website"]=this["webpackJsonplogin-website"]||[]).push([[0],{35:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(24),c=n.n(s),o=(n(35),n(14)),i=n(4),u=n(1);var l=function(e){var t=e.isLoggedIn;return Object(u.jsxs)("div",{className:"header-container",children:[Object(u.jsx)("h1",{children:"Website-name"}),Object(u.jsx)("div",{className:"header-buttons",children:!t&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.b,{to:"/",children:Object(u.jsx)("button",{children:"LOGIN"})}),Object(u.jsx)(o.b,{to:"/register",children:Object(u.jsx)("button",{children:"REGISTER"})})]})})]})},j=n(3),d=n.n(j),p=n(11),b=n(6),h=n(7),O=n(19),m=n.n(O),f="localhost"===window.location.hostname?"http://localhost:8080":"https://serene-bayou-41251.herokuapp.com/";m.a.config();var g=function(){var e=Object(r.useState)({name:"",email:"",password:"",password2:""}),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(i.g)();function c(){return(c=Object(b.a)(d.a.mark((function e(t){var n,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.email,a=t.password,e.abrupt("return",fetch("".concat(f,"/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:r,password:a})}).then((function(e){e.json().then((function(e){console.log(e)}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsxs)("form",{className:"register-container",onSubmit:function(e){e.preventDefault();var t=[];null===n.password.match(/^[A-Za-z]\w{5,17}$/)&&t.push("password needs to contain one lower case, one upper case and between 6-16 characters"),n.password!==n.password2&&t.push("passwords does not match"),console.log("error message containing:",t),t.length>0?alert(t):(!function(e){c.apply(this,arguments)}(Object(p.a)({},n)),alert("registration successful"),s.push("./"))},children:[Object(u.jsx)("input",{required:!0,value:n.name,onChange:function(e){return a(Object(p.a)(Object(p.a)({},n),{},{name:e.target.value}))},placeholder:"Name *",id:"name"}),Object(u.jsx)("input",{type:"email",required:!0,value:n.email,onChange:function(e){return a(Object(p.a)(Object(p.a)({},n),{},{email:e.target.value}))},placeholder:"Email *",id:"email"}),Object(u.jsx)("input",{type:"password",value:n.password,onChange:function(e){return a(Object(p.a)(Object(p.a)({},n),{},{password:e.target.value}))},placeholder:"Enter Password *",id:"password"}),Object(u.jsx)("input",{type:"password",value:n.password2,onChange:function(e){return a(Object(p.a)(Object(p.a)({},n),{},{password2:e.target.value}))},placeholder:"Repeat Password *",id:"password2"}),Object(u.jsx)("button",{type:"submit",children:"REGISTER"})]})};var x=function(e){var t=e.deleteToken,n=Object(i.g)();return Object(u.jsxs)("div",{className:"secret-container",children:[Object(u.jsx)("h1",{children:"You have successfully accessed the secret page!"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("click"),t(),n.push("./")},children:"Logout"})]})};m.a.config();var v=function(e){var t=e.setToken,n=Object(r.useState)(),a=Object(h.a)(n,2),s=a[0],c=a[1],o=Object(r.useState)(),l=Object(h.a)(o,2),j=l[0],p=l[1],O=Object(i.g)();function m(e){return g.apply(this,arguments)}function g(){return g=Object(b.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,console.log("URL",f),e.abrupt("return",fetch("".concat(f,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:r})}).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}var x=function(){var e=Object(b.a)(d.a.mark((function e(n){var r,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m({email:s,password:j});case 3:r=e.sent,a=r.success,c=r.token,a?(alert("Login successful"),t(c),O.push("./secret-page")):alert("Either email or password is wrong or there is no member with this email");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"front-container",children:Object(u.jsxs)("form",{onSubmit:x,children:[Object(u.jsx)("input",{name:"email",type:"text",placeholder:"Email",onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("input",{name:"password",type:"password",placeholder:"Password",onChange:function(e){return p(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"LOGIN"})]})})},w=n(29),y=n(27),k=n(28),S=Object(u.jsx)(y.a,{icon:k.a});function T(){var e=Object(w.a)(),t=e.register,n=e.handleSubmit;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("input",{name:"username",type:"text",placeholder:"Username",ref:t({required:"This is required."})}),Object(u.jsxs)("div",{className:"pass-wrapper",children:[Object(u.jsx)("input",{placeholder:"Password",name:"password",type:"password",ref:t({required:"This is required."})}),Object(u.jsx)("i",{children:S})]}),Object(u.jsx)("button",{type:"submit",onClick:n((function(e){console.log(e)})),children:"Submit"})]})}var N=n(30);function C(){var e=Object(r.useState)(function(){var e=sessionStorage.getItem("token");return JSON.parse(e)}()),t=Object(h.a)(e,2),n=t[0],a=t[1];return{setToken:function(e){sessionStorage.setItem("token",JSON.stringify(e)),a(e)},deleteToken:function(){sessionStorage.removeItem("token"),a(null)},token:n}}var I=["children"],E=function(e){var t=e.children,n=Object(N.a)(e,I),r=C().token;return Object(u.jsx)(i.b,Object(p.a)(Object(p.a)({},n),{},{render:function(e){var n=e.location;return r?t:Object(u.jsx)(i.a,{to:{pathname:"/",state:{from:n}}})}}))};n(50);var L=function(){var e=C(),t=e.deleteToken,n=e.setToken,r=null!==e.token;return Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(l,{isLoggedIn:r}),Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.b,{exact:!0,path:"/",children:Object(u.jsx)(v,{setToken:n})}),Object(u.jsx)(i.b,{exact:!0,path:"/register",children:Object(u.jsx)(g,{})}),Object(u.jsx)(i.b,{exact:!0,path:"/logout",children:Object(u.jsx)(T,{})}),Object(u.jsx)(E,{exact:!0,path:"/secret-page",children:Object(u.jsx)(x,{deleteToken:t})})]})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),P()}},[[51,1,2]]]);
//# sourceMappingURL=main.b3d2d20c.chunk.js.map