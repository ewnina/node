(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),s=a.n(l),c=(a(14),a(5)),m=a(6),o=a(8),u=a(7),i=(a(15),a(16),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"React With NodeJS"))}),d=function(e){var t=e.users;if(console.log("users length:::",t.length),0===t.length)return null;var a=t.map((function(e,t){return function(e,t){return r.a.createElement("tr",{key:t,className:t%2===0?"odd":"even"},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.email))}(e,t)}));return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Users"),r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"User Id"),r.a.createElement("th",null,"Firstname"),r.a.createElement("th",null,"Lastname"),r.a.createElement("th",null,"Email"))),r.a.createElement("tbody",null,a)))},p=function(e){var t=e.numberOfUsers,a=e.getAllUsers;return r.a.createElement("div",{className:"display-board"},r.a.createElement("h4",null,"Users Created"),r.a.createElement("div",{className:"number"},t),r.a.createElement("div",{className:"btn"},r.a.createElement("button",{type:"button",onClick:function(e){return a()},className:"btn btn-warning"},"Get all Users")))},f=function(e){var t=e.onChangeForm,a=e.createUser;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-7 mrgnbtm"},r.a.createElement("h2",null,"Create User"),r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"First Name"),r.a.createElement("input",{type:"text",onChange:function(e){return t(e)},className:"form-control",name:"firstname",id:"firstname","aria-describedby":"emailHelp",placeholder:"First Name"})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Last Name"),r.a.createElement("input",{type:"text",onChange:function(e){return t(e)},className:"form-control",name:"lastname",id:"lastname",placeholder:"Last Name"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email"),r.a.createElement("input",{type:"text",onChange:function(e){return t(e)},className:"form-control",name:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Email"}))),r.a.createElement("button",{type:"button",onClick:function(e){return a()},className:"btn btn-danger"},"Create")))))},h=a(1),E=a.n(h),b=a(2);function v(){return g.apply(this,arguments)}function g(){return(g=Object(b.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return y.apply(this,arguments)}function y(){return(y=Object(b.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:t})});case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={user:{},users:[],numberOfUsers:0},e.createUser=function(t){N(e.state.user).then((function(t){console.log(t),e.setState({numberOfUsers:e.state.numberOfUsers+1})}))},e.getAllUsers=function(){v().then((function(t){console.log(t),e.setState({users:t,numberOfUsers:t.length})}))},e.onChangeForm=function(t){var a=e.state.user;"firstname"===t.target.name?a.firstName=t.target.value:"lastname"===t.target.name?a.lastName=t.target.value:"email"===t.target.name&&(a.email=t.target.value),e.setState({user:a})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement("div",{className:"container mrgnbtm"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement(f,{user:this.state.user,onChangeForm:this.onChangeForm,createUser:this.createUser})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(p,{numberOfUsers:this.state.numberOfUsers,getAllUsers:this.getAllUsers})))),r.a.createElement("div",{className:"row mrgnbtm"},r.a.createElement(d,{users:this.state.users})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.c2a9b779.chunk.js.map