"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[7533],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/PointsItem/PointsItem.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{P:function(){return PointsItem_PointsItem}});var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),swiper=(__webpack_require__("./node_modules/swiper/swiper-bundle.min.css"),__webpack_require__("./node_modules/swiper/swiper.min.css"),__webpack_require__("./node_modules/swiper/esm/react/swiper.js")),swiper_slide=__webpack_require__("./node_modules/swiper/esm/react/swiper-slide.js"),core_class=__webpack_require__("./node_modules/swiper/esm/components/core/core-class.js"),pagination=__webpack_require__("./node_modules/swiper/esm/components/pagination/pagination.js"),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),PointRating=__webpack_require__("./src/components/UI-kit/PointRating/PointRating.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LikeButton=function LikeButton(_ref){var isLiked=_ref.isLiked;return(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:isLiked?"black":"none",children:(0,jsx_runtime.jsx)("path",{d:"M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999Z",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};LikeButton.defaultProps={isLiked:void 0},LikeButton.__docgenInfo={description:"",methods:[],displayName:"LikeButton",props:{isLiked:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"bool"},required:!1}}};var Address=function Address(){return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,jsx_runtime.jsx)("path",{d:"M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};Address.__docgenInfo={description:"",methods:[],displayName:"Address"};var Metro=function Metro(){return(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,jsx_runtime.jsx)("path",{d:"M19.2948 20C19.2948 20 21.5498 17.32 21.7248 14.165C21.9548 10.165 20.4648 7.735 18.4848 6.015C17.5278 5.16457 16.4296 4.48774 15.2398 4.015L11.9998 20L8.75479 4C7.5553 4.45933 6.45157 5.1375 5.49979 6C3.52979 7.73 2.02979 10.18 2.25479 14.15C2.45479 17.33 4.70479 20 4.70479 20",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};Metro.__docgenInfo={description:"",methods:[],displayName:"Metro"};var GeneralRoom=function GeneralRoom(){return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,jsx_runtime.jsx)("path",{d:"M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};GeneralRoom.__docgenInfo={description:"",methods:[],displayName:"GeneralRoom"};var Time=function Time(){return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,jsx_runtime.jsx)("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M12 6V12L16 14",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};Time.__docgenInfo={description:"",methods:[],displayName:"Time"};var MeetingRoom=function MeetingRoom(){return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,jsx_runtime.jsx)("path",{d:"M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};MeetingRoom.__docgenInfo={description:"",methods:[],displayName:"MeetingRoom"};var Share=function Share(){return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,jsx_runtime.jsx)("path",{d:"M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M16 6L12 2L8 6",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M12 2V15",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};Share.__docgenInfo={description:"",methods:[],displayName:"Share"};var Api=__webpack_require__("./src/utils/Api.jsx");core_class.Z.use([pagination.Z]);var PointsItem_PointsItem=function PointsItem(_ref){var isCompact=_ref.isCompact,isListed=_ref.isListed,data=_ref.data,_useState=(0,react.useState)(data.is_favorited),_useState2=(0,slicedToArray.Z)(_useState,2),isLiked=_useState2[0],setLiked=_useState2[1],navigate=(0,dist.s0)(),time="".concat(data.days_open," ").concat(data.open_time,"–").concat(data.close_time);function onLikeClick(){isLiked?function handleDeleteFavorite(){(0,Api.r7)(data.id).then((function(){setLiked(!isLiked)})).catch((function(err){return new Error(err)})).finally((function(){return setLiked(!isLiked)}))}():function handleAddFavorite(){(0,Api.a3)(data.id).then((function(){setLiked(!isLiked)})).catch((function(err){return new Error(err)}))}()}var handleShare=function handleShare(){},handleDetailsButton=function handleDetailsButton(){navigate("/points/".concat(data.id),{replace:!1})};return isCompact?function compactCard(){var _data$rating;return(0,jsx_runtime.jsxs)("div",{className:"point",children:[(0,jsx_runtime.jsxs)("div",{className:"point__image-container",children:[(0,jsx_runtime.jsx)("img",{src:data.main_photo,alt:data.name,className:"point__image"}),(0,jsx_runtime.jsxs)("p",{className:"point__cost",children:["От ",data.low_price,"₽/час"]}),(0,jsx_runtime.jsx)(PointRating.A,{rating:null===(_data$rating=data.rating)||void 0===_data$rating?void 0:_data$rating.toFixed(1),optionalClass:"point-rating_on-image"})]}),(0,jsx_runtime.jsxs)("div",{className:"point__info-container",children:[(0,jsx_runtime.jsxs)("div",{className:"point__title-container",children:[(0,jsx_runtime.jsx)("h3",{className:"point__title",children:data.name}),(0,jsx_runtime.jsx)("button",{type:"button",className:"point__action-button",onClick:onLikeClick,"aria-labelledby":"Добавить в избранное",children:(0,jsx_runtime.jsx)(LikeButton,{isLiked:isLiked})})]}),(0,jsx_runtime.jsxs)("ul",{className:"point__info",children:[(0,jsx_runtime.jsxs)("li",{className:"point__list-item",children:[(0,jsx_runtime.jsx)(Address,{}),(0,jsx_runtime.jsx)("p",{className:"point__info-text",children:data.get_full_address_str})]}),(0,jsx_runtime.jsxs)("li",{className:"point__list-item",children:[(0,jsx_runtime.jsx)(Metro,{}),(0,jsx_runtime.jsx)("p",{className:"point__info-text",children:data.metro})]})]}),(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_type_form button_size_postmiddle",btnText:"Подробнее",onClick:handleDetailsButton})]})]})}():function largeCard(){var _data$rating2,photos=[{image:data.main_photo,id:0}].concat((0,toConsumableArray.Z)(data.extra_photo));return(0,jsx_runtime.jsxs)("div",{className:"point point_large ".concat(!isListed&&"point_own-page"),children:[(0,jsx_runtime.jsxs)("div",{className:"point__image-container point__image-container_large ".concat(!isListed&&"point__image-container_own-page"," "),children:[(0,jsx_runtime.jsxs)(swiper.t,{slidesPerView:1,spaceBetween:20,pagination:{el:".swiper-pagination-points",type:"bullets",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},children:[photos.map((function(item){return(0,jsx_runtime.jsx)(swiper_slide.o,{children:(0,jsx_runtime.jsx)("img",{src:item.image,alt:data.name,className:"point__image point__image_large ".concat(!isListed&&"point__image_own-page"," ")})},item.id)})),(0,jsx_runtime.jsx)("div",{className:"swiper-pagination-points",style:{bottom:"35px",left:"60%"}})]}),(0,jsx_runtime.jsxs)("p",{className:"point__cost z-index-2 ".concat(!isListed&&"point__cost_own-page"," "),children:["От ",data.low_price,"₽/час"]}),(0,jsx_runtime.jsx)(PointRating.A,{rating:null===(_data$rating2=data.rating)||void 0===_data$rating2?void 0:_data$rating2.toFixed(1),optionalClass:"point-rating_on-image ".concat(!isListed&&"point__rating-container_own-page"," ")}),!isListed&&(0,jsx_runtime.jsxs)("div",{className:"point__info-buttons z-index-2",children:[(0,jsx_runtime.jsx)("button",{type:"button",className:"point__action-button",onClick:onLikeClick,"aria-labelledby":"Добавить в избранное",children:(0,jsx_runtime.jsx)(LikeButton,{isLiked:isLiked})}),(0,jsx_runtime.jsx)("button",{type:"button",className:"point__action-button",onClick:handleShare,"aria-labelledby":"Поделиться",children:(0,jsx_runtime.jsx)(Share,{})})]})]}),(0,jsx_runtime.jsxs)("div",{className:"point__info-container",children:[isListed&&(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{className:"point__title-container",children:[(0,jsx_runtime.jsx)("h3",{className:"point__title",children:data.name}),(0,jsx_runtime.jsx)("button",{type:"button",className:"point__action-button",onClick:onLikeClick,"aria-labelledby":"Добавить в избранное",children:(0,jsx_runtime.jsx)(LikeButton,{isLiked:isLiked})})]}),(0,jsx_runtime.jsxs)("div",{className:"point__subtitle-container",children:[(0,jsx_runtime.jsx)("p",{className:"point__about",children:data.description}),(0,jsx_runtime.jsx)("button",{type:"button",className:"point__action-button",onClick:handleShare,"aria-labelledby":"Поделиться",children:(0,jsx_runtime.jsx)(Share,{})})]})]}),(0,jsx_runtime.jsxs)("ul",{className:"point__info point__info_large",children:[(0,jsx_runtime.jsxs)("li",{className:"point__list-item",children:[(0,jsx_runtime.jsx)(Address,{}),(0,jsx_runtime.jsx)("p",{className:"point__info-text",children:data.get_full_address_str})]}),(0,jsx_runtime.jsxs)("li",{className:"point__list-item",children:[(0,jsx_runtime.jsx)(Metro,{}),(0,jsx_runtime.jsx)("p",{className:"point__info-text",children:data.metro})]}),(0,jsx_runtime.jsxs)("li",{className:"point__list-item",children:[(0,jsx_runtime.jsx)(Time,{}),(0,jsx_runtime.jsx)("p",{className:"point__info-text",children:time})]}),(0,jsx_runtime.jsxs)("li",{className:"point__list-item",children:[(0,jsx_runtime.jsx)(GeneralRoom,{}),(0,jsx_runtime.jsxs)("p",{className:"point__info-text",children:["Мест в общей зоне:",(0,jsx_runtime.jsxs)("span",{className:"point__span",children:[" ",data.count_workspace]})]})]}),(0,jsx_runtime.jsxs)("li",{className:"point__list-item",children:[(0,jsx_runtime.jsx)(MeetingRoom,{}),(0,jsx_runtime.jsxs)("p",{className:"point__info-text",children:["Переговорных:",(0,jsx_runtime.jsxs)("span",{className:"point__span",children:[" ",data.count_meeting_room]})]})]})]}),(0,jsx_runtime.jsxs)("div",{className:"point__buttons",children:[(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_type_form button_size_middle",btnText:"Забронировать место"}),isListed&&(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_type_transparent button_size_middle",btnText:"Подробнее",onClick:handleDetailsButton})]})]})]})}()};PointsItem_PointsItem.defaultProps={isCompact:!1,isListed:!1,data:{id:void 0,rating:void 0,name:void 0,short_annotation:void 0,description:void 0,main_photo:void 0,extra_photo:[{id:void 0,image:void 0}],get_full_address_str:void 0,metro:void 0,days_open:void 0,open_time:void 0,close_time:void 0,low_price:void 0,count_workspace:void 0,count_meeting_room:void 0,is_favorited:!1}},PointsItem_PointsItem.__docgenInfo={description:"",methods:[],displayName:"PointsItem",props:{isCompact:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isListed:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},data:{defaultValue:{value:"{\n  id: undefined,\n  rating: undefined,\n  name: undefined,\n  short_annotation: undefined,\n  description: undefined,\n  main_photo: undefined,\n  extra_photo: [{ id: undefined, image: undefined }],\n  get_full_address_str: undefined,\n  metro: undefined,\n  days_open: undefined,\n  open_time: undefined,\n  close_time: undefined,\n  low_price: undefined,\n  count_workspace: undefined,\n  count_meeting_room: undefined,\n  is_favorited: false,\n}",computed:!1},description:"",type:{name:"shape",value:{id:{name:"number",required:!1},rating:{name:"union",value:[{name:"string"},{name:"number"}],required:!1},name:{name:"string",required:!1},short_annotation:{name:"string",required:!1},description:{name:"string",required:!1},days_open:{name:"string",required:!1},open_time:{name:"string",required:!1},close_time:{name:"string",required:!1},low_price:{name:"number",required:!1},main_photo:{name:"string",required:!1},extra_photo:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!0},image:{name:"string",required:!1}}},required:!1},get_full_address_str:{name:"string",required:!1},metro:{name:"string",required:!1},count_workspace:{name:"number",required:!1},count_meeting_room:{name:"number",required:!1},is_favorited:{name:"bool",required:!1}}},required:!1}}}},"./src/components/UI-kit/Button/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return UI_kit_Button_Button}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button_Button(_ref){var btnClass=_ref.btnClass,btnType=_ref.btnType,btnText=_ref.btnText,onClick=_ref.onClick,isValidBtn=_ref.isValidBtn,backgroundColor=_ref.backgroundColor;return(0,jsx_runtime.jsx)("button",{className:"button ".concat(btnClass),type:btnType,onClick:onClick,style:backgroundColor&&{backgroundColor:backgroundColor},disabled:!isValidBtn,children:btnText})}Button_Button.defaultProps={btnClass:"button_type_form",btnText:"",btnType:"button",onClick:function onClick(){},backgroundColor:null,isValidBtn:!0},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btnClass:{defaultValue:{value:'"button_type_form"',computed:!1},description:"",type:{name:"string"},required:!1},btnText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},btnType:{defaultValue:{value:'"button"',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},isValidBtn:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}};var UI_kit_Button_Button=Button_Button},"./src/components/UI-kit/PointRating/PointRating.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return PointRating_PointRating}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PointRating_PointRating=function PointRating(_ref){var rating=_ref.rating,optionalClass=_ref.optionalClass;return(0,jsx_runtime.jsxs)("div",{className:"point-rating ".concat(optionalClass),children:[(0,jsx_runtime.jsx)("p",{className:"point-rating__number",children:rating}),(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"#b0ff1a",children:(0,jsx_runtime.jsx)("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})};PointRating_PointRating.defaultProps={rating:void 0,optionalClass:void 0},PointRating_PointRating.__docgenInfo={description:"",methods:[],displayName:"PointRating",props:{rating:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},optionalClass:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1}}}},"./src/utils/Api.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function checkResponse(res){return res.ok?res.json():res.json().then((function(errorResponse){return errorResponse?Promise.reject(errorResponse):Promise.reject(new Error("Ошибка ".concat(res.statusText," ").concat(res.status)))}))}function request(url,options){return fetch("https://spotit.acceleratorpracticum.ru/api/v1".concat(url),options).then(checkResponse)}function setHeaders(){var token=localStorage.getItem("token");return token?{Authorization:"Token ".concat(token),"Content-Type":"application/json"}:{"Content-Type":"application/json"}}function register(_ref){var email=_ref.email,password=_ref.password,first_name=_ref.first_name,last_name=_ref.last_name,re_password=_ref.re_password;return request("/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:email,password:password,first_name:first_name,last_name:last_name,re_password:re_password})})}function confirmRegister(_ref2){var email=_ref2.email,confirmation_code=_ref2.confirmation_code;return request("/users/activation/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:email,confirmation_code:confirmation_code})})}function resetPassConfirmCode(_ref4){var email=_ref4.email;return request("/users/reset_password_confirmation_code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:email})})}function getLocations(limit,start){return request("/locations/?limit=".concat(limit,"&offset=").concat(start),{method:"GET",headers:setHeaders()})}function getShortLocations(limit,start){return request("/short_locations/?limit=".concat(limit,"&offset=").concat(start),{method:"GET",headers:setHeaders()})}function getMapLocations(){return request("/map_locations/",{method:"GET",headers:setHeaders()})}function getEvents(){return request("/events/",{method:"GET",headers:setHeaders()})}function getQuestions(){return request("/questions/",{method:"GET",headers:setHeaders()})}function getRules(){return request("/rules/",{method:"GET",headers:setHeaders()})}function getCoworkingInfo(id){return request("/locations/".concat(id,"/"),{method:"GET",headers:setHeaders()})}function getEquipment(id,category){return request("/locations/".concat(id,"/equipments/?category=").concat(category),{method:"GET",headers:setHeaders()})}function getReviews(id,limit,start){return request("/locations/".concat(id,"/reviews/?limit=").concat(limit,"&offset=").concat(start),{method:"GET",headers:setHeaders()})}function getActiveOrders(){return request("/orders/?finished=false",{method:"GET",headers:setHeaders()})}function getFinishedOrders(){return request("/orders/?finished=true",{method:"GET",headers:setHeaders()})}function publishReview(locationId,spotId,orderId,_ref5){var description=_ref5.description,rating=_ref5.rating;return request("/locations/".concat(locationId,"/spots/").concat(spotId,"/order/").concat(orderId,"/reviews/"),{method:"POST",headers:setHeaders(),body:JSON.stringify({description:description,rating:rating})})}function cancelOrder(locationId,spotId,orderId){return request("/locations/".concat(locationId,"/spots/").concat(spotId,"/order/").concat(orderId,"/"),{method:"PATCH",headers:setHeaders()})}function editUserData(data){return request("/users/me/",{method:"PATCH",headers:setHeaders(),body:JSON.stringify(data)})}function addFavorite(id){return request("/locations/".concat(id,"/favorite/"),{method:"POST",headers:setHeaders()})}function deleteFavorite(id){return request("/locations/".concat(id,"/favorite/"),{method:"DELETE",headers:setHeaders()})}function searchLocations(){var params=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},query=new URLSearchParams;return Object.keys(params).forEach((function(key){void 0!==params[key]&&null!==params[key]&&query.append(key,params[key])})),request("/locations/?".concat(query.toString()),{method:"GET",headers:setHeaders()})}__webpack_require__.d(__webpack_exports__,{$c:function(){return getRules},BV:function(){return searchLocations},GW:function(){return confirmRegister},JC:function(){return getLocations},Jh:function(){return getReviews},QI:function(){return getMapLocations},Wm:function(){return resetPassConfirmCode},a3:function(){return addFavorite},fZ:function(){return getShortLocations},lQ:function(){return editUserData},pz:function(){return getFinishedOrders},qA:function(){return getCoworkingInfo},r7:function(){return deleteFavorite},sl:function(){return cancelOrder},tI:function(){return getQuestions},vw:function(){return getEvents},xf:function(){return getEquipment},z2:function(){return register},zB:function(){return getActiveOrders},zU:function(){return publishReview}})}}]);