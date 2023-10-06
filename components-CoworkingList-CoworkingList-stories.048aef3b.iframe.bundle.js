"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[644],{"./src/components/CoworkingList/CoworkingList.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:function(){return Example},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return CoworkingList_stories}});var _Example$parameters,_Example$parameters2,_Example$parameters2$,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),SectionTitle=__webpack_require__("./src/components/SectionTitle/SectionTitle.jsx"),SectionSubtitle=__webpack_require__("./src/components/SectionSubtitle/SectionSubtitle.jsx"),PointsList=__webpack_require__("./src/components/PointsList/PointsList.jsx"),Map=__webpack_require__("./src/components/Map/Map.jsx"),SearchForm=__webpack_require__("./src/components/Forms/SearchForm/SearchForm.jsx"),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CoworkingList_CoworkingList=function CoworkingList(_ref){var data=_ref.data,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isMap=_useState2[0],setMap=_useState2[1];return(0,jsx_runtime.jsxs)("main",{className:"coworking-list",children:[(0,jsx_runtime.jsx)(SectionTitle.N,{titleText:"Поиск по коворкингам Санкт-Петербурга",titleClass:"section-title_search"}),(0,jsx_runtime.jsx)(SectionSubtitle.V,{titleText:"Вы можете снять рабочее место в одном из коворкингов Санкт-Петербурга, представленых в нашем каталоге",titleClass:"section-subtitle_search"}),(0,jsx_runtime.jsx)(SearchForm.Z,{}),(0,jsx_runtime.jsx)(Button.Z,{onClick:function handleMapButtonClick(){setMap(!isMap)},btnClass:"button_type_tertiary",btnText:"Показать на карте"}),(0,jsx_runtime.jsx)(Map.e,{isActive:isMap}),(0,jsx_runtime.jsx)(PointsList.V,{isListed:!0,isCompact:!1,data:data})]})};CoworkingList_CoworkingList.defaultProps={data:void 0},CoworkingList_CoworkingList.__docgenInfo={description:"",methods:[],displayName:"CoworkingList",props:{data:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"custom",raw:"{\n  isCompact: PropTypes.bool,\n  isListed: PropTypes.bool,\n  rating: PropTypes.number,\n  title: PropTypes.string,\n  subtitle: PropTypes.string,\n  about: PropTypes.string,\n  openTime: PropTypes.number,\n  closeTime: PropTypes.number,\n  lowPrice: PropTypes.number,\n  mainPhoto: PropTypes.string,\n  extraPhoto: PropTypes.arrayOf(\n    PropTypes.shape({\n      id: PropTypes.number.isRequired,\n      url: PropTypes.string,\n    }),\n  ),\n  address: PropTypes.string,\n  metro: PropTypes.string,\n  generalQuantity: PropTypes.number,\n  meetingQuantity: PropTypes.number,\n}"}},required:!1}}};var CoworkingList_stories={title:"Pages/CoworkingList",component:CoworkingList_CoworkingList,tags:["autodocs"],parameters:{layout:"fullscreen"}},Example={args:{data:[{title:"Коворкинг",subtitle:"Рядом находится прекрасная набережная для прогулок",about:"Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",rating:"5.0",lowPrice:400,mainPhoto:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",extraPhoto:[{id:2,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"},{id:3,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"},{id:4,url:"https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"}],address:"г. Санкт-Петербург, Кантемировская улица, 22",metro:"м. Лесная 200м",openTime:7,closeTime:20,generalQuantity:2,meetingQuantity:30},{title:"Коворкинг",subtitle:"Рядом находится прекрасная набережная для прогулок",about:"Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",rating:"5.0",lowPrice:400,mainPhoto:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",extraPhoto:[{id:2,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"},{id:3,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"},{id:4,url:"https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"}],address:"г. Санкт-Петербург, Кантемировская улица, 22",metro:"м. Лесная 200м",openTime:7,closeTime:20,generalQuantity:2,meetingQuantity:30},{title:"Коворкинг",subtitle:"Рядом находится прекрасная набережная для прогулок",about:"Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",rating:"5.0",lowPrice:400,mainPhoto:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",extraPhoto:[{id:2,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"},{id:3,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"},{id:4,url:"https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"}],address:"г. Санкт-Петербург, Кантемировская улица, 22",metro:"м. Лесная 200м",openTime:7,closeTime:20,generalQuantity:2,meetingQuantity:30},{title:"Коворкинг",subtitle:"Рядом находится прекрасная набережная для прогулок",about:"Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",rating:"5.0",lowPrice:400,mainPhoto:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",extraPhoto:[{id:2,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"},{id:3,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"},{id:4,url:"https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"}],address:"г. Санкт-Петербург, Кантемировская улица, 22",metro:"м. Лесная 200м",openTime:7,closeTime:20,generalQuantity:2,meetingQuantity:30}]}};Example.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Example.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    data: [{\n      title: "Коворкинг",\n      subtitle: "Рядом находится прекрасная набережная для прогулок",\n      about: "Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",\n      rating: "5.0",\n      lowPrice: 400,\n      mainPhoto: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",\n      extraPhoto: [{\n        id: 2,\n        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"\n      }, {\n        id: 3,\n        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"\n      }, {\n        id: 4,\n        url: "https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"\n      }],\n      address: "г. Санкт-Петербург, Кантемировская улица, 22",\n      metro: "м. Лесная 200м",\n      openTime: 7,\n      closeTime: 20,\n      generalQuantity: 2,\n      meetingQuantity: 30\n    }, {\n      title: "Коворкинг",\n      subtitle: "Рядом находится прекрасная набережная для прогулок",\n      about: "Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",\n      rating: "5.0",\n      lowPrice: 400,\n      mainPhoto: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",\n      extraPhoto: [{\n        id: 2,\n        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"\n      }, {\n        id: 3,\n        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"\n      }, {\n        id: 4,\n        url: "https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"\n      }],\n      address: "г. Санкт-Петербург, Кантемировская улица, 22",\n      metro: "м. Лесная 200м",\n      openTime: 7,\n      closeTime: 20,\n      generalQuantity: 2,\n      meetingQuantity: 30\n    }, {\n      title: "Коворкинг",\n      subtitle: "Рядом находится прекрасная набережная для прогулок",\n      about: "Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",\n      rating: "5.0",\n      lowPrice: 400,\n      mainPhoto: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",\n      extraPhoto: [{\n        id: 2,\n        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"\n      }, {\n        id: 3,\n        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"\n      }, {\n        id: 4,\n        url: "https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"\n      }],\n      address: "г. Санкт-Петербург, Кантемировская улица, 22",\n      metro: "м. Лесная 200м",\n      openTime: 7,\n      closeTime: 20,\n      generalQuantity: 2,\n      meetingQuantity: 30\n    }, {\n      title: "Коворкинг",\n      subtitle: "Рядом находится прекрасная набережная для прогулок",\n      about: "Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",\n      rating: "5.0",\n      lowPrice: 400,\n      mainPhoto: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",\n      extraPhoto: [{\n        id: 2,\n        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg"\n      }, {\n        id: 3,\n        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG"\n      }, {\n        id: 4,\n        url: "https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg"\n      }],\n      address: "г. Санкт-Петербург, Кантемировская улица, 22",\n      metro: "м. Лесная 200м",\n      openTime: 7,\n      closeTime: 20,\n      generalQuantity: 2,\n      meetingQuantity: 30\n    }]\n  }\n}'},null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2$=_Example$parameters2.docs)||void 0===_Example$parameters2$?void 0:_Example$parameters2$.source)})});var __namedExportsOrder=["Example"]},"./src/components/Forms/EntryForm/EntryForm.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Forms_EntryForm_EntryForm}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function EntryForm_EntryForm(_ref){var title=_ref.title,formClass=_ref.formClass,onSubmit=_ref.onSubmit,children=_ref.children;return(0,jsx_runtime.jsx)("section",{className:"'entry-form' ".concat(formClass),"aria-label":title,children:(0,jsx_runtime.jsxs)("div",{className:"entry-form__container",children:[(0,jsx_runtime.jsx)("h3",{className:"entry-form__title",children:title}),(0,jsx_runtime.jsx)("form",{className:"entry-form__inner",name:"form",onSubmit:onSubmit,autoComplete:"off",children:(0,jsx_runtime.jsx)("fieldset",{className:"entry-form__box",children:children})})]})})}EntryForm_EntryForm.defaultProps={title:"",formClass:"",onSubmit:function onSubmit(){}},EntryForm_EntryForm.__docgenInfo={description:"",methods:[],displayName:"EntryForm",props:{title:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},formClass:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onSubmit:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{description:"",type:{name:"element"},required:!0}}};var Forms_EntryForm_EntryForm=EntryForm_EntryForm},"./src/components/Forms/SearchForm/SearchForm.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return SearchForm_SearchForm}});var Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),Input=__webpack_require__("./src/components/UI-kit/Input/Input.jsx");__webpack_require__("./node_modules/react/index.js");var search_icon=__webpack_require__.p+"static/media/search-icon.658a05391653e8b01afc9d4843d3931a.svg",SortData=__webpack_require__("./src/components/UI-kit/SortData/SortData.jsx"),dataOptions=__webpack_require__("./src/config/dataOptions.js"),jsx_runtime=(__webpack_require__("./src/components/Forms/EntryForm/EntryForm.jsx"),__webpack_require__("./node_modules/react/jsx-runtime.js")),SearchForm=function SearchForm(){return(0,jsx_runtime.jsx)("div",{className:"entry-form__container",children:(0,jsx_runtime.jsxs)("form",{className:"entry-form__inner entry-form__inner_select",name:"form",autoComplete:"off",children:[(0,jsx_runtime.jsxs)("div",{className:"entry-form__search",children:[(0,jsx_runtime.jsx)("img",{src:search_icon,alt:"иконка поиска",className:"entry-form__search-img"}),(0,jsx_runtime.jsx)(Input.Z,{inputClass:"input__search",inputType:"search",inputName:"search",inputPlaceholder:"Искать по названию... "})]}),(0,jsx_runtime.jsx)(SortData.Z,{titleSort:"Вид рабочего места",array:dataOptions.n,size:"max"}),(0,jsx_runtime.jsx)(SortData.Z,{titleSort:"Линия метро",array:dataOptions.Z,size:"min"}),(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_type_form button_type_form-select",btnType:"button",btnText:"Искать",onClick:function onClick(){}}),(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_type_transparent button_type_transparent-select",btnType:"button",btnText:"Сбросить",onClick:function onClick(){}})]})})};SearchForm.__docgenInfo={description:"",methods:[],displayName:"SearchForm"};var SearchForm_SearchForm=SearchForm},"./src/components/PointsList/PointsList.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return PointsList_PointsList}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),PointsItem=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/PointsItem/PointsItem.jsx")),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PointsList_PointsList=function PointsList(_ref){var isCompact=_ref.isCompact,isListed=_ref.isListed,data=_ref.data;return(0,jsx_runtime.jsxs)("div",{className:"points-list-container",children:[(0,jsx_runtime.jsx)("ul",{className:"points-list ".concat(isCompact&&"points-list_compact"),children:null==data?void 0:data.map((function(item){return(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(PointsItem.P,(0,objectSpread2.Z)({isListed:isListed,isCompact:isCompact},item))})}))}),data&&(0,jsx_runtime.jsx)(Button.Z,{btnClass:"button_more button_type_transparent button_size_large",btnText:"Больше локаций"})]})};PointsList_PointsList.defaultProps={data:void 0,isCompact:!1,isListed:!1},PointsList_PointsList.__docgenInfo={description:"",methods:[],displayName:"PointsList",props:{data:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"arrayOf",value:{name:"custom",raw:"{\n  isCompact: PropTypes.bool,\n  isListed: PropTypes.bool,\n  rating: PropTypes.number,\n  title: PropTypes.string,\n  subtitle: PropTypes.string,\n  about: PropTypes.string,\n  openTime: PropTypes.number,\n  closeTime: PropTypes.number,\n  lowPrice: PropTypes.number,\n  mainPhoto: PropTypes.string,\n  extraPhoto: PropTypes.arrayOf(\n    PropTypes.shape({\n      id: PropTypes.number.isRequired,\n      url: PropTypes.string,\n    }),\n  ),\n  address: PropTypes.string,\n  metro: PropTypes.string,\n  generalQuantity: PropTypes.number,\n  meetingQuantity: PropTypes.number,\n}"}},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isListed:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1}}}},"./src/components/SectionSubtitle/SectionSubtitle.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return SectionSubtitle_SectionSubtitle}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SectionSubtitle_SectionSubtitle=function SectionSubtitle(_ref){var titleText=_ref.titleText,titleClass=_ref.titleClass;return(0,jsx_runtime.jsx)("p",{className:"section-subtitle ".concat(titleClass),children:titleText})};SectionSubtitle_SectionSubtitle.defaultProps={titleText:void 0,titleClass:void 0},SectionSubtitle_SectionSubtitle.__docgenInfo={description:"",methods:[],displayName:"SectionSubtitle",props:{titleText:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},titleClass:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1}}}},"./src/components/SectionTitle/SectionTitle.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{N:function(){return SectionTitle_SectionTitle}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SectionTitle_SectionTitle=function SectionTitle(_ref){var titleText=_ref.titleText,titleClass=_ref.titleClass;return(0,jsx_runtime.jsx)("h2",{className:"section-title".concat(titleClass?" ".concat(titleClass):""),children:titleText})};SectionTitle_SectionTitle.defaultProps={titleText:"",titleClass:""},SectionTitle_SectionTitle.__docgenInfo={description:"",methods:[],displayName:"SectionTitle",props:{titleText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},titleClass:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/components/UI-kit/Input/Input.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return UI_kit_Input_Input}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Input_Input(_ref){var inputClass=_ref.inputClass,inputType=_ref.inputType,inputName=_ref.inputName,inputPlaceholder=_ref.inputPlaceholder,inputInfo=_ref.inputInfo,_React$useState=react.useState(""),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),value=_React$useState2[0],setValue=_React$useState2[1],_React$useState3=react.useState(""),_React$useState4=(0,slicedToArray.Z)(_React$useState3,2),inputError=_React$useState4[0],setInputError=_React$useState4[1];return(0,jsx_runtime.jsxs)("div",{className:"input__items",children:[value&&(0,jsx_runtime.jsx)("label",{htmlFor:inputName,className:"input__label ".concat(inputError?"input__label-error":"","}"),children:inputPlaceholder}),(0,jsx_runtime.jsx)("input",{className:"input ".concat(inputClass," ").concat(inputError?"input-error":""),type:inputType,name:inputName,placeholder:inputPlaceholder,value:value||"",onChange:function handleChange(event){setValue(event.target.value),setInputError(event.target.validationMessage)},required:!0}),inputError?(0,jsx_runtime.jsx)("span",{className:"input__text input__text_error",children:inputError}):(0,jsx_runtime.jsx)("span",{className:"input__text input__text_info",children:inputInfo})]})}Input_Input.defaultProps={inputClass:"",inputName:"",inputPlaceholder:"",inputInfo:""},Input_Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{inputClass:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},inputName:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},inputPlaceholder:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},inputInfo:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},inputType:{description:"",type:{name:"string"},required:!0}}};var UI_kit_Input_Input=Input_Input},"./src/components/UI-kit/SortData/SortData.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return UI_kit_SortData_SortData}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SortData_SortData=function SortData(_ref){var titleSort=_ref.titleSort,array=_ref.array,size=_ref.size,sortRef=react.useRef(null),_React$useState=react.useState(!1),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),open=_React$useState2[0],setOpen=_React$useState2[1],_React$useState3=react.useState(!1),_React$useState4=(0,slicedToArray.Z)(_React$useState3,2),sort=_React$useState4[0],setSort=_React$useState4[1];return react.useEffect((function(){var handleClickOutside=function handleClickOutside(event){sortRef.current&&!sortRef.current.contains(event.target)&&setOpen(!1)};return document.body.addEventListener("click",handleClickOutside),function(){return document.body.removeEventListener("click",handleClickOutside)}}),[]),(0,jsx_runtime.jsx)("section",{ref:sortRef,className:"sort  sort_size-".concat(size),"aria-label":"фильтр коворкингов ".concat(titleSort," "),children:(0,jsx_runtime.jsxs)("div",{className:"sort__items sort__items_size-".concat(size," ").concat(open&&"sort__items_active"," "),children:[(0,jsx_runtime.jsxs)("div",{className:"sort__label",children:[(0,jsx_runtime.jsx)("p",{className:"sort__label_text",children:sort?sort.text:titleSort}),(0,jsx_runtime.jsx)("button",{className:"sort__label_button   ".concat(open&&"sort__label_button-active"," "),onClick:function onClick(){return setOpen(!open)},tabIndex:0,"aria-label":"кнопка открытия выпадающего меню"})]}),open&&(0,jsx_runtime.jsx)("div",{className:"sort__popup",children:(0,jsx_runtime.jsx)("ul",{className:"sort__popup_list",children:array.map((function(data){return(0,jsx_runtime.jsxs)("button",{onClick:function onClick(){return function onClickListItem(obj){setSort(obj),setOpen(!1)}(data)},className:"sort__popup_list-active",children:[data.icon,data.text]},data.id)}))})})]})})};SortData_SortData.defaultProps={size:"",array:[{icon:void 0}]},SortData_SortData.__docgenInfo={description:"",methods:[],displayName:"SortData",props:{size:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},array:{defaultValue:{value:"[{ icon: undefined }]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!0},text:{name:"string",required:!0},icon:{name:"string",required:!1}}}},required:!1},titleSort:{description:"",type:{name:"string"},required:!0}}};var UI_kit_SortData_SortData=SortData_SortData},"./src/config/dataOptions.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:function(){return coWorkingOptions},Z:function(){return metroOptions}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),MetroIcon=function MetroIcon(_ref){var stroke=_ref.stroke;return(0,jsx_runtime.jsx)("svg",{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M15.0792 14.6668C15.0792 14.6668 16.9584 12.4335 17.1042 9.80433C17.2959 6.471 16.0542 4.446 14.4042 3.01266C13.6067 2.30397 12.6916 1.73995 11.7001 1.346L9.00007 14.6668L6.2959 1.3335C5.29632 1.71627 4.37655 2.28142 3.58341 3.00016C1.94174 4.44183 0.691739 6.4835 0.879239 9.79183C1.04591 12.4418 2.92091 14.6668 2.92091 14.6668",stroke:stroke,strokeLinecap:"round",strokeLinejoin:"round"})})};MetroIcon.__docgenInfo={description:"",methods:[],displayName:"MetroIcon",props:{stroke:{description:"",type:{name:"string"},required:!0}}};var MetroIcon_MetroIcon=MetroIcon,metroOptions=[{id:1,text:"Зелёная",icon:(0,jsx_runtime.jsx)(MetroIcon_MetroIcon,{stroke:"#1FDF00"})},{id:2,text:"Красная",icon:(0,jsx_runtime.jsx)(MetroIcon_MetroIcon,{stroke:"#FF222F"})},{id:3,text:"Оранжевая",icon:(0,jsx_runtime.jsx)(MetroIcon_MetroIcon,{stroke:"#F97D10"})},{id:4,text:"Синяя",icon:(0,jsx_runtime.jsx)(MetroIcon_MetroIcon,{stroke:"#007FFF"})},{id:5,text:"Фиолетовая",icon:(0,jsx_runtime.jsx)(MetroIcon_MetroIcon,{stroke:"#7A0288"})}],coWorkingOptions=[{id:1,text:"Переговорная"},{id:2,text:"Место в общей зоне"}]}}]);