"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[2111],{"./src/components/Coworking/Coworking.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:function(){return Example},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Coworking_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),PointsItem=__webpack_require__("./src/components/PointsItem/PointsItem.jsx"),EquipmentList=__webpack_require__("./src/components/EquipmentList/EquipmentList.jsx"),ReviewList=__webpack_require__("./src/components/ReviewList/ReviewList.jsx"),SectionTitle=__webpack_require__("./src/components/SectionTitle/SectionTitle.jsx"),Loader=__webpack_require__("./src/components/Loader/Loader.jsx"),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");var _404_Error=__webpack_require__.p+"static/media/404-Error.35986ec864cd5876da6bc73312673b4e.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PageNotFound_PageNotFound=function PageNotFound(){return(0,jsx_runtime.jsxs)("section",{className:"not-found","aria-label":"страница не найдена",children:[(0,jsx_runtime.jsxs)("div",{className:"not-found__inner",children:[(0,jsx_runtime.jsx)("img",{alt:"страница по данному адресу не найдена - ошибка 404",src:_404_Error,className:"not-found__image"}),(0,jsx_runtime.jsx)("h4",{className:"not-found__title",children:"Сожалеем, но здесь ничего нет"})]}),(0,jsx_runtime.jsx)(react_router_dom_dist.rU,{to:"/",children:(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_type_transparent button_size_medium",btnText:"Перейти на главную",onClick:function onClick(){}})})]})};PageNotFound_PageNotFound.__docgenInfo={description:"",methods:[],displayName:"PageNotFound"};var _Example$parameters,_Example$parameters2,_Example$parameters2$,components_PageNotFound_PageNotFound=PageNotFound_PageNotFound,Api=__webpack_require__("./src/utils/Api.jsx"),constants=__webpack_require__("./src/utils/constants.jsx"),Coworking_Coworking=function Coworking(){var _useState=(0,react.useState)({}),_useState2=(0,slicedToArray.Z)(_useState,2),coworking=_useState2[0],setCoworking=_useState2[1],_useState3=(0,react.useState)([]),_useState4=(0,slicedToArray.Z)(_useState3,2),equipmentMeeting=_useState4[0],setEquipmentMeeting=_useState4[1],_useState5=(0,react.useState)([]),_useState6=(0,slicedToArray.Z)(_useState5,2),equipmentGeneral=_useState6[0],setEquipmentGeneral=_useState6[1],_useState7=(0,react.useState)([]),_useState8=(0,slicedToArray.Z)(_useState7,2),reviews=_useState8[0],setReviews=_useState8[1],_useState9=(0,react.useState)(!0),_useState10=(0,slicedToArray.Z)(_useState9,2),isLoading=_useState10[0],setLoading=_useState10[1],_useState11=(0,react.useState)(!0),_useState12=(0,slicedToArray.Z)(_useState11,2),isPresent=_useState12[0],setPresent=_useState12[1],location=(0,dist.TH)(),navigate=(0,dist.s0)(),pathId=parseInt(location.pathname.match(/\d+/),10);(0,react.useEffect)((function(){(0,Api.qA)(pathId).then((function(res){setCoworking(res)})).catch((function(){setPresent(!1)})).finally((function(){setLoading(!1)}))}),[]),(0,react.useEffect)((function(){(0,Api.xf)(pathId,constants.Zq).then((function(res){setEquipmentGeneral(res)})).catch((function(){}))}),[]),(0,react.useEffect)((function(){(0,Api.xf)(pathId,constants.Yi).then((function(res){setEquipmentMeeting(res)})).catch((function(){}))}),[]),(0,react.useEffect)((function(){(0,Api.Jh)(pathId).then((function(res){setReviews(res)})).catch((function(){}))}),[]);return isLoading?(0,jsx_runtime.jsx)(Loader.a,{}):isPresent?(0,jsx_runtime.jsxs)("main",{className:"coworking","aria-label":"страница коворкинга",children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:function handleBackButton(){navigate("/points/",{replace:!1})},btnClass:"button_type_back",btnText:"Назад"}),(0,jsx_runtime.jsx)(SectionTitle.N,{titleText:coworking.name,titleClass:"section-title_own-page"}),(0,jsx_runtime.jsxs)("h2",{className:"coworking__subtitle",children:[coworking.short_annotation," "]}),(0,jsx_runtime.jsx)(PointsItem.P,{data:coworking}),(0,jsx_runtime.jsxs)("section",{className:"coworking__section",children:[(0,jsx_runtime.jsx)("h3",{className:"coworking__section-title",children:"Описание"}),(0,jsx_runtime.jsx)("p",{className:"coworking__section-text",children:coworking.description})]}),(0,jsx_runtime.jsxs)("section",{className:"coworking__section",children:[(0,jsx_runtime.jsx)("h3",{className:"coworking__section-title",children:"Удобства в этом коворкинге"}),(0,jsx_runtime.jsx)(EquipmentList.t,{equipmentMeeting:equipmentMeeting,equipmentGeneral:equipmentGeneral})]}),(0,jsx_runtime.jsxs)("section",{className:"coworking__section",children:[(0,jsx_runtime.jsx)("h3",{className:"coworking__section-title",children:"Отзывы"}),(0,jsx_runtime.jsx)(ReviewList.P,{reviews:reviews,pointRating:coworking.rating})]})]}):(0,jsx_runtime.jsx)(components_PageNotFound_PageNotFound,{})};Coworking_Coworking.__docgenInfo={description:"",methods:[],displayName:"Coworking"};var Coworking_stories={title:"Pages/Coworking",component:Coworking_Coworking,parameters:{layout:"fullscreen"}},Example={args:{coworking:{title:"Коворкинг",subtitle:"Рядом находится прекрасная набережная для прогулок",about:"Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",rating:"5.0",lowPrice:400,mainPhoto:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",extraPhoto:[{id:2,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"},{id:3,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"},{id:4,url:"https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"}],address:"г. Санкт-Петербург, Кантемировская улица, 22",metro:"м. Лесная 200м",openTime:7,closeTime:20,generalQuantity:2,meetingQuantity:30},equipment:[{title:"В общей зоне",data:[{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"}]},{title:"В переговорной №1",data:[{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"},{text:"Монитор",img:"https://cdn-icons-png.flaticon.com/512/72/72234.png"}]}],reviews:[{author:"Грета Гарбо",date:"01.12.1989",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",rating:5},{author:"Грета Гарбо",date:"01.12.1989",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",rating:5},{author:"Грета Гарбо",date:"01.12.1989",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",rating:2},{author:"Грета Гарбо",date:"01.12.1989",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",rating:5},{author:"Грета Гарбо",date:"01.12.1989",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",rating:1},{author:"Грета Гарбо",date:"01.12.1989",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",rating:5}]}};Example.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Example.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    coworking: {\n      title: "Коворкинг",\n      subtitle: "Рядом находится прекрасная набережная для прогулок",\n      about: "Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",\n      rating: "5.0",\n      lowPrice: 400,\n      mainPhoto: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",\n      extraPhoto: [{\n        id: 2,\n        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"\n      }, {\n        id: 3,\n        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"\n      }, {\n        id: 4,\n        url: "https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"\n      }],\n      address: "г. Санкт-Петербург, Кантемировская улица, 22",\n      metro: "м. Лесная 200м",\n      openTime: 7,\n      closeTime: 20,\n      generalQuantity: 2,\n      meetingQuantity: 30\n    },\n    equipment: [{\n      title: "В общей зоне",\n      data: [{\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }]\n    }, {\n      title: "В переговорной №1",\n      data: [{\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }, {\n        text: "Монитор",\n        img: "https://cdn-icons-png.flaticon.com/512/72/72234.png"\n      }]\n    }],\n    reviews: [{\n      author: "Грета Гарбо",\n      date: "01.12.1989",\n      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",\n      rating: 5\n    }, {\n      author: "Грета Гарбо",\n      date: "01.12.1989",\n      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",\n      rating: 5\n    }, {\n      author: "Грета Гарбо",\n      date: "01.12.1989",\n      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",\n      rating: 2\n    }, {\n      author: "Грета Гарбо",\n      date: "01.12.1989",\n      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",\n      rating: 5\n    }, {\n      author: "Грета Гарбо",\n      date: "01.12.1989",\n      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",\n      rating: 1\n    }, {\n      author: "Грета Гарбо",\n      date: "01.12.1989",\n      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",\n      rating: 5\n    }]\n  }\n}'},null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2$=_Example$parameters2.docs)||void 0===_Example$parameters2$?void 0:_Example$parameters2$.source)})});var __namedExportsOrder=["Example"]},"./src/components/EquipmentItem/EquipmentItem.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{p:function(){return EquipmentItem_EquipmentItem}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),EquipmentItem_EquipmentItem=function EquipmentItem(_ref){var title=_ref.title,data=_ref.data;return 0!==data.length&&(0,jsx_runtime.jsxs)("div",{className:"equipment-item",children:[(0,jsx_runtime.jsx)("h4",{className:"equipment-item__title",children:title}),(0,jsx_runtime.jsx)("ul",{className:"equipment-item__list",children:null==data?void 0:data.map((function(item){return(0,jsx_runtime.jsxs)("li",{className:"equipment-item__list-item",children:[(0,jsx_runtime.jsx)("img",{className:"equipment-item__img",src:"http://185.41.160.27/media/".concat(item.icon),alt:""}),(0,jsx_runtime.jsx)("p",{className:"equipment-item__text",children:item.name})]},item.id)}))})]})};EquipmentItem_EquipmentItem.defaultProps={title:void 0,data:void 0},EquipmentItem_EquipmentItem.__docgenInfo={description:"",methods:[],displayName:"EquipmentItem",props:{title:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},data:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"shape",value:{icon:{name:"string",required:!1},name:{name:"string",required:!1}}}},required:!1}}}},"./src/components/EquipmentList/EquipmentList.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{t:function(){return EquipmentList_EquipmentList}});__webpack_require__("./node_modules/react/index.js");var EquipmentItem=__webpack_require__("./src/components/EquipmentItem/EquipmentItem.jsx"),constants=__webpack_require__("./src/utils/constants.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),EquipmentList_EquipmentList=function EquipmentList(_ref){var equipmentMeeting=_ref.equipmentMeeting,equipmentGeneral=_ref.equipmentGeneral;return(0,jsx_runtime.jsxs)("ul",{className:"equipment-list",children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(EquipmentItem.p,{data:equipmentGeneral,title:constants.Zq})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(EquipmentItem.p,{data:equipmentMeeting,title:constants.Yi})})]})};EquipmentList_EquipmentList.defaultProps={equipmentMeeting:void 0,equipmentGeneral:void 0},EquipmentList_EquipmentList.__docgenInfo={description:"",methods:[],displayName:"EquipmentList",props:{equipmentMeeting:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"shape",value:{icon:{name:"string",required:!1},name:{name:"string",required:!1}}}},required:!1},equipmentGeneral:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"shape",value:{icon:{name:"string",required:!1},name:{name:"string",required:!1}}}},required:!1}}}},"./src/components/Loader/Loader.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return Loader_Loader}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Loader_Loader=function Loader(_ref){var _ref$animationDelay=_ref.animationDelay,animationDelay=void 0===_ref$animationDelay?1:_ref$animationDelay,_ref$itemColor=_ref.itemColor,itemColor=void 0===_ref$itemColor?"#b0ff1a":_ref$itemColor;return(0,jsx_runtime.jsx)("div",{className:"loader-container",children:(0,jsx_runtime.jsx)("div",{className:"loader",children:(0,jsx_runtime.jsx)("div",{className:"loader__view",children:[-.9166666666666666,-.8333333333333334,-.75,-.6666666666666666,-.5833333333333334,-.5,-.4166666666666667,-.3333333333333333,-.25,-.16666666666666666,-.08333333333333333,0].map((function(delay,index){var key="loader-item".concat(index);return(0,jsx_runtime.jsx)("div",{style:{animationDelay:"".concat(animationDelay*delay,"s"),animationDuration:"".concat(animationDelay,"s"),backgroundColor:itemColor}},key)}))})})})};Loader_Loader.defaultProps={animationDelay:1,itemColor:"#b0ff1a"},Loader_Loader.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{animationDelay:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1},itemColor:{defaultValue:{value:'"#b0ff1a"',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/components/ReviewItem/ReviewItem.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return ReviewItem_ReviewItem}});__webpack_require__("./node_modules/react/index.js");var PointRating=__webpack_require__("./src/components/UI-kit/PointRating/PointRating.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ReviewItem_ReviewItem=function ReviewItem(_ref){var author=_ref.author,date=_ref.date,text=_ref.text,rating=_ref.rating;return(0,jsx_runtime.jsxs)("div",{className:"review-item",children:[(0,jsx_runtime.jsxs)("div",{className:"review-item__container",children:[(0,jsx_runtime.jsx)("h4",{className:"review-item__author",children:author}),(0,jsx_runtime.jsx)("p",{className:"review-item__date",children:date}),(0,jsx_runtime.jsx)("p",{className:"review-item__text",children:text})]}),(0,jsx_runtime.jsx)(PointRating.A,{rating:rating})]})};ReviewItem_ReviewItem.defaultProps={author:void 0,date:void 0,text:void 0,rating:void 0},ReviewItem_ReviewItem.__docgenInfo={description:"",methods:[],displayName:"ReviewItem",props:{author:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},date:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},text:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},rating:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1}}}},"./src/components/ReviewList/ReviewList.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{P:function(){return ReviewList_ReviewList}});__webpack_require__("./node_modules/react/index.js");var PointRating=__webpack_require__("./src/components/UI-kit/PointRating/PointRating.jsx"),ReviewItem=__webpack_require__("./src/components/ReviewItem/ReviewItem.jsx"),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ReviewList_ReviewList=function ReviewList(_ref){var reviews=_ref.reviews,pointRating=_ref.pointRating;return(0,jsx_runtime.jsxs)("div",{className:"review-list",children:[(0,jsx_runtime.jsxs)("div",{className:"review-list__container",children:[(0,jsx_runtime.jsx)(PointRating.A,{rating:pointRating}),(0,jsx_runtime.jsxs)("div",{className:"review-list__length-container",children:[(0,jsx_runtime.jsx)("p",{className:"review-list__text",children:"Отзывов: "}),(0,jsx_runtime.jsx)("p",{className:"review-list__length",children:null==reviews?void 0:reviews.length})]})]}),(0,jsx_runtime.jsx)("ul",{className:"review-list__items",children:reviews.map((function(item){return(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(ReviewItem.r,{author:"".concat(item.first_name," ").concat(item.last_name),date:item.pub_date,text:item.description,rating:item.rating})},item.id)}))}),(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_type_transparent button_size_medium",btnText:"Ещё"})]})};ReviewList_ReviewList.defaultProps={reviews:void 0,pointRating:void 0},ReviewList_ReviewList.__docgenInfo={description:"",methods:[],displayName:"ReviewList",props:{reviews:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"shape",value:{description:{name:"string",required:!1},first_name:{name:"string",required:!1},id:{name:"number",required:!1},last_name:{name:"string",required:!1},pub_date:{name:"string",required:!1},rating:{name:"number",required:!1}}}},required:!1},pointRating:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1}}}},"./src/components/SectionTitle/SectionTitle.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{N:function(){return SectionTitle_SectionTitle}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SectionTitle_SectionTitle=function SectionTitle(_ref){var titleText=_ref.titleText,titleClass=_ref.titleClass;return(0,jsx_runtime.jsx)("h2",{className:"section-title".concat(titleClass?" ".concat(titleClass):""),children:titleText})};SectionTitle_SectionTitle.defaultProps={titleText:"",titleClass:""},SectionTitle_SectionTitle.__docgenInfo={description:"",methods:[],displayName:"SectionTitle",props:{titleText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},titleClass:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/utils/constants.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Gu:function(){return LAPTOP_MORE_POINTS_QUANTITY},H6:function(){return DEFAULT_LONGITUDE},V9:function(){return LAPTOP_POINTS_QUANTITY},X3:function(){return LAPTOP_MORE_SHORT_POINTS_QUANTITY},Yi:function(){return EQUIPMENT_MEETING_CATEGORY},Zq:function(){return EQUIPMENT_GENERAL_CATEGORY},m6:function(){return DEFAULT_ZOOM},mV:function(){return DEFAULT_LATITUDE},nU:function(){return LAPTOP_SHORT_POINTS_QUANTITY}});var LAPTOP_SHORT_POINTS_QUANTITY=6,LAPTOP_MORE_SHORT_POINTS_QUANTITY=3,LAPTOP_POINTS_QUANTITY=4,LAPTOP_MORE_POINTS_QUANTITY=2,EQUIPMENT_GENERAL_CATEGORY="Рабочее место",EQUIPMENT_MEETING_CATEGORY="Переговорная",DEFAULT_LATITUDE=59.9,DEFAULT_LONGITUDE=30.3,DEFAULT_ZOOM=11}}]);