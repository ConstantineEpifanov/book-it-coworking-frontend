/*! For license information please see components-RulesQuestions-RulesQuestions-stories.62d787c0.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[958],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/RulesQuestions/RulesQuestions.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:function(){return Example},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return RulesQuestions_stories}});var _Example$parameters,_Example$parameters2,_Example$parameters2$,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),Api=__webpack_require__("./src/utils/Api.jsx"),Rules=__webpack_require__("./src/components/Rules/Rules.jsx"),currentUserContext=__webpack_require__("./src/contexts/currentUserContext.js"),Questions=__webpack_require__("./src/components/Questions/Questions.jsx"),Loader=__webpack_require__("./src/components/Loader/Loader.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),RulesQuestions_RulesQuestions=function RulesQuestions(){var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray.Z)(_useState,2),questions=_useState2[0],setQuestions=_useState2[1],_useState3=(0,react.useState)([]),_useState4=(0,slicedToArray.Z)(_useState3,2),rules=_useState4[0],setRules=_useState4[1],_useContext=(0,react.useContext)(currentUserContext.E),isLoading=_useContext.isLoading,setIsLoading=_useContext.setIsLoading;return(0,react.useEffect)((function(){setIsLoading(!0),(0,Api.tI)().then((function(res){setQuestions(res)})).catch((function(){})),(0,Api.$c)().then((function(res){setRules(res)})).catch((function(){})).finally((function(){setIsLoading(!1)}))}),[]),(0,jsx_runtime.jsx)("main",{className:"rules-questions","aria-label":"страница с правилами и вопросами",children:isLoading?(0,jsx_runtime.jsx)(Loader.a,{}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Rules.i,{rules:rules}),(0,jsx_runtime.jsx)(Questions.G,{questions:questions})]})})};RulesQuestions_RulesQuestions.__docgenInfo={description:"",methods:[],displayName:"RulesQuestions"};var RulesQuestions_stories={title:"Pages/RulesQuestions",component:RulesQuestions_RulesQuestions,parameters:{layout:"fullscreen"}},Example={args:{}};Example.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Example.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {}\n}"},null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2$=_Example$parameters2.docs)||void 0===_Example$parameters2$?void 0:_Example$parameters2$.source)})});var __namedExportsOrder=["Example"]},"./src/components/Loader/Loader.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return Loader_Loader}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Loader_Loader=function Loader(_ref){var _ref$animationDelay=_ref.animationDelay,animationDelay=void 0===_ref$animationDelay?1:_ref$animationDelay,_ref$itemColor=_ref.itemColor,itemColor=void 0===_ref$itemColor?"#b0ff1a":_ref$itemColor;return(0,jsx_runtime.jsx)("div",{className:"loader-container",children:(0,jsx_runtime.jsx)("div",{className:"loader",children:(0,jsx_runtime.jsx)("div",{className:"loader__view",children:[-.9166666666666666,-.8333333333333334,-.75,-.6666666666666666,-.5833333333333334,-.5,-.4166666666666667,-.3333333333333333,-.25,-.16666666666666666,-.08333333333333333,0].map((function(delay,index){var key="loader-item".concat(index);return(0,jsx_runtime.jsx)("div",{style:{animationDelay:"".concat(animationDelay*delay,"s"),animationDuration:"".concat(animationDelay,"s"),backgroundColor:itemColor}},key)}))})})})};Loader_Loader.defaultProps={animationDelay:1,itemColor:"#b0ff1a"},Loader_Loader.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{animationDelay:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1},itemColor:{defaultValue:{value:'"#b0ff1a"',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/components/QuestionItem/QuestionItem.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return QuestionItem_QuestionItem}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function QuestionItem_QuestionItem(_ref){var question=_ref.question,answer=_ref.answer,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isActive=_useState2[0],setActive=_useState2[1];return(0,jsx_runtime.jsxs)("div",{className:"question",onClick:function handleToggle(){setActive(!isActive)},role:"presentation",children:[(0,jsx_runtime.jsxs)("div",{className:"question__container",children:[(0,jsx_runtime.jsx)("h2",{className:"question__title",children:question}),(0,jsx_runtime.jsx)("button",{type:"button",className:isActive?"question__button question__button_active":"question__button",children:(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M6 6L18 18",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M18 6L6 18",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),(0,jsx_runtime.jsx)("p",{className:isActive?"question__text question__text_active":"question__text",children:answer})]})}QuestionItem_QuestionItem.defaultProps={question:void 0,answer:void 0},QuestionItem_QuestionItem.__docgenInfo={description:"",methods:[],displayName:"QuestionItem",props:{question:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},answer:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1}}}},"./src/components/Questions/Questions.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{G:function(){return Questions_Questions}});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),SectionTitle=__webpack_require__("./src/components/SectionTitle/SectionTitle.jsx"),QuestionItem=__webpack_require__("./src/components/QuestionItem/QuestionItem.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Questions_Questions(_ref){var questions=_ref.questions;return(0,jsx_runtime.jsxs)("section",{className:"questions",children:[(0,jsx_runtime.jsx)(SectionTitle.N,{titleText:"Часто задаваемые вопросы"}),(0,jsx_runtime.jsx)("ul",{className:"questions__list",children:questions.map((function(item){return(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(QuestionItem.Z,{question:item.question,answer:item.answer})},item.id)}))})]})}Questions_Questions.defaultProps={questions:prop_types_default().arrayOf(prop_types_default().shape({id:void 0,question:void 0,answer:void 0}))},Questions_Questions.__docgenInfo={description:"",methods:[],displayName:"Questions",props:{questions:{defaultValue:{value:"PropTypes.arrayOf(\n  PropTypes.shape({\n    id: undefined,\n    question: undefined,\n    answer: undefined,\n  }),\n)",computed:!0},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!1},question:{name:"string",required:!1},answer:{name:"string",required:!1}}}},required:!1}}}},"./src/components/RuleItem/RuleItem.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{X:function(){return RuleItem_RuleItem}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),RuleItem_RuleItem=function RuleItem(_ref){var title=_ref.title,text=_ref.text,icon=_ref.icon,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isActive=_useState2[0],setActive=_useState2[1];return(0,jsx_runtime.jsxs)("article",{className:"rule",onClick:function handleToggle(){setActive(!isActive)},role:"presentation",children:[(0,jsx_runtime.jsx)("img",{className:"rule__img",alt:title,src:icon}),(0,jsx_runtime.jsxs)("div",{className:"rule__container",children:[(0,jsx_runtime.jsx)("h3",{className:"rule__title",children:title}),(0,jsx_runtime.jsx)("button",{type:"button",className:isActive?"rule__button rule__button_active":"rule__button",children:(0,jsx_runtime.jsx)("svg",{width:"44",height:"44",viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("g",{id:"icons",children:(0,jsx_runtime.jsx)("path",{id:"Vector",d:"M11 16.5L22 27.5L33 16.5",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})})})})]}),isActive&&(0,jsx_runtime.jsx)("p",{className:"rule__text",dangerouslySetInnerHTML:{__html:text}})]})};RuleItem_RuleItem.defaultProps={title:void 0,text:void 0,icon:void 0},RuleItem_RuleItem.__docgenInfo={description:"",methods:[],displayName:"RuleItem",props:{title:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},text:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},icon:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1}}}},"./src/components/Rules/Rules.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{i:function(){return Rules_Rules}});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),SectionTitle=__webpack_require__("./src/components/SectionTitle/SectionTitle.jsx"),SectionSubtitle=__webpack_require__("./src/components/SectionSubtitle/SectionSubtitle.jsx"),RuleItem=__webpack_require__("./src/components/RuleItem/RuleItem.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Rules_Rules=function Rules(_ref){var rules=_ref.rules;return(0,jsx_runtime.jsxs)("section",{className:"rules",children:[(0,jsx_runtime.jsx)(SectionTitle.N,{titleText:"Правила аренды"}),(0,jsx_runtime.jsx)(SectionSubtitle.V,{titleText:"Пожалуйста, ознакомьтесь с правилами перед бронированием"}),(0,jsx_runtime.jsx)("ul",{className:"rules__list",children:rules.map((function(item){return(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(RuleItem.X,{title:item.title,text:item.text,icon:item.icon})},item.id)}))})]})};Rules_Rules.defaultProps={rules:prop_types_default().arrayOf(prop_types_default().shape({id:void 0,text:void 0,title:void 0,img:void 0}))},Rules_Rules.__docgenInfo={description:"",methods:[],displayName:"Rules",props:{rules:{defaultValue:{value:"PropTypes.arrayOf(\n  PropTypes.shape({\n    id: undefined,\n    text: undefined,\n    title: undefined,\n    img: undefined,\n  }),\n)",computed:!0},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!1},text:{name:"string",required:!1},title:{name:"string",required:!1},img:{name:"string",required:!1}}}},required:!1}}}},"./src/components/SectionSubtitle/SectionSubtitle.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return SectionSubtitle_SectionSubtitle}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SectionSubtitle_SectionSubtitle=function SectionSubtitle(_ref){var titleText=_ref.titleText,titleClass=_ref.titleClass;return(0,jsx_runtime.jsx)("p",{className:"section-subtitle ".concat(titleClass),children:titleText})};SectionSubtitle_SectionSubtitle.defaultProps={titleText:void 0,titleClass:void 0},SectionSubtitle_SectionSubtitle.__docgenInfo={description:"",methods:[],displayName:"SectionSubtitle",props:{titleText:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},titleClass:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1}}}},"./src/components/SectionTitle/SectionTitle.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{N:function(){return SectionTitle_SectionTitle}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SectionTitle_SectionTitle=function SectionTitle(_ref){var titleText=_ref.titleText,titleClass=_ref.titleClass;return(0,jsx_runtime.jsx)("h2",{className:"section-title".concat(titleClass?" ".concat(titleClass):""),children:titleText})};SectionTitle_SectionTitle.defaultProps={titleText:"",titleClass:""},SectionTitle_SectionTitle.__docgenInfo={description:"",methods:[],displayName:"SectionTitle",props:{titleText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},titleClass:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/contexts/currentUserContext.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return CurrentUserContext}});var CurrentUserContext=__webpack_require__("./node_modules/react/index.js").createContext()},"./src/utils/Api.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function checkResponse(res){return res.ok?res.json():Promise.reject(new Error("Ошибка ".concat(res.status)))}function request(url,options){return fetch("https://spotit.acceleratorpracticum.ru/api/v1".concat(url),options).then(checkResponse)}function setHeaders(){var token=localStorage.getItem("token");return token?{Authorization:"Token ".concat(token),"Content-Type":"application/json"}:{"Content-Type":"application/json"}}function register(_ref){var email=_ref.email,password=_ref.password,first_name=_ref.first_name,last_name=_ref.last_name,re_password=_ref.re_password;return request("/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:email,password:password,first_name:first_name,last_name:last_name,re_password:re_password})})}function confirmRegister(_ref2){var email=_ref2.email,confirmation_code=_ref2.confirmation_code;return request("/users/activation/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:email,confirmation_code:confirmation_code})})}function resetPassConfirmCode(_ref4){var email=_ref4.email;return request("/users/reset_password_confirmation_code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:email})})}function getLocations(limit,start){return request("/locations/?limit=".concat(limit,"&offset=").concat(start),{method:"GET",headers:setHeaders()})}function getShortLocations(limit,start){return request("/short_locations/?limit=".concat(limit,"&offset=").concat(start),{method:"GET",headers:setHeaders()})}function getMapLocations(){return request("/map_locations/",{method:"GET",headers:setHeaders()})}function getEvents(){return request("/events/",{method:"GET",headers:setHeaders()})}function getQuestions(){return request("/questions/",{method:"GET",headers:setHeaders()})}function getRules(){return request("/rules/",{method:"GET",headers:setHeaders()})}function getCoworkingInfo(id){return request("/locations/".concat(id,"/"),{method:"GET",headers:setHeaders()})}function getEquipment(id,category){return request("/locations/".concat(id,"/equipments/?category=").concat(category),{method:"GET",headers:setHeaders()})}function getReviews(id,limit,start){return request("/locations/".concat(id,"/reviews/?limit=").concat(limit,"&offset=").concat(start),{method:"GET",headers:setHeaders()})}function getActiveOrders(){return request("/orders/?finished=false",{method:"GET",headers:setHeaders()})}function getFinishedOrders(){return request("/orders/?finished=true",{method:"GET",headers:setHeaders()})}function editUserData(data){return request("/users/me/",{method:"PATCH",headers:setHeaders(),body:JSON.stringify(data)})}function addFavorite(id){return request("/locations/".concat(id,"/favorite/"),{method:"POST",headers:setHeaders()})}function deleteFavorite(id){return request("/locations/".concat(id,"/favorite/"),{method:"DELETE",headers:setHeaders()})}__webpack_require__.d(__webpack_exports__,{$c:function(){return getRules},GW:function(){return confirmRegister},JC:function(){return getLocations},Jh:function(){return getReviews},QI:function(){return getMapLocations},Wm:function(){return resetPassConfirmCode},a3:function(){return addFavorite},fZ:function(){return getShortLocations},lQ:function(){return editUserData},pz:function(){return getFinishedOrders},qA:function(){return getCoworkingInfo},r7:function(){return deleteFavorite},tI:function(){return getQuestions},vw:function(){return getEvents},xf:function(){return getEquipment},z2:function(){return register},zB:function(){return getActiveOrders}})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);