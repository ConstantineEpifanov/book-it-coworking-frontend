/*! For license information please see components-EventsItem-EventsItem-stories.9d838eb9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[4299],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./src/components/EventsItem/EventsItem.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EventsItemDemo:function(){return EventsItemDemo},__namedExportsOrder:function(){return __namedExportsOrder}});var _EventsItemDemo$param,_EventsItemDemo$param2,_EventsItemDemo$param3,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_EventsItem__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/EventsItem/EventsItem.jsx"),_images_dummy_data_event1_png__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/images/dummy-data/event1.png");__webpack_exports__.default={title:"Components/EventsItem",component:_EventsItem__WEBPACK_IMPORTED_MODULE_0__.u,tags:["autodocs"],parameters:{layout:"centered"}};var EventsItemDemo={args:{event:{id:1,name:"класс по сторителлингу и еще немного текста",image:_images_dummy_data_event1_png__WEBPACK_IMPORTED_MODULE_1__,address:"г. Санкт-Петербург, Набережная реки Карповки, 5АК",meetingQuantity:30,url:"https://ya.ru",date:"30/09/23"}}};EventsItemDemo.parameters=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},EventsItemDemo.parameters),{},{docs:(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},null===(_EventsItemDemo$param=EventsItemDemo.parameters)||void 0===_EventsItemDemo$param?void 0:_EventsItemDemo$param.docs),{},{source:(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({originalSource:'{\n  args: {\n    event: {\n      id: 1,\n      name: "класс по сторителлингу и еще немного текста",\n      image: EventsOne,\n      address: "г. Санкт-Петербург, Набережная реки Карповки, 5АК",\n      meetingQuantity: 30,\n      url: "https://ya.ru",\n      date: "30/09/23"\n    }\n  }\n}'},null===(_EventsItemDemo$param2=EventsItemDemo.parameters)||void 0===_EventsItemDemo$param2||null===(_EventsItemDemo$param3=_EventsItemDemo$param2.docs)||void 0===_EventsItemDemo$param3?void 0:_EventsItemDemo$param3.source)})});var __namedExportsOrder=["EventsItemDemo"]},"./src/components/EventsItem/EventsItem.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{u:function(){return EventsItem_EventsItem}});__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TagIcon=function TagIcon(){return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,jsx_runtime.jsx)("path",{d:"M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};TagIcon.__docgenInfo={description:"",methods:[],displayName:"TagIcon"};var UserIcon=function UserIcon(){return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,jsx_runtime.jsx)("path",{d:"M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};UserIcon.__docgenInfo={description:"",methods:[],displayName:"UserIcon"};var EventsItem_EventsItem=function EventsItem(_ref){var event=_ref.event;return(0,jsx_runtime.jsxs)("div",{className:"events-item",children:[(0,jsx_runtime.jsxs)("div",{className:"events-item__image-container",children:[(0,jsx_runtime.jsx)("img",{src:event.image,alt:event.name,className:"events-item__image"}),(0,jsx_runtime.jsx)("span",{className:"events-item__date",children:event.date})]}),(0,jsx_runtime.jsxs)("div",{className:"events-item__info__container",children:[(0,jsx_runtime.jsx)("h3",{className:"events-item__name",children:event.name}),(0,jsx_runtime.jsxs)("div",{className:"events-item__row",children:[(0,jsx_runtime.jsx)(TagIcon,{}),event.address]}),(0,jsx_runtime.jsxs)("div",{className:"events-item__row events-item__row_last",children:[(0,jsx_runtime.jsx)(UserIcon,{}),"Мест:",(0,jsx_runtime.jsx)("span",{className:"events-item__slots",children:event.meetingQuantity})]}),(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_type_transparent button_size_postmiddle",btnText:"К событию",onClick:function onClick(){event.url&&window.open(event.url,"_blank")}})]})]})};EventsItem_EventsItem.defaultProps={event:{id:void 0,name:void 0,image:void 0,address:void 0,meetingQuantity:void 0,url:void 0,date:void 0}},EventsItem_EventsItem.__docgenInfo={description:"",methods:[],displayName:"EventsItem",props:{event:{defaultValue:{value:"{\n  id: undefined,\n  name: undefined,\n  image: undefined,\n  address: undefined,\n  meetingQuantity: undefined,\n  url: undefined,\n  date: undefined,\n}",computed:!1},description:"",type:{name:"shape",value:{id:{name:"number",required:!0},name:{name:"string",required:!0},image:{name:"string",required:!1},address:{name:"string",required:!1},meetingQuantity:{name:"number",required:!1},url:{name:"string",required:!1},date:{name:"string",required:!0}}},required:!1}}}},"./src/components/UI-kit/Button/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return UI_kit_Button_Button}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button_Button(_ref){var btnClass=_ref.btnClass,btnType=_ref.btnType,btnText=_ref.btnText,onClick=_ref.onClick,isValidBtn=_ref.isValidBtn,backgroundColor=_ref.backgroundColor;return(0,jsx_runtime.jsx)("button",{className:"button ".concat(btnClass),type:btnType,onClick:onClick,style:backgroundColor&&{backgroundColor:backgroundColor},disabled:!isValidBtn,children:btnText})}Button_Button.defaultProps={btnClass:"button_type_form",btnText:"",btnType:"button",onClick:function onClick(){},backgroundColor:null,isValidBtn:!0},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btnClass:{defaultValue:{value:'"button_type_form"',computed:!1},description:"",type:{name:"string"},required:!1},btnText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},btnType:{defaultValue:{value:'"button"',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},isValidBtn:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}};var UI_kit_Button_Button=Button_Button},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/images/dummy-data/event1.png":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"7ccb7bbb5c41bb38b445.png"}}]);