(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,a,t){},119:function(e,a,t){},145:function(e,a,t){},146:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),s=t.n(l),c=t(14),o=(t(118),t(119),t(15)),i=t.n(o);var m=t(174);var u=Object(m.a)((e=>({root:{flexGrow:1},title:{flexGrow:1,marginLeft:30},logout:{marginRight:50,fontSize:"1.0rem",color:"#5B9CA0"}}))),d=t(149);var g=e=>{const{classes:a,Link:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"h6",className:a.title,component:t,to:"/home",style:{textDecoration:"none",color:"#5b9ca0"}},"pineTrader"))};var h=e=>{const{classes:a,user:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"h6",className:a.title,style:{textDecoration:"none",color:"#5b9ca0"}},"username: ",t.username))};var E=e=>{const{classes:a,user:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"h6",className:a.title,style:{textDecoration:"none",color:"#5b9ca0"}},"user id: ",t._id))},p=t(177),v=t(93),b=t.n(v);var w=e=>{const{handleClick:a}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:a,style:{color:"#5b9ca0"}},r.a.createElement(b.a,null)))},C=t(95),x=t(197);var y=e=>{const{anchorEl:a,handleClose:t,handleLogout:n,classes:l,Link:s}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:t},r.a.createElement(x.a,{onClick:t,color:"inherit",component:s,to:"/account",style:{color:"#5b9ca0"}},"Account"),r.a.createElement(x.a,{onClick:n,color:"inherit",className:l.logout,component:s,to:"/login",style:{color:"#5b9ca0"}},"Logout")))};var f=e=>{const{handleClick:a,anchorEl:t,handleClose:n,handleLogout:l,classes:s,Link:c}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{handleClick:a}),r.a.createElement(y,{anchorEl:t,handleClose:n,handleLogout:l,classes:s,Link:c}))},P=t(178);var k=e=>{const{anchorEl:a,handleClose:t,handleLogout:n,classes:l,Link:s,user:c,handleClick:o}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,null,r.a.createElement(g,{classes:l,Link:s}),r.a.createElement(h,{classes:l,user:c}),r.a.createElement(E,{classes:l,user:c}),r.a.createElement("div",null,r.a.createElement(f,{handleClick:o,anchorEl:a,handleClose:t,handleLogout:n,classes:l,Link:s}))))},S=t(179);var F=e=>{const{classes:a,user:t,handleClick:n,handleClose:l,handleLogout:s,anchorEl:o}=e;return r.a.createElement("div",{className:a.root},r.a.createElement(S.a,{position:"static",color:"transparent"},r.a.createElement(k,{classes:a,Link:c.b,user:t,handleClick:n,anchorEl:o,handleClose:l,handleLogout:s})))};var O=e=>{const{classes:a,Link:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"h6",className:a.title,component:t,to:"/login",style:{textDecoration:"none",color:"#5b9ca0"}},"pineTrader"))};var N=e=>{const{anchorEl:a,handleClose:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:t},r.a.createElement(x.a,{onClick:t,color:"inherit",component:c.b,to:"/login",style:{color:"#5b9ca0"}},"Login"),r.a.createElement(x.a,{onClick:t,color:"inherit",component:c.b,to:"/signup",style:{color:"#5b9ca0"}},"Signup")))};var j=e=>{const{handleClick:a,anchorEl:t,handleClose:n,Link:l}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{handleClick:a}),r.a.createElement(N,{anchorEl:t,handleClose:n,Link:l}))};var T=e=>{const{anchorEl:a,handleClose:t,classes:n,Link:l,handleClick:s}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,null,r.a.createElement(O,{classes:n,Link:l}),r.a.createElement("div",null,r.a.createElement(j,{handleClick:s,anchorEl:a,handleClose:t,Link:l}))))};var L=e=>{const{classes:a,handleClick:t,handleClose:n,anchorEl:l}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.root},r.a.createElement(S.a,{position:"static",color:"transparent"},r.a.createElement(T,{classes:a,Link:c.b,handleClick:t,anchorEl:l,handleClose:n}))))};var R=e=>{const{classes:a,user:t,handleClick:n,handleClose:l,handleLogout:s,anchorEl:c}=e;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{classes:a,user:t,handleClick:n,handleClose:l,handleLogout:s,anchorEl:c})):r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{classes:a,handleClick:n,handleClose:l,anchorEl:c})))};var A=e=>{const a=u(),[t,l]=Object(n.useState)(null),{user:s,updateUser:c}=e;return r.a.createElement("div",null,r.a.createElement(R,{classes:a,user:s,handleClick:e=>{l(e.currentTarget)},handleClose:()=>{l(null)},handleLogout:()=>{i.a.delete("/api/logout"),c(null),l(null)},anchorEl:t}))},D=t(12);var U=Object(m.a)((e=>({root:{flexGrow:1,backgroundColor:e.palette.background.paper,display:"flex",height:850},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}})));var K=Object(m.a)((e=>({root:{flexGrow:1,backgroundColor:e.palette.background.paper,display:"flex"},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}})));var W=e=>({id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}),_=t(193),B=t(180);var I=e=>{const{value:a,handleChange:t,classes:n,history:l}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{orientation:"vertical",variant:"scrollable",value:a,onChange:t,"aria-label":"Vertical tabs",className:n.tabs},r.a.createElement(B.a,{onClick:()=>l.push("/account/password"),label:"Password",style:{color:"#5b9ca0"}}),r.a.createElement(B.a,{onClick:()=>l.push("/account/apiKeys"),label:"API Keys",style:{color:"#5b9ca0"}})))},M=t(192);var q=r.a.memo((e=>{const{children:a,value:t,index:n,...l}=e;return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"vertical-tabpanel-".concat(n),"aria-labelledby":"vertical-tab-".concat(n)},l),t===n&&r.a.createElement(M.a,{p:0},r.a.createElement(d.a,{component:"span"},a)))}));var H=Object(m.a)((e=>({root:{"& .MuiTextField-root":{margin:e.spacing(0),width:"25ch",justifyContent:"center"}}})));var G=(e,a)=>401===e.status?a({exchange:"",identifier:"",net:"",key:"",secret:""}):200===e.status?a({exchange:"",identifier:"",net:"",key:"",secret:"",newExchangeAccount:!0}):void 0;var V=e=>{i.a.get("/addKeysRoutes/retrieveKeys").then((e=>e)).catch((e=>{console.log("Error is: ",e)})).then((a=>{const t=a.data.exchangeAccount;e(t)})).catch((e=>{console.log("Error is: ",e)}))};var J=(e,a,t,n,r,l,s,c)=>{n&&r&&a&&t&&l&&((e,a,t,n,r,l)=>i.a.post("/addKeysRoutes/addApiKeys",{id:e,exchange:a,identifier:t,net:l,key:n,secret:r}).then((e=>e)).catch((e=>{console.log("Error is: ",e)})))(e,a,t,n,r,l).then((e=>{G(e,s)})).then((e=>{V(c)})).catch((e=>{console.log("Error is: ",e)}))};var Y=(e,a,t,n,r,l)=>({exchangeName:e,identifier:a,net:t,key:n,secret:r,_id:l});const z=[];var $=t(196);var Q=e=>{const{identifier:a,handleChange:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{required:!0,id:"identifier",name:"identifier",type:"text",label:"Account Identifier",variant:"outlined",value:a,onChange:t,style:{width:"30vw",marginTop:"5px",marginBottom:"5px"}}))},X=t(198),Z=t(183),ee=t(194);var ae=e=>{const{exchange:a,handleChange:t,classes:n}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{variant:"outlined",className:n.formControl},r.a.createElement(X.a,{htmlFor:"exchange-input"},"Exchange *"),r.a.createElement(ee.a,{native:!0,value:a,onChange:t,label:"Exchange",inputProps:{name:"exchange",id:"exchange-input"},style:{width:"30vw",marginTop:"5px",marginBottom:"5px"}},r.a.createElement("option",{"aria-label":"None",value:""}),r.a.createElement("option",{value:"Bybit"},"Bybit"))))};var te=e=>{const{net:a,handleChange:t,classes:n}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{variant:"outlined",className:n.formControl},r.a.createElement(X.a,{htmlFor:"net-input"},"Net *"),r.a.createElement(ee.a,{native:!0,value:a,onChange:t,label:"Net",inputProps:{name:"net",id:"net-input"},style:{width:"30vw",marginTop:"5px",marginBottom:"5px"}},r.a.createElement("option",{"aria-label":"None",value:""}),r.a.createElement("option",{value:"Api"},"Api"),r.a.createElement("option",{value:"Test"},"Test"))))};var ne=e=>{const{apiKey:a,handleChange:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{required:!0,id:"apiKey",name:"apiKey",type:"text",label:"API Key",variant:"outlined",value:a||"",onChange:t,style:{width:"30vw",marginTop:"5px",marginBottom:"5px"}}))};var re=e=>{const{secret:a,handleChange:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{required:!0,id:"secret",name:"secret",type:"password",label:"Secret",variant:"outlined",value:a,onChange:t,style:{width:"30vw",marginTop:"5px",marginBottom:"5px"}}))};var le=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"outlined",type:"submit",style:{width:"30vw",height:"55px",marginTop:"5px",marginBottom:"10px",color:"#5b9ca0"}},"Add Exchange Account"));var se=e=>{const{handleNewKeysSubmit:a,net:t,classes:n,identifier:l,handleChange:s,exchange:c,apiKey:o,secret:i}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:a,className:n.root},r.a.createElement(Q,{identifier:l,handleChange:s}),r.a.createElement(ae,{exchange:c,handleChange:s,classes:n}),r.a.createElement(te,{net:t,handleChange:s,classes:n}),r.a.createElement(ne,{apiKey:o,handleChange:s}),r.a.createElement(re,{secret:i,handleChange:s}),r.a.createElement(le,null)))};var ce=[{id:"exchangeName",label:"Exchange",minWidth:100,align:"center",format:e=>e.toLocaleString("en-US")},{id:"identifier",label:"Identifier",minWidth:100,align:"center",format:e=>e.toLocaleString("en-US")},{id:"net",label:"Net",minWidth:100,align:"center",format:e=>e.toLocaleString("en-US")},{id:"key",label:"Key",minWidth:100,align:"center",format:e=>e.toLocaleString("en-US")},{id:"secret",label:"Secret",minWidth:100,align:"center",format:e=>e.toLocaleString("en-US")}],oe=t(184),ie=t(185),me=t(186);var ue=()=>r.a.createElement(oe.a,null,r.a.createElement(ie.a,null,ce.map((e=>r.a.createElement(me.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label))),r.a.createElement(me.a,null,"Delete"))),de=t(187),ge=t(94),he=t.n(ge);var Ee=e=>{const{row:a,handleSubmit:t}=e;return r.a.createElement(de.a,{onClick:()=>t(a._id)},r.a.createElement(he.a,{color:"secondary"}))};var pe=e=>{const{column:a,value:t}=e;return r.a.createElement(me.a,{align:a.align},a.format&&"number"===typeof t?a.format(t):t)};var ve=e=>{const{row:a,handleSubmit:t}=e;return r.a.createElement(ie.a,{hover:!0,role:"checkbox",tabIndex:-1},ce.map((e=>{const t=a[e.id];return r.a.createElement(pe,{key:e.id,column:e,value:t})})),r.a.createElement(me.a,null,r.a.createElement(Ee,{row:a,handleSubmit:t})))},be=t(188);var we=e=>{const{page:a,rowsPerPage:t,rows:n,handleSubmit:l}=e;return r.a.createElement(be.a,null,n.slice(a*t,a*t+t).reverse().map((e=>r.a.createElement(ve,{key:e._id,row:e,handleSubmit:l}))))},Ce=t(199);var xe=e=>{const{rows:a,handleChangePage:t,handleChangeRowsPerPage:n,page:l,rowsPerPage:s}=e;return r.a.createElement(Ce.a,{rowsPerPageOptions:[10,25,100],component:"div",count:a.length,rowsPerPage:s,page:l,onChangePage:t,onChangeRowsPerPage:n})};var ye=Object(m.a)((()=>({root:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},container:{maxHeight:"35vh",maxWidth:"65vw",border:"1px solid #c4c4c4",borderRadius:"4px"}}))),fe=t(150),Pe=t(190),ke=t(189);var Se=e=>{const{page:a,rowsPerPage:t,rows:n,handleChangePage:l,handleChangeRowsPerPage:s,handleSubmit:c}=e,o=ye();return r.a.createElement(fe.a,{className:o.root},r.a.createElement(ke.a,{className:o.container},r.a.createElement(Pe.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(ue,null),r.a.createElement(we,{page:a,rowsPerPage:t,rows:n,handleSubmit:c}))),r.a.createElement(xe,{rows:n,handleChangePage:l,handleChangeRowsPerPage:s,rowsPerPage:t,page:a}))};var Fe=e=>{const{_id:a}=e.user,t=H(),[l,s]=Object(n.useState)({apiKey:"",secret:"",exchange:"",net:"",identifier:""}),{apiKey:c,secret:o,exchange:m,identifier:u,net:d}=l,[g,h]=Object(n.useState)(0),[E,p]=Object(n.useState)(10),[v,b]=Object(n.useState)([]);(e=>{z.length=0,e.map((e=>z.push(Y(e.exchangeName,e.identifier,e.net,e.key,e.secret,e._id))))})(v);return Object(n.useEffect)((()=>{V(b)}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"flex flex-container center col"},r.a.createElement("div",{className:"box"},r.a.createElement(se,Object.assign({},e,{handleNewKeysSubmit:e=>{e.preventDefault(),J(a,m,u,c,o,d,s,b)},identifier:u,handleChange:e=>{e.persist(),s((a=>({...a,[e.target.name]:e.target.value})))},exchange:m,classes:t,net:d,apiKey:c,secret:o})))),r.a.createElement(Se,{rows:z,page:g,rowsPerPage:E,handleChangePage:(e,a)=>{e.preventDefault(),h(a)},handleChangeRowsPerPage:e=>{e.preventDefault(),p(+e.target.value),h(0)},handleSubmit:e=>{(e=>(console.log("***DELETE KEYS***",typeof e),i.a.put("/addKeysRoutes/deleteApiKeys",{apiKey_id:e}).then((e=>e)).catch((e=>{console.log("Error is: ",e)}))))(e).then((()=>{V(b)})).catch((e=>{console.log("Error is: ",e)}))},setExchangeAccounts:b}))};var Oe=(e,a)=>r.a.createElement("div",null,e?r.a.createElement("span",{id:"warning"},a):r.a.createElement(r.a.Fragment,null));var Ne=Object(m.a)((e=>({root:{display:"flex",flexWrap:"wrap","& .MuiTextField-root":{justifyContent:"center"}}})));var je=(e,a,t)=>{401===e.status?a({error:e.message,isError:!0}):200===e.status&&t.push("/home")};var Te=(e,a,t,n,r,l)=>{n===t&&((e,a,t)=>i.a.post("/passChange/passwordChange",{id:e,newPassword:t,currentPassword:a}).then((e=>e)).catch((e=>{console.log("Error is: ",e)})))(e,a,t).then((e=>{je(e,r,l)})).catch((e=>{console.log("Error is: ",e)}))};var Le=e=>{const{currentPassword:a,handleChange:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{required:!0,id:"currentPassword",name:"currentPassword",type:"password",label:"Current Password",variant:"outlined",value:a||"",onChange:t,style:{width:"30vw",marginTop:"5px",marginBottom:"5px"}}))};var Re=e=>{const{newPassword:a,handleChange:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{required:!0,id:"newPassword",name:"newPassword",type:"password",label:"New Password",variant:"outlined",value:a||"",onChange:t,style:{width:"30vw",marginTop:"5px",marginBottom:"5px"}}))};var Ae=e=>{const{newPasswordAgain:a,handleChange:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{required:!0,id:"newPasswordRepeat",name:"newPasswordAgain",type:"password",label:"Re-Type New Password",variant:"outlined",value:a||"",onChange:t,style:{width:"30vw",marginTop:"5px",marginBottom:"5px"}}))};var De=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"outlined",type:"submit",style:{width:"30vw",height:"55px",marginTop:"5px",marginBottom:"10px",color:"#5b9ca0"}},"Update Password"));var Ue=e=>{const{handleSubmit:a,classes:t,handleChange:n,currentPassword:l,newPassword:s,newPasswordAgain:c,errorMessage:o}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex flex-container center col"},r.a.createElement("div",{className:"box"},r.a.createElement("form",{variant:"outlined",onSubmit:a,className:t.root},r.a.createElement(Le,{currentPassword:l,handleChange:n}),r.a.createElement(Re,{newPassword:s,handleChange:n}),r.a.createElement(Ae,{newPasswordAgain:c,handleChange:n}),o,r.a.createElement(De,null)),r.a.createElement("div",null,"You will be redirected on a successful password update."))))};var Ke=e=>{const{history:a}=e,{_id:t}=e.user,l=Ne(),[s,c]=Object(n.useState)({currentPassword:"",newPassword:"",newPasswordAgain:"",isError:!1,error:""}),{currentPassword:o,newPassword:i,newPasswordAgain:m,isError:u,error:d}=s,g=Oe(u,d);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ue,{handleSubmit:e=>{e.preventDefault(),Te(t,o,i,m,c,a)},classes:l,currentPassword:o,handleChange:e=>{e.persist(),c((a=>({...a,[e.target.name]:e.target.value})))},newPassword:i,newPasswordAgain:m,errorMessage:g}))},We=t(5),_e=t.n(We);q.propTypes={children:_e.a.node,index:_e.a.any.isRequired,value:_e.a.any.isRequired};var Be=e=>{const{value:a,user:t,exchangeAccounts:n,setExchangeAccounts:l}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{value:a,index:0}),0===a&&r.a.createElement(Ke,Object.assign({},e,{user:t})),1===a&&r.a.createElement(Fe,Object.assign({},e,{user:t,exchangeAccounts:n,setExchangeAccounts:l})))};W();var Ie=e=>{const{user:a,history:t}=e,l=K(),[s,c]=Object(n.useState)(!1);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l.root},r.a.createElement("div",{className:"tabs-container"},r.a.createElement(I,{value:s,handleChange:(e,a)=>{e.preventDefault(),c(a)},classes:l,history:t})),r.a.createElement(Be,Object.assign({},e,{value:s,user:a}))))};var Me=(e,a,t,n)=>{a&&((e,a,t)=>i.a.get("/exchangeRoutes/tickers/".concat(e,"/").concat(a,"/").concat(t)).then((e=>e.data)).catch((e=>(console.log("Error is: ",e),e.res.data))))(e,a,t).then((e=>{const a=e[1],t=Object.keys(a).map((e=>a[e])).map((e=>e.symbol));n(t)})).catch((e=>(console.log("***ERROR***",e),e.res.data)))};var qe=e=>{const{value:a,handleChange:t,classes:n,exchangeIdentifiers:l}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{orientation:"vertical",variant:"scrollable",value:a,onChange:t,"aria-label":"Vertical tabs",className:n.tabs},l.map(((a,t)=>r.a.createElement(B.a,{key:t,onClick:()=>e.history.push("/home/".concat(a)),label:"".concat(a),style:{color:"#5b9ca0"}})))))};var He=e=>{const{handleChange:a,marketNames:t,value:n,classes:l}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{orientation:"vertical",variant:"scrollable",value:n,onChange:a,"aria-label":"Vertical tabs",className:l.tabs},t.length?t.map(((e,a)=>r.a.createElement(B.a,Object.assign({key:a,label:e},W(a),{style:{color:"#5b9ca0"}})))):0))};t(145);var Ge=e=>{const{symbol:a}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"instrument-name"},a))};var Ve=e=>{const{balance:a}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null," ",r.a.createElement("span",{className:"balance-data-detail"},"Total: ")," ",r.a.createElement("span",{className:"balance-data"}," ",a," ")))};var Je=e=>{const{available:a}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null," ",r.a.createElement("span",{className:"balance-data-detail"},"Available: "),r.a.createElement("span",{className:"balance-data"}," ",a," ")))};var Ye=e=>{const{used:a}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null," ",r.a.createElement("span",{className:"balance-data-detail"},"Used: ")," ",r.a.createElement("span",{className:"balance-data"}," ",a," ")))};var ze=r.a.memo((e=>{const{symbol:a,balance:t,available:n,used:l}=e;return r.a.createElement("div",{className:"balance-container"},r.a.createElement(Ge,{symbol:a}),r.a.createElement("div",{className:"balances"},r.a.createElement(Ve,{balance:t}),r.a.createElement(Je,{available:n}),r.a.createElement(Ye,{used:l})))}));var $e=(e,a,t,n,r,l,s,c,o)=>({symbol:e,side:a,type:t,amount:n,cost:r,price:l,status:s,time:c,id:o});const Qe=[];var Xe=e=>{const{Columns:a}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,null,a.map((e=>r.a.createElement(me.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)))))};var Ze=[{id:"symbol",label:"Symbol",minWidth:100,align:"center",format:e=>e.toLocaleString("en-US")},{id:"side",label:"Side",minWidth:100,align:"center",format:e=>e.toLocaleString("en-US")},{id:"type",label:"Type",minWidth:100,align:"center",format:e=>e.toLocaleString("en-US")},{id:"amount",label:"Amount",minWidth:100,align:"center",format:e=>e.toFixed(2)},{id:"cost",label:"Cost",minWidth:100,align:"center",format:e=>e.toFixed(4)},{id:"price",label:"Price",minWidth:100,align:"center",format:e=>e.toFixed(2)},{id:"status",label:"Status",minWidth:100,align:"center",format:e=>e.toFixed(2)},{id:"time",label:"Time",minWidth:100,align:"center"},{id:"id",label:"ID",minWidth:100,align:"center"}];var ea=e=>{const{rowsPerPage:a,page:t,rows:n}=e;return r.a.createElement(r.a.Fragment,null,n.reverse().slice(t*a,t*a+a).map((e=>r.a.createElement(ie.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id},Ze.map((a=>{const t=e[a.id];return r.a.createElement(me.a,{key:a.id,align:a.align},a.format&&"number"===typeof t?a.format(t):t)}))))))};var aa=e=>{const{rows:a,rowsPerPage:t,page:n,handleChangePage:l,handleChangeRowsPerPage:s}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce.a,{rowsPerPageOptions:[10,25,100],component:"div",count:a.length,rowsPerPage:t,page:n,onChangePage:l,onChangeRowsPerPage:s}))};var ta=e=>{const{classes:a,page:t,rowsPerPage:n,handleChangePage:l,handleChangeRowsPerPage:s}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{className:a.root},r.a.createElement(ke.a,{className:a.container},r.a.createElement(Pe.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(oe.a,null,r.a.createElement(Xe,{Columns:Ze})),r.a.createElement(be.a,null,r.a.createElement(ea,{rowsPerPage:n,page:t,rows:Qe})))),r.a.createElement(aa,{rows:Qe,rowsPerPage:n,page:t,handleChangePage:l,handleChangeRowsPerPage:s})))};var na=Object(m.a)((()=>({root:{width:"100%"},container:{maxHeight:750}})));var ra=Object(n.memo)((e=>{const{orders:a}=e;((e,a)=>{e.length=0,a.map((a=>e.push($e(a.symbol,a.side,a.type,a.amount,a.cost,a.average,a.status,a.datetime,a.id))))})(Qe,a);const t=na(),[l,s]=Object(n.useState)(0),[c,o]=Object(n.useState)(10);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ta,{classes:t,page:l,rowsPerPage:c,handleChangePage:(e,a)=>{e.preventDefault(),s(a)},handleChangeRowsPerPage:e=>{e.preventDefault(),o(+e.target.value),s(0)}}))}));var la=e=>{const{orders:a}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,a.length?r.a.createElement(ra,{orders:a}):r.a.createElement(r.a.Fragment,null)))};var sa=e=>{const{symbol:a,balance:t,available:n,used:l,orders:s}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,a?r.a.createElement(ze,{symbol:a,balance:t,available:n,used:l}):r.a.createElement(r.a.Fragment,null),r.a.createElement(la,{orders:s})))};var ca=e=>{let a;return a="T"===e.charAt(e.length-1)?e.slice(e.indexOf("/")+1,e.length):"D"===e.charAt(e.length-1)?e.slice(0,e.indexOf("/")):e,a};var oa=(e,a,t,n)=>{!0===e.free.hasOwnProperty(n)?a({balance:e.total[n],available:e.free[n],used:e.used[n],orders:t}):a({balance:0,available:0,used:0,orders:t})};var ia=Object(n.memo)((e=>{const{symbol:a,user:t}=e,l=t._id,[s,c]=Object(n.useState)({balance:[],available:[],used:[],orders:[]}),{balance:o,available:m,used:u,orders:d}=s,g=Object(n.useCallback)((()=>{a&&((e,a)=>i.a.post("/exchangeRoutes/coinData",{name:e,user_id:a}).then((e=>e.data)).catch((e=>(console.log("Error is: ",e),e.res.data))))(a,l).then((e=>{const t=e[0],n=[...e[1]],r=ca(a);oa(t,c,n,r)})).catch((e=>{console.log("Error is: ",e)}))}),[a,l]);return Object(n.useEffect)((()=>{g()}),[g]),r.a.createElement(r.a.Fragment,null,r.a.createElement(sa,{symbol:a,balance:o,available:m,used:u,orders:d}))}));var ma=e=>{const{value:a,symbol:t,user:n}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{value:a,index:a}," ",t?r.a.createElement(ia,{symbol:t,user:n}):r.a.createElement(r.a.Fragment,null)))};var ua=(e,a,t,n)=>t!==a?n({value:e,symbol:t}):null;q.propTypes={children:_e.a.node,index:_e.a.any.isRequired,value:_e.a.any.isRequired},W();var da=Object(n.memo)((e=>{const{marketNames:a,user:t}=e,l=K(),[s,c]=Object(n.useState)({value:!1,symbol:""}),{symbol:o,value:i}=s;return r.a.createElement("div",{className:l.root},r.a.createElement(He,{marketNames:a,handleChange:(e,a)=>{e.preventDefault();const{innerHTML:t}=e.target;ua(a,o,t,c)},value:i,classes:l}),r.a.createElement(ma,{value:i,symbol:o,user:t}))}));var ga=r.a.memo((e=>{const{children:a,value:t,index:n,...l}=e;return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"vertical-tabpanel-".concat(n),"aria-labelledby":"vertical-tab-".concat(n)},l),t===n&&r.a.createElement(M.a,{p:0},r.a.createElement(d.a,{component:"span"},a)))}));ga.propTypes={children:_e.a.node,index:_e.a.any.isRequired,value:_e.a.any.isRequired};var ha=e=>{const{value:a,marketNames:t,user:n}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ga,{value:a,index:a}),a===a&&r.a.createElement(da,{marketNames:t,user:n}))};var Ea=e=>{const{value:a,marketNames:t,user:n,handleChange:l,classes:s,exchangeIdentifiers:c}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:s.root},r.a.createElement("div",{className:"tabs-container"},r.a.createElement(qe,Object.assign({value:a,handleChange:l,classes:s,exchangeIdentifiers:c},e))),r.a.createElement(ha,{value:a,marketNames:t,user:n})))};var pa=e=>{const a=U(),{setUser:t,user:l,exchangeIdentifiers:s,exchangeNames:c}=e,o=l._id,[i,m]=Object(n.useState)(!1),[u,d]=Object(n.useState)([]),[g,h]=Object(n.useState)(""),[E,p]=Object(n.useState)(""),v=(e,a)=>{e.preventDefault(),h(e.target.innerHTML),p(c[a]),m(a)},b=Object(n.useCallback)((()=>{Me(E,g,o,d)}),[E,g,o]);return Object(n.useEffect)((()=>{b()}),[b]),r.a.createElement(r.a.Fragment,null,r.a.createElement(D.d,null,r.a.createElement(D.b,{path:"/account",render:e=>r.a.createElement(Ie,Object.assign({},e,{setUser:t,user:l}))}),r.a.createElement(D.b,{path:"/home",render:e=>r.a.createElement(r.a.Fragment,null,r.a.createElement(Ea,Object.assign({value:i,handleChange:v,classes:a,exchangeIdentifiers:s,marketNames:u,user:l},e)))})))};var va=e=>{const{setUser:a,user:t,exchangeIdentifiers:n,exchangeNames:l}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{updateUser:a,user:t}),r.a.createElement(pa,Object.assign({},e,{exchangeIdentifiers:n,exchangeNames:l,setUser:a,user:t})))};const ba=Object(m.a)((e=>({root:{"& .MuiTextField-root":{margin:e.spacing(0),width:"25ch",justifyContent:"center"}}}))),wa=Object(m.a)((e=>({root:{"& .MuiTextField-root":{margin:e.spacing(0),width:"25ch"}}})));t(92);var Ca=t(191);var xa=e=>r.a.createElement("div",null,r.a.createElement(d.a,{style:{textDecoration:"none",color:"#5b9ca0",marginTop:"5px",marginBottom:"20px"}},r.a.createElement(Ca.a,{style:{textDecoration:"none",width:"30vw",height:"25px",marginTop:"5px",marginBottom:"10px",color:"#5b9ca0"},href:"".concat("https://web-hook-trader.herokuapp.com","/google/auth/google")},"Sign in with Google")));var ya=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Already have account?",r.a.createElement(c.b,{to:"/login",style:{textDecoration:"none",color:"#7D237C"}}," ","Login")));var fa=e=>{const{username:a,handleChange:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{required:!0,id:"username",name:"username",type:"email",label:"Email",variant:"outlined",value:a,onChange:t,style:{width:"30vw",marginBottom:"5px"}}))};var Pa=e=>{const{password:a,handleChange:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{required:!0,id:"password",name:"password",type:"password",label:"Password",variant:"outlined",value:a,onChange:t,style:{width:"30vw",marginTop:"5px",marginBottom:"5px"}}))};var ka=e=>{const{buttonText:a}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"outlined",type:"submit",style:{width:"30vw",height:"55px",marginTop:"5px",marginBottom:"10px",color:"#5b9ca0"}},a()))};var Sa=e=>{const{handleSubmit:a,username:t,classes:n,handleChange:l,password:s,errorMessage:c,buttonText:o}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:a,className:n.root},r.a.createElement(fa,{username:t,handleChange:l}),r.a.createElement(Pa,{password:s,handleChange:l}),c,r.a.createElement(ka,{buttonText:o})))};var Fa=e=>{const{state:a,classes:t,handleChange:n,handleSubmit:l,errorMessage:s}=e,{username:c,password:o}=a,i=()=>r.a.createElement("span",null,"Signup");return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.b,{path:"/signup",render:()=>r.a.createElement("div",{className:"flex flex-container center col"},r.a.createElement("div",{className:"box"},r.a.createElement("h1",null,"Signup"),r.a.createElement(Sa,{handleSubmit:l,classes:t,username:c,handleChange:n,password:o,errorMessage:s,buttonText:i}),r.a.createElement(xa,null),r.a.createElement(ya,null)))}))};var Oa=(e,a,t,n)=>{e.message?a({error:e.message,isError:!0}):(console.log("no error",e),t(e),n.push("/"))};var Na=(e,a,t,n,r)=>{((e,a)=>i.a.post("/api/signup",{username:e,password:a,userType:"user"}).then((e=>(console.log(e),e.data))).catch((e=>(console.log("err",e),e.response.data))))(e,a).then((e=>{Oa(e,t,n,r)})).catch((e=>e.response.data))};var ja=e=>{const{user:a,setUser:t,history:l}=e,s=wa(),[c,o]=Object(n.useState)({username:"",password:"",isError:!1,error:""}),{username:i,password:m,isError:u,error:d}=c;Object(n.useEffect)((()=>{a&&l.push("/")}));const g=Oe(u,d);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Fa,{state:c,classes:s,handleChange:e=>{e.persist(),o((a=>({...a,[e.target.name]:e.target.value})))},handleSubmit:e=>{e.preventDefault(),Na(i,m,o,t,l)},errorMessage:g}))};var Ta=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",null,"Don't have account?",r.a.createElement(c.b,{to:"/signup",style:{textDecoration:"none",color:"#7D237C"}}," ","Signup"))));var La=e=>{const{handleSubmit:a,username:t,classes:n,handleChange:l,password:s,errorMessage:c,buttonText:o}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:a,className:n.root},r.a.createElement(fa,{username:t,handleChange:l}),r.a.createElement(Pa,{password:s,handleChange:l}),c,r.a.createElement(ka,{buttonText:o})))};var Ra=e=>{const{state:a,classes:t,handleChange:n,errorMessage:l,handleSubmit:s}=e,{username:c,password:o}=a,i=()=>r.a.createElement("span",null,"Login");return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.b,{path:"/login",render:()=>r.a.createElement("div",{className:"flex flex-container center col"},r.a.createElement("div",{className:"box"},r.a.createElement("h1",null,"Login"),r.a.createElement(La,{handleSubmit:s,classes:t,username:c,handleChange:n,password:o,errorMessage:l,buttonText:i}),r.a.createElement(xa,null),r.a.createElement(Ta,null)))}))};var Aa=(e,a,t,n)=>{e.message?a({username:"",password:"",error:e.message,isError:!0}):(t(e),n.push("/home"))};var Da=(e,a,t,n,r)=>{((e,a)=>i.a.post("/api/login",{username:e,password:a}).then((e=>(console.log(e.data),e.data))).catch((e=>e.response.data)))(e,a).then((e=>{Aa(e,t,n,r)})).catch((e=>e.response.data))};var Ua=e=>{console.log("*** LOGIN PROPS ***",e);const{user:a,setUser:t,history:l}=e,s=ba(),[c,o]=Object(n.useState)({username:"",password:"",isError:!1,error:""}),{username:i,password:m,isError:u,error:d}=c;Object(n.useEffect)((()=>{a&&l.push("/home")}));const g=Oe(u,d);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ra,{state:c,handleChange:e=>{e.persist(),o((a=>({...a,[e.target.name]:e.target.value})))},errorMessage:g,handleSubmit:e=>{e.preventDefault(),Da(i,m,o,t,l)},classes:s}))};var Ka=e=>{const{id:a}=e.match.params,{history:t}=e,[l,s]=Object(n.useState)(!0);console.log("***ID***",e.match.params);const c=Object(n.useCallback)((()=>{s(!1)}),[]);return Object(n.useEffect)((()=>{(e=>i.a.get("/api/email/confirm/".concat(e)).then((e=>(console.log("***EMAIL CONFIRMED AUTH***",e),e.data))).catch((e=>e.response.data)))(a).then((e=>{c()})).catch((e=>e.response.data)),t.push("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://web-hook-trader.herokuapp.com"}).SUCCESS_URL))}),[c,a,t]),r.a.createElement("div",null,l?r.a.createElement("p",null,"Confirming"):r.a.createElement(r.a.Fragment,null))};var Wa=e=>{const{user:a,setUser:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.d,null,r.a.createElement(D.b,{path:"/signup",render:e=>r.a.createElement(ja,Object.assign({},e,{setUser:t,user:a}))}),r.a.createElement(D.b,{path:"/login",render:e=>r.a.createElement(Ua,Object.assign({},e,{user:a,setUser:t}))}),r.a.createElement(D.b,{path:"/confirm/:id",render:e=>r.a.createElement(Ka,Object.assign({},e,{setUser:t,user:a}))}),r.a.createElement(D.a,{from:"*",to:"/"})))};var _a=e=>{const{user:a,setUser:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{updateUser:t,user:a}),r.a.createElement(Wa,Object.assign({},e,{setUser:t,user:a})))};var Ba=(e,a)=>{a(e[0].map((e=>e.identifier)).sort(((e,a)=>e.localeCompare(a))))};var Ia=(e,a)=>{a(e[0].map((e=>e.exchangeName)))};var Ma=(e,a,t,n)=>{e&&(e=>i.a.get("/exchangeRoutes/exchangeAccounts/".concat(e)).then((e=>e.data)).catch((e=>(console.log("Error is",e),e.res.data))))(a).then((e=>{Ba(e,n),Ia(e,t)})).catch((e=>e.response.data))};var qa=e=>{const[a,t]=Object(n.useState)(e.user),[l,s]=Object(n.useState)([]),[c,o]=Object(n.useState)([]);let i;a&&(i=a._id);const m=Object(n.useCallback)((()=>{Ma(a,i,o,s)}),[a,i]);return Object(n.useEffect)((()=>{m()}),[m]),r.a.createElement("div",null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement(va,Object.assign({},e,{exchangeIdentifiers:l,exchangeNames:c,setUser:t,user:a}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(_a,Object.assign({},e,{setUser:t,user:a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.get("/api/loggedin").then((e=>{console.log("index.js *** response ***",e);const a=e.data;s.a.render(r.a.createElement(c.a,null,r.a.createElement(qa,{user:a})),document.getElementById("root"))})).catch((e=>(console.log("*** ERROR ***",e),e.response.data))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))},92:function(e,a,t){}},[[146,1,2]]]);
//# sourceMappingURL=main.adc640fd.chunk.js.map