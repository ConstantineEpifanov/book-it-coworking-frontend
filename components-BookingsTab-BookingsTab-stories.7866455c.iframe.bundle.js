"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[3350],{"./src/components/BookingsTab/BookingsTab.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BookingsTabDemo:function(){return BookingsTabDemo},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return BookingsTab_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),BookingsCard=__webpack_require__("./src/components/BookingsCard/BookingsCard.jsx"),SectionTitle=__webpack_require__("./src/components/SectionTitle/SectionTitle.jsx"),Api=__webpack_require__("./src/utils/Api.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BookingsTab_BookingsTab=function BookingsTab(){var _useState=(0,react.useState)("active"),_useState2=(0,slicedToArray.Z)(_useState,2),activeTab=_useState2[0],setActiveTab=_useState2[1],_useState3=(0,react.useState)([]),_useState4=(0,slicedToArray.Z)(_useState3,2),bookings=_useState4[0],setBookings=_useState4[1];(0,react.useEffect)((function(){"active"===activeTab?(0,Api.zB)().then((function(data){var modData=data.map((function(item){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},item),{},{isFinished:!1})}));setBookings(modData)})).catch((function(){})):"finished"===activeTab&&(0,Api.pz)().then((function(data){var modData=data.map((function(item){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},item),{},{isFinished:!0})}));setBookings(modData)})).catch((function(){}))}),[activeTab]);var onUpdateStatus=function onUpdateStatus(itemId){var updatedBookings=bookings.filter((function(item){return item.id!==itemId}));setBookings(updatedBookings)};return(0,jsx_runtime.jsxs)("section",{className:"bookings",children:[(0,jsx_runtime.jsx)(SectionTitle.N,{titleText:"Бронирования",titleClass:"section-title_profile"}),(0,jsx_runtime.jsxs)("div",{className:"bookings__tabs",children:[(0,jsx_runtime.jsx)("button",{className:"bookings__tab-button ".concat("active"===activeTab?"bookings__tab-button_active":""),onClick:function onClick(){return setActiveTab("active")},children:"Активные"}),(0,jsx_runtime.jsx)("button",{className:"bookings__tab-button ".concat("finished"===activeTab?"bookings__tab-button_active":""),onClick:function onClick(){return setActiveTab("finished")},children:"Завершенные"})]}),(0,jsx_runtime.jsxs)("ul",{className:"bookings__card-list",children:[0===bookings.length&&(0,jsx_runtime.jsx)("span",{className:"bookings__nodata",children:"Пока бронирований нет"}),bookings.map((function(item){return(0,jsx_runtime.jsx)(BookingsCard.t,{item:item,onUpdateStatus:onUpdateStatus},item.id)}))]})]})};BookingsTab_BookingsTab.__docgenInfo={description:"",methods:[],displayName:"BookingsTab"};var _BookingsTabDemo$para,_BookingsTabDemo$para2,_BookingsTabDemo$para3,dummy_spot2=__webpack_require__("./src/images/dummy-spot2.jpg"),BookingsTab_stories={title:"Pages/Profile/Tabs/BookingsTab",component:BookingsTab_BookingsTab,tags:["autodocs"],parameters:{layout:"centered"}},BookingsTabDemo={args:{bookings:[{id:"1",spot:{name:"Парк",image:dummy_spot2},date:"6 сентября 2023",start_time:"12:00",end_time:"13:00",bill:200,isFinished:!1,status:"Confirmed"},{id:"2",spot:{name:"У моря",image:dummy_spot2},date:"7 сентября 2023",start_time:"12:00",end_time:"13:00",bill:200,isFinished:!1,status:"Processing"},{id:"3",spot:{name:"Особняк",image:dummy_spot2},date:"8 сентября 2023",start_time:"08:00",end_time:"10:00",bill:200,isFinished:!0}]}};BookingsTabDemo.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},BookingsTabDemo.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_BookingsTabDemo$para=BookingsTabDemo.parameters)||void 0===_BookingsTabDemo$para?void 0:_BookingsTabDemo$para.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    bookings: [{\n      id: "1",\n      spot: {\n        name: "Парк",\n        image: SpotPhoto\n      },\n      date: "6 сентября 2023",\n      start_time: "12:00",\n      end_time: "13:00",\n      bill: 200,\n      isFinished: false,\n      status: "Confirmed"\n    }, {\n      id: "2",\n      spot: {\n        name: "У моря",\n        image: SpotPhoto\n      },\n      date: "7 сентября 2023",\n      start_time: "12:00",\n      end_time: "13:00",\n      bill: 200,\n      isFinished: false,\n      status: "Processing"\n    }, {\n      id: "3",\n      spot: {\n        name: "Особняк",\n        image: SpotPhoto\n      },\n      date: "8 сентября 2023",\n      start_time: "08:00",\n      end_time: "10:00",\n      bill: 200,\n      isFinished: true\n    }]\n  }\n}'},null===(_BookingsTabDemo$para2=BookingsTabDemo.parameters)||void 0===_BookingsTabDemo$para2||null===(_BookingsTabDemo$para3=_BookingsTabDemo$para2.docs)||void 0===_BookingsTabDemo$para3?void 0:_BookingsTabDemo$para3.source)})});var __namedExportsOrder=["BookingsTabDemo"]},"./src/components/SectionTitle/SectionTitle.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{N:function(){return SectionTitle_SectionTitle}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SectionTitle_SectionTitle=function SectionTitle(_ref){var titleText=_ref.titleText,titleClass=_ref.titleClass;return(0,jsx_runtime.jsx)("h2",{className:"section-title".concat(titleClass?" ".concat(titleClass):""),children:titleText})};SectionTitle_SectionTitle.defaultProps={titleText:"",titleClass:""},SectionTitle_SectionTitle.__docgenInfo={description:"",methods:[],displayName:"SectionTitle",props:{titleText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},titleClass:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}}}}]);