"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[874],{7100:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(563),i=a(6747),r=a(184);function o(e){var t=(0,n.Z)({root:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"column",position:"fixed",top:"".concat(e.top),left:"".concat(e.left),width:"".concat(e.width),height:"".concat(e.height),backgroundColor:"".concat(e.backgroundColor),fontFamily:["Trispace","sans-serif"].join(","),fontWeight:"900",fontSize:"3vh",padding:"1rem",border:"solid ".concat(i.O.Black),borderWidth:"3px 4px 3px 5px",borderRadius:"95% 4% 92% 5%/4% 95% 6% 95%",boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)","@media (max-width: 1280px)":{top:"".concat(e.topMobile),width:"".concat(e.widthMobile),left:"".concat(e.leftMobile),height:"".concat(e.heightMobile),fontSize:"3vh"}}})();return(0,r.jsxs)("div",{className:t.root,children:[" ",e.children," "]})}},7874:function(e,t,a){a.r(t),a.d(t,{default:function(){return F}});var n=a(885),i=a(2791),r=a(563),o=a(7705),s=a(2977),l="title_title__ib48g",c=a(6747),d=a(1171),m=a(1413),u=a(5861),p=a(7757),h=a.n(p),x=a(4569),f=a.n(x),g=a(456),b=a(1298),w=a(8743),v=a(6030),j=a(892),y=function(){var e=(0,u.Z)(h().mark((function e(t,a,n){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem("jwtToken",t);case 2:return e.next=4,localStorage.setItem("UserName",a);case 4:return e.next=6,localStorage.setItem("Email",n);case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),k=a(6140),N=a(7100),C=a(4815),S=a(5429),B=a(184);function Z(){var e=I(),t=(0,v.I0)(),a=(0,i.useState)({email:"",password:""}),r=(0,n.Z)(a,2),o=r[0],s=r[1],l=localStorage.getItem("Email")||"",d=(0,i.useState)(""),p=(0,n.Z)(d,2),x=p[0],Z=p[1],O=(0,i.useState)(!1),T=(0,n.Z)(O,2),P=T[0],D=T[1],F=function(){var e=(0,u.Z)(h().mark((function e(t){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),""!==l&&(k.ZP.error("You already are logged in"),setTimeout((function(){return window.location.href="https://coolormedia.netlify.app/home"}),1e3)),e.next=4,f().post(C.J+"geneLink",{email:x.toLowerCase()}).then(function(){var e=(0,u.Z)(h().mark((function e(t){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===t.data.success?k.ZP.success(t.data.message):k.ZP.error("E-Mail not found");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:Z(""),D(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=(0,u.Z)(h().mark((function e(a){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,f().post(C.J+"login",{email:o.email.toLowerCase(),password:o.password}).then(function(){var e=(0,u.Z)(h().mark((function e(a){var n,i,r,o,l;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Welcome Back"===a.data.message){e.next=4;break}return e.abrupt("return",k.ZP.error(a.data.message));case 4:return k.ZP.success(a.data.message+" "+a.data.firstname+"!"),n=a.data,i=n.token,r=n.firstname,o=n.email,e.next=8,y(i,r,o);case 8:return e.next=10,(0,j.Z)(i);case 10:l=(0,g.Z)(i),t((0,w.op)(l)),setTimeout((function(){return window.location.href="https://coolormedia.netlify.app/home"}),1e3);case 13:s({email:"",password:""});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,B.jsxs)("div",{className:e.root,children:[P?(0,B.jsxs)(N.Z,{top:"10%",left:"25%",width:"50%",height:"fit-content",backgroundColor:c.O.Pink,topMobile:"20%",leftMobile:"0%",widthMobile:"90%",children:[(0,B.jsx)("div",{className:e.divClose,children:(0,B.jsx)("button",{onClick:function(){return D(!1)},type:"button",className:e.buttonPopUp,children:(0,B.jsx)(b.P,{size:30,color:c.O.Black})})}),(0,B.jsxs)("div",{className:e.divContentPopUp,children:[(0,B.jsx)("p",{className:e.textPopUp,children:"Please fill in the input so that we can send you an email."}),(0,B.jsxs)("form",{onSubmit:F,className:e.form,children:[(0,B.jsxs)("div",{className:e.divInput,children:[(0,B.jsx)("label",{htmlFor:"email",className:e.label,children:"Email"}),(0,B.jsx)("input",{required:!0,name:"emailPopUp",placeholder:"Email",type:"email",value:x,onChange:function(e){return Z(e.target.value)},className:e.input,autoComplete:"off"})]}),(0,B.jsx)("div",{className:e.divButton,children:(0,B.jsx)("button",{className:e.button,type:"submit",children:"Send Email"})})]})]})]}):null,(0,B.jsx)("div",{className:e.divTitle,children:(0,B.jsx)("h1",{className:S.Z.microTitles,children:"Login"})}),(0,B.jsxs)("form",{onSubmit:M,className:e.form,children:[(0,B.jsxs)("div",{className:e.divInput,children:[(0,B.jsx)("label",{htmlFor:"email",className:e.label,children:"Email"}),(0,B.jsx)("input",{required:!0,name:"email",placeholder:"Email",type:"email",value:o.email,onChange:function(e){return s((0,m.Z)((0,m.Z)({},o),{},{email:e.target.value}))},className:e.input,autoComplete:"off"})]}),(0,B.jsxs)("div",{className:e.divInput,children:[(0,B.jsx)("label",{htmlFor:"password",className:e.label,children:"Password"}),(0,B.jsx)("input",{required:!0,name:"password",placeholder:"Password",type:"password",value:o.password,onChange:function(e){return s((0,m.Z)((0,m.Z)({},o),{},{password:e.target.value}))},className:e.input,autoComplete:"off"})]}),(0,B.jsx)("div",{className:e.divButton,children:(0,B.jsx)("button",{className:e.button,type:"submit",children:"Login"})})]}),(0,B.jsx)("div",{className:e.divButton,children:(0,B.jsx)("button",{className:e.button,type:"button",onClick:function(){return D(!0)},children:"Reset Password?"})})]})}var I=(0,r.Z)({root:{display:"flex",flexDirection:"column",width:"50%",backgroundColor:c.O.Purple,height:"fit-content",minHeight:"50vh",alignItems:"center",justifyContent:"flex-start",textAlign:"center",padding:"2rem",border:"solid ".concat(c.O.Black),borderWidth:"3px 4px 3px 5px",borderRadius:"95% 4% 92% 5%/4% 95% 6% 95%",boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",transition:"background-color 1s ease","@media (max-width: 1280px)":{width:"100%",borderWidth:"none",borderRadius:"0px",boxShadow:"none",border:"none",borderTop:"2px solid ".concat(c.O.Black),borderBottom:"2px solid ".concat(c.O.Black)}},divClose:{display:"flex",width:"100%",alignItems:"flex-end",justifyContent:"flex-end",marginRight:"3rem",marginTop:"1rem"},buttonPopUp:{display:"flex",alignItems:"center",justifyContent:"center",width:"4rem",height:"3rem",backgroundColor:"".concat(c.O.Yellow),fontFamily:["Trispace","sans-serif"].join(","),textTransform:"uppercase",fontWeight:900,fontSize:"3vh",padding:"1rem",color:c.O.Black,backgroundSize:"12px, 100%",borderRadius:"255px 15px 225px 15px/15px 225px 15px 255px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",transition:"all 300ms ease-in-out",left:0,top:0,"&:hover":{cursor:"pointer",left:"4px",top:"4px",boxShadow:"0 0 0 0 ".concat(c.O.Black)}},divContentPopUp:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"fit-content",flexDirection:"column",marginTop:"0rem",marginBottom:"2rem"},divTitle:{display:"flex",alignItems:"center",justifyContent:"flex-start",textAlign:"center",marginTop:"1rem",marginBottom:"1rem"},form:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100%"},divInput:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"1rem",marginBottom:"2rem",width:"40%","@media (max-width: 1280px)":{width:"90%"}},textPopUp:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",fontFamily:["Dekko","sans-serif"].join(","),color:c.O.White,fontSize:"4vh",marginBottom:"0.5rem",fontWeight:900,"@media (max-width: 1280px)":{fontSize:"3vh"}},label:{display:"flex",width:"100%",alignItems:"flex-start",justifyContent:"flex-start",fontFamily:["Dekko","sans-serif"].join(","),color:c.O.White,fontSize:"5vh",marginBottom:"0.5rem",fontWeight:900,"@media (max-width: 1280px)":{fontSize:"4vh"}},input:{width:"100%",fontFamily:["Trispace","sans-serif"].join(","),fontSize:"2vh",fontWeight:"bold",padding:"1rem",borderRadius:"5px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)"},icons:{width:"6rem",height:"3rem"},divButton:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",marginBottom:"2rem"},button:{display:"flex",alignItems:"center",justifyContent:"center",width:"20rem",height:"5rem",backgroundColor:"".concat(c.O.Yellow),fontFamily:["Trispace","sans-serif"].join(","),textTransform:"uppercase",fontWeight:900,fontSize:"3vh",padding:"1rem",color:c.O.Black,backgroundSize:"12px, 100%",borderRadius:"255px 15px 225px 15px/15px 225px 15px 255px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",transition:"all 300ms ease-in-out",left:0,top:0,"&:hover":{cursor:"pointer",left:"4px",top:"4px",boxShadow:"0 0 0 0 ".concat(c.O.Black)}}}),O=a(2810);function T(e){var t,a=P(),r=(0,i.useState)({email:"",password:"",controlPassword:"",name:"",lastName:""}),o=(0,n.Z)(r,2),s=o[0],l=o[1],c=(0,i.useState)(new Date),d=(0,n.Z)(c,2),p=d[0],x=d[1],g=p.toString().slice(4,7);(g="Jan"===(t=g)?t=1:"Feb"===t?t=2:"Mar"===t?t=3:"Apr"===t?t=4:"May"===t?t=5:"Jun"===t?t=6:"Jul"===t?t=7:"Aug"===t?t=8:"Sep"===t?t=9:"Oct"===t?t=10:"Nov"===t?t=11:"Dec"===t?t=12:void 0)<10&&(g="0"+g);var b=p.toString().slice(8,10),w=p.toString().slice(11,15),v=w+"/"+g+"/"+b,j=function(e){var t=Date.now()-e.getTime(),a=new Date(t);return Math.abs(a.getUTCFullYear()-1970)}(new Date(Number(w),Number(g),Number(b))),y=function(){var t=(0,u.Z)(h().mark((function t(a){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),s.controlPassword===s.password){t.next=5;break}return t.abrupt("return",k.ZP.error("Passwords do not match"));case 5:if(!(j<16)){t.next=7;break}return t.abrupt("return",k.ZP.error("You must be at least 16 years old"));case 7:return t.next=9,f().post(C.J+"signup",{name:s.name,email:s.email.toLowerCase(),password:s.password,lastname:s.lastName,age:j,dateOfBirthday:v,uuid:(0,O.Z)()}).then(function(){var t=(0,u.Z)(h().mark((function t(a){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.data.success){t.next=4;break}return t.abrupt("return",k.ZP.error(a.data.message));case 4:return t.next=6,l({email:"",password:"",controlPassword:"",name:"",lastName:""});case 6:k.ZP.success(a.data.message),e.setChecked(!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,B.jsxs)("div",{className:a.root,children:[(0,B.jsx)("div",{className:a.divTitle,children:(0,B.jsx)("h1",{className:S.Z.microTitles,children:"Sign Up"})}),(0,B.jsxs)("form",{onSubmit:y,className:a.form,children:[(0,B.jsxs)("div",{className:a.divInput,children:[(0,B.jsx)("label",{htmlFor:"name",className:a.label,children:"Name"}),(0,B.jsx)("input",{name:"name",placeholder:"Name",type:"text",value:s.name,onChange:function(e){return l((0,m.Z)((0,m.Z)({},s),{},{name:e.target.value}))},className:a.input,autoComplete:"off"})]}),(0,B.jsxs)("div",{className:a.divInput,children:[(0,B.jsx)("label",{htmlFor:"lastName",className:a.label,children:"Last name"}),(0,B.jsx)("input",{name:"lastName",placeholder:"Last name",type:"text",value:s.lastName,onChange:function(e){return l((0,m.Z)((0,m.Z)({},s),{},{lastName:e.target.value}))},className:a.input,autoComplete:"off"})]}),(0,B.jsxs)("div",{className:a.divInput,children:[(0,B.jsx)("label",{htmlFor:"email",className:a.label,children:"Email"}),(0,B.jsx)("input",{name:"email",placeholder:"Email",type:"email",value:s.email,onChange:function(e){return l((0,m.Z)((0,m.Z)({},s),{},{email:e.target.value}))},className:a.input,autoComplete:"off"})]}),(0,B.jsxs)("div",{className:a.divInput,children:[(0,B.jsx)("label",{htmlFor:"password",className:a.label,children:"Password"}),(0,B.jsx)("input",{name:"password",placeholder:"Password",type:"password",value:s.password,minLength:6,onChange:function(e){return l((0,m.Z)((0,m.Z)({},s),{},{password:e.target.value}))},className:a.input,autoComplete:"off"})]}),(0,B.jsxs)("div",{className:a.divInput,children:[(0,B.jsx)("label",{htmlFor:"controlPassword",className:a.label,children:"Repeat Password"}),(0,B.jsx)("input",{name:"controlPassword",minLength:6,placeholder:"Repeat Password",type:"password",value:s.controlPassword,onChange:function(e){return l((0,m.Z)((0,m.Z)({},s),{},{controlPassword:e.target.value}))},className:a.input,autoComplete:"off"})]}),(0,B.jsxs)("div",{className:a.divInput,children:[(0,B.jsx)("label",{htmlFor:"birthday",className:a.label,children:"Birthday"}),(0,B.jsx)("input",{name:"birthday",placeholder:"Birthday",type:"Date",className:a.input,autoComplete:"off",onChange:function(e){return x(new Date(e.target.value))}})]}),(0,B.jsxs)("div",{className:a.divInput,children:[(0,B.jsx)("label",{htmlFor:"age",className:a.label,children:"Birthday"}),(0,B.jsx)("input",{name:"dateOfBirthday",placeholder:"Birthday",type:"string",value:v,className:a.input,autoComplete:"off",disabled:!0})]}),(0,B.jsxs)("div",{className:a.divInput,children:[(0,B.jsx)("label",{htmlFor:"age",className:a.label,children:"Age"}),(0,B.jsx)("input",{name:"age",placeholder:"Birthday",type:"number",value:j,className:a.input,autoComplete:"off",disabled:!0})]}),(0,B.jsx)("div",{className:a.divButton,children:(0,B.jsx)("button",{className:a.button,type:"submit",children:"Sign Up"})})]})]})}var P=(0,r.Z)({root:{display:"flex",flexDirection:"column",width:"50%",backgroundColor:c.O.Purple,height:"fit-content",minHeight:"50vh",alignItems:"center",justifyContent:"flex-start",textAlign:"center",padding:"2rem",border:"solid ".concat(c.O.Black),borderWidth:"3px 4px 3px 5px",borderRadius:"95% 4% 92% 5%/4% 95% 6% 95%",boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",transition:"background-color 1s ease","@media (max-width: 1280px)":{width:"100%",borderWidth:"none",borderRadius:"0px",boxShadow:"none",border:"none",borderTop:"2px solid ".concat(c.O.Black),borderBottom:"2px solid ".concat(c.O.Black)}},divTitle:{display:"flex",alignItems:"center",justifyContent:"flex-start",textAlign:"center",marginTop:"1rem",marginBottom:"1rem"},form:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100%"},divInput:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"1rem",marginBottom:"2rem",width:"40%","@media (max-width: 1280px)":{width:"90%"}},label:{display:"flex",width:"100%",alignItems:"flex-start",justifyContent:"flex-start",fontFamily:["Dekko","sans-serif"].join(","),color:c.O.White,fontSize:"5vh",marginBottom:"0.5rem",fontWeight:900,"@media (max-width: 1280px)":{fontSize:"4vh"}},input:{width:"100%",fontFamily:["Trispace","sans-serif"].join(","),fontSize:"2vh",fontWeight:"bold",padding:"1rem",borderRadius:"5px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)","&:disabled":{backgroundColor:c.O.White}},icons:{width:"6rem",height:"3rem"},divButton:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",marginBottom:"2rem"},button:{display:"flex",alignItems:"center",justifyContent:"center",width:"20rem",height:"5rem",backgroundColor:"".concat(c.O.Yellow),fontFamily:["Trispace","sans-serif"].join(","),textTransform:"uppercase",fontWeight:900,fontSize:"3vh",padding:"1rem",color:c.O.Black,backgroundSize:"12px, 100%",borderRadius:"255px 15px 225px 15px/15px 225px 15px 255px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",transition:"all 300ms ease-in-out",left:0,top:0,"&:hover":{cursor:"pointer",left:"4px",top:"4px",boxShadow:"0 0 0 0 ".concat(c.O.Black)}}}),D=(0,d.ZP)(o.Z)((function(e){var t=e.theme;return{width:50,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(25px)",color:c.O.Black,"& + .MuiSwitch-track":{backgroundColor:c.O.Pink,opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-disabled .MuiSwitch-thumb":{color:c.O.Yellow}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:13,backgroundColor:c.O.Blue,opacity:1,transition:t.transitions.create(["background-color"],{duration:500})}}}));function F(){var e=M(),t=(0,i.useState)(!1),a=(0,n.Z)(t,2),r=a[0],o=a[1];return(0,B.jsxs)("div",{className:e.root,children:[(0,B.jsx)(k.x7,{}),(0,B.jsx)("div",{className:e.divTitle,children:(0,B.jsx)("div",{className:e.boxTitle,children:(0,B.jsx)("h1",{className:l,children:"CoolorMedia"})})}),(0,B.jsx)("div",{className:e.divSwitch,children:(0,B.jsxs)(s.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,B.jsx)("p",{className:e.textSwitch,children:"Login"}),(0,B.jsx)(D,{onChange:function(){o(!r)}}),(0,B.jsx)("p",{className:e.textSwitch,children:"Sign up"})]})}),(0,B.jsx)("div",{className:e.divComponent,children:r?(0,B.jsx)(T,{setChecked:o}):(0,B.jsx)(Z,{})})]})}var M=(0,r.Z)({root:{display:"flex",flexDirection:"column",width:"100%",height:"fit-content",alignItems:"center",justifyContent:"center"},divTitle:{display:"flex",width:"100%",height:"fit-content",alignItems:"center",textAlign:"center",justifyContent:"center",paddingTop:"5rem",paddingBottom:"5rem"},boxTitle:{display:"flex",width:"50%",height:"fit-content",alignItems:"center",textAlign:"center",justifyContent:"center",padding:"1rem",backgroundColor:c.O.Blue,borderRadius:"5px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)","@media (max-width: 1280px)":{width:"85%"}},divSwitch:{display:"flex",width:"30%",height:"fit-content",alignItems:"center",textAlign:"center",justifyContent:"center",marginBottom:"2rem",backgroundColor:c.O.Turquoise,borderRadius:"5px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)","@media (max-width: 1280px)":{width:"85%"}},textSwitch:{fontFamily:["Dekko","sans-serif"].join(","),fontWeight:"900",color:c.O.Black,fontSize:"5vh",marginTop:"0.5rem",marginBottom:"0.5rem"},divComponent:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"fit-content",marginTop:"5rem",marginBottom:"5rem"}})},6747:function(e,t,a){a.d(t,{O:function(){return n}});var n={Purple:"#9b5de5",Pink:"#f15bb5",Yellow:"#fee440",Blue:"#00bbf9",Turquoise:"#00f5d4",White:"#ffffff",Black:"#231b1b"}},5429:function(e,t){t.Z={title:"title_title__CL1FB",miniTitle:"title_miniTitle__l7r0c",microTitles:"title_microTitles__2wqc2"}}}]);
//# sourceMappingURL=874.f1663dc5.chunk.js.map