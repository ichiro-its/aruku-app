var z=Object.defineProperty,K=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var I=(t,n,a)=>n in t?z(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,f=(t,n)=>{for(var a in n||(n={}))q.call(n,a)&&I(t,a,n[a]);if(j)for(var a of j(n))H.call(n,a)&&I(t,a,n[a]);return t},d=(t,n)=>K(t,U(n));import{R as e,B as N,A as D,T as Q,a as y,b as S,N as $,r as p,u as L,c as v,d as w,C as R,s as _,P as h,G as u,S as X,I as C,e as Y,f as Z,g as ee,h as te,i as ne,j as P,k as O,l as A,L as ae,m as le,n as re,o as ie,p as oe,q as ce,t as se,v as T,w as ue}from"./vendor.1186f5cc.js";const me=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}};me();function ge(){return e.createElement(N,{sx:{flexGrow:1}},e.createElement(D,{position:"static"},e.createElement(Q,null,e.createElement(y,{variant:"h6",component:"div",sx:{flexGrow:1}},"Aruku App"),e.createElement(S,{component:$,to:"/",style:({isActive:t})=>({fontWeight:t?900:"normal"}),color:"inherit"},"Walk Settings"),e.createElement(S,{component:$,to:"/init",style:({isActive:t})=>({fontWeight:t?900:"normal"}),color:"inherit"},"Init Settings"))))}const k=p.exports.createContext();function G(){const{setKinematicValue:t,setWalkingValue:n}=p.exports.useContext(k),a=L(),o=v(),[i,r]=w(()=>a.call({}).then(l=>{o.success("Successfully get config.");const g=JSON.parse(`${l.json_kinematic.replace("/\\/g","")}`),c=JSON.parse(`${l.json_walking.replace("/\\/g","")}`);Object.keys(g).map(m=>Object.keys(g[m]).map(s=>t(m,s,g[m][s]))),Object.keys(c).map(m=>Object.keys(c[m]).map(s=>n(m,s,c[m][s])))}).catch(l=>{o.error(`Failed to load config! ${l.message}.`)}),500);return p.exports.useEffect(()=>{r()},[]),e.createElement(S,{onClick:r,disabled:a==null||i,color:"warning",variant:"contained",sx:{margin:1,top:5}},i?e.createElement(R,{size:24}):"Reload")}function J(){const{kinematic:t,walking:n}=p.exports.useContext(k),a=L(),o=v(),[i,r]=w(()=>{const l=JSON.stringify(t),g=JSON.stringify(n);return a.call({json_kinematic:l,json_walking:g}).then(c=>{o.success(`Successfully save config with status ${c.status}.`)}).catch(c=>{o.error(`Failed to save config! ${c.message}.`)})},500);return e.createElement(S,{onClick:r,disabled:a==null||i,color:"primary",variant:"contained",sx:{margin:1,top:5}},i?e.createElement(R,{size:24}):"Save")}const pe=_(h)(({theme:t})=>d(f({backgroundColor:t.palette.mode==="dark"?"#1A2027":"#fff"},t.typography.body2),{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})),fe=_(y)(({theme:t})=>({textAlign:"left",padding:t.spacing(1)})),W=_(y)(({theme:t})=>({textAlign:"center",padding:t.spacing(1)}));function M({name:t,value:n,type:a}){const{main:o,kinematic:i,walking:r,setMainValue:l,setWalkingValue:g}=p.exports.useContext(k);return e.createElement(pe,null,e.createElement(u,{container:!0,spacing:1},e.createElement(u,{item:!0,xs:6},e.createElement(fe,null,t==="enable"?"AUTO_BALANCE":t.toUpperCase())),e.createElement(u,{item:!0,xs:!0},e.createElement(W,null," OFF ")),e.createElement(u,{item:!0,xs:!0},e.createElement(X,{onChange:a==="main"?c=>{l(t,c.target.checked)}:c=>{g("balance",t,c.target.checked)},checked:n})),e.createElement(u,{item:!0,xs:!0},e.createElement(W,null," ON "))))}const de=_(h)(({theme:t})=>d(f({backgroundColor:t.palette.mode==="dark"?"#1A2027":"#fff"},t.typography.body2),{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})),_e=_(y)(({theme:t})=>({textAlign:"left",padding:t.spacing(1),fontSize:"0.9rem"}));_(y)(({theme:t})=>({textAlign:"center",padding:t.spacing(1),fontSize:"0.9rem"}));function E(t){const{name:n,keys:a,value:o,type:i}=t,{setMainValue:r,setWalkingValue:l,setKinematicValue:g}=p.exports.useContext(k);function c(s){i==="main"?r(a,o+s):i==="walking"?l(n,a,o+s):g(n,a,o+s)}function m(s){i==="main"?r(a,s):i==="walking"?l(n,a,s):g(n,a,s)}return e.createElement(de,null,e.createElement(u,{container:!0,spacing:1},e.createElement(u,{item:!0,xs:6},e.createElement(_e,null,a.toUpperCase())),e.createElement(u,{item:!0,xs:1},e.createElement(C,{onClick:()=>c(-10)},e.createElement(Y,null))),e.createElement(u,{item:!0,xs:1},e.createElement(C,{onClick:()=>c(-1)},e.createElement(Z,null))),e.createElement(u,{item:!0,xs:1.5},e.createElement(ee,{value:o,margin:"dense",type:"number",InputProps:{inputProps:{style:{textAlign:"center"}}},onChangeCapture:s=>{s.target.value===""?m(0):m(parseFloat(s.target.value))}})),e.createElement(u,{item:!0,xs:1},e.createElement(C,{onClick:()=>c(1)},e.createElement(te,null))),e.createElement(u,{item:!0,xs:1},e.createElement(C,{onClick:()=>c(10)},e.createElement(ne,null)))))}_(h)(({theme:t})=>d(f({backgroundColor:t.palette.mode==="dark"?"#1A2027":"#fff"},t.typography.body2),{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function ke(){const{main:t}=p.exports.useContext(k),n=P(),a=v(),[o,i]=w(()=>{const r=t.start,l=t.x,g=t.y,c=t.a,m=t.aim;return n.publish({run:r,x_move:l,y_move:g,a_move:c,aim_on:m}).then(()=>{a.success("Successfully publish main config.")}).catch(s=>{a.error(`Failed to publish main config! ${s.message}.`)})},500);return p.exports.useEffect(()=>{i()},[t]),e.createElement("div",null,Object.keys(t).map(r=>typeof t[r]=="boolean"?e.createElement(M,{name:r,value:t[r],type:"main"}):e.createElement(E,{keys:r,value:t[r],type:"main"})))}const F=_(h)(({theme:t})=>d(f({backgroundColor:t.palette.mode==="dark"?"#1A2027":"#fff"},t.typography.body2),{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function Ee(){const{walking:t,kinematic:n}=p.exports.useContext(k),a=P(),o=v(),[i,r]=w(()=>{const l=JSON.stringify(n),g=JSON.stringify(t);return a.publish({json_kinematic:l,json_walking:g}).then(()=>{o.success("Successfully publish kinematic and walking config.")}).catch(c=>{o.error(`Failed to publish kinematic and walking config! ${c.message}.`)})},500);return p.exports.useEffect(()=>{r()},[n,t]),e.createElement(u,{container:!0,xs:12,md:10,lg:8},e.createElement(u,{item:!0,xs:12,md:10,lg:6,style:{marginTop:8}},e.createElement(F,null,Object.keys(n.ratio).slice(1,12).map(l=>e.createElement(E,{name:"ratio",keys:l,value:n.ratio[l],type:"kinematic"})))),e.createElement(u,{item:!0,xs:12,md:10,lg:6,style:{marginTop:8}},e.createElement(F,null,e.createElement(E,{name:"ratio",keys:"foot_accel_ratio",value:n.ratio.foot_accel_ratio,type:"kinematic"}),Object.keys(n.offset).map(l=>e.createElement(E,{name:"offset",keys:l,value:n.offset[l],type:"kinematic"})),Object.keys(t.odometry).map(l=>e.createElement(E,{name:"odometry",keys:l,value:t.odometry[l],type:"walking"})))))}const V=_(h)(({theme:t})=>d(f({backgroundColor:t.palette.mode==="dark"?"#1A2027":"#fff"},t.typography.body2),{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function ye(){const{walking:t,kinematic:n}=p.exports.useContext(k);return e.createElement(N,{sx:{flexGrow:1}},e.createElement(V,null,e.createElement(u,{container:!0,spacing:1},e.createElement(u,{item:!0,xs:12,md:8,lg:4},e.createElement(V,null,e.createElement(O,{messageType:"aruku_interfaces/msg/SetWalking",topicName:"/walking/set_walking"},e.createElement(ke,null)),Object.keys(t.balance).map(a=>typeof t.balance[a]=="boolean"?e.createElement(M,{name:a,value:t.balance[a],type:"walking"}):e.createElement(E,{name:"balance",keys:a,value:t.balance[a],type:"walking"})),e.createElement(E,{name:"ratio",keys:"forward_hip_comp_ratio",value:n.ratio.forward_hip_comp_ratio,type:"kinematic"}))),e.createElement(O,{messageType:"aruku_interfaces/msg/SetConfig",topicName:"/aruku/config/set_config"},e.createElement(Ee,null))),e.createElement(u,{container:!0},e.createElement(A,{serviceType:"aruku_interfaces/srv/SaveConfig",serviceName:"/aruku/config/save_config"},e.createElement(J,null)),e.createElement(A,{serviceType:"aruku_interfaces/srv/GetConfig",serviceName:"/aruku/config/get_config"},e.createElement(G,null)))))}const B=_(h)(({theme:t})=>d(f({backgroundColor:t.palette.mode==="dark"?"#1A2027":"#fff"},t.typography.body2),{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function he(){const{walking:t,kinematic:n}=p.exports.useContext(k),a=P(),o=v(),[i,r]=w(()=>{console.log(t.init_angles);const l=JSON.stringify(n),g=JSON.stringify(t);return a.publish({json_kinematic:l,json_walking:g}).then(()=>{o.success("Successfully publish kinematic and walking config.")}).catch(c=>{o.error(`Failed to publish kinematic and walking config! ${c.message}.`)})},500);return p.exports.useEffect(()=>{r()},[t]),e.createElement(u,{container:!0,spacing:2},e.createElement(u,{item:!0,xs:12,md:6},e.createElement(B,null,e.createElement(y,{variant:"h6",component:"div",sx:{padding:1}},"Left Foot"),Object.keys(t.init_angles).slice(0,9).map(l=>e.createElement(E,{name:"init_angles",keys:l,value:t.init_angles[l],type:"walking"})))),e.createElement(u,{item:!0,xs:12,md:6},e.createElement(B,null,e.createElement(y,{variant:"h6",component:"div",sx:{padding:1}},"Right Foot"),Object.keys(t.init_angles).slice(9,18).map(l=>e.createElement(E,{name:"init_angles",keys:l,value:t.init_angles[l],type:"walking"})))))}const xe=_(h)(({theme:t})=>d(f({backgroundColor:t.palette.mode==="dark"?"#1A2027":"#fff"},t.typography.body2),{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function be(){return p.exports.useContext(k),e.createElement(N,{sx:{flexGrow:1}},e.createElement(xe,null,e.createElement(O,{messageType:"aruku_interfaces/msg/SetConfig",topicName:"set_config"},e.createElement(he,null)),e.createElement(u,{container:!0},e.createElement(A,{serviceType:"aruku_interfaces/srv/SaveConfig",serviceName:"/aruku/config/save_config"},e.createElement(J,null)),e.createElement(A,{serviceType:"aruku_interfaces/srv/GetConfig",serviceName:"/aruku/config/get_config"},e.createElement(G,null)))))}function ve(){const[t,n]=p.exports.useState({start:!1,x:0,y:0,a:5,aim:!1}),[a,o]=p.exports.useState({ratio:{forward_hip_comp_ratio:0,dsp_comp_ratio:0,period_time:810,swing_right_left:15,dsp_ratio:-.12,period_comp_ratio:0,swing_up_down:-1,arm_swing_gain:0,backward_hip_comp_ratio:0,foot_comp_ratio:0,foot_height:30,move_accel_ratio:1,foot_accel_ratio:.2},offset:{y_offset:0,roll_offset:1,hip_pitch_offset:23,pitch_offset:-.4,yaw_offset:.1,z_offset:25,x_offset:40}}),[i,r]=p.exports.useState({balance:{enable:!1,balance_knee_gain:.3,balance_ankle_pitch_gain:.3,balance_hip_roll_gain:.2,balance_ankle_roll_gain:.2},odometry:{ry_coefficient:5,fx_coefficient:5.85,ly_coefficient:5},init_angles:{left_shoulder_pitch:15,left_shoulder_roll:-10,left_elbow:50,left_hip_yaw:3,left_hip_roll:-3,left_hip_pitch:5,left_knee:0,left_ankle_roll:-2,left_ankle_pitch:0,right_shoulder_pitch:15,right_shoulder_roll:-10,right_elbow:50,right_hip_yaw:-3,right_hip_roll:3,right_hip_pitch:5,right_knee:0,right_ankle_roll:2,right_ankle_pitch:0}}),l=(m,s)=>{n(x=>d(f({},x),{[m]:s}))},g=(m,s,x)=>{r(b=>d(f({},b),{[m]:d(f({},b[m]),{[s]:x})}))},c=(m,s,x)=>{o(b=>d(f({},b),{[m]:d(f({},b[m]),{[s]:x})}))};return e.createElement(k.Provider,{value:{main:t,walking:i,kinematic:a,setKinematic:o,setMain:n,setWalking:r,setMainValue:l,setWalkingValue:g,setKinematicValue:c}},e.createElement(ae,null,e.createElement(le,null,e.createElement(re,null),e.createElement(ie,null,e.createElement(oe,{nodeName:"aruku_app"},e.createElement(ce,null,e.createElement(ge,null),e.createElement(se,null,e.createElement(T,{path:"/",element:e.createElement(ye,null)}),e.createElement(T,{path:"/init",element:e.createElement(be,null)}))))))))}ue.render(e.createElement(e.StrictMode,null,e.createElement(ve,null)),document.getElementById("root"));
