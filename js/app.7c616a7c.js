(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},a={app:0},o=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-cnode/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("64a9"),a=s.n(n);a.a},"04d1":function(t,e,s){},"0995":function(t,e,s){},1:function(t,e){},1724:function(t,e,s){},"1f43":function(t,e,s){"use strict";var n=s("c165"),a=s.n(n);a.a},"1fdb":function(t,e,s){"use strict";var n=s("3b9b"),a=s.n(n);a.a},2028:function(t,e,s){},2949:function(t,e,s){"use strict";var n=s("bc58"),a=s.n(n);a.a},"311a":function(t,e,s){"use strict";var n=s("5c9f"),a=s.n(n);a.a},"317b":function(t,e,s){"use strict";var n=s("eea9"),a=s.n(n);a.a},"3b9b":function(t,e,s){},"3e8e":function(t,e,s){},4039:function(t,e,s){"use strict";var n=s("d9bd"),a=s.n(n);a.a},"40c4":function(t,e,s){"use strict";var n=s("0995"),a=s.n(n);a.a},4678:function(t,e,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="4678"},"4c41":function(t,e,s){"use strict";var n=s("7d0c"),a=s.n(n);a.a},"4ce7":function(t,e,s){"use strict";var n=s("d253"),a=s.n(n);a.a},"4d71":function(t,e,s){},"536c":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header",{staticClass:"header"}),s("div",{staticClass:"container"},[s("router-view")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"container"},[n("header",[n("div",{staticClass:"logo-search"},[n("a",{staticClass:"logo",attrs:{href:"#"}},[n("router-link",{attrs:{to:{name:"home"}}},[n("img",{attrs:{src:s("cd4b"),alt:"cnode"}})])],1)]),n("nav",[t.$store.getters.isLogin?n("ul",[n("li",[n("router-link",{attrs:{to:{name:"messages"}}},[t.$store.state.messageCount>0?n("span",{staticClass:"message-count"},[t._v(t._s(t.$store.state.messageCount))]):t._e(),t._v("  未读消息\n                        ")])],1),n("li",[n("router-link",{attrs:{to:{name:"create"}}},[t._v("发布话题")])],1),n("li",[n("router-link",{attrs:{to:{name:"home"}},nativeOn:{click:function(e){return t.exit(e)}}},[t._v("退出")])],1)]):n("ul",[n("li",[n("router-link",{attrs:{to:{name:"home"}}},[t._v("\n                            首页\n                        ")])],1),n("li",[n("router-link",{attrs:{to:{name:"login"}}},[t._v("登录")])],1)])])])])])},i=[],c={name:"Header",methods:{exit:function(){this.$store.commit("exit"),this.$message.info({message:"已登出",duration:1e3})}}},l=c,u=(s("cc9f"),s("2877")),d=Object(u["a"])(l,r,i,!1,null,"3f17c5ad",null),p=d.exports,f={components:{Header:p}},m=f,h=(s("034f"),Object(u["a"])(m,a,o,!1,null,null,null)),v=h.exports,g=s("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"home-container"},[n("div",{staticClass:"home"},[n("nav",[n("ul",[n("li",[n("router-link",{class:{active:void 0===t.$route.query.tab||"all"===t.$route.query.tab},attrs:{to:{name:"home",query:{tab:"all"}}}},[t._v("全部")])],1),n("li",[n("router-link",{attrs:{to:{name:"home",query:{tab:"good"}}}},[t._v("精华")])],1),n("li",[n("router-link",{attrs:{to:{name:"home",query:{tab:"share"}}}},[t._v("分享")])],1),n("li",[n("router-link",{attrs:{to:{name:"home",query:{tab:"ask"}}}},[t._v("问答")])],1),n("li",[n("router-link",{attrs:{to:{name:"home",query:{tab:"job"}}}},[t._v("招聘")])],1)])]),n("PostList",{attrs:{page:t.$route.query.page?t.$route.query.page:1,tab:t.$route.query.tab?t.$route.query.tab:"all"}}),n("s-page",{staticClass:"pages",attrs:{total:t.total,"page-size":20,"current-page":t.page},on:{"current-page":t.handleCurrentPage,"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})],1),n("div",{staticClass:"sideBarList"},[t.$store.getters.isLogin?n("UserIntro",{attrs:{author:t.$store.state.user,title:"个人信息"}}):n("Login")],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loaded,expression:"!loaded"}],staticClass:"loading"},[n("img",{attrs:{src:s("ccd9"),alt:""}})])])},_=[],j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-list"},t._l(t.posts,function(t){return s("Post",{key:t.id,attrs:{post:t}})}),1)},k=[],y=s("bc3a"),C=s.n(y),$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.post?s("div",{staticClass:"post"},[s("router-link",{attrs:{to:{name:"user",params:{id:t.post.author.loginname}}}},[s("img",{staticClass:"author-avatar",attrs:{src:t.post.author.avatar_url,alt:"post.author.loginname"}})]),void 0!==t.post.reply_count&&void 0!==t.post.visit_count?s("span",{staticClass:"count"},[s("span",{staticClass:"reply-count"},[t._v(t._s(t.post.reply_count))]),t._v("\n                    /\n                    "),s("span",{staticStyle:{"font-size":"10px",color:"#b4b4b4"}},[t._v(t._s(t.post.visit_count))])]):t._e(),t.tab(t.post)?s("div",{staticClass:"tab",style:{backgroundColor:t.post.top||t.post.good?"#80bd01":"#e5e5e5",color:t.post.top||t.post.good?"white":"#999"}},[t._v(t._s(t.tab(t.post)))]):t._e(),s("span",{staticClass:"title",staticStyle:{display:"inline-block","margin-left":"10px"}},[s("router-link",{attrs:{to:{name:"topic",params:{id:t.post.id}}}},[t._v(t._s(t.post.title))])],1),s("span",{staticClass:"last-reply-time"},[s("span",[t._v(t._s(t._f("fromNow")(t.post.last_reply_at)))])])],1):t._e()},x=[],w={name:"Post",props:{post:{type:Object}},data:function(){return{map:{share:"分享",ask:"问答",job:"招聘"}}},methods:{tab:function(t){return t.top?"置顶":t.good?"精华":this.map[t.tab]}}},S=w,O=(s("61b7"),Object(u["a"])(S,$,x,!1,null,"e7ea576e",null)),I=O.exports,T={name:"PostList",components:{Post:I},props:["page","tab"],inject:["HomeView"],data:function(){return{posts:[]}},methods:{getData:function(){var t=this;C.a.get("https://cnodejs.org/api/v1/topics?tab=".concat(this.tab,"&page=").concat(this.page)).then(function(e){t.posts=e.data.data,t.HomeView.$emit("loaded")})}},watch:{page:function(){this.getData()},tab:function(){this.getData()}},created:function(){this.getData()}},E=T,L=(s("ff83"),Object(u["a"])(E,j,k,!1,null,"0cf30f4c",null)),z=L.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("SideBar",{scopedSlots:t._u([{key:"header",fn:function(){return[s("p",[t._v("CNode：Node.js专业中文社区")])]},proxy:!0},{key:"content",fn:function(){return[s("p",{staticClass:"info"},[t._v("您可以通过access-token "),s("router-link",{attrs:{to:{name:"login"}}},[t._v("登录")])],1)]},proxy:!0}])})],1)},N=[],U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("header",[t._t("header")],2),s("main",[t._t("content")],2)])},B=[],q={name:"SideBar"},M=q,D=(s("bc80"),Object(u["a"])(M,U,B,!1,null,"301c26f4",null)),R=D.exports,H={name:"SideBarLogin",components:{SideBar:R}},A=H,V=(s("40c4"),Object(u["a"])(A,P,N,!1,null,"2b1fd737",null)),G=V.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.author?s("SideBar",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n        "+t._s(t.title)+"\n    ")]},proxy:!0},{key:"content",fn:function(){return[s("div",[t.author?s("div",{staticClass:"author"},[s("router-link",{attrs:{to:{name:"user",params:{id:t.author.loginname}}}},[s("img",{staticClass:"avatar",attrs:{src:t.author.avatar_url,alt:t.author.loginname}})]),s("router-link",{attrs:{to:{name:"user",params:{id:t.author.loginname}}}},[s("span",{attrs:{href:"#"}},[t._v(t._s(t.author.loginname))])])],1):t._e(),t.author?s("p",{staticClass:"score"},[t._v("积分: "+t._s(t.author.score))]):t._e()])]},proxy:!0}],null,!1,2434685899)}):t._e()},F=[],K={name:"UserIntro",components:{SideBar:R},props:["author","title"]},Q=K,W=(s("1fdb"),Object(u["a"])(Q,J,F,!1,null,"2a12e464",null)),X=W.exports,Y={name:"home",components:{UserIntro:X,Login:G,PostList:z},provide:function(){return{HomeView:this}},data:function(){return{total:1e4,page:1,loaded:!1}},watch:{"$route.query.tab":function(){this.page=1}},methods:{handleCurrentPage:function(t){this.$router.push({name:"home",query:{tab:this.$route.query.tab,page:t}})}},created:function(){var t=this;this.$on("loaded",function(){t.loaded=!0})}},Z=Y,tt=(s("311a"),Object(u["a"])(Z,b,_,!1,null,"00ca15cf",null)),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.topic?s("div",{staticClass:"topic"},[s("main",[s("Article",{attrs:{topic:t.topic}}),s("CommentList",{staticClass:"comment-list",attrs:{replies:t.topic.replies}}),t.$store.getters.isLogin?s("div",{staticClass:"reply"},[s("h3",{staticStyle:{padding:"15px"}},[t._v("回复")]),s("s-form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleInline}},[s("s-form-item",{staticClass:"editor",attrs:{prop:"editor"}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formInline.editor,expression:"formInline.editor"}],attrs:{id:"markdown-editor"},domProps:{value:t.formInline.editor},on:{input:function(e){e.target.composing||t.$set(t.formInline,"editor",e.target.value)}}})]),s("s-form-item",{staticClass:"btn"},[s("s-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formInline")}}},[t._v("回复")])],1)],1)],1):t._e()],1),s("div",{staticClass:"sideBarList"},[s("UserIntro",{staticStyle:{"margin-top":"0"},attrs:{author:t.author,title:"作者"}}),s("SideBar",{staticClass:"other-topics",scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n                作者其它话题\n            ")]},proxy:!0},{key:"content",fn:function(){return[t.author?s("ul",t._l(t.author.recent_topics.slice(0,5),function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:{name:"topic",params:{id:e.id}}}},[t._v(t._s(e.title))])],1)}),0):t._e()]},proxy:!0}],null,!1,1733614175)}),s("NoReplies")],1)]):t._e()},nt=[],at=(s("7f7f"),s("ebfb")),ot=s.n(at),rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.topic?s("div",{staticClass:"article"},[s("header",{staticClass:"article-header"},[s("h1",{staticClass:"title"},[t.tab?s("span",{staticClass:"tab"},[t._v(t._s(t.tab))]):t._e(),t._v("\n                "+t._s(t.topic.title)+"\n            ")]),s("div",{staticClass:"info"},[s("span",[t._v("发布于 "+t._s(t._f("fromNow")(t.topic.create_at)))]),s("span",[t._v("作者 "+t._s(t.topic.author.loginname))]),s("span",[t._v(t._s(t.topic.visit_count)+" 次浏览")]),s("span",[t._v("来自 "+t._s(t.map[t.topic.tab]))])]),s("br"),t.$store.getters.isLogin?s("div",{staticStyle:{"margin-top":"10px"}},[t.isCollect?s("button",{staticClass:"cancel-collect",on:{click:t.cancelCollect}},[t._v("取消收藏")]):s("button",{staticClass:"collect",on:{click:t.collect}},[t._v("收藏")])]):t._e()]),s("div",{staticClass:"markdown-body article-content",domProps:{innerHTML:t._s(t.topic.content)}})]):t._e()},it=[],ct=(s("6762"),s("2fdb"),s("e4cb"),{name:"Article",props:{topic:{type:Object}},data:function(){return{loaded:!1,map:{share:"分享",ask:"问答",job:"招聘"}}},computed:{tab:function(){return this.topic.top?"置顶":this.topic.good?"精华":""},isCollect:function(){return this.$store.state.collections.map(function(t){return t.id}).includes(this.topic.id)}},methods:{collect:function(){var t=this;C.a.post("https://cnodejs.org/api/v1/topic_collect/collect",{accesstoken:this.$store.state.accessToken,topic_id:this.topic.id}).then(function(){return C.a.get("https://cnodejs.org/api/v1/topic_collect/".concat(t.$store.state.user.loginname))}).then(function(e){return t.$store.commit("updateCollections",e.data.data)})},cancelCollect:function(){var t=this;C.a.post("https://cnodejs.org/api/v1/topic_collect/de_collect",{accesstoken:this.$store.state.accessToken,topic_id:this.topic.id}).then(function(){return C.a.get("https://cnodejs.org/api/v1/topic_collect/".concat(t.$store.state.user.loginname))}).then(function(e){return t.$store.commit("updateCollections",e.data.data)})}},created:function(){}}),lt=ct,ut=(s("e7f4"),Object(u["a"])(lt,rt,it,!1,null,"b970dd06",null)),dt=ut.exports,pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment-list"},[s("header",[t._v(t._s(t.replies.length)+" 回复")]),t._l(t.replies,function(t,e){return s("Comment",{key:t.id,staticClass:"comment",attrs:{reply:t,layer:e+1}})})],2)},ft=[],mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment"},[s("div",{staticClass:"title"},[s("router-link",{attrs:{to:{name:"user",params:{id:t.reply.author.loginname}}}},[s("img",{attrs:{src:t.reply.author.avatar_url,alt:t.reply.author.loginname}})]),s("span",{staticClass:"time"},[s("span",{staticClass:"name"},[t._v(t._s(t.reply.author.loginname))]),s("span",[t._v(t._s(t.layer)+"楼•"+t._s(t._f("fromNow")(t.reply.create_at)))])]),s("span",{staticClass:"like"},[s("i",{staticClass:"iconfont icon-like",on:{click:t.like}}),s("span",[t._v(t._s(t.reply.ups.length))])])],1),s("div",{staticClass:"content markdown-body",domProps:{innerHTML:t._s(t.reply.content)}})])},ht=[],vt=(s("c5f6"),{name:"Comment",props:{reply:{type:Object},layer:{type:Number}},methods:{like:function(){this.$message({type:"error",message:"点赞的接口已被cnode社区下线，所以该功能暂时无法使用",duration:1e3})}}}),gt=vt,bt=(s("1f43"),Object(u["a"])(gt,mt,ht,!1,null,"fa082e78",null)),_t=bt.exports,jt={name:"CommentList",components:{Comment:_t},props:{replies:{type:Array}}},kt=jt,yt=(s("a218"),Object(u["a"])(kt,pt,ft,!1,null,"830edcfe",null)),Ct=yt.exports,$t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.topics?s("SideBar",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n        无人回复的话题\n    ")]},proxy:!0},{key:"content",fn:function(){return[s("ul",{staticClass:"list"},t._l(t.noReplyTopics,function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:{name:"topic",params:{id:e.id}}}},[t._v(t._s(e.title))])],1)}),0)]},proxy:!0}],null,!1,2156873818)}):t._e()},xt=[],wt={name:"NoReplies",components:{SideBar:R},data:function(){return{topics:[]}},computed:{noReplyTopics:function(){return this.topics.filter(function(t){return 0===t.reply_count}).slice(0,5)}},created:function(){var t=this;C.a.get("https://cnodejs.org/api/v1/topics").then(function(e){t.topics=e.data.data})}},St=wt,Ot=(s("4ce7"),Object(u["a"])(St,$t,xt,!1,null,"70d56870",null)),It=Ot.exports,Tt={name:"Topic",components:{UserIntro:X,NoReplies:It,CommentList:Ct,SideBar:R,Article:dt},data:function(){return{topic:null,author:null,formInline:{editor:""},simplemde:null,ruleInline:{editor:[{required:!0,message:"必需填写内容",trigger:"change"}]}}},methods:{getData:function(){var t=this;C.a.get("https://cnodejs.org/api/v1/topic/".concat(this.$route.params.id)).then(function(e){return t.topic=e.data.data,C.a.get("https://cnodejs.org/api/v1/user/".concat(t.topic.author.loginname))}).then(function(e){t.author=e.data.data,t.simplemde=new ot.a({element:document.getElementById("markdown-editor")})})},publish:function(){this.$message({type:"error",message:"回复的接口已被cnode社区下线，所以该功能暂时无法使用",duration:1e3})},handleSubmit:function(t){this.$refs[t].validate(this.publish,this.publish)}},watch:{$route:function(t,e){this.getData()}},created:function(){this.getData()}},Et=Tt,Lt=(s("56d9"),Object(u["a"])(Et,st,nt,!1,null,"615dfaa0",null)),zt=Lt.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoaded,expression:"isLoaded"}],staticClass:"user-view"},[t.author?n("User",{attrs:{user:t.author}}):t._e(),n("div",{staticClass:"sideBarList"},[n("UserIntro",{attrs:{author:t.author,title:"个人信息"}})],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoaded,expression:"!isLoaded"}],staticClass:"loading"},[n("img",{attrs:{src:s("ccd9"),alt:""}})])])},Nt=[],Ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user"},[s("UserHome",{attrs:{author:t.user,topics:t.topics}}),s("UserTopics",{staticClass:"user-topics",attrs:{posts:t.user.recent_topics},scopedSlots:t._u([{key:"header",fn:function(){return[s("p",[t._v("最近创建的话题")])]},proxy:!0}])}),s("UserTopics",{staticClass:"user-topics",attrs:{posts:t.user.recent_replies},scopedSlots:t._u([{key:"header",fn:function(){return[s("p",[t._v("最近参与的话题")])]},proxy:!0}])})],1)},Bt=[],qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-page"},[s("header",[s("router-link",{staticClass:"home-link",attrs:{to:"/"}},[t._v("主页")]),t._v("\n        /\n    ")],1),s("main",[s("div",{staticClass:"author"},[s("img",{staticClass:"avatar",attrs:{src:t.author.avatar_url,alt:t.author.loginname}}),s("span",{attrs:{href:"#"}},[t._v(t._s(t.author.loginname))])]),t.author?s("p",{staticClass:"score"},[t._v("积分: "+t._s(t.author.score))]):t._e(),t.topics?s("router-link",{attrs:{to:{name:"collections",params:{user:t.author.loginname}}}},[t._v(t._s(t.topics.length)+"个话题收藏")]):t._e(),s("p",[t._v("注册时间 "+t._s(t._f("fromNow")(t.author.create_at)))])],1)])},Mt=[],Dt={name:"UserHome",props:{author:{type:Object},topics:{type:Array}},data:function(){return{collectTopics:0}}},Rt=Dt,Ht=(s("b240"),Object(u["a"])(Rt,qt,Mt,!1,null,"93d5c76a",null)),At=Ht.exports,Vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-topics"},[s("header",[t._t("header")],2),s("main",t._l(t.posts,function(t){return s("Post",{key:t.id,staticClass:"post",attrs:{post:t}})}),1)])},Gt=[],Jt={name:"UserTopics",components:{Post:I},props:{posts:{type:Array}}},Ft=Jt,Kt=(s("4039"),Object(u["a"])(Ft,Vt,Gt,!1,null,"f5ea7a76",null)),Qt=Kt.exports,Wt={name:"User",components:{UserTopics:Qt,UserHome:At},inject:["UserView"],props:{user:{type:Object}},data:function(){return{topics:[]}},watch:{user:function(){this.getData()}},methods:{getData:function(){var t=this;C.a.get("https://cnodejs.org/api/v1/topic_collect/".concat(this.user.loginname)).then(function(e){return t.topics=e.data.data}).then(function(){return t.UserView.$emit("loaded")})}},created:function(){this.getData()}},Xt=Wt,Yt=(s("2949"),Object(u["a"])(Xt,Ut,Bt,!1,null,"142623b4",null)),Zt=Yt.exports,te={name:"UserView",components:{UserIntro:X,User:Zt},provide:function(){return{UserView:this}},data:function(){return{author:null,loaded:!1}},computed:{isLoaded:function(){return this.loaded&&this.author}},methods:{getData:function(){var t=this;C.a.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.id)).then(function(e){t.author=e.data.data})}},watch:{$route:function(t,e){this.getData()}},created:function(){var t=this;this.getData(),this.$on("loaded",function(){t.loaded=!0})}},ee=te,se=(s("317b"),Object(u["a"])(ee,Pt,Nt,!1,null,"0aa319f5",null)),ne=se.exports,ae=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Login")},oe=[],re=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("s-form",{ref:"formInline",staticClass:"form",attrs:{model:t.formInline,rules:t.ruleInline,inline:""}},[s("s-form-item",{attrs:{prop:"accessToken"}},[s("s-input",{attrs:{type:"text"},model:{value:t.formInline.accessToken,callback:function(e){t.$set(t.formInline,"accessToken",e)},expression:"formInline.accessToken"}})],1),s("s-form-item",{staticClass:"form-item-btn"},[s("s-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formInline")}}},[t._v("登录")])],1)],1)],1)},ie=[],ce={name:"Login",data:function(){return{formInline:{accessToken:""},ruleInline:{accessToken:[{required:!0,message:"Please fill in the accessToken",trigger:"change"}]}}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(){C.a.post("https://cnodejs.org/api/v1/accesstoken",{accesstoken:e.formInline.accessToken}).then(function(t){e.$store.commit("login",{accessToken:e.formInline.accessToken,loginname:t.data.loginname}),e.$router.push({name:"home"}),e.success()},e.fail)},this.fail)},success:function(){this.$message({message:"登录成功",type:"success",duration:1e3})},fail:function(){this.$message({message:"登录失败",type:"error",duration:1e3})}}},le=ce,ue=(s("6645"),Object(u["a"])(le,re,ie,!1,null,"4dad5784",null)),de=ue.exports,pe={name:"LoginView",components:{Login:de}},fe=pe,me=Object(u["a"])(fe,ae,oe,!1,null,"0aa1fa9f",null),he=me.exports,ve=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("NotRead",{attrs:{messages:t.notReadMessages}}),s("Readed",{staticClass:"readed",attrs:{messages:t.readedMessages}})],1)},ge=[],be=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("SideBar",{scopedSlots:t._u([{key:"header",fn:function(){return[s("router-link",{staticClass:"header",attrs:{to:{name:"home"}}},[t._v("主页")]),t._v("\n        / 新消息\n    ")]},proxy:!0},{key:"content",fn:function(){return[t.messages.length>0?s("ul",t._l(t.messages,function(e){return s("li",{key:e.id,staticClass:"message",on:{click:function(s){return t.markOne(e.id)}}},[s("router-link",{attrs:{to:{name:"user",params:{id:e.author.loginname}}}},[t._v(t._s(e.author.loginname)+"\n                ")]),t._v("\n                回复了你的话题\n                "),s("router-link",{attrs:{to:{name:"topic",params:{id:e.topic.id}}}},[t._v(t._s(e.topic.title))])],1)}),0):s("p",[t._v("无消息")])]},proxy:!0}])})},_e=[],je={name:"NotRead",components:{SideBar:R},props:{messages:{type:Array}},methods:{markOne:function(t){C.a.post(" https://cnodejs.org/api/v1/message/mark_one/".concat(t),{accesstoken:this.$store.state.accessToken})}}},ke=je,ye=(s("e222"),Object(u["a"])(ke,be,_e,!1,null,"65658d22",null)),Ce=ye.exports,$e=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("SideBar",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n        过往信息\n    ")]},proxy:!0},{key:"content",fn:function(){return[t.messages.length>0?s("ul",t._l(t.messages,function(e){return s("li",{key:e.id,staticClass:"message"},[s("router-link",{attrs:{to:{name:"user",params:{id:e.author.loginname}}}},[t._v(t._s(e.author.loginname))]),t._v("\n                回复了你的话题\n                "),s("router-link",{attrs:{to:{name:"topic",params:{id:e.topic.id}}}},[t._v(t._s(e.topic.title))])],1)}),0):s("p",[t._v("无消息")])]},proxy:!0}])})},xe=[],we={name:"Readed",components:{SideBar:R},props:{messages:{type:Array}}},Se=we,Oe=(s("935d"),Object(u["a"])(Se,$e,xe,!1,null,"1252e4f7",null)),Ie=Oe.exports,Te={name:"Messages",components:{Readed:Ie,NotRead:Ce},data:function(){return{notReadMessages:[],readedMessages:[]}},beforeRouteEnter:function(t,e,s){s(function(t){C.a.get("https://cnodejs.org/api/v1/messages?accesstoken=".concat(t.$store.state.accessToken)).then(function(e){t.notReadMessages=e.data.data.hasnot_read_messages,t.readedMessages=e.data.data.has_read_messages})})}},Ee=Te,Le=(s("ed51"),Object(u["a"])(Ee,ve,ge,!1,null,"61e23d31",null)),ze=Le.exports,Pe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"collection"},[s("header",[s("router-link",{attrs:{to:{name:"home"}}},[t._v("主页")]),t._v(" / "+t._s(t.$route.params.user)+" 收藏的话题\n    ")],1),s("ul",{staticClass:"topics"},t._l(t.topics,function(t){return s("Post",{key:t.id,attrs:{post:t}})}),1)])},Ne=[],Ue={name:"Collection",components:{Post:I},data:function(){return{topics:[]}},created:function(){var t=this;C.a.get("https://cnodejs.org/api/v1/topic_collect/".concat(this.$route.params.user)).then(function(e){return t.topics=e.data.data})}},Be=Ue,qe=(s("5bf2"),Object(u["a"])(Be,Pe,Ne,!1,null,"d0ad14dc",null)),Me=qe.exports,De=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"create"},[s("div",{staticClass:"content"},[s("h3",[t._v("发布话题")]),s("s-form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleInline}},[s("s-form-item",{attrs:{label:"选择板块"}},[s("s-select",{model:{value:t.board,callback:function(e){t.board=e},expression:"board"}},t._l(t.options,function(t){return s("s-option",{key:t.value,attrs:{value:t.value,label:t.label}})}),1)],1),s("s-form-item",{staticClass:"title",attrs:{prop:"title"}},[s("s-input",{attrs:{type:"text",placeholder:"标题字数十字以上"},model:{value:t.formInline.title,callback:function(e){t.$set(t.formInline,"title",e)},expression:"formInline.title"}})],1),s("s-form-item",{staticClass:"editor",attrs:{prop:"editor"}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formInline.editor,expression:"formInline.editor"}],attrs:{id:"markdownEditor"},domProps:{value:t.formInline.editor},on:{input:function(e){e.target.composing||t.$set(t.formInline,"editor",e.target.value)}}})]),s("s-form-item",{staticClass:"btn"},[s("s-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formInline")}}},[t._v("发布")])],1)],1)],1),s("div",{staticClass:"sideBarList"},[s("SideBar",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Markdown 语法参考")]},proxy:!0},{key:"content",fn:function(){return[s("p",[t._v("### 单行的标题")]),s("p",[t._v("**粗体**")]),s("p",[t._v("`console.log('行内代码')`")]),s("p",[t._v("```js\\n code \\n``` 标记代码块")]),s("p",[t._v("[内容](链接)")]),s("p",[t._v("![文字说明](图片链接)")]),s("p",[s("a",{attrs:{href:"https://segmentfault.com/markdown",target:"_blank"}},[t._v("Markdown 文档")])])]},proxy:!0}])})],1)])},Re=[],He={name:"Create",components:{SideBar:R},data:function(){return{board:"share",simplemde:null,options:[{value:"share",label:"分享"},{value:"ask",label:"问答"},{value:"job",label:"招聘"}],formInline:{editor:"",title:""},ruleInline:{title:[{required:!0,message:"必需填写标题",trigger:"change"},{type:"string",min:10,message:"标题至少十个字",trigger:"change"}],editor:[{required:!0,message:"必需填写内容",trigger:"change"}]}}},methods:{publish:function(){this.$message({type:"error",message:"发布主题的接口已被cnode社区下线，所以该功能暂时无法使用",duration:1e3})},handleSubmit:function(t){this.$refs[t].validate(this.publish,this.publish)}},mounted:function(){this.simplemde=new ot.a({element:document.getElementById("markdownEditor")})}},Ae=He,Ve=(s("4c41"),Object(u["a"])(Ae,De,Re,!1,null,"111b46fa",null)),Ge=Ve.exports;n["a"].use(g["a"]);var Je=new g["a"]({routes:[{path:"/",name:"home",component:et},{path:"/topic/:id",name:"topic",component:zt},{path:"/user/:id",name:"user",component:ne},{path:"/login",name:"login",component:he},{path:"/my/messages",name:"messages",component:ze},{path:"/user/:user/collections",name:"collections",component:Me},{path:"/create",name:"create",component:Ge}]}),Fe=s("8252"),Ke=s.n(Fe),Qe=(s("2f35"),s("2f62"));n["a"].use(Qe["a"]);var We=new Qe["a"].Store({state:{accessToken:localStorage.access_token||"",user:null,messageCount:0,collections:[]},getters:{isLogin:function(t){return""!==t.accessToken}},mutations:{login:function(t,e){t.accessToken=e.accessToken,C.a.get("https://cnodejs.org/api/v1/user/".concat(e.loginname)).then(function(e){console.log(e),t.user=e.data.data}),localStorage.setItem("access_token",e.accessToken)},exit:function(t){t.accessToken="",localStorage.removeItem("access_token")},updateMessageCount:function(t,e){t.messageCount=e},updateCollections:function(t,e){t.collections=e}}}),Xe=We,Ye=(s("4d71"),s("3e8e"),s("b116"),s("c1df")),Ze=s.n(Ye);function ts(){C.a.get("https://cnodejs.org/api/v1/message/count?accesstoken=".concat(localStorage.access_token)).then(function(t){Xe.commit("updateMessageCount",t.data.data)})}function es(t){C.a.get("https://cnodejs.org/api/v1/topic_collect/".concat(t)).then(function(t){Xe.commit("updateCollections",t.data.data)})}n["a"].use(Ke.a),n["a"].config.productionTip=!1,n["a"].filter("fromNow",function(t){return Ze.a.locale("zh-cn"),Ze()(new Date(t)).fromNow()}),new n["a"]({router:Je,store:Xe,render:function(t){return t(v)}}).$mount("#app"),localStorage.access_token&&C.a.post("https://cnodejs.org/api/v1/accesstoken",{accesstoken:localStorage.access_token}).then(function(t){Xe.commit("login",{accessToken:localStorage.access_token,loginname:t.data.loginname}),ts(),es(t.data.loginname)})},"56d9":function(t,e,s){"use strict";var n=s("fd01"),a=s.n(n);a.a},"5bf2":function(t,e,s){"use strict";var n=s("9a9c"),a=s.n(n);a.a},"5c9f":function(t,e,s){},"5e64":function(t,e,s){},"61b7":function(t,e,s){"use strict";var n=s("1724"),a=s.n(n);a.a},"64a9":function(t,e,s){},6645:function(t,e,s){"use strict";var n=s("5e64"),a=s.n(n);a.a},"7d0c":function(t,e,s){},9285:function(t,e,s){},"935d":function(t,e,s){"use strict";var n=s("c930"),a=s.n(n);a.a},"9a9c":function(t,e,s){},a218:function(t,e,s){"use strict";var n=s("d71d"),a=s.n(n);a.a},b240:function(t,e,s){"use strict";var n=s("04d1"),a=s.n(n);a.a},bc58:function(t,e,s){},bc80:function(t,e,s){"use strict";var n=s("d72a"),a=s.n(n);a.a},c165:function(t,e,s){},c930:function(t,e,s){},cc9f:function(t,e,s){"use strict";var n=s("536c"),a=s.n(n);a.a},ccd9:function(t,e,s){t.exports=s.p+"img/blue-longcat-spinner.dbcca15c.gif"},cd4b:function(t,e,s){t.exports=s.p+"img/cnodejs_light.86f6a7c2.svg"},d253:function(t,e,s){},d71d:function(t,e,s){},d72a:function(t,e,s){},d9bd:function(t,e,s){},dc4e:function(t,e,s){},e01e:function(t,e,s){},e222:function(t,e,s){"use strict";var n=s("dc4e"),a=s.n(n);a.a},e7f4:function(t,e,s){"use strict";var n=s("2028"),a=s.n(n);a.a},ed51:function(t,e,s){"use strict";var n=s("9285"),a=s.n(n);a.a},eea9:function(t,e,s){},fd01:function(t,e,s){},ff83:function(t,e,s){"use strict";var n=s("e01e"),a=s.n(n);a.a}});
//# sourceMappingURL=app.7c616a7c.js.map