import{a as Se,N as W,c as we,b as Ie}from"./search-form.vue_vue_type_script_setup_true_lang-WqEuOXXe.js";import{aM as B,o as M,b as pe,e as me,d as O,Z as H,a0 as K,z as ce,A as fe,a as De,$ as a,p as ge,q as ye,c as Y,w as r,f as e,g as _,t as b,h as t,a4 as le,bh as re,ab as oe,E as _e,D as ne,B as C,a8 as xe,a9 as ze,aa as se,I as be,H as ve,r as Z,bs as Re,ac as te,bi as he,bg as ke,Y as ae,aw as Ue,av as $e,l as Ve,ag as ie,L as Ce,i as Be,ah as q,a3 as E,aj as G,F as Ae,ak as qe}from"./index-BxI_8ir5.js";import{g as Me}from"./group-BXqOqznU.js";import{_ as Fe,u as Pe,a as Le}from"./table-KwvlieBb.js";import{_ as We}from"./code-mirror.vue_vue_type_script_setup_true_lang-yaz4Kucu.js";import{_ as ue}from"./select-group.vue_vue_type_script_setup_true_lang-DlMsYf48.js";import{_ as Ne}from"./select-scene.vue_vue_type_script_setup_true_lang-DZXU9SB3.js";import{_ as He,f as Oe}from"./log-drawer-m-GvVrZC.js";import{_ as je,a as Ee}from"./DescriptionsItem-D5s6FkGL.js";import{b as Ge}from"./Grid-D6if5aLa.js";import"./CollapseItem-CUobLCgj.js";function Ze(i){return B({url:"/retry-task/list",method:"get",params:i})}function Ke(i,S){return B({url:`/retry-task/${i}?groupName=${S}`,method:"get"})}function Ye(i){return B({url:"/retry-task",method:"post",data:i})}function Je(i){return B({url:"/retry-task/batch",method:"post",data:i})}function Qe(i){return B({url:"/retry-task/status",method:"put",data:i})}function Xe(i){return B({url:"/retry-task/manual/trigger/retry/task",method:"post",data:i})}function et(i){return B({url:"/retry-task/manual/trigger/callback/task",method:"post",data:i})}function de(i){return B({url:"/retry-task/batch",method:"delete",data:i})}function tt(i){return B({url:"/retry-task/generate/idempotent-id",method:"post",data:i})}const at={class:"inline-block",viewBox:"0 0 36 36",width:"1em",height:"1em"},lt=me("path",{fill:"currentColor",d:"M15 32H3a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2M5 30h8a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v25a1 1 0 0 0 1 1M9 5.92a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 9 5.92M6 12.2h5.84v1.6H6Zm0 3h5.84v1.6H6Zm0 3h6v1.6H6ZM16 8h2v1.6h-2zm4 0h2v1.6h-2zm13-3.8h-8a.8.8 0 0 0-.8.8v6a.8.8 0 0 0 .8.8h8a.8.8 0 0 0 .8-.8V5a.8.8 0 0 0-.8-.8m-.8 6h-6.4V5.8h6.4ZM16 20h2v1.6h-2zm4 0h2v1.6h-2zm13-3.8h-8a.8.8 0 0 0-.8.8v6a.8.8 0 0 0 .8.8h8a.8.8 0 0 0 .8-.8v-6a.8.8 0 0 0-.8-.8m-.8 6h-6.4v-4.4h6.4Z"},null,-1),rt=me("path",{fill:"none",d:"M0 0h36v36H0z"},null,-1),ot=[lt,rt];function nt(i,S){return M(),pe("svg",at,[...ot])}const st={name:"clarity-thin-client-solid",render:nt},ut=O({name:"RetryTaskOperateDrawer",__name:"retry-task-operate-drawer",props:H({operateType:{},rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:H(["submitted"],["update:visible"]),setup(i,{emit:S}){const g=i,m=S,h=K(i,"visible"),{formRef:V,validate:$,restoreValidation:f}=ce(),{defaultRequiredRule:u}=fe(),D=De(()=>({add:a("page.retryTask.addRetryTask"),edit:a("page.retryTask.editRetryTask")})[g.operateType]),d=ge(w());function w(){return{groupName:"",sceneName:"",idempotentId:"",bizNo:"",executorName:"",argsStr:"",retryStatus:0}}const s={groupName:u,sceneName:u,idempotentId:u,bizNo:u,executorName:u,argsStr:u,retryStatus:u};function x(){if(g.operateType==="add"){Object.assign(d,w());return}g.operateType==="edit"&&g.rowData&&Object.assign(d,g.rowData)}function p(){h.value=!1}async function N(){var k;if(await $(),g.operateType==="add"){const{groupName:c,sceneName:y,idempotentId:R,bizNo:o,executorName:T,argsStr:F,retryStatus:P}=d,{error:L}=await Ye({groupName:c,sceneName:y,idempotentId:R,bizNo:o,executorName:T,argsStr:F,retryStatus:P});if(L)return;(k=window.$message)==null||k.success(a("common.addSuccess"))}p(),m("submitted")}ye(h,()=>{h.value&&(x(),f())});async function z(){const k=d.groupName,c=d.sceneName,y=d.executorName,R=d.argsStr,{data:o,error:T}=await tt({groupName:k,sceneName:c,executorName:y,argsStr:R});T||(d.idempotentId=o)}return(k,c)=>{const y=_e,R=ne,o=st,T=C,F=xe,P=ze,L=se,J=be,Q=ve;return M(),Y(oe,{modelValue:h.value,"onUpdate:modelValue":c[7]||(c[7]=v=>h.value=v),title:D.value,onHandleSubmit:N},{footer:r(()=>[e(Q,{size:16},{default:r(()=>[e(T,{onClick:p},{default:r(()=>[_(b(t(a)("common.cancel")),1)]),_:1}),e(T,{type:"primary",onClick:N},{default:r(()=>[_(b(t(a)("common.save")),1)]),_:1})]),_:1})]),default:r(()=>[e(J,{ref_key:"formRef",ref:V,model:d,rules:s},{default:r(()=>[e(y,{label:t(a)("page.retryTask.groupName"),path:"groupName"},{default:r(()=>[e(ue,{value:d.groupName,"onUpdate:value":c[0]||(c[0]=v=>d.groupName=v),disabled:g.operateType==="edit"},null,8,["value","disabled"])]),_:1},8,["label"]),e(y,{label:t(a)("page.retryTask.sceneName"),path:"sceneName"},{default:r(()=>[e(Ne,{value:d.sceneName,"onUpdate:value":c[1]||(c[1]=v=>d.sceneName=v),"group-name":d.groupName,disabled:g.operateType==="edit"},null,8,["value","group-name","disabled"])]),_:1},8,["label"]),e(y,{label:t(a)("page.retryTask.idempotentId"),path:"idempotentId"},{default:r(()=>[e(P,null,{default:r(()=>[e(R,{value:d.idempotentId,"onUpdate:value":c[2]||(c[2]=v=>d.idempotentId=v),placeholder:t(a)("page.retryTask.form.idempotentId"),disabled:g.operateType==="edit"},null,8,["value","placeholder","disabled"]),e(F,{trigger:"hover"},{trigger:r(()=>[e(T,{type:"default",ghost:"",disabled:g.operateType==="edit",onClick:z},{default:r(()=>[e(o,{class:"text-icon"})]),_:1},8,["disabled"])]),default:r(()=>[_(" "+b(t(a)("page.retryTask.generateIdempotentId")),1)]),_:1})]),_:1})]),_:1},8,["label"]),e(y,{label:t(a)("page.retryTask.bizNo"),path:"bizNo"},{default:r(()=>[e(R,{value:d.bizNo,"onUpdate:value":c[3]||(c[3]=v=>d.bizNo=v),placeholder:t(a)("page.retryTask.form.bizNo"),disabled:g.operateType==="edit"},null,8,["value","placeholder","disabled"])]),_:1},8,["label"]),e(y,{label:t(a)("page.retryTask.executorName"),path:"executorName"},{default:r(()=>[e(R,{value:d.executorName,"onUpdate:value":c[4]||(c[4]=v=>d.executorName=v),placeholder:t(a)("page.retryTask.form.executorName"),disabled:g.operateType==="edit"},null,8,["value","placeholder","disabled"])]),_:1},8,["label"]),e(y,{label:t(a)("page.retryTask.argsStr"),path:"argsStr"},{default:r(()=>[e(We,{modelValue:d.argsStr,"onUpdate:modelValue":c[5]||(c[5]=v=>d.argsStr=v),lang:"json",placeholder:t(a)("page.jobTask.form.argsStr")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(y,{label:t(a)("page.retryTask.retryStatus"),path:"retryStatus"},{default:r(()=>[e(L,{value:d.retryStatus,"onUpdate:value":c[6]||(c[6]=v=>d.retryStatus=v),placeholder:t(a)("page.retryTask.form.retryStatus"),options:t(le)(t(re))},null,8,["value","placeholder","options"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}}),it=O({name:"RetryTaskBatchAddDrawer",__name:"retry-task-batch-add-drawer",props:{visible:{type:Boolean,default:!1},visibleModifiers:{}},emits:H(["submitted"],["update:visible"]),setup(i,{emit:S}){const g=S,m=K(i,"visible"),{formRef:h,validate:V,restoreValidation:$}=ce(),{defaultRequiredRule:f}=fe(),u=ge(D());function D(){return{groupName:"",retryStatus:0,logStr:""}}const d={groupName:f,retryStatus:f,logStr:f};function w(){m.value=!1}async function s(){var k;await V();const{groupName:x,retryStatus:p,logStr:N}=u,{error:z}=await Je({groupName:x,retryStatus:p,logStr:N});z||((k=window.$message)==null||k.success(a("common.addSuccess")),w(),g("submitted"))}return ye(m,()=>{m.value&&$()}),(x,p)=>{const N=_e,z=se,k=ne,c=be,y=C,R=ve;return M(),Y(oe,{modelValue:m.value,"onUpdate:modelValue":p[3]||(p[3]=o=>m.value=o),title:t(a)("page.retryTask.batchAddRetryTask"),onHandleSubmit:s},{footer:r(()=>[e(R,{size:16},{default:r(()=>[e(y,{onClick:w},{default:r(()=>[_(b(t(a)("common.cancel")),1)]),_:1}),e(y,{type:"primary",onClick:s},{default:r(()=>[_(b(t(a)("common.save")),1)]),_:1})]),_:1})]),default:r(()=>[e(c,{ref_key:"formRef",ref:h,model:u,rules:d},{default:r(()=>[e(N,{label:t(a)("page.retryTask.groupName"),path:"groupName"},{default:r(()=>[e(ue,{value:u.groupName,"onUpdate:value":p[0]||(p[0]=o=>u.groupName=o)},null,8,["value"])]),_:1},8,["label"]),e(N,{label:t(a)("page.retryTask.retryStatus"),path:"retryStatus"},{default:r(()=>[e(z,{value:u.retryStatus,"onUpdate:value":p[1]||(p[1]=o=>u.retryStatus=o),placeholder:t(a)("page.retryTask.form.retryStatus"),options:t(le)(t(re))},null,8,["value","placeholder","options"])]),_:1},8,["label"]),e(N,{label:t(a)("page.retryTask.form.logStr"),path:"logStr"},{default:r(()=>[e(k,{value:u.logStr,"onUpdate:value":p[2]||(p[2]=o=>u.logStr=o),type:"textarea",placeholder:t(a)("page.retryTask.form.logStr")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}}),dt=O({name:"RetryTaskSearch",__name:"retry-task-search",props:{model:{required:!0},modelModifiers:{}},emits:H(["reset","search"],["update:model"]),setup(i,{emit:S}){const g=S,m=K(i,"model");function h(){g("reset")}function V(){g("search")}return($,f)=>{const u=Fe,D=ne,d=se,w=Se;return M(),Y(w,{model:m.value,onSearch:V,onReset:h},{default:r(()=>[e(u,{span:"24 s:12 m:6",label:t(a)("page.retryTask.groupName"),path:"groupName",class:"pr-24px"},{default:r(()=>[e(ue,{value:m.value.groupName,"onUpdate:value":f[0]||(f[0]=s=>m.value.groupName=s),clearable:""},null,8,["value"])]),_:1},8,["label"]),e(u,{span:"24 s:12 m:6",label:t(a)("page.retryTask.sceneName"),path:"sceneName",class:"pr-24px"},{default:r(()=>[e(Ne,{value:m.value.sceneName,"onUpdate:value":f[1]||(f[1]=s=>m.value.sceneName=s),"group-name":m.value.groupName,clearable:""},null,8,["value","group-name"])]),_:1},8,["label"]),e(u,{span:"24 s:12 m:6",label:t(a)("page.retryTask.uniqueId"),path:"uniqueId",class:"pr-24px"},{default:r(()=>[e(D,{value:m.value.uniqueId,"onUpdate:value":f[2]||(f[2]=s=>m.value.uniqueId=s),placeholder:t(a)("page.retryTask.form.uniqueId"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"]),e(u,{span:"24 s:12 m:6",label:t(a)("page.retryTask.idempotentId"),path:"idempotentId",class:"pr-24px"},{default:r(()=>[e(D,{value:m.value.idempotentId,"onUpdate:value":f[3]||(f[3]=s=>m.value.idempotentId=s),placeholder:t(a)("page.retryTask.form.idempotentId"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"]),e(u,{span:"24 s:12 m:6",label:t(a)("page.retryTask.bizNo"),path:"bizNo",class:"pr-24px"},{default:r(()=>[e(D,{value:m.value.bizNo,"onUpdate:value":f[4]||(f[4]=s=>m.value.bizNo=s),placeholder:t(a)("page.retryTask.form.bizNo"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"]),e(u,{span:"24 s:12 m:6",label:t(a)("page.retryTask.retryStatus"),path:"retryStatus",class:"pr-24px"},{default:r(()=>[e(d,{value:m.value.retryStatus,"onUpdate:value":f[5]||(f[5]=s=>m.value.retryStatus=s),placeholder:t(a)("page.retryTask.form.retryStatus"),options:t(le)(t(re)),clearable:""},null,8,["value","placeholder","options"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),pt=O({name:"SceneDetailDrawer",__name:"retry-task-detail-drawer",props:H({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(i){const S=i,g=K(i,"visible"),m=Z([]),h=Z(),V=new AbortController,$=Z(!1);let f="0",u=0;async function D(){const{data:s,error:x}=await Oe({groupName:S.rowData.groupName,uniqueId:S.rowData.uniqueId,startId:f,fromIndex:u,size:50});x||($.value=s.finished,f=s.nextStartId,u=s.fromIndex,s.message&&(m.value.push(...s.message),m.value.sort((p,N)=>Number.parseInt(p.time_stamp,10)-Number.parseInt(N.time_stamp,10))),$.value||(clearTimeout(h.value),h.value=setTimeout(D,1e3)))}const d=async s=>{s===1&&m.value.length===0&&await D()},w=()=>{$.value=!0,V.abort(),clearTimeout(h.value),h.value=void 0};return Re(()=>{w()}),(s,x)=>{const p=je,N=ae,z=Ee,k=Ue,c=He,y=$e,R=oe;return M(),Y(R,{modelValue:g.value,"onUpdate:modelValue":x[0]||(x[0]=o=>g.value=o),title:t(a)("page.retryTask.detail")},{default:r(()=>[e(y,{type:"segment",animated:"","onUpdate:value":d},{default:r(()=>[e(k,{name:0,tab:t(a)("page.log.info")},{default:r(()=>[e(z,{"label-placement":"top",bordered:"",column:2},{default:r(()=>[e(p,{label:t(a)("page.retryTask.uniqueId"),span:2},{default:r(()=>{var o;return[_(b((o=s.rowData)==null?void 0:o.uniqueId),1)]}),_:1},8,["label"]),e(p,{label:t(a)("page.retryTask.groupName"),span:2},{default:r(()=>{var o;return[_(b((o=s.rowData)==null?void 0:o.groupName),1)]}),_:1},8,["label"]),e(p,{label:t(a)("page.retryTask.sceneName"),span:2},{default:r(()=>{var o;return[_(b((o=s.rowData)==null?void 0:o.sceneName),1)]}),_:1},8,["label"]),e(p,{label:t(a)("page.retryTask.nextTriggerAt"),span:1},{default:r(()=>{var o;return[_(b((o=s.rowData)==null?void 0:o.nextTriggerAt),1)]}),_:1},8,["label"]),e(p,{label:t(a)("page.retryTask.retryCount"),span:1},{default:r(()=>{var o;return[_(b((o=s.rowData)==null?void 0:o.retryCount),1)]}),_:1},8,["label"]),e(p,{label:t(a)("page.retryTask.retryStatus"),span:1},{default:r(()=>{var o;return[e(N,{type:t(te)((o=s.rowData)==null?void 0:o.retryStatus)},{default:r(()=>{var T;return[_(b(t(a)(t(he)[(T=s.rowData)==null?void 0:T.retryStatus])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(p,{label:t(a)("page.retryTask.taskType"),span:1},{default:r(()=>{var o;return[e(N,{type:t(te)((o=s.rowData)==null?void 0:o.taskType)},{default:r(()=>{var T;return[_(b(t(a)(t(ke)[(T=s.rowData)==null?void 0:T.taskType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(p,{label:t(a)("page.retryTask.bizNo"),span:2},{default:r(()=>{var o;return[_(b((o=s.rowData)==null?void 0:o.bizNo),1)]}),_:1},8,["label"]),e(p,{label:t(a)("page.retryTask.idempotentId"),span:2},{default:r(()=>{var o;return[_(b((o=s.rowData)==null?void 0:o.idempotentId),1)]}),_:1},8,["label"]),e(p,{label:t(a)("page.retryTask.executorName"),span:2},{default:r(()=>{var o;return[_(b((o=s.rowData)==null?void 0:o.executorName),1)]}),_:1},8,["label"]),e(p,{label:t(a)("page.retryTask.argsStr"),span:2},{default:r(()=>{var o;return[_(b((o=s.rowData)==null?void 0:o.argsStr),1)]}),_:1},8,["label"]),e(p,{label:t(a)("common.createDt"),span:1},{default:r(()=>{var o;return[_(b((o=s.rowData)==null?void 0:o.createDt),1)]}),_:1},8,["label"]),e(p,{label:t(a)("common.updateDt"),span:1},{default:r(()=>{var o;return[_(b((o=s.rowData)==null?void 0:o.updateDt),1)]}),_:1},8,["label"])]),_:1})]),_:1},8,["tab"]),e(k,{name:1,tab:t(a)("page.log.title"),"display-directive":"if"},{default:r(()=>[e(c,{drawer:!1,type:"retry","task-data":s.rowData},null,8,["task-data"])]),_:1},8,["tab"])]),_:1})]),_:1},8,["modelValue","title"])}}}),mt=Ve(pt,[["__scopeId","data-v-4fdfe176"]]),ct={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function A(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!qe(i)}const wt=O({name:"retry_task",__name:"index",setup(i){const S=Z(),{bool:g,setTrue:m}=ie(!1),h=Ce(),{columns:V,columnChecks:$,data:f,getData:u,loading:D,mobilePagination:d,searchParams:w,resetSearchParams:s}=Pe({apiFn:Ze,apiParams:{page:1,size:10,uniqueId:null,groupName:null,sceneName:null,idempotentId:null,bizNo:null,retryStatus:null},columns:()=>[{type:"selection",align:"center",width:48,disabled:n=>n.retryStatus===0},{key:"id",title:a("common.index"),align:"center",width:64},{key:"uniqueId",title:a("page.retryTask.uniqueId"),align:"center",fixed:"left",minWidth:120,render:n=>{async function l(){await T(n),m()}return e(C,{text:!0,tag:"a",type:"primary",onClick:l,class:"ws-normal"},{default:()=>[n.uniqueId]})}},{key:"groupName",title:a("page.retryTask.groupName"),align:"left",resizable:!0,minWidth:120,maxWidth:250},{key:"sceneName",title:a("page.retryTask.sceneName"),align:"left",minWidth:120},{key:"nextTriggerAt",title:a("page.retryTask.nextTriggerAt"),align:"left",resizable:!0,minWidth:120,maxWidth:150},{key:"retryCount",title:a("page.retryTask.retryCount"),align:"center",width:80},{key:"retryStatus",title:a("page.retryTask.retryStatus"),align:"left",width:120,render:n=>{if(n.retryStatus===null)return null;const l=a(he[n.retryStatus]);return e(ae,{type:te(n.retryStatus)},A(l)?l:{default:()=>[l]})}},{key:"taskType",title:a("page.retryTask.taskType"),align:"left",width:100,render:n=>{if(n.taskType===null)return null;const l={1:"warning",2:"error"},I=a(ke[n.taskType]);return e(ae,{type:l[n.taskType]},A(I)?I:{default:()=>[I]})}},{key:"idempotentId",title:a("page.retryTask.idempotentId"),align:"left",resizable:!0,minWidth:150,maxWidth:300},{key:"bizNo",title:a("page.retryTask.bizNo"),align:"left",resizable:!0,minWidth:150,maxWidth:300},{key:"operate",title:a("common.operate"),align:"center",width:260,fixed:"right",render:n=>e("div",{class:"flex-center gap-8px"},[n.retryStatus!==1&&n.retryStatus!==2?e(E,null,[e(W,{onPositiveClick:()=>L(n.groupName,n.uniqueId,n.taskType)},{default:()=>a("common.confirmExecute"),trigger:()=>{let l;return e(C,{type:"info",text:!0,ghost:!0,size:"small"},A(l=a("common.execute"))?l:{default:()=>[l]})}}),e(G,{vertical:!0},null)]):"",n.retryStatus!==1&&n.retryStatus!==2?e(E,null,[e(W,{onPositiveClick:()=>v(Number(n.id),n.groupName)},{default:()=>a("common.confirmFinish"),trigger:()=>{let l;return e(C,{type:"warning",text:!0,ghost:!0,size:"small"},A(l=a("common.finish"))?l:{default:()=>[l]})}}),e(G,{vertical:!0},null)]):"",n.retryStatus===0?e(E,null,[e(W,{onPositiveClick:()=>Q(Number(n.id),n.groupName)},{default:()=>a("common.confirmPause"),trigger:()=>{let l;return e(C,{type:"success",text:!0,ghost:!0,size:"small"},A(l=a("common.pause"))?l:{default:()=>[l]})}}),e(G,{vertical:!0},null)]):"",n.retryStatus===3?e(E,null,[e(W,{onPositiveClick:()=>J(Number(n.id),n.groupName)},{default:()=>a("common.confirmResume"),trigger:()=>{let l;return e(C,{type:"info",text:!0,ghost:!0,size:"small"},A(l=a("common.resume"))?l:{default:()=>[l]})}}),e(G,{vertical:!0},null)]):"",e(W,{onPositiveClick:()=>o(n.groupName,n.id)},{default:()=>a("common.confirmDelete"),trigger:()=>{let l;return e(C,{type:"error",text:!0,ghost:!0,size:"small"},A(l=a("common.delete"))?l:{default:()=>[l]})}})])}]}),{drawerVisible:x,operateType:p,handleAdd:N,checkedRowKeys:z,onBatchDeleted:k,onDeleted:c}=Le(f,u),{bool:y,setTrue:R}=ie();async function o(n,l){const{error:I}=await de({groupName:n,ids:[l]});I||c()}async function T(n){const l=await Ke(n.id,n.groupName);S.value=l.data||null}async function F(){const n=z.value;if(n.length===0)return;const l=f.value[0].groupName,{error:I}=await de({groupName:l,ids:n});I||k()}function P(){R()}function L(n,l,I){if(I===1){Xe({groupName:n,uniqueIds:[l]});return}I===2&&et({groupName:n,uniqueIds:[l]})}function J(n,l){X(n,l,0)}function Q(n,l){X(n,l,3)}function v(n,l){X(n,l,1)}async function X(n,l,I){var j;const{error:ee}=await Qe({id:n,groupName:l,retryStatus:I});ee||((j=window.$message)==null||j.success(a("common.updateSuccess")),u())}return Be(async()=>{const{error:n,data:l}=await Me();!n&&l.length>0&&(w.groupName=l[0],u())}),(n,l)=>{const I=we,ee=Ie,j=Ge,Te=Ae;return M(),pe("div",ct,[e(dt,{model:t(w),"onUpdate:model":l[0]||(l[0]=U=>q(w)?w.value=U:null),onReset:t(s),onSearch:t(u)},null,8,["model","onReset","onSearch"]),e(Te,{title:t(a)("page.retryTask.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":r(()=>[e(ee,{columns:t($),"onUpdate:columns":l[1]||(l[1]=U=>q($)?$.value=U:null),"disabled-delete":t(z).length===0,loading:t(D),onAdd:t(N),onDelete:F,onRefresh:t(u)},{addAfter:r(()=>[e(t(C),{size:"small",ghost:"",type:"primary",onClick:P},{icon:r(()=>[e(I,{class:"text-icon"})]),default:r(()=>[_(" "+b(t(a)("common.batchAdd")),1)]),_:1})]),_:1},8,["columns","disabled-delete","loading","onAdd","onRefresh"])]),default:r(()=>[e(j,{"checked-row-keys":t(z),"onUpdate:checkedRowKeys":l[2]||(l[2]=U=>q(z)?z.value=U:null),columns:t(V),data:t(f),"flex-height":!t(h).isMobile,"scroll-x":2e3,loading:t(D),remote:"","row-key":U=>U.id,pagination:t(d),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"]),e(ut,{visible:t(x),"onUpdate:visible":l[3]||(l[3]=U=>q(x)?x.value=U:null),"operate-type":t(p),onSubmitted:t(u)},null,8,["visible","operate-type","onSubmitted"]),e(it,{visible:t(y),"onUpdate:visible":l[4]||(l[4]=U=>q(y)?y.value=U:null),onSubmitted:t(u)},null,8,["visible","onSubmitted"]),e(mt,{visible:t(g),"onUpdate:visible":l[5]||(l[5]=U=>q(g)?g.value=U:null),"row-data":S.value},null,8,["visible","row-data"])]),_:1},8,["title"])])}}});export{wt as default};
