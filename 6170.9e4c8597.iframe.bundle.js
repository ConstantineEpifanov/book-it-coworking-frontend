"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[6170],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/ButtonsList/ButtonsList.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{C:function(){return ButtonsList_ButtonsList}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),defaultSort=function defaultSort(a,b){return a.name.localeCompare(b.name)},ButtonsList_ButtonsList=function ButtonsList(_ref){var _ref$listType=_ref.listType,listType=void 0===_ref$listType?"time-ranges":_ref$listType,_ref$itemsList=_ref.itemsList,itemsList=void 0===_ref$itemsList?[]:_ref$itemsList,_ref$isEnabled=_ref.isEnabled,isEnabled=void 0===_ref$isEnabled||_ref$isEnabled,_ref$isMultiselect=_ref.isMultiselect,isMultiselect=void 0!==_ref$isMultiselect&&_ref$isMultiselect,_ref$isSelectByRanges=_ref.isSelectByRanges,isSelectByRanges=void 0===_ref$isSelectByRanges||_ref$isSelectByRanges,_ref$allowedRanges=_ref.allowedRanges,allowedRanges=void 0===_ref$allowedRanges?[]:_ref$allowedRanges,_ref$ariaLabel=_ref.ariaLabel,ariaLabel=void 0===_ref$ariaLabel?"Список кнопок":_ref$ariaLabel,_ref$listClassName=_ref.listClassName,listClassName=void 0===_ref$listClassName?"":_ref$listClassName,_ref$itemsClassName=_ref.itemsClassName,itemsClassName=void 0===_ref$itemsClassName?"":_ref$itemsClassName,_ref$sortFunc=_ref.sortFunc,sortFunc=void 0===_ref$sortFunc?defaultSort:_ref$sortFunc,_useState=(0,react.useState)([]),_useState2=(0,slicedToArray.Z)(_useState,2),selectedItems=_useState2[0],setSelectedItems=_useState2[1],_useState3=(0,react.useState)([]),_useState4=(0,slicedToArray.Z)(_useState3,2),itemsStatesList=_useState4[0],setItemsStatesList=_useState4[1],getClassName=function getClassName(id){var resultClass="buttons-list__button button_type_buttons-list button_type_transparent".concat(itemsClassName?" ".concat(itemsClassName):"");return selectedItems.find((function(item){return item.id===id}))&&(resultClass+=" button_type_buttons-list-selected"),resultClass},isBelongsToSameRanges=function isBelongsToSameRanges(items,ranges){return!(ranges.length<1)&&ranges.some((function(range){return items.every((function(item){return range.includes(item.id)}))}))},handleClick=function handleClick(item,onClick){var resultSelected=[],currentItemsStatusList=itemsStatesList,isAlreadySelected=!!selectedItems.find((function(selectedItem){return item.id===selectedItem.id}));resultSelected=isAlreadySelected&&isSelectByRanges?[]:isAlreadySelected?selectedItems.filter((function(selectedItem){return selectedItem.id!==item.id})):[].concat((0,toConsumableArray.Z)(selectedItems),[item]),isSelectByRanges&&resultSelected.length>1&&!isMultiselect&&(resultSelected=function getAutoSelectedItems(currentSelectedItem,currentSelectedItems,currentItemsStatusList){var currentSelected=(0,toConsumableArray.Z)(currentSelectedItems).sort(sortFunc),firstSelectedElementIndex=currentItemsStatusList.findIndex((function(item){return item.id===currentSelected[0].id}));return isBelongsToSameRanges(currentSelectedItems,allowedRanges)?currentItemsStatusList.slice(firstSelectedElementIndex).reduce((function(result,item){return currentSelected.find((function(currentItem){return currentItem.id===item.id}))?(result.push(item),currentSelected=currentSelected.filter((function(selectedItem){return selectedItem.id!==item.id})),result):(item.isEnabled&&isBelongsToSameRanges([].concat((0,toConsumableArray.Z)(currentSelected),[item]),allowedRanges)&&currentSelected.length>0&&result.push(item),result)}),[]):[currentSelectedItem]}(item,resultSelected,currentItemsStatusList)),setSelectedItems(resultSelected),onClick(resultSelected)};return(0,react.useEffect)((function(){var resultItemsList=(0,toConsumableArray.Z)(itemsList).sort(sortFunc);setSelectedItems([]),setItemsStatesList(isEnabled?(0,toConsumableArray.Z)(resultItemsList):resultItemsList.map((function(item){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},item),{},{isEnabled:!1})})))}),[itemsList,isEnabled,sortFunc]),(0,jsx_runtime.jsx)("section",{className:"buttons-list","aria-label":ariaLabel,children:(0,jsx_runtime.jsx)("ul",{className:"buttons-list__container buttons-list__container_type_".concat(listType).concat(listClassName?" ".concat(listClassName):""),children:itemsStatesList.map((function(item){var id=item.id,name=item.name,_onClick=item.onClick,isButtonEnabled=item.isEnabled;return(0,jsx_runtime.jsx)("li",{className:"buttons-list__item",children:(0,jsx_runtime.jsx)(Button.Z,{btnClass:getClassName(id),btnType:"button",btnText:name,onClick:function onClick(){return handleClick(item,_onClick)},isValidBtn:isButtonEnabled},"".concat(name,"-button-").concat(id))},"".concat(name,"-item-").concat(id))}))})})};ButtonsList_ButtonsList.defaultProps={listType:"time-ranges",itemsList:[],isEnabled:!0,isMultiselect:!1,isSelectByRanges:!0,allowedRanges:[],ariaLabel:"Список кнопок",listClassName:"",itemsClassName:"",sortFunc:defaultSort},ButtonsList_ButtonsList.__docgenInfo={description:"",methods:[],displayName:"ButtonsList",props:{listType:{defaultValue:{value:'"time-ranges"',computed:!1},description:"",type:{name:"enum",value:[{value:'"time-ranges"',computed:!1},{value:'"spots"',computed:!1},{value:'"meeting-rooms"',computed:!1}]},required:!1},itemsList:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!1},name:{name:"string",required:!1},onClick:{name:"func",required:!1},isEnabled:{name:"bool",required:!1}}}},required:!1},isEnabled:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},isMultiselect:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isSelectByRanges:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},allowedRanges:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"arrayOf",value:{name:"number"}}},required:!1},ariaLabel:{defaultValue:{value:'"Список кнопок"',computed:!1},description:"",type:{name:"string"},required:!1},listClassName:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},itemsClassName:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},sortFunc:{defaultValue:{value:"(a, b) => a.name.localeCompare(b.name)",computed:!1},description:"",type:{name:"func"},required:!1}}}},"./src/components/UI-kit/Button/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return UI_kit_Button_Button}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button_Button(_ref){var btnClass=_ref.btnClass,btnType=_ref.btnType,btnText=_ref.btnText,onClick=_ref.onClick,isValidBtn=_ref.isValidBtn,backgroundColor=_ref.backgroundColor;return(0,jsx_runtime.jsx)("button",{className:"button ".concat(btnClass),type:btnType,onClick:onClick,style:backgroundColor&&{backgroundColor:backgroundColor},disabled:!isValidBtn,children:btnText})}Button_Button.defaultProps={btnClass:"button_type_form",btnText:"",btnType:"button",onClick:function onClick(){},backgroundColor:null,isValidBtn:!0},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btnClass:{defaultValue:{value:'"button_type_form"',computed:!1},description:"",type:{name:"string"},required:!1},btnText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},btnType:{defaultValue:{value:'"button"',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},isValidBtn:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}};var UI_kit_Button_Button=Button_Button},"./src/config/exampleBookingData.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{LE:function(){return spotsButtonsList},lc:function(){return meetingRoomsButtonsList},vp:function(){return timesButtonsList},zd:function(){return locationData}});var _EQUIPMENT_GENERAL_CA,_EQUIPMENT_MEETING_CA,_ORDERED_SPOTS,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_utils_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/constants.jsx"),timeClickFunc=function timeClickFunc(){},spotClickFunc=timeClickFunc,meetingRoomClickFunc=timeClickFunc,timesButtonsList=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(Array(15).fill(null).map((function(_,index){return{id:index,name:"".concat(7+index,":00 - ").concat(8+index,":00"),onClick:timeClickFunc,isEnabled:!0}}))),spotsButtonsList=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(Array(30).fill(null).map((function(_,index){return{id:index,name:"".concat(1+index),onClick:spotClickFunc,isEnabled:!0}}))),meetingRoomsButtonsList=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(Array(3).fill(null).map((function(_,index){return{id:index,name:"".concat(1+index," Переговорная"),onClick:meetingRoomClickFunc,isEnabled:!0}}))),getStringDateAfterDays=function getStringDateAfterDays(date,days){var newDate=new Date(date.getFullYear(),date.getMonth(),date.getDate()+days);return"".concat(newDate.getFullYear(),"-").concat(newDate.getMonth()+1,"-").concat(newDate.getDate())},todayDate=new Date,ORDERED_SPOTS=(_ORDERED_SPOTS={},(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ORDERED_SPOTS,_utils_constants__WEBPACK_IMPORTED_MODULE_0__.Zq,(_EQUIPMENT_GENERAL_CA={},(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_EQUIPMENT_GENERAL_CA,getStringDateAfterDays(todayDate,0),{5:{startTime:"09:00",endTime:"12:00"},7:{startTime:"11:00",endTime:"12:00"},11:{startTime:"14:00",endTime:"15:00"}}),(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_EQUIPMENT_GENERAL_CA,getStringDateAfterDays(todayDate,1),{4:{startTime:"09:00",endTime:"12:00"},8:{startTime:"07:00",endTime:"08:00"},9:{startTime:"16:00",endTime:"17:00"},23:{startTime:"18:00",endTime:"19:00"}}),(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_EQUIPMENT_GENERAL_CA,getStringDateAfterDays(todayDate,2),{5:{startTime:"09:00",endTime:"12:00"},8:{startTime:"10:00",endTime:"11:00"},10:{startTime:"10:00",endTime:"11:00"},14:{startTime:"09:00",endTime:"12:00"}}),_EQUIPMENT_GENERAL_CA)),(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ORDERED_SPOTS,_utils_constants__WEBPACK_IMPORTED_MODULE_0__.Yi,(_EQUIPMENT_MEETING_CA={},(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_EQUIPMENT_MEETING_CA,getStringDateAfterDays(todayDate,0),{1:{startTime:"09:00",endTime:"12:00"}}),(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_EQUIPMENT_MEETING_CA,getStringDateAfterDays(todayDate,1),{2:{startTime:"10:00",endTime:"11:00"}}),(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_EQUIPMENT_MEETING_CA,getStringDateAfterDays(todayDate,2),{1:{startTime:"14:00",endTime:"15:00"},2:{startTime:"11:00",endTime:"12:00"}}),_EQUIPMENT_MEETING_CA)),_ORDERED_SPOTS),getSpots=function getSpots(type,count){return(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(Array(count).fill(null).map((function(_,index){return{id:index,name:"".concat((index+1).toString()).concat(type===_utils_constants__WEBPACK_IMPORTED_MODULE_0__.Yi?" переговорная":""),price:type===_utils_constants__WEBPACK_IMPORTED_MODULE_0__.Yi?600:200,category:type,isOrdered:!1}})))},locationData={id:1,open_time:"07:00",close_time:"22:00",days_open:"пн-сб",dates:function getSpotsForDays(daysCount){for(var resultDays={},i=0;i<daysCount;i+=1){var _getStringDateAfterDa;resultDays=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},resultDays),{},(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},getStringDateAfterDays(todayDate,i),(_getStringDateAfterDa={},(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_getStringDateAfterDa,_utils_constants__WEBPACK_IMPORTED_MODULE_0__.Zq,getSpots(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.Zq,30)),(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_getStringDateAfterDa,_utils_constants__WEBPACK_IMPORTED_MODULE_0__.Yi,getSpots(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.Yi,3)),_getStringDateAfterDa)))}return resultDays}(3),getSpots:function getSpots(type,date,startTime,endTime){var resultSpots=this.dates[date][type],orderedSpots=ORDERED_SPOTS[type][date],startHour=startTime.split(":")[0],endHour=endTime.split(":")[0];return resultSpots.map((function(item){var orderedRange=orderedSpots[item.id];if(!orderedRange)return item;var orderedStartHour=orderedRange.startTime.split(":")[0],orderedEndHour=orderedRange.endTime.split(":")[0];return(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},item),{},{isOrdered:startHour>=orderedStartHour&&startHour<orderedEndHour||endHour>orderedStartHour&&endHour<=orderedEndHour})}))}}},"./src/utils/constants.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Gu:function(){return LAPTOP_MORE_POINTS_QUANTITY},H6:function(){return DEFAULT_LONGITUDE},HM:function(){return MAX_REVIEW_CHARACTERS_NUMBER},Nz:function(){return LAPTOP_REVIEWS_QUANTITY},PG:function(){return WORKING_DAYS_COUNTS},Q_:function(){return PROFILE_DATA_UPDATE},V9:function(){return LAPTOP_POINTS_QUANTITY},VE:function(){return CALENDAR_MAX_ALLOWED_DAYS},Xd:function(){return routesPopup},Yi:function(){return EQUIPMENT_MEETING_CATEGORY},Zq:function(){return EQUIPMENT_GENERAL_CATEGORY},m6:function(){return DEFAULT_ZOOM},mG:function(){return ALLOWED_TIME_RANGES},mV:function(){return DEFAULT_LATITUDE},nU:function(){return LAPTOP_SHORT_POINTS_QUANTITY},rq:function(){return ORDER_STATUSES}});var LAPTOP_SHORT_POINTS_QUANTITY=6,LAPTOP_POINTS_QUANTITY=4,LAPTOP_MORE_POINTS_QUANTITY=2,LAPTOP_REVIEWS_QUANTITY=5,EQUIPMENT_GENERAL_CATEGORY="Рабочее место",EQUIPMENT_MEETING_CATEGORY="Переговорная",DEFAULT_LATITUDE=59.9,DEFAULT_LONGITUDE=30.3,DEFAULT_ZOOM=11,WORKING_DAYS_COUNTS={"пн-вс":7,"пн-сб":6,"пн-пт":5},CALENDAR_MAX_ALLOWED_DAYS=60,ALLOWED_TIME_RANGES=[{startTime:"09:00",endTime:"12:00"}],routesPopup=["/popup/login","/popup/register","/popup/reset_password"],ORDER_STATUSES={WAIT_PAY:"Ожидается оплата",PAID:"Оплачено",FINISH:"Завершен",CANCEL:"Отменен",NOT_PAID:"Не оплачено"},MAX_REVIEW_CHARACTERS_NUMBER=300,PROFILE_DATA_UPDATE="Данные успешно обновлены"}}]);