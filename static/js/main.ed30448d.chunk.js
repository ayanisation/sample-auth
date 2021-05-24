(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{148:function(e,t,a){},149:function(e,t,a){},273:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(16),s=a.n(r),i=(a(148),a(149),a(8)),c=a(25),o=a(10),l=a.n(o),d=a(21),b=a(9),j=a(304),u=a(307),m=a(308),p=a(310),g=a(311),h=a(275),x=a(316),O=a(312),f=a(313),y=a(314),v=a(315),w=a(35),C=[{name:"fname",label:"First Name",type:"text"},{name:"lname",label:"Last Name",type:"text"},{name:"email",label:"Email ID",type:"text"},{name:"password",label:"Password",type:"password"},{name:"confPass",label:"Confirm Password",type:"password"}],k=a(79),S=a(29),T=a(49),F=a.n(T),N=a(51),P=a(77),B=a.n(P),I=a(78),W=a.n(I),D=a(2),q=Object(j.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(5),background:"white"},form:{display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"space-between"},textField:{marginBottom:8},buttonSubmit:{fontWeight:"bold",marginTop:10,marginBottom:10,background:"#79CDCD",fontFamily:"Copperplate Papyrus"},buttonCancel:{fontWeight:"bold",fontFamily:"Copperplate Papyrus",marginTop:10,marginBottom:10,background:"#ed1c24",color:"white"},buttons:{display:"flex",justifyContent:"space-around"}}})),L=S.a().shape({fname:S.b().required("Please enter first name"),lname:S.b().required("Please enter last name"),email:S.b().required("Please enter email").email("Invalid email"),password:S.b().required("Please create a password ").min(8,"Password should be atleast 8 digits long"),confPass:S.b().required("Please confirm password ").min(8,"Password should be atleast 8 digits long")});function U(){var e=q(),t=Object(i.g)(),a=Object(n.useState)(""),r=Object(b.a)(a,2),s=r[0],o=r[1],j=Object(n.useState)(!1),S=Object(b.a)(j,2),T=S[0],P=S[1],I=Object(n.useState)(!1),U=Object(b.a)(I,2),A=U[0],J=U[1],M=Object(n.useState)(!1),E=Object(b.a)(M,2),R=E[0],V=E[1],z=Object(w.d)({resolver:Object(k.a)(L)}),H=z.register,K=z.handleSubmit,G=z.formState.errors,Q=function(){var e=Object(d.a)(l.a.mark((function e(a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J(!0),e.prev=1,e.next=4,F.a.post("https://smpl-user-auth.herokuapp.com/users/signup",a);case 4:n=e.sent,(r=n.data).message?(J(!1),o(r.message),P(!0),setTimeout((function(){P(!1)}),3e3)):(localStorage.setItem("profile",JSON.stringify(r)),t.push("/upload")),e.next=16;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),J(!1),o("Unable to register (Internal server error)"),P(!0),setTimeout((function(){P(!1)}),3e3);case 16:J(!1);case 17:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(u.a,{in:!0,children:Object(D.jsxs)(m.a,{maxWidth:"sm",style:{marginTop:20,marginBottom:60},children:[Object(D.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:10,padding:20},children:Object(D.jsx)(p.a,{in:T,children:Object(D.jsx)(g.a,{style:{padding:10,background:"#ba160c"},children:Object(D.jsx)(h.a,{style:{color:"white"},variant:"h6",children:s})})})}),Object(D.jsx)(g.a,{className:e.paper,children:Object(D.jsxs)("form",{autoComplete:"off",className:e.form,noValidate:!0,children:[Object(D.jsx)(h.a,{style:{textAlign:"center",marginBottom:20},variant:"h4",children:"Create an account"}),C.map((function(t){return Object(D.jsxs)("div",{className:e.textField,children:[Object(D.jsx)(x.a,Object(c.a)(Object(c.a)({},H(t.name)),{},{name:t.name,type:"password"===t.name?R?"text":"password":t.type,variant:"outlined",label:t.label,fullWidth:!0,InputProps:{endAdornment:"password"===t.name?Object(D.jsx)(O.a,{position:"end",children:Object(D.jsx)(f.a,{onClick:function(){V((function(e){return!e}))},children:R?Object(D.jsx)(B.a,{}):Object(D.jsx)(W.a,{})})}):Object(D.jsx)(D.Fragment,{})}})),G[t.name]?Object(D.jsx)("p",{style:{color:"#b22222",marginTop:-3},children:G[t.name].message}):Object(D.jsx)(D.Fragment,{})]},t.name)})),Object(D.jsxs)("div",{className:e.buttons,children:[Object(D.jsx)(y.a,{className:e.buttonSubmit,onClick:K(Q),children:"Submit"}),Object(D.jsx)(y.a,{onClick:function(){t.push("/")},className:e.buttonCancel,children:"Cancel"})]}),Object(D.jsx)("div",{className:e.buttons,children:Object(D.jsx)(h.a,{component:N.b,to:"/login",style:{textDecoration:"none",marginTop:10},variant:"body2",children:"Have an account? Click here to Login"})}),A&&Object(D.jsx)(v.a,{})]})})]})})})}var A=Object(j.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(5),background:"white"},form:{display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"space-between"},textField:{marginBottom:20},buttonSubmit:{fontWeight:"bold",marginTop:10,marginBottom:10,background:"#79CDCD",fontFamily:"Copperplate Papyrus"},buttonCancel:{fontWeight:"bold",fontFamily:"Copperplate Papyrus",marginTop:10,marginBottom:10,background:"#ed1c24",color:"white"},buttons:{marginTop:50,display:"flex",justifyContent:"space-around"}}})),J=S.a().shape({email:S.b().required("Please enter email").email("Invalid email"),password:S.b().required("Please enter password")});function M(){var e=A(),t=Object(i.g)(),a=Object(n.useState)(""),r=Object(b.a)(a,2),s=r[0],o=r[1],j=Object(n.useState)(!1),C=Object(b.a)(j,2),S=C[0],T=C[1],P=Object(n.useState)(!1),I=Object(b.a)(P,2),q=I[0],L=I[1],U=Object(n.useState)(!1),M=Object(b.a)(U,2),E=M[0],R=M[1],V=Object(w.d)({resolver:Object(k.a)(J)}),z=V.register,H=V.handleSubmit,K=V.formState.errors,G=function(){var e=Object(d.a)(l.a.mark((function e(a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.prev=1,e.next=4,F.a.post("https://smpl-user-auth.herokuapp.com/users/login",a);case 4:n=e.sent,(r=n.data).message?(L(!1),o(r.message),T(!0),setTimeout((function(){T(!1)}),3e3)):(localStorage.setItem("profile",JSON.stringify(r)),t.push("/upload")),e.next=16;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),L(!1),o("Unable to fetch user (Internal server error)"),T(!0),setTimeout((function(){T(!1)}),3e3);case 16:L(!1);case 17:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(u.a,{in:!0,children:Object(D.jsxs)(m.a,{maxWidth:"sm",style:{marginTop:20,marginBottom:60},children:[Object(D.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:10,padding:20},children:Object(D.jsx)(p.a,{in:S,children:Object(D.jsx)(g.a,{style:{padding:10,background:"#ba160c"},children:Object(D.jsx)(h.a,{style:{color:"white"},variant:"h6",children:s})})})}),Object(D.jsxs)(g.a,{className:e.paper,children:[Object(D.jsxs)("form",{autoComplete:"off",className:e.form,noValidate:!0,children:[Object(D.jsx)(h.a,{style:{textAlign:"center",marginBottom:20},variant:"h4",children:"Login"}),Object(D.jsxs)("div",{className:e.textField,children:[Object(D.jsx)(x.a,Object(c.a)(Object(c.a)({},z("email")),{},{name:"email",type:"text",variant:"outlined",autoComplete:"on",label:"E-Mail",fullWidth:!0})),K.email?Object(D.jsx)("p",{style:{color:"#b22222",marginTop:-3},children:K.email.message}):Object(D.jsx)(D.Fragment,{})]}),Object(D.jsxs)("div",{className:e.textField,children:[Object(D.jsx)(x.a,Object(c.a)(Object(c.a)({},z("password")),{},{name:"password",type:E?"text":"password",variant:"outlined",label:"Password",fullWidth:!0,InputProps:{endAdornment:Object(D.jsx)(O.a,{position:"end",children:Object(D.jsx)(f.a,{onClick:function(){R((function(e){return!e}))},children:E?Object(D.jsx)(B.a,{}):Object(D.jsx)(W.a,{})})})}})),K.password?Object(D.jsx)("p",{style:{color:"#b22222",marginTop:-3},children:K.password.message}):Object(D.jsx)(D.Fragment,{})]}),Object(D.jsxs)("div",{className:e.buttons,children:[Object(D.jsx)(y.a,{className:e.buttonSubmit,onClick:H(G),children:"Submit"}),Object(D.jsx)(y.a,{onClick:function(){t.push("/")},className:e.buttonCancel,children:"Cancel"})]}),Object(D.jsx)("div",{style:{display:"flex",justifyContent:"space-around"},children:Object(D.jsx)(h.a,{component:N.b,to:"/register",style:{textDecoration:"none",marginTop:10},variant:"body2",children:"Click here to create a new account"})})]}),q&&Object(D.jsx)(v.a,{})]})]})})})}var E=a(136),R=a.n(E),V=a.p+"static/media/addImg.d8565c68.svg",z=Object(j.a)((function(){return{appBar:{borderRadius:15,display:"flex",padding:10,flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"#e50000",fontWeight:"bold"},paper:{borderRadius:15,padding:"50px 25px",background:"black"},buttonSignup:{fontWeight:"bold",marginTop:20,marginBottom:60,background:"#79CDCD"},buttonUpload:{fontWeight:"bold",marginTop:50,marginBottom:10,background:"#66cd00",width:"50%",textAlign:"center"},image:{marginLeft:"15px"},imgdiv:{height:300,width:"80%",background:"white",border:"2px solid",margin:"20px 0"}}}));function H(){var e=z(),t=Object(i.g)(),a=JSON.parse(localStorage.getItem("profile"));a||t.push("/login");var r=Object(n.useState)(""),s=Object(b.a)(r,2),o=s[0],j=s[1],x=Object(n.useState)(!1),O=Object(b.a)(x,2),f=O[0],w=O[1],C=Object(n.useState)(!1),k=Object(b.a)(C,2),S=k[0],T=k[1],N=Object(n.useState)({uploader:null===a||void 0===a?void 0:a.email,image:V}),P=Object(b.a)(N,2),B=P[0],I=P[1],W=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.prev=1,e.next=4,F.a.post("https://smpl-user-auth.herokuapp.com/images",B);case 4:t=e.sent,a=t.data,console.log(a),T(!1),j(a.message),w(!0),setTimeout((function(){w(!1)}),3e3),I(Object(c.a)(Object(c.a)({},B),{},{image:V})),e.next=20;break;case 14:e.prev=14,e.t0=e.catch(1),T(!1),413===e.t0.response.status?j("Image too large. Maximum 500KB allowed"):j("Unable to upload (Internal server error)"),w(!0),setTimeout((function(){w(!1)}),3e3);case 20:T(!1);case 21:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(u.a,{in:!0,children:Object(D.jsxs)(m.a,{maxWidth:"sm",align:"center",children:[Object(D.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:10,padding:20},children:Object(D.jsx)(p.a,{in:f,children:Object(D.jsx)(g.a,{style:{padding:10,background:"#ba160c"},children:Object(D.jsx)(h.a,{style:{color:"white"},variant:"h6",children:o})})})}),Object(D.jsxs)(g.a,{className:e.paper,children:[Object(D.jsx)(y.a,{style:{textDecoration:"none",color:"white",float:"right",marginTop:-20},onClick:function(){localStorage.clear(),t.push("/login")},children:"Logout"}),Object(D.jsx)(h.a,{variant:"h4",style:{marginTop:50,color:"white"},children:"Upload Image"}),Object(D.jsx)("div",{className:e.imgdiv,children:Object(D.jsx)("img",{height:"100%",width:"100%",src:B.image,alt:"broken"})}),Object(D.jsx)(R.a,{type:"file",fullWidth:!0,multiple:!1,onDone:function(e){var t=e.base64;I(Object(c.a)(Object(c.a)({},B),{},{image:t}))}}),Object(D.jsx)(y.a,{className:e.buttonUpload,fullWidth:!0,disabled:B.image===V,variant:"contained",size:"large",onClick:W,children:"Upload"}),S&&Object(D.jsx)(v.a,{})]})]})})})}var K=function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(i.d,{children:[Object(D.jsx)(i.b,{exact:!0,path:"/login",component:M}),Object(D.jsx)(i.b,{exact:!0,path:"/register",component:U}),Object(D.jsx)(i.b,{exact:!0,path:"/upload",component:H}),Object(D.jsx)(i.a,{to:"/login"})]})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,317)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))};s.a.render(Object(D.jsx)(N.a,{children:Object(D.jsx)(K,{})}),document.getElementById("root")),G()}},[[273,1,2]]]);
//# sourceMappingURL=main.ed30448d.chunk.js.map