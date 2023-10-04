/*! For license information please see components-ProfileDataTab-ProfileDataTab-stories.c72ca023.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[2908],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./src/components/ProfileDataTab/ProfileDataTab.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProfileDataTabDemo:function(){return ProfileDataTabDemo},__namedExportsOrder:function(){return __namedExportsOrder}});var _ProfileDataTabDemo$p,_ProfileDataTabDemo$p2,_ProfileDataTabDemo$p3,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_ProfileDataTab__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ProfileDataTab/ProfileDataTab.jsx");__webpack_exports__.default={title:"Pages/Profile/Tabs/ProfileDataTab",component:_ProfileDataTab__WEBPACK_IMPORTED_MODULE_0__.p,tags:["autodocs"],parameters:{layout:"centered"}};var ProfileDataTabDemo={args:{user:{first_name:"Иван",last_name:"Иванов",birth_date:"08.09.1992",phone:"+79111002030",email:"pochta@mail.ru",occupation:"дизайнер"}}};ProfileDataTabDemo.parameters=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},ProfileDataTabDemo.parameters),{},{docs:(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_ProfileDataTabDemo$p=ProfileDataTabDemo.parameters)||void 0===_ProfileDataTabDemo$p?void 0:_ProfileDataTabDemo$p.docs),{},{source:(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:'{\n  args: {\n    user: {\n      first_name: "Иван",\n      last_name: "Иванов",\n      birth_date: "08.09.1992",\n      phone: "+79111002030",\n      email: "pochta@mail.ru",\n      occupation: "дизайнер"\n    }\n  }\n}'},null===(_ProfileDataTabDemo$p2=ProfileDataTabDemo.parameters)||void 0===_ProfileDataTabDemo$p2||null===(_ProfileDataTabDemo$p3=_ProfileDataTabDemo$p2.docs)||void 0===_ProfileDataTabDemo$p3?void 0:_ProfileDataTabDemo$p3.source)})});var __namedExportsOrder=["ProfileDataTabDemo"]},"./src/components/ProfileDataTab/ProfileDataTab.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{p:function(){return ProfileDataTab_ProfileDataTab}});__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProfileDataTab_ProfileDataTab=function ProfileDataTab(_ref){var user=_ref.user;return(0,jsx_runtime.jsxs)("section",{className:"profile-data",children:[(0,jsx_runtime.jsxs)("div",{className:"profile-data__header-container",children:[(0,jsx_runtime.jsx)("h2",{className:"profile-data__title",children:"Персональные данные"}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Редактировать",btnClass:"button__profile-edit"})]}),(0,jsx_runtime.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAEt2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTEwIgogICB0aWZmOkltYWdlV2lkdGg9IjExMCIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iNzIvMSIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNzIvMSIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjExMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjExMCIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIz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",className:"profile-data__image",alt:"Фото профиля"}),(0,jsx_runtime.jsxs)("ul",{className:"profile-data__list",children:[(0,jsx_runtime.jsxs)("li",{className:"profile-data__list-item",children:[(0,jsx_runtime.jsx)("span",{children:"Имя"}),(0,jsx_runtime.jsx)("span",{children:user.first_name})]}),(0,jsx_runtime.jsxs)("li",{className:"profile-data__list-item",children:[(0,jsx_runtime.jsx)("span",{children:"Фамилия"}),(0,jsx_runtime.jsx)("span",{children:user.last_name})]}),(0,jsx_runtime.jsxs)("li",{className:"profile-data__list-item",children:[(0,jsx_runtime.jsx)("span",{children:"Дата рождения"}),(0,jsx_runtime.jsx)("span",{children:user.birth_date})]}),(0,jsx_runtime.jsxs)("li",{className:"profile-data__list-item",children:[(0,jsx_runtime.jsx)("span",{children:"Номер телефона"}),(0,jsx_runtime.jsx)("span",{children:function formatPhone(phoneNumber){return phoneNumber.replace(/\D/g,"").replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,"+$1 $2 $3 $4 $5")}(user.phone)})]}),(0,jsx_runtime.jsxs)("li",{className:"profile-data__list-item",children:[(0,jsx_runtime.jsx)("span",{children:"Адрес эл. почты"}),(0,jsx_runtime.jsx)("span",{children:user.email})]}),(0,jsx_runtime.jsxs)("li",{className:"profile-data__list-item",children:[(0,jsx_runtime.jsx)("span",{children:"Род деятельности"}),(0,jsx_runtime.jsx)("span",{children:user.occupation})]})]}),(0,jsx_runtime.jsx)("p",{className:"profile-data__info",children:"мы запрашиваем информацию исключительно в целях рекламы и промо-акций для вас"})]})};ProfileDataTab_ProfileDataTab.defaultProps={user:{first_name:"",last_name:"",birth_date:"",phone:"",email:"",occupation:""}},ProfileDataTab_ProfileDataTab.__docgenInfo={description:"",methods:[],displayName:"ProfileDataTab",props:{user:{defaultValue:{value:'{\n  first_name: "",\n  last_name: "",\n  birth_date: "",\n  phone: "",\n  email: "",\n  occupation: "",\n}',computed:!1},description:"",type:{name:"shape",value:{first_name:{name:"string",required:!1},last_name:{name:"string",required:!1},birth_date:{name:"string",required:!1},phone:{name:"string",required:!1},email:{name:"string",required:!1},occupation:{name:"string",required:!1}}},required:!1}}}},"./src/components/UI-kit/Button/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return UI_kit_Button_Button}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button_Button(_ref){var btnClass=_ref.btnClass,btnType=_ref.btnType,btnText=_ref.btnText,onClick=_ref.onClick,isValidBtn=_ref.isValidBtn,backgroundColor=_ref.backgroundColor;return(0,jsx_runtime.jsx)("button",{className:"button ".concat(btnClass),type:btnType,onClick:onClick,style:backgroundColor&&{backgroundColor:backgroundColor},disabled:!isValidBtn,children:btnText})}Button_Button.defaultProps={btnClass:"button_type_form",btnText:"",btnType:"button",onClick:function onClick(){},backgroundColor:null,isValidBtn:!0},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btnClass:{defaultValue:{value:'"button_type_form"',computed:!1},description:"",type:{name:"string"},required:!1},btnText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},btnType:{defaultValue:{value:'"button"',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},isValidBtn:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}};var UI_kit_Button_Button=Button_Button},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);