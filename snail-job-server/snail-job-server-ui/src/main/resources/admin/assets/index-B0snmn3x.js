import{a as _e,N as be,b as ve}from"./search-form.vue_vue_type_script_setup_true_lang-WqEuOXXe.js";import{_ as he}from"./delete-alert-BUikOQm-.js";import{d as ae,Z as ee,r as F,a0 as te,a4 as G,z as Se,A as Te,a as Ne,$ as a,i as we,ap as ke,p as Ce,q as De,o as N,c as L,w as n,f as t,g as I,t as U,h as e,aO as Ie,ai as K,b as le,a1 as re,aH as se,a3 as ie,ab as fe,E as Ue,aa as de,H as Re,aG as Le,D as $e,I as Ve,B as X,aP as ue,aQ as Oe,aR as xe,ac as O,aS as me,aI as Be,aT as ce,aU as ye,Y as q,L as je,ag as Me,ah as H,aV as Ae,aj as Fe,F as Ge,ak as ze}from"./index-BxI_8ir5.js";import{f as Pe,a as Ee,b as He,c as qe,d as pe,e as Ke}from"./notify-BxDx_cPS.js";import{_ as We,u as Je,a as Qe}from"./table-KwvlieBb.js";import{f as Ye,_ as Ze}from"./select-scene.vue_vue_type_script_setup_true_lang-DZXU9SB3.js";import{f as Xe}from"./workflow-C49bAB05.js";import{h as et}from"./job-Cl2Rizrz.js";import{_ as ge}from"./select-group.vue_vue_type_script_setup_true_lang-DlMsYf48.js";import{_ as tt,d as at,c as nt,a as ot,b as lt}from"./Grid-D6if5aLa.js";import{_ as st,a as it}from"./DescriptionsItem-D5s6FkGL.js";import{_ as rt}from"./status-switch.vue_vue_type_script_setup_true_lang-Fx9Kb65D.js";import{u as ut}from"./auth-Boy8-DM_.js";import"./group-BXqOqznU.js";const pt=ae({name:"NotifyConfigOperateDrawer",__name:"notify-config-operate-drawer",props:ee({operateType:{},rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{},retrySceneDisable:{type:Boolean,default:!0},retrySceneDisableModifiers:{}}),emits:ee(["update:value","submitted"],["update:visible","update:retrySceneDisable"]),setup(w,{emit:$}){const f=F([]),b=F([]),y=F([]),k=F([]),h=w,T=$,S=te(w,"visible"),g=te(w,"retrySceneDisable"),i=F(G(ue)),{formRef:c,validate:x,restoreValidation:V}=Se(),{defaultRequiredRule:C}=Te(),ne=Ne(()=>({add:a("page.notifyConfig.addNotifyConfig"),edit:a("page.notifyConfig.editNotifyConfig")})[h.operateType]);we(()=>{ke(()=>{oe()})});async function oe(){const p=await Pe();f.value=p.data}const o=Ce(W());function W(){return{groupName:null,businessId:"",recipientIds:[],systemTaskType:null,notifyStatus:1,notifyScene:null,notifyThreshold:16,rateLimiterStatus:0,rateLimiterThreshold:100,description:""}}const B={groupName:C,businessId:C,systemTaskType:C,notifyStatus:C,notifyScene:C,recipientIds:C,rateLimiterStatus:C,notifyThreshold:C};function J(){if(h.operateType==="add"){Object.assign(o,W()),g.value=!0;return}h.operateType==="edit"&&h.rowData&&(Object.assign(o,h.rowData),z(o.systemTaskType),r(o.notifyScene))}function Q(){S.value=!1}async function Y(){var p;if(await x(),h.operateType==="add"){const{groupName:s,businessId:d,recipientIds:_,systemTaskType:m,notifyStatus:R,notifyScene:D,notifyThreshold:v,rateLimiterStatus:j,rateLimiterThreshold:M,description:P}=o,{error:E}=await Ee({groupName:s,businessId:d,recipientIds:_,systemTaskType:m,notifyStatus:R,notifyScene:D,notifyThreshold:v,rateLimiterStatus:j,rateLimiterThreshold:M,description:P});if(E)return}if(h.operateType==="edit"){const{id:s,groupName:d,businessId:_,recipientIds:m,notifyStatus:R,systemTaskType:D,notifyScene:v,notifyThreshold:j,rateLimiterStatus:M,rateLimiterThreshold:P,description:E}=o,{error:Z}=await He({id:s,groupName:d,businessId:_,recipientIds:m,systemTaskType:D,notifyStatus:R,notifyScene:v,notifyThreshold:j,rateLimiterStatus:M,rateLimiterThreshold:P,description:E});if(Z)return}(p=window.$message)==null||p.success(a("common.updateSuccess")),Q(),T("submitted")}async function z(p){var s,d,_,m,R;if(p===1){const D=await Ye({groupName:o.groupName});b.value=D.data,i.value=G(ue)}else if(p===3){const D=await et({groupName:o.groupName});y.value=(s=D.data)==null?void 0:s.map(v=>(v.id=String(v.id),v)),i.value=G(Oe)}else if(p===4){const D=await Xe({groupName:o.groupName});k.value=(d=D.data)==null?void 0:d.map(v=>(v.id=String(v.id),v)),i.value=G(xe)}p!==((_=h.rowData)==null?void 0:_.systemTaskType)?(o.businessId=null,o.notifyScene=null):(o.businessId=(m=h.rowData)==null?void 0:m.businessId,o.notifyScene=(R=h.rowData)==null?void 0:R.notifyScene)}async function r(p){g.value=!(p===5||p===6)}function l(p){J(),o.groupName=p,z(1),r(1)}return De(S,()=>{S.value&&(J(),V())}),(p,s)=>{const d=Ue,_=de,m=ot,R=Re,D=tt,v=at,j=Le,M=nt,P=$e,E=Ve,Z=X;return N(),L(fe,{modelValue:S.value,"onUpdate:modelValue":s[12]||(s[12]=u=>S.value=u),title:ne.value,"min-size":480,onHandleSubmit:Y},{footer:n(()=>[t(R,{size:16},{default:n(()=>[t(Z,{onClick:Q},{default:n(()=>[I(U(e(a)("common.cancel")),1)]),_:1}),t(Z,{type:"primary",onClick:Y},{default:n(()=>[I(U(e(a)("common.save")),1)]),_:1})]),_:1})]),default:n(()=>[t(E,{ref_key:"formRef",ref:c,model:o,rules:B},{default:n(()=>[t(d,{label:e(a)("page.notifyConfig.groupName"),path:"groupName"},{default:n(()=>[t(ge,{modelValue:o.groupName,"onUpdate:modelValue":[s[0]||(s[0]=u=>o.groupName=u),l]},null,8,["modelValue"])]),_:1},8,["label"]),t(d,{label:e(a)("page.notifyConfig.systemTaskType"),path:"systemTaskType"},{default:n(()=>[t(_,{value:o.systemTaskType,"onUpdate:value":[s[1]||(s[1]=u=>o.systemTaskType=u),z],placeholder:e(a)("page.notifyConfig.form.systemTaskType"),options:e(G)(e(Ie))},null,8,["value","placeholder","options"])]),_:1},8,["label"]),o.systemTaskType===1?(N(),L(d,{key:0,label:e(a)("page.notifyConfig.retryScene"),path:"businessId"},{default:n(()=>[t(_,{value:o.businessId,"onUpdate:value":s[2]||(s[2]=u=>o.businessId=u),placeholder:e(a)("page.notifyConfig.form.sceneName"),options:b.value,"label-field":"sceneName","value-field":"sceneName"},null,8,["value","placeholder","options"])]),_:1},8,["label"])):K("",!0),o.systemTaskType===3?(N(),L(d,{key:1,label:e(a)("page.notifyConfig.job"),path:"businessId"},{default:n(()=>[t(_,{value:o.businessId,"onUpdate:value":s[3]||(s[3]=u=>o.businessId=u),placeholder:e(a)("page.notifyConfig.form.jobName"),options:y.value,"label-field":"jobName","value-field":"id"},null,8,["value","placeholder","options"])]),_:1},8,["label"])):K("",!0),o.systemTaskType===4?(N(),L(d,{key:2,label:e(a)("page.notifyConfig.workflow"),path:"businessId"},{default:n(()=>[t(_,{value:o.businessId,"onUpdate:value":s[4]||(s[4]=u=>o.businessId=u),placeholder:e(a)("page.notifyConfig.form.workflowName"),options:k.value,"label-field":"workflowName","value-field":"id"},null,8,["value","placeholder","options"])]),_:1},8,["label"])):K("",!0),t(d,{label:e(a)("page.notifyConfig.notifyScene"),path:"notifyScene"},{default:n(()=>[t(_,{value:o.notifyScene,"onUpdate:value":[s[5]||(s[5]=u=>o.notifyScene=u),r],placeholder:e(a)("page.notifyConfig.form.notifyScene"),options:i.value},null,8,["value","placeholder","options"])]),_:1},8,["label"]),t(d,{label:e(a)("page.notifyConfig.notifyRecipient"),path:"recipientIds"},{default:n(()=>[t(_,{value:o.recipientIds,"onUpdate:value":s[6]||(s[6]=u=>o.recipientIds=u),placeholder:e(a)("page.notifyConfig.form.notifyRecipient"),options:f.value,clearable:"",multiple:""},null,8,["value","placeholder","options"])]),_:1},8,["label"]),t(M,{cols:"2 s:1 m:2",responsive:"screen","x-gap":"20"},{default:n(()=>[t(v,null,{default:n(()=>[t(d,{label:e(a)("page.notifyConfig.notifyStatus"),path:"notifyStatus"},{default:n(()=>[t(D,{value:o.notifyStatus,"onUpdate:value":s[7]||(s[7]=u=>o.notifyStatus=u),name:"notifyStatus"},{default:n(()=>[t(R,null,{default:n(()=>[(N(!0),le(ie,null,re(e(se),u=>(N(),L(m,{key:u.value,value:u.value,label:e(a)(u.label)},null,8,["value","label"]))),128))]),_:1})]),_:1},8,["value"])]),_:1},8,["label"])]),_:1}),t(v,null,{default:n(()=>[t(d,{label:e(a)("page.notifyConfig.notifyThreshold"),path:"notifyThreshold"},{default:n(()=>[t(j,{value:o.notifyThreshold,"onUpdate:value":s[8]||(s[8]=u=>o.notifyThreshold=u),min:1,placeholder:e(a)("page.notifyConfig.form.notifyThreshold"),disabled:g.value},null,8,["value","placeholder","disabled"])]),_:1},8,["label"])]),_:1})]),_:1}),t(M,{cols:"2 s:1 m:2",responsive:"screen","x-gap":"20"},{default:n(()=>[t(v,null,{default:n(()=>[t(d,{label:e(a)("page.notifyConfig.rateLimiterStatus"),path:"rateLimiterStatus"},{default:n(()=>[t(D,{value:o.rateLimiterStatus,"onUpdate:value":s[9]||(s[9]=u=>o.rateLimiterStatus=u),name:"rateLimiterStatus",disabled:g.value},{default:n(()=>[t(R,null,{default:n(()=>[(N(!0),le(ie,null,re(e(se),u=>(N(),L(m,{key:u.value,value:u.value,label:e(a)(u.label)},null,8,["value","label"]))),128))]),_:1})]),_:1},8,["value","disabled"])]),_:1},8,["label"])]),_:1}),t(v,null,{default:n(()=>[t(d,{label:e(a)("page.notifyConfig.rateLimiterThreshold"),path:"notifyThreshold"},{default:n(()=>[t(j,{value:o.rateLimiterThreshold,"onUpdate:value":s[10]||(s[10]=u=>o.rateLimiterThreshold=u),min:1,placeholder:e(a)("page.notifyConfig.form.notifyThreshold"),disabled:g.value},null,8,["value","placeholder","disabled"])]),_:1},8,["label"])]),_:1})]),_:1}),t(d,{label:e(a)("page.notifyConfig.description"),path:"description"},{default:n(()=>[t(P,{value:o.description,"onUpdate:value":s[11]||(s[11]=u=>o.description=u),type:"textarea",placeholder:e(a)("page.notifyConfig.form.description")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}}),ft=ae({name:"NotifyConfigSearch",__name:"notify-config-search",props:{model:{required:!0},modelModifiers:{}},emits:ee(["reset","search"],["update:model"]),setup(w,{emit:$}){const f=$,b=te(w,"model");function y(){f("reset")}function k(){f("search")}return(h,T)=>{const S=ge,g=We,i=Ze,c=de,x=_e;return N(),L(x,{model:b.value,onSearch:k,onReset:y},{default:n(()=>[t(g,{span:"24 s:12 m:6",label:e(a)("page.notifyConfig.groupName"),path:"groupName",class:"pr-24px"},{default:n(()=>[t(S,{value:b.value.groupName,"onUpdate:value":T[0]||(T[0]=V=>b.value.groupName=V),clearable:""},null,8,["value"])]),_:1},8,["label"]),t(g,{span:"24 s:12 m:6",label:e(a)("page.notifyConfig.notifyScene"),path:"notifyScene",class:"pr-24px"},{default:n(()=>[t(i,{value:b.value.notifyScene,"onUpdate:value":T[1]||(T[1]=V=>b.value.notifyScene=V),"group-name":b.value.groupName,clearable:""},null,8,["value","group-name"])]),_:1},8,["label"]),t(g,{span:"24 s:12 m:6",label:e(a)("page.notifyConfig.notifyStatus"),path:"notifyStatus",class:"pr-24px"},{default:n(()=>[t(c,{value:b.value.notifyStatus,"onUpdate:value":T[2]||(T[2]=V=>b.value.notifyStatus=V),placeholder:e(a)("page.notifyConfig.notifyStatus"),options:e(G)(e(se)),clearable:""},null,8,["value","placeholder","options"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),dt=ae({name:"NotifyConfigDetailDrawer",__name:"notify-config-detail-drawer",props:ee({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(w){const $=te(w,"visible");return(f,b)=>{const y=st,k=q,h=it,T=fe;return N(),L(T,{modelValue:$.value,"onUpdate:modelValue":b[0]||(b[0]=S=>$.value=S),title:e(a)("page.groupConfig.detail")},{default:n(()=>[t(h,{"label-placement":"top",bordered:"",column:2},{default:n(()=>{var S,g;return[t(y,{label:e(a)("page.notifyConfig.businessName"),span:2},{default:n(()=>{var i;return[I(U((i=f.rowData)==null?void 0:i.businessName),1)]}),_:1},8,["label"]),t(y,{label:e(a)("page.groupConfig.groupName"),span:2},{default:n(()=>{var i;return[I(U((i=f.rowData)==null?void 0:i.groupName),1)]}),_:1},8,["label"]),t(y,{label:e(a)("page.notifyConfig.systemTaskType"),span:1},{default:n(()=>{var i;return[t(k,{type:e(O)((i=f.rowData)==null?void 0:i.systemTaskType)},{default:n(()=>{var c;return[I(U(e(a)(e(me)[(c=f.rowData)==null?void 0:c.systemTaskType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),t(y,{label:e(a)("page.notifyConfig.notifyStatus"),span:1},{default:n(()=>{var i;return[t(k,{type:e(O)((i=f.rowData)==null?void 0:i.notifyStatus)},{default:n(()=>{var c;return[I(U(e(a)(e(Be)[(c=f.rowData)==null?void 0:c.notifyStatus])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),((S=f.rowData)==null?void 0:S.systemTaskType)===1?(N(),L(y,{key:0,label:e(a)("page.notifyConfig.notifyScene"),span:1},{default:n(()=>{var i;return[t(k,{type:e(O)((i=f.rowData)==null?void 0:i.notifyScene)},{default:n(()=>{var c;return[I(U(e(a)(e(ce)[(c=f.rowData)==null?void 0:c.notifyScene])),1)]}),_:1},8,["type"])]}),_:1},8,["label"])):K("",!0),((g=f.rowData)==null?void 0:g.systemTaskType)===3?(N(),L(y,{key:1,label:e(a)("page.notifyConfig.notifyScene"),span:1},{default:n(()=>{var i;return[t(k,{type:e(O)((i=f.rowData)==null?void 0:i.notifyScene)},{default:n(()=>{var c;return[I(U(e(a)(e(ye)[(c=f.rowData)==null?void 0:c.notifyScene])),1)]}),_:1},8,["type"])]}),_:1},8,["label"])):K("",!0),t(y,{label:e(a)("page.notifyConfig.notifyThreshold"),span:1},{default:n(()=>{var i;return[t(k,{type:e(O)((i=f.rowData)==null?void 0:i.notifyThreshold)},{default:n(()=>{var c;return[I(U((c=f.rowData)==null?void 0:c.notifyThreshold),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),t(y,{label:e(a)("common.createDt"),span:2},{default:n(()=>{var i;return[I(U((i=f.rowData)==null?void 0:i.createDt),1)]}),_:1},8,["label"]),t(y,{label:e(a)("page.notifyConfig.description"),span:2},{default:n(()=>{var i;return[I(U((i=f.rowData)==null?void 0:i.description),1)]}),_:1},8,["label"])]}),_:1})]),_:1},8,["modelValue","title"])}}}),mt={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function A(w){return typeof w=="function"||Object.prototype.toString.call(w)==="[object Object]"&&!ze(w)}const It=ae({name:"notify_config",__name:"index",setup(w){const{hasAuth:$}=ut(),f=je(),b=F(),{bool:y,setTrue:k}=Me(!1),{columns:h,columnChecks:T,data:S,getData:g,loading:i,mobilePagination:c,searchParams:x,resetSearchParams:V}=Je({apiFn:qe,apiParams:{page:1,size:10,groupName:null,notifyStatus:null,notifyScene:null},columns:()=>[{type:"selection",align:"center",width:48},{key:"id",title:a("common.index"),align:"center",width:64},{key:"businessName",title:a("page.notifyConfig.businessName"),align:"left",width:120,render:r=>{function l(){b.value=r||null,k()}return t(X,{text:!0,tag:"a",type:"primary",onClick:l,class:"ws-normal"},{default:()=>[r.businessName]})}},{key:"groupName",title:a("page.notifyConfig.groupName"),align:"left",width:120},{key:"systemTaskType",title:a("page.notifyConfig.systemTaskType"),align:"left",width:120,render:r=>{if(r.systemTaskType===null)return null;const l=a(me[r.systemTaskType]);return t(q,{type:O(r.systemTaskType)},A(l)?l:{default:()=>[l]})}},{key:"notifyStatus",title:a("page.notifyConfig.notifyStatus"),align:"left",width:120,render:r=>{const l=async(p,s)=>{var _;const{error:d}=await Ke(r.id,p);d||(r.notifyStatus=p,(_=window.$message)==null||_.success(a("common.updateSuccess"))),s()};return t(rt,{value:r.notifyStatus,"onUpdate:value":p=>r.notifyStatus=p,onFetch:l},null)}},{key:"notifyScene",title:a("page.notifyConfig.notifyScene"),align:"left",width:160,render:r=>{if(r.notifyScene===null)return null;if(r.systemTaskType===1){const l=a(ce[r.notifyScene]);return t(q,{type:O(r.notifyScene)},A(l)?l:{default:()=>[l]})}if(r.systemTaskType===3){const l=a(ye[r.notifyScene]);return t(q,{type:O(r.notifyScene)},A(l)?l:{default:()=>[l]})}if(r.systemTaskType===4){const l=a(Ae[r.notifyScene]);return t(q,{type:O(r.notifyScene)},A(l)?l:{default:()=>[l]})}return null}},{key:"notifyThreshold",title:a("page.notifyConfig.notifyThreshold"),align:"left",width:120},{key:"createDt",title:a("common.createDt"),align:"left",width:120},{key:"description",title:a("page.notifyConfig.description"),align:"left",width:120},{key:"operate",title:a("common.operate"),align:"center",width:130,fixed:"right",render:r=>{let l;return t("div",{class:"flex-center gap-8px"},[t(X,{type:"primary",ghost:!0,text:!0,size:"small",onClick:()=>z(r.id)},A(l=a("common.edit"))?l:{default:()=>[l]}),$("R_ADMIN")?t(ie,null,[t(Fe,{vertical:!0},null),t(be,{onPositiveClick:()=>Y(r.id)},{default:()=>a("common.confirmDelete"),trigger:()=>{let p;return t("span",null,[t(X,{type:"error",text:!0,ghost:!0,size:"small"},A(p=a("common.delete"))?p:{default:()=>[p]})])}})]):""])}}]}),{drawerVisible:C,operateType:ne,editingData:oe,handleAdd:o,handleEdit:W,checkedRowKeys:B,onBatchDeleted:J}=Qe(S,g);async function Q(){const{error:r}=await pe(B.value);r||J()}async function Y(r){var p;const{error:l}=await pe([r]);l||((p=window.$message)==null||p.success(a("common.deleteSuccess")),g())}function z(r){W(r)}return(r,l)=>{const p=he,s=ve,d=lt,_=Ge;return N(),le("div",mt,[t(ft,{model:e(x),"onUpdate:model":l[0]||(l[0]=m=>H(x)?x.value=m:null),onReset:e(V),onSearch:e(g)},null,8,["model","onReset","onSearch"]),t(p),t(_,{title:e(a)("page.notifyConfig.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":n(()=>[t(s,{columns:e(T),"onUpdate:columns":l[1]||(l[1]=m=>H(T)?T.value=m:null),"disabled-delete":e(B).length===0,loading:e(i),"show-delete":e($)("R_ADMIN"),onAdd:e(o),onDelete:Q,onRefresh:e(g)},null,8,["columns","disabled-delete","loading","show-delete","onAdd","onRefresh"])]),default:n(()=>[t(d,{"checked-row-keys":e(B),"onUpdate:checkedRowKeys":l[2]||(l[2]=m=>H(B)?B.value=m:null),columns:e(h),data:e(S),"flex-height":!e(f).isMobile,"scroll-x":962,loading:e(i),remote:"","row-key":m=>m.id,pagination:e(c),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"]),t(pt,{visible:e(C),"onUpdate:visible":l[3]||(l[3]=m=>H(C)?C.value=m:null),"operate-type":e(ne),"row-data":e(oe),onSubmitted:e(g)},null,8,["visible","operate-type","row-data","onSubmitted"]),t(dt,{visible:e(y),"onUpdate:visible":l[4]||(l[4]=m=>H(y)?y.value=m:null),"row-data":b.value},null,8,["visible","row-data"])]),_:1},8,["title"])])}}});export{It as default};
