import{d as w,r as _,c as u,a as i,b as a,u as m,e as B,w as n,f as V,g as b,h as l,o as r,s as I,F as S,i as F,j as f,t as j,k as z}from"./index-D0MQj4Pr.js";const A=""+new URL("header-CHvd-bvE.jpg",import.meta.url).href,E={class:"h-[calc(100vh_-_100px)] flex justify-center items-center"},H={class:"w-full md:w-[500px] h-[75%]"},D=i("div",{class:"w-full flex justify-center mb-4"},[i("img",{class:"w-full md:w-[350px] rounded-lg",src:A})],-1),R=w({__name:"search",setup(J){const s=_([]),p=_(""),v=b();s.value=JSON.parse(localStorage.getItem("players")||"[]");function d(o){v.push({path:"/profile",query:{name:o}})}function y({userId:o}){const t=s.value.findIndex(c=>c.userId===o);t>-1&&(s.value.splice(t,1),localStorage.setItem("players",JSON.stringify(s.value)))}function h(){s.value=[],localStorage.removeItem("players")}return(o,t)=>{const c=l("el-input"),x=l("el-avatar"),g=l("el-link"),k=l("el-icon"),C=l("el-button"),N=l("el-space");return r(),u("div",E,[i("div",H,[D,a(c,{modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=e=>p.value=e),class:"mb-4",placeholder:"\u8BF7\u8F93\u5165\u73A9\u5BB6\u540D\u79F0",size:"large","suffix-icon":m(I),onChange:t[1]||(t[1]=e=>d(e))},null,8,["modelValue","suffix-icon"]),s.value.length?(r(),B(N,{key:0,wrap:""},{default:n(()=>[(r(!0),u(S,null,F(s.value,e=>(r(),u("div",{key:e.userId,class:"flex items-center"},[a(x,{class:"mr-1",size:20,src:e.avatar},null,8,["src"]),a(g,{class:"mr-2",onClick:()=>d(e.userName)},{default:n(()=>[f(j(e.userName),1)]),_:2},1032,["onClick"]),a(k,{class:"cursor-pointer",size:"12",onClick:L=>y(e)},{default:n(()=>[a(m(z))]),_:2},1032,["onClick"])]))),128)),a(C,{size:"small",text:"",type:"primary",onClick:h},{default:n(()=>[f(" \u6E05\u7A7A ")]),_:1})]),_:1})):V("",!0)])])}}});export{R as default};
