(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-328a76a6"],{"24f0":function(t,a,e){"use strict";var s=e("a687"),i=e.n(s);i.a},"4cbf":function(t,a,e){t.exports=e.p+"img/order.2c850de8.png"},6452:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"title"},[e("div",{staticClass:"homeInfo"},[t._m(0),e("div",[e("p",{staticClass:"home-p"},[t._v("总订单")]),e("p",{staticClass:"num-p"},[t._v(t._s(t.totalOrder))])])]),e("div",{staticClass:"homeInfo"},[t._m(1),e("div",[e("p",{staticClass:"home-p"},[t._v("总销售额")]),e("p",{staticClass:"num-p"},[t._v(t._s(t.totalAmount))])])]),e("div",{staticClass:"homeInfo"},[t._m(2),e("div",[e("p",{staticClass:"home-p"},[t._v("今日订单")]),e("p",{staticClass:"num-p"},[t._v(t._s(t.todayOrder))])])]),e("div",{staticClass:"homeInfo"},[t._m(3),e("div",[e("p",{staticClass:"home-p"},[t._v("今日销售")]),e("p",{staticClass:"num-p"},[t._v(t._s(t.totayAmount))])])])]),e("div",{attrs:{id:"charts"}})])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"img-div"},[s("img",{attrs:{src:e("8239")}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"img-div"},[s("img",{attrs:{src:e("a940")}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"img-div"},[s("img",{attrs:{src:e("4cbf")}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"img-div"},[s("img",{attrs:{src:e("84fa")}})])}],n=e("313e"),o=e.n(n),r=e("fd41"),c={data:function(){return{totalOrder:0,totalAmount:0,todayOrder:0,totayAmount:0}},mounted:function(){var t=this,a=o.a.init(document.getElementById("charts"));a.showLoading(),Object(r["p"])().then((function(e){console.log(e);var s=e.data,i=s.orderData,n=s.amountData,o=s.xData,r=s.totalOrder,c=s.totalAmount,l=s.todayOrder,d=s.totayAmount;t.totalOrder=parseInt(r).toLocaleString(),t.totalAmount=parseInt(c).toLocaleString(),t.todayOrder=parseInt(l).toLocaleString(),t.totayAmount=parseInt(d).toLocaleString();var m={title:{text:"数据统计"},tooltip:{trigger:"axis"},legend:{data:["订单数据","金额数据"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:o},yAxis:{type:"value"},series:[{name:"订单数据",type:"line",stack:"总量",data:i},{name:"金额数据",type:"line",stack:"总量",data:n}]};a.setOption(m),a.hideLoading()}))}},l=c,d=(e("24f0"),e("0c7c")),m=Object(d["a"])(l,s,i,!1,null,"4319303c",null);a["default"]=m.exports},8239:function(t,a,e){t.exports=e.p+"img/allorder.cdc35a92.png"},"84fa":function(t,a,e){t.exports=e.p+"img/money.ce776286.png"},a687:function(t,a,e){},a940:function(t,a,e){t.exports=e.p+"img/coin.5d1df266.png"}}]);
//# sourceMappingURL=chunk-328a76a6.81c1bd19.js.map