"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[8435],{"./src/components/Map/Map.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MapDemo:function(){return MapDemo},__namedExportsOrder:function(){return __namedExportsOrder}});var _MapDemo$parameters,_MapDemo$parameters2,_MapDemo$parameters2$,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Map__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Map/Map.jsx"),_images_dummy_spot_jpg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/images/dummy-spot.jpg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Components/Map",component:_Map__WEBPACK_IMPORTED_MODULE_0__.e,tags:["autodocs"],parameters:{layout:"fullscreen"}};var points=[{coordinates:[59.89,30.29],id:1,rating:4,name:"Московский",small_photo:_images_dummy_spot_jpg__WEBPACK_IMPORTED_MODULE_1__,get_full_address_str:"г. Санкт-Петербург, Кантемировская улица, 22"},{coordinates:[59.91,30.31],id:2,rating:5,name:"Питерский",small_photo:_images_dummy_spot_jpg__WEBPACK_IMPORTED_MODULE_1__,get_full_address_str:"г. Санкт-Петербург, Невская 1"}],MapDemo=function MapDemo(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Map__WEBPACK_IMPORTED_MODULE_0__.e,{isActive:!0,points:points})};MapDemo.parameters=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},MapDemo.parameters),{},{docs:(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},null===(_MapDemo$parameters=MapDemo.parameters)||void 0===_MapDemo$parameters?void 0:_MapDemo$parameters.docs),{},{source:(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({originalSource:"() => <MainMap isActive points={points} />"},null===(_MapDemo$parameters2=MapDemo.parameters)||void 0===_MapDemo$parameters2||null===(_MapDemo$parameters2$=_MapDemo$parameters2.docs)||void 0===_MapDemo$parameters2$?void 0:_MapDemo$parameters2$.source)})});var __namedExportsOrder=["MapDemo"];MapDemo.__docgenInfo={description:"",methods:[],displayName:"MapDemo"}},"./src/components/Map/Map.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{e:function(){return MainMap}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),react_yandex_maps_esm=__webpack_require__("./node_modules/@pbe/react-yandex-maps/dist/react-yandex-maps.esm.js"),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),utils=__webpack_require__("./src/utils/utils.js"),constants=__webpack_require__("./src/utils/constants.jsx");var star=__webpack_require__.p+"static/media/star.9af0b25ab37c804ee2e5dd77701cbea0.svg";var tag=__webpack_require__.p+"static/media/tag.b57d197ae227d96a414c7d0874723016.svg",useResize=__webpack_require__("./src/hooks/useResize.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),MainMap=function MainMap(_ref){var points=_ref.points,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isMap=_useState2[0],setMap=_useState2[1],center=(0,utils.nD)(points),mapRef=(0,react.useRef)(null),_useResize=(0,useResize.a)(),isScreenSmall=_useResize.isScreenSmall,isScreenMedium=_useResize.isScreenMedium,isMobile=isScreenSmall||isScreenMedium;return(0,jsx_runtime.jsxs)("div",{className:"map__container",ref:mapRef,children:[isMobile&&(0,jsx_runtime.jsx)(Button.Z,{onClick:function handleShowFiltersClick(){console.log("handleShowFiltersClick")},btnClass:"button_type_show-filters",btnText:"Показать фильтры"}),(0,jsx_runtime.jsx)(Button.Z,{onClick:function handleMapButtonClick(){setMap(!isMap),isMap||mapRef.current.scrollIntoView({behavior:"smooth"})},btnClass:"button_type_tertiary-map".concat(isMap?" button_type_tertiary-map-shown":""),btnText:isMap?"Скрыть карту":"Показать карту"}),(0,jsx_runtime.jsx)(react_yandex_maps_esm.Yy,{children:(0,jsx_runtime.jsx)("div",{className:"map ".concat(isMap?"map_active":"map_inactive"),children:(0,jsx_runtime.jsx)(react_yandex_maps_esm.D5,{width:"100%",height:"741px",defaultState:{center:center,zoom:constants.m6,controls:["zoomControl","fullscreenControl"]},modules:["control.ZoomControl","control.FullscreenControl","geoObject.addon.balloon","geoObject.addon.hint"],children:points.map((function(point){var _point$rating;return(0,jsx_runtime.jsx)(react_yandex_maps_esm.ah,{defaultGeometry:point.coordinates,properties:{balloonContentHeader:'<img src="'.concat(point.small_photo,'" alt="').concat(point.name,'" class="map__image" height="150" width="200">'),balloonContentBody:'\n              <div class=\'map__body-wrapper\'>\n              <div class ="map__row">\n              <span class="map__name">'.concat(point.name,'</span><div class="map__rating-container"><span class="map__rating">').concat(null!==(_point$rating=point.rating)&&void 0!==_point$rating?_point$rating:"",'</span><img src="').concat(star,'" class="map__icon" alt="Рейтинг" /></div></div>\n              <div class ="map__address-container"><img src="').concat(tag,'" alt="Тег" /><span class="map__address">').concat(point.get_full_address_str,'</span></div><a href = "/points/').concat(point.id,'" class="map__button">Подробнее</a>\n              </div> '),balloonContentFooter:""},options:{iconLayout:"default#image",iconImageHref:"data:image/png;base64,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",iconImageSize:[40,40],iconImageOffset:[-20,-20]}},point.id)}))})})})]})};MainMap.defaultProps={points:[]},MainMap.__docgenInfo={description:"",methods:[],displayName:"MainMap",props:{points:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{coordinates:{name:"arrayOf",value:{name:"number"},required:!1},id:{name:"number",required:!1},rating:{name:"number",required:!1},name:{name:"string",required:!1},small_photo:{name:"string",required:!1},get_full_address_str:{name:"string",required:!1}}}},required:!1}}}},"./src/components/UI-kit/Button/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return UI_kit_Button_Button}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button_Button(_ref){var btnClass=_ref.btnClass,btnType=_ref.btnType,btnText=_ref.btnText,onClick=_ref.onClick,isValidBtn=_ref.isValidBtn,backgroundColor=_ref.backgroundColor;return(0,jsx_runtime.jsx)("button",{className:"button ".concat(btnClass),type:btnType,onClick:onClick||void 0,style:backgroundColor&&{backgroundColor:backgroundColor},disabled:!isValidBtn,children:btnText})}Button_Button.defaultProps={btnClass:"button_type_form",btnText:"",btnType:"button",onClick:null,backgroundColor:null,isValidBtn:!0},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btnClass:{defaultValue:{value:'"button_type_form"',computed:!1},description:"",type:{name:"string"},required:!1},btnText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},btnType:{defaultValue:{value:'"button"',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},isValidBtn:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}};var UI_kit_Button_Button=Button_Button},"./src/hooks/useResize.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return useResize}});var _home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/constants.jsx"),useResize=function useResize(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),_useState2=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_useState,2),width=_useState2[0],setWidth=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var handleResize=function handleResize(){return setWidth(window.innerWidth)};return handleResize(),setTimeout((function(){window.addEventListener("resize",handleResize)}),500),function(){window.removeEventListener("resize",handleResize)}}),[]),{width:width,isScreenSmall:width<_utils_constants__WEBPACK_IMPORTED_MODULE_1__.l0,isScreenMedium:width<_utils_constants__WEBPACK_IMPORTED_MODULE_1__.Q2,isScreenMediumTablet:width<_utils_constants__WEBPACK_IMPORTED_MODULE_1__.uG,isScreenLarge:width>_utils_constants__WEBPACK_IMPORTED_MODULE_1__.Q2}}},"./src/utils/constants.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A2:function(){return MOBILE_POINTS_QUANTITY},Gu:function(){return LAPTOP_MORE_POINTS_QUANTITY},H2:function(){return TABLET_POINTS_QUANTITY},H6:function(){return DEFAULT_LONGITUDE},HM:function(){return MAX_REVIEW_CHARACTERS_NUMBER},Hr:function(){return SUCCESSFUL_DISLIKE},JI:function(){return MOBILE_SHORT_POINTS_QUANTITY},K_:function(){return TABLET_MORE_POINTS_QUANTITY},LR:function(){return NOT_FOUND_ERROR_SUBTITLE},MY:function(){return SUBSCRIPTION_ERROR},Nz:function(){return LAPTOP_REVIEWS_QUANTITY},PG:function(){return WORKING_DAYS_COUNTS},Q2:function(){return SCREEN_MEDIUM},Q_:function(){return PROFILE_DATA_UPDATE},SJ:function(){return BASIC_ERROR},UT:function(){return MOBILE_MORE_SHORT_POINTS_QUANTITY},Ue:function(){return REVIEW_SUCCESS},V9:function(){return LAPTOP_POINTS_QUANTITY},VE:function(){return CALENDAR_MAX_ALLOWED_DAYS},WJ:function(){return SUCCESSFUL_LOGOUT},Wp:function(){return NOT_FOUND_ERROR_TITLE},X3:function(){return LAPTOP_MORE_SHORT_POINTS_QUANTITY},XH:function(){return SUBSRIPTION_SUCCESS},Xd:function(){return routesPopup},Yi:function(){return EQUIPMENT_MEETING_CATEGORY},Zh:function(){return LOGOUT_OTHER_DEVICES},Zq:function(){return EQUIPMENT_GENERAL_CATEGORY},eT:function(){return AVATAR_UPLOAD_SUCCESS},f2:function(){return activeLinkClass},h6:function(){return headerActiveLinkClass},iP:function(){return TABLET_MORE_SHORT_POINTS_QUANTITY},l0:function(){return SCREEN_SMALL},m6:function(){return DEFAULT_ZOOM},mG:function(){return ALLOWED_TIME_RANGES},mV:function(){return DEFAULT_LATITUDE},nU:function(){return LAPTOP_SHORT_POINTS_QUANTITY},p5:function(){return MOBILE_MORE_POINTS_QUANTITY},pA:function(){return IMAGE_VALIDATION_ERROR},ph:function(){return SUCCESSFUL_LIKE},r:function(){return SUCCESSFUL_ACCOUNT_DELETE},rq:function(){return ORDER_STATUSES},uG:function(){return SCREEN_MEDIUM_TABLET},vZ:function(){return TABLET_SHORT_POINTS_QUANTITY}});var SCREEN_MEDIUM=1270,SCREEN_MEDIUM_TABLET=1025,SCREEN_SMALL=770,LAPTOP_SHORT_POINTS_QUANTITY=6,TABLET_SHORT_POINTS_QUANTITY=4,MOBILE_SHORT_POINTS_QUANTITY=3,LAPTOP_MORE_SHORT_POINTS_QUANTITY=3,TABLET_MORE_SHORT_POINTS_QUANTITY=2,MOBILE_MORE_SHORT_POINTS_QUANTITY=2,LAPTOP_POINTS_QUANTITY=4,TABLET_POINTS_QUANTITY=3,MOBILE_POINTS_QUANTITY=3,LAPTOP_MORE_POINTS_QUANTITY=2,TABLET_MORE_POINTS_QUANTITY=2,MOBILE_MORE_POINTS_QUANTITY=2,LAPTOP_REVIEWS_QUANTITY=4,EQUIPMENT_GENERAL_CATEGORY="Рабочее место",EQUIPMENT_MEETING_CATEGORY="Переговорная",DEFAULT_LATITUDE=59.9,DEFAULT_LONGITUDE=30.3,DEFAULT_ZOOM=11,WORKING_DAYS_COUNTS={"пн-вс":7,"пн-сб":6,"пн-пт":5},CALENDAR_MAX_ALLOWED_DAYS=60,ALLOWED_TIME_RANGES=[{startTime:"09:00",endTime:"12:00"}],routesPopup=["/popup/login","/popup/register","/popup/reset_password"],ORDER_STATUSES={WAIT_PAY:"Ожидается оплата",PAID:"Оплачено",FINISH:"Завершен",CANCEL:"Отменен",NOT_PAID:"Не оплачено"},MAX_REVIEW_CHARACTERS_NUMBER=300,PROFILE_DATA_UPDATE="Данные успешно обновлены",NOT_FOUND_ERROR_TITLE="Этого мы не нашли",NOT_FOUND_ERROR_SUBTITLE="Попробуйте изменить параметры поиска и повторите попытку",SUCCESSFUL_LIKE="Добавлено в избранное",SUCCESSFUL_DISLIKE="Удалено из избранного",BASIC_ERROR="Что-то пошло не так...",REVIEW_SUCCESS="Отзыв успешно отправлен",SUBSRIPTION_SUCCESS="Вы успешно подписались",SUBSCRIPTION_ERROR="Нужно войти, чтобы подписаться",IMAGE_VALIDATION_ERROR="Не более 1 Мб, JPG или PNG",AVATAR_UPLOAD_SUCCESS="Изображение успешно обновлено",SUCCESSFUL_LOGOUT="Вы успешно вышли",LOGOUT_OTHER_DEVICES="Вы успешно вышли на других устройствах",SUCCESSFUL_ACCOUNT_DELETE="Аккаунт успешно удален",activeLinkClass="navigation__link navigation__link_active",headerActiveLinkClass="header__profile_nav header__profile_nav_active"},"./src/utils/utils.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{CN:function(){return formatPhone},cJ:function(){return getPopupText},nD:function(){return generateCenterFromPoints},nG:function(){return getMaxDate},p6:function(){return formatDate},p9:function(){return checkPath},vX:function(){return formatEventDate},z4:function(){return checkMobile}});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/constants.jsx");function formatEventDate(date){var dateComponents=date.split("-"),year=dateComponents[0].slice(2),month=dateComponents[1],day=dateComponents[2];return"".concat(month,"/").concat(day,"/").concat(year)}var generateCenterFromPoints=function generateCenterFromPoints(points){if(0===points.length)return[_constants__WEBPACK_IMPORTED_MODULE_0__.mV,_constants__WEBPACK_IMPORTED_MODULE_0__.H6];var totalLat=points.reduce((function(sum,point){return sum+point.coordinates[0]}),0),totalLng=points.reduce((function(sum,point){return sum+point.coordinates[1]}),0);return[totalLat/points.length,totalLng/points.length]},checkPath=function checkPath(el,location){return el.includes(location.pathname)};function formatPhone(phoneNumber){return phoneNumber.replace(/\D/g,"").replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,"+$1 $2 $3 $4 $5")}function formatDate(dateString){return new Date(dateString).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"}).replace(/ г\.$/,"")}var getPopupText=function getPopupText(booking){return booking.status===_constants__WEBPACK_IMPORTED_MODULE_0__.rq.PAID?"Бронирование уже оплачено.":booking.status===_constants__WEBPACK_IMPORTED_MODULE_0__.rq.WAIT_PAY||_constants__WEBPACK_IMPORTED_MODULE_0__.rq.NOT_PAID?"Бронирование еще находится в обработке.":"Отменить бронирование"},getMaxDate=function getMaxDate(){return(new Date).toISOString().split("T")[0]},checkMobile=function checkMobile(){return window.matchMedia("(max-width: 767px)").matches}},"./src/images/dummy-spot.jpg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"da6d0df36c06f1236f50.jpg"}}]);