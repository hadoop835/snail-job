(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1136b4c6"],{"430f":function(t,e,n){"use strict";n("f8f4")},"71bc":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("80ab"),n("a98c"),n("3dec"),n("e73f"),n("0c40"),n("79da");function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}},"8f70":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-spin",{attrs:{spinning:t.spinning,tip:"工作流加载中"}},[n("a-icon",{staticStyle:{"font-size":"18px",top:"39%"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"}),n("iframe",{ref:"iframe",style:"width: 100%;height:calc(99vh - 60px)",attrs:{src:("production"===t.mode?t.baseUrl:"")+"/lib/index.html?id="+t.id+"&mode="+t.mode+"&x1c2Hdd6="+t.value,marginwidth:"0",frameborder:"no"}})],1)},i=[],s=n("71bc"),a={name:"WorkFlow",components:{},props:{value:{type:String,default:""}},data:function(){var t=this.$createElement;return{id:"",spinning:!0,mode:"production",baseUrl:"/easy-retry",indicator:t("a-icon",{attrs:{type:"loading",spin:!0},style:"font-size: 18px"})}},mounted:function(){this.iframeLoad(),this.id=this.$route.query.id},created:function(){window.addEventListener("message",this.handleMessage,!1)},destroyed:function(){window.removeEventListener("message",this.handleMessage)},methods:{save:function(){window.removeEventListener("message",this.handleMessage),this.$message.info("工作流新增成功"),this.$router.push({path:"/job/workflow/list"})},cancel:function(){window.removeEventListener("message",this.handleMessage),this.$router.push({path:"/job/workflow/list"})},update:function(){this.$message.info("工作流修改成功"),this.$router.push({path:"/job/workflow/list"})},handleMessage:function(t){"object"===Object(s["a"])(t.data)&&("SV5ucvLBhvFkOftb"===t.data.code?this.save():"kb4DO9h6WIiqFhbp"===t.data.code?this.cancel():"8Rr3XPtVVAHfduQg"===t.data.code&&this.update())},iframeLoad:function(){var t=this,e=this.$refs.iframe;e.attachEvent?e.attachEvent("onload",(function(){t.spinning=!1})):e.onload=function(){t.spinning=!1}}}},r=a,c=(n("430f"),n("f7c6")),u=Object(c["a"])(r,o,i,!1,null,null,null);e["a"]=u.exports},e9f5:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("work-flow",{attrs:{value:"wA4wN1nZ"}})},i=[],s=n("8f70"),a={name:"WorkFlowEdit",components:{WorkFlow:s["a"]}},r=a,c=n("f7c6"),u=Object(c["a"])(r,o,i,!1,null,null,null);e["default"]=u.exports},f8f4:function(t,e,n){}}]);