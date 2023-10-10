"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[4577],{"./src/components/Main/Main.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MainDemo:function(){return MainDemo},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Main_stories}});var _MainDemo$parameters,_MainDemo$parameters2,_MainDemo$parameters3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),SectionTitle=__webpack_require__("./src/components/SectionTitle/SectionTitle.jsx"),PointsList=__webpack_require__("./src/components/PointsList/PointsList.jsx"),Promo=__webpack_require__("./src/components/Promo/Promo.jsx"),Discounts=__webpack_require__("./src/components/Discounts/Discounts.jsx"),Events=__webpack_require__("./src/components/Events/Events.jsx"),Api=__webpack_require__("./src/utils/Api.jsx"),useResize=function useResize(){var _useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),width=_useState2[0],setWidth=_useState2[1];return(0,react.useEffect)((function(){var handleResize=function handleResize(){return setWidth(window.innerWidth)};return handleResize(),setTimeout((function(){window.addEventListener("resize",handleResize)}),500),function(){window.removeEventListener("resize",handleResize)}}),[]),{width:width,isScreenSmall:width<770,isScreenMedium:width<1270,isScreenLarge:width>1270}},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Main_Main=function Main(){var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray.Z)(_useState,2),coworkingsArray=_useState2[0],setCoworkingsArray=_useState2[1],_useState3=(0,react.useState)([]),_useState4=(0,slicedToArray.Z)(_useState3,2),eventsArray=_useState4[0],setEventsArray=_useState4[1],_useState5=(0,react.useState)(0),_useState6=(0,slicedToArray.Z)(_useState5,2),pointsAddCount=_useState6[0],setPointsAddCount=_useState6[1];(0,react.useEffect)((function(){(0,Api.JC)().then((function(res){setCoworkingsArray(res)})).catch((function(){})),(0,Api.vw)().then((function(res){setEventsArray(res.results)})).catch((function(){}))}),[]);var size=useResize(),pointsRender=(0,react.useMemo)((function(){return coworkingsArray.slice(0,function pointsStartQuantity(){return size.isScreenLarge?6:size.isScreenMedium?4:3}()+pointsAddCount)}),[coworkingsArray,pointsAddCount]);return(0,jsx_runtime.jsxs)("main",{className:"main",children:[(0,jsx_runtime.jsx)(Promo.F,{}),(0,jsx_runtime.jsxs)("section",{className:"main__coworkings",children:[(0,jsx_runtime.jsx)(SectionTitle.N,{titleClass:"section-title_margin-to-block",titleText:"Наши коворкинги"}),(0,jsx_runtime.jsx)(PointsList.V,{isCompact:!0,coworkingsArray:coworkingsArray,handleMoreClick:function handleMoreClick(){setPointsAddCount((function(prev){return prev+(size.isScreenLarge?3:2)}))},pointsRender:pointsRender})]}),(0,jsx_runtime.jsx)(Discounts.p,{}),(0,jsx_runtime.jsx)(Events.z,{eventsArray:eventsArray})]})};Main_Main.__docgenInfo={description:"",methods:[],displayName:"Main"};var Main_stories={title:"Pages/Main",component:Main_Main,tags:["autodocs"],parameters:{layout:"fullscreen"}},MainDemo=function MainDemo(){return(0,jsx_runtime.jsx)(Main_Main,{})};MainDemo.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},MainDemo.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_MainDemo$parameters=MainDemo.parameters)||void 0===_MainDemo$parameters?void 0:_MainDemo$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <Main />"},null===(_MainDemo$parameters2=MainDemo.parameters)||void 0===_MainDemo$parameters2||null===(_MainDemo$parameters3=_MainDemo$parameters2.docs)||void 0===_MainDemo$parameters3?void 0:_MainDemo$parameters3.source)})});var __namedExportsOrder=["MainDemo"];MainDemo.__docgenInfo={description:"",methods:[],displayName:"MainDemo"}},"./src/components/Events/Events.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return Events_Events}});__webpack_require__("./node_modules/react/index.js");var swiper=__webpack_require__("./node_modules/swiper/esm/react/swiper.js"),swiper_slide=__webpack_require__("./node_modules/swiper/esm/react/swiper-slide.js"),core_class=__webpack_require__("./node_modules/swiper/esm/components/core/core-class.js"),pagination=__webpack_require__("./node_modules/swiper/esm/components/pagination/pagination.js"),EventsItem=__webpack_require__("./src/components/EventsItem/EventsItem.jsx"),SectionTitle=__webpack_require__("./src/components/SectionTitle/SectionTitle.jsx"),jsx_runtime=(__webpack_require__("./node_modules/swiper/swiper-bundle.min.css"),__webpack_require__("./node_modules/swiper/swiper.min.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));core_class.Z.use([pagination.Z]);var Events_Events=function Events(_ref){var eventsArray=_ref.eventsArray;return(0,jsx_runtime.jsxs)("section",{className:"events",children:[(0,jsx_runtime.jsx)(SectionTitle.N,{titleClass:"section-title_margin-to-subtitle",titleText:"Мероприятия"}),(0,jsx_runtime.jsx)("p",{className:"events__subheader",children:"Здесь собраны все анонсы о предстоящих мероприятиях на базе наших коворкингов"}),(0,jsx_runtime.jsx)("div",{className:"events__list",children:(0,jsx_runtime.jsx)(swiper.t,{spaceBetween:20,slidesPerView:3,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},children:eventsArray.map((function(event){return(0,jsx_runtime.jsx)(swiper_slide.o,{children:(0,jsx_runtime.jsx)(EventsItem.u,{event:event})},event.id)}))})}),(0,jsx_runtime.jsx)("div",{className:"swiper-pagination"})]})};Events_Events.defaultProps={eventsArray:[{id:void 0,name:void 0,image:void 0,address:void 0,meetingQuantity:void 0,url:void 0,date:void 0}]},Events_Events.__docgenInfo={description:"",methods:[],displayName:"Events",props:{eventsArray:{defaultValue:{value:"[\n  {\n    id: undefined,\n    name: undefined,\n    image: undefined,\n    address: undefined,\n    meetingQuantity: undefined,\n    url: undefined,\n    date: undefined,\n  },\n]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!0},name:{name:"string",required:!0},image:{name:"string",required:!1},address:{name:"string",required:!1},meetingQuantity:{name:"number",required:!1},url:{name:"string",required:!1},date:{name:"string",required:!0}}}},required:!1}}}},"./src/components/EventsItem/EventsItem.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{u:function(){return EventsItem_EventsItem}});var react=__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TagIcon=function TagIcon(){return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,jsx_runtime.jsx)("path",{d:"M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};TagIcon.__docgenInfo={description:"",methods:[],displayName:"TagIcon"};var UserIcon=function UserIcon(){return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,jsx_runtime.jsx)("path",{d:"M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z",stroke:"#122023",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};UserIcon.__docgenInfo={description:"",methods:[],displayName:"UserIcon"};var EventsItem_EventsItem=function EventsItem(_ref){var event=_ref.event,formattedDate=(0,react.useMemo)((function(){return function formatEventDate(date){var dateComponents=date.split("-"),year=dateComponents[0].slice(2),month=dateComponents[1],day=dateComponents[2];return"".concat(month,"/").concat(day,"/").concat(year)}(event.date)}),[event.date]);return(0,jsx_runtime.jsxs)("div",{className:"events-item",children:[(0,jsx_runtime.jsxs)("div",{className:"events-item__image-container",children:[(0,jsx_runtime.jsx)("img",{src:event.image,alt:event.name,className:"events-item__image"}),(0,jsx_runtime.jsx)("span",{className:"events-item__date",children:formattedDate})]}),(0,jsx_runtime.jsxs)("div",{className:"events-item__info__container",children:[(0,jsx_runtime.jsx)("h3",{className:"events-item__name",children:event.name}),(0,jsx_runtime.jsxs)("div",{className:"events-item__row",children:[(0,jsx_runtime.jsx)(TagIcon,{}),event.address]}),(0,jsx_runtime.jsxs)("div",{className:"events-item__row events-item__row_last",children:[(0,jsx_runtime.jsx)(UserIcon,{}),"Мест:",(0,jsx_runtime.jsx)("span",{className:"events-item__slots",children:event.meeting_quantity})]}),(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_type_transparent button_size_postmiddle",btnText:"К событию",onClick:function onClick(){event.url&&window.open(event.url,"_blank")}})]})]})};EventsItem_EventsItem.defaultProps={event:{id:void 0,name:void 0,image:void 0,address:void 0,meeting_quantity:void 0,url:void 0,date:void 0}},EventsItem_EventsItem.__docgenInfo={description:"",methods:[],displayName:"EventsItem",props:{event:{defaultValue:{value:"{\n  id: undefined,\n  name: undefined,\n  image: undefined,\n  address: undefined,\n  meeting_quantity: undefined,\n  url: undefined,\n  date: undefined,\n}",computed:!1},description:"",type:{name:"shape",value:{id:{name:"number",required:!0},name:{name:"string",required:!0},image:{name:"string",required:!1},address:{name:"string",required:!1},meeting_quantity:{name:"number",required:!1},url:{name:"string",required:!1},date:{name:"string",required:!0}}},required:!1}}}},"./src/components/PointsList/PointsList.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return PointsList_PointsList}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),PointsItem=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/PointsItem/PointsItem.jsx")),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PointsList_PointsList=function PointsList(_ref){var isCompact=_ref.isCompact,isListed=_ref.isListed,pointsRender=_ref.pointsRender,handleMoreClick=_ref.handleMoreClick;return(0,jsx_runtime.jsxs)("div",{className:"points-list-container",children:[(0,jsx_runtime.jsx)("ul",{className:"points-list ".concat(isCompact&&"points-list_compact"),children:null==pointsRender?void 0:pointsRender.map((function(item){return(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(PointsItem.P,(0,objectSpread2.Z)({isListed:isListed,isCompact:isCompact},item))},item.id)}))}),pointsRender&&(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_more button_type_transparent button_size_large",btnText:"Больше локаций",onClick:handleMoreClick})]})};PointsList_PointsList.defaultProps={pointsRender:void 0,isCompact:!1,isListed:!1,handleMoreClick:function handleMoreClick(){}},PointsList_PointsList.__docgenInfo={description:"",methods:[],displayName:"PointsList",props:{pointsRender:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"shape",value:{rating:{name:"number",required:!1},name:{name:"string",required:!1},short_annotation:{name:"string",required:!1},description:{name:"string",required:!1},days_open:{name:"string",required:!1},open_time:{name:"string",required:!1},close_time:{name:"string",required:!1},low_price:{name:"number",required:!1},main_photo:{name:"string",required:!1},extra_photo:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!0},image:{name:"string",required:!1}}},required:!1},get_full_address_str:{name:"string",required:!1},metro:{name:"string",required:!1},count_workspace:{name:"number",required:!1},count_meeting_room:{name:"number",required:!1}}}},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isListed:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},handleMoreClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}}},"./src/utils/Api.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function checkResponse(res){return res.ok?res.json():Promise.reject(new Error("Ошибка ".concat(res.status)))}function request(url,options){return fetch("http://185.41.160.27/api/v1".concat(url),options).then(checkResponse)}function setHeaders(){var token=localStorage.getItem("token");return token?{Authorization:"Token ".concat(token),"Content-Type":"application/json"}:{"Content-Type":"application/json"}}function getLocations(){return request("/locations/",{method:"GET",headers:setHeaders()})}function getEvents(){return request("/events/",{method:"GET",headers:setHeaders()})}function getQuestions(){return request("/questions/",{method:"GET",headers:setHeaders()})}function getRules(){return request("/rules/",{method:"GET",headers:setHeaders()})}__webpack_require__.d(__webpack_exports__,{$c:function(){return getRules},JC:function(){return getLocations},tI:function(){return getQuestions},vw:function(){return getEvents}})}}]);