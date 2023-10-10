/*! For license information please see components-FavoritesTab-FavoritesTab-stories.2f21b82b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[1170],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./src/images/star.svg":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=__webpack_require__.p+"static/media/star.4e1cf4411991df33ff7fdf387eda8973.svg"},"./src/images/tag.svg":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=__webpack_require__.p+"static/media/tag.b57d197ae227d96a414c7d0874723016.svg"},"./src/components/FavoritesTab/FavoritesTab.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FavoritesTabDemo:function(){return FavoritesTabDemo},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return FavoritesTab_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),prop_types=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),tag=__webpack_require__("./src/images/tag.svg"),star=__webpack_require__("./src/images/star.svg");var heart_filled=__webpack_require__.p+"static/media/heart-filled.4a1f99c5970f1978da13e389398773b4.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),FavoriteCard=function FavoriteCard(_ref){var item=_ref.item;return(0,jsx_runtime.jsxs)("li",{className:"favorites__card",children:[(0,jsx_runtime.jsx)("img",{className:"favorites__card-image",src:item.image,alt:item.name}),(0,jsx_runtime.jsxs)("div",{className:"favorites__card-text-container",children:[(0,jsx_runtime.jsxs)("div",{className:"favorites__card-name-row",children:[(0,jsx_runtime.jsx)("span",{className:"favorites__card-name",children:item.name}),(0,jsx_runtime.jsx)("img",{src:heart_filled,className:"favorites__card-like",alt:"Убрать из Избранного"})]}),(0,jsx_runtime.jsxs)("div",{className:"favorites__card-address-row",children:[(0,jsx_runtime.jsx)("img",{src:tag.Z,className:"favorites__card-like",alt:"Метка адреса"}),(0,jsx_runtime.jsx)("p",{className:"favorites__card-address",children:item.street})]}),(0,jsx_runtime.jsxs)("div",{className:"favorites__card-rating-row",children:[(0,jsx_runtime.jsx)("img",{src:star.Z,className:"favorites__card-like",alt:"Иконка рейтинга"}),(0,jsx_runtime.jsx)("span",{className:"favorites__card-rating",children:item.rating})]}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Посмотреть",btnClass:"button__profile-edit"})]})]})},FavoritesTab_FavoritesTab=function FavoritesTab(_ref2){var favorites=_ref2.favorites;return(0,jsx_runtime.jsxs)("section",{className:"favorites",children:[(0,jsx_runtime.jsx)("h2",{className:"favorites__title",children:"Избранное"}),(0,jsx_runtime.jsx)("ul",{className:"favorites__card-list",children:favorites.map((function(item){return(0,jsx_runtime.jsx)(FavoriteCard,{item:item},item.id)}))})]})};FavoriteCard.defaultProps={item:prop_types_default().shape({})},FavoritesTab_FavoritesTab.defaultProps={favorites:[]},FavoritesTab_FavoritesTab.__docgenInfo={description:"",methods:[],displayName:"FavoritesTab",props:{favorites:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},name:{name:"string",required:!1},rating:{name:"number",required:!1},street:{name:"string",required:!1},image:{name:"string",required:!1}}}},required:!1}}};var _FavoritesTabDemo$par,_FavoritesTabDemo$par2,_FavoritesTabDemo$par3,dummy_spot2=__webpack_require__("./src/images/dummy-spot2.jpg"),FavoritesTab_stories={title:"Pages/Profile/Tabs/FavoritesTab",component:FavoritesTab_FavoritesTab,tags:["autodocs"],parameters:{layout:"centered"}},FavoritesTabDemo={args:{favorites:[{id:"1",street:"г. Санкт-Петербург, ул. Льва Толстого, 1-3",name:"Особняк",rating:4.8,image:dummy_spot2},{id:"2",street:"г. Санкт-Петербург, ул. Льва Толстого, 1-3",name:"У моря",rating:4.9,image:dummy_spot2}]}};FavoritesTabDemo.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},FavoritesTabDemo.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_FavoritesTabDemo$par=FavoritesTabDemo.parameters)||void 0===_FavoritesTabDemo$par?void 0:_FavoritesTabDemo$par.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    favorites: [{\n      id: "1",\n      street: "г. Санкт-Петербург, ул. Льва Толстого, 1-3",\n      name: "Особняк",\n      rating: 4.8,\n      image: SpotPhoto\n    }, {\n      id: "2",\n      street: "г. Санкт-Петербург, ул. Льва Толстого, 1-3",\n      name: "У моря",\n      rating: 4.9,\n      image: SpotPhoto\n    }]\n  }\n}'},null===(_FavoritesTabDemo$par2=FavoritesTabDemo.parameters)||void 0===_FavoritesTabDemo$par2||null===(_FavoritesTabDemo$par3=_FavoritesTabDemo$par2.docs)||void 0===_FavoritesTabDemo$par3?void 0:_FavoritesTabDemo$par3.source)})});var __namedExportsOrder=["FavoritesTabDemo"]},"./src/components/UI-kit/Button/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return UI_kit_Button_Button}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button_Button(_ref){var btnClass=_ref.btnClass,btnType=_ref.btnType,btnText=_ref.btnText,onClick=_ref.onClick,isValidBtn=_ref.isValidBtn,backgroundColor=_ref.backgroundColor;return(0,jsx_runtime.jsx)("button",{className:"button ".concat(btnClass),type:btnType,onClick:onClick,style:backgroundColor&&{backgroundColor:backgroundColor},disabled:!isValidBtn,children:btnText})}Button_Button.defaultProps={btnClass:"button_type_form",btnText:"",btnType:"button",onClick:function onClick(){},backgroundColor:null,isValidBtn:!0},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btnClass:{defaultValue:{value:'"button_type_form"',computed:!1},description:"",type:{name:"string"},required:!1},btnText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},btnType:{defaultValue:{value:'"button"',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},isValidBtn:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}};var UI_kit_Button_Button=Button_Button},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/images/dummy-spot2.jpg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"04ff475c35a85ed7a793.jpg"}}]);