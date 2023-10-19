"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[2651],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/BookingsCard/BookingsCard.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{t:function(){return BookingsCard_BookingsCard}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),constants=__webpack_require__("./src/utils/constants.jsx"),Api=__webpack_require__("./src/utils/Api.jsx"),utils=__webpack_require__("./src/utils/utils.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),useApiError=__webpack_require__("./src/hooks/useApiError.js");var Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),Popup=__webpack_require__("./src/components/Popup/Popup.jsx"),StarRating=__webpack_require__("./src/components/UI-kit/StarRating/StarRating.jsx");var time=__webpack_require__.p+"static/media/time.b900fce9bae5f45c3b154568a1de1f2a.svg";var _statusLabels,card=__webpack_require__.p+"static/media/card.55cc540fde5cfb4d7fe66cea9e1d1b96.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),getStatusLabel=function getStatusLabel(status,className){return(0,jsx_runtime.jsx)("span",{className:"bookings-card__status bookings-card__status_".concat(className),children:status})},statusLabels=(_statusLabels={},(0,defineProperty.Z)(_statusLabels,constants.rq.WAIT_PAY,getStatusLabel(constants.rq.WAIT_PAY,"warn")),(0,defineProperty.Z)(_statusLabels,constants.rq.PAID,getStatusLabel(constants.rq.PAID,"success")),(0,defineProperty.Z)(_statusLabels,constants.rq.FINISH,getStatusLabel(constants.rq.FINISH,"main")),(0,defineProperty.Z)(_statusLabels,constants.rq.CANCEL,getStatusLabel(constants.rq.CANCEL,"alert")),(0,defineProperty.Z)(_statusLabels,constants.rq.NOT_PAID,getStatusLabel(constants.rq.NOT_PAID,"warn")),_statusLabels),BookingsCard_BookingsCard=function BookingsCard(_ref){var content,item=_ref.item,_usePopupOpen=function usePopupOpen(){var _location$state,location=(0,dist.TH)(),clearApiError=(0,useApiError.Z)().clearApiError,_React$useState=react.useState(!1),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),isOpenPopup=_React$useState2[0],setIsOpenPopup=_React$useState2[1],_React$useState3=react.useState(null==location||null===(_location$state=location.state)||void 0===_location$state?void 0:_location$state.previousLocation),_React$useState4=(0,slicedToArray.Z)(_React$useState3,2),previousLocation=_React$useState4[0],setPreviousLocation=_React$useState4[1],showPopup=(0,utils.p9)(constants.Xd,location),handleClosePopup=react.useCallback((function(){setIsOpenPopup(!1),showPopup&&(clearApiError(),setPreviousLocation(null),window.history.replaceState(null,null,"/"))}),[clearApiError,showPopup]);return react.useEffect((function(){function closeByEscape(evt){"Escape"===evt.key&&handleClosePopup()}function closeByOverlayClick(evt){(evt.target.classList.contains("popup")||evt.target.classList.contains("button_type_close"))&&handleClosePopup()}return isOpenPopup&&(document.addEventListener("keydown",closeByEscape),document.addEventListener("click",closeByOverlayClick)),function(){document.removeEventListener("keydown",closeByEscape),document.removeEventListener("click",closeByOverlayClick)}}),[isOpenPopup,handleClosePopup]),{isOpenPopup:isOpenPopup,handleOpenPopup:function handleOpenPopup(){setIsOpenPopup(!0),setPreviousLocation(location)},handleClosePopup:handleClosePopup,previousLocation:previousLocation}}(),isOpenPopup=_usePopupOpen.isOpenPopup,handleOpenPopup=_usePopupOpen.handleOpenPopup,handleClosePopup=_usePopupOpen.handleClosePopup,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isCancellationConfirmed=_useState2[0],setIsCancellationConfirmed=_useState2[1],_useState3=(0,react.useState)(!1),_useState4=(0,slicedToArray.Z)(_useState3,2),isReviewFormOpen=_useState4[0],setIsReviewFormOpen=_useState4[1],_useState5=(0,react.useState)(""),_useState6=(0,slicedToArray.Z)(_useState5,2),reviewText=_useState6[0],setReviewText=_useState6[1],_useState7=(0,react.useState)(0),_useState8=(0,slicedToArray.Z)(_useState7,2),reviewRating=_useState8[0],setReviewRating=_useState8[1],handleCloseBookingPopup=function handleCloseBookingPopup(){handleClosePopup(),setIsCancellationConfirmed(!1),setIsReviewFormOpen(!1)},handleOpenReviewForm=function handleOpenReviewForm(){setIsReviewFormOpen(!0),handleOpenPopup()};return content=isCancellationConfirmed?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("p",{className:"bookings-card__popup-text bookings-card__popup-text_type_long",children:["Бронирование «",item.location_name.toUpperCase()," с ",item.start_time," ","до ",item.end_time,"» отменено.",(0,jsx_runtime.jsx)("br",{})," Мы отправим вам подтверждение на почту и вернем предоплату."]}),(0,jsx_runtime.jsx)("p",{className:"bookings-card__popup-text",children:"Хотите создать бронирование на другую дату?"}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__button-container",children:[(0,jsx_runtime.jsx)(Button.Z,{btnText:"Назад",btnClass:"button__profile-transparent",onClick:handleCloseBookingPopup}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Создать",btnClass:"button__profile-edit",onClick:handleOpenReviewForm})]})]}):isReviewFormOpen?(0,jsx_runtime.jsxs)("div",{className:"bookings-card__popup-content",children:[(0,jsx_runtime.jsx)("p",{className:"bookings-card__popup-text bookings-card__popup-text_type_review",children:"Поставьте оценку и оставьте отзыв"}),(0,jsx_runtime.jsx)(StarRating.Z,{rating:reviewRating,onRatingChange:function handleRatingChange(rating){setReviewRating(rating)}}),(0,jsx_runtime.jsx)("textarea",{id:"review",name:"review",className:"bookings-card__review-text",minLength:"10",maxLength:constants.HM,placeholder:"Текст",value:reviewText,onChange:function handleReviewTextChange(e){var newText=e.target.value;setReviewText(newText)}}),(0,jsx_runtime.jsxs)("p",{className:"bookings-card__character-count",children:[reviewText.length,"/",constants.HM]}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Отправить",btnClass:"button__profile-review",onClick:function handleReviewSubmit(e){e.preventDefault(),(0,Api.zU)(item.location_id,item.spot,item.id,{description:reviewText,rating:reviewRating}).catch((function(){})).finally((function(){return handleClosePopup()})),setReviewText(""),setReviewRating(0)}})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("p",{className:"bookings-card__popup-text",children:[function getPopupText(booking){return booking.status===constants.rq.PAID?"Бронирование уже оплачено.":booking.status===constants.rq.WAIT_PAY||constants.rq.NOT_PAID?"Бронирование еще находится в обработке.":"Отменить бронирование"}(item),(0,jsx_runtime.jsx)("br",{}),"Вы уверены, что хотите отменить его?"]}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__button-container",children:[(0,jsx_runtime.jsx)(Button.Z,{btnText:"Назад",btnClass:"button__profile-transparent",onClick:handleCloseBookingPopup}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Отменить",btnClass:"button__profile-edit",onClick:function handleConfirmCancellation(){(0,Api.sl)(item.location_id,item.spot,item.id).finally((function(){setIsCancellationConfirmed(!0)}))}})]})]}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("li",{className:"bookings-card",children:[(0,jsx_runtime.jsx)("img",{className:"bookings-card__image",src:null==item?void 0:item.location_photo,alt:item.location_name}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__text-container",children:[(0,jsx_runtime.jsx)("h3",{className:"bookings-card__name",children:item.location_name}),(0,jsx_runtime.jsx)("div",{className:"bookings-card__status",children:statusLabels[item.status]}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__date-row",children:[(0,jsx_runtime.jsx)("img",{src:time,alt:"Иконка часов"}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__date-container",children:[(0,jsx_runtime.jsx)("p",{className:"bookings-card__date",children:(0,utils.p6)(item.date)}),(0,jsx_runtime.jsxs)("p",{className:"bookings-card__date",children:[item.start_time,"-",item.end_time]})]}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__price-container",children:[(0,jsx_runtime.jsx)("img",{src:card,alt:"Иконка платежной карты"}),(0,jsx_runtime.jsxs)("span",{className:"bookings-card__price",children:[item.bill," ₽"]})]})]}),item.isFinished?(0,jsx_runtime.jsx)(Button.Z,{btnText:"Оставить отзыв",btnClass:"button__profile-bookings",onClick:handleOpenReviewForm}):(0,jsx_runtime.jsx)(Button.Z,{btnText:"Отменить",btnClass:"button__profile-bookings",onClick:handleOpenPopup})]})]},item.id),(0,jsx_runtime.jsx)(Popup.Z,{isOpen:isOpenPopup,popupClass:"bookings-card__popup",onClickClose:handleCloseBookingPopup,children:content})]})};BookingsCard_BookingsCard.defaultProps={item:prop_types_default().shape({})},BookingsCard_BookingsCard.__docgenInfo={description:"",methods:[],displayName:"BookingsCard",props:{item:{defaultValue:{value:"PropTypes.shape({})",computed:!0},description:"",type:{name:"shape",value:{id:{name:"number",required:!1},location_photo:{name:"string",required:!1},location_name:{name:"string",required:!1},location_id:{name:"number",required:!1},spot:{name:"number",required:!1},date:{name:"string",required:!1},start_time:{name:"string",required:!1},end_time:{name:"string",required:!1},bill:{name:"string",required:!1},isFinished:{name:"bool",required:!1},status:{name:"enum",value:[{value:"ORDER_STATUSES.WAIT_PAY",computed:!0},{value:"ORDER_STATUSES.PAID",computed:!0},{value:"ORDER_STATUSES.FINISH",computed:!0},{value:"ORDER_STATUSES.CANCEL",computed:!0},{value:"ORDER_STATUSES.NOT_PAID",computed:!0}],required:!1}}},required:!1}}}},"./src/components/Popup/Popup.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return components_Popup_Popup}});var Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Popup_Popup(_ref){var isOpen=_ref.isOpen,children=_ref.children,onClickClose=_ref.onClickClose,popupClass=_ref.popupClass;return isOpen&&(0,jsx_runtime.jsx)("section",{className:"popup","aria-label":"всплывающая форма",children:(0,jsx_runtime.jsxs)("div",{className:"popup__container ".concat(popupClass),children:[children,(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_type_close",onClick:onClickClose})]})})}Popup_Popup.defaultProps={isOpen:!0,popupClass:"",onClickClose:function onClickClose(){}},Popup_Popup.__docgenInfo={description:"",methods:[],displayName:"Popup",props:{isOpen:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},popupClass:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onClickClose:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{description:"",type:{name:"element"},required:!0}}};var components_Popup_Popup=Popup_Popup},"./src/components/UI-kit/Button/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return UI_kit_Button_Button}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button_Button(_ref){var btnClass=_ref.btnClass,btnType=_ref.btnType,btnText=_ref.btnText,onClick=_ref.onClick,isValidBtn=_ref.isValidBtn,backgroundColor=_ref.backgroundColor;return(0,jsx_runtime.jsx)("button",{className:"button ".concat(btnClass),type:btnType,onClick:onClick,style:backgroundColor&&{backgroundColor:backgroundColor},disabled:!isValidBtn,children:btnText})}Button_Button.defaultProps={btnClass:"button_type_form",btnText:"",btnType:"button",onClick:function onClick(){},backgroundColor:null,isValidBtn:!0},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btnClass:{defaultValue:{value:'"button_type_form"',computed:!1},description:"",type:{name:"string"},required:!1},btnText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},btnType:{defaultValue:{value:'"button"',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},isValidBtn:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}};var UI_kit_Button_Button=Button_Button},"./src/components/UI-kit/StarRating/StarRating.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),StarRating=function StarRating(_ref){var rating=_ref.rating,onRatingChange=_ref.onRatingChange,_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(0),_React$useState2=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_React$useState,2),hoverRating=_React$useState2[0],setHoverRating=_React$useState2[1],handleStarClick=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(star){onRatingChange(star)}),[onRatingChange]),handleStarHover=function handleStarHover(star){setHoverRating(star)},renderStars=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){for(var stars=[],_loop=function _loop(i){stars.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:"button button_type_review ".concat(i<=(hoverRating||rating)?"filled":""),onClick:function onClick(){return handleStarClick(i)},onMouseEnter:function onMouseEnter(){return handleStarHover(i)},onMouseLeave:function onMouseLeave(){return handleStarHover(0)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:i<=(hoverRating||rating)?"#ffea30":"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",stroke:i<=(hoverRating||rating)?"#ffea30":"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},i))},i=1;i<=5;i+=1)_loop(i);return stars}),[rating,hoverRating,handleStarClick]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:renderStars})};StarRating.defaultProps={rating:0,onRatingChange:function onRatingChange(){}},StarRating.__docgenInfo={description:"",methods:[],displayName:"StarRating",props:{rating:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},onRatingChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}},__webpack_exports__.Z=react__WEBPACK_IMPORTED_MODULE_0__.memo(StarRating)},"./src/hooks/useApiError.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useApiError}});var _home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useApiError(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState({message:"",status:""}),_React$useState2=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_React$useState,2),isErrApi=_React$useState2[0],setIsErrApi=_React$useState2[1];isErrApi.message.email?setIsErrApi((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},isErrApi),{},{message:isErrApi.message.email[0]})):isErrApi.message.error&&setIsErrApi((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},isErrApi),{},{message:isErrApi.message.error[0]}));return{isErrApi:isErrApi,setIsErrApi:setIsErrApi,clearApiError:function clearApiError(){isErrApi&&setIsErrApi({message:"",status:""})}}}},"./src/utils/Api.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function checkResponse(res){return res.ok?res.json():res.json().then((function(errorResponse){return errorResponse?Promise.reject(errorResponse):Promise.reject(new Error("Ошибка ".concat(res.statusText," ").concat(res.status)))}))}function request(url,options){return fetch("https://spotit.acceleratorpracticum.ru/api/v1".concat(url),options).then(checkResponse)}function setHeaders(){var token=localStorage.getItem("token");return token?{Authorization:"Token ".concat(token),"Content-Type":"application/json"}:{"Content-Type":"application/json"}}function register(_ref){var email=_ref.email,password=_ref.password,first_name=_ref.first_name,last_name=_ref.last_name,re_password=_ref.re_password;return request("/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:email,password:password,first_name:first_name,last_name:last_name,re_password:re_password})})}function confirmRegister(_ref2){var email=_ref2.email,confirmation_code=_ref2.confirmation_code;return request("/users/activation/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:email,confirmation_code:confirmation_code})})}function resetPassConfirmCode(_ref4){var email=_ref4.email;return request("/users/reset_password_confirmation_code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:email})})}function getLocations(limit,start){return request("/locations/?limit=".concat(limit,"&offset=").concat(start),{method:"GET",headers:setHeaders()})}function getShortLocations(limit,start){return request("/short_locations/?limit=".concat(limit,"&offset=").concat(start),{method:"GET",headers:setHeaders()})}function getMapLocations(){return request("/map_locations/",{method:"GET",headers:setHeaders()})}function getEvents(){return request("/events/",{method:"GET",headers:setHeaders()})}function getQuestions(){return request("/questions/",{method:"GET",headers:setHeaders()})}function getRules(){return request("/rules/",{method:"GET",headers:setHeaders()})}function getCoworkingInfo(id){return request("/locations/".concat(id,"/"),{method:"GET",headers:setHeaders()})}function getEquipment(id,category){return request("/locations/".concat(id,"/equipments/?category=").concat(category),{method:"GET",headers:setHeaders()})}function getReviews(id,limit,start){return request("/locations/".concat(id,"/reviews/?limit=").concat(limit,"&offset=").concat(start),{method:"GET",headers:setHeaders()})}function getActiveOrders(){return request("/orders/?finished=false",{method:"GET",headers:setHeaders()})}function getFinishedOrders(){return request("/orders/?finished=true",{method:"GET",headers:setHeaders()})}function publishReview(locationId,spotId,orderId,_ref5){var description=_ref5.description,rating=_ref5.rating;return request("/locations/".concat(locationId,"/spots/").concat(spotId,"/order/").concat(orderId,"/reviews/"),{method:"POST",headers:setHeaders(),body:JSON.stringify({description:description,rating:rating})})}function cancelOrder(locationId,spotId,orderId){return request("/locations/".concat(locationId,"/spots/").concat(spotId,"/order/").concat(orderId,"/"),{method:"PATCH",headers:setHeaders()})}function editUserData(data){return request("/users/me/",{method:"PATCH",headers:setHeaders(),body:JSON.stringify(data)})}function addFavorite(id){return request("/locations/".concat(id,"/favorite/"),{method:"POST",headers:setHeaders()})}function deleteFavorite(id){return request("/locations/".concat(id,"/favorite/"),{method:"DELETE",headers:setHeaders()})}function searchLocations(){var params=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},query=new URLSearchParams;return Object.keys(params).forEach((function(key){void 0!==params[key]&&null!==params[key]&&query.append(key,params[key])})),request("/locations/?".concat(query.toString()),{method:"GET",headers:setHeaders()})}__webpack_require__.d(__webpack_exports__,{$c:function(){return getRules},BV:function(){return searchLocations},GW:function(){return confirmRegister},JC:function(){return getLocations},Jh:function(){return getReviews},QI:function(){return getMapLocations},Wm:function(){return resetPassConfirmCode},a3:function(){return addFavorite},fZ:function(){return getShortLocations},lQ:function(){return editUserData},pz:function(){return getFinishedOrders},qA:function(){return getCoworkingInfo},r7:function(){return deleteFavorite},sl:function(){return cancelOrder},tI:function(){return getQuestions},vw:function(){return getEvents},xf:function(){return getEquipment},z2:function(){return register},zB:function(){return getActiveOrders},zU:function(){return publishReview}})},"./src/utils/constants.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Gu:function(){return LAPTOP_MORE_POINTS_QUANTITY},H6:function(){return DEFAULT_LONGITUDE},HM:function(){return MAX_REVIEW_CHARACTERS_NUMBER},Nz:function(){return LAPTOP_REVIEWS_QUANTITY},PG:function(){return WORKING_DAYS_COUNTS},V9:function(){return LAPTOP_POINTS_QUANTITY},VE:function(){return CALENDAR_MAX_ALLOWED_DAYS},Xd:function(){return routesPopup},Yi:function(){return EQUIPMENT_MEETING_CATEGORY},Zq:function(){return EQUIPMENT_GENERAL_CATEGORY},m6:function(){return DEFAULT_ZOOM},mG:function(){return ALLOWED_TIME_RANGES},mV:function(){return DEFAULT_LATITUDE},nU:function(){return LAPTOP_SHORT_POINTS_QUANTITY},rq:function(){return ORDER_STATUSES}});var LAPTOP_SHORT_POINTS_QUANTITY=6,LAPTOP_POINTS_QUANTITY=4,LAPTOP_MORE_POINTS_QUANTITY=2,LAPTOP_REVIEWS_QUANTITY=5,EQUIPMENT_GENERAL_CATEGORY="Рабочее место",EQUIPMENT_MEETING_CATEGORY="Переговорная",DEFAULT_LATITUDE=59.9,DEFAULT_LONGITUDE=30.3,DEFAULT_ZOOM=11,WORKING_DAYS_COUNTS={"пн-вс":7,"пн-сб":6,"пн-пт":5},CALENDAR_MAX_ALLOWED_DAYS=60,ALLOWED_TIME_RANGES=[{startTime:"09:00",endTime:"12:00"}],routesPopup=["/popup/login","/popup/register","/popup/reset_password"],ORDER_STATUSES={WAIT_PAY:"Ожидается оплата",PAID:"Оплачено",FINISH:"Завершен",CANCEL:"Отменен",NOT_PAID:"Не оплачено"},MAX_REVIEW_CHARACTERS_NUMBER=300},"./src/utils/utils.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{CN:function(){return formatPhone},nD:function(){return generateCenterFromPoints},p6:function(){return formatDate},p9:function(){return checkPath},vX:function(){return formatEventDate}});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/constants.jsx");function formatEventDate(date){var dateComponents=date.split("-"),year=dateComponents[0].slice(2),month=dateComponents[1],day=dateComponents[2];return"".concat(month,"/").concat(day,"/").concat(year)}var generateCenterFromPoints=function generateCenterFromPoints(points){if(0===points.length)return[_constants__WEBPACK_IMPORTED_MODULE_0__.mV,_constants__WEBPACK_IMPORTED_MODULE_0__.H6];var totalLat=points.reduce((function(sum,point){return sum+point.coordinates[0]}),0),totalLng=points.reduce((function(sum,point){return sum+point.coordinates[1]}),0);return[totalLat/points.length,totalLng/points.length]},checkPath=function checkPath(el,location){return el.includes(location.pathname)};function formatPhone(phoneNumber){return phoneNumber.replace(/\D/g,"").replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,"+$1 $2 $3 $4 $5")}function formatDate(dateString){return new Date(dateString).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"}).replace(/ г\.$/,"")}},"./src/images/dummy-spot2.jpg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"04ff475c35a85ed7a793.jpg"}}]);