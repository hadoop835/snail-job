import{c as He,d as Fe,a as sa,b as ua,N as Me}from"./search-form-CKlPFgxd.js";import{_ as pa,a as ia,d as da}from"./download-DQ5LX4-P.js";import{_ as ma}from"./delete-alert-BnO1r6QD.js";import{d as q,r as E,c as D,o as h,ad as de,h as a,ae as Ve,aC as ca,$ as t,a0 as Z,a1 as ke,aD as ga,aE as ba,aF as fa,L as Ge,q as Q,b as ie,Q as De,a6 as Ce,w as l,f as e,aG as ae,g as S,t as I,D as Re,n as te,z as va,A as ze,a as qe,I as We,C as Qe,E as Ze,a3 as we,a4 as Je,aH as Xe,e as pe,G as Pe,B as le,x as Ye,aI as Ue,H as Oe,s as $e,a9 as ya,l as ea,aJ as _a,Z as Ie,aa as ye,aA as aa,aK as Ta,aL as ka,ay as ha,aM as la,aN as ta,u as ja,af as Le,ag as _e,ah as Be,aO as wa,ai as Sa}from"./index-CW-HgCkC.js";import{a as Na,b as xa,c as Ia,d as Ke,e as Da,g as Ua}from"./job-Cu5KmNlL.js";import{_ as Oa,u as $a,a as Va}from"./table-pZMqSpSu.js";import{_ as Ra}from"./status-switch.vue_vue_type_script_setup_true_lang-Dh5CX7zX.js";import{u as Ja}from"./auth-95bx-ara.js";import{f as Ca}from"./notify-CobKLUNG.js";import{_ as Ee,a as Pa,b as Ea}from"./block-strategy.vue_vue_type_script_setup_true_lang-B824a9q6.js";import{_ as oe}from"./code-mirror-BxFuXj_H.js";import{_ as Aa}from"./cron-input.vue_vue_type_style_index_0_lang-syQ-yEwP.js";import{_ as oa}from"./select-group.vue_vue_type_script_setup_true_lang-QkZyy-_Q.js";import{_ as ra}from"./DynamicInput-H1dMp1LF.js";import{_ as Ma,a as La,c as Ba,d as Ka,b as Ha}from"./Grid-DNunwvuN.js";import{_ as Fa}from"./detail-drawer-C83vwjbY.js";import{_ as Ga,a as za}from"./DescriptionsItem-CtvncyNk.js";import"./CollapseItem-_OeQO-9P.js";import"./Progress-z7wGZgIo.js";import"./group-Bv7in7Sf.js";const qa=q({name:"TriggerType",__name:"trigger-type",emits:["update:value"],setup(U,{emit:x}){const p=x,f=E(),g=d=>{p("update:value",d)};return(d,v)=>{const b=de;return h(),D(b,{value:f.value,"onUpdate:value":[v[0]||(v[0]=r=>f.value=r),g],placeholder:a(t)("common.triggerType.form"),options:a(Ve)(a(ca))},null,8,["value","placeholder","options"])}}}),na=q({name:"SystemUser",__name:"system-user",props:Z({disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:Z(["update:modelValue"],["update:modelValue"]),setup(U,{emit:x}){const p=U,f=ke(U,"modelValue"),g=x,d=E();async function v(){const{data:r,error:c}=await ga();c||(d.value=r)}const b=r=>{g("update:modelValue",r)};return v(),(r,c)=>{const L=de;return h(),D(L,{value:f.value,"onUpdate:value":[c[0]||(c[0]=$=>f.value=$),b],placeholder:a(t)("page.userManager.form.ownerName"),options:d.value,"value-field":"id","label-field":"username",disabled:p.disabled,clearable:p.clearable,filterable:""},null,8,["value","placeholder","options","disabled","clearable"])}}}),Wa=q({name:"TriggerStrategy",__name:"executor-type",emits:["update:value"],setup(U,{emit:x}){const p=E(),f=x,g=d=>{f("update:value",d)};return(d,v)=>{const b=de;return h(),D(b,{value:p.value,"onUpdate:value":[v[0]||(v[0]=r=>p.value=r),g],placeholder:a(t)("common.executorType.form"),options:a(Ve)(a(ba))},null,8,["value","placeholder","options"])}}}),Qa=q({name:"TaskType",__name:"task-type",emits:["update:value"],setup(U,{emit:x}){const p=x,f=E(),g=d=>{p("update:value",d)};return(d,v)=>{const b=de;return h(),D(b,{value:f.value,"onUpdate:value":[v[0]||(v[0]=r=>f.value=r),g],placeholder:a(t)("common.routeKey.routeForm"),options:a(Ve)(a(fa))},null,8,["value","placeholder","options"])}}}),Za=q({name:"JobTriggerInterval",__name:"job-trigger-interval",props:Z({triggerType:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(U){const x=ke(U,"modelValue"),p=U,f=Ge(),g=E(p.triggerType===2?Number(x.value):60),d=E(p.triggerType===3?x.value:"* * * * * ?");return Q(g,v=>{p.triggerType===2&&(x.value=`${v}`)},{immediate:!0}),Q(d,v=>{p.triggerType===3&&(x.value=v)},{immediate:!0}),Q(()=>p.triggerType,v=>{v===2?x.value=`${g.value}`:v===3?x.value=d.value:x.value="*"},{immediate:!0}),(v,b)=>{const r=ae,c=Ee,L=Ce,$=Re;return h(),ie("div",null,[v.triggerType===2?(h(),D(L,{key:0},{default:l(()=>[e(r,{value:g.value,"onUpdate:value":b[0]||(b[0]=N=>g.value=N),placeholder:v.$t("page.jobTask.form.triggerInterval")},null,8,["value","placeholder"]),e(c,null,{default:l(()=>[S(I(v.$t("common.second")),1)]),_:1})]),_:1})):v.triggerType===3?(h(),D(a(Aa),{key:1,modelValue:d.value,"onUpdate:modelValue":b[1]||(b[1]=N=>d.value=N),placeholder:v.$t("page.jobTask.form.triggerInterval_CRON"),lang:a(f).locale},null,8,["modelValue","placeholder","lang"])):v.triggerType===99?(h(),D($,{key:2,disabled:""})):De("",!0)])}}}),Xa={class:"w-full w-full flex-col items-start gap-12px pt-5px"},Ya={class:"flex"},el=q({name:"JobTaskOperateDrawer",__name:"job-task-operate-drawer",props:Z({operateType:{},rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:Z(["submitted"],["update:visible"]),setup(U,{emit:x}){const p=E([]),f=U,g=x,d=E(0),v=ke(U,"visible"),b=te({args:[{arg:""}]}),r=E(0),c=E(null),{formRef:L,validate:$,restoreValidation:N}=va(),{defaultRequiredRule:T}=ze(),re=qe(()=>({add:t("page.jobTask.addJobTask"),edit:t("page.jobTask.editJobTask")})[f.operateType]);async function B(){const k=await Ca(3);p.value=k.data}const n=te(me());function me(){return{groupName:void 0,ownerId:void 0,notifyIds:[],jobName:"",argsStr:"",argsType:1,jobStatus:1,routeKey:4,executorType:1,triggerType:2,executorInfo:void 0,triggerInterval:"60",blockStrategy:1,executorTimeout:60,maxRetryTimes:3,retryInterval:1,taskType:1,parallelNum:1,description:""}}const X={groupName:T,jobName:T,argsType:T,jobStatus:T,routeKey:T,executorType:T,executorInfo:T,triggerType:T,triggerInterval:T,blockStrategy:T,executorTimeout:T,maxRetryTimes:T,retryInterval:T,taskType:T,parallelNum:T},P=E([]),O=te(ce());function ce(){return{method:"POST",url:"",headers:{},body:"",mediaType:"application/json",timeout:60}}const ge=[{label:"Http 执行器",value:"snailJobHttpExecutor"},{label:"CMD 执行器",value:"snailJobCMDJobExecutor"},{label:"PowerShell 执行器",value:"snailJobPowerShellJobExecutor"},{label:"Shell 执行器",value:"snailJobShellJobExecutor"}],K=te(C());function C(){return{method:"LOCAL_SCRIPT",scriptParams:"",charset:""}}function he(){if(f.operateType==="add"&&!f.rowData){Object.assign(n,me()),d.value=0,P.value=[],Object.assign(O,ce()),Object.assign(K,C());return}if(f.rowData){if(Object.assign(n,f.rowData),n.taskType===3&&n.argsStr&&Object.assign(b,{args:JSON.parse(n.argsStr).map(k=>({arg:k}))}),n.taskType===5&&n.argsStr){const k=JSON.parse(n.argsStr);r.value=k.shardNum,n.argsStr=k.argsStr}ge.map(k=>k.value).includes(n.executorInfo)&&(d.value=1,n.executorInfo==="snailJobHttpExecutor"?(Object.assign(O,JSON.parse(n.argsStr)),O.headers&&(P.value=Object.keys(O.headers).map(k=>({key:k,value:O.headers[k]})))):Object.assign(K,JSON.parse(n.argsStr)))}}function _(){v.value=!1}async function m(){var G,je,Ae;await $();const{id:k,groupName:o,ownerId:i,ownerName:u,notifyIds:j,jobName:A,argsType:H,jobStatus:R,routeKey:M,executorType:y,executorInfo:w,triggerType:ne,triggerInterval:Se,blockStrategy:se,executorTimeout:Ne,maxRetryTimes:be,retryInterval:fe,taskType:F,parallelNum:ue,description:xe}=n;let s=F===5?JSON.stringify({shardNum:r.value,argsStr:n.argsStr}):n.argsStr;if(d.value===1&&(await((G=c.value)==null?void 0:G.validate()),n.executorInfo==="snailJobHttpExecutor"?(P.value.forEach(ve=>{O.headers[ve.key]=ve.value}),s=JSON.stringify(O)):s=JSON.stringify(K)),f.operateType==="add"){const{error:ve}=await Na({groupName:o,ownerId:i,ownerName:u,notifyIds:j,jobName:A,argsStr:s,argsType:H,jobStatus:R,routeKey:M,executorType:y,executorInfo:w,triggerType:ne,triggerInterval:Se,blockStrategy:se,executorTimeout:Ne,maxRetryTimes:be,retryInterval:fe,taskType:F,parallelNum:ue,description:xe});if(ve)return;(je=window.$message)==null||je.success(t("common.addSuccess"))}if(f.operateType==="edit"){const{error:ve}=await xa({id:k,groupName:o,ownerId:i,ownerName:u,notifyIds:j,jobName:A,argsStr:s,argsType:H,jobStatus:R,routeKey:M,executorType:y,executorInfo:w,triggerType:ne,triggerInterval:Se,blockStrategy:se,executorTimeout:Ne,maxRetryTimes:be,retryInterval:fe,taskType:F,parallelNum:ue,description:xe});if(ve)return;(Ae=window.$message)==null||Ae.success(t("common.updateSuccess"))}_(),g("submitted")}function V(){if(n.taskType===3&&b.args){const k=b.args.map(o=>o.arg.trim()).filter(o=>!!o);n.argsStr=k.length>0?JSON.stringify(k):""}return n.argsStr}const z=k=>{b.args.splice(k,1)},J=()=>{b.args.push({arg:""})};Q(v,()=>{var k;v.value&&(he(),N(),B(),(k=c.value)==null||k.restoreValidation())}),Q(b,()=>{v.value&&n.taskType===3&&V()}),Q(()=>n.taskType,k=>{f.operateType==="add"&&v.value&&(k!==3&&(b.args=[]),k!==5&&(r.value=1),n.argsStr="")});function Y(){if(d.value===0){n.executorInfo="";return}n.executorInfo="snailJobHttpExecutor"}const ee=[{label:"GET",value:"get"},{label:"POST",value:"post"},{label:"PUT",value:"put"},{label:"DELETE",value:"delete"}],W=[{label:"需下载脚本",value:"DOWNLOAD"},{label:"脚本代码",value:"SCRIPT_CODE"},{label:"使用本地脚本",value:"LOCAL_SCRIPT"}];return(k,o)=>{const i=Re,u=Qe,j=na,A=La,H=Ze,R=Ma,M=de,y=He,w=le,ne=Fe,Se=Pe,se=Ce,Ne=ra,be=Ee,fe=We,F=Ka,ue=Ba,xe=qa;return h(),D(ya,{modelValue:v.value,"onUpdate:modelValue":o[32]||(o[32]=s=>v.value=s),title:re.value,"min-size":480,onHandleSubmit:m},{footer:l(()=>[e(H,{size:16},{default:l(()=>[e(w,{onClick:_},{default:l(()=>[S(I(a(t)("common.cancel")),1)]),_:1}),e(w,{type:"primary",onClick:m},{default:l(()=>[S(I(a(t)("common.save")),1)]),_:1})]),_:1})]),default:l(()=>[e(fe,{ref_key:"formRef",ref:L,model:n,rules:X},{default:l(()=>[e(u,{label:a(t)("page.jobTask.jobName"),path:"jobName"},{default:l(()=>[e(i,{value:n.jobName,"onUpdate:value":o[0]||(o[0]=s=>n.jobName=s),maxlength:64,"show-count":"",placeholder:a(t)("page.jobTask.form.jobName")},null,8,["value","placeholder"])]),_:1},8,["label"]),e(u,{label:a(t)("page.jobTask.groupName"),path:"groupName"},{default:l(()=>[e(oa,{value:n.groupName,"onUpdate:value":o[1]||(o[1]=s=>n.groupName=s),disabled:f.operateType==="edit"},null,8,["value","disabled"])]),_:1},8,["label"]),e(u,{label:a(t)("page.jobTask.ownerName"),path:"ownerId"},{default:l(()=>[e(j,{value:n.ownerId,"onUpdate:value":o[2]||(o[2]=s=>n.ownerId=s),clearable:!0},null,8,["value"])]),_:1},8,["label"]),e(u,{label:a(t)("page.jobTask.jobStatus"),path:"jobStatus"},{default:l(()=>[e(R,{value:n.jobStatus,"onUpdate:value":o[3]||(o[3]=s=>n.jobStatus=s),name:"jobStatus"},{default:l(()=>[e(H,null,{default:l(()=>[(h(!0),ie(we,null,Je(a(Xe),s=>(h(),D(A,{key:s.value,value:s.value,label:a(t)(s.label)},null,8,["value","label"]))),128))]),_:1})]),_:1},8,["value"])]),_:1},8,["label"]),e(u,{label:a(t)("page.jobTask.taskType"),path:"taskType"},{default:l(()=>[e(Qa,{value:n.taskType,"onUpdate:value":o[4]||(o[4]=s=>n.taskType=s),placeholder:a(t)("page.jobTask.form.taskType")},null,8,["value","placeholder"])]),_:1},8,["label"]),e(u,{label:a(t)("page.jobTask.executorType"),path:"executorType"},{default:l(()=>[e(Wa,{value:n.executorType,"onUpdate:value":o[5]||(o[5]=s=>n.executorType=s)},null,8,["value"])]),_:1},8,["label"]),e(u,{label:a(t)("page.jobTask.executorInfo"),path:"executorInfo"},{default:l(()=>[pe("div",Xa,[e(R,{value:d.value,"onUpdate:value":o[6]||(o[6]=s=>d.value=s),onChange:Y},{default:l(()=>[e(A,{value:0},{default:l(()=>o[33]||(o[33]=[S("自定义执行器")])),_:1}),e(A,{value:1},{default:l(()=>o[34]||(o[34]=[S("内置执行器")])),_:1})]),_:1},8,["value"]),d.value===0?(h(),D(i,{key:0,value:n.executorInfo,"onUpdate:value":o[7]||(o[7]=s=>n.executorInfo=s),placeholder:a(t)("page.jobTask.form.executorInfo")},null,8,["value","placeholder"])):(h(),D(M,{key:1,value:n.executorInfo,"onUpdate:value":o[8]||(o[8]=s=>n.executorInfo=s),options:ge,placeholder:"请选择内置执行器"},null,8,["value"]))])]),_:1},8,["label"]),n.taskType===5?(h(),D(u,{key:0,label:a(t)("page.jobTask.shardNum")},{default:l(()=>[e(a(ae),{value:r.value,"onUpdate:value":o[9]||(o[9]=s=>r.value=s),min:1,placeholder:a(t)("page.jobTask.form.shardNum")},null,8,["value","placeholder"])]),_:1},8,["label"])):De("",!0),e(u,{label:a(t)("page.jobTask.argsStr"),path:"argsStr","show-label":d.value===0,"show-feedback":d.value===0,rule:n.taskType===3?a(T):void 0},{default:l(()=>[d.value===0?(h(),ie(we,{key:0},[n.taskType===3?(h(),D(Se,{key:0,class:"flex-col"},{default:l(()=>[(h(!0),ie(we,null,Je(b.args,(s,G)=>(h(),D(u,{key:G,label:`分片参数 ${G+1}`,path:`args[${G}].arg`,"show-feedback":!1,class:"m-b-12px",rule:{required:!0,message:`${a(t)("page.jobTask.form.argsStr")} ${G+1}`,trigger:["input","blur"],validator(){return!!s.arg}}},{default:l(()=>[e(oe,{modelValue:s.arg,"onUpdate:modelValue":je=>s.arg=je,lang:"json",placeholder:a(t)("page.jobTask.form.argsStr")},null,8,["modelValue","onUpdate:modelValue","placeholder"]),e(w,{class:"ml-12px",type:"error",dashed:"",onClick:je=>z(G)},{default:l(()=>[e(y,{class:"text-icon"})]),_:2},1032,["onClick"])]),_:2},1032,["label","path","rule"]))),128)),e(w,{block:"",dashed:"","attr-type":"button",onClick:J},{default:l(()=>[e(ne,{class:"text-icon"})]),_:1})]),_:1})):(h(),D(oe,{key:1,modelValue:n.argsStr,"onUpdate:modelValue":o[10]||(o[10]=s=>n.argsStr=s),lang:"json",placeholder:a(t)("page.jobTask.form.argsStr")},null,8,["modelValue","placeholder"]))],64)):n.executorInfo==="snailJobHttpExecutor"?(h(),D(fe,{key:1,ref_key:"customformRef",ref:c,class:"w-full",model:O},{default:l(()=>[e(u,{label:"请求参数",rule:a(T),path:"url"},{default:l(()=>[e(se,null,{default:l(()=>[e(M,{value:O.method,"onUpdate:value":o[11]||(o[11]=s=>O.method=s),class:"http-method",options:ee},null,8,["value"]),e(i,{value:O.url,"onUpdate:value":o[12]||(o[12]=s=>O.url=s),placeholder:"请输入请求地址",class:"w-full"},null,8,["value"])]),_:1})]),_:1},8,["rule"]),e(u,{label:"Media Type"},{default:l(()=>[e(i,{value:O.mediaType,"onUpdate:value":o[13]||(o[13]=s=>O.mediaType=s),placeholder:"请输入 Media Type"},null,8,["value"])]),_:1}),o[36]||(o[36]=pe("div",{class:"n-form-item-label"},"Header 参数",-1)),e(Ne,{value:P.value,"onUpdate:value":o[16]||(o[16]=s=>P.value=s),class:Ye(P.value.length?void 0:"mb-24px"),"item-style":"margin-bottom: 0;","on-create":()=>({key:"",value:""})},{default:l(({index:s})=>[pe("div",Ya,[e(u,{"ignore-path-change":"","show-label":!1,path:`headers[${s}].key`,rule:{required:!0,message:"请输入键",trigger:["input","blur"],validator:()=>a(Ue)(P.value[s].key)}},{default:l(()=>[e(i,{value:P.value[s].key,"onUpdate:value":G=>P.value[s].key=G,placeholder:"Key",onKeydown:o[14]||(o[14]=Oe($e(()=>{},["prevent"]),["enter"]))},null,8,["value","onUpdate:value"])]),_:2},1032,["path","rule"]),o[35]||(o[35]=pe("div",{class:"mx-8px h-34px text-center line-height-34px"},"=",-1)),e(u,{"ignore-path-change":"","show-label":!1,path:`headers[${s}].value`,rule:{required:!0,message:"请输入值",trigger:["input","blur"],validator:()=>a(Ue)(P.value[s].value)}},{default:l(()=>[e(i,{value:P.value[s].value,"onUpdate:value":G=>P.value[s].value=G,placeholder:"Value",onKeydown:o[15]||(o[15]=Oe($e(()=>{},["prevent"]),["enter"]))},null,8,["value","onUpdate:value"])]),_:2},1032,["path","rule"])])]),_:1},8,["value","class"]),e(u,{label:"Body 参数"},{default:l(()=>[e(oe,{modelValue:O.body,"onUpdate:modelValue":o[17]||(o[17]=s=>O.body=s),lang:"json",placeholder:"请输入 Body 参数"},null,8,["modelValue"])]),_:1}),e(u,{label:"接口超时时间"},{default:l(()=>[e(se,null,{default:l(()=>[e(a(ae),{value:O.timeout,"onUpdate:value":o[18]||(o[18]=s=>O.timeout=s),class:"w-full",min:1,max:99999999,placeholder:a(t)("page.jobTask.form.executorTimeout"),clearable:""},null,8,["value","placeholder"]),e(be,null,{default:l(()=>[S(I(a(t)("common.second")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])):(h(),D(fe,{key:2,ref_key:"customformRef",ref:c,class:"w-full",model:K},{default:l(()=>[e(u,{label:"脚本类型"},{default:l(()=>[e(M,{value:K.method,"onUpdate:value":o[19]||(o[19]=s=>K.method=s),options:W},null,8,["value"])]),_:1}),e(u,{label:"脚本参数"},{default:l(()=>[e(oe,{modelValue:K.scriptParams,"onUpdate:modelValue":o[20]||(o[20]=s=>K.scriptParams=s),lang:"json",placeholder:"请输入脚本参数"},null,8,["modelValue"])]),_:1}),e(u,{label:"编码格式"},{default:l(()=>[e(i,{value:K.charset,"onUpdate:value":o[21]||(o[21]=s=>K.charset=s),placeholder:"请输入编码格式"},null,8,["value"])]),_:1})]),_:1},8,["model"]))]),_:1},8,["label","show-label","show-feedback","rule"]),e(ue,{cols:"2 s:1 m:2",responsive:"screen","x-gap":"20"},{default:l(()=>[e(F,null,{default:l(()=>[e(u,{label:a(t)("page.jobTask.routeKey"),path:"routeKey"},{default:l(()=>[e(Pa,{value:n.routeKey,"onUpdate:value":o[22]||(o[22]=s=>n.routeKey=s),"task-type":n.taskType},null,8,["value","task-type"])]),_:1},8,["label"])]),_:1}),e(F,null,{default:l(()=>[e(u,{label:a(t)("page.jobTask.blockStrategy"),path:"blockStrategy"},{default:l(()=>[e(Ea,{value:n.blockStrategy,"onUpdate:value":o[23]||(o[23]=s=>n.blockStrategy=s)},null,8,["value"])]),_:1},8,["label"])]),_:1})]),_:1}),e(ue,{cols:"2 s:1 m:2",responsive:"screen","x-gap":"20"},{default:l(()=>[e(F,null,{default:l(()=>[e(u,{label:a(t)("page.jobTask.triggerType"),path:"triggerType"},{default:l(()=>[e(xe,{value:n.triggerType,"onUpdate:value":o[24]||(o[24]=s=>n.triggerType=s),placeholder:a(t)("page.jobTask.form.triggerType")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),e(F,null,{default:l(()=>[e(u,{label:a(t)("page.jobTask.triggerInterval"),path:"triggerInterval"},{default:l(()=>[e(Za,{modelValue:n.triggerInterval,"onUpdate:modelValue":o[25]||(o[25]=s=>n.triggerInterval=s),"trigger-type":n.triggerType},null,8,["modelValue","trigger-type"])]),_:1},8,["label"])]),_:1})]),_:1}),e(ue,{cols:"2 s:1 m:2",responsive:"screen","x-gap":"20"},{default:l(()=>[e(F,null,{default:l(()=>[e(u,{label:a(t)("page.jobTask.executorTimeout"),path:"executorTimeout"},{default:l(()=>[e(se,null,{default:l(()=>[e(a(ae),{value:n.executorTimeout,"onUpdate:value":o[26]||(o[26]=s=>n.executorTimeout=s),min:1,max:99999999,placeholder:a(t)("page.jobTask.form.executorTimeout"),clearable:""},null,8,["value","placeholder"]),e(be,null,{default:l(()=>[S(I(a(t)("common.second")),1)]),_:1})]),_:1})]),_:1},8,["label"])]),_:1}),e(F,null,{default:l(()=>[e(u,{label:a(t)("page.jobTask.maxRetryTimes"),path:"maxRetryTimes"},{default:l(()=>[e(a(ae),{value:n.maxRetryTimes,"onUpdate:value":o[27]||(o[27]=s=>n.maxRetryTimes=s),min:0,max:999,placeholder:a(t)("page.jobTask.form.maxRetryTimes"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1}),e(ue,{cols:"2 s:1 m:2",responsive:"screen","x-gap":"20"},{default:l(()=>[e(F,null,{default:l(()=>[e(u,{label:a(t)("page.jobTask.retryInterval"),path:"retryInterval"},{default:l(()=>[e(se,null,{default:l(()=>[e(a(ae),{value:n.retryInterval,"onUpdate:value":o[28]||(o[28]=s=>n.retryInterval=s),min:1,max:99999999,placeholder:a(t)("page.jobTask.form.retryInterval"),clearable:""},null,8,["value","placeholder"]),e(be,null,{default:l(()=>[S(I(a(t)("common.second")),1)]),_:1})]),_:1})]),_:1},8,["label"])]),_:1}),e(F,null,{default:l(()=>[n.taskType!==1&&n.taskType!==2?(h(),D(u,{key:0,label:a(t)("page.jobTask.parallelNum"),path:"parallelNum"},{default:l(()=>[e(a(ae),{value:n.parallelNum,"onUpdate:value":o[29]||(o[29]=s=>n.parallelNum=s),min:1,max:999,placeholder:a(t)("page.jobTask.form.parallelNum"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"])):De("",!0)]),_:1})]),_:1}),e(u,{label:a(t)("page.jobTask.notifyId"),path:"notifyIds"},{default:l(()=>[e(M,{value:n.notifyIds,"onUpdate:value":o[30]||(o[30]=s=>n.notifyIds=s),"value-field":"id","label-field":"notifyName",placeholder:a(t)("page.jobTask.form.notifyId"),options:p.value,clearable:"",multiple:""},null,8,["value","placeholder","options"])]),_:1},8,["label"]),e(u,{label:a(t)("page.jobTask.description"),path:"description"},{default:l(()=>[e(i,{value:n.description,"onUpdate:value":o[31]||(o[31]=s=>n.description=s),type:"textarea",placeholder:a(t)("page.jobTask.form.description")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}}),al=ea(el,[["__scopeId","data-v-aa81251a"]]),ll={class:"flex"},tl=q({name:"JobTaskTriggerModal",__name:"job-task-trigger-modal",props:Z({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:Z(["submitted"],["update:visible"]),setup(U,{emit:x}){const p=U,f=x,g=ke(U,"visible"),d=te({args:[{arg:""}]}),v=E(0),b=E(null),{defaultRequiredRule:r}=ze(),c=te(L());function L(){var _;return{jobId:(_=p.rowData)==null?void 0:_.id,tmpArgsStr:""}}const $=E([]),N=te(T());function T(){return{method:"POST",url:"",headers:{},body:"",mediaType:"application/json",timeout:60}}const re=[{label:"Http 执行器",value:"snailJobHttpExecutor"},{label:"CMD 执行器",value:"snailJobCMDJobExecutor"},{label:"PowerShell 执行器",value:"snailJobPowerShellJobExecutor"},{label:"Shell 执行器",value:"snailJobShellJobExecutor"}],B=te(n());function n(){return{method:"LOCAL_SCRIPT",scriptParams:"",charset:""}}function me(){if(!p.rowData){Object.assign(c,L()),$.value=[],Object.assign(N,T()),Object.assign(B,n());return}Object.assign(c,p.rowData);const _=p.rowData.taskType,m=p.rowData.argsStr;if(m){if(c.tmpArgsStr=m,_===3&&Object.assign(d,{args:JSON.parse(m).map(V=>({arg:V}))}),_===5){const V=JSON.parse(m);v.value=V.shardNum,c.tmpArgsStr=V.argsStr}re.map(V=>V.value).includes(p.rowData.executorInfo)&&(p.rowData.executorInfo==="snailJobHttpExecutor"?(Object.assign(N,JSON.parse(m)),N.headers&&($.value=Object.keys(N.headers).map(V=>({key:V,value:N.headers[V]})))):Object.assign(B,JSON.parse(m)))}}function X(){g.value=!1}function P(){var _;if(((_=p.rowData)==null?void 0:_.taskType)===3&&d.args){const m=d.args.map(V=>V.arg.trim()).filter(V=>!!V);c.tmpArgsStr=m.length>0?JSON.stringify(m):""}return c.tmpArgsStr}const O=_=>{d.args.splice(_,1)},ce=()=>{d.args.push({arg:""})};Q(g,()=>{var _;g.value&&(me(),(_=b.value)==null||_.restoreValidation())}),Q(d,()=>{var _;g.value&&((_=p.rowData)==null?void 0:_.taskType)===3&&P()}),Q(()=>{var _;return(_=p.rowData)==null?void 0:_.taskType},_=>{g.value&&(_!==3&&(d.args=[]),_!==5&&(v.value=1),c.tmpArgsStr="")});const ge=[{label:"GET",value:"get"},{label:"POST",value:"post"},{label:"PUT",value:"put"},{label:"DELETE",value:"delete"}],K=[{label:"需下载脚本",value:"DOWNLOAD"},{label:"脚本代码",value:"SCRIPT_CODE"},{label:"使用本地脚本",value:"LOCAL_SCRIPT"}],C=qe(()=>re.map(_=>_.value).includes(p.rowData.executorInfo)?1:0);async function he(){var V,z,J,Y,ee;let _=((V=p.rowData)==null?void 0:V.taskType)===5?JSON.stringify({shardNum:v.value,argsStr:c.tmpArgsStr}):c.tmpArgsStr;C.value===1&&(await((z=b.value)==null?void 0:z.validate()),((J=p.rowData)==null?void 0:J.executorInfo)==="snailJobHttpExecutor"?($.value.forEach(W=>{N.headers[W.key]=W.value}),_=JSON.stringify(N)):_=JSON.stringify(B));const{error:m}=await Ia({jobId:(Y=p.rowData)==null?void 0:Y.id,tmpArgsStr:_});m||((ee=window.$message)==null||ee.success(t("common.executeSuccess")),X(),f("submitted"))}return(_,m)=>{const V=He,z=le,J=Qe,Y=Fe,ee=Pe,W=de,k=Re,o=Ce,i=ra,u=Ee,j=We,A=Ze,H=_a;return h(),D(H,{show:g.value,"onUpdate:show":m[12]||(m[12]=R=>g.value=R),class:"max-w-90% w-600px",preset:"card",title:"执行任务",bordered:!1},{footer:l(()=>[e(A,{justify:"end",size:16},{default:l(()=>[e(z,{onClick:X},{default:l(()=>[S(I(a(t)("common.cancel")),1)]),_:1}),e(z,{type:"primary",onClick:he},{default:l(()=>m[15]||(m[15]=[S("执行")])),_:1})]),_:1})]),default:l(()=>[e(j,{model:c},{default:l(()=>{var R;return[_.rowData?(h(),D(J,{key:0,label:a(t)("page.jobTask.argsStr"),path:"argsStr","show-label":C.value===0,"show-feedback":C.value===0,rule:((R=_.rowData)==null?void 0:R.taskType)===3?a(r):void 0},{default:l(()=>{var M;return[C.value===0?(h(),ie(we,{key:0},[((M=_.rowData)==null?void 0:M.taskType)===3?(h(),D(ee,{key:0,class:"flex-col"},{default:l(()=>[(h(!0),ie(we,null,Je(d.args,(y,w)=>(h(),D(J,{key:w,label:`分片参数 ${w+1}`,path:`args[${w}].arg`,"show-feedback":!1,class:"m-b-12px",rule:{required:!0,message:`${a(t)("page.jobTask.form.argsStr")} ${w+1}`,trigger:["input","blur"],validator(){return!!y.arg}}},{default:l(()=>[e(oe,{modelValue:y.arg,"onUpdate:modelValue":ne=>y.arg=ne,lang:"json",placeholder:a(t)("page.jobTask.form.argsStr")},null,8,["modelValue","onUpdate:modelValue","placeholder"]),e(z,{class:"ml-12px",type:"error",dashed:"",onClick:ne=>O(w)},{default:l(()=>[e(V,{class:"text-icon"})]),_:2},1032,["onClick"])]),_:2},1032,["label","path","rule"]))),128)),e(z,{block:"",dashed:"","attr-type":"button",onClick:ce},{default:l(()=>[e(Y,{class:"text-icon"})]),_:1})]),_:1})):(h(),D(oe,{key:1,modelValue:c.tmpArgsStr,"onUpdate:modelValue":m[0]||(m[0]=y=>c.tmpArgsStr=y),lang:"json",placeholder:a(t)("page.jobTask.form.argsStr")},null,8,["modelValue","placeholder"]))],64)):_.rowData.executorInfo==="snailJobHttpExecutor"?(h(),D(j,{key:1,ref_key:"customformRef",ref:b,class:"w-full",model:N},{default:l(()=>[e(J,{label:"请求参数",rule:a(r),path:"url"},{default:l(()=>[e(o,null,{default:l(()=>[e(W,{value:N.method,"onUpdate:value":m[1]||(m[1]=y=>N.method=y),class:"http-method",options:ge},null,8,["value"]),e(k,{value:N.url,"onUpdate:value":m[2]||(m[2]=y=>N.url=y),placeholder:"请输入请求地址",class:"w-full"},null,8,["value"])]),_:1})]),_:1},8,["rule"]),e(J,{label:"Media Type"},{default:l(()=>[e(k,{value:N.mediaType,"onUpdate:value":m[3]||(m[3]=y=>N.mediaType=y),placeholder:"请输入 Media Type"},null,8,["value"])]),_:1}),m[14]||(m[14]=pe("div",{class:"n-form-item-label"},"Header 参数",-1)),e(i,{value:$.value,"onUpdate:value":m[6]||(m[6]=y=>$.value=y),class:Ye($.value.length?void 0:"mb-24px"),"item-style":"margin-bottom: 0;","on-create":()=>({key:"",value:""})},{default:l(({index:y})=>[pe("div",ll,[e(J,{"ignore-path-change":"","show-label":!1,path:`headers[${y}].key`,rule:{required:!0,message:"请输入键",trigger:["input","blur"],validator:()=>a(Ue)($.value[y].key)}},{default:l(()=>[e(k,{value:$.value[y].key,"onUpdate:value":w=>$.value[y].key=w,placeholder:"Key",onKeydown:m[4]||(m[4]=Oe($e(()=>{},["prevent"]),["enter"]))},null,8,["value","onUpdate:value"])]),_:2},1032,["path","rule"]),m[13]||(m[13]=pe("div",{class:"mx-8px h-34px text-center line-height-34px"},"=",-1)),e(J,{"ignore-path-change":"","show-label":!1,path:`headers[${y}].value`,rule:{required:!0,message:"请输入值",trigger:["input","blur"],validator:()=>a(Ue)($.value[y].value)}},{default:l(()=>[e(k,{value:$.value[y].value,"onUpdate:value":w=>$.value[y].value=w,placeholder:"Value",onKeydown:m[5]||(m[5]=Oe($e(()=>{},["prevent"]),["enter"]))},null,8,["value","onUpdate:value"])]),_:2},1032,["path","rule"])])]),_:1},8,["value","class"]),e(J,{label:"Body 参数"},{default:l(()=>[e(oe,{modelValue:N.body,"onUpdate:modelValue":m[7]||(m[7]=y=>N.body=y),lang:"json",placeholder:"请输入 Body 参数"},null,8,["modelValue"])]),_:1}),e(J,{label:"接口超时时间"},{default:l(()=>[e(o,null,{default:l(()=>[e(a(ae),{value:N.timeout,"onUpdate:value":m[8]||(m[8]=y=>N.timeout=y),class:"w-full",min:1,max:99999999,placeholder:a(t)("page.jobTask.form.executorTimeout"),clearable:""},null,8,["value","placeholder"]),e(u,null,{default:l(()=>[S(I(a(t)("common.second")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])):(h(),D(j,{key:2,ref_key:"customformRef",ref:b,class:"w-full",model:B},{default:l(()=>[e(J,{label:"脚本类型"},{default:l(()=>[e(W,{value:B.method,"onUpdate:value":m[9]||(m[9]=y=>B.method=y),options:K},null,8,["value"])]),_:1}),e(J,{label:"脚本参数"},{default:l(()=>[e(oe,{modelValue:B.scriptParams,"onUpdate:modelValue":m[10]||(m[10]=y=>B.scriptParams=y),lang:"json",placeholder:"请输入脚本参数"},null,8,["modelValue"])]),_:1}),e(J,{label:"编码格式"},{default:l(()=>[e(k,{value:B.charset,"onUpdate:value":m[11]||(m[11]=y=>B.charset=y),placeholder:"请输入编码格式"},null,8,["value"])]),_:1})]),_:1},8,["model"]))]}),_:1},8,["label","show-label","show-feedback","rule"])):De("",!0)]}),_:1},8,["model"])]),_:1},8,["show"])}}}),ol=ea(tl,[["__scopeId","data-v-95b44d53"]]),rl=q({name:"JobTaskSearch",__name:"job-task-search",props:{model:{required:!0},modelModifiers:{}},emits:Z(["reset","search"],["update:model"]),setup(U,{emit:x}){const p=x,f=ke(U,"model");function g(){p("reset")}function d(){p("search")}return(v,b)=>{const r=Oa,c=Re,L=de,$=na,N=sa;return h(),D(N,{"btn-span":"24 s:12 m:18 l:18 xl:18",model:f.value,onSearch:d,onReset:g},{default:l(()=>[e(r,{span:"24 s:12 m:6",label:a(t)("page.jobTask.groupName"),path:"groupName",class:"pr-24px"},{default:l(()=>[e(oa,{value:f.value.groupName,"onUpdate:value":b[0]||(b[0]=T=>f.value.groupName=T),clearable:""},null,8,["value"])]),_:1},8,["label"]),e(r,{span:"24 s:12 m:6",label:a(t)("page.jobTask.jobName"),path:"jobName",class:"pr-24px"},{default:l(()=>[e(c,{value:f.value.jobName,"onUpdate:value":b[1]||(b[1]=T=>f.value.jobName=T),placeholder:a(t)("page.jobTask.form.jobName"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"]),e(r,{span:"24 s:12 m:6",label:a(t)("page.jobTask.executorInfo"),path:"executorInfo",class:"pr-24px","label-width":100},{default:l(()=>[e(c,{value:f.value.executorInfo,"onUpdate:value":b[2]||(b[2]=T=>f.value.executorInfo=T),placeholder:a(t)("page.jobTask.form.executorInfo"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"]),e(r,{span:"24 s:12 m:6",label:a(t)("page.jobTask.jobStatus"),path:"jobStatus",class:"pr-24px"},{default:l(()=>[e(L,{value:f.value.jobStatus,"onUpdate:value":b[3]||(b[3]=T=>f.value.jobStatus=T),placeholder:a(t)("page.jobTask.form.jobStatus"),options:a(Ve)(a(Xe)),clearable:""},null,8,["value","placeholder","options"])]),_:1},8,["label"]),e(r,{span:"24 s:12 m:6",label:a(t)("page.jobTask.ownerName"),path:"ownerId",class:"pr-24px"},{default:l(()=>[e($,{value:f.value.ownerId,"onUpdate:value":b[4]||(b[4]=T=>f.value.ownerId=T),clearable:""},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),nl=q({name:"JobTaskDetailDrawer",__name:"job-task-detail-drawer",props:Z({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(U){const x=ke(U,"visible");return(p,f)=>{const g=za,d=Ie,v=Ga,b=Fa;return h(),D(b,{modelValue:x.value,"onUpdate:modelValue":f[0]||(f[0]=r=>x.value=r),title:a(t)("page.jobTask.detail"),width:["50%","90%"]},{default:l(()=>[e(v,{"label-placement":"top",bordered:"",column:2},{default:l(()=>[e(g,{label:a(t)("page.jobTask.groupName")},{default:l(()=>{var r;return[S(I((r=p.rowData)==null?void 0:r.groupName),1)]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.jobName")},{default:l(()=>{var r;return[S(I((r=p.rowData)==null?void 0:r.jobName),1)]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.taskType")},{default:l(()=>{var r;return[e(d,{type:a(ye)((r=p.rowData)==null?void 0:r.taskType)},{default:l(()=>{var c;return[S(I(a(t)(a(aa)[(c=p.rowData)==null?void 0:c.taskType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.argsStr")},{default:l(()=>{var r;return[S(I((r=p.rowData)==null?void 0:r.argsStr),1)]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.nextTriggerAt")},{default:l(()=>{var r;return[S(I((r=p.rowData)==null?void 0:r.nextTriggerAt),1)]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.jobStatus")},{default:l(()=>{var r;return[e(d,{type:a(ye)((r=p.rowData)==null?void 0:r.jobStatus)},{default:l(()=>{var c;return[S(I(a(t)(a(Ta)[(c=p.rowData)==null?void 0:c.jobStatus])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.routeKey")},{default:l(()=>{var r;return[e(d,{type:a(ye)((r=p.rowData)==null?void 0:r.routeKey)},{default:l(()=>{var c;return[S(I(a(t)(a(ka)[(c=p.rowData)==null?void 0:c.routeKey])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.executorType")},{default:l(()=>{var r;return[e(d,{type:a(ye)((r=p.rowData)==null?void 0:r.executorType)},{default:l(()=>{var c;return[S(I(a(t)(a(ha)[(c=p.rowData)==null?void 0:c.executorType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.executorInfo")},{default:l(()=>{var r;return[S(I((r=p.rowData)==null?void 0:r.executorInfo),1)]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.triggerType")},{default:l(()=>{var r;return[e(d,{type:a(ye)((r=p.rowData)==null?void 0:r.triggerType)},{default:l(()=>{var c;return[S(I(a(t)(a(la)[(c=p.rowData)==null?void 0:c.triggerType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.triggerInterval")},{default:l(()=>{var r;return[S(I((r=p.rowData)==null?void 0:r.triggerInterval),1)]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.blockStrategy")},{default:l(()=>{var r;return[e(d,{type:a(ye)((r=p.rowData)==null?void 0:r.blockStrategy)},{default:l(()=>{var c;return[S(I(a(t)(a(ta)[(c=p.rowData)==null?void 0:c.blockStrategy])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.executorTimeout")},{default:l(()=>{var r;return[S(I((r=p.rowData)==null?void 0:r.executorTimeout),1)]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.maxRetryTimes")},{default:l(()=>{var r;return[S(I((r=p.rowData)==null?void 0:r.maxRetryTimes),1)]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.retryInterval")},{default:l(()=>{var r;return[S(I((r=p.rowData)==null?void 0:r.retryInterval),1)]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.parallelNum")},{default:l(()=>{var r;return[S(I((r=p.rowData)==null?void 0:r.parallelNum),1)]}),_:1},8,["label"]),e(g,{label:a(t)("page.jobTask.description"),span:2},{default:l(()=>{var r;return[S(I((r=p.rowData)==null?void 0:r.description),1)]}),_:1},8,["label"])]),_:1})]),_:1},8,["modelValue","title"])}}}),sl={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function Te(U){return typeof U=="function"||Object.prototype.toString.call(U)==="[object Object]"&&!Sa(U)}const Il=q({name:"job_task",__name:"index",setup(U){const{hasAuth:x}=Ja(),p=Ge(),{routerPushByKey:f}=ja(),g=E(),{bool:d,setTrue:v}=Le(!1),b=E(),{bool:r,setTrue:c}=Le(!1),{columnChecks:L,columns:$,data:N,getData:T,loading:re,mobilePagination:B,searchParams:n,resetSearchParams:me}=$a({apiFn:Da,apiParams:{page:1,size:10,groupName:null,jobName:null,jobStatus:null,ownerId:null,executorInfo:null},columns:()=>[{type:"selection",align:"center",width:48},{key:"id",title:t("common.index"),align:"center",width:48},{key:"jobName",title:t("page.jobTask.jobName"),align:"center",width:140,fixed:"left",render:i=>{async function u(){g.value=i,v()}return e(le,{text:!0,tag:"a",type:"primary",onClick:u,class:"ws-normal"},{default:()=>[`${i.jobName}`]})}},{key:"groupName",title:t("page.jobTask.groupName"),align:"left",width:150},{key:"executorInfo",title:t("page.jobTask.executorInfo"),align:"left",width:120},{key:"ownerName",title:t("page.jobTask.ownerName"),align:"left",width:120},{key:"nextTriggerAt",title:t("page.jobTask.nextTriggerAt"),align:"center",width:120},{key:"jobStatus",title:t("page.jobTask.jobStatus"),align:"center",width:60,render:i=>{const u=async(j,A)=>{var R;const{error:H}=await Ua({id:i.id,jobStatus:j});H||(i.jobStatus=j,(R=window.$message)==null||R.success(t("common.updateSuccess"))),A(!H)};return e(Ra,{value:i.jobStatus,"onUpdate:value":j=>i.jobStatus=j,onSubmitted:u},null)}},{key:"taskType",title:t("page.jobTask.taskType"),align:"center",width:120,render:i=>{if(i.taskType===null)return null;const u={1:"info",2:"success",3:"error",4:"primary",5:"warning"},j=t(aa[i.taskType]);return e(Ie,{type:u[i.taskType]},Te(j)?j:{default:()=>[j]})}},{key:"triggerType",title:t("page.jobTask.triggerType"),align:"center",width:120,render:i=>{if(i.triggerType===null)return null;const u={2:"info",3:"success",99:"error"},j=t(la[i.triggerType]);return e(Ie,{type:u[i.triggerType]},Te(j)?j:{default:()=>[j]})}},{key:"triggerInterval",title:t("page.jobTask.triggerInterval"),align:"center",width:80},{key:"blockStrategy",title:t("page.jobTask.blockStrategy"),align:"center",width:80,render:i=>{if(i.blockStrategy===null)return null;const u={1:"info",2:"success",3:"error",4:"warning"},j=t(ta[i.blockStrategy]);return e(Ie,{type:u[i.blockStrategy]},Te(j)?j:{default:()=>[j]})}},{key:"executorTimeout",title:t("page.jobTask.executorTimeout"),align:"center",width:80},{key:"updateDt",title:t("page.jobTask.updateDt"),align:"center",width:120},{key:"operate",title:t("common.operate"),align:"center",width:120,fixed:"right",render:i=>{let u,j;const A=[{label:t("common.copy"),key:"copy",click:()=>Y(i.id)},{type:"divider",key:"d2"},{label:t("common.batchList"),key:"batchList",click:()=>W(i.id)},{type:"divider",key:"d2"},{type:"render",key:"delete",render:()=>e("div",{class:"flex-center"},[e(Me,{onPositiveClick:()=>m(i.id)},{default:()=>t("common.confirmDelete"),trigger:()=>{let R;return e(le,{quaternary:!0,size:"small"},Te(R=t("common.delete"))?R:{default:()=>[R]})}})])}],H=R=>{const M=A.filter(y=>y.key===R)[0].click;M&&M()};return e("div",{class:"flex-center gap-8px"},[e(le,{text:!0,type:"warning",ghost:!0,size:"small",onClick:()=>J(i.id)},Te(u=t("common.edit"))?u:{default:()=>[u]}),e(Be,{vertical:!0},null),e(le,{type:"error",text:!0,ghost:!0,size:"small",onClick:()=>ee(i)},Te(j=t("common.execute"))?j:{default:()=>[j]}),e(Be,{vertical:!0},null),e(wa,{trigger:"click","show-arrow":!1,options:A,size:"small","on-select":H},{default:()=>e(le,{text:!0,type:"primary",ghost:!0,size:"small"},{default:()=>[S("更多")]})})])}}]}),{drawerVisible:X,operateType:P,editingData:O,handleAdd:ce,handleEdit:ge,handleCopy:K,checkedRowKeys:C,onDeleted:he,onBatchDeleted:_}=Va(N,T);async function m(i){const{error:u}=await Ke([i]);u||he()}async function V(){const{error:i}=await Ke(C.value);i||_()}function z(){O.value=null,ce()}function J(i){ge(i)}function Y(i){K(i)}async function ee(i){b.value=i,c()}function W(i){const u=N.value.find(j=>j.id===i);f("job_batch",{state:{jobId:i,jobName:u.jobName}})}function k(){return{jobIds:C.value,groupName:n.groupName,jobName:n.jobName,jobStatus:n.jobStatus,ownerId:n.ownerId}}function o(){da("/job/export",k(),t("page.jobTask.title"))}return(i,u)=>{const j=ma,A=pa,H=ia,R=ua,M=Ha,y=Pe;return h(),ie("div",sl,[e(rl,{model:a(n),"onUpdate:model":u[0]||(u[0]=w=>_e(n)?n.value=w:null),onReset:a(me),onSearch:a(T)},null,8,["model","onReset","onSearch"]),e(j),e(y,{title:a(t)("page.jobTask.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":l(()=>[e(R,{columns:a(L),"onUpdate:columns":u[1]||(u[1]=w=>_e(L)?L.value=w:null),loading:a(re),"disabled-delete":a(C).length===0,"show-delete":a(x)("R_ADMIN"),onAdd:z,onDelete:V,onRefresh:a(T)},{addAfter:l(()=>[e(A,{action:"/job/import",accept:"application/json",onRefresh:a(T)},null,8,["onRefresh"]),e(a(Me),{onPositiveClick:o},{trigger:l(()=>[e(a(le),{size:"small",ghost:"",type:"primary",disabled:a(C).length===0&&a(x)("R_USER")},{icon:l(()=>[e(H,{class:"text-icon"})]),default:l(()=>[S(" "+I(a(t)("common.export")),1)]),_:1},8,["disabled"])]),default:l(()=>[S(I(a(C).length===0?a(t)("common.exportAll"):a(t)("common.exportPar",{num:a(C).length})),1)]),_:1})]),_:1},8,["columns","loading","disabled-delete","show-delete","onRefresh"])]),default:l(()=>[e(M,{"checked-row-keys":a(C),"onUpdate:checkedRowKeys":u[2]||(u[2]=w=>_e(C)?C.value=w:null),columns:a($),data:a(N),"flex-height":!a(p).isMobile,"scroll-x":2e3,loading:a(re),remote:"","row-key":w=>w.id,pagination:a(B),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"])]),_:1},8,["title"]),e(al,{visible:a(X),"onUpdate:visible":u[3]||(u[3]=w=>_e(X)?X.value=w:null),"operate-type":a(P),"row-data":a(O),onSubmitted:a(T)},null,8,["visible","operate-type","row-data","onSubmitted"]),e(nl,{visible:a(d),"onUpdate:visible":u[4]||(u[4]=w=>_e(d)?d.value=w:null),"row-data":g.value},null,8,["visible","row-data"]),e(ol,{visible:a(r),"onUpdate:visible":u[5]||(u[5]=w=>_e(r)?r.value=w:null),"row-data":b.value},null,8,["visible","row-data"])])}}});export{Il as default};
