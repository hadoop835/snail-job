import{d as i,c0 as p,i as c,r as l,o as u,c as f,h as d,$ as w}from"./index-BlU6DPnP.js";import{u as k,_}from"./workflow.vue_vue_type_style_index_0_lang-3sh8K__j.js";import{e as v}from"./workflow-D85MYEv3.js";import"./job-task-list-table.vue_vue_type_script_setup_true_lang-CaM06I1u.js";import"./table-u42G8C7W.js";import"./Grid-Cpsk88_v.js";import"./job-B63-MVN3.js";import"./detail-drawer-C_9uz2U2.js";import"./DescriptionsItem-gspY_Hjg.js";import"./log-drawer-DaQyKcwN.js";import"./CollapseItem-nfFVmwOd.js";import"./dynamic-input.vue_vue_type_script_setup_true_lang-DwXVKZT0.js";import"./DynamicInput-DvfAGTT6.js";import"./code-mirror-1zmFi0Qb.js";import"./cron-input.vue_vue_type_style_index_0_lang-BHP-tMGB.js";import"./notify-BkZnHT3U.js";import"./group-XM1tp95e.js";const U=i({name:"workflow_form_add",__name:"index",setup(x){const t=k(),r=p();c(()=>{t.clear(),t.setType(0)});const e=l({workflowName:`WF-${new Date().getTime()}`,workflowStatus:1,blockStrategy:1,description:void 0,executorTimeout:60,wfContext:'{"init":""}'}),s=async()=>{var o;const{error:a}=await v(e.value);a||((o=window.$message)==null||o.info(w("common.addSuccess")),r.push("/workflow/task"))},n=()=>{r.push("/workflow/task")};return(a,o)=>(u(),f(d(_),{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=m=>e.value=m),onSave:s,onCancel:n},null,8,["modelValue"]))}});export{U as default};
