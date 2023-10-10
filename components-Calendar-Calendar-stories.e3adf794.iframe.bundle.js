/*! For license information please see components-Calendar-Calendar-stories.e3adf794.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[7978],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/Calendar/Calendar.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:function(){return Example},__namedExportsOrder:function(){return __namedExportsOrder}});var _Example$parameters,_Example$parameters2,_Example$parameters2$,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Calendar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Calendar/Calendar.jsx");__webpack_exports__.default={title:"Components/Calendar",component:_Calendar__WEBPACK_IMPORTED_MODULE_0__.f,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{selectCallback:{description:"Функция колбэка при выборе даты"},isMultiSelect:{description:"Множественный выбор",control:{type:"boolean"}},initialDate:{description:"Начальная дата",control:{type:"date"}},maxDatesRange:{description:"Доступный промежуток дат",control:{type:"number"}}}};var Example={args:{isMultiSelect:!1}};Example.parameters=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Example.parameters),{},{docs:(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs),{},{source:(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    isMultiSelect: false\n  }\n}"},null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2$=_Example$parameters2.docs)||void 0===_Example$parameters2$?void 0:_Example$parameters2$.source)})});var __namedExportsOrder=["Example"]},"./src/components/Calendar/Calendar.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:function(){return Calendar_Calendar}});var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),getStartDayOfWeek=function getStartDayOfWeek(date){var dayNumber=new Date(date.getFullYear(),date.getMonth(),1).getDay();return 0===dayNumber?7:dayNumber},getMonthDays=function getMonthDays(date){return new Date(date.getFullYear(),date.getMonth()+1,0).getDate()},Calendar_Calendar=function Calendar(_ref){var _ref$selectCallback=_ref.selectCallback,selectCallback=void 0===_ref$selectCallback?null:_ref$selectCallback,_ref$isMultiSelect=_ref.isMultiSelect,isMultiSelect=void 0!==_ref$isMultiSelect&&_ref$isMultiSelect,_ref$initialDate=_ref.initialDate,initialDate=void 0===_ref$initialDate?null:_ref$initialDate,_ref$maxDatesRange=_ref.maxDatesRange,maxDatesRange=void 0===_ref$maxDatesRange?60:_ref$maxDatesRange,MONTHS_NAMES=["ЯНВАРЬ","ФЕВРАЛЬ","МАРТ","АПРЕЛЬ","МАЙ","ИЮНЬ","ИЮЛЬ","АВГУСТ","СЕНТЯБРЬ","ОКТЯБРЬ","НОЯБРЬ","ДЕКАБРЬ"],todayDate=new Date,lastPermitedDate=new Date(todayDate.getFullYear(),todayDate.getMonth(),todayDate.getDate()+maxDatesRange-1),_useState=(0,react.useState)(todayDate),_useState2=(0,slicedToArray.Z)(_useState,2),date=_useState2[0],setDate=_useState2[1],_useState3=(0,react.useState)([]),_useState4=(0,slicedToArray.Z)(_useState3,2),selectedDates=_useState4[0],setSelectedDates=_useState4[1],_useState5=(0,react.useState)(date.getMonth()),_useState6=(0,slicedToArray.Z)(_useState5,2),month=_useState6[0],setMonth=_useState6[1],_useState7=(0,react.useState)(date.getFullYear()),_useState8=(0,slicedToArray.Z)(_useState7,2),year=_useState8[0],setYear=_useState8[1],_useState9=(0,react.useState)(getStartDayOfWeek(date)),_useState10=(0,slicedToArray.Z)(_useState9,2),startDay=_useState10[0],setStartDay=_useState10[1],_useState11=(0,react.useState)(getMonthDays(date)),_useState12=(0,slicedToArray.Z)(_useState11,2),currentMonthDays=_useState12[0],setCurrentMonthDays=_useState12[1],days=new Date(date.getFullYear(),date.getMonth()+1,0).getDate(),isDateSelected=function isDateSelected(dateArray,cellDate){return dateArray.some((function(selectedDate){return selectedDate.getTime()===cellDate.getTime()}))},getCellContentClass=function getCellContentClass(nowDate,cellDay,currentDate,monthDays){var cellDate=new Date(currentDate.getFullYear(),currentDate.getMonth(),cellDay);return isDateSelected(selectedDates,cellDate)?" calendar__button_highlighted":cellDay<1?" calendar__button_previous-month":cellDay>monthDays?" calendar__button_next-month":function isDayDateEarlier(firstDate,secondDate){var firstDay=new Date(firstDate.getFullYear(),firstDate.getMonth(),firstDate.getDate()),secondDay=new Date(secondDate.getFullYear(),secondDate.getMonth(),secondDate.getDate());return firstDay.getTime()<secondDay.getTime()}(cellDate,nowDate)||function isDayDateLater(firstDate,secondDate){var firstDay=new Date(firstDate.getFullYear(),firstDate.getMonth(),firstDate.getDate()),secondDay=new Date(secondDate.getFullYear(),secondDate.getMonth(),secondDate.getDate());return firstDay.getTime()>secondDay.getTime()}(cellDate,lastPermitedDate)?" calendar__button_inaccessible-days":""};return(0,react.useEffect)((function(){setMonth(date.getMonth()),setYear(date.getFullYear()),setStartDay(getStartDayOfWeek(date)),setCurrentMonthDays(getMonthDays(date))}),[date]),(0,react.useEffect)((function(){initialDate&&setDate(new Date(initialDate))}),[initialDate]),(0,react.useEffect)((function(){selectCallback&&selectCallback(selectedDates)}),[selectedDates,selectCallback]),(0,jsx_runtime.jsxs)("article",{className:"calendar",children:[(0,jsx_runtime.jsxs)("header",{className:"calendar__header",children:[(0,jsx_runtime.jsx)("h3",{className:"calendar__header-title",children:"".concat(MONTHS_NAMES[month]," ").concat(year)}),(0,jsx_runtime.jsxs)("nav",{className:"calendar__navigation",children:[(0,jsx_runtime.jsx)("button",{className:"calendar__navigation-button calendar__navigation-button_type_previous","aria-label":"Предыдущий месяц",onClick:function handlePreviousClick(){setDate(new Date(date.getFullYear(),date.getMonth(),0))}}),(0,jsx_runtime.jsx)("button",{className:"calendar__navigation-button calendar__navigation-button_type_next","aria-label":"Следующий месяц",onClick:function handleNextClick(){setDate(new Date(date.getFullYear(),date.getMonth()+1,1))}})]})]}),(0,jsx_runtime.jsxs)("div",{className:"calendar__body",children:[["пн","вт","ср","чт","пт","сб","вс"].map((function(dayName){return(0,jsx_runtime.jsx)("div",{className:"calendar__cell calendar__cell_type_header",children:(0,jsx_runtime.jsx)("span",{children:dayName})},dayName)})),Array(function getCalendarDaysCount(daysOfMonth,startDayIndex){var resultDays=daysOfMonth+startDayIndex,daysRemainder=resultDays%7;return 0!==daysRemainder&&(resultDays+=7-daysRemainder),resultDays}(days,startDay-1)).fill(null).map((function(_,index){var cellDay=index-(startDay-2),key="cell".concat(index),cellText=function getCellText(cellDay,currentDate,monthDays){var resultDay=cellDay;return resultDay<1?new Date(currentDate.getFullYear(),currentDate.getMonth(),0).getDate()+resultDay:(resultDay>monthDays&&(resultDay-=monthDays),resultDay<10?"0".concat(resultDay):resultDay.toString())}(cellDay,date,currentMonthDays);return(0,jsx_runtime.jsx)("div",{className:"calendar__cell",children:(0,jsx_runtime.jsx)("button",{className:"calendar__button".concat(getCellContentClass(todayDate,cellDay,date,currentMonthDays)),onClick:function onClick(){return function handleCellClick(cellDay,monthDays){if(cellDay<1)setDate(new Date(date.getFullYear(),date.getMonth(),0));else if(cellDay>monthDays)setDate(new Date(date.getFullYear(),date.getMonth()+1,1));else{var cellDate=new Date(date.getFullYear(),date.getMonth(),cellDay);isDateSelected(selectedDates,cellDate)?setSelectedDates(selectedDates.filter((function(selectedDate){return selectedDate.getTime()!==cellDate.getTime()}))):setSelectedDates(isMultiSelect?function(prev){return[].concat((0,toConsumableArray.Z)(prev),[cellDate])}:[cellDate])}}(cellDay,currentMonthDays)},type:"button","aria-label":"".concat(MONTHS_NAMES[month]," ").concat(cellDay),children:cellText},"".concat(key,"button"))},key)}))]})]})};Calendar_Calendar.defaultProps={selectCallback:null,isMultiSelect:!1,initialDate:null,maxDatesRange:60},Calendar_Calendar.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{selectCallback:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},isMultiSelect:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},initialDate:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},maxDatesRange:{defaultValue:{value:"60",computed:!1},description:"",type:{name:"number"},required:!1}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);