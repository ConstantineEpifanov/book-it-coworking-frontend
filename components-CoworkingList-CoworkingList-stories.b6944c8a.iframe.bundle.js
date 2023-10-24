"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[644],{"./src/components/CoworkingList/CoworkingList.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:function(){return Example},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return CoworkingList_stories}});var _Example$parameters,_Example$parameters2,_Example$parameters2$,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),currentUserContext=__webpack_require__("./src/contexts/currentUserContext.js"),Loader=__webpack_require__("./src/components/Loader/Loader.jsx"),SectionTitle=__webpack_require__("./src/components/SectionTitle/SectionTitle.jsx"),SectionSubtitle=__webpack_require__("./src/components/SectionSubtitle/SectionSubtitle.jsx"),PointsList=__webpack_require__("./src/components/PointsList/PointsList.jsx"),Map=__webpack_require__("./src/components/Map/Map.jsx"),SearchForm=__webpack_require__("./src/components/Forms/SearchForm/SearchForm.jsx"),defaultState=(__webpack_require__("./src/images/dummy-spot.jpg"),{center:[59.9,30.3],zoom:11,controls:["zoomControl","fullscreenControl"]}),usePagination=__webpack_require__("./src/hooks/usePagination.js"),Api=__webpack_require__("./src/utils/Api.jsx"),constants=__webpack_require__("./src/utils/constants.jsx"),NotFoundError=__webpack_require__("./src/components/NotFoundError/NotFoundError.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CoworkingList_CoworkingList=function CoworkingList(){var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray.Z)(_useState,2),coworkingsArray=_useState2[0],setCoworkingsArray=_useState2[1],_useState3=(0,react.useState)(null),_useState4=(0,slicedToArray.Z)(_useState3,2),nextPageURL=_useState4[0],setNextPageURL=_useState4[1],_useState5=(0,react.useState)(!1),_useState6=(0,slicedToArray.Z)(_useState5,2),isNotFoundError=_useState6[0],setIsNotFoundError=_useState6[1],_useState7=(0,react.useState)([]),_useState8=(0,slicedToArray.Z)(_useState7,2),mapPoints=_useState8[0],setMapPoints=_useState8[1],_useContext=(0,react.useContext)(currentUserContext.E),isLoading=_useContext.isLoading,setIsLoading=_useContext.setIsLoading,_usePagination=(0,usePagination.Z)(),initialLimit=_usePagination.initialLimit,limit=_usePagination.limit,offset=_usePagination.offset,goToNextPage=_usePagination.goToNextPage,resetPagination=_usePagination.resetPagination,requestApproved=_usePagination.requestApproved,setRequestApproved=_usePagination.setRequestApproved,location=(0,dist.TH)(),coworkingsFromPromo=location.state?location.state.coworkingsFromPromo:void 0,getLocations=function getLocations(offsetParameter,limitParameter,search){var params={offset:offsetParameter,limit:limitParameter};search&&(params.search=search),(0,Api.BV)(params).then((function(res){setCoworkingsArray((function(prevCoworkings){return[].concat((0,toConsumableArray.Z)(prevCoworkings),(0,toConsumableArray.Z)(res.results))})),setNextPageURL(res.next)})).catch((function(error){console.error(error)})).finally((function(){setIsLoading(!1)}))};return(0,react.useEffect)((function(){(0,Api.QI)().then((function(res){setMapPoints(res)})).catch((function(error){console.error("Error loading map locations:",error)}))}),[]),(0,react.useEffect)((function(){var lastSearchRequest=sessionStorage.getItem("lastSearchRequest")||"";lastSearchRequest?(setIsLoading(!0),getLocations(offset,limit,lastSearchRequest)):coworkingsFromPromo&&Array.isArray(coworkingsFromPromo.results)&&coworkingsFromPromo.results.length>0?(setCoworkingsArray(coworkingsFromPromo.results),setNextPageURL(coworkingsFromPromo.next)):(setIsLoading(!0),getLocations(offset,initialLimit))}),[]),(0,react.useEffect)((function(){requestApproved&&(getLocations(offset,limit),setRequestApproved(!1))}),[limit,offset,initialLimit]),(0,react.useEffect)((function(){setIsNotFoundError(0===coworkingsArray.length)}),[coworkingsArray]),(0,jsx_runtime.jsx)("main",{className:"coworking-list",children:isLoading?(0,jsx_runtime.jsx)(Loader.a,{}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SectionTitle.N,{titleText:"Поиск по коворкингам сети SPOT IT",titleClass:"section-title_search"}),(0,jsx_runtime.jsx)(SectionSubtitle.V,{titleText:"Вы можете снять рабочее место в одном из коворкингов, представленных в нашем каталоге",titleClass:"section-subtitle_search"}),(0,jsx_runtime.jsx)(SearchForm.Z,{metroArray:(0,toConsumableArray.Z)(new Set(mapPoints.map((function(item){return item.metro}))))||[],handleUpdateCoworkings:function handleUpdateCoworkings(data){setCoworkingsArray(data.results),setNextPageURL(data.next)},limit:limit,offset:offset,resetPagination:resetPagination}),isNotFoundError?(0,jsx_runtime.jsx)(NotFoundError.d,{titleText:constants.Wp,subtitleText:constants.LR}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Map.e,{points:mapPoints,defaultState:defaultState}),(0,jsx_runtime.jsx)(PointsList.V,{isListed:!0,coworkingsArray:coworkingsArray,handleMoreClick:goToNextPage,isMoreButtonVisible:!!nextPageURL})]})]})})};CoworkingList_CoworkingList.__docgenInfo={description:"",methods:[],displayName:"CoworkingList"};var CoworkingList_stories={title:"Pages/CoworkingList",component:CoworkingList_CoworkingList,tags:["autodocs"],parameters:{layout:"fullscreen"}},Example={args:{data:[{id:1,title:"Коворкинг",subtitle:"Рядом находится прекрасная набережная для прогулок",about:"Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",rating:"5.0",lowPrice:400,mainPhoto:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",extraPhoto:[{id:2,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"},{id:3,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"},{id:4,url:"https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"}],address:"г. Санкт-Петербург, Кантемировская улица, 22",metro:"м. Лесная 200м",openTime:7,closeTime:20,generalQuantity:2,meetingQuantity:30},{id:2,title:"Коворкинг",subtitle:"Рядом находится прекрасная набережная для прогулок",about:"Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",rating:"5.0",lowPrice:400,mainPhoto:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",extraPhoto:[{id:2,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"},{id:3,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"},{id:4,url:"https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"}],address:"г. Санкт-Петербург, Кантемировская улица, 22",metro:"м. Лесная 200м",openTime:7,closeTime:20,generalQuantity:2,meetingQuantity:30},{id:3,title:"Коворкинг",subtitle:"Рядом находится прекрасная набережная для прогулок",about:"Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",rating:"5.0",lowPrice:400,mainPhoto:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",extraPhoto:[{id:2,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"},{id:3,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"},{id:4,url:"https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"}],address:"г. Санкт-Петербург, Кантемировская улица, 22",metro:"м. Лесная 200м",openTime:7,closeTime:20,generalQuantity:2,meetingQuantity:30},{id:4,title:"Коворкинг",subtitle:"Рядом находится прекрасная набережная для прогулок",about:"Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",rating:"5.0",lowPrice:400,mainPhoto:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",extraPhoto:[{id:2,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"},{id:3,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"},{id:4,url:"https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"}],address:"г. Санкт-Петербург, Кантемировская улица, 22",metro:"м. Лесная 200м",openTime:7,closeTime:20,generalQuantity:2,meetingQuantity:30},{id:5,title:"Коворкинг",subtitle:"Рядом находится прекрасная набережная для прогулок",about:"Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",rating:"5.0",lowPrice:400,mainPhoto:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",extraPhoto:[{id:2,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"},{id:3,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"},{id:4,url:"https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"}],address:"г. Санкт-Петербург, Кантемировская улица, 22",metro:"м. Лесная 200м",openTime:7,closeTime:20,generalQuantity:2,meetingQuantity:30},{id:6,title:"Коворкинг",subtitle:"Рядом находится прекрасная набережная для прогулок",about:"Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",rating:"5.0",lowPrice:400,mainPhoto:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",extraPhoto:[{id:2,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"},{id:3,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"},{id:4,url:"https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"}],address:"г. Санкт-Петербург, Кантемировская улица, 22",metro:"м. Лесная 200м",openTime:7,closeTime:20,generalQuantity:2,meetingQuantity:30}]}};Example.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Example.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    data: exampleCoworkingsData\n  }\n}"},null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2$=_Example$parameters2.docs)||void 0===_Example$parameters2$?void 0:_Example$parameters2$.source)})});var __namedExportsOrder=["Example"]},"./src/components/Loader/Loader.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return Loader_Loader}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Loader_Loader=function Loader(_ref){var _ref$animationDelay=_ref.animationDelay,animationDelay=void 0===_ref$animationDelay?1:_ref$animationDelay,_ref$itemColor=_ref.itemColor,itemColor=void 0===_ref$itemColor?"#b0ff1a":_ref$itemColor;return(0,jsx_runtime.jsx)("div",{className:"loader-container",children:(0,jsx_runtime.jsx)("div",{className:"loader",children:(0,jsx_runtime.jsx)("div",{className:"loader__view",children:[-.9166666666666666,-.8333333333333334,-.75,-.6666666666666666,-.5833333333333334,-.5,-.4166666666666667,-.3333333333333333,-.25,-.16666666666666666,-.08333333333333333,0].map((function(delay,index){var key="loader-item".concat(index);return(0,jsx_runtime.jsx)("div",{style:{animationDelay:"".concat(animationDelay*delay,"s"),animationDuration:"".concat(animationDelay,"s"),backgroundColor:itemColor}},key)}))})})})};Loader_Loader.defaultProps={animationDelay:1,itemColor:"#b0ff1a"},Loader_Loader.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{animationDelay:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1},itemColor:{defaultValue:{value:'"#b0ff1a"',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/components/PointsList/PointsList.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return PointsList_PointsList}});__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),PointsItem=__webpack_require__("./src/components/PointsItem/PointsItem.jsx"),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PointsList_PointsList=function PointsList(_ref){var isCompact=_ref.isCompact,isListed=_ref.isListed,coworkingsArray=_ref.coworkingsArray,handleMoreClick=_ref.handleMoreClick,isMoreButtonVisible=_ref.isMoreButtonVisible;return(0,jsx_runtime.jsxs)("div",{className:"points-list-container",children:[(0,jsx_runtime.jsx)("ul",{className:"points-list ".concat(isCompact&&"points-list_compact"),children:null==coworkingsArray?void 0:coworkingsArray.map((function(item){return(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(PointsItem.P,{isListed:isListed,isCompact:isCompact,data:item})},item.id)}))}),isMoreButtonVisible&&(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_more button_type_transparent button_size_large",btnText:"Еще",onClick:handleMoreClick}),isCompact&&(0,jsx_runtime.jsx)(dist.rU,{to:"/points",children:(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_more button_type_tertiary",btnText:"Больше локаций"})})]})};PointsList_PointsList.defaultProps={coworkingsArray:void 0,isCompact:!1,isListed:!1,handleMoreClick:function handleMoreClick(){},isMoreButtonVisible:!0},PointsList_PointsList.__docgenInfo={description:"",methods:[],displayName:"PointsList",props:{coworkingsArray:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"shape",value:{rating:{name:"number",required:!1},name:{name:"string",required:!1},short_annotation:{name:"string",required:!1},description:{name:"string",required:!1},days_open:{name:"string",required:!1},open_time:{name:"string",required:!1},close_time:{name:"string",required:!1},low_price:{name:"number",required:!1},main_photo:{name:"string",required:!1},extra_photo:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!0},image:{name:"string",required:!1}}},required:!1},get_full_address_str:{name:"string",required:!1},metro:{name:"string",required:!1},count_workspace:{name:"number",required:!1},count_meeting_room:{name:"number",required:!1}}}},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isListed:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},handleMoreClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},isMoreButtonVisible:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}}},"./src/hooks/usePagination.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return hooks_usePagination}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),constants=__webpack_require__("./src/utils/constants.jsx"),useResize=function useResize(){var _useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),width=_useState2[0],setWidth=_useState2[1];return(0,react.useEffect)((function(){var handleResize=function handleResize(){return setWidth(window.innerWidth)};return handleResize(),setTimeout((function(){window.addEventListener("resize",handleResize)}),500),function(){window.removeEventListener("resize",handleResize)}}),[]),{width:width,isScreenSmall:width<constants.l0,isScreenMedium:width<constants.Q2,isScreenLarge:width>constants.Q2}},hooks_usePagination=function usePagination(){var location=(0,dist.TH)(),width=useResize().width,isCoworkingPage=location.pathname.includes("points"),determineInitialLimit=function determineInitialLimit(){return window.innerWidth>constants.Q2?isCoworkingPage?constants.V9:constants.nU:window.innerWidth>constants.l0?isCoworkingPage?constants.H2:constants.vZ:isCoworkingPage?constants.A2:constants.JI},initialLimit=determineInitialLimit(),_useState=(0,react.useState)(determineInitialLimit()),_useState2=(0,slicedToArray.Z)(_useState,2),limit=_useState2[0],setLimit=_useState2[1],_useState3=(0,react.useState)(0),_useState4=(0,slicedToArray.Z)(_useState3,2),offset=_useState4[0],setOffset=_useState4[1],_useState5=(0,react.useState)(!1),_useState6=(0,slicedToArray.Z)(_useState5,2),requestApproved=_useState6[0],setRequestApproved=_useState6[1];return(0,react.useEffect)((function(){setLimit(determineInitialLimit())}),[width]),{initialLimit:initialLimit,limit:limit,offset:offset,goToNextPage:function goToNextPage(){setLimit(function determineMoreLimit(){return window.innerWidth>constants.Q2?isCoworkingPage?constants.Gu:constants.X3:window.innerWidth>constants.l0?isCoworkingPage?constants.K_:constants.iP:isCoworkingPage?constants.p5:constants.UT}()),setOffset((function(prevOffset){return prevOffset+limit})),setRequestApproved(!0)},resetPagination:function resetPagination(){setLimit(determineInitialLimit()),setOffset(0)},requestApproved:requestApproved,setRequestApproved:setRequestApproved}}}}]);