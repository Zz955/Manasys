(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dc81d1f"],{"1dde":function(e,t,i){var n=i("d039"),r=i("b622"),a=i("2d00"),o=r("species");e.exports=function(e){return a>=51||!n((function(){var t=[],i=t.constructor={};return i[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"430d":function(e,t,i){"use strict";var n=i("6511"),r=i.n(n);r.a},"4de4":function(e,t,i){"use strict";var n=i("23e7"),r=i("b727").filter,a=i("1dde"),o=i("ae40"),l=a("filter"),s=o("filter");n({target:"Array",proto:!0,forced:!l||!s},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"5be0":function(e,t,i){e.exports=i.p+"img/favicon.4c71f432.png"},6511:function(e,t,i){},"65f0":function(e,t,i){var n=i("861d"),r=i("e8b5"),a=i("b622"),o=a("species");e.exports=function(e,t){var i;return r(e)&&(i=e.constructor,"function"!=typeof i||i!==Array&&!r(i.prototype)?n(i)&&(i=i[o],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===t?0:t)}},"8b24":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-aside",{attrs:{width:"220px"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":"",router:"","default-active":e.defaultActivie,"background-color":"#304152","text-color":"#fff","active-text-color":"#3f9af7"}},[n("h4",{staticClass:"title"},[n("img",{staticStyle:{width:"40px","vertical-align":"middle"},attrs:{src:i("5be0")}}),e._v(" 小鱼后台管理")]),e._l(e.userGroup,(function(t){return n("div",{key:t.index},[t.children?n("el-submenu",{attrs:{index:t.index}},[n("template",{slot:"title"},[n("i",{class:t.cls}),n("span",[e._v(e._s(t.title))])]),n("el-menu-item-group",e._l(t.children,(function(t){return n("el-menu-item",{key:t.index,attrs:{index:t.index}},[e._v(e._s(t.title))])})),1)],2):n("el-menu-item",{attrs:{index:t.index}},[n("i",{class:t.cls}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])])],1)}))],2)],1),n("el-container",{staticClass:"indexRight"},[n("el-header",{staticClass:"clearfix"},[n("div",{staticClass:"breadpath"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.currentPath,(function(t){return n("el-breadcrumb-item",{key:t.title,attrs:{to:t.path}},[e._v(e._s(t.title))])})),1)],1),n("div",{staticClass:"head"},[n("el-dropdown",{on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.username)+" "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"myInfo",icon:"el-icon-s-custom"}},[e._v("个人中心")]),n("el-dropdown-item",{attrs:{command:"editPwd",icon:"el-icon-edit"}},[e._v("修改密码")]),n("el-dropdown-item",{attrs:{command:"logOut",icon:"el-icon-switch-button"}},[e._v("退出登录")])],1)],1),n("div",{staticClass:"demo-basic--circle"},[n("div",{staticClass:"block"},[n("router-link",{attrs:{to:"/index/Myinfo"}},[n("el-avatar",{attrs:{src:e.circleUrl}})],1)],1)])],1)]),n("el-main",[n("router-view")],1)],1)],1)},r=[],a=(i("4de4"),i("caad"),i("2532"),i("fd41")),o={data:function(){return{currentPath:[{title:"首页",path:"/index/Home"}],username:"",circleUrl:localStorage.head,defaultActivie:"",treelist:[{index:"/index/Home",cls:"el-icon-s-home",title:"后台首页",role:["normal","super"]},{index:"/index/order",cls:"el-icon-s-order",title:"订单管理",role:["normal","super"]},{role:["normal","super"],index:"1",cls:"el-icon-s-goods",title:"商品管理",children:[{index:"/index/Shoplist",title:"商品列表"},{index:"/index/Addshops",title:"商品添加"},{index:"/index/Shopclassify",title:"商品分类"}]},{index:"/index/StoreMana",cls:"el-icon-s-shop",title:"店铺管理",role:["super"]},{role:["super"],index:"2",cls:"el-icon-user",title:"账号管理",children:[{index:"/index/Userlist",title:"账号列表"},{index:"/index/Adduser",title:"添加账号"},{index:"/index/Editpwd",title:"修改密码"},{index:"/index/Myinfo",title:"个人中心"}]},{role:["super"],index:"3",cls:"el-icon-pie-chart",title:"销售统计",children:[{index:"/index/Shopstatistics",title:"商品统计"},{index:"/index/Orderstatistics",title:"订单统计"}]}],role:localStorage.role}},methods:{changeCurrentPath:function(e){var t=[];switch(e){case"/index/Home":t=[{title:"首页",path:"/index/Home"}];break;case"/index/order":t=[{title:"订单管理",path:"/index/order"}];break;case"/index/Shoplist":t=[{title:"首页",path:"/index/Home"},{title:"商品管理",path:""},{title:"商品列表",path:"/index/Shoplist"}];break;case"/index/Addshops":t=[{title:"首页",path:"/index/Home"},{title:"商品管理",path:""},{title:"商品添加",path:"/index/Addshops"}];break;case"/index/Shopclassify":t=[{title:"首页",path:"/index/Home"},{title:"商品管理",path:""},{title:"商品分类",path:"/index/Shopclassify"}];break;case"/index/StoreMana":t=[{title:"店铺管理",path:"/index/StoreMana"}];break;case"/index/Userlist":t=[{title:"首页",path:"/index/Home"},{title:"账号管理",path:""},{title:"账号列表",path:"/index/Userlist"}];break;case"/index/Adduser":t=[{title:"首页",path:"/index/Home"},{title:"账号管理",path:""},{title:"添加账号",path:"/index/Adduser"}];break;case"/index/Editpwd":t=[{title:"首页",path:"/index/Home"},{title:"账号管理",path:""},{title:"修改密码",path:"/index/Editpwd"}];break;case"/index/Myinfo":t=[{title:"首页",path:"/index/Home"},{title:"账号管理",path:""},{title:"个人中心",path:"/index/Myinfo"}];break;case"/index/Shopstatistics":t=[{title:"首页",path:"/index/Home"},{title:"销售统计",path:""},{title:"商品统计",path:"/index/Shopstatistics"}];break;case"/index/Orderstatistics":t=[{title:"首页",path:"/index/Home"},{title:"销售统计",path:""},{title:"订单统计",path:"/index/Orderstatistics"}];break}this.currentPath=t},handleCommand:function(e){var t=this;switch(e){case"myInfo":this.$router.push("/index/Myinfo");break;case"editPwd":this.$router.push("/index/Editpwd");break;case"logOut":this.$confirm("确认退出当前账号?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){localStorage.removeItem("acc"),localStorage.removeItem("token"),localStorage.removeItem("id"),t.$router.push("/"),t.$message({type:"success",message:"已退出当前账号!",duration:1500})}));break}}},watch:{$route:{handler:function(e){window._indexthis.changeCurrentPath(e.path)},deep:!0}},computed:{userGroup:function(){var e=this;return this.treelist.filter((function(t){return t.role.includes(e.role)}))}},created:function(){var e=this,t=this.$route.path;this.defaultActivie=t,this.changeCurrentPath(t),window._indexthis=this,Object(a["e"])(localStorage.token).then((function(t){1==t.data.code?e.$alert("身份验证已过期，请重新登录","提示",{confirmButtonText:"确定",callback:function(e){e&&(localStorage.removeItem("id"),localStorage.removeItem("token"),location.href="/")}}):(e.username=localStorage.acc,Object(a["q"])(localStorage.id).then((function(t){e.circleUrl=t.data.accountInfo.imgUrl})))}))},mounted:function(){}},l=o,s=(i("430d"),i("0c7c")),c=Object(s["a"])(l,n,r,!1,null,"47c73bee",null);t["default"]=c.exports},b727:function(e,t,i){var n=i("0366"),r=i("44ad"),a=i("7b0b"),o=i("50c4"),l=i("65f0"),s=[].push,c=function(e){var t=1==e,i=2==e,c=3==e,d=4==e,u=6==e,h=5==e||u;return function(p,x,f,m){for(var v,b,w=a(p),g=r(w),k=n(x,f,3),y=o(g.length),S=0,_=m||l,A=t?_(p,y):i?_(p,0):void 0;y>S;S++)if((h||S in g)&&(v=g[S],b=k(v,S,w),e))if(t)A[S]=b;else if(b)switch(e){case 3:return!0;case 5:return v;case 6:return S;case 2:s.call(A,v)}else if(d)return!1;return u?-1:c||d?d:A}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},e8b5:function(e,t,i){var n=i("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=chunk-7dc81d1f.f71d3e08.js.map