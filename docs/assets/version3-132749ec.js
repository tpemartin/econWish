import{a as W,g as _,s as j,B as D,i as B,b as C,m as h,r as c,u as L,_ as M,j as a,c as A,d as E,t as F,v as V,w as q,F as v,h as l,I as $,T as P,y as G,z as H,q as U,A as I,G as J,C as K,D as Q,E as X,H as k,J as Y,R as Z}from"./700-d678b7a1.js";function ee(e){return _("MuiToggleButton",e)}const te=W("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),z=te,ae=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],oe=e=>{const{classes:t,fullWidth:i,selected:o,disabled:n,size:p,color:d}=e,s={root:["root",o&&"selected",n&&"disabled",i&&"fullWidth",`size${B(p)}`,d]};return E(s,ee,t)},ie=j(D,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[`size${B(i.size)}`]]}})(({theme:e,ownerState:t})=>{let i=t.color==="standard"?e.palette.text.primary:e.palette[t.color].main,o;return e.vars&&(i=t.color==="standard"?e.vars.palette.text.primary:e.vars.palette[t.color].main,o=t.color==="standard"?e.vars.palette.text.primaryChannel:e.vars.palette[t.color].mainChannel),C({},e.typography.button,{borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active},t.fullWidth&&{width:"100%"},{[`&.${z.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:h(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${z.selected}`]:{color:i,backgroundColor:e.vars?`rgba(${o} / ${e.vars.palette.action.selectedOpacity})`:h(i,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${o} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:h(i,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${o} / ${e.vars.palette.action.selectedOpacity})`:h(i,e.palette.action.selectedOpacity)}}}},t.size==="small"&&{padding:7,fontSize:e.typography.pxToRem(13)},t.size==="large"&&{padding:15,fontSize:e.typography.pxToRem(15)})}),se=c.forwardRef(function(t,i){const o=L({props:t,name:"MuiToggleButton"}),{children:n,className:p,color:d="standard",disabled:s=!1,disableFocusRipple:u=!1,fullWidth:m=!1,onChange:g,onClick:f,selected:y,size:b="medium",value:r}=o,R=M(o,ae),O=C({},o,{color:d,disabled:s,disableFocusRipple:u,fullWidth:m,size:b}),S=oe(O),T=x=>{f&&(f(x,r),x.defaultPrevented)||g&&g(x,r)};return a(ie,C({className:A(S.root,p),disabled:s,focusRipple:!u,ref:i,onClick:T,onChange:g,value:r,ownerState:O,"aria-pressed":y},R,{children:n}))}),ne=se;const le="/econWish/assets/pigeon-ea496505.svg";var w={},re=V;Object.defineProperty(w,"__esModule",{value:!0});var N=w.default=void 0,ce=re(F()),de=q,pe=(0,ce.default)((0,de.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Image");N=w.default=pe;function ue({user:e}){const{name:t,grade:i,imgSrc:o,wish:n}=e,[p,d]=c.useState(!1),[s,u]=c.useState("text"),[m,g]=c.useState(()=>["bold","italic"]);function f(){u(s==="picture"?"text":"picture")}function y(){return l(v,{children:[l("div",{className:"stamp-section",style:{display:"flex",flexDirection:"column"},children:[a("div",{className:"main-image",children:a($,{src:o,height:"305px",width:"305px",duration:0,style:{position:"relative",top:25}})}),a("img",{src:le,alt:"",style:{maxWidth:100,position:"absolute",right:70,top:310,transform:"rotate(28deg)"}})]}),l("div",{className:"sender-info",style:{marginTop:50},children:[a("div",{className:"sender-name",style:{fontFamily:"Inter",fontStyle:"normal",fontWeight:600,fontSize:32},children:t}),a("div",{className:"sender-grade",style:{color:"gray",fontFamily:"Inter",fontStyle:"normal",fontWeight:600,fontSize:20},children:i}),a("button",{className:"wish-text",style:{width:300,height:150,color:"gray",fontFamily:"Inter",fontStyle:"normal",fontWeight:300,fontSize:20,overflow:"hidden",textOverflow:"ellipsis"},onClick:function(r){r.preventDefault(),d(!0)},children:n})]})]})}function b(){return a(v,{children:l("div",{className:"stamp-section",style:{display:"flex",flexDirection:"column"},children:[a($,{src:o,height:"653px",width:"386px",duration:0,style:{position:"relative"}}),s==="text"?a(P,{color:"white",sx:{zIndex:1,position:"absolute",width:300,top:200,right:75},children:n}):"",s==="text"?a("div",{className:"background",style:{height:653,width:386,background:"#0e0d0d96",position:"absolute"}}):"",a(ne,{value:m,sx:{width:40,height:40,position:"absolute",bottom:100,right:200,color:"black",background:s==="text"?"gray":"white","&:hover":{background:"white"},borderRadius:"90%"},onClick:f,children:a(N,{})}),a(G,{sx:{width:40,height:40,position:"absolute",top:50,right:50,"&:hover":{borderColor:"none"},"&:focus":{outline:"none"}},onClick:function(r){r.preventDefault(),d(!1)},children:a(H,{sx:{color:"white"}})})]})})}return a(v,{children:a("div",{className:"card",children:a("div",{className:"card-content",children:p==!0?a(b,{}):a(y,{})})})})}function ge(){const[e,t]=c.useState(null);c.useEffect(()=>{U.get(I.entryUrl).then(o=>{console.log(o),o.status===200&&t(o.data)})},[]);let i=e?a(me,{users:fe([...e])}):a("div",{style:{color:"black"},children:"Loading..."});return a("div",{className:"App",children:i})}function fe(e){const t=ve(e[0]),i=e.map(o=>he(o,t));return i.shift(),i}function he(e,t){return{name:e[t.name],grade:e[t.grade],imgSrc:e[t.imgSrc],wish:e[t.wish],id:e[t.id],sealVariant:e[t.sealVariant],sealLocation:e[t.sealLocation]}}function ve(e){var t=Object();return e.map((i,o)=>{t[i]=o}),t.imgSrc=t.ThumbnailLink,t.name=t.Name,t.grade=t.Grade,t.wish=t.Wish,t.sealVariant=t.sealVariant,t.sealLocation=t.sealLocation,t}function me({users:e}){window.autocompleteOptions=[],e.forEach(o=>{window.autocompleteOptions.push({label:o.name+" - "+o.grade,id:o.id})}),e=[...e],e.reverse();const i=[e.pop(),...e].map((o,n)=>l(J,{className:o.grade,children:[a(ue,{user:o}),a(K,{shareLink:I.appUrl+"#"+o.id,title:"來自 "+o.name+" - "+o.grade+" 的祝賀"})]},n));return c.useEffect(()=>{ye()},[]),l("div",{children:[a(Q,{autocompleteOptions:window.autocompleteOptions}),l("div",{className:"main2",children:[a(X,{children:l(v,{children:[i,a("div",{className:"endCard"})]})}),a(k,{autocompleteOptions})]}),a(k,{autocompleteOptions})]})}function ye(){const e=window.location.hash;if(e){const t=e.slice(1),i=document.getElementById(t);i&&i.scrollIntoView({block:"start",inline:"nearest"})}}Y.createRoot(document.getElementById("root")).render(a(Z.StrictMode,{children:a(ge,{})}));
