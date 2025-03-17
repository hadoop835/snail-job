import{a as H,b as Z,N as V}from"./search-form-CKlPFgxd.js";import{aP as w,d as B,a0 as C,a1 as U,c as z,o as O,w as o,f as e,h as t,$ as a,D as J,ad as Q,ae as X,bz as Y,at as ee,au as te,g as _,t as f,Z as $,aa as S,bA as L,bo as M,bn as ae,l as re,L as ne,r as le,af as se,bl as oe,b as ue,ag as x,G as ie,B as I,a7 as pe,_ as de,bB as me,ah as P,a3 as ce,ai as _e}from"./index-CW-HgCkC.js";import{_ as fe,u as ge,a as ye}from"./table-pZMqSpSu.js";import{_ as be}from"./select-group.vue_vue_type_script_setup_true_lang-QkZyy-_Q.js";import{_ as ke}from"./select-scene.vue_vue_type_script_setup_true_lang-BzSzZPk5.js";import{_ as he}from"./datetime-range.vue_vue_type_script_setup_true_lang-DJx4jqU-.js";import{_ as ve}from"./detail-drawer-C83vwjbY.js";import{_ as Te}from"./log-drawer-CXAcDq7b.js";import{_ as De,a as Se}from"./DescriptionsItem-CtvncyNk.js";import{b as we}from"./Grid-DNunwvuN.js";import"./CollapseItem-_OeQO-9P.js";import"./group-Bv7in7Sf.js";import"./retry-scene-Bda98CLN.js";function Ne(p){return w({url:"/retry-task/list",method:"get",params:p})}function Re(p){return w({url:`/retry-task/${p}`,method:"get"})}function xe(p){return w({url:`/retry-task/${p}`,method:"delete"})}function $e(p){return w({url:"/retry-task/ids",method:"delete",data:p})}function Ie(p){return w({url:`/retry-task/stop/${p}`,method:"post"})}const Be=B({name:"RetryLogSearch",__name:"retry-task-search",props:{model:{required:!0},modelModifiers:{}},emits:C(["reset","search"],["update:model"]),setup(p,{emit:v}){const u=v,i=U(p,"model");function c(){u("reset")}function h(){u("search")}return(N,d)=>{const g=fe,b=J,T=Q,r=H;return O(),z(r,{"btn-span":"12 s:24 m:10 l:12 xl:16",model:i.value,onSearch:h,onReset:c},{default:o(()=>[e(g,{span:"24 s:12 m:6",label:t(a)("page.retryTask.groupName"),path:"groupName",class:"pr-24px"},{default:o(()=>[e(be,{value:i.value.groupName,"onUpdate:value":d[0]||(d[0]=n=>i.value.groupName=n),clearable:""},null,8,["value"])]),_:1},8,["label"]),e(g,{span:"24 s:12 m:6",label:t(a)("page.retryTask.sceneName"),path:"sceneName",class:"pr-24px"},{default:o(()=>[e(ke,{value:i.value.sceneName,"onUpdate:value":d[1]||(d[1]=n=>i.value.sceneName=n),"group-name":i.value.groupName,clearable:""},null,8,["value","group-name"])]),_:1},8,["label"]),e(g,{span:"24 s:12 m:6",label:t(a)("page.retryTask.retryId"),path:"bizNo",class:"pr-24px"},{default:o(()=>[e(b,{value:i.value.retryId,"onUpdate:value":d[2]||(d[2]=n=>i.value.retryId=n),placeholder:t(a)("page.retryTask.form.retryId"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"]),e(g,{span:"24 s:12 m:6",label:t(a)("page.retry.retryStatus"),path:"retryStatus",class:"pr-24px"},{default:o(()=>[e(T,{value:i.value.taskStatus,"onUpdate:value":d[3]||(d[3]=n=>i.value.taskStatus=n),placeholder:t(a)("page.retry.form.retryStatus"),options:t(X)(t(Y)),clearable:""},null,8,["value","placeholder","options"])]),_:1},8,["label"]),e(g,{span:"24 s:24 m:15 l:12 xl:9",label:t(a)("page.common.createTime"),path:"datetimeRange",class:"pr-24px"},{default:o(()=>[e(he,{value:i.value.datetimeRange,"onUpdate:value":d[4]||(d[4]=n=>i.value.datetimeRange=n)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),Oe=B({name:"SceneDetailDrawer",__name:"retry-task-detail-drawer",props:C({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(p){const v=U(p,"visible");return(u,i)=>{const c=Se,h=$,N=De,d=te,g=Te,b=ee,T=ve;return O(),z(T,{modelValue:v.value,"onUpdate:modelValue":i[0]||(i[0]=r=>v.value=r),title:t(a)("page.retryLog.detail"),width:["50%","90%"]},{default:o(()=>[e(b,{type:"segment",animated:""},{default:o(()=>[e(d,{name:0,tab:t(a)("page.log.info")},{default:o(()=>[e(N,{"label-placement":"top",bordered:"",column:2},{default:o(()=>[e(c,{label:t(a)("page.retryTask.groupName"),span:2},{default:o(()=>{var r;return[_(f((r=u.rowData)==null?void 0:r.groupName),1)]}),_:1},8,["label"]),e(c,{label:t(a)("page.retryTask.sceneName"),span:2},{default:o(()=>{var r;return[_(f((r=u.rowData)==null?void 0:r.sceneName),1)]}),_:1},8,["label"]),e(c,{label:t(a)("page.retryTask.taskStatus"),span:1},{default:o(()=>{var r;return[e(h,{type:t(S)((r=u.rowData)==null?void 0:r.taskStatus)},{default:o(()=>{var n;return[_(f(t(a)(t(L)[(n=u.rowData)==null?void 0:n.taskStatus])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(c,{label:t(a)("page.retryTask.taskType"),span:1},{default:o(()=>{var r;return[e(h,{type:t(S)((r=u.rowData)==null?void 0:r.taskType)},{default:o(()=>{var n;return[_(f(t(a)(t(M)[(n=u.rowData)==null?void 0:n.taskType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(c,{label:t(a)("page.retry.retryCount"),span:1},{default:o(()=>{var r,n;return[_(f((n=(r=u.rowData)==null?void 0:r.responseVO)==null?void 0:n.retryCount),1)]}),_:1},8,["label"]),e(c,{label:t(a)("page.retry.retryStatus"),span:1},{default:o(()=>{var r,n;return[e(h,{type:t(S)((n=(r=u.rowData)==null?void 0:r.responseVO)==null?void 0:n.retryStatus)},{default:o(()=>{var R,k;return[_(f(t(a)(t(ae)[(k=(R=u.rowData)==null?void 0:R.responseVO)==null?void 0:k.retryStatus])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(c,{label:t(a)("page.retry.bizNo"),span:2},{default:o(()=>{var r,n;return[_(f((n=(r=u.rowData)==null?void 0:r.responseVO)==null?void 0:n.bizNo),1)]}),_:1},8,["label"]),e(c,{label:t(a)("page.retry.idempotentId"),span:2},{default:o(()=>{var r,n;return[_(f((n=(r=u.rowData)==null?void 0:r.responseVO)==null?void 0:n.idempotentId),1)]}),_:1},8,["label"]),e(c,{label:t(a)("page.retry.executorName"),span:2},{default:o(()=>{var r,n;return[_(f((n=(r=u.rowData)==null?void 0:r.responseVO)==null?void 0:n.executorName),1)]}),_:1},8,["label"]),e(c,{label:t(a)("page.retry.argsStr"),span:2},{default:o(()=>{var r,n;return[_(f((n=(r=u.rowData)==null?void 0:r.responseVO)==null?void 0:n.argsStr),1)]}),_:1},8,["label"]),e(c,{label:t(a)("common.createDt")},{default:o(()=>{var r;return[_(f((r=u.rowData)==null?void 0:r.createDt),1)]}),_:1},8,["label"])]),_:1})]),_:1},8,["tab"]),e(d,{name:1,tab:t(a)("page.log.title"),"display-directive":"if"},{default:o(()=>[e(g,{drawer:!1,type:"retry","task-data":u.rowData},null,8,["task-data"])]),_:1},8,["tab"])]),_:1})]),_:1},8,["modelValue","title"])}}}),Ve=re(Oe,[["__scopeId","data-v-9ca8a013"]]),Pe={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function D(p){return typeof p=="function"||Object.prototype.toString.call(p)==="[object Object]"&&!_e(p)}const He=B({name:"retry_task",__name:"index",setup(p){const v=ne(),u=le(),{bool:i,setTrue:c}=se(!1),h=history.state.retryId,{columns:N,columnChecks:d,data:g,getData:b,loading:T,mobilePagination:r,searchParams:n,resetSearchParams:R}=ge({apiFn:Ne,apiParams:{page:1,size:10,groupName:null,sceneName:null,taskStatus:null,datetimeRange:oe()},searchParams:{retryId:h},columns:()=>[{type:"selection",align:"center",width:48,disabled:l=>l.taskStatus===1},{key:"id",align:"center",width:120,fixed:"left",title:()=>e("div",{class:"flex-center"},[e("span",null,[a("page.jobBatch.jobTask.id")]),e(pe,{trigger:"hover"},{trigger:()=>e("span",{class:"mb-2px ml-5px text-16px"},[e(de,{icon:"ant-design:info-circle-outlined"},null)]),default:()=>e("span",null,[a("common.idDetailTip")])})]),render:l=>{async function s(){await A(l),c()}return e(I,{text:!0,tag:"a",type:"primary",onClick:s,class:"ws-normal"},{default:()=>[l.id]})}},{key:"groupName",title:a("page.retryTask.groupName"),align:"center",minWidth:120},{key:"sceneName",title:a("page.retryTask.sceneName"),align:"center",minWidth:120},{key:"retryId",title:a("page.retryTask.retryId"),align:"center",minWidth:120},{key:"taskType",title:a("page.retryTask.taskType"),align:"center",minWidth:80,render:l=>{if(l.taskType===null)return null;const s=a(M[l.taskType]);return e($,{type:S(l.taskType)},D(s)?s:{default:()=>[s]})}},{key:"taskStatus",title:a("page.retryTask.taskStatus"),align:"center",minWidth:80,render:l=>{if(l.taskStatus===null)return null;const s={1:"info",2:"info",3:"info",4:"error",5:"error",6:"error"},m=a(L[l.taskStatus]);return e($,{type:s[l.taskStatus]},D(m)?m:{default:()=>[m]})}},{key:"operationReason",title:a("page.retryTask.operationReason"),align:"center",width:240,render:l=>{if(l.operationReason===null)return null;const s=a(me[l.operationReason]);return e($,{type:S(l.operationReason)},D(s)?s:{default:()=>[s]})}},{key:"createDt",title:a("page.retryTask.createDt"),align:"center",minWidth:120},{key:"operate",title:a("common.operate"),align:"center",width:80,render:l=>e("div",{class:"flex-center gap-8px"},[l.taskStatus===1||l.taskStatus===2?e(ce,null,[e(P,{vertical:!0},null),e(V,{onPositiveClick:()=>G(l.id)},{default:()=>a("common.confirmStop"),trigger:()=>{let m;return e(I,{type:"error",text:!0,ghost:!0,size:"small"},D(m=a("common.stop"))?m:{default:()=>[m]})}}),e(P,{vertical:!0},null)]):null,l.taskStatus!==1&&l.taskStatus!==2?e(V,{onPositiveClick:()=>q(l.id)},{default:()=>a("common.confirmDelete"),trigger:()=>{let m;return e(I,{type:"error",text:!0,ghost:!0,size:"small"},D(m=a("common.delete"))?m:{default:()=>[m]})}}):""])}]}),{checkedRowKeys:k,onDeleted:W,onBatchDeleted:j}=ye(g,b);async function F(){const{error:l}=await $e(k.value);l||j()}async function q(l){const{error:s}=await xe(l);s||W()}async function A(l){const s=await Re(l.id);u.value=s.data||null}async function G(l){var m;const{error:s}=await Ie(l);s||((m=window.$message)==null||m.success(a("common.operateSuccess")),b())}return(l,s)=>{const m=Z,K=we,E=ie;return O(),ue("div",Pe,[e(Be,{model:t(n),"onUpdate:model":s[0]||(s[0]=y=>x(n)?n.value=y:null),onReset:t(R),onSearch:t(b)},null,8,["model","onReset","onSearch"]),e(E,{title:t(a)("page.retryTask.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":o(()=>[e(m,{columns:t(d),"onUpdate:columns":s[1]||(s[1]=y=>x(d)?d.value=y:null),"disabled-delete":t(k).length===0,loading:t(T),"show-add":!1,onDelete:F,onRefresh:t(b)},null,8,["columns","disabled-delete","loading","onRefresh"])]),default:o(()=>[e(K,{"checked-row-keys":t(k),"onUpdate:checkedRowKeys":s[2]||(s[2]=y=>x(k)?k.value=y:null),columns:t(N),data:t(g),"flex-height":!t(v).isMobile,"scroll-x":962,loading:t(T),remote:"","row-key":y=>y.id,pagination:t(r),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"])]),_:1},8,["title"]),e(Ve,{visible:t(i),"onUpdate:visible":s[3]||(s[3]=y=>x(i)?i.value=y:null),"row-data":u.value},null,8,["visible","row-data"])])}}});export{He as default};
