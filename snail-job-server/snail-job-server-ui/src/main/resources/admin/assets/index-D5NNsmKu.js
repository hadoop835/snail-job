import{d as p,k as u,r as s,i as f,o as d,c,h as _}from"./index-BxI_8ir5.js";import{u as k,_ as v}from"./workflow.vue_vue_type_style_index_0_lang-BVvScPLI.js";import{h as g}from"./workflow-C49bAB05.js";import"./job-task-list-table.vue_vue_type_script_setup_true_lang-DO4S_MS8.js";import"./table-KwvlieBb.js";import"./Grid-D6if5aLa.js";import"./job-Cl2Rizrz.js";import"./detail-drawer-BdQyK8cj.js";import"./DescriptionsItem-D5s6FkGL.js";import"./log-drawer-m-GvVrZC.js";import"./CollapseItem-CUobLCgj.js";import"./code-mirror.vue_vue_type_script_setup_true_lang-yaz4Kucu.js";import"./cron-input.vue_vue_type_style_index_0_lang-C2hp-gtC.js";import"./group-BXqOqznU.js";const T=p({name:"workflow_form_detail",__name:"index",setup(w){const e=k(),i=u(),t=s(!1),a=String(i.query.id),r=s({}),l=async()=>{t.value=!0;const{data:n,error:o}=await g(a);o||(r.value=n),t.value=!1};return f(()=>{e.clear(),e.setType(1),e.setId(a),l()}),(n,o)=>(d(),c(_(v),{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=m=>r.value=m),spinning:t.value,disabled:""},null,8,["modelValue","spinning"]))}});export{T as default};
