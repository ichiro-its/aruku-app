var q=Object.defineProperty,Y=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var I=(e,o,n)=>o in e?q(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,d=(e,o)=>{for(var n in o||(o={}))X.call(o,n)&&I(e,n,o[n]);if(B)for(var n of B(o))Q.call(o,n)&&I(e,n,o[n]);return e},h=(e,o)=>Y(e,H(o));import{R as t,B as R,A as Z,T as ee,a as b,b as O,N as M,r as f,L as J,s as E,P as w,G as u,S as te,I as v,d as ne,c as oe,e as ae,f as ie,g as re,h as le,i as se,j as L,k as ce}from"./vendor.ed4606ec.js";const ue=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};ue();function fe(){return t.createElement(R,{sx:{flexGrow:1}},t.createElement(Z,{position:"static"},t.createElement(ee,null,t.createElement(b,{variant:"h6",component:"div",sx:{flexGrow:1}},"Aruku App"),t.createElement(O,{component:M,to:"/",style:({isActive:e})=>({fontWeight:e?900:"normal"}),color:"inherit"},"Walk Settings"),t.createElement(O,{component:M,to:"/init",style:({isActive:e})=>({fontWeight:e?900:"normal"}),color:"inherit"},"Init Settings"))))}const C={};C.web=require("grpc-web");const c={};c.aruku_interfaces={};c.aruku_interfaces.proto=require("./aruku_pb.js");c.aruku_interfaces.proto.ConfigClient=function(e,o,n){n||(n={}),n.format="text",this.client_=new C.web.GrpcWebClientBase(n),this.hostname_=e.replace(/\/+$/,"")};c.aruku_interfaces.proto.ConfigPromiseClient=function(e,o,n){n||(n={}),n.format="text",this.client_=new C.web.GrpcWebClientBase(n),this.hostname_=e.replace(/\/+$/,"")};const T=new C.web.MethodDescriptor("/aruku_interfaces.proto.Config/GetConfig",C.web.MethodType.UNARY,c.aruku_interfaces.proto.Empty,c.aruku_interfaces.proto.ConfigWalking,function(e){return e.serializeBinary()},c.aruku_interfaces.proto.ConfigWalking.deserializeBinary);c.aruku_interfaces.proto.ConfigClient.prototype.getConfig=function(e,o,n){return this.client_.rpcCall(this.hostname_+"/aruku_interfaces.proto.Config/GetConfig",e,o||{},T,n)};c.aruku_interfaces.proto.ConfigPromiseClient.prototype.getConfig=function(e,o){return this.client_.unaryCall(this.hostname_+"/aruku_interfaces.proto.Config/GetConfig",e,o||{},T)};const V=new C.web.MethodDescriptor("/aruku_interfaces.proto.Config/SaveConfig",C.web.MethodType.UNARY,c.aruku_interfaces.proto.ConfigWalking,c.aruku_interfaces.proto.Empty,function(e){return e.serializeBinary()},c.aruku_interfaces.proto.Empty.deserializeBinary);c.aruku_interfaces.proto.ConfigClient.prototype.saveConfig=function(e,o,n){return this.client_.rpcCall(this.hostname_+"/aruku_interfaces.proto.Config/SaveConfig",e,o||{},V,n)};c.aruku_interfaces.proto.ConfigPromiseClient.prototype.saveConfig=function(e,o){return this.client_.unaryCall(this.hostname_+"/aruku_interfaces.proto.Config/SaveConfig",e,o||{},V)};const j=new C.web.MethodDescriptor("/aruku_interfaces.proto.Config/PublishConfig",C.web.MethodType.UNARY,c.aruku_interfaces.proto.ConfigWalking,c.aruku_interfaces.proto.Empty,function(e){return e.serializeBinary()},c.aruku_interfaces.proto.Empty.deserializeBinary);c.aruku_interfaces.proto.ConfigClient.prototype.publishConfig=function(e,o,n){return this.client_.rpcCall(this.hostname_+"/aruku_interfaces.proto.Config/PublishConfig",e,o||{},j,n)};c.aruku_interfaces.proto.ConfigPromiseClient.prototype.publishConfig=function(e,o){return this.client_.unaryCall(this.hostname_+"/aruku_interfaces.proto.Config/PublishConfig",e,o||{},j)};const z=new C.web.MethodDescriptor("/aruku_interfaces.proto.Config/SetMainConfig",C.web.MethodType.UNARY,c.aruku_interfaces.proto.SetWalking,c.aruku_interfaces.proto.Empty,function(e){return e.serializeBinary()},c.aruku_interfaces.proto.Empty.deserializeBinary);c.aruku_interfaces.proto.ConfigClient.prototype.setMainConfig=function(e,o,n){return this.client_.rpcCall(this.hostname_+"/aruku_interfaces.proto.Config/SetMainConfig",e,o||{},z,n)};c.aruku_interfaces.proto.ConfigPromiseClient.prototype.setMainConfig=function(e,o){return this.client_.unaryCall(this.hostname_+"/aruku_interfaces.proto.Config/SetMainConfig",e,o||{},z)};var m=c.aruku_interfaces.proto;const k=f.exports.createContext();function F(){const{GRPC_WEB_API_URL:e,setPublished:o,setKinematic:n,setWalking:r}=f.exports.useContext(k),a=new m.ConfigClient(e,null,null),i=new m.Empty,[l,p]=f.exports.useState(!1),g=()=>{p(!0),a.getConfig(i,{},(_,s)=>{_?console.log(`Unexpected error: code = ${_.code}, message = "${_.message}"`):(n(JSON.parse(s.array[0])),r(JSON.parse(s.array[1])))}),o(!1),p(!1)};return t.createElement(J,{onClick:g,color:"warning",variant:"contained",sx:{margin:1,top:5},loading:l},"Reload")}function K(){const{GRPC_WEB_API_URL:e,kinematic:o,walking:n}=f.exports.useContext(k),r=new m.ConfigClient(e,null,null),a=new m.ConfigWalking,[i,l]=f.exports.useState(!1),p=()=>{l(!0),a.setJsonKinematic(JSON.stringify(o)),a.setJsonWalking(JSON.stringify(n)),r.saveConfig(a,{},g=>{g&&console.log(`Unexpected error: code = ${g.code}, message = "${g.message}"`)}),l(!1)};return t.createElement(J,{onClick:p,color:"primary",variant:"contained",sx:{margin:1,top:5},loading:i},"Save")}const ge=E(w)(({theme:e})=>h(d({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff"},e.typography.body2),{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})),pe=E(b)(({theme:e})=>({textAlign:"left",padding:e.spacing(1)})),N=E(b)(({theme:e})=>({textAlign:"center",padding:e.spacing(1)}));function D({name:e,value:o,type:n}){const{setMainValue:r,setWalkingValue:a}=f.exports.useContext(k);return t.createElement(ge,null,t.createElement(u,{container:!0,spacing:1},t.createElement(u,{item:!0,xs:6},t.createElement(pe,null,e==="enable"?"AUTO_BALANCE":e.toUpperCase())),t.createElement(u,{item:!0,xs:!0},t.createElement(N,null," OFF ")),t.createElement(u,{item:!0,xs:!0},t.createElement(te,{onChange:n==="main"?i=>{r(e,i.target.checked)}:i=>{a("balance",e,i.target.checked)},checked:o})),t.createElement(u,{item:!0,xs:!0},t.createElement(N,null," ON "))))}const _e=E(w)(({theme:e})=>h(d({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff"},e.typography.body2),{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})),me=E(b)(({theme:e})=>({textAlign:"left",padding:e.spacing(1),fontSize:"0.9rem"}));function y(e){const{name:o,keys:n,value:r,type:a}=e,{setMainValue:i,setWalkingValue:l,setKinematicValue:p}=f.exports.useContext(k);function g(s){a==="main"?i(n,r+s):a==="walking"?l(o,n,r+s):p(o,n,r+s)}function _(s){a==="main"?i(n,s):a==="walking"?l(o,n,s):p(o,n,s)}return t.createElement(_e,null,t.createElement(u,{container:!0,spacing:1},t.createElement(u,{item:!0,xs:6},t.createElement(me,null,n.toUpperCase())),t.createElement(u,{item:!0,xs:1},t.createElement(v,{onClick:()=>g(-10)},t.createElement(ne,null))),t.createElement(u,{item:!0,xs:1},t.createElement(v,{onClick:()=>g(-1)},t.createElement(oe,null))),t.createElement(u,{item:!0,xs:1.5},t.createElement(ae,{value:r,margin:"dense",type:"number",InputProps:{inputProps:{style:{textAlign:"center"}}},onChangeCapture:s=>{s.target.value===""?_(0):_(parseFloat(s.target.value))}})),t.createElement(u,{item:!0,xs:1},t.createElement(v,{onClick:()=>g(1)},t.createElement(ie,null))),t.createElement(u,{item:!0,xs:1},t.createElement(v,{onClick:()=>g(10)},t.createElement(re,null)))))}function de(){const{GRPC_WEB_API_URL:e,main:o}=f.exports.useContext(k),n=new m.ConfigClient(e,null,null),r=new m.SetWalking,a=()=>{r.setRun(o.start),r.setXMove(o.x),r.setYMove(o.y),r.setAMove(o.a),r.setAimOn(o.aim),n.setMainConfig(r,{},(i,l)=>{console.log(i?`Unexpected error: code = ${i.code}, message = "${i.message}"`:l)})};return f.exports.useEffect(()=>{a()},[o]),t.createElement("div",null,Object.keys(o).map(i=>typeof o[i]=="boolean"?t.createElement(D,{name:i,value:o[i],type:"main"}):t.createElement(y,{keys:i,value:o[i],type:"main"})))}const $=E(w)(({theme:e})=>h(d({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff"},e.typography.body2),{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}));function he(){const{GRPC_WEB_API_URL:e,walking:o,kinematic:n}=f.exports.useContext(k),r=()=>{const a=new m.ConfigClient(e,null,null),i=new m.ConfigWalking;i.setJsonKinematic(JSON.stringify(n)),i.setJsonWalking(JSON.stringify(o)),a.publishConfig(i,{},(l,p)=>{console.log(l?`Unexpected error: code = ${l.code}, message = "${l.message}"`:p)})};return f.exports.useEffect(()=>{r()},[o,n]),t.createElement(u,{container:!0,xs:12,md:10,lg:8},t.createElement(u,{item:!0,xs:12,md:10,lg:6,style:{marginTop:8}},t.createElement($,null,Object.keys(n.ratio).slice(1,12).map(a=>t.createElement(y,{name:"ratio",keys:a,value:n.ratio[a],type:"kinematic"})))),t.createElement(u,{item:!0,xs:12,md:10,lg:6,style:{marginTop:8}},t.createElement($,null,t.createElement(y,{name:"ratio",keys:"foot_accel_ratio",value:n.ratio.foot_accel_ratio,type:"kinematic"}),Object.keys(n.offset).map(a=>t.createElement(y,{name:"offset",keys:a,value:n.offset[a],type:"kinematic"})),Object.keys(o.odometry).map(a=>t.createElement(y,{name:"odometry",keys:a,value:o.odometry[a],type:"walking"})))))}const U=E(w)(({theme:e})=>h(d({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff"},e.typography.body2),{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}));function Ce(){const{GRPC_WEB_API_URL:e,published:o,walking:n,kinematic:r,setPublished:a,setKinematic:i,setWalking:l}=f.exports.useContext(k),p=new m.ConfigClient(e,null,null),g=new m.Empty,_=()=>{p.getConfig(g,{},(s,W)=>{s?console.log(`Unexpected error: code = ${s.code}, message = "${s.message}"`):(i(JSON.parse(W.array[0])),l(JSON.parse(W.array[1])))})};return f.exports.useEffect(()=>{o||(_(),a(!0))},[]),t.createElement(R,{sx:{flexGrow:1}},t.createElement(U,{onLoad:_},t.createElement(u,{container:!0,spacing:1},t.createElement(u,{item:!0,xs:12,md:8,lg:4},t.createElement(U,null,t.createElement(de,null),Object.keys(n.balance).map(s=>typeof n.balance[s]=="boolean"?t.createElement(D,{name:s,value:n.balance[s],type:"walking"}):t.createElement(y,{name:"balance",keys:s,value:n.balance[s],type:"walking"})),t.createElement(y,{name:"ratio",keys:"forward_hip_comp_ratio",value:r.ratio.forward_hip_comp_ratio,type:"kinematic"}))),t.createElement(he,null)),t.createElement(u,{container:!0,style:{justifyContent:"end"}},t.createElement(K,null),t.createElement(F,null))))}const G=E(w)(({theme:e})=>h(d({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff"},e.typography.body2),{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}));function ke(){const{GRPC_WEB_API_URL:e,kinematic:o,walking:n}=f.exports.useContext(k),r=()=>{const a=new m.ConfigClient(e,null,null),i=new m.ConfigWalking;i.setJsonKinematic(JSON.stringify(o)),i.setJsonWalking(JSON.stringify(n)),a.publishConfig(i,{},l=>{l&&console.log(`Unexpected error: code = ${l.code}, message = "${l.message}"`)})};return f.exports.useEffect(()=>{r()},[n]),t.createElement(u,{container:!0,spacing:2},t.createElement(u,{item:!0,xs:12,md:6},t.createElement(G,null,t.createElement(b,{variant:"h6",component:"div",sx:{padding:1}},"Left Foot"),Object.keys(n.init_angles).slice(0,9).map(a=>t.createElement(y,{name:"init_angles",keys:a,value:n.init_angles[a],type:"walking"})))),t.createElement(u,{item:!0,xs:12,md:6},t.createElement(G,null,t.createElement(b,{variant:"h6",component:"div",sx:{padding:1}},"Right Foot"),Object.keys(n.init_angles).slice(9,18).map(a=>t.createElement(y,{name:"init_angles",keys:a,value:n.init_angles[a],type:"walking"})))))}E(w)(({theme:e})=>h(d({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff"},e.typography.body2),{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}));function ye(){const{GRPC_WEB_API_URL:e,published:o,setPublished:n,setKinematic:r,setWalking:a}=f.exports.useContext(k),i=new m.ConfigClient(e,null,null),l=new m.Empty,p=()=>{i.getConfig(l,{},(g,_)=>{g?console.log(`Unexpected error: code = ${g.code}, message = "${g.message}"`):(r(JSON.parse(_.array[0])),a(JSON.parse(_.array[1])))})};return f.exports.useEffect(()=>{o||(p(),n(!0))},[]),t.createElement(R,{sx:{flexGrow:1}},t.createElement(ke,null),t.createElement(u,{container:!0,style:{justifyContent:"end"}},t.createElement(K,null),t.createElement(F,null)))}function Ee(){const e={}.VITE_GRPC_WEB_API_URL,[o,n]=f.exports.useState(!1),[r,a]=f.exports.useState({start:!1,x:0,y:0,a:0,aim:!1}),[i,l]=f.exports.useState({ratio:{forward_hip_comp_ratio:0,dsp_comp_ratio:0,period_time:0,swing_right_left:0,dsp_ratio:0,period_comp_ratio:0,swing_up_down:0,arm_swing_gain:0,backward_hip_comp_ratio:0,foot_comp_ratio:0,foot_height:0,move_accel_ratio:0,foot_accel_ratio:0},offset:{y_offset:0,roll_offset:0,hip_pitch_offset:0,pitch_offset:0,yaw_offset:0,z_offset:0,x_offset:0},length:{leg_length:0,thigh_length:0,calf_length:0,ankle_length:0}}),[p,g]=f.exports.useState({balance:{enable:!1,balance_knee_gain:0,balance_ankle_pitch_gain:0,balance_hip_roll_gain:0,balance_ankle_roll_gain:0},pid:{p_gain:10,i_gain:2,d_gain:3},odometry:{ry_coefficient:0,fx_coefficient:0,ly_coefficient:0},init_angles:{left_shoulder_pitch:0,left_shoulder_roll:0,left_elbow:0,left_hip_yaw:0,left_hip_roll:0,left_hip_pitch:0,left_knee:0,left_ankle_roll:0,left_ankle_pitch:0,right_shoulder_pitch:0,right_shoulder_roll:0,right_elbow:0,right_hip_yaw:0,right_hip_roll:0,right_hip_pitch:0,right_knee:0,right_ankle_roll:0,right_ankle_pitch:0},angles_direction:{left_shoulder_pitch:-1,left_shoulder_roll:-1,left_elbow:-1,right_shoulder_pitch:1,right_shoulder_roll:1,right_elbow:1,left_hip_yaw:-1,left_hip_roll:-1,left_hip_pitch:-1,left_knee:-1,left_ankle_roll:1,left_ankle_pitch:1,right_hip_yaw:-1,right_hip_roll:-1,right_hip_pitch:1,right_knee:1,right_ankle_roll:1,right_ankle_pitch:-1},length:{thigh_length:0,calf_length:0,ankle_length:0,leg_length:0}}),_=(x,S)=>{a(A=>h(d({},A),{[x]:S}))},s=(x,S,A)=>{g(P=>h(d({},P),{[x]:h(d({},P[x]),{[S]:A})}))},W=(x,S,A)=>{l(P=>h(d({},P),{[x]:h(d({},P[x]),{[S]:A})}))};return t.createElement(k.Provider,{value:{GRPC_WEB_API_URL:e,published:o,main:r,walking:p,kinematic:i,setPublished:n,setKinematic:l,setMain:a,setWalking:g,setMainValue:_,setWalkingValue:s,setKinematicValue:W}},t.createElement(le,null,t.createElement(fe,null),t.createElement(se,null,t.createElement(L,{path:"/",element:t.createElement(Ce,null)}),t.createElement(L,{path:"/init",element:t.createElement(ye,null)}))))}ce.render(t.createElement(t.StrictMode,null,t.createElement(Ee,null)),document.getElementById("root"));
