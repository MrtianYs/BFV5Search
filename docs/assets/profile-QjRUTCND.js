import{d as C,h as p,o as m,c as w,i as P,b as e,w as l,u as b,l as I,j as u,t as a,a as t,m as K,F as N,r as D,n as r,p as ae,E as M,e as G,f as ne,q as L}from"./index-CsfULVVI.js";import{g as oe,a as ie,b as de,c as ce}from"./index-DbMjJumV.js";const _e={class:"flex items-center"},re={class:"mt-2"},pe=C({__name:"WeaponCard",props:{data:Array},setup(x){return(E,s)=>{const F=p("el-icon"),f=p("el-text"),_=p("el-tag"),A=p("el-space");return m(!0),w(N,null,P(x.data,c=>(m(),w("div",{key:c.weaponName,class:"rounded-lg w-full mb-2 p-4 bg-slate-50"},[e(A,null,{default:l(()=>[e(f,{type:"info"},{default:l(()=>[e(F,{class:"mr-2"},{default:l(()=>[e(b(I))]),_:1}),u(a(c.weaponName),1)]),_:2},1024),e(_,{type:"warning"},{default:l(()=>[t("div",_e,[e(F,{class:"mr-1",size:"small",color:"#ed5a04"},{default:l(()=>[e(b(K))]),_:1}),u(" "+a(Math.floor(c.kills/100)),1)])]),_:2},1024),e(_,null,{default:l(()=>[u(a(Math.floor(c.timeEquipped/60/60))+" \u5C0F\u65F6 ",1)]),_:2},1024)]),_:2},1024),t("div",re,[e(A,{wrap:""},{default:l(()=>[e(_,{type:"info"},{default:l(()=>[u(" KPM\uFF1A"+a(c.killsPerMinute),1)]),_:2},1024),e(_,{type:"info"},{default:l(()=>[u(" \u51FB\u6740\uFF1A"+a(c.kills),1)]),_:2},1024),e(_,{type:"info"},{default:l(()=>[u(" \u7206\u5934\u51FB\u6740\uFF1A"+a(c.headshotKills),1)]),_:2},1024),e(_,{type:"info"},{default:l(()=>[u("\u547D\u4E2D\u7387\uFF1A"+a(c.accuracy),1)]),_:2},1024),e(_,{type:"info"},{default:l(()=>[u("\u7206\u5934\u7387\uFF1A"+a(c.headshots),1)]),_:2},1024),e(_,{type:"info"},{default:l(()=>[u("\u5C04\u51FB\uFF1A"+a(c.shotsFired),1)]),_:2},1024),e(_,{type:"info"},{default:l(()=>[u("\u6548\u7387\uFF1A"+a(c.hitVKills),1)]),_:2},1024)]),_:2},1024)])]))),128)}}}),fe={class:"flex items-center"},ve={class:"mt-2"},k=C({__name:"VehiclesCard",props:{data:Array},setup(x){return(E,s)=>{const F=p("el-icon"),f=p("el-text"),_=p("el-tag"),A=p("el-space");return m(!0),w(N,null,P(x.data,c=>(m(),w("div",{key:c.weaponName,class:"rounded-lg w-full mb-2 p-4 bg-slate-50"},[e(A,null,{default:l(()=>[e(f,{type:"info"},{default:l(()=>[e(F,{class:"mr-2"},{default:l(()=>[e(b(I))]),_:1}),u(a(c.vehicleName),1)]),_:2},1024),e(_,{type:"warning"},{default:l(()=>[t("div",fe,[e(F,{class:"mr-1",size:"small",color:"#ed5a04"},{default:l(()=>[e(b(K))]),_:1}),u(" "+a(Math.floor(c.kills/100)),1)])]),_:2},1024),e(_,null,{default:l(()=>[u(a(Math.floor(c.timeIn/60/60))+" \u5C0F\u65F6 ",1)]),_:2},1024)]),_:2},1024),t("div",ve,[e(A,{wrap:""},{default:l(()=>[e(_,{type:"info"},{default:l(()=>[u(" KPM\uFF1A"+a(c.killsPerMinute),1)]),_:2},1024),e(_,{type:"info"},{default:l(()=>[u(" \u51FB\u6740\uFF1A"+a(c.kills),1)]),_:2},1024),e(_,{type:"info"},{default:l(()=>[u(" BOOM\uFF1A"+a(c.destroyed),1)]),_:2},1024)]),_:2},1024)])]))),128)}}}),he={class:"h-[calc(100vh_-_140px)]"},Fe={class:"w-full lg:w-[1024px] xl:w-[1280px] m-auto mt-10 mb-10"},me={class:"flex flex-col items-center"},Ae={class:"flex justify-center items-center !mb-3"},be={class:"bg-slate-400 w-7 h-7 rounded-full mr-2"},we=["src"],ge={class:"mb-4"},ye={class:"flex items-center"},xe={class:"w-full lg:w-[1024px] xl:w-[1280px] m-auto flex flex-wrap mb-4"},Be={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},ke={class:"py-2 px-4 bg-slate-100 rounded-lg"},Ee={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},De={class:"py-2 px-4 bg-slate-100 rounded-lg"},Me={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},Ce={class:"py-2 px-4 bg-slate-100 rounded-lg"},Pe={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},Ne={class:"py-2 px-4 bg-slate-100 rounded-lg"},Se={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},$e={class:"py-2 px-4 bg-slate-100 rounded-lg"},Re={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},Ge={class:"py-2 px-4 bg-slate-100 rounded-lg"},Le={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},Ie={class:"py-2 px-4 bg-slate-100 rounded-lg"},Ke={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},Ve={class:"py-2 px-4 bg-slate-100 rounded-lg"},Oe={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},qe={class:"py-2 px-4 bg-slate-100 rounded-lg"},He={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},We={class:"py-2 px-4 bg-slate-100 rounded-lg"},je={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},ze={class:"py-2 px-4 bg-slate-100 rounded-lg"},Te={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},Je={class:"py-2 px-4 bg-slate-100 rounded-lg"},Qe={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},Ue={class:"py-2 px-4 bg-slate-100 rounded-lg"},Xe={class:"w-full lg:w-[1024px] xl:w-[1280px] m-auto flex flex-wrap mb-8"},Ye={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},Ze={class:"py-2 px-4 bg-slate-100 rounded-lg"},el={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},ll={class:"py-2 px-4 bg-slate-100 rounded-lg"},ul={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},tl={class:"py-2 px-4 bg-slate-100 rounded-lg"},sl={class:"w-[50%] sm:w-[33.333%] lg:w-[25%] p-2"},al={class:"py-2 px-4 bg-slate-100 rounded-lg"},nl={class:"w-full lg:w-[1024px] xl:w-[1280px] px-2 m-auto"},dl=C({__name:"profile",setup(x){const E=ae(),s=D({base:{},guns:[],tanks:[],airplane:[],cars:[],fixed:[]}),F=D(!1),f=D(),_=r(()=>f.value===5?{type:"warning",text:"\u5904\u7406\u4E2D"}:f.value===6?{type:"warning",text:"\u7BA1\u7406\u6295\u7968\u4E2D"}:f.value===1?{type:"danger",text:"\u77F3\u9524"}:f.value===2?{type:"warning",text:"\u5F85\u81EA\u8BC1"}:f.value===3?{type:"success",text:"Moss\u81EA\u8BC1"}:f.value===4?{type:"warning",text:"\u4E3E\u62A5\u65E0\u6548"}:f.value===8?{type:"primary",text:"\u5237\u67AA"}:{type:"success",text:"\u7EFF\u8272\u73A9\u5BB6"}),A=r(()=>{if(s.value.base.timePlayed){const o=s.value.base.timePlayed.split(",");if(o.length===1)return`${L(`1970-01-01${o[0]}`).hour()}\u5C0F\u65F6`;{const i=parseInt(o[0]),d=L(`1970-01-01${o[1]}`).hour();return`${i*24+d}\u5C0F\u65F6`}}return""}),c=r(()=>{const{killDeath:o,killsPerMinute:i}=s.value.base;if(F.value)return"\u6302\u58C1";if(typeof o=="number"&&typeof i=="number"){if(i<1&&o<1)return"NOOB";if(i>=1&&i<=1.4||o>=1&&o<=2)return"\u666E\u901A\u73A9\u5BB6";if(i>=2||o>=3)return"FPS\u5929\u624D";if(i>1.4||o>=2)return"Pro\u54E5"}return"\u67E5\u8BE2\u4E2D"}),V=r(()=>v("\u7A81\u51FB\u6B65\u67AA")),O=r(()=>v("\u534A\u81EA\u52A8\u6B65\u67AA")),q=r(()=>v("\u51B2\u950B\u67AA")),H=r(()=>v("\u8F7B\u673A\u67AA")),W=r(()=>v("\u9730\u5F39\u67AA")),j=r(()=>v("\u5355\u52A8\u5F0F\u6B65\u67AA")),z=r(()=>v("\u624B\u52A8\u67AA\u673A\u5361\u5BBE\u67AA")),T=r(()=>v("\u624B\u67AA\u578B\u5361\u5BBE\u67AA")),J=r(()=>v("\u81EA\u52A8\u88C5\u586B\u6B65\u67AA")),Q=r(()=>v("\u56FA\u5B9A\u5F0F\u673A\u67AA")),U=r(()=>v("\u526F\u6B66\u5668")),X=r(()=>v("\u8FD1\u6218")),Y=r(()=>v("\u914D\u5907")),Z=r(()=>({assaultRifle:V.value,semiAutomaticRifle:O.value,selfLoadingRifle:J.value,submachineGun:q.value,lightMachineGun:H.value,shotgun:W.value,singleActionRifle:j.value,manualActionCarbine:z.value,pistolCarbine:T.value,secondaryWeapon:U.value,fixedMachineGun:Q.value,melee:X.value,equipped:Y.value}));function v(o){return s.value.guns.filter(i=>i.type===o).sort((i,d)=>d.killsPerMinute-i.killsPerMinute)}function ee({userName:o,userId:i,avatar:d}){const h=JSON.parse(localStorage.getItem("players")||"[]");h.findIndex(B=>B.userId===i)<0&&(h.push({userName:o,userId:i,avatar:d}),localStorage.setItem("players",JSON.stringify(h)))}function le(o){oe({name:o}).then(i=>{ue(i)}),ie({name:o}).then(i=>{s.value.guns=i.weapons}),de({name:o}).then(i=>{i.vehicles.map(d=>{d.type==="\u98DE\u673A"&&s.value.airplane.push(d),d.type==="\u5766\u514B"&&s.value.tanks.push(d),d.type==="\u8FD0\u8F93\u8F7D\u5177"&&s.value.cars.push(d),d.type==="\u5B9A\u70B9"&&s.value.fixed.push(d)}),s.value.airplane.sort((d,h)=>h.killsPerMinute-d.killsPerMinute),s.value.tanks.sort((d,h)=>h.killsPerMinute-d.killsPerMinute),s.value.cars.sort((d,h)=>h.killsPerMinute-d.killsPerMinute),s.value.fixed.sort((d,h)=>h.killsPerMinute-d.killsPerMinute)}),ce({names:o}).then(i=>{F.value=i.names[o.toLocaleLowerCase()].hacker,f.value=i.names[o.toLocaleLowerCase()].status})}function ue(o){ee(o),s.value.base=o}return le(E.query.name),(o,i)=>{const d=p("el-avatar"),h=p("el-badge"),n=p("el-text"),B=p("el-space"),S=p("el-link"),g=p("el-card"),y=p("el-tab-pane"),te=p("el-tabs");return m(),w("div",he,[t("div",Fe,[t("div",me,[e(h,{value:c.value},{default:l(()=>[e(d,{size:100,src:s.value.base.avatar,class:"mb-4"},null,8,["src"])]),_:1},8,["value"]),t("div",Ae,[t("div",be,[t("img",{src:s.value.base.rankImg,class:"block w-full h-full"},null,8,we)]),e(n,{class:"!text-[28px] block",type:"primary"},{default:l(()=>[u(a(s.value.base.userName),1)]),_:1})]),t("div",ge,[e(B,null,{default:l(()=>[e(b(M),null,{default:l(()=>[u("\u7B49\u7EA7\uFF1A"+a(s.value.base.rank),1)]),_:1}),e(b(M),{type:"info"},{default:l(()=>[u("\u6E38\u620F\u65F6\u95F4\uFF1A"+a(A.value),1)]),_:1})]),_:1})]),t("div",ye,[e(B,{wrap:""},{default:l(()=>[e(b(M),{type:_.value.type},{default:l(()=>[u(" BFBan\uFF1A"+a(_.value.text),1)]),_:1},8,["type"]),f.value?(m(),G(S,{key:0,href:`https://bfban.com/player/${s.value.base.id}`,type:"primary",target:"_blank"},{default:l(()=>[u(" BFBan\u6848\u4EF6 ")]),_:1},8,["href"])):ne("",!0),e(S,{type:"primary",target:"_blank",href:`https://battlefieldtracker.com/bfv/profile/origin/${s.value.base.userName}/gamereports`},{default:l(()=>[u(" \u5BF9\u5C40\u8BB0\u5F55 ")]),_:1},8,["href"])]),_:1})])])]),t("div",xe,[t("div",Be,[t("div",ke,[e(n,null,{default:l(()=>[u("K/D\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a(s.value.base.killDeath),1)]),_:1})])]),t("div",Ee,[t("div",De,[e(n,null,{default:l(()=>[u("KPM\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a(s.value.base.killsPerMinute),1)]),_:1})])]),t("div",Me,[t("div",Ce,[e(n,null,{default:l(()=>[u("SPM\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a(s.value.base.scorePerMinute),1)]),_:1})])]),t("div",Pe,[t("div",Ne,[e(n,null,{default:l(()=>[u("\u51FB\u6740\u6570\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a(s.value.base.kills),1)]),_:1})])]),t("div",Se,[t("div",$e,[e(n,null,{default:l(()=>[u("\u6B7B\u4EA1\u6570\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a(s.value.base.deaths),1)]),_:1})])]),t("div",Re,[t("div",Ge,[e(n,null,{default:l(()=>[u("\u7206\u5934\u6570\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a(s.value.base.headShots),1)]),_:1})])]),t("div",Le,[t("div",Ie,[e(n,null,{default:l(()=>[u("\u7206\u5934\u5C04\u51FB\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a(s.value.base.heals),1)]),_:1})])]),t("div",Ke,[t("div",Ve,[e(n,null,{default:l(()=>[u("\u547D\u4E2D\u7387\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a(s.value.base.accuracy),1)]),_:1})])]),t("div",Oe,[t("div",qe,[e(n,null,{default:l(()=>[u("\u7206\u5934\u7387\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a(s.value.base.headshots),1)]),_:1})])]),t("div",He,[t("div",We,[e(n,null,{default:l(()=>[u("\u573A\u5747\u51FB\u6740\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a((s.value.base.kills/(s.value.base.wins+s.value.base.loses)).toFixed(1)),1)]),_:1})])]),t("div",je,[t("div",ze,[e(n,null,{default:l(()=>[u("\u573A\u5747\u6B7B\u4EA1\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a((s.value.base.deaths/(s.value.base.wins+s.value.base.loses)).toFixed(1)),1)]),_:1})])]),t("div",Te,[t("div",Je,[e(n,null,{default:l(()=>[u("\u6700\u8FDC\u7206\u5934\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a(s.value.base.longestHeadShot),1)]),_:1})])]),t("div",Qe,[t("div",Ue,[e(n,null,{default:l(()=>[u("\u6700\u9AD8\u8FDE\u6740\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a(s.value.base.highestKillStreak),1)]),_:1})])])]),t("div",Xe,[t("div",Ye,[t("div",Ze,[e(n,null,{default:l(()=>[u("\u6700\u4F73\u5175\u79CD\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a(s.value.base.bestClass),1)]),_:1})])]),t("div",el,[t("div",ll,[e(n,null,{default:l(()=>[u("\u80DC\u573A\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a(s.value.base.wins),1)]),_:1})])]),t("div",ul,[t("div",tl,[e(n,null,{default:l(()=>[u("\u8D25\u573A\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a(s.value.base.loses),1)]),_:1})])]),t("div",sl,[t("div",al,[e(n,null,{default:l(()=>[u("\u80DC\u7387\uFF1A")]),_:1}),e(n,null,{default:l(()=>[u(a(s.value.base.winPercent),1)]),_:1})])])]),t("div",nl,[e(te,{type:"card"},{default:l(()=>[e(y,{label:"\u6B66\u5668"},{default:l(()=>[(m(!0),w(N,null,P(Z.value,($,se)=>{var R;return m(),G(g,{key:se,shadow:"hover",header:(R=$[0])==null?void 0:R.type,class:"mb-4"},{default:l(()=>[e(pe,{data:$},null,8,["data"])]),_:2},1032,["header"])}),128))]),_:1}),e(y,{label:"\u5766\u514B"},{default:l(()=>[e(g,null,{default:l(()=>[e(k,{data:s.value.tanks},null,8,["data"])]),_:1})]),_:1}),e(y,{label:"\u98DE\u673A"},{default:l(()=>[e(g,null,{default:l(()=>[e(k,{data:s.value.airplane},null,8,["data"])]),_:1})]),_:1}),e(y,{label:"\u8FD0\u8F93\u8F7D\u5177"},{default:l(()=>[e(g,null,{default:l(()=>[e(k,{data:s.value.cars},null,8,["data"])]),_:1})]),_:1}),e(y,{label:"\u5B9A\u70B9"},{default:l(()=>[e(g,null,{default:l(()=>[e(k,{data:s.value.fixed},null,8,["data"])]),_:1})]),_:1})]),_:1})])])}}});export{dl as default};
