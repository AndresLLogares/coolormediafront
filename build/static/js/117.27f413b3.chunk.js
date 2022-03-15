"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[117],{1117:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var o=n(5861),i=n(885),a=n(7757),r=n.n(a),l=n(2791),s=n(563),c=n(6747),d=n(6030),u=n(8743),m=n(6140),f=n(4569),p=n.n(f),x=n(3389),h=n(4815),g=[{name:"Javascript"},{name:"Java"},{name:"React"},{name:"Python"},{name:"Mysql"},{name:"Postgresql"},{name:"Html"},{name:"CSS"},{name:"C++"},{name:"Mongodb"},{name:"Express"},{name:"Nodejs"},{name:"Yarn"},{name:"Angular"},{name:"PHP"},{name:"Rubyonrails"},{name:"Flutter"}],v=n(454),w=n(5429),y=n(184);function b(e){var t,n,a,s=j(),c=(0,l.useState)("Javascript"),f=(0,i.Z)(c,2),x=f[0],b=f[1],C=(0,d.I0)(),k=(0,l.useState)(!0),N=(0,i.Z)(k,2),S=N[0],P=N[1],I=(0,d.v9)((function(e){return e})),T=null===I||void 0===I||null===(t=I.coolor)||void 0===t||null===(n=t.user)||void 0===n?void 0:n.technologies;(null===(a=T)||void 0===a?void 0:a.length)>0&&(T=(0,v.U)(T));var O=localStorage.getItem("Email");(0,l.useEffect)((function(){var e=function(){var e=(0,o.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C((0,u.fF)(O));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[C,O]);var R=function(){var e=(0,o.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().post(h.J+"addtechno",{technologies:x,email:O}).then((function(e){if("You already have this technology added"===e.data.message)return m.ZP.error(e.data.message);m.ZP.success(e.data.message),C((0,u.fF)(O)),P(!S)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,y.jsxs)("div",{className:s.root,children:[(0,y.jsx)("div",{className:s.divTitle,children:(0,y.jsx)("h3",{className:w.Z.microTitles,children:"Technologies"})}),(0,y.jsxs)("div",{className:s.divSelected,children:[(0,y.jsx)("p",{className:s.label,children:"Select and add your technologies"}),(0,y.jsxs)("div",{className:s.divSeparate,children:[(0,y.jsx)("select",{onChange:function(e){b(e.currentTarget.value)},className:s.select,children:g&&g.map((function(e,t){return(0,y.jsx)("option",{value:e.name,children:e.name},t)}))}),(0,y.jsx)("button",{onClick:function(){return R()},type:"button",className:s.button,children:"Add Technology"})]})]}),(0,y.jsxs)("div",{className:s.divSelected,children:[(0,y.jsx)("p",{className:s.label,children:"Your Technologies"}),(0,y.jsx)("div",{className:s.divWrapper,children:T&&T.map((function(e,t){return(0,y.jsxs)("p",{className:s.textTechno,children:[(0,y.jsx)(e.logo,{className:s.iconsTechno}),e.name]},t)}))})]})]})}var j=(0,s.Z)({root:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",width:"100%",backgroundColor:c.O.Purple,boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",borderRadius:"5px"},divTitle:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",width:"100%",marginTop:"2rem",marginBottom:"2rem"},title:{display:"flex",fontFamily:["Trispace","sans-serif"].join(","),fontWeight:"900",color:c.O.Black,fontSize:"5vh",margin:"0",textShadow:"".concat(c.O.White," 2px 2px 0px, ").concat(c.O.White," 4px 4px 0px")},divSelected:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",width:"100%",marginBottom:"2rem"},divSeparate:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",textAlign:"center",flexDirection:"row",width:"80%","@media (max-width: 1280px)":{width:"90%",flexDirection:"column"}},select:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",width:"30%",fontFamily:["Trispace","sans-serif"].join(","),fontSize:"2vh",fontWeight:"bold",padding:"1rem",backgroundColor:c.O.White,borderRadius:"5px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)","@media (max-width: 1280px)":{width:"100%",marginBottom:"1rem"}},label:{display:"flex",fontFamily:["Dekko","sans-serif"].join(","),color:c.O.White,fontSize:"5vh",margin:"0",marginBottom:"1rem",fontWeight:900,"@media (max-width: 1280px)":{fontSize:"4vh"}},button:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",width:"20rem",height:"4rem",backgroundColor:"".concat(c.O.Yellow),fontFamily:["Trispace","sans-serif"].join(","),textTransform:"uppercase",fontWeight:900,fontSize:"3vh",padding:"1rem",color:c.O.Black,backgroundSize:"12px, 100%",borderRadius:"255px 15px 225px 15px/15px 225px 15px 255px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",transition:"all 300ms ease-in-out",left:0,top:0,"&:hover":{cursor:"pointer",left:"4px",top:"4px",boxShadow:"0 0 0 0 ".concat(c.O.Black)},"@media (max-width: 1280px)":{width:"100%"}},divWrapper:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"100%","@media (max-width: 1280px)":{flexDirection:"column"}},textTechno:{display:"flex",alignItems:"center",justifyContent:"center",width:"30%",fontFamily:["Dekko","sans-serif"].join(","),color:c.O.Black,fontSize:"3vh",marginRight:"1rem",marginBottom:"1rem",padding:"0.5rem",backgroundColor:c.O.White,borderRadius:"5px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)","@media (max-width: 1280px)":{width:"80%"}},iconsTechno:{color:c.O.Black,width:"3rem"}});function C(){var e,t,n,a,s,c,f,g,v,w,j,C,N=k(),S=(0,d.I0)(),P=(0,l.useState)({CLOUDINARY_URL:"",CLOUDINARY_PRESET:""}),I=(0,i.Z)(P,2),T=I[0],O=I[1],R=(0,l.useState)(!0),B=(0,i.Z)(R,2),D=B[0],A=B[1],_=(0,d.v9)((function(e){return e})),F=localStorage.getItem("Email");(0,l.useEffect)((function(){var e=function(){var e=(0,o.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S((0,u.fF)(F));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=(0,o.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O({CLOUDINARY_URL:"https://api.cloudinary.com/v1_1/andreslogares/image/upload",CLOUDINARY_PRESET:"f6nysxpr"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[S,F]);var Z=function(){var e=(0,o.Z)(r().mark((function e(t){var n,o,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.currentTarget.files[0],(o=new FormData).append("file",n),o.append("upload_preset",T.CLOUDINARY_PRESET),e.next=6,p().post(T.CLOUDINARY_URL,o,{headers:{"Content-Type":"multipart/form-data"}});case 6:return i=e.sent,e.next=9,p().post(h.J+"UploadPhotos/back",{email:F,photoUrl:i.data.url}).then((function(e){m.ZP.success(e.data.message),S((0,u.fF)(F)),A(!D)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=(0,o.Z)(r().mark((function e(t){var n,o,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.currentTarget.files[0],(o=new FormData).append("file",n),o.append("upload_preset",T.CLOUDINARY_PRESET),e.next=6,p().post(T.CLOUDINARY_URL,o,{headers:{"Content-Type":"multipart/form-data"}});case 6:return i=e.sent,e.next=9,p().post(h.J+"UploadPhotos/profile",{email:F,photoUrl:i.data.url}).then((function(e){m.ZP.success(e.data.message),S((0,u.fF)(F)),A(!D)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,y.jsxs)("div",{className:N.root,children:[(0,y.jsxs)("div",{className:N.container,children:[(0,y.jsx)("div",{className:N.boxBackground,children:null!==_&&void 0!==_&&null!==(e=_.coolor)&&void 0!==e&&null!==(t=e.user)&&void 0!==t&&t.backPhoto?(0,y.jsx)("img",{src:null===_||void 0===_||null===(n=_.coolor)||void 0===n||null===(a=n.user)||void 0===a?void 0:a.backPhoto,alt:"",className:N.backImage}):(0,y.jsx)("p",{className:N.textNone,children:"Select a Photo"})}),(0,y.jsxs)("div",{className:N.sortButton,children:[(0,y.jsx)("button",{onClick:function(){document.getElementById("file").click()},type:"button",className:N.button,children:(0,y.jsx)(x.G,{})}),(0,y.jsx)("input",{onChange:Z,type:"file",style:{display:"none"},id:"file",name:"file"})]})]}),(0,y.jsx)("div",{className:N.container,children:(0,y.jsxs)("div",{className:N.separateColumns,children:[(0,y.jsxs)("div",{className:N.firstColumn,children:[(0,y.jsx)("div",{className:N.boxProfilePhoto,children:null!==_&&void 0!==_&&null!==(s=_.coolor)&&void 0!==s&&null!==(c=s.user)&&void 0!==c&&c.profilePhoto?(0,y.jsx)("img",{src:null===_||void 0===_||null===(f=_.coolor)||void 0===f||null===(g=f.user)||void 0===g?void 0:g.profilePhoto,alt:"",className:N.profilePhoto}):(0,y.jsx)("p",{className:N.textNone,children:"Select a Photo"})}),(0,y.jsx)("button",{onClick:function(){document.getElementById("fileProfile").click()},type:"button",className:N.button,children:(0,y.jsx)(x.G,{})}),(0,y.jsx)("input",{onChange:E,type:"file",style:{display:"none"},id:"fileProfile",name:"fileProfile"}),(0,y.jsxs)("div",{className:N.boxInformation,children:[(0,y.jsx)("p",{className:N.information,children:null===_||void 0===_||null===(v=_.coolor)||void 0===v||null===(w=v.user)||void 0===w?void 0:w.fullname}),(0,y.jsx)("p",{className:N.information,children:null===_||void 0===_||null===(j=_.coolor)||void 0===j||null===(C=j.user)||void 0===C?void 0:C.email})]})]}),(0,y.jsx)("div",{className:N.secondColumn,children:(0,y.jsx)(b,{})})]})})]})}var k=(0,s.Z)({root:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",paddingTop:"5rem",width:"100%"},container:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",width:"80.5%",height:"fit-content",marginBottom:"5rem","@media (max-width: 1280px)":{width:"90%",height:"auto"}},boxBackground:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"auto",backgroundColor:c.O.Yellow,boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",borderRadius:"5px","@media (max-width: 1280px)":{width:"100%",height:"auto"}},backImage:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",objectFit:"contain",objectPosition:"center"},textNone:{display:"flex",alignItems:"center",justifyContent:"center",fontFamily:["Dekko","sans-serif"].join(","),fontSize:"5vh",fontWeight:900,color:c.O.Black},sortButton:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end",width:"100%"},button:{display:"flex",alignItems:"center",justifyContent:"center",width:"4rem",height:"3rem",marginTop:"2rem",backgroundColor:"".concat(c.O.Yellow),fontFamily:["Trispace","sans-serif"].join(","),textTransform:"uppercase",fontWeight:900,fontSize:"3vh",padding:"1rem",color:c.O.Black,backgroundSize:"12px, 100%",borderRadius:"255px 15px 225px 15px/15px 225px 15px 255px",border:"0.2rem solid ".concat(c.O.Black),boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",transition:"all 300ms ease-in-out",left:0,top:0,"&:hover":{cursor:"pointer",left:"4px",top:"4px",boxShadow:"0 0 0 0 ".concat(c.O.Black)}},separateColumns:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",height:"fit-content","@media (max-width: 1280px)":{width:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center"}},firstColumn:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",width:"30%",flexDirection:"column","@media (max-width: 1280px)":{width:"100%",alignItems:"center",justifyContent:"center"}},boxProfilePhoto:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"15rem",height:"15rem",backgroundColor:c.O.Yellow,boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",borderRadius:"5px","@media (max-width: 1280px)":{width:"80%",height:"auto"}},profilePhoto:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},boxInformation:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",width:"80%",marginTop:"1rem",marginBottom:"1rem",padding:"1rem",flexDirection:"column",backgroundColor:c.O.Purple,boxShadow:"10px 10px 0 rgba(0, 0, 0, 1)",borderRadius:"5px","@media (max-width: 1280px)":{width:"90%"}},information:{display:"flex",fontFamily:["Dekko","sans-serif"].join(","),color:c.O.White,fontSize:"3vh",margin:"0",fontWeight:900,"@media (max-width: 1280px)":{fontSize:"3vh"}},secondColumn:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",width:"70%","@media (max-width: 1280px)":{width:"100%",marginTop:"2rem"}}})},454:function(e,t,n){n.d(t,{U:function(){return y}});var o=n(1817),i=n(1252),a=n(6104),r=n(7745),l=n(2663),s=n(4301),c=n(6706),d=n(5874),u=n(1974),m=n(5645),f=n(7377),p=n(9137),x=n(5693),h=n(8778),g=n(1167),v=n(4798),w=n(1329),y=function(e){return e=e.map((function(e){return"Javascript"===e?e={name:"Javascript",logo:o.Q}:"Java"===e?e={name:"Java",logo:i.Z}:"React"===e?e={name:"React",logo:a.V}:"Python"===e?e={name:"Python",logo:r.i}:"Mysql"===e?e={name:"Mysql",logo:l.m}:"Postgresql"===e?e={name:"Postgresql",logo:s.q}:"Html"===e?e={name:"Html",logo:c.W}:"CSS"===e?e={name:"CSS",logo:d.Q}:"C++"===e?e={name:"C++",logo:u.q}:"Mongodb"===e?e={name:"Mongodb",logo:m.l}:"Express"===e?e={name:"Express",logo:f.N}:"Nodejs"===e?e={name:"Nodejs",logo:p.b}:"Yarn"===e?e={name:"Yarn",logo:x.m}:"Angular"===e?e={name:"Angular",logo:h.j}:"PHP"===e?e={name:"PHP",logo:g.z}:"Rubyonrails"===e?e={name:"Rubyonrails",logo:v.d}:"Flutter"===e&&(e={name:"Flutter",logo:w.W}),e}))}},6747:function(e,t,n){n.d(t,{O:function(){return o}});var o={Purple:"#9b5de5",Pink:"#f15bb5",Yellow:"#fee440",Blue:"#00bbf9",Turquoise:"#00f5d4",White:"#ffffff",Black:"#231b1b"}},4815:function(e,t,n){n.d(t,{J:function(){return o}});var o="https://coolormedia.herokuapp.com/"},3389:function(e,t,n){n.d(t,{G:function(){return r}});var o=n(7462),i=n(2791),a=n(869),r=i.forwardRef((function(e,t){return i.createElement(a.r,(0,o.Z)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),i.createElement("path",{d:"M18.404 2.998c-.757-.754-2.077-.751-2.828.005l-1.784 1.791L11.586 7H7a.998.998 0 0 0-.939.658l-4 11c-.133.365-.042.774.232 1.049l2 2a.997.997 0 0 0 1.049.232l11-4A.998.998 0 0 0 17 17v-4.586l2.207-2.207v-.001h.001L21 8.409c.378-.378.586-.881.585-1.415 0-.535-.209-1.038-.588-1.415l-2.593-2.581zm-3.111 8.295A.996.996 0 0 0 15 12v4.3l-9.249 3.363 4.671-4.671c.026.001.052.008.078.008A1.5 1.5 0 1 0 9 13.5c0 .026.007.052.008.078l-4.671 4.671L7.7 9H12c.266 0 .52-.105.707-.293L14.5 6.914 17.086 9.5l-1.793 1.793zm3.206-3.208-2.586-2.586 1.079-1.084 2.593 2.581-1.086 1.089z"}))}));r.displayName="Pen"},5429:function(e,t){t.Z={title:"title_title__CL1FB",miniTitle:"title_miniTitle__l7r0c",microTitles:"title_microTitles__2wqc2"}}}]);
//# sourceMappingURL=117.27f413b3.chunk.js.map