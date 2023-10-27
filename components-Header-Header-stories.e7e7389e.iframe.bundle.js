"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[1314],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/images/profile-icons/profile-icon-header.svg":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=__webpack_require__.p+"static/media/profile-icon-header.23cd25f6b56d8831bcb6e6e881f43b0b.svg"},"./src/components/Header/Header.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:function(){return LoggedIn},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Header_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),useResize=__webpack_require__("./src/hooks/useResize.jsx"),Logo=__webpack_require__("./src/components/UI-kit/Logo/Logo.jsx"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),constants=__webpack_require__("./src/utils/constants.jsx"),react_router_dist=__webpack_require__("./node_modules/react-router/dist/index.js"),profile_icon_header=__webpack_require__("./src/images/profile-icons/profile-icon-header.svg"),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),currentUserContext=__webpack_require__("./src/contexts/currentUserContext.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),HeaderNav=function HeaderNav(){var _currentUser$image,_React$useContext=react.useContext(currentUserContext.E),currentUser=_React$useContext.currentUser,isLoggedIn=_React$useContext.isLoggedIn,handleOpenPopup=_React$useContext.handleOpenPopup,location=(0,react_router_dist.TH)();return isLoggedIn?(0,jsx_runtime.jsx)("div",{className:"header__profile",children:(0,jsx_runtime.jsxs)(dist.OL,{className:function className(_ref){return _ref.isActive?constants.h6:"header__profile_nav"},to:"/profile",children:[" ",(0,jsx_runtime.jsx)("img",{className:"header__profile_img",src:null!==(_currentUser$image=currentUser.image)&&void 0!==_currentUser$image?_currentUser$image:profile_icon_header.Z,alt:"иконка пользователя"}),currentUser&&currentUser.last_name&&(0,jsx_runtime.jsx)("p",{className:"header__profile_nav-info",children:"".concat(currentUser.first_name," ").concat(currentUser.last_name.substring(0,1),".")})]})}):(0,jsx_runtime.jsx)(dist.rU,{to:"/popup/login",state:{previousLocation:location},children:(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_size_small-s button_type_transparent",btnText:"Войти",onClick:handleOpenPopup})})};HeaderNav.__docgenInfo={description:"",methods:[],displayName:"HeaderNav"};function Navigation_Navigation(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("nav",{className:"navigation",children:(0,jsx_runtime.jsxs)("div",{className:"navigation__item",children:[(0,jsx_runtime.jsx)(dist.OL,{to:"/points",className:function className(_ref){return _ref.isActive?constants.f2:"navigation__link"},children:"Коворкинги"}),(0,jsx_runtime.jsx)(dist.OL,{to:"/faq",className:function className(_ref2){return _ref2.isActive?constants.f2:"navigation__link"},children:"Правила и вопросы"}),(0,jsx_runtime.jsx)(dist.OL,{to:"/contacts",className:function className(_ref3){return _ref3.isActive?constants.f2:"navigation__link"},children:"Контакты"})]})}),(0,jsx_runtime.jsx)(HeaderNav,{})]})}Navigation_Navigation.__docgenInfo={description:"",methods:[],displayName:"Navigation"};var components_Navigation_Navigation=Navigation_Navigation;function NavBar_NavBar(){var _React$useState=react.useState(!1),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),isToggle=_React$useState2[0],setIsToggle=_React$useState2[1];return(0,jsx_runtime.jsx)("nav",{className:"navbar ".concat(isToggle?"":"navbar_no-active"),children:(0,jsx_runtime.jsxs)("div",{className:"navbar__menu ".concat(isToggle?"navbar__menu_opened":""),children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",className:"navbar__checkbox",onClick:function onClick(){return setIsToggle(!isToggle)}}),(0,jsx_runtime.jsx)("span",{className:"navbar__toogle"}),(0,jsx_runtime.jsx)("span",{className:"navbar__toogle"}),(0,jsx_runtime.jsx)("span",{className:"navbar__toogle"}),(0,jsx_runtime.jsx)("ul",{className:"navbar__list",children:(0,jsx_runtime.jsx)(components_Navigation_Navigation,{})})]})})}NavBar_NavBar.__docgenInfo={description:"",methods:[],displayName:"NavBar"};var Navbar_NavBar=NavBar_NavBar,Header_Header=function Header(){var isScreenMediumTablet=(0,useResize.a)().isScreenMediumTablet;return(0,jsx_runtime.jsxs)("header",{className:"header",children:[(0,jsx_runtime.jsx)(dist.rU,{to:"/",children:(0,jsx_runtime.jsx)(Logo.T,{width:"102px",height:"20px",className:"logo_type_header"})}),isScreenMediumTablet?(0,jsx_runtime.jsx)(Navbar_NavBar,{}):(0,jsx_runtime.jsx)(components_Navigation_Navigation,{})]})};Header_Header.__docgenInfo={description:"",methods:[],displayName:"Header"};var _LoggedIn$parameters,_LoggedIn$parameters2,_LoggedIn$parameters3,Header_stories={title:"Components/Header",component:Header_Header,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{profileInfo:{description:"Информация о авторизованном пользователе"},isLoggedIn:{description:"авторизация пользователя"}},decorators:[function(Story){return(0,jsx_runtime.jsx)(dist.VK,{children:Story()})}]},LoggedIn={args:{isLoggedIn:!0}};LoggedIn.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},LoggedIn.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_LoggedIn$parameters=LoggedIn.parameters)||void 0===_LoggedIn$parameters?void 0:_LoggedIn$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    isLoggedIn: true\n  }\n}"},null===(_LoggedIn$parameters2=LoggedIn.parameters)||void 0===_LoggedIn$parameters2||null===(_LoggedIn$parameters3=_LoggedIn$parameters2.docs)||void 0===_LoggedIn$parameters3?void 0:_LoggedIn$parameters3.source)})});var __namedExportsOrder=["LoggedIn"]},"./src/components/UI-kit/Button/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return UI_kit_Button_Button}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button_Button(_ref){var btnClass=_ref.btnClass,btnType=_ref.btnType,btnText=_ref.btnText,onClick=_ref.onClick,isValidBtn=_ref.isValidBtn,backgroundColor=_ref.backgroundColor;return(0,jsx_runtime.jsx)("button",{className:"button ".concat(btnClass),type:btnType,onClick:onClick||void 0,style:backgroundColor&&{backgroundColor:backgroundColor},disabled:!isValidBtn,children:btnText})}Button_Button.defaultProps={btnClass:"button_type_form",btnText:"",btnType:"button",onClick:null,backgroundColor:null,isValidBtn:!0},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btnClass:{defaultValue:{value:'"button_type_form"',computed:!1},description:"",type:{name:"string"},required:!1},btnText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},btnType:{defaultValue:{value:'"button"',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},isValidBtn:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}};var UI_kit_Button_Button=Button_Button},"./src/components/UI-kit/Logo/Logo.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{T:function(){return Logo_Logo}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Logo_Logo=function Logo(_ref){var _ref$width=_ref.width,width=void 0===_ref$width?"100%":_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?"100%":_ref$height,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className;return(0,jsx_runtime.jsxs)("svg",{className:"logo ".concat(className),xmlns:"http://www.w3.org/2000/svg",width:width,height:height,alt:"Spot it!",viewBox:"0 0 102 20",children:[(0,jsx_runtime.jsx)("path",{d:"M7.17 2.185a8.24 8.24 0 0 0-1.487.139c-.486.092-.93.258-1.33.498-.399.22-.73.534-.99.94-.243.387-.365.885-.365 1.494 0 .737.183 1.337.548 1.798.365.442.808.784 1.33 1.024.416.184.86.34 1.329.47.47.129.947.249 1.434.36.504.11.99.22 1.46.331.486.11.956.25 1.408.415 1.06.387 1.903.94 2.528 1.66.643.72.965 1.669.965 2.85 0 1.106-.182 2.019-.547 2.738a4.807 4.807 0 0 1-1.434 1.77 5.912 5.912 0 0 1-2.086 1.024A9.936 9.936 0 0 1 7.43 20c-.886 0-1.738-.092-2.555-.277a6.877 6.877 0 0 1-2.19-.912 5.951 5.951 0 0 1-1.694-1.66c-.47-.683-.8-1.512-.991-2.49h2.372c.174.627.444 1.144.809 1.55.365.405.782.728 1.251.967.47.24.973.406 1.512.498a9.949 9.949 0 0 0 1.643.139c.521 0 1.025-.056 1.512-.166a4.23 4.23 0 0 0 1.33-.581 2.87 2.87 0 0 0 .912-.996c.226-.406.339-.894.339-1.466 0-.867-.218-1.512-.652-1.937-.435-.424-1.017-.747-1.747-.968-.487-.166-1-.304-1.538-.415-.539-.11-1.078-.23-1.616-.36a22.594 22.594 0 0 1-1.59-.442 9.57 9.57 0 0 1-1.435-.636c-.695-.35-1.277-.885-1.746-1.605-.47-.737-.704-1.66-.704-2.766 0-1.033.191-1.9.573-2.6A4.86 4.86 0 0 1 2.711 1.19 6.058 6.058 0 0 1 4.745.276 10.313 10.313 0 0 1 7.17 0c.695.018 1.32.083 1.877.194a5.402 5.402 0 0 1 1.616.525 4.957 4.957 0 0 1 1.955 1.66c.522.738.808 1.687.86 2.85h-2.215c-.07-.572-.235-1.052-.496-1.44a3.047 3.047 0 0 0-.912-.94 3.474 3.474 0 0 0-1.252-.498 6.014 6.014 0 0 0-1.433-.166ZM16 0h6.447c2.053 0 3.658.535 4.816 1.606C28.421 2.658 29 4.292 29 6.508c0 1.126-.193 2.113-.579 2.963a5.567 5.567 0 0 1-1.553 2.104c-.561.48-1.263.859-2.105 1.136-.842.277-1.772.415-2.79.415H18.29V20H16V0Zm5.868 10.938a7.62 7.62 0 0 0 1.948-.249c.631-.184 1.149-.47 1.552-.858.404-.37.72-.822.948-1.357.228-.535.342-1.228.342-2.077 0-2.806-1.439-4.21-4.316-4.21H18.29v8.751h3.578Z"}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"m41.54 12.03-.88 7.969h4l-.79-7.905 6.45 4.637 2-3.464-7.342-3.222 7.341-3.313-2-3.464-6.46 4.746.8-8.014h-4l.893 8.08L35 3.269l-2 3.464 7.341 3.313L33 13.267l2 3.464 6.54-4.701Z",clipRule:"evenodd"}),(0,jsx_runtime.jsx)("path",{d:"M60.194 20V2.188h-5.875V0h14v2.188h-5.874V20h-2.251Zm18.126 0h-2V0h2v20Zm7.874 0V2.235h-5.875V0h14v2.235h-5.874V20h-2.251Z"})]})};Logo_Logo.defaultProps={width:"100%",height:"100%",className:""},Logo_Logo.__docgenInfo={description:"",methods:[],displayName:"Logo",props:{width:{defaultValue:{value:'"100%"',computed:!1},description:"",type:{name:"string"},required:!1},height:{defaultValue:{value:'"100%"',computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/contexts/currentUserContext.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return CurrentUserContext}});var CurrentUserContext=__webpack_require__("./node_modules/react/index.js").createContext()},"./src/hooks/useResize.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return useResize}});var _home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/constants.jsx"),useResize=function useResize(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),_useState2=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_useState,2),width=_useState2[0],setWidth=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var handleResize=function handleResize(){return setWidth(window.innerWidth)};return handleResize(),setTimeout((function(){window.addEventListener("resize",handleResize)}),500),function(){window.removeEventListener("resize",handleResize)}}),[]),{width:width,isScreenSmall:width<_utils_constants__WEBPACK_IMPORTED_MODULE_1__.l0,isScreenMedium:width<_utils_constants__WEBPACK_IMPORTED_MODULE_1__.Q2,isScreenMediumTablet:width<_utils_constants__WEBPACK_IMPORTED_MODULE_1__.uG,isScreenLarge:width>_utils_constants__WEBPACK_IMPORTED_MODULE_1__.Q2}}},"./src/utils/constants.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A2:function(){return MOBILE_POINTS_QUANTITY},Gu:function(){return LAPTOP_MORE_POINTS_QUANTITY},H2:function(){return TABLET_POINTS_QUANTITY},H6:function(){return DEFAULT_LONGITUDE},HM:function(){return MAX_REVIEW_CHARACTERS_NUMBER},Hr:function(){return SUCCESSFUL_DISLIKE},JI:function(){return MOBILE_SHORT_POINTS_QUANTITY},K_:function(){return TABLET_MORE_POINTS_QUANTITY},LR:function(){return NOT_FOUND_ERROR_SUBTITLE},MY:function(){return SUBSCRIPTION_ERROR},Nz:function(){return LAPTOP_REVIEWS_QUANTITY},PG:function(){return WORKING_DAYS_COUNTS},Q2:function(){return SCREEN_MEDIUM},Q_:function(){return PROFILE_DATA_UPDATE},SJ:function(){return BASIC_ERROR},UT:function(){return MOBILE_MORE_SHORT_POINTS_QUANTITY},Ue:function(){return REVIEW_SUCCESS},V9:function(){return LAPTOP_POINTS_QUANTITY},VE:function(){return CALENDAR_MAX_ALLOWED_DAYS},Wp:function(){return NOT_FOUND_ERROR_TITLE},X3:function(){return LAPTOP_MORE_SHORT_POINTS_QUANTITY},XH:function(){return SUBSRIPTION_SUCCESS},Xd:function(){return routesPopup},Yi:function(){return EQUIPMENT_MEETING_CATEGORY},Zq:function(){return EQUIPMENT_GENERAL_CATEGORY},eT:function(){return AVATAR_UPLOAD_SUCCESS},f2:function(){return activeLinkClass},h6:function(){return headerActiveLinkClass},iP:function(){return TABLET_MORE_SHORT_POINTS_QUANTITY},l0:function(){return SCREEN_SMALL},m6:function(){return DEFAULT_ZOOM},mG:function(){return ALLOWED_TIME_RANGES},mV:function(){return DEFAULT_LATITUDE},nU:function(){return LAPTOP_SHORT_POINTS_QUANTITY},p5:function(){return MOBILE_MORE_POINTS_QUANTITY},pA:function(){return IMAGE_VALIDATION_ERROR},ph:function(){return SUCCESSFUL_LIKE},rq:function(){return ORDER_STATUSES},uG:function(){return SCREEN_MEDIUM_TABLET},vZ:function(){return TABLET_SHORT_POINTS_QUANTITY}});var SCREEN_MEDIUM=1270,SCREEN_MEDIUM_TABLET=1025,SCREEN_SMALL=770,LAPTOP_SHORT_POINTS_QUANTITY=6,TABLET_SHORT_POINTS_QUANTITY=4,MOBILE_SHORT_POINTS_QUANTITY=3,LAPTOP_MORE_SHORT_POINTS_QUANTITY=3,TABLET_MORE_SHORT_POINTS_QUANTITY=2,MOBILE_MORE_SHORT_POINTS_QUANTITY=2,LAPTOP_POINTS_QUANTITY=4,TABLET_POINTS_QUANTITY=3,MOBILE_POINTS_QUANTITY=3,LAPTOP_MORE_POINTS_QUANTITY=2,TABLET_MORE_POINTS_QUANTITY=2,MOBILE_MORE_POINTS_QUANTITY=2,LAPTOP_REVIEWS_QUANTITY=4,EQUIPMENT_GENERAL_CATEGORY="Рабочее место",EQUIPMENT_MEETING_CATEGORY="Переговорная",DEFAULT_LATITUDE=59.9,DEFAULT_LONGITUDE=30.3,DEFAULT_ZOOM=11,WORKING_DAYS_COUNTS={"пн-вс":7,"пн-сб":6,"пн-пт":5},CALENDAR_MAX_ALLOWED_DAYS=60,ALLOWED_TIME_RANGES=[{startTime:"09:00",endTime:"12:00"}],routesPopup=["/popup/login","/popup/register","/popup/reset_password"],ORDER_STATUSES={WAIT_PAY:"Ожидается оплата",PAID:"Оплачено",FINISH:"Завершен",CANCEL:"Отменен",NOT_PAID:"Не оплачено"},MAX_REVIEW_CHARACTERS_NUMBER=300,PROFILE_DATA_UPDATE="Данные успешно обновлены",NOT_FOUND_ERROR_TITLE="Этого мы не нашли",NOT_FOUND_ERROR_SUBTITLE="Попробуйте изменить параметры поиска и повторите попытку",SUCCESSFUL_LIKE="Добавлено в избранное",SUCCESSFUL_DISLIKE="Удалено из избранного",BASIC_ERROR="Что-то пошло не так...",REVIEW_SUCCESS="Отзыв успешно отправлен",SUBSRIPTION_SUCCESS="Вы успешно подписались",SUBSCRIPTION_ERROR="Нужно войти, чтобы подписаться",IMAGE_VALIDATION_ERROR="Не более 1 Мб, JPG или PNG",AVATAR_UPLOAD_SUCCESS="Изображение успешно обновлено",activeLinkClass="navigation__link navigation__link_active",headerActiveLinkClass="header__profile_nav header__profile_nav_active"}}]);