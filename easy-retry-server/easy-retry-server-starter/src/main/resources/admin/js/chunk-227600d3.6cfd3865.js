(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-227600d3"],{"38b7":function(e,t){var a={jobStatusEnum:{0:{name:"关闭",color:"#9c1f1f"},1:{name:"开启",color:"#f5a22d"}},taskType:{1:{name:"集群模式",color:"#d06892"},2:{name:"广播模式",color:"#f5a22d"},3:{name:"分片模式",color:"#e1f52d"}},triggerType:{1:{name:"CRON表达式",color:"#d06892"},2:{name:"固定时间",color:"#f5a22d"}},blockStrategy:{1:{name:"丢弃策略",color:"#d06892"},2:{name:"覆盖",color:"#f5a22d"},3:{name:"并行",color:"#e1f52d"}},executorType:{1:{name:"Java",color:"#d06892"}},routeKey:{4:{name:"轮询",color:"#8f68d2"},1:{name:"一致性Hash",color:"#d06892"},2:{name:"随机",color:"#f5a22d"},3:{name:"LRU",color:"#e1f52d"}},taskBatchStatus:{1:{name:"待处理",color:"#64a6ea"},2:{name:"运行中",color:"#1b7ee5"},3:{name:"成功",color:"#087da1"},4:{name:"失败",color:"#f52d80"},5:{name:"停止",color:"#ac2df5"},6:{name:"取消",color:"#f5732d"}},operationReason:{0:{name:""},1:{name:"执行超时",color:"#64a6ea"},2:{name:"无客户端节点",color:"#1b7ee5"},3:{name:"任务已关闭",color:"#087da1"},4:{name:"任务丢弃",color:"#3a2f81"},5:{name:"任务被覆盖",color:"#c2238a"},6:{name:"无可执行任务项",color:"#23c28a"},7:{name:"任务执行期间发生非预期异常",color:"#bdc223"},8:{name:"手动停止",color:"#23c28a"}},taskStatus:{2:{name:"运行中",color:"#1b7ee5"},3:{name:"成功",color:"#087da1"},4:{name:"失败",color:"#f52d80"},5:{name:"停止",color:"#ac2df5"}},notifyScene:{1:{name:"任务执行失败",color:"#d06892"}},notifyType:{1:{name:"钉钉通知",color:"#64a6ea"},2:{name:"邮箱通知",color:"#1b7ee5"},4:{name:"飞书",color:"#087da1"}},notifyStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},rateLimiterStatus:{0:{name:"未启用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}}};e.exports=a},"3b7a":function(e,t,a){"use strict";a.d(t,"p",(function(){return n})),a.d(t,"n",(function(){return o})),a.d(t,"i",(function(){return s})),a.d(t,"o",(function(){return l})),a.d(t,"a",(function(){return u})),a.d(t,"s",(function(){return c})),a.d(t,"h",(function(){return d})),a.d(t,"k",(function(){return m})),a.d(t,"g",(function(){return f})),a.d(t,"f",(function(){return p})),a.d(t,"e",(function(){return h})),a.d(t,"c",(function(){return g})),a.d(t,"b",(function(){return b})),a.d(t,"l",(function(){return v})),a.d(t,"q",(function(){return y})),a.d(t,"j",(function(){return j})),a.d(t,"d",(function(){return w})),a.d(t,"m",(function(){return x})),a.d(t,"r",(function(){return k}));var r=a("b775"),i={jobPageList:"/job/page/list",jobList:"/job/list",jobDetail:"/job/",saveJob:"/job/",updateJob:"/job/",updateJobStatus:"/job/status",delJob:"/job/",timeByCron:"/job/cron",jobNameList:"/job/job-name/list",triggerJob:"/job/trigger/",jobBatchList:"/job/batch/list",jobBatchDetail:"/job/batch/",stop:"/job/batch/stop/",jobNotifyConfigPageList:"/job/notify/config/page/list",jobNotifyConfigDetail:"/job/notify/config/",saveJobNotify:"/job/notify/config/",updateJobNotify:"/job/notify/config/",jobTaskList:"/job/task/list",jobLogList:"/job/log/list"};function n(e){return Object(r["b"])({url:i.triggerJob+e,method:"post"})}function o(e){return Object(r["b"])({url:i.stop+e,method:"post"})}function s(e){return Object(r["b"])({url:i.jobNameList,method:"get",params:e})}function l(e){return Object(r["b"])({url:i.timeByCron,method:"get",params:e})}function u(e){return Object(r["b"])({url:i.delJob+e,method:"delete"})}function c(e){return Object(r["b"])({url:i.updateJobStatus,method:"put",data:e})}function d(e){return Object(r["b"])({url:i.jobLogList,method:"get",params:e})}function m(e){return Object(r["b"])({url:i.jobTaskList,method:"get",params:e})}function f(e){return Object(r["b"])({url:i.jobBatchList,method:"get",params:e})}function p(e){return Object(r["b"])({url:i.jobBatchDetail+e,method:"get"})}function h(e){return Object(r["b"])({url:i.jobPageList,method:"get",params:e})}function g(e){return Object(r["b"])({url:i.jobList,method:"get",params:e})}function b(e){return Object(r["b"])({url:i.jobDetail+e,method:"get"})}function v(e){return Object(r["b"])({url:i.saveJob,method:"post",data:e})}function y(e){return Object(r["b"])({url:i.updateJob,method:"put",data:e})}function j(e){return Object(r["b"])({url:i.jobNotifyConfigPageList,method:"get",params:e})}function w(e){return Object(r["b"])({url:i.jobNotifyConfigDetail+e,method:"get"})}function x(e){return Object(r["b"])({url:i.saveJobNotify,method:"post",data:e})}function k(e){return Object(r["b"])({url:i.updateJobNotify,method:"put",data:e})}},4591:function(e,t,a){"use strict";a("b3f4")},"6fb7":function(e,t,a){"use strict";var r=function(){var e=this,t=e._self._c;return t("div",[t("a-modal",{attrs:{visible:e.visible,title:"Cron表达式",width:"650px"},on:{ok:e.handleOk,cancel:e.handlerCancel}},[t("cron-input",{attrs:{item:e.cronItem},on:{change:e.showFive},model:{value:e.cron,callback:function(t){e.cron=t},expression:"cron"}}),t("a-input",{attrs:{placeholder:"请输入cron表达式"},model:{value:e.cron,callback:function(t){e.cron=t},expression:"cron"}}),t("div",{staticStyle:{margin:"20px 0","border-left":"#f5222d 5px solid","font-size":"medium","font-weight":"bold"}},[e._v("    近5次的运行时间: ")]),e._l(e.list,(function(a,r){return t("div",{key:a,staticStyle:{"margin-top":"10px"}},[e._v(" 第"+e._s(r+1)+"次: "+e._s(a))])}))],2)],1)},i=[],n=a("3b7a"),o={name:"CronModal",data:function(){return{visible:!1,cronItem:["second","minute","hour","day","month","week","year"],cron:"",list:[]}},methods:{handleOk:function(){this.visible=!1,this.$emit("getCron",this.cron)},handlerCancel:function(){this.visible=!1},isShow:function(e){this.cron=e,this.visible=!0},showFive:function(e){var t=this;this.cron=e,Object(n["o"])({cron:e}).then((function(e){t.list=e.data}))}}},s=o,l=(a("4591"),a("2877")),u=Object(l["a"])(s,r,i,!1,null,null,null);t["a"]=u.exports},"88bc":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,i="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")();function d(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function m(e,t){var a=-1,r=e?e.length:0,i=Array(r);while(++a<r)i[a]=t(e[a],a,e);return i}function f(e,t){var a=-1,r=t.length,i=e.length;while(++a<r)e[i+a]=t[a];return e}var p=Object.prototype,h=p.hasOwnProperty,g=p.toString,b=c.Symbol,v=p.propertyIsEnumerable,y=b?b.isConcatSpreadable:void 0,j=Math.max;function w(e,t,a,r,i){var n=-1,o=e.length;a||(a=F),i||(i=[]);while(++n<o){var s=e[n];t>0&&a(s)?t>1?w(s,t-1,a,r,i):f(i,s):r||(i[i.length]=s)}return i}function x(e,t){return e=Object(e),k(e,t,(function(t,a){return a in e}))}function k(e,t,a){var r=-1,i=t.length,n={};while(++r<i){var o=t[r],s=e[o];a(s,o)&&(n[o]=s)}return n}function S(e,t){return t=j(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,i=j(a.length-t,0),n=Array(i);while(++r<i)n[r]=a[t+r];r=-1;var o=Array(t+1);while(++r<t)o[r]=a[r];return o[t]=n,d(e,this,o)}}function F(e){return T(e)||V(e)||!!(y&&e&&e[y])}function O(e){if("string"==typeof e||I(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function V(e){return q(e)&&h.call(e,"callee")&&(!v.call(e,"callee")||g.call(e)==i)}var T=Array.isArray;function C(e){return null!=e&&_(e.length)&&!N(e)}function q(e){return M(e)&&C(e)}function N(e){var t=L(e)?g.call(e):"";return t==n||t==o}function _(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function L(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function M(e){return!!e&&"object"==typeof e}function I(e){return"symbol"==typeof e||M(e)&&g.call(e)==s}var R=S((function(e,t){return null==e?{}:x(e,m(w(t,1),O))}));e.exports=R}).call(this,a("c8ba"))},b3f4:function(e,t,a){},eb0f:function(e,t,a){"use strict";a.r(t);a("b0c0");var r=function(){var e=this,t=e._self._c;return t("div",[t("page-header-wrapper",{staticStyle:{margin:"-24px -1px 0"},attrs:{content:"定时任务配置"},on:{back:function(){return e.$router.go(-1)}}},[t("div")]),t("a-card",{attrs:{"body-style":{padding:"24px 32px"},bordered:!1,loading:e.loading}},[t("a-form",{staticClass:"form-row",staticStyle:{width:"40%",margin:"auto"},attrs:{form:e.form,layout:"vertical"},on:{submit:e.handleSubmit}},[t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:24,md:24,sm:24}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"['id']"}],attrs:{hidden:""}})],1),t("a-form-item",{attrs:{label:"任务名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jobName",{rules:[{required:!0,message:"请输入任务名称",whitespace:!0},{required:!0,max:64,message:"最多支持64个字符！"}]}],expression:"[\n                'jobName',\n                {rules: [{ required: true, message: '请输入任务名称', whitespace: true},{required: true, max: 64, message: '最多支持64个字符！'}]}\n              ]"}],attrs:{placeholder:"请输入任务名称",maxLength:64}})],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:18,md:18,sm:24}},[t("a-form-item",{attrs:{label:"组"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["groupName",{rules:[{required:!0,message:"请选择组"}]}],expression:"['groupName', { rules: [{ required: true, message: '请选择组' }] }]"}],attrs:{placeholder:"请选择组"}},e._l(e.groupNameList,(function(a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(a))])})),1)],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"状态"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["jobStatus",{initialValue:"1",rules:[{required:!0,message:"请选择状态"}]}],expression:"[\n                'jobStatus',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请选择状态'}]\n                }\n              ]"}],attrs:{placeholder:"请选择状态"}},e._l(e.jobStatusEnum,(function(a,r){return t("a-select-option",{key:r,attrs:{value:r}},[e._v(e._s(a.name))])})),1)],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:12,md:12,sm:24}},[t("a-form-item",{attrs:{label:"路由策略"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["routeKey",{initialValue:"4",rules:[{required:!0,message:"请选择路由策略"}]}],expression:"[\n                'routeKey',\n                {\n                  initialValue: '4',\n                  rules: [{ required: true, message: '请选择路由策略'}]\n                }\n              ]"}],attrs:{placeholder:"请选择路由策略"}},e._l(e.routeKey,(function(a,r){return t("a-select-option",{key:r,attrs:{value:r}},[e._v(e._s(a.name))])})),1)],1)],1),t("a-col",{attrs:{lg:12,md:12,sm:24}},[t("a-form-item",{attrs:{label:"阻塞策略"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["blockStrategy",{initialValue:"1",rules:[{required:!0,message:"请选择阻塞策略"}]}],expression:"[\n                'blockStrategy',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请选择阻塞策略'}]\n                }\n              ]"}],attrs:{placeholder:"请选择阻塞策略"}},e._l(e.blockStrategy,(function(a,r){return t("a-select-option",{key:r,attrs:{value:r}},[e._v(e._s(a.name))])})),1)],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:8,md:12,sm:12}},[t("a-form-item",{attrs:{label:"触发类型"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["triggerType",{initialValue:"2",rules:[{required:!0,message:"请选择触发类型"}]}],expression:"[\n                'triggerType',\n                {\n                  initialValue: '2',\n                  rules: [{ required: true, message: '请选择触发类型'}]\n                }\n              ]"}],attrs:{placeholder:"请选择触发类型"},on:{change:e.handleChange}},e._l(e.triggerType,(function(a,r){return t("a-select-option",{key:r,attrs:{value:r}},[e._v(e._s(a.name))])})),1)],1)],1),t("a-col",{attrs:{lg:16,md:12,sm:12}},[t("a-form-item",{attrs:{label:"间隔时长"}},["2"===e.triggerTypeValue?t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["triggerInterval",{initialValue:"60",rules:[{required:!0,message:"请输入间隔时长"}]}],expression:"[\n                'triggerInterval',\n                {initialValue: '60',\n                 rules: [ { required: true, message: '请输入间隔时长'}]}\n              ]"}],staticStyle:{width:"-webkit-fill-available"},attrs:{placeholder:"请输入间隔时长(秒)",min:1}}):e._e(),"1"===e.triggerTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["triggerInterval",{rules:[{required:!0,message:"请输入间隔时长",whitespace:!0}]}],expression:"[\n                'triggerInterval',\n                {rules: [{ required: true, message: '请输入间隔时长', whitespace: true}]}\n              ]"}],attrs:{placeholder:"请输入间隔时长"},on:{click:e.handlerCron}}):e._e()],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:8,md:6,sm:12}},[t("a-form-item",{attrs:{label:"执行器类型"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["executorType",{initialValue:"1",rules:[{required:!0,message:"请选择执行器类型"}]}],expression:"[\n                'executorType',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请选择执行器类型'}]\n                }\n              ]"}],attrs:{placeholder:"请选择执行器类型"}},e._l(e.executorType,(function(a,r){return t("a-select-option",{key:r,attrs:{value:r}},[e._v(e._s(a.name))])})),1)],1)],1),t("a-col",{attrs:{lg:16,md:24,sm:24}},[t("a-form-item",{attrs:{label:"执行器名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["executorInfo",{rules:[{required:!0,message:"请输入执行器名称",whitespace:!0}]}],expression:"[\n                'executorInfo',\n                {rules: [{ required: true, message: '请输入执行器名称', whitespace: true}]}\n              ]"}],attrs:{placeholder:"请输入执行器名称",type:"textarea",rows:1}})],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:8,md:12,sm:24}},[t("a-form-item",{attrs:{label:"任务类型"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["taskType",{initialValue:e.taskTypeValue,rules:[{required:!0,message:"请选择任务类型"}]}],expression:"[\n                'taskType',\n                {\n                  initialValue: taskTypeValue,\n                  rules: [{ required: true, message: '请选择任务类型'}]\n                }\n              ]"}],attrs:{placeholder:"请选择任务类型"},on:{change:e.handleTaskTypeChange}},e._l(e.taskType,(function(a,r){return t("a-select-option",{key:r,attrs:{value:r}},[e._v(e._s(a.name))])})),1)],1)],1),t("a-col",{attrs:{lg:16,md:24,sm:24}},[t("a-form-item",{attrs:{label:"方法参数"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["argsStr",{rules:[{required:"3"===this.taskTypeValue,message:"请输入方法参数",whitespace:!0}]}],expression:"[\n                'argsStr',\n                {rules: [{ required: this.taskTypeValue === '3', message: '请输入方法参数', whitespace: true}]}\n              ]"}],attrs:{placeholder:"请输入方法参数",type:"textarea",rows:1},on:{click:e.handleBlur}})],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"超时时间(秒)"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["executorTimeout",{initialValue:"60",rules:[{required:!0,message:"请输入超时时间"}]}],expression:"[\n                'executorTimeout',\n                {\n                  initialValue: '60',\n                  rules: [{ required: true, message: '请输入超时时间'}]\n                }\n              ]"}],attrs:{id:"inputNumber",min:1,max:36e3}})],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"最大重试次数"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["maxRetryTimes",{initialValue:"3",rules:[{required:!0,message:"请输入最大重试次数"}]}],expression:"[\n                'maxRetryTimes',\n                {\n                  initialValue: '3',\n                  rules: [{ required: true, message: '请输入最大重试次数'}]\n                }\n              ]"}],attrs:{min:1}})],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"重试间隔(秒)"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["retryInterval",{initialValue:"1",rules:[{required:!0,message:"请输入重试间隔"}]}],expression:"[\n                'retryInterval',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请输入重试间隔'\n                  }]\n                }\n              ]"}],attrs:{min:1}})],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"并行数"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["parallelNum",{initialValue:"1",rules:[{required:!0,message:"请输入并行数"}]}],expression:"[\n                'parallelNum',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请输入并行数'}]\n                }\n              ]"}],attrs:{min:1}})],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}}),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:24,md:24,sm:24}},[t("a-form-item",{attrs:{label:"描述"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!1,max:256,message:"最多支持256个字符！"}]}],expression:"[\n                'description',\n                {rules: [{required: false, max: 256, message: '最多支持256个字符！'}]}\n              ]"}],attrs:{placeholder:"请输入描述",type:"textarea"}})],1)],1)],1),t("a-form-item",{staticStyle:{"text-align":"center"},attrs:{wrapperCol:{span:24}}},[t("a-button",{attrs:{htmlType:"submit",type:"primary"}},[e._v("提交")]),t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.reset}},[e._v("重置")])],1)],1)],1),t("a-modal",{attrs:{visible:e.visible,title:"分片参数",width:"500px"},on:{ok:function(t){return e.submitForm()},cancel:e.handlerCancel}},[t("a-form-model",{ref:"dynamicValidateForm",staticStyle:{"margin-left":"15%"},attrs:{model:e.dynamicValidateForm,layout:"vertical"}},[e._l(e.dynamicValidateForm.domains,(function(a,r){return t("a-form-model-item",{key:a.key,attrs:{label:"分片"+r,prop:"domains."+r+".value",rules:{required:!0,message:"分区参数不能为空",trigger:"blur"}}},[t("a-input",{staticStyle:{width:"80%","margin-right":"8px"},attrs:{placeholder:"请输入分区的参数"},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"domain.value"}}),e.dynamicValidateForm.domains.length>1?t("a-icon",{staticClass:"dynamic-delete-button",attrs:{type:"minus-circle-o",disabled:1===e.dynamicValidateForm.domains.length},on:{click:function(t){return e.removeDomain(a)}}}):e._e()],1)})),t("a-form-model-item",e._b({},"a-form-model-item",e.formItemLayoutWithOutLabel,!1),[t("a-button",{staticStyle:{width:"60%"},attrs:{type:"dashed"},on:{click:e.add}},[t("a-icon",{attrs:{type:"plus"}}),e._v(" 添加分片 ")],1)],1),t("a-form-model-item",{attrs:{"wrapper-col":{xs:{span:24,offset:0},sm:{span:16,offset:8},lg:{span:7}}}})],2)],1),t("cron-modal",{ref:"cronModalRef",on:{getCron:e.getCron}})],1)},i=[],n=(a("a434"),a("d81d"),a("a15b"),a("99af"),a("4de4"),a("d3b7"),a("25f0"),a("b64b"),a("159b"),a("0fea")),o=a("3b7a"),s=a("88bc"),l=a.n(s),u=a("6fb7"),c=a("6042"),d=a.n(c),m=a("41b2"),f=a.n(m),p=a("4d91"),h=a("4d26"),g=a.n(h),b=a("da05"),v=a("c005"),y=a.n(v),j=a("6a21"),w=a("2a95"),x=a("0644"),k=a.n(x),S=a("daa3"),F=a("b488"),O=a("9cba"),V=a("322e"),T=a("7b05");function C(){}function q(e,t,a){var r=e;t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,"");for(var i=t.split("."),n=0,o=i.length;n<o-1;++n){if(!r&&!a)break;var s=i[n];if(!(s in r)){if(a)throw new Error("please transfer a valid prop path to form item!");break}r=r[s]}return{o:r,k:i[n],v:r?r[i[n]]:null}}var N={id:p["a"].string,htmlFor:p["a"].string,prefixCls:p["a"].string,label:p["a"].any,help:p["a"].any,extra:p["a"].any,labelCol:p["a"].shape(b["a"]).loose,wrapperCol:p["a"].shape(b["a"]).loose,hasFeedback:p["a"].bool,colon:p["a"].bool,labelAlign:p["a"].oneOf(["left","right"]),prop:p["a"].string,rules:p["a"].oneOfType([Array,Object]),autoLink:p["a"].bool,required:p["a"].bool,validateStatus:p["a"].oneOf(["","success","warning","error","validating"])},_={name:"AFormModelItem",__ANT_NEW_FORM_ITEM:!0,mixins:[F["a"]],props:Object(S["t"])(N,{hasFeedback:!1,autoLink:!0}),inject:{configProvider:{default:function(){return O["a"]}},FormContext:{default:function(){return{}}}},data:function(){return{validateState:this.validateStatus,validateMessage:"",validateDisabled:!1,validator:{}}},computed:{fieldValue:function(){var e=this.FormContext.model;if(e&&this.prop){var t=this.prop;return-1!==t.indexOf(":")&&(t=t.replace(/:/g,".")),q(e,t,!0).v}},isRequired:function(){var e=this.getRules(),t=!1;return e&&e.length&&e.every((function(e){return!e.required||(t=!0,!1)})),t}},watch:{validateStatus:function(e){this.validateState=e}},mounted:function(){if(this.prop){var e=this.FormContext.addField;e&&e(this),this.initialValue=k()(this.fieldValue)}},beforeDestroy:function(){var e=this.FormContext.removeField;e&&e(this)},methods:{validate:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C;this.validateDisabled=!1;var r=this.getFilteredRule(e);if(!r||0===r.length)return a(),!0;this.validateState="validating";var i={};r&&r.length>0&&r.forEach((function(e){delete e.trigger})),i[this.prop]=r;var n=new w["a"](i);this.FormContext&&this.FormContext.validateMessages&&n.messages(this.FormContext.validateMessages);var o={};o[this.prop]=this.fieldValue,n.validate(o,{firstFields:!0},(function(e,r){t.validateState=e?"error":"success",t.validateMessage=e?e[0].message:"",a(t.validateMessage,r),t.FormContext&&t.FormContext.$emit&&t.FormContext.$emit("validate",t.prop,!e,t.validateMessage||null)}))},getRules:function(){var e=this.FormContext.rules,t=this.rules,a=void 0!==this.required?{required:!!this.required,trigger:"change"}:[],r=q(e,this.prop||"");return e=e?r.o[this.prop||""]||r.v:[],[].concat(t||e||[]).concat(a)},getFilteredRule:function(e){var t=this.getRules();return t.filter((function(t){return!t.trigger||""===e||(Array.isArray(t.trigger)?t.trigger.indexOf(e)>-1:t.trigger===e)})).map((function(e){return f()({},e)}))},onFieldBlur:function(){this.validate("blur")},onFieldChange:function(){this.validateDisabled?this.validateDisabled=!1:this.validate("change")},clearValidate:function(){this.validateState="",this.validateMessage="",this.validateDisabled=!1},resetField:function(){var e=this;this.validateState="",this.validateMessage="";var t=this.FormContext.model||{},a=this.fieldValue,r=this.prop;-1!==r.indexOf(":")&&(r=r.replace(/:/,"."));var i=q(t,r,!0);this.validateDisabled=!0,Array.isArray(a)?i.o[i.k]=[].concat(this.initialValue):i.o[i.k]=this.initialValue,this.$nextTick((function(){e.validateDisabled=!1}))}},render:function(){var e=this,t=arguments[0],a=this.$slots,r=this.$scopedSlots,i=Object(S["l"])(this),n=Object(S["g"])(this,"label"),o=Object(S["g"])(this,"extra"),s=Object(S["g"])(this,"help"),l={props:f()({},i,{label:n,extra:o,validateStatus:this.validateState,help:this.validateMessage||s,required:this.isRequired||i.required})},u=Object(S["c"])(r["default"]?r["default"]():a["default"]),c=u[0];if(this.prop&&this.autoLink&&Object(S["w"])(c)){var d=Object(S["i"])(c),m=d.blur,p=d.change;c=Object(T["a"])(c,{on:{blur:function(){m&&m.apply(void 0,arguments),e.onFieldBlur()},change:function(){if(Array.isArray(p))for(var t=0,a=p.length;t<a;t++)p[t].apply(p,arguments);else p&&p.apply(void 0,arguments);e.onFieldChange()}}})}return t(V["a"],l,[c,u.slice(1)])}},L={layout:p["a"].oneOf(["horizontal","inline","vertical"]),labelCol:p["a"].shape(b["a"]).loose,wrapperCol:p["a"].shape(b["a"]).loose,colon:p["a"].bool,labelAlign:p["a"].oneOf(["left","right"]),prefixCls:p["a"].string,hideRequiredMark:p["a"].bool,model:p["a"].object,rules:p["a"].object,validateMessages:p["a"].any,validateOnRuleChange:p["a"].bool},M=(p["a"].oneOfType([p["a"].string,p["a"].func]),p["a"].string,p["a"].boolean,p["a"].boolean,p["a"].number,p["a"].number,p["a"].number,p["a"].oneOfType([String,p["a"].arrayOf(String)]),p["a"].custom(y.a),p["a"].func,p["a"].func,{name:"AFormModel",props:Object(S["t"])(L,{layout:"horizontal",hideRequiredMark:!1,colon:!0,validateOnRuleChange:!1}),Item:_,created:function(){this.fields=[]},provide:function(){return{FormContext:this}},inject:{configProvider:{default:function(){return O["a"]}}},watch:{rules:function(){this.validateOnRuleChange&&this.validate((function(){}))}},computed:{vertical:function(){return"vertical"===this.layout}},methods:{addField:function(e){e&&this.fields.push(e)},removeField:function(e){e.prop&&this.fields.splice(this.fields.indexOf(e),1)},onSubmit:function(e){Object(S["k"])(this).submit?this.$emit("submit",e):e.preventDefault()},resetFields:function(){this.model?this.fields.forEach((function(e){e.resetField()})):Object(j["a"])(!1,"FormModel","model is required for resetFields to work.")},clearValidate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.length?"string"===typeof e?this.fields.filter((function(t){return e===t.prop})):this.fields.filter((function(t){return e.indexOf(t.prop)>-1})):this.fields;t.forEach((function(e){e.clearValidate()}))},validate:function(e){var t=this;if(this.model){var a=void 0;"function"!==typeof e&&window.Promise&&(a=new window.Promise((function(t,a){e=function(e){e?t(e):a(e)}})));var r=!0,i=0;0===this.fields.length&&e&&e(!0);var n={};return this.fields.forEach((function(a){a.validate("",(function(a,o){a&&(r=!1),n=f()({},n,o),"function"===typeof e&&++i===t.fields.length&&e(r,n)}))})),a||void 0}Object(j["a"])(!1,"FormModel","model is required for resetFields to work.")},validateField:function(e,t){e=[].concat(e);var a=this.fields.filter((function(t){return-1!==e.indexOf(t.prop)}));a.length?a.forEach((function(e){e.validate("",t)})):Object(j["a"])(!1,"FormModel","please pass correct props!")}},render:function(){var e,t=arguments[0],a=this.prefixCls,r=this.hideRequiredMark,i=this.layout,n=this.onSubmit,o=this.$slots,s=this.configProvider.getPrefixCls,l=s("form",a),u=g()(l,(e={},d()(e,l+"-horizontal","horizontal"===i),d()(e,l+"-vertical","vertical"===i),d()(e,l+"-inline","inline"===i),d()(e,l+"-hide-required-mark",r),e));return t("form",{on:{submit:n},class:u},[o["default"]])}}),I=M,R=a("38b7"),D={name:"JobFrom",components:{CronModal:u["a"],AFormModel:I,AFormModelItem:_},props:{},data:function(){return{form:this.$form.createForm(this),formItemLayout:{labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},formItemLayoutWithOutLabel:{wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},formType:"create",groupNameList:[],jobStatusEnum:R.jobStatusEnum,taskType:R.taskType,triggerType:R.triggerType,blockStrategy:R.blockStrategy,executorType:R.executorType,routeKey:R.routeKey,loading:!1,visible:!1,count:0,triggerTypeValue:"2",taskTypeValue:"1",argsStrValue:[],dynamicValidateForm:{domains:[]}}},beforeCreate:function(){},mounted:function(){var e=this;Object(n["j"])().then((function(t){e.groupNameList=t.data})),this.$nextTick((function(){var t=e.$route.query.id;t&&(e.loading=!0,Object(o["b"])(t).then((function(t){e.loadEditInfo(t.data),e.loading=!1})))}))},methods:{handleChange:function(e){this.triggerTypeValue=e,this.form.setFieldsValue({triggerInterval:null})},handleTaskTypeChange:function(e){this.taskTypeValue=e},handlerCron:function(){var e=this.form.getFieldValue("triggerType");if("1"===e){var t=this.form.getFieldValue("triggerInterval");null!==t&&""!==t||(t="* * * * * ?"),this.$refs.cronModalRef.isShow(t)}},removeDomain:function(e){var t=this.dynamicValidateForm.domains.indexOf(e);-1!==t&&this.dynamicValidateForm.domains.splice(t,1)},add:function(){this.dynamicValidateForm.domains.push({value:"",key:Date.now()})},handleBlur:function(){var e=this.form.getFieldValue("taskType");"3"===e&&(this.visible=!this.visible)},getCron:function(e){this.form.setFieldsValue({triggerInterval:e})},submitForm:function(){var e=this,t=this.form;this.$refs["dynamicValidateForm"].validate((function(a){if(!a)return!1;e.argsStrValue=e.dynamicValidateForm.domains.map((function(e,t){return e.value})),t.setFieldsValue({argsStr:e.dynamicValidateForm.domains.map((function(e,t){return"分区:".concat(t,"=>").concat(e.value)})).join("; ")}),e.visible=!e.visible}))},handleOk:function(e){var t=this,a=this.form;e.preventDefault(),this.dynamicForm.validateFields((function(e,r){e||(t.argsStrValue=r["sharding"],a.setFieldsValue({argsStr:t.argsStrValue.filter((function(e){return e})).map((function(e,t){return"分区:".concat(t,"=>").concat(e)})).join("; ")}),t.visible=!1)}))},handlerCancel:function(){this.visible=!1},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||("3"===t.taskTypeValue&&(a["argsStr"]=JSON.stringify(t.argsStrValue)),"create"===t.formType?Object(o["l"])(a).then((function(e){t.$message.success("任务新增完成"),t.form.resetFields(),t.$router.go(-1)})):Object(o["q"])(a).then((function(e){t.$message.success("任务更新完成"),t.form.resetFields(),t.$router.go(-1)})))}))},loadEditInfo:function(e){var t=this;this.formType="edit";var a=this.form;new Promise((function(e){setTimeout(e,100)})).then((function(){var r=l()(e,["id","jobName","groupName","jobStatus","executorInfo","argsStr","executorTimeout","description","maxRetryTimes","parallelNum","retryInterval","triggerType","blockStrategy","executorType","taskType","triggerInterval"]);r.jobStatus=r.jobStatus.toString(),r.taskType=r.taskType.toString(),r.executorType=r.executorType.toString(),r.blockStrategy=r.blockStrategy.toString(),r.triggerType=r.triggerType.toString(),t.triggerTypeValue=r.triggerType,t.taskTypeValue=r.taskType,"3"===t.taskTypeValue&&(t.argsStrValue=JSON.parse(r.argsStr),r.argsStr=t.argsStrValue.map((function(e,t){return"分区:".concat(t,"=>").concat(e)})).join(";"),t.argsStrValue.forEach((function(e,a){t.dynamicValidateForm.domains.push({value:e,key:Date.now()+a})}))),a.setFieldsValue(r)}))},reset:function(){this.form.resetFields(),this.dynamicForm.resetFields()}}},A=D,J=a("2877"),$=Object(J["a"])(A,r,i,!1,null,null,null);t["default"]=$.exports}}]);