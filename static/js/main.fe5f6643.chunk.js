(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{16:function(e,t,a){e.exports=a(33)},21:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=(a(21),a(22),a(23),a(24),a(27),a(2)),i=a(3),u=a(5),m=a(4),s=a(1),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.product,a=e.handleDelete,n=e.handleChangeAmount;return r.a.createElement("tr",{className:"card-item"},r.a.createElement("td",null,t.maSP),r.a.createElement("td",null,t.tenSP),r.a.createElement("td",null,r.a.createElement("img",{src:t.linkAnh,width:50})),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){n(t,!1)}},"-"),t.soLuong,r.a.createElement("button",{onClick:function(){n(t,!0)}},"+")),r.a.createElement("td",null,t.giaThanh),r.a.createElement("td",null,t.giaThanh*t.soLuong),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger",onClick:function(){a(t)}},"Delete")))}}]),a}(n.Component),h=Object(s.b)(null,(function(e){return{handleDelete:function(t){e(function(e){return{type:"DELETE_PRODUCT",payload:e}}(t))},handleChangeAmount:function(t,a){e(function(e,t){return{type:"CHANGE_AMOUNT",payload:e,status:t}}(t,a))}}}))(d),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).renderProduct=function(){return e.props.cartList.map((function(e){return r.a.createElement(h,{key:e.maSP,product:e})}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"modal-dialog",role:"document",style:{maxWidth:1e3}},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Gi\u1ecf h\xe0ng"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"M\xe3 s\u1ea3n ph\u1ea9m"),r.a.createElement("th",null,"t\xean s\u1ea3n ph\u1ea9m"),r.a.createElement("th",null,"h\xecnh \u1ea3nh"),r.a.createElement("th",null,"s\u1ed1 l\u01b0\u1ee3ng"),r.a.createElement("th",null,"\u0111\u01a1n gi\xe1"),r.a.createElement("th",null,"th\xe0nh ti\u1ec1n"))),r.a.createElement("tbody",null,this.renderProduct()))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Save"))))}}]),a}(n.Component),E=Object(s.b)((function(e){return{cartList:e.shoppingCartReducer.cartList}}))(p),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).renderList=function(){var t=e.props,a=t.productList,n=t.handleProductDetail,l=t.handleAddProduct;return a.map((function(e,t){return r.a.createElement("div",{className:"col-sm-4",key:t},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:e.linhAnh}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},e.tenSP),r.a.createElement("button",{className:"btn btn-success",onClick:function(){n(e)}},"Chi ti\u1ebft"),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){l(e)}},"Th\xeam gi\u1ecf h\xe0ng"))))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.renderList())}}]),a}(n.Component),g=Object(s.b)((function(e){return{productList:e.shoppingCartReducer.productList}}),(function(e){return{handleProductDetail:function(t){e(function(e){return{type:"DETAIL_PRODUCT",payload:e}}(t))},handleAddProduct:function(t){e(function(e){return{type:"ADD_PRODUCT",payload:e}}(t))}}}))(b),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e.renderShoppingCart=function(){return e.props.cartList.reduce((function(e,t){return e+t.soLuong}),0)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"container"},r.a.createElement("h3",{className:"title text-center"},"B\xe0i t\u1eadp gi\u1ecf h\xe0ng"),r.a.createElement("div",{className:"container text-center my-2"},r.a.createElement("button",{className:"btn btn-danger ","data-toggle":"modal","data-target":"#modelId"},"Gi\u1ecf h\xe0ng (",this.renderShoppingCart(),")")),r.a.createElement("div",{className:"container danh-sach-san-pham"},r.a.createElement("div",{className:"row"},r.a.createElement(g,{handleAddProduct:this.handleAddProduct}))),r.a.createElement("div",{className:"modal fade",id:"modelId",tabIndex:-1,role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},r.a.createElement(E,null)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-5"},r.a.createElement("img",{className:"img-fluid",src:this.props.productDetail.linhAnh})),r.a.createElement("div",{className:"col-sm-7"},r.a.createElement("h3",null,"Th\xf4ng s\u1ed1 k\u1ef9 thu\u1eadt"),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"M\xe0n h\xecnh"),r.a.createElement("td",null,this.props.productDetail.tenSP)),r.a.createElement("tr",null,r.a.createElement("td",null,"H\u1ec7 \u0111i\u1ec1u h\xe0nh"),r.a.createElement("td",null,this.props.productDetail.heDieuHanh)),r.a.createElement("tr",null,r.a.createElement("td",null,"Camera tr\u01b0\u1edbc"),r.a.createElement("td",null,this.props.productDetail.camTruoc)),r.a.createElement("tr",null,r.a.createElement("td",null,"Camera sau"),r.a.createElement("td",null,this.props.productDetail.camSau)),r.a.createElement("tr",null,r.a.createElement("td",null,"RAM"),r.a.createElement("td",null,this.props.productDetail.ram)),r.a.createElement("tr",null,r.a.createElement("td",null,"ROM"),r.a.createElement("td",null,this.props.productDetail.rom))))))))}}]),a}(n.Component),P=Object(s.b)((function(e){return{productDetail:e.shoppingCartReducer.productDetail,cartList:e.shoppingCartReducer.cartList}}))(f);var v=function(){return r.a.createElement(P,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(7),D=a(9),y=a(6),L={productList:[{tenSP:"VinSmart Live",maSP:1,giaThanh:9e6,manHinh:"AMOLED, FHD+ 2232 x 1080 pixels",linhAnh:"./img/vsphone.jpg",heDieuHanh:"Android 9.0 (Pie)",camTruoc:"20 MP",camSau:"Ch\xednh 48 MP & Ph\u1ee5 8 MP, 5 MP",ram:"4 GB",rom:"64GB"},{tenSP:"Meizu 16Xs",maSP:2,giaThanh:7e6,manHinh:'AMOLED, 6.2", Full HD+',linhAnh:"./img/meizuphone.jpg",heDieuHanh:"Android 9.0 (Pie)",camTruoc:"20 MP",camSau:"Ch\xednh 48 MP & Ph\u1ee5 8 MP, 5 MP",ram:"4 GB",rom:"64GB"},{tenSP:"Iphone XS Max",maSP:3,giaThanh:2e7,manHinh:'OLED, 6.5", 1242 x 2688 Pixels',linhAnh:"./img/applephone.jpg",heDieuHanh:"iOS 14.0",camTruoc:"20 MP",camSau:"Ch\xednh 48 MP & Ph\u1ee5 8 MP, 5 MP",ram:"4 GB",rom:"64GB"}],productDetail:{tenSP:"VinSmart Live",maSP:1,manHinh:"AMOLED, FHD+ 2232 x 1080 pixels",linhAnh:"./img/vsphone.jpg",heDieuHanh:"Android 9.0 (Pie)",camTruoc:"20 MP",camSau:"Ch\xednh 48 MP & Ph\u1ee5 8 MP, 5 MP",ram:"4 GB",rom:"64GB"},cartList:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DETAIL_PRODUCT":return e.productDetail=t.payload,Object(y.a)({},e);case"ADD_PRODUCT":var a=Object(D.a)(e.cartList),n=a.findIndex((function(e){return e.maSP===t.payload.maSP}));if(-1!==n){var r=Object(y.a)({},a[n]);r.soLuong++,a[n]=r}else{var l=t.payload;l.soLuong=1,a=[].concat(Object(D.a)(a),[l])}return e.cartList=a,Object(y.a)({},e);case"DELETE_PRODUCT":var c=e.cartList.filter((function(e){return e.maSP!==t.payload.maSP}));return e.cartList=c,Object(y.a)({},e);case"CHANGE_AMOUNT":var o=Object(D.a)(e.cartList),i=e.cartList.findIndex((function(e){return e.maSP===t.payload.maSP})),u=Object(y.a)({},o[i]);return t.status?u.soLuong++:u.soLuong>1&&u.soLuong--,o[i]=u,e.cartList=o,Object(y.a)({},e);default:return Object(y.a)({},e)}},j=Object(O.b)({shoppingCartReducer:N}),C=Object(O.c)(j,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(s.a,{store:C},r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.fe5f6643.chunk.js.map