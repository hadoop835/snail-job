(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b85f358"],{"38b7":function(t,o){var e={jobStatusEnum:{0:{name:"关闭",color:"#9c1f1f"},1:{name:"开启",color:"#f5a22d"}},taskType:{1:{name:"集群模式",color:"#d06892"},2:{name:"广播模式",color:"#f5a22d"},3:{name:"分片模式",color:"#e1f52d"}},triggerType:{1:{name:"CRON表达式",color:"#d06892"},2:{name:"固定时间",color:"#f5a22d"}},blockStrategy:{1:{name:"丢弃策略",color:"#d06892"},2:{name:"覆盖",color:"#f5a22d"},3:{name:"并行",color:"#e1f52d"}},executorType:{1:{name:"Java",color:"#d06892"}},routeKey:{4:{name:"轮询",color:"#8f68d2"},1:{name:"一致性Hash",color:"#d06892"},2:{name:"随机",color:"#f5a22d"},3:{name:"LRU",color:"#e1f52d"}},taskBatchStatus:{1:{name:"待处理",color:"#64a6ea"},2:{name:"运行中",color:"#1b7ee5"},3:{name:"成功",color:"#087da1"},4:{name:"失败",color:"#f52d80"},5:{name:"停止",color:"#ac2df5"},6:{name:"取消",color:"#f5732d"}},operationReason:{0:{name:""},1:{name:"执行超时",color:"#64a6ea"},2:{name:"无客户端节点",color:"#1b7ee5"},3:{name:"任务已关闭",color:"#087da1"},4:{name:"任务丢弃",color:"#3a2f81"},5:{name:"任务被覆盖",color:"#c2238a"},6:{name:"无可执行任务项",color:"#23c28a"},7:{name:"任务执行期间发生非预期异常",color:"#bdc223"}},taskStatus:{2:{name:"运行中",color:"#1b7ee5"},3:{name:"成功",color:"#087da1"},4:{name:"失败",color:"#f52d80"},5:{name:"停止",color:"#ac2df5"}}};t.exports=e},"3b7a":function(t,o,e){"use strict";e.d(o,"g",(function(){return n})),e.d(o,"j",(function(){return s})),e.d(o,"a",(function(){return c})),e.d(o,"l",(function(){return b})),e.d(o,"f",(function(){return i})),e.d(o,"h",(function(){return u})),e.d(o,"e",(function(){return l})),e.d(o,"d",(function(){return m})),e.d(o,"c",(function(){return d})),e.d(o,"b",(function(){return f})),e.d(o,"i",(function(){return p})),e.d(o,"k",(function(){return j}));var a=e("b775"),r={jobList:"/job/list",jobDetail:"/job/",saveJob:"/job/",updateJob:"/job/",updateJobStatus:"/job/status",delJob:"/job/",timeByCron:"/job/cron",jobNameList:"/job/job-name/list",jobBatchList:"/job/batch/list",jobBatchDetail:"/job/batch/",jobTaskList:"/job/task/list",jobLogList:"/job/log/list"};function n(t){return Object(a["b"])({url:r.jobNameList,method:"get",params:t})}function s(t){return Object(a["b"])({url:r.timeByCron,method:"get",params:t})}function c(t){return Object(a["b"])({url:r.delJob+t,method:"delete"})}function b(t){return Object(a["b"])({url:r.updateJobStatus,method:"put",data:t})}function i(t){return Object(a["b"])({url:r.jobLogList,method:"get",params:t})}function u(t){return Object(a["b"])({url:r.jobTaskList,method:"get",params:t})}function l(t){return Object(a["b"])({url:r.jobBatchList,method:"get",params:t})}function m(t){return Object(a["b"])({url:r.jobBatchDetail+t,method:"get"})}function d(t){return Object(a["b"])({url:r.jobList,method:"get",params:t})}function f(t){return Object(a["b"])({url:r.jobDetail+t,method:"get"})}function p(t){return Object(a["b"])({url:r.saveJob,method:"post",data:t})}function j(t){return Object(a["b"])({url:r.updateJob,method:"put",data:t})}},6289:function(t,o,e){"use strict";e.r(o);e("b0c0");var a=function(){var t=this,o=t._self._c;return o("div",[o("page-header-wrapper",{staticStyle:{margin:"-24px -1px 0"},on:{back:function(){return t.$router.go(-1)}}},[o("div")]),null!==t.jobInfo?o("a-card",{attrs:{bordered:!1}},[o("a-descriptions",{attrs:{title:"",column:4,bordered:""}},[o("a-descriptions-item",{attrs:{label:"组名称"}},[t._v(" "+t._s(t.jobInfo.groupName)+" ")]),o("a-descriptions-item",{attrs:{label:"任务名称"}},[t._v(" "+t._s(t.jobInfo.jobName)+" ")]),o("a-descriptions-item",{attrs:{label:"重试状态"}},[o("a-tag",{attrs:{color:t.jobStatusEnum[t.jobInfo.jobStatus].color}},[t._v(" "+t._s(t.jobStatusEnum[t.jobInfo.jobStatus].name)+" ")])],1),o("a-descriptions-item",{attrs:{label:"路由策略"}},[o("a-tag",{attrs:{color:t.routeKey[t.jobInfo.routeKey].color}},[t._v(" "+t._s(t.routeKey[t.jobInfo.routeKey].name)+" ")])],1),o("a-descriptions-item",{attrs:{label:"阻塞策略"}},[o("a-tag",{attrs:{color:t.blockStrategy[t.jobInfo.blockStrategy].color}},[t._v(" "+t._s(t.blockStrategy[t.jobInfo.blockStrategy].name)+" ")])],1),o("a-descriptions-item",{attrs:{label:"并行数"}},[t._v(" "+t._s(t.jobInfo.parallelNum)+" ")]),o("a-descriptions-item",{attrs:{label:"最大重试次数"}},[t._v(" "+t._s(t.jobInfo.maxRetryTimes)+"次 ")]),o("a-descriptions-item",{attrs:{label:"重试间隔"}},[t._v(" "+t._s(t.jobInfo.retryInterval)+"(秒) ")]),o("a-descriptions-item",{attrs:{label:"超时时间"}},[t._v(" "+t._s(t.jobInfo.executorTimeout)+"(秒) ")]),o("a-descriptions-item",{attrs:{label:"下次触发时间"}},[t._v(" "+t._s(t.jobInfo.nextTriggerAt)+" ")]),o("a-descriptions-item",{attrs:{label:"更新时间",span:"4"}},[t._v(" "+t._s(t.jobInfo.updateDt)+" ")]),o("a-descriptions-item",{attrs:{label:"触发类型",span:"1"}},[o("a-tag",{attrs:{color:t.triggerType[t.jobInfo.triggerType].color}},[t._v(" "+t._s(t.triggerType[t.jobInfo.triggerType].name)+" ")])],1),o("a-descriptions-item",{attrs:{label:"间隔时长",span:"4"}},[t._v(" "+t._s(t.jobInfo.triggerInterval)+" ")]),o("a-descriptions-item",{attrs:{label:"执行器类型"}},[o("a-tag",{attrs:{color:t.executorType[t.jobInfo.executorType].color}},[t._v(" "+t._s(t.executorType[t.jobInfo.executorType].name)+" ")])],1),o("a-descriptions-item",{attrs:{label:"执行器名称",span:"4"}},[t._v(" "+t._s(t.jobInfo.executorInfo)+" ")]),o("a-descriptions-item",{attrs:{label:"任务类型"}},[o("a-tag",{attrs:{color:t.taskType[t.jobInfo.taskType].color}},[t._v(" "+t._s(t.taskType[t.jobInfo.taskType].name)+" ")])],1),o("a-descriptions-item",{attrs:{label:"参数",span:"4"}},[t._v(" "+t._s(t.jobInfo.argsStr)+" ")]),o("a-descriptions-item",{attrs:{label:"描述",span:"4"}},[t._v(" "+t._s(t.jobInfo.extAttrs)+" ")])],1)],1):t._e()],1)},r=[],n=e("3b7a"),s=e("c1df"),c=e.n(s),b=e("38b7"),i=e.n(b),u={name:"JobInfo",components:{},data:function(){return{jobInfo:null,jobStatusEnum:i.a.jobStatusEnum,taskType:i.a.taskType,triggerType:i.a.triggerType,blockStrategy:i.a.blockStrategy,executorType:i.a.executorType,routeKey:i.a.routeKey}},created:function(){var t=this,o=this.$route.query.id,e=this.$route.query.groupName;o&&e?Object(n["b"])(o).then((function(o){t.jobInfo=o.data})):this.$router.push({path:"/404"})},methods:{parseDate:function(t){return c()(t).format("YYYY-MM-DD HH:mm:ss")}}},l=u,m=e("2877"),d=Object(m["a"])(l,a,r,!1,null,"7719464a",null);o["default"]=d.exports}}]);