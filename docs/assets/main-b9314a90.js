import{g as H,a as U,s as O,P as Qe,r as T,u as V,_ as D,b as v,j as d,c as L,d as q,B as Je,e as Ze,f as me,h as w,i as _,k as _e,T as oe,l as Ie,m as le,n as ye,o as Ke,p as et,q as ge,I as Me,t as tt,v as rt,w as nt,S as Le,x as re,y as ot,z as at,R as G,A as $e,G as it,C as st,D as ct,E as lt,F as ut,H as Ce,J as dt}from"./700-d678b7a1.js";import{C as ue,B as pt}from"./Container-10a3cff2.js";var g={},ft={get exports(){return g},set exports(t){g=t}},ht="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",mt=ht,gt=mt;function Fe(){}function je(){}je.resetWarningCache=Fe;var vt=function(){function t(n,o,a,c,i,s){if(s!==gt){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:je,resetWarningCache:Fe};return r.PropTypes=r,r};ft.exports=vt();function bt(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Tt(t){return parseFloat(t)}function yt(t){return H("MuiCard",t)}U("MuiCard",["root"]);const Ct=["className","raised"],wt=t=>{const{classes:e}=t;return q({root:["root"]},yt,e)},St=O(Qe,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({overflow:"hidden"})),Et=T.forwardRef(function(e,r){const n=V({props:e,name:"MuiCard"}),{className:o,raised:a=!1}=n,c=D(n,Ct),i=v({},n,{raised:a}),s=wt(i);return d(St,v({className:L(s.root,o),elevation:a?8:void 0,ref:r,ownerState:i},c))}),At=Et;function Pt(t){return H("MuiCardContent",t)}U("MuiCardContent",["root"]);const Ot=["className","component"],Rt=t=>{const{classes:e}=t;return q({root:["root"]},Pt,e)},kt=O("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),xt=T.forwardRef(function(e,r){const n=V({props:e,name:"MuiCardContent"}),{className:o,component:a="div"}=n,c=D(n,Ot),i=v({},n,{component:a}),s=Rt(i);return d(kt,v({as:a,className:L(s.root,o),ownerState:i,ref:r},c))}),Nt=xt;function _t(t){return H("PrivateSwitchBase",t)}U("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const It=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Mt=t=>{const{classes:e,checked:r,disabled:n,edge:o}=t,a={root:["root",r&&"checked",n&&"disabled",o&&`edge${_(o)}`],input:["input"]};return q(a,_t,e)},Lt=O(Je)(({ownerState:t})=>v({padding:9,borderRadius:"50%"},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12})),$t=O("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Ft=T.forwardRef(function(e,r){const{autoFocus:n,checked:o,checkedIcon:a,className:c,defaultChecked:i,disabled:s,disableFocusRipple:l=!1,edge:u=!1,icon:p,id:f,inputProps:m,inputRef:y,name:P,onBlur:C,onChange:S,onFocus:R,readOnly:$,required:X=!1,tabIndex:Q,type:I,value:z}=e,F=D(e,It),[j,We]=Ze({controlled:o,default:!!i,name:"SwitchBase",state:"checked"}),M=me(),Ge=x=>{R&&R(x),M&&M.onFocus&&M.onFocus(x)},Ye=x=>{C&&C(x),M&&M.onBlur&&M.onBlur(x)},Ve=x=>{if(x.nativeEvent.defaultPrevented)return;const Te=x.target.checked;We(Te),S&&S(x,Te)};let J=s;M&&typeof J>"u"&&(J=M.disabled);const Xe=I==="checkbox"||I==="radio",se=v({},e,{checked:j,disabled:J,disableFocusRipple:l,edge:u}),be=Mt(se);return w(Lt,v({component:"span",className:L(be.root,c),centerRipple:!0,focusRipple:!l,disabled:J,tabIndex:null,role:void 0,onFocus:Ge,onBlur:Ye,ownerState:se,ref:r},F,{children:[d($t,v({autoFocus:n,checked:o,defaultChecked:i,className:be.input,disabled:J,id:Xe?f:void 0,name:P,onChange:Ve,readOnly:$,ref:y,required:X,ownerState:se,tabIndex:Q,type:I},I==="checkbox"&&z===void 0?{}:{value:z},m)),j?a:p]}))}),jt=Ft;function Bt(t){return H("MuiFormControlLabel",t)}const Ht=U("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),ee=Ht,Ut=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Dt=t=>{const{classes:e,disabled:r,labelPlacement:n,error:o,required:a}=t,c={root:["root",r&&"disabled",`labelPlacement${_(n)}`,o&&"error",a&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",o&&"error"]};return q(c,Bt,e)},qt=O("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[{[`& .${ee.label}`]:e.label},e.root,e[`labelPlacement${_(r.labelPlacement)}`]]}})(({theme:t,ownerState:e})=>v({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${ee.disabled}`]:{cursor:"default"}},e.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},e.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},e.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${ee.label}`]:{[`&.${ee.disabled}`]:{color:(t.vars||t).palette.text.disabled}}})),zt=O("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(t,e)=>e.asterisk})(({theme:t})=>({[`&.${ee.error}`]:{color:(t.vars||t).palette.error.main}})),Wt=T.forwardRef(function(e,r){var n,o;const a=V({props:e,name:"MuiFormControlLabel"}),{className:c,componentsProps:i={},control:s,disabled:l,disableTypography:u,label:p,labelPlacement:f="end",required:m,slotProps:y={}}=a,P=D(a,Ut),C=me(),S=(n=l??s.props.disabled)!=null?n:C==null?void 0:C.disabled,R=m??s.props.required,$={disabled:S,required:R};["checked","name","onChange","value","inputRef"].forEach(j=>{typeof s.props[j]>"u"&&typeof a[j]<"u"&&($[j]=a[j])});const X=_e({props:a,muiFormControl:C,states:["error"]}),Q=v({},a,{disabled:S,labelPlacement:f,required:R,error:X.error}),I=Dt(Q),z=(o=y.typography)!=null?o:i.typography;let F=p;return F!=null&&F.type!==oe&&!u&&(F=d(oe,v({component:"span"},z,{className:L(I.label,z==null?void 0:z.className),children:F}))),w(qt,v({className:L(I.root,c),ownerState:Q,ref:r},P,{children:[T.cloneElement(s,$),F,R&&w(zt,{ownerState:Q,"aria-hidden":!0,className:I.asterisk,children:[" ","*"]})]}))}),Gt=Wt;function Yt(t){return H("MuiFormGroup",t)}U("MuiFormGroup",["root","row","error"]);const Vt=["className","row"],Xt=t=>{const{classes:e,row:r,error:n}=t;return q({root:["root",r&&"row",n&&"error"]},Yt,e)},Qt=O("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.row&&e.row]}})(({ownerState:t})=>v({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})),Jt=T.forwardRef(function(e,r){const n=V({props:e,name:"MuiFormGroup"}),{className:o,row:a=!1}=n,c=D(n,Vt),i=me(),s=_e({props:n,muiFormControl:i,states:["error"]}),l=v({},n,{row:a,error:s.error}),u=Xt(l);return d(Qt,v({className:L(u.root,o),ownerState:l,ref:r},c))}),Zt=Jt;function Kt(t){return H("MuiSkeleton",t)}U("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const er=["animation","className","component","height","style","variant","width"];let ae=t=>t,we,Se,Ee,Ae;const tr=t=>{const{classes:e,variant:r,animation:n,hasChildren:o,width:a,height:c}=t;return q({root:["root",r,n,o&&"withChildren",o&&!a&&"fitContent",o&&!c&&"heightAuto"]},Kt,e)},rr=Ie(we||(we=ae`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),nr=Ie(Se||(Se=ae`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),or=O("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],r.animation!==!1&&e[r.animation],r.hasChildren&&e.withChildren,r.hasChildren&&!r.width&&e.fitContent,r.hasChildren&&!r.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const r=bt(t.shape.borderRadius)||"px",n=Tt(t.shape.borderRadius);return v({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:le(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${r}/${Math.round(n/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&ye(Ee||(Ee=ae`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),rr),({ownerState:t,theme:e})=>t.animation==="wave"&&ye(Ae||(Ae=ae`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),nr,(e.vars||e).palette.action.hover)),ar=T.forwardRef(function(e,r){const n=V({props:e,name:"MuiSkeleton"}),{animation:o="pulse",className:a,component:c="span",height:i,style:s,variant:l="text",width:u}=n,p=D(n,er),f=v({},n,{animation:o,component:c,variant:l,hasChildren:!!p.children}),m=tr(f);return d(or,v({as:c,ref:r,className:L(m.root,a),ownerState:f},p,{style:v({width:u,height:i},s)}))}),ir=ar;function sr(t){return H("MuiSwitch",t)}const cr=U("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),E=cr,lr=["className","color","edge","size","sx"],ur=t=>{const{classes:e,edge:r,size:n,color:o,checked:a,disabled:c}=t,i={root:["root",r&&`edge${_(r)}`,`size${_(n)}`],switchBase:["switchBase",`color${_(o)}`,a&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},s=q(i,sr,e);return v({},e,s)},dr=O("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.edge&&e[`edge${_(r.edge)}`],e[`size${_(r.size)}`]]}})(({ownerState:t})=>v({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${E.thumb}`]:{width:16,height:16},[`& .${E.switchBase}`]:{padding:4,[`&.${E.checked}`]:{transform:"translateX(16px)"}}})),pr=O(jt,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.switchBase,{[`& .${E.input}`]:e.input},r.color!=="default"&&e[`color${_(r.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${E.checked}`]:{transform:"translateX(20px)"},[`&.${E.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${E.checked} + .${E.track}`]:{opacity:.5},[`&.${E.disabled} + .${E.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${E.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:e})=>v({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:le(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${E.checked}`]:{color:(t.vars||t).palette[e.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:le(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${E.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${e.color}DisabledColor`]:`${t.palette.mode==="light"?Ke(t.palette[e.color].main,.62):et(t.palette[e.color].main,.55)}`}},[`&.${E.checked} + .${E.track}`]:{backgroundColor:(t.vars||t).palette[e.color].main}})),fr=O("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,e)=>e.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),hr=O("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,e)=>e.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),mr=T.forwardRef(function(e,r){const n=V({props:e,name:"MuiSwitch"}),{className:o,color:a="primary",edge:c=!1,size:i="medium",sx:s}=n,l=D(n,lr),u=v({},n,{color:a,edge:c,size:i}),p=ur(u),f=d(hr,{className:p.thumb,ownerState:u});return w(dr,{className:L(p.root,o),sx:s,ownerState:u,children:[d(pr,v({type:"checkbox",icon:f,checkedIcon:f,ref:r,ownerState:u},l,{classes:v({},p,{root:p.switchBase})})),d(fr,{className:p.track,ownerState:u})]})}),gr=mr;const vr="/econWish/assets/ntpu-stone-ed27072a.svg",br="/econWish/assets/bschool-1c04ef28.svg",Tr="/econWish/assets/gate-323adeed.svg",yr="/econWish/assets/eagle-745aedff.svg",Cr="/econWish/assets/heart-lake-8583da2a.svg",Pe=[{src:vr,style:{margin:"auto"}},{src:br,style:{margin:"0px 5px 21px -8px"}},{src:Tr,style:{margin:"0 0 10px 17px"}},{src:yr,style:{margin:"0 0 9px 8px"}},{src:Cr,style:{margin:"0"}}];function wr({variant:t,location:e}){return t=t?t-1:2,d("div",{className:"seal",style:e,children:d("div",{className:"seal-icon",children:d("img",{className:"seal-color",src:Pe[t].src,style:Pe[t].style})})})}const Sr=[{left:"-10px",bottom:"-50px",transform:"rotate(-45deg)"},{left:"-50px",bottom:"0px",transform:"rotate(-10deg)"},{left:"-64px",bottom:"15px",transform:"rotate(-42deg)"},{left:"120px",bottom:"-63px",transform:"rotate(-6deg)"},{left:"-63px",top:"-54px",transform:"rotate(-55deg)"}];function Er({imgSrc:t,sealVariant:e,sealLocation:r}){return console.log(r),r=r?Sr[r]:{left:"-10px",bottom:"-50px",transform:"rotate(-45deg)"},w("div",{className:"stamp-holder",children:[d(Ar,{imgSrc:t}),d(wr,{variant:e,location:r})]})}function Ar({imgSrc:t}){const[e,r]=T.useState(null);return T.useEffect(()=>{ge.get(t,{responseType:"blob"}).then(n=>{const o=URL.createObjectURL(n.data);r(o)})},[t]),d("div",{className:"stamp",children:e?d(Me,{duration:0,src:e}):d(ir,{variant:"rectangular",width:222,height:284})})}var ve={},Pr=rt;Object.defineProperty(ve,"__esModule",{value:!0});var Be=ve.default=void 0,Or=Pr(tt()),Rr=nt,kr=(0,Or.default)((0,Rr.jsx)("path",{d:"M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"}),"Notes");Be=ve.default=kr;const xr="/econWish/assets/Notes-7ec21c82.svg",Nr="/econWish/assets/Picture-f75c652f.svg",_r=O(gr)(({theme:t})=>({width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:`url(${xr})`},"& + .MuiSwitch-track":{opacity:1,backgroundColor:t.palette.mode==="dark"?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:t.palette.mode==="dark"?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:`url(${Nr})`}},"& .MuiSwitch-track":{opacity:1,backgroundColor:t.palette.mode==="dark"?"#8796A5":"#aab4be",borderRadius:20/2}}));function Ir({onChange:t}){return console.log(Be),d(Zt,{onChange:t,children:d(ue,{children:d(Gt,{control:d(_r,{sx:{m:1},defaultChecked:!0})})})})}function Mr({user:t}){const{name:e,grade:r,imgSrc:n,wish:o,id:a,sealVariant:c,sealLocation:i}=t,[s,l]=T.useState(!0);function u(){l(!1)}function p(){l(!0)}T.useEffect(()=>{ge.get(n).then(m=>{console.log(m)})},[]);var f=s?d($r,{imgSrc:n,sealVariant:c,sealLocation:i,name:e,grade:r,wish:o,onClick:u}):d(Fr,{imgSrc:n,wish:o,onClick:p});return w(At,{className:"border-image",sx:{maxWidth:345,margin:"auto",height:587},children:[d("div",{id:`${a}`,className:"card-id"}),f]})}function Lr({name:t,grade:e}){return w("div",{className:"sender",children:[d("div",{className:"label text-shadow",children:"From:"}),w("div",{className:"sender-info",children:[d("div",{className:"sender-name",children:d("div",{className:"sender-name-text text-shadow",children:t})}),d("div",{className:"sender-grade",children:d("div",{className:"sender-grade-text text-shadow",children:e})})]})]})}function $r({imgSrc:t,sealVariant:e,sealLocation:r,name:n,grade:o,wish:a,onClick:c}){return d(Nt,{children:w(Le,{spacing:0,children:[d(re,{sx:{height:350},children:d(Er,{imgSrc:t,sealVariant:e,sealLocation:r})}),d(re,{mt:5,pl:3,children:d(Lr,{name:n,grade:o})}),d(re,{mt:3,children:d(pt,{color:"primary",onClick:c,children:d(oe,{noWrap:!0,sx:{width:"300px"},children:a})})})]})})}function Fr({imgSrc:t,wish:e,onClick:r}){const[n,o]=T.useState(!1);function a(){o(!n)}var c=n?1:.3,i=n?"hidden":"visible";return w("div",{style:{height:"100%",position:"relative"},children:[d(Me,{duration:0,src:t,fit:"cover",style:{opacity:c}}),d("div",{style:{position:"absolute",top:"0",height:"100%",visibility:i},children:d(Le,{sx:{height:"100%",justifyContent:"center"},children:d(ue,{children:d(re,{children:d(oe,{children:e})})})})}),d("div",{style:{position:"absolute",bottom:"0%",width:"100%"},children:d(ue,{children:d(Ir,{onChange:a})})}),d(ot,{"aria-label":"close",sx:{position:"absolute",color:s=>s.palette.grey[500],right:8,top:8},onClick:r,children:d(at,{})})]})}const jr="/econWish/assets/app-1ce5b686.png";function Br(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var He=T,Hr=Br(He);function Oe(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Ur(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var Dr=!!(typeof window<"u"&&window.document&&window.document.createElement);function qr(t,e,r){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof r<"u"&&typeof r!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function n(o){return o.displayName||o.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var c=[],i;function s(){i=t(c.map(function(u){return u.props})),l.canUseDOM?e(i):r&&(i=r(i))}var l=function(u){Ur(p,u);function p(){return u.apply(this,arguments)||this}p.peek=function(){return i},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var y=i;return i=void 0,c=[],y};var f=p.prototype;return f.UNSAFE_componentWillMount=function(){c.push(this),s()},f.componentDidUpdate=function(){s()},f.componentWillUnmount=function(){var y=c.indexOf(this);c.splice(y,1),s()},f.render=function(){return Hr.createElement(a,this.props)},p}(He.PureComponent);return Oe(l,"displayName","SideEffect("+n(a)+")"),Oe(l,"canUseDOM",Dr),l}}var zr=qr,Wr=typeof Element<"u",Gr=typeof Map=="function",Yr=typeof Set=="function",Vr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ne(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var r,n,o;if(Array.isArray(t)){if(r=t.length,r!=e.length)return!1;for(n=r;n--!==0;)if(!ne(t[n],e[n]))return!1;return!0}var a;if(Gr&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(a=t.entries();!(n=a.next()).done;)if(!e.has(n.value[0]))return!1;for(a=t.entries();!(n=a.next()).done;)if(!ne(n.value[1],e.get(n.value[0])))return!1;return!0}if(Yr&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(a=t.entries();!(n=a.next()).done;)if(!e.has(n.value[0]))return!1;return!0}if(Vr&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(r=t.length,r!=e.length)return!1;for(n=r;n--!==0;)if(t[n]!==e[n])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(o=Object.keys(t),r=o.length,r!==Object.keys(e).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[n]))return!1;if(Wr&&t instanceof Element)return!1;for(n=r;n--!==0;)if(!((o[n]==="_owner"||o[n]==="__v"||o[n]==="__o")&&t.$$typeof)&&!ne(t[o[n]],e[o[n]]))return!1;return!0}return t!==t&&e!==e}var Xr=function(e,r){try{return ne(e,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Re=Object.getOwnPropertySymbols,Qr=Object.prototype.hasOwnProperty,Jr=Object.prototype.propertyIsEnumerable;function Zr(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function Kr(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(e).map(function(a){return e[a]});if(n.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var en=Kr()?Object.assign:function(t,e){for(var r,n=Zr(t),o,a=1;a<arguments.length;a++){r=Object(arguments[a]);for(var c in r)Qr.call(r,c)&&(n[c]=r[c]);if(Re){o=Re(r);for(var i=0;i<o.length;i++)Jr.call(r,o[i])&&(n[o[i]]=r[o[i]])}}return n},B={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},h={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(h).map(function(t){return h[t]});var b={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},ie={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},te={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},tn=Object.keys(ie).reduce(function(t,e){return t[ie[e]]=e,t},{}),rn=[h.NOSCRIPT,h.SCRIPT,h.STYLE],k="data-react-helmet",nn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},on=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},an=function(){function t(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),A=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},sn=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},ke=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},cn=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},de=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ln=function(e){var r=Y(e,h.TITLE),n=Y(e,te.TITLE_TEMPLATE);if(n&&r)return n.replace(/%s/g,function(){return Array.isArray(r)?r.join(""):r});var o=Y(e,te.DEFAULT_TITLE);return r||o||void 0},un=function(e){return Y(e,te.ON_CHANGE_CLIENT_STATE)||function(){}},ce=function(e,r){return r.filter(function(n){return typeof n[e]<"u"}).map(function(n){return n[e]}).reduce(function(n,o){return A({},n,o)},{})},dn=function(e,r){return r.filter(function(n){return typeof n[h.BASE]<"u"}).map(function(n){return n[h.BASE]}).reverse().reduce(function(n,o){if(!n.length)for(var a=Object.keys(o),c=0;c<a.length;c++){var i=a[c],s=i.toLowerCase();if(e.indexOf(s)!==-1&&o[s])return n.concat(o)}return n},[])},Z=function(e,r,n){var o={};return n.filter(function(a){return Array.isArray(a[e])?!0:(typeof a[e]<"u"&&mn("Helmet: "+e+' should be of type "Array". Instead found type "'+nn(a[e])+'"'),!1)}).map(function(a){return a[e]}).reverse().reduce(function(a,c){var i={};c.filter(function(f){for(var m=void 0,y=Object.keys(f),P=0;P<y.length;P++){var C=y[P],S=C.toLowerCase();r.indexOf(S)!==-1&&!(m===b.REL&&f[m].toLowerCase()==="canonical")&&!(S===b.REL&&f[S].toLowerCase()==="stylesheet")&&(m=S),r.indexOf(C)!==-1&&(C===b.INNER_HTML||C===b.CSS_TEXT||C===b.ITEM_PROP)&&(m=C)}if(!m||!f[m])return!1;var R=f[m].toLowerCase();return o[m]||(o[m]={}),i[m]||(i[m]={}),o[m][R]?!1:(i[m][R]=!0,!0)}).reverse().forEach(function(f){return a.push(f)});for(var s=Object.keys(i),l=0;l<s.length;l++){var u=s[l],p=en({},o[u],i[u]);o[u]=p}return a},[]).reverse()},Y=function(e,r){for(var n=e.length-1;n>=0;n--){var o=e[n];if(o.hasOwnProperty(r))return o[r]}return null},pn=function(e){return{baseTag:dn([b.HREF,b.TARGET],e),bodyAttributes:ce(B.BODY,e),defer:Y(e,te.DEFER),encode:Y(e,te.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ce(B.HTML,e),linkTags:Z(h.LINK,[b.REL,b.HREF],e),metaTags:Z(h.META,[b.NAME,b.CHARSET,b.HTTPEQUIV,b.PROPERTY,b.ITEM_PROP],e),noscriptTags:Z(h.NOSCRIPT,[b.INNER_HTML],e),onChangeClientState:un(e),scriptTags:Z(h.SCRIPT,[b.SRC,b.INNER_HTML],e),styleTags:Z(h.STYLE,[b.CSS_TEXT],e),title:ln(e),titleAttributes:ce(B.TITLE,e)}},pe=function(){var t=Date.now();return function(e){var r=Date.now();r-t>16?(t=r,e(r)):setTimeout(function(){pe(e)},0)}}(),xe=function(e){return clearTimeout(e)},fn=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||pe:global.requestAnimationFrame||pe,hn=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||xe:global.cancelAnimationFrame||xe,mn=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},K=null,gn=function(e){K&&hn(K),e.defer?K=fn(function(){Ne(e,function(){K=null})}):(Ne(e),K=null)},Ne=function(e,r){var n=e.baseTag,o=e.bodyAttributes,a=e.htmlAttributes,c=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,p=e.styleTags,f=e.title,m=e.titleAttributes;fe(h.BODY,o),fe(h.HTML,a),vn(f,m);var y={baseTag:W(h.BASE,n),linkTags:W(h.LINK,c),metaTags:W(h.META,i),noscriptTags:W(h.NOSCRIPT,s),scriptTags:W(h.SCRIPT,u),styleTags:W(h.STYLE,p)},P={},C={};Object.keys(y).forEach(function(S){var R=y[S],$=R.newTags,X=R.oldTags;$.length&&(P[S]=$),X.length&&(C[S]=y[S].oldTags)}),r&&r(),l(e,P,C)},Ue=function(e){return Array.isArray(e)?e.join(""):e},vn=function(e,r){typeof e<"u"&&document.title!==e&&(document.title=Ue(e)),fe(h.TITLE,r)},fe=function(e,r){var n=document.getElementsByTagName(e)[0];if(n){for(var o=n.getAttribute(k),a=o?o.split(","):[],c=[].concat(a),i=Object.keys(r),s=0;s<i.length;s++){var l=i[s],u=r[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),a.indexOf(l)===-1&&a.push(l);var p=c.indexOf(l);p!==-1&&c.splice(p,1)}for(var f=c.length-1;f>=0;f--)n.removeAttribute(c[f]);a.length===c.length?n.removeAttribute(k):n.getAttribute(k)!==i.join(",")&&n.setAttribute(k,i.join(","))}},W=function(e,r){var n=document.head||document.querySelector(h.HEAD),o=n.querySelectorAll(e+"["+k+"]"),a=Array.prototype.slice.call(o),c=[],i=void 0;return r&&r.length&&r.forEach(function(s){var l=document.createElement(e);for(var u in s)if(s.hasOwnProperty(u))if(u===b.INNER_HTML)l.innerHTML=s.innerHTML;else if(u===b.CSS_TEXT)l.styleSheet?l.styleSheet.cssText=s.cssText:l.appendChild(document.createTextNode(s.cssText));else{var p=typeof s[u]>"u"?"":s[u];l.setAttribute(u,p)}l.setAttribute(k,"true"),a.some(function(f,m){return i=m,l.isEqualNode(f)})?a.splice(i,1):c.push(l)}),a.forEach(function(s){return s.parentNode.removeChild(s)}),c.forEach(function(s){return n.appendChild(s)}),{oldTags:a,newTags:c}},De=function(e){return Object.keys(e).reduce(function(r,n){var o=typeof e[n]<"u"?n+'="'+e[n]+'"':""+n;return r?r+" "+o:o},"")},bn=function(e,r,n,o){var a=De(n),c=Ue(r);return a?"<"+e+" "+k+'="true" '+a+">"+de(c,o)+"</"+e+">":"<"+e+" "+k+'="true">'+de(c,o)+"</"+e+">"},Tn=function(e,r,n){return r.reduce(function(o,a){var c=Object.keys(a).filter(function(l){return!(l===b.INNER_HTML||l===b.CSS_TEXT)}).reduce(function(l,u){var p=typeof a[u]>"u"?u:u+'="'+de(a[u],n)+'"';return l?l+" "+p:p},""),i=a.innerHTML||a.cssText||"",s=rn.indexOf(e)===-1;return o+"<"+e+" "+k+'="true" '+c+(s?"/>":">"+i+"</"+e+">")},"")},qe=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(n,o){return n[ie[o]||o]=e[o],n},r)},yn=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(n,o){return n[tn[o]||o]=e[o],n},r)},Cn=function(e,r,n){var o,a=(o={key:r},o[k]=!0,o),c=qe(n,a);return[G.createElement(h.TITLE,c,r)]},wn=function(e,r){return r.map(function(n,o){var a,c=(a={key:o},a[k]=!0,a);return Object.keys(n).forEach(function(i){var s=ie[i]||i;if(s===b.INNER_HTML||s===b.CSS_TEXT){var l=n.innerHTML||n.cssText;c.dangerouslySetInnerHTML={__html:l}}else c[s]=n[i]}),G.createElement(e,c)})},N=function(e,r,n){switch(e){case h.TITLE:return{toComponent:function(){return Cn(e,r.title,r.titleAttributes)},toString:function(){return bn(e,r.title,r.titleAttributes,n)}};case B.BODY:case B.HTML:return{toComponent:function(){return qe(r)},toString:function(){return De(r)}};default:return{toComponent:function(){return wn(e,r)},toString:function(){return Tn(e,r,n)}}}},ze=function(e){var r=e.baseTag,n=e.bodyAttributes,o=e.encode,a=e.htmlAttributes,c=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,p=e.title,f=p===void 0?"":p,m=e.titleAttributes;return{base:N(h.BASE,r,o),bodyAttributes:N(B.BODY,n,o),htmlAttributes:N(B.HTML,a,o),link:N(h.LINK,c,o),meta:N(h.META,i,o),noscript:N(h.NOSCRIPT,s,o),script:N(h.SCRIPT,l,o),style:N(h.STYLE,u,o),title:N(h.TITLE,{title:f,titleAttributes:m},o)}},Sn=function(e){var r,n;return n=r=function(o){sn(a,o);function a(){return on(this,a),cn(this,o.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(i){return!Xr(this.props,i)},a.prototype.mapNestedChildrenToProps=function(i,s){if(!s)return null;switch(i.type){case h.SCRIPT:case h.NOSCRIPT:return{innerHTML:s};case h.STYLE:return{cssText:s}}throw new Error("<"+i.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(i){var s,l=i.child,u=i.arrayTypeChildren,p=i.newChildProps,f=i.nestedChildren;return A({},u,(s={},s[l.type]=[].concat(u[l.type]||[],[A({},p,this.mapNestedChildrenToProps(l,f))]),s))},a.prototype.mapObjectTypeChildren=function(i){var s,l,u=i.child,p=i.newProps,f=i.newChildProps,m=i.nestedChildren;switch(u.type){case h.TITLE:return A({},p,(s={},s[u.type]=m,s.titleAttributes=A({},f),s));case h.BODY:return A({},p,{bodyAttributes:A({},f)});case h.HTML:return A({},p,{htmlAttributes:A({},f)})}return A({},p,(l={},l[u.type]=A({},f),l))},a.prototype.mapArrayTypeChildrenToProps=function(i,s){var l=A({},s);return Object.keys(i).forEach(function(u){var p;l=A({},l,(p={},p[u]=i[u],p))}),l},a.prototype.warnOnInvalidChildren=function(i,s){return!0},a.prototype.mapChildrenToProps=function(i,s){var l=this,u={};return G.Children.forEach(i,function(p){if(!(!p||!p.props)){var f=p.props,m=f.children,y=ke(f,["children"]),P=yn(y);switch(l.warnOnInvalidChildren(p,m),p.type){case h.LINK:case h.META:case h.NOSCRIPT:case h.SCRIPT:case h.STYLE:u=l.flattenArrayTypeChildren({child:p,arrayTypeChildren:u,newChildProps:P,nestedChildren:m});break;default:s=l.mapObjectTypeChildren({child:p,newProps:s,newChildProps:P,nestedChildren:m});break}}}),s=this.mapArrayTypeChildrenToProps(u,s),s},a.prototype.render=function(){var i=this.props,s=i.children,l=ke(i,["children"]),u=A({},l);return s&&(u=this.mapChildrenToProps(s,u)),G.createElement(e,u)},an(a,null,[{key:"canUseDOM",set:function(i){e.canUseDOM=i}}]),a}(G.Component),r.propTypes={base:g.object,bodyAttributes:g.object,children:g.oneOfType([g.arrayOf(g.node),g.node]),defaultTitle:g.string,defer:g.bool,encodeSpecialCharacters:g.bool,htmlAttributes:g.object,link:g.arrayOf(g.object),meta:g.arrayOf(g.object),noscript:g.arrayOf(g.object),onChangeClientState:g.func,script:g.arrayOf(g.object),style:g.arrayOf(g.object),title:g.string,titleAttributes:g.object,titleTemplate:g.string},r.defaultProps={defer:!0,encodeSpecialCharacters:!0},r.peek=e.peek,r.rewind=function(){var o=e.rewind();return o||(o=ze({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},n},En=function(){return null},An=zr(pn,gn,ze)(En),he=Sn(An);he.renderStatic=he.rewind;function Pn(){const[t,e]=T.useState(null);T.useEffect(()=>{ge.get($e.entryUrl).then(n=>{console.log(n),n.status===200&&e(n.data)})},[]);let r=t?d(xn,{users:On([...t])}):d("div",{style:{color:"black"},children:"Loading..."});return w("div",{className:"App",children:[r,w(he,{children:[d("meta",{property:"og:image",content:`https://tpemartin.github.io${jr}`}),d("meta",{property:"og:url",content:"https://tpemartin.github.io/econWish/"})]})]})}function On(t){const e=kn(t[0]),r=t.map(n=>Rn(n,e));return r.shift(),r}function Rn(t,e){return{name:t[e.name],grade:t[e.grade],imgSrc:t[e.imgSrc],wish:t[e.wish],id:t[e.id],sealVariant:t[e.sealVariant],sealLocation:t[e.sealLocation]}}function kn(t){var e=Object();return t.map((r,n)=>{e[r]=n}),e.imgSrc=e.ThumbnailLink,e.name=e.Name,e.grade=e.Grade,e.wish=e.Wish,e.sealVariant=e.sealVariant,e.sealLocation=e.sealLocation,e}function xn({users:t}){window.autocompleteOptions=[],t.forEach(n=>{window.autocompleteOptions.push({label:n.name+" - "+n.grade,id:n.id})}),t=[...t],t.reverse();const r=[t.pop(),...t].map((n,o)=>w(it,{className:n.grade,children:[d(Mr,{user:n}),d(st,{shareLink:$e.appUrl+"#"+n.id,title:"來自 "+n.name+" - "+n.grade+" 的祝賀"})]},o));return T.useEffect(()=>{Nn()},[]),w("div",{children:[d(ct,{autocompleteOptions:window.autocompleteOptions}),w("div",{className:"main2",children:[d(lt,{children:w(ut,{children:[r,d("div",{className:"endCard"})]})}),d(Ce,{autocompleteOptions})]}),d(Ce,{autocompleteOptions})]})}function Nn(){const t=window.location.hash;if(t){const e=t.slice(1),r=document.getElementById(e);r&&r.scrollIntoView({block:"start",inline:"nearest"})}}dt.createRoot(document.getElementById("root")).render(d(G.StrictMode,{children:d(Pn,{})}));
