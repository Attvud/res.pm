(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"A2+M":function(e,t,a){var r=a("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,a){var r=a("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,a){var r=a("Ijbi"),n=a("EbDI"),l=a("ZhPi"),c=a("Bnag");e.exports=function(e){return r(e)||n(e)||l(e)||c()}},SksO:function(e,t){function a(t,r){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,r)}e.exports=a},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}},X8hv:function(e,t,a){var r=a("sXyB"),n=a("RIqP"),l=a("lSNA"),c=a("8OQS");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var s=a("q1tI"),m=a("7ljp").mdx,p=a("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,a=e.children,l=c(e,["scope","children"]),o=p(t),u=s.useMemo((function(){if(!a)return null;var e=i({React:s,mdx:m},o),t=Object.keys(e),l=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(n(t),[""+a])).apply(void 0,[{}].concat(n(l)))}),[a,t]);return s.createElement(u,i({},l))}},"Z/DL":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("q1tI"),n=a.n(r),l=a("vOnD").d.div.withConfig({displayName:"styles__Modal",componentId:"sc-1xgw7pg-0"})(["header{box-shadow:inset 0px -1px 0px ",";}footer{display:flex;width:100%;box-shadow:inset 0px 1px 0px ",";& button{width:100%;height:100%;color:",";border-radius:0px;}}"],(function(e){return e.theme.separator_non_opaque}),(function(e){return e.theme.separator_non_opaque}),(function(e){return e.theme.tint_blue}));function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=Object(r.forwardRef)((function(e,t){var a=e.color,r=e.size,l=o(e,["color","size"]);return n.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:a},l),n.a.createElement("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"}))}));i.defaultProps={color:"currentColor",size:"1em"};var s=i;var m=a("ZOF5"),p=a("8Xs1");function u(e){var t=e.data,a={clientEmail:"",productAmount:1,productDiscount:0};function r(e){if(e.preventDefault(),-1!==a.clientEmail.indexOf("@")){var r={amount:(l=t.frontmatter.extra.price,c=a.productDiscount,o=a.productAmount,(l-l/100*c)*o),email:a.clientEmail,comment:""};location.href=(n=r,"https://oplata.qiwi.com/create?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPyXiqJauFTVWrkPBA4D8ecfvczN2yVDoBS5dUJFK1qpZv6hpDnJKhBv8o7yAFyWpWAx13gS9szyjHosJYiyWj8s7Ub4ea59TdwTBVTq3wr&billId="+Date.now()+"&amount="+n.amount+"&email="+encodeURI(n.email)+"&comment="+encodeURI(n.comment)+"&successUrl="+encodeURI("https://vk.com"))}var n,l,c,o}return n.a.createElement(l,{className:"modal fade",id:t.id.replace(/[!-\?\[-\^\{-\}]/g,""),tabIndex:"-1","aria-labelledby":t.id.replace(/[!-\?\[-\^\{-\}]/g,""),"aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog modal-dialog-centered modal-small"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("header",null,n.a.createElement(m.a,{className:"element-large"},n.a.createElement("div",{className:"center-part"},n.a.createElement("span",null,"Оформить заказ")))),n.a.createElement("form",{onSubmit:function(e){r(e)}},n.a.createElement("div",{className:"mt-24 mx-16"},n.a.createElement(m.a,{className:"element-medium mb-8"},n.a.createElement("input",{type:"email",placeholder:"Ваш email",required:!0,onChange:function(e){a.clientEmail=e.target.value},className:"left-part element-medium px-16"})),t.frontmatter.extra.amount>1&&n.a.createElement(m.a,{className:"element-medium mb-8"},n.a.createElement("input",{type:"text",placeholder:"Количество товара (макс. "+t.frontmatter.extra.amount+")",required:!0,onChange:function(e){a.productAmount=e.target.value},className:"left-part element-medium px-16"})),n.a.createElement(m.a,{className:"element-medium mb-8"},n.a.createElement("input",{type:"text",placeholder:"Промокод на скидку (не обязательно)",onChange:function(e){"NEWYEAR"!==e.target.value.toUpperCase()&&"WOTACC"!==e.target.value.toUpperCase()&&"KORBEN"!==e.target.value.toUpperCase()&&"JOVE"!==e.target.value.toUpperCase()&&"STRAIK"!==e.target.value.toUpperCase()&&"INSPIRER"!==e.target.value.toUpperCase()&&"BEOWULF"!==e.target.value.toUpperCase()&&"PROTANKI"!==e.target.value.toUpperCase()&&"AMWAY"!==e.target.value.toUpperCase()&&"VSPISHKA"!==e.target.value.toUpperCase()||(a.productDiscount=10)},className:"left-part element-medium px-16"}))),n.a.createElement(p.a,{title:"Способ оплаты",description:n.a.createElement("span",null,'Нажимая на кнопку "Оплатить" вы соглашаетесь с'," ",n.a.createElement("a",{href:"/rules",target:"blank"},"правилами магазина")),sectionClassName:"mb-24",listClassName:"theme-shadow-border-inset-y"},n.a.createElement(m.a,{className:"element-medium mb-8"},n.a.createElement("div",{className:"left-part px-16"},n.a.createElement("i",{className:"primary me-8"},n.a.createElement(s,{size:18})),n.a.createElement("span",null,"Банковская карта или Qiwi")))),n.a.createElement("footer",null,n.a.createElement(m.a,{className:"element-large"},n.a.createElement("button",{type:"button","data-bs-dismiss":"modal","aria-label":"Close",className:"element-button theme-shadow-border-inset-right"},"Отмена"),n.a.createElement("button",{type:"submit",className:"element-button fw-bold"},"Оплатить")))))))}},ZhPi:function(e,t,a){var r=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},ofHe:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=Object(r.forwardRef)((function(e,t){var a=e.color,r=e.size,o=c(e,["color","size"]);return n.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:a},o),n.a.createElement("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}))}));o.defaultProps={color:"currentColor",size:"1em"},t.a=o},qs7m:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var r=a("kSL2"),n=a("q1tI"),l=a.n(n),c=a("TVP8"),o=a("+7A0"),i=a("A2+M"),s=a("G7xx"),m=a("ofHe"),p=a("ZOF5"),u=a("8Xs1"),d=a("Z/DL"),f=a("K7N1"),h=a("vOnD");function b(e){var t,a=e.data.mdx,n=e.data.mdx.frontmatter,b=e.data.mdx.frontmatter.extra,g=h.d.div.withConfig({displayName:"shop-single-page__PageStyle",componentId:"sc-1udqrmf-0"})(["display:grid;.product-photo{display:flex;justify-content:center;}.product-about{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:32px;margin-bottom:64px;@media (max-width:992px){grid-template-columns:repeat(1,1fr);}}.product-price_block{display:flex;align-items:center;margin-bottom:24px;background-color:",";}"],(function(e){return e.theme.background_primary}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.GatsbySeo,{title:"Купить "+n.title+" | Магазин World of Tanks",description:a.excerpt,canonical:""+e.location.href,openGraph:{url:""+e.location.href,title:"Купить "+n.title+" | Магазин World of Tanks",description:""+a.excerpt}}),l.a.createElement(s.a,null,l.a.createElement(g,{as:"article",className:"container-fluid mt-48",style:{maxWidth:"1200px"}},l.a.createElement("div",{className:"product-tab-main"},l.a.createElement("div",{className:"product-about"},l.a.createElement("div",{className:"left-part"},l.a.createElement("div",{className:"product-photo"},l.a.createElement(c.a,{alt:n.title,title:n.title,image:Object(c.j)(n.cover),style:{maxWidth:"600px",width:"100%"}}))),l.a.createElement("div",{className:"right-part"},l.a.createElement("h1",{className:"px-16 px-sm-0"},n.title),l.a.createElement("div",{className:"product-main-info"},l.a.createElement("div",{className:"product-price_block p-16"},l.a.createElement("span",{className:"large-h1 me-24"},b.price+" ₽"),l.a.createElement("button",{"aria-label":"product-buy-button","data-bs-toggle":"modal","data-bs-target":"#"+a.id.replace(/[!-\?\[-\^\{-\}]/g,""),className:"element-large element-button green product-buy-button"},l.a.createElement("i",null,l.a.createElement(m.a,{size:20})),"Купить"),l.a.createElement(d.a,{data:a})),l.a.createElement(u.a,{title:"Доставка",listClassName:"large-subhead theme-shadow-border-inset-top p-16"},"После оплаты товар будет отправлен на почту, указанную при оформлении заказа"),l.a.createElement(u.a,{title:"Оплата",listClassName:"large-subhead theme-shadow-border-inset-top p-16"},"Банковская карта или Qiwi"),l.a.createElement(u.a,{title:"Гарантия",listClassName:"large-subhead theme-shadow-border-inset-top p-16"},void 0!==(t=f.b(n.categories[0]))&&t.warrantyText?l.a.createElement("span",null,t.warrantyText):l.a.createElement("span",null,r.shop.defaultProductWarrantyText))))),l.a.createElement("div",{className:"product-about"},l.a.createElement("div",{className:"left-part"},l.a.createElement("h2",{className:"mb-16 px-16 px-sm-0"},"Описание",l.a.createElement("span",{className:"theme-text-secondary"}," "+n.title)),l.a.createElement("div",{className:"theme-text-tertiary px-16 px-sm-0"},function(){if(null!==a.excerpt)return l.a.createElement(i.MDXRenderer,null,a.body)}())),l.a.createElement("div",{className:"right-part"},l.a.createElement("h2",{className:"mb-16 px-16 px-sm-0"},"Характеристики",l.a.createElement("span",{className:"theme-text-secondary"}," "+n.title)),l.a.createElement("div",{className:"theme-text-tertiary"},l.a.createElement(u.a,null,l.a.createElement(l.a.Fragment,null,null!==b.server&&l.a.createElement(p.a,{className:"element-medium"},l.a.createElement("span",{className:"left-part px-16"},"Сервер"),l.a.createElement("span",{className:"right-part px-16"},b.server)),null!==b.phone&&l.a.createElement(p.a,{className:"element-medium"},l.a.createElement("span",{className:"left-part px-16"},"Привязка аккаунта и почты к телефону"),l.a.createElement("span",{className:"right-part px-16"},b.phone?"Есть":"Нет")),null!==b.mail&&l.a.createElement(p.a,{className:"element-medium"},l.a.createElement("span",{className:"left-part px-16"},"Привязка аккаунта к почте"),l.a.createElement("span",{className:"right-part px-16"},b.mail?"Есть":"Нет")),null!==b.vehicles.x&&l.a.createElement(p.a,{className:"element-medium"},l.a.createElement("span",{className:"left-part px-16"},"ТОПы"),b.vehicles.x.map((function(e){return l.a.createElement("span",null,l.a.createElement("a",{key:e,target:"blank",href:"https://wiki.wargaming.net/ru/index.php?search="+e},e))}))),null!==b.vehicles.premium&&l.a.createElement(p.a,{className:"element-medium"},l.a.createElement("span",{className:"left-part px-16"},"Премиум техника"),l.a.createElement("span",{className:"right-part px-16"},b.vehicles.premium.map((function(e){return l.a.createElement("a",{key:e,target:"blank",href:"https://wiki.wargaming.net/ru/index.php?search="+e,className:"theme-text-tint-blue"},e)})))))))))))))}},sXyB:function(e,t,a){var r=a("SksO"),n=a("b48C");function l(t,a,c){return n()?e.exports=l=Reflect.construct:e.exports=l=function(e,t,a){var n=[null];n.push.apply(n,t);var l=new(Function.bind.apply(e,n));return a&&r(l,a.prototype),l},l.apply(null,arguments)}e.exports=l}}]);
//# sourceMappingURL=component---src-projects-res-pm-components-templates-shop-single-page-js-83b06139368d08b4612b.js.map