"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[80],{7100:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(563),r=n(6747),o=n(184);function a(e){var t=(0,i.Z)({root:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"column",position:"fixed",top:"".concat(e.top),left:"".concat(e.left),width:"".concat(e.width),height:"".concat(e.height),backgroundColor:"".concat(e.backgroundColor),fontFamily:["Trispace","sans-serif"].join(","),fontWeight:"900",fontSize:"3vh",padding:"1rem",border:"solid ".concat(r.O.Black),borderWidth:"3px 4px 3px 5px",borderRadius:"95% 4% 92% 5%/4% 95% 6% 95%",boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)","@media (max-width: 1280px)":{top:"".concat(e.topMobile),width:"".concat(e.widthMobile),left:"".concat(e.leftMobile),height:"".concat(e.heightMobile),fontSize:"3vh"}}})();return(0,o.jsxs)("div",{className:t.root,children:[" ",e.children," "]})}},3344:function(e,t,n){n.d(t,{h:function(){return i}});var i=function(e){var t=e.getFullYear(),n=e.getMonth()+1,i=e.getDate(),r=e.getHours(),o=e.getMinutes(),a=e.getSeconds();return"".concat(t,"-").concat(n,"-").concat(i," ").concat(r,":").concat(o,":").concat(a)}},4844:function(e,t,n){n.d(t,{Z:function(){return v}});var i=n(5861),r=n(885),o=n(7757),a=n.n(o),s=n(2791),l=n(563),c=n(6747),d=n(6030),u=n(8743),m=n(4815),p=n(6140),x=n(4569),f=n.n(x),h=n(1298),g=n(7100),b=n(184);function v(e){var t,n=w(),o=(0,d.I0)(),l=localStorage.getItem("Email")||"",x=(0,s.useState)(!1),v=(0,r.Z)(x,2),y=v[0],j=v[1],C=(0,s.useState)(""),k=(0,r.Z)(C,2),S=k[0],B=k[1],N=(0,s.useState)(new Date),O=(0,r.Z)(N,2),I=O[0],T=(O[1],(0,d.v9)((function(e){return e}))),D=null===T||void 0===T||null===(t=T.coolor)||void 0===t?void 0:t.user,Z=(null===e||void 0===e?void 0:e.uuid)||"";(0,s.useEffect)((function(){var e=function(){var e=(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o((0,u.fF)(l));case 2:return e.next=4,o((0,u.J6)(l));case 4:if(""===Z){e.next=7;break}return e.next=7,o((0,u.bu)(Z));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[o,l,y]);var R=function(){var t=(0,i.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,f().post(m.J+"addcommenttopost",{comment:S,name:D.name+" "+D.lastname,date:I,id:e.idComment,email:l}).then((function(e){p.ZP.success(e.data.message)}));case 3:return t.next=5,o((0,u.Oc)());case 5:return t.next=7,o((0,u.J6)(l));case 7:if(""===Z){t.next=10;break}return t.next=10,o((0,u.bu)(Z));case 10:j(!y),e.setPopUp(!1),B("");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,b.jsx)(g.Z,{top:"30%",left:"25%",width:"50%",height:"fit-content",backgroundColor:c.O.Pink,topMobile:"20%",leftMobile:"0%",widthMobile:"90%",children:(0,b.jsxs)("div",{className:n.root,children:[(0,b.jsx)("div",{className:n.divClose,children:(0,b.jsx)("button",{onClick:function(){e.setPopUp(!1)},type:"button",className:n.buttonClose,children:(0,b.jsx)(h.P,{})})}),(0,b.jsxs)("form",{onSubmit:R,className:n.form,children:[(0,b.jsxs)("div",{className:n.divInput,children:[(0,b.jsx)("label",{className:n.label,children:"Write something nice"}),(0,b.jsx)("textarea",{className:n.textarea,name:"comment",required:!0,value:S,onChange:function(e){B(e.target.value)}})]}),(0,b.jsx)("div",{className:n.divButton,children:(0,b.jsx)("button",{className:n.button,type:"submit",children:"Add Comment"})})]})]})})}var w=(0,l.Z)({root:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",width:"100%"},divClose:{display:"flex",alignItems:"flex-start",justifyContent:"flex-end",width:"100%"},buttonClose:{display:"flex",alignItems:"center",justifyContent:"center",width:"4rem",height:"3rem",backgroundColor:"".concat(c.O.Yellow),fontFamily:["Trispace","sans-serif"].join(","),textTransform:"uppercase",fontWeight:900,fontSize:"3vh",padding:"1rem",color:c.O.Black,backgroundSize:"12px, 100%",borderRadius:"255px 15px 225px 15px/15px 225px 15px 255px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",transition:"all 300ms ease-in-out",left:0,top:0,"&:hover":{cursor:"pointer",left:"4px",top:"4px",boxShadow:"0 0 0 0 ".concat(c.O.Black)}},form:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100%"},divInput:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",margin:"2rem",width:"80%","@media (max-width: 1280px)":{width:"90%"}},label:{display:"flex",width:"70%",alignItems:"flex-start",justifyContent:"flex-start",fontFamily:["Dekko","sans-serif"].join(","),color:c.O.White,fontSize:"3vh",fontWeight:900,"@media (max-width: 1280px)":{fontSize:"3vh"}},textarea:{width:"80%",fontFamily:["Trispace","sans-serif"].join(","),fontSize:"2vh",fontWeight:"bold",padding:"1rem",borderRadius:"5px",height:"10rem",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",resize:"none"},divButton:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",marginBottom:"2rem"},button:{display:"flex",alignItems:"center",justifyContent:"center",width:"20rem",height:"5rem",backgroundColor:"".concat(c.O.Yellow),fontFamily:["Trispace","sans-serif"].join(","),textTransform:"uppercase",fontWeight:900,fontSize:"3vh",padding:"1rem",color:c.O.Black,backgroundSize:"12px, 100%",borderRadius:"255px 15px 225px 15px/15px 225px 15px 255px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",transition:"all 300ms ease-in-out",left:0,top:0,"&:hover":{cursor:"pointer",left:"4px",top:"4px",boxShadow:"0 0 0 0 ".concat(c.O.Black)}}})},9080:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var i=n(5861),r=n(885),o=n(7757),a=n.n(o),s=n(2791),l=n(563),c=n(6747),d=n(6030),u=n(8743),m=n(4815),p=n(6140),x=n(4569),f=n.n(x),h=n(3389),g=n(1298),b=n(2810),v=n(184);function w(e){var t,n,o=y(),l=(0,d.I0)(),c=localStorage.getItem("Email")||"",x=(0,s.useState)(!1),g=(0,r.Z)(x,2),w=g[0],j=g[1],C=(0,s.useState)(""),k=(0,r.Z)(C,2),S=k[0],B=k[1],N=(0,s.useState)(""),O=(0,r.Z)(N,2),I=O[0],T=O[1],D=(0,s.useState)({CLOUDINARY_URL:"",CLOUDINARY_PRESET:""}),Z=(0,r.Z)(D,2),R=Z[0],z=Z[1],P=(0,s.useState)(""),A=(0,r.Z)(P,2),W=A[0],F=A[1],L=(0,d.v9)((function(e){return e}));L=null===(t=L)||void 0===t||null===(n=t.coolor)||void 0===n?void 0:n.user;var E=new Intl.DateTimeFormat("en").formatToParts(),_=E[0].value+E[1].value+E[2].value+E[3].value+E[4].value;(0,s.useEffect)((function(){var e=function(){var e=(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l((0,u.fF)(c));case 2:return e.next=4,l((0,u.J6)(c));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z({CLOUDINARY_URL:"https://api.cloudinary.com/v1_1/andreslogares/image/upload",CLOUDINARY_PRESET:"f6nysxpr"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t(),e()}),[l,c,w]);var U=function(){var e=(0,i.Z)(a().mark((function e(t){var n,i,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.currentTarget.files[0],(i=new FormData).append("file",n),i.append("upload_preset",R.CLOUDINARY_PRESET),e.next=6,f().post(R.CLOUDINARY_URL,i,{headers:{"Content-Type":"multipart/form-data"}});case 6:return r=e.sent,e.next=9,F(r.data.url);case 9:p.ZP.success("Successfully uploaded");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var t=(0,i.Z)(a().mark((function t(n){var i,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=(0,b.Z)(),t.next=4,f().post(m.J+"addposts",{email:c.toLowerCase(),id:r,picture:(null===(i=L)||void 0===i?void 0:i.profilePhoto)||"https://res.cloudinary.com/andreslogares/image/upload/v1629471470/gjry7tvilh0z7wh5m4pn.gif",name:L.name+" "+L.lastname,useruuid:L.UUID,title:S,image:W,date:_,description:I}).then((function(e){console.log(e.data),p.ZP.success(e.data.message)}));case 4:return t.next=6,l((0,u.fF)(c));case 6:return t.next=8,l((0,u.J6)(c));case 8:F(""),j(!w),B(""),T(""),e.setEdit(!1);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,v.jsxs)("form",{onSubmit:Y,className:o.root,children:[(0,v.jsx)("div",{className:o.divTitle,children:(0,v.jsx)("h3",{className:o.title,children:"Add a post"})}),(0,v.jsxs)("div",{className:o.divInput,children:[(0,v.jsx)("label",{className:o.label,children:"Title"}),(0,v.jsx)("input",{className:o.input,name:"title",required:!0,type:"text",value:S,onChange:function(e){B(e.target.value)}})]}),(0,v.jsxs)("div",{className:o.divInput,children:[(0,v.jsx)("label",{className:o.label,children:"Description"}),(0,v.jsx)("textarea",{className:o.textarea,name:"description",required:!0,value:I,onChange:function(e){T(e.currentTarget.value)}})]}),(0,v.jsxs)("div",{className:o.divInput,children:[(0,v.jsx)("label",{className:o.label,children:"Add an image"}),(0,v.jsx)("button",{className:o.buttonSmall,onClick:function(){document.getElementById("filePost").click()},type:"button",children:(0,v.jsx)(h.G,{})}),(0,v.jsx)("input",{onChange:U,type:"file",style:{display:"none"},id:"filePost",name:"filePost"})]}),W?(0,v.jsx)("img",{className:o.image,src:W,alt:""}):null,(0,v.jsx)("div",{className:o.divButton,children:(0,v.jsx)("button",{className:o.button,type:"submit",children:"Add Post"})})]})}var y=(0,l.Z)({root:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",backgroundColor:c.O.Purple,boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",borderRadius:"5px",width:"60%","@media (max-width: 1280px)":{width:"100%",borderWidth:"none",borderRadius:"0px",boxShadow:"none",border:"none",borderTop:"2px solid ".concat(c.O.Black),borderBottom:"2px solid ".concat(c.O.Black)}},divTitle:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",width:"100%",marginTop:"1rem",marginBottom:"1rem","@media (max-width: 1280px)":{width:"90%"}},title:{display:"flex",fontFamily:["Dekko","sans-serif"].join(","),color:c.O.White,fontSize:"5vh",margin:"0",fontWeight:900,"@media (max-width: 1280px)":{fontSize:"4vh"}},divInput:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",margin:"2rem",width:"40%","@media (max-width: 1280px)":{width:"90%",margin:"0rem",marginTop:"1rem",marginBottom:"1rem"}},label:{display:"flex",width:"80%",alignItems:"flex-start",justifyContent:"flex-start",fontFamily:["Dekko","sans-serif"].join(","),color:c.O.White,fontSize:"3vh",fontWeight:900,"@media (max-width: 1280px)":{fontSize:"3vh",width:"90%"}},input:{width:"80%",fontFamily:["Trispace","sans-serif"].join(","),fontSize:"2vh",fontWeight:"bold",padding:"1rem",borderRadius:"5px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)","@media (max-width: 1280px)":{width:"90%"}},textarea:{width:"80%",fontFamily:["Trispace","sans-serif"].join(","),fontSize:"2vh",fontWeight:"bold",padding:"1rem",borderRadius:"5px",height:"10rem",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",resize:"none","@media (max-width: 1280px)":{width:"90%"}},buttonSmall:{display:"flex",alignItems:"center",justifyContent:"center",width:"4rem",height:"3rem",marginTop:"2rem",backgroundColor:"".concat(c.O.Yellow),fontFamily:["Trispace","sans-serif"].join(","),textTransform:"uppercase",fontWeight:900,fontSize:"3vh",padding:"1rem",color:c.O.Black,backgroundSize:"12px, 100%",borderRadius:"255px 15px 225px 15px/15px 225px 15px 255px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",transition:"all 300ms ease-in-out",left:0,top:0,"&:hover":{cursor:"pointer",left:"4px",top:"4px",boxShadow:"0 0 0 0 ".concat(c.O.Black)}},image:{width:"640px",height:"480px",objectFit:"fill",objectPosition:"center",border:".2rem solid ".concat(c.O.Black),borderRadius:"5px",marginBottom:"2rem","@media (max-width: 1280px)":{width:"320px",height:"240px"}},divButton:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",marginBottom:"2rem"},button:{display:"flex",alignItems:"center",justifyContent:"center",width:"20rem",height:"5rem",backgroundColor:"".concat(c.O.Yellow),fontFamily:["Trispace","sans-serif"].join(","),textTransform:"uppercase",fontWeight:900,fontSize:"3vh",padding:"1rem",color:c.O.Black,backgroundSize:"12px, 100%",borderRadius:"255px 15px 225px 15px/15px 225px 15px 255px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",transition:"all 300ms ease-in-out",left:0,top:0,"&:hover":{cursor:"pointer",left:"4px",top:"4px",boxShadow:"0 0 0 0 ".concat(c.O.Black)}}}),j=n(6317),C=n(4844),k=n(3344),S=n(5429);function B(e){var t,n,o,l=N(),c=(0,d.I0)(),x=(0,s.useState)(!1),b=(0,r.Z)(x,2),y=b[0],B=b[1],O=(0,s.useState)(!0),I=(0,r.Z)(O,2),T=I[0],D=I[1],Z=(0,s.useState)(!1),R=(0,r.Z)(Z,2),z=R[0],P=R[1],A=(0,s.useState)(""),W=(0,r.Z)(A,2),F=W[0],L=W[1],E=(0,d.v9)((function(e){return e})),_=null===E||void 0===E||null===(t=E.coolor)||void 0===t?void 0:t.user,U=null===E||void 0===E||null===(n=E.coolor)||void 0===n||null===(o=n.postuser)||void 0===o?void 0:o.posts,Y=localStorage.getItem("Email")||"",M=(0,s.useState)(!1),V=(0,r.Z)(M,2),J=V[0],q=V[1];(0,s.useEffect)((function(){var e=function(){var e=(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c((0,u.fF)(Y));case 2:return e.next=4,c((0,u.J6)(Y));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[c,Y,T]);var H=function(){var e=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().post(m.J+"deleteposts",{email:Y,id:t}).then((function(e){p.ZP.success(e.data.message)}));case 2:return e.next=4,c((0,u.J6)(Y));case 4:return e.next=6,c((0,u.fF)(Y));case 6:D(!T);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(!0),e.next=3,f().post(m.J+"handlelike",{name:_.name+" "+_.lastname,id:t,email:Y}).then((function(e){p.ZP.success(e.data.message)}));case 3:return e.next=5,c((0,u.fF)(Y));case 5:return e.next=7,c((0,u.J6)(Y));case 7:D(!T),q(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsxs)("div",{className:l.root,children:[(0,v.jsx)("div",{className:l.divTitle,children:(0,v.jsx)("h3",{className:S.Z.microTitles,children:"Posts"})}),(0,v.jsx)("div",{className:l.divButton,children:(0,v.jsx)("button",{type:"button",onClick:function(){P(!z)},className:l.button,children:(0,v.jsx)(h.G,{})})}),z?(0,v.jsx)(w,{setEdit:P}):(0,v.jsxs)("div",{className:l.boxPosts,children:[y?(0,v.jsx)(C.Z,{idComment:F,setPopUp:B}):null,(0,v.jsx)("div",{className:l.divSubtitle,children:(0,v.jsx)("p",{className:l.label,children:" Your Posts"})}),null===U||void 0===U?void 0:U.map((function(e){return(0,v.jsxs)("div",{className:l.eachPost,children:[(0,v.jsxs)("div",{className:l.divAuthor,children:[(0,v.jsx)("p",{className:l.name,children:e.name}),(0,v.jsx)("button",{onClick:function(){return H(e.Id)},className:l.button,type:"button",children:(0,v.jsx)(g.P,{})})]}),(0,v.jsx)("div",{className:l.divTitlePost,children:(0,v.jsx)("h3",{className:S.Z.microTitles,children:e.title})}),null!==e&&void 0!==e&&e.image?(0,v.jsx)("img",{src:e.image,alt:"post",className:l.imagePost}):null,(0,v.jsx)("div",{className:l.divDescription,children:(0,v.jsx)("p",{className:l.description,children:e.description})}),(0,v.jsxs)("div",{className:l.divSeparate,children:[(0,v.jsxs)("div",{className:l.first,children:[(0,v.jsx)("button",{onClick:function(){return G(e.Id)},disabled:J,type:"button",className:l.button,children:(0,v.jsx)(j.m,{})}),(0,v.jsx)("button",{className:l.number,children:e.likes.length})]}),(0,v.jsx)("div",{className:l.second,children:(0,v.jsx)("button",{type:"button",onClick:function(){L(e.Id),B(!y)},className:l.buttonComment,children:"Comment"})})]}),(null===e||void 0===e?void 0:e.comments)&&e.comments.map((function(e){return(0,v.jsxs)("div",{className:l.divDescription,children:[(0,v.jsxs)("div",{className:l.divSeparate,children:[(0,v.jsx)("p",{className:l.description,children:e.name}),(0,v.jsx)("p",{className:l.description,children:(0,k.h)(new Date(e.date))})]}),(0,v.jsx)("hr",{className:l.hr}),(0,v.jsx)("div",{className:l.divCommentContent,children:(0,v.jsx)("p",{className:l.description,children:e.comment})})]},e.id)}))]},e.Id)}))]})]})}var N=(0,l.Z)({root:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",width:"100%",borderRadius:"5px",transition:"5s","@media (max-width: 1280px)":{width:"100%"}},divTitle:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",width:"60%",backgroundColor:c.O.Blue,boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",paddingTop:"2rem",paddingBottom:"2rem","@media (max-width: 1280px)":{width:"90%"}},divSubtitle:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",width:"60%",backgroundColor:c.O.Blue,borderRadius:"5px",boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",marginTop:"2rem",marginBottom:"2rem","@media (max-width: 1280px)":{width:"90%"}},divButton:{display:"flex",alignItems:"center",justifyContent:"Flex-end",width:"60%",marginTop:"2rem",marginBottom:"2rem",marginRight:"2rem"},button:{display:"flex",alignItems:"center",justifyContent:"center",width:"4rem",height:"3rem",backgroundColor:"".concat(c.O.Yellow),fontFamily:["Trispace","sans-serif"].join(","),textTransform:"uppercase",fontWeight:900,fontSize:"3vh",padding:"1rem",color:c.O.Black,backgroundSize:"12px, 100%",borderRadius:"255px 15px 225px 15px/15px 225px 15px 255px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",transition:"all 300ms ease-in-out",left:0,top:0,"&:hover":{cursor:"pointer",left:"4px",top:"4px",boxShadow:"0 0 0 0 ".concat(c.O.Black)}},label:{display:"flex",fontFamily:["Dekko","sans-serif"].join(","),color:c.O.White,fontSize:"5vh",margin:"0",fontWeight:900,"@media (max-width: 1280px)":{fontSize:"4vh"}},boxPosts:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",width:"100%"},eachPost:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",width:"60%",backgroundColor:c.O.Purple,border:"2px solid ".concat(c.O.Black),borderRadius:"5px",boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",padding:"2rem",marginBottom:"2rem","@media (max-width: 1280px)":{padding:"0rem",width:"100%",borderWidth:"none",borderRadius:"0px",boxShadow:"none",border:"none",borderTop:"2px solid ".concat(c.O.Black),borderBottom:"2px solid ".concat(c.O.Black)}},divAuthor:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",textAlign:"left",flexDirection:"row",width:"90%"},name:{display:"flex",fontFamily:["Dekko","sans-serif"].join(","),color:c.O.White,fontSize:"4vh",margin:"0",marginTop:"1rem",marginBottom:"1rem",fontWeight:900},divTitlePost:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",width:"100%",marginBottom:"2rem"},titlePost:{display:"flex",fontFamily:["Trispace","sans-serif"].join(","),fontWeight:"900",color:c.O.Black,fontSize:"4vh",margin:"0",textShadow:"".concat(c.O.White," 2px 2px 0px, ").concat(c.O.White," 4px 4px 0px")},imagePost:{width:"640px",height:"480px",objectFit:"fill",objectPosition:"center",border:".2rem solid ".concat(c.O.Black),backgroundColor:c.O.White,borderRadius:"5px","@media (max-width: 1280px)":{width:"320px",height:"240px"}},divDescription:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",textAlign:"left",flexDirection:"column",width:"80%",height:"fit-content",padding:"0.5rem",backgroundColor:c.O.White,borderRadius:"5px",boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",marginBottom:"2rem",marginTop:"2rem","@media (max-width: 1280px)":{padding:"1rem",width:"80%"}},description:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",textAlign:"left",fontFamily:["Trispace","sans-serif"].join(","),fontSize:"2vh",fontWeight:"bold",color:c.O.Black,margin:"0"},divSeparate:{display:"flex",width:"80%",alignItems:"center",justifyContent:"space-between",flexDirection:"row",marginBottom:"1rem","@media (max-width: 1280px)":{flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",width:"90%"}},first:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"row",width:"40%","@media (max-width: 1280px)":{width:"100%",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}},number:{display:"flex",alignItems:"center",justifyContent:"center",width:"4rem",height:"3rem",backgroundColor:"".concat(c.O.Yellow),fontFamily:["Trispace","sans-serif"].join(","),textTransform:"uppercase",fontWeight:900,fontSize:"3vh",color:c.O.Black,borderRadius:"255px 15px 225px 15px/15px 225px 15px 255px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",marginLeft:"3rem","@media (max-width: 1280px)":{width:"4rem",height:"3rem",marginLeft:"1rem"}},second:{display:"flex",alignItems:"flex-start",justifyContent:"flex-end",flexDirection:"row",width:"50%","@media (max-width: 1280px)":{width:"100%",alignItems:"center",justifyContent:"center"}},buttonComment:{display:"flex",alignItems:"center",justifyContent:"center",width:"15rem",height:"4rem",backgroundColor:"".concat(c.O.Yellow),fontFamily:["Trispace","sans-serif"].join(","),textTransform:"uppercase",fontWeight:900,fontSize:"3vh",padding:"1rem",color:c.O.Black,backgroundSize:"12px, 100%",borderRadius:"255px 15px 225px 15px/15px 225px 15px 255px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",transition:"all 300ms ease-in-out",left:0,top:0,"&:hover":{cursor:"pointer",left:"4px",top:"4px",boxShadow:"0 0 0 0 ".concat(c.O.Black)},"@media (max-width: 1280px)":{width:"100%"}},hr:{display:"flex",width:"90%",backgroundColor:c.O.Black,border:"transparent",height:"0.5rem",borderRadius:"5px"},divCommentContent:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",textAlign:"start",width:"100%",flexDirection:"column",marginBottom:"1rem",marginTop:"1rem"}})},6747:function(e,t,n){n.d(t,{O:function(){return i}});var i={Purple:"#9b5de5",Pink:"#f15bb5",Yellow:"#fee440",Blue:"#00bbf9",Turquoise:"#00f5d4",White:"#ffffff",Black:"#231b1b"}},3389:function(e,t,n){n.d(t,{G:function(){return a}});var i=n(7462),r=n(2791),o=n(869),a=r.forwardRef((function(e,t){return r.createElement(o.r,(0,i.Z)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),r.createElement("path",{d:"M18.404 2.998c-.757-.754-2.077-.751-2.828.005l-1.784 1.791L11.586 7H7a.998.998 0 0 0-.939.658l-4 11c-.133.365-.042.774.232 1.049l2 2a.997.997 0 0 0 1.049.232l11-4A.998.998 0 0 0 17 17v-4.586l2.207-2.207v-.001h.001L21 8.409c.378-.378.586-.881.585-1.415 0-.535-.209-1.038-.588-1.415l-2.593-2.581zm-3.111 8.295A.996.996 0 0 0 15 12v4.3l-9.249 3.363 4.671-4.671c.026.001.052.008.078.008A1.5 1.5 0 1 0 9 13.5c0 .026.007.052.008.078l-4.671 4.671L7.7 9H12c.266 0 .52-.105.707-.293L14.5 6.914 17.086 9.5l-1.793 1.793zm3.206-3.208-2.586-2.586 1.079-1.084 2.593 2.581-1.086 1.089z"}))}));a.displayName="Pen"},6317:function(e,t,n){n.d(t,{m:function(){return a}});var i=n(7462),r=n(2791),o=n(869),a=r.forwardRef((function(e,t){return r.createElement(o.r,(0,i.Z)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),r.createElement("path",{d:"M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"}))}));a.displayName="Like"},1298:function(e,t,n){n.d(t,{P:function(){return a}});var i=n(7462),r=n(2791),o=n(869),a=r.forwardRef((function(e,t){return r.createElement(o.r,(0,i.Z)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 512 512"},e,{ref:t}),r.createElement("path",{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm86.63 272L320 342.63l-64-64-64 64L169.37 320l64-64-64-64L192 169.37l64 64 64-64L342.63 192l-64 64z"}))}));a.displayName="CloseCircle"},2810:function(e,t,n){var i;n.d(t,{Z:function(){return u}});var r=new Uint8Array(16);function o(){if(!i&&!(i="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(r)}var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var s=function(e){return"string"===typeof e&&a.test(e)},l=[],c=0;c<256;++c)l.push((c+256).toString(16).substr(1));var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n};var u=function(e,t,n){var i=(e=e||{}).random||(e.rng||o)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=i[r];return t}return d(i)}},5429:function(e,t){t.Z={title:"title_title__CL1FB",miniTitle:"title_miniTitle__l7r0c",microTitles:"title_microTitles__2wqc2"}}}]);
//# sourceMappingURL=80.37268100.chunk.js.map