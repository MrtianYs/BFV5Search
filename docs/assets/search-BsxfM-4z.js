import{d as V,r as _,c as b,a as u,b as i,e as l,u as f,f as j,w as n,g as H,h as I,i as o,o as r,s as S,F,j as z,k as h,t as A,l as E}from"./index-Xz7TlYqi.js";const L=""+new URL("header01-CHvd-bvE.jpg",import.meta.url).href,M=""+new URL("header02-1jdpMah7.jpg",import.meta.url).href,R={class:"h-[calc(100vh_-_100px)] flex justify-center items-center"},U={class:"w-full md:w-[500px] h-[75%]"},D={class:"w-full flex justify-center mb-4"},J=["src"],$=V({__name:"search",setup(O){const t=_([]),d=_(""),v=I(),p=[L,M],g=b(()=>{const a=Math.floor(Math.random()*p.length);return p[a]});t.value=JSON.parse(localStorage.getItem("players")||"[]");function m(a){v.push({path:"/profile",query:{name:a}})}function y({userId:a}){const s=t.value.findIndex(c=>c.userId===a);s>-1&&(t.value.splice(s,1),localStorage.setItem("players",JSON.stringify(t.value)))}function x(){t.value=[],localStorage.removeItem("players")}return(a,s)=>{const c=o("el-input"),k=o("el-avatar"),C=o("el-link"),w=o("el-icon"),N=o("el-button"),B=o("el-space");return r(),u("div",R,[i("div",U,[i("div",D,[i("img",{class:"w-full md:w-[350px] rounded-lg",src:g.value},null,8,J)]),l(c,{modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=e=>d.value=e),class:"mb-4",placeholder:"\u8BF7\u8F93\u5165\u73A9\u5BB6\u540D\u79F0",size:"large","suffix-icon":f(S),onChange:s[1]||(s[1]=e=>m(e))},null,8,["modelValue","suffix-icon"]),t.value.length?(r(),j(B,{key:0,wrap:""},{default:n(()=>[(r(!0),u(F,null,z(t.value,e=>(r(),u("div",{key:e.userId,class:"flex items-center"},[l(k,{class:"mr-1",size:20,src:e.avatar},null,8,["src"]),l(C,{class:"mr-2",onClick:()=>m(e.userName)},{default:n(()=>[h(A(e.userName),1)]),_:2},1032,["onClick"]),l(w,{class:"cursor-pointer",size:"12",onClick:q=>y(e)},{default:n(()=>[l(f(E))]),_:2},1032,["onClick"])]))),128)),l(N,{size:"small",text:"",type:"primary",onClick:x},{default:n(()=>[h(" \u6E05\u7A7A ")]),_:1})]),_:1})):H("",!0)])])}}});export{$ as default};
