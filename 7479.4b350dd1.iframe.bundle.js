"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[7479],{"./src/components/Map/Map.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{e:function(){return MainMap}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js");function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r.apply(this,arguments)}const a=(t,e)=>{const n={};for(const o in t)-1===e.indexOf(o)&&(n[o]=t[o]);return n},i=react.createContext(null),c=react.createContext(null),l=e=>n=>react.createElement(c.Consumer,null,(o=>react.createElement(e,r({parent:o},n)))),p=(t=[])=>{const[r,a]=(0,react.useState)(!1),c=(0,react.useRef)(t),l=(()=>{const t=(0,react.useContext)(i);if(null===t)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that hook useYMaps is inside <YMaps /> provider");return t})(),p=l.getApi();return(0,react.useEffect)((()=>{l.load().then((()=>Promise.all(c.current.map(l.loadModule)))).then((()=>a(!0)))}),[]),r&&p?p:null},u=()=>{},m=["onLoad","onError","modules","apiLoader"];function d(e,n=!1,o=[]){return i=>{const{width:c,height:l,modules:d=[],onLoad:h=u}=i,f=p(o.concat(d)),y=!n||!!f,b=a(i,m);return(0,react.useEffect)((()=>f?h(f):void 0),[f]),y?react.createElement(e,r({ymaps:f},b)):react.createElement("div",{style:{width:c,height:l}})}}const h="undefined"!=typeof window,f={lang:"ru_RU",load:"",ns:"",mode:"release"},y=e=>{const{version:n="2.1",enterprise:r=!1,query:a={lang:"ru_RU",load:"",ns:""},preload:c=!1,children:l}=e,p=(0,react.useRef)((t=>{const{query:e=f}=t,n=Date.now().toString(32),o=e.ns||"",s="__yandex-maps-api-onload__$$"+n,r="__yandex-maps-api-onerror__$$"+n,a=h?window:{},i={};let c;const l=()=>o?a[o]:c,p=()=>{delete a[s],delete a[r]};return{load:()=>{if(l())return Promise.resolve(c);if(i[o])return i[o];const n={onload:s,onerror:r,...f,...e},u=Object.keys(n).map((t=>`${t}=${n[t]}`)).join("&"),m=[`https://${t.enterprise?"enterprise.":""}api-maps.yandex.ru`,t.version,"?"+u].join("/");return i[o]=new Promise(((t,e)=>{a[s]=e=>{p(),e.ready((()=>{c=e,t(e)}))},a[r]=t=>{p(),e(t)},(t=>new Promise(((e,n)=>{const o=document.createElement("script");o.type="text/javascript",o.onload=e,o.onerror=n,o.src=t,o.async=!0,document.head.appendChild(o)})))(m).catch(a[r])})),i[o]},getApi:l,loadModule:t=>new Promise(((e,n)=>{c.modules.require(t).done((n=>{n.forEach((e=>{((t,e,n,o=!1)=>{const s="string"==typeof e?e.split("."):e.slice();let r,a=t;for(;s.length>1;)r=s.shift(),a[r]||(a[r]={}),a=a[r];const i=s[0];a[i]=!0===o&&a[i]||n})(c,t,e,!0)})),e(c)}),n)}))}})({version:n,enterprise:r,query:a,preload:c}));return(0,react.useEffect)((()=>{c&&p.current.load()}),[p.current]),react.createElement(i.Provider,{value:p.current},l)},b=/^on(?=[A-Z])/;function v(t){return Object.keys(t).reduce(((e,n)=>{if(b.test(n)){const o=n.replace(b,"").toLowerCase();e._events[o]=t[n]}else e[n]=t[n];return e}),{_events:{}})}function j(t,e,n){"function"==typeof n&&t.events.add(e,n)}function O(t,e,n){"function"==typeof n&&t.events.remove(e,n)}function g(t,e,n){Object.keys(Object.assign({},e,n)).forEach((o=>{e[o]!==n[o]&&(O(t,o,e[o]),j(t,o,n[o]))}))}const E=t=>"default"+t.charAt(0).toUpperCase()+t.slice(1);function C(t,e){return void 0!==t[e]||void 0===t[E(e)]}function _(t,e,n){return(C(t,e)?t[e]:t[E(e)])||n}function R(t,e,n=null){if(t!==e){if(t&&("current"in t?t.current=null:"function"==typeof t&&t(null)),!e)return;"current"in e?e.current=n:"function"==typeof e&&e(n)}}function w(t){const{width:e,height:n,style:o,className:s}=t;return void 0!==o||void 0!==s?Object.assign({},o&&{style:o},s&&{className:s}):{style:{width:e,height:n}}}class P extends react.Component{constructor(t){super(t),this.state={error:null,errorInfo:null}}componentDidCatch(t,e){const{onError:n=(()=>{})}=this.props;n(t),this.setState({error:t,errorInfo:e})}render(){return this.state.error?null:this.props.children}}const x=e=>({onError:n,...o})=>react.createElement(P,{onError:n},react.createElement(e,o));class M extends react.Component{constructor(){super(),this.instance=null,this.state={instance:null},this._parentElement=null,this._getRef=t=>{this._parentElement=t}}componentDidMount(){this.instance=M.mountObject(this._parentElement,this.props.ymaps.Map,this.props),this.setState({instance:this.instance})}componentDidUpdate(t){null!==this.instance&&M.updateObject(this.instance,t,this.props)}componentWillUnmount(){M.unmountObject(this.instance,this.props)}render(){const e=w(this.props),n=v(this.props),o=a(n,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return react.createElement(c.Provider,{value:this.state.instance},react.createElement("div",r({ref:this._getRef},e,o),this.props.children))}static mountObject(t,e,n){const{instanceRef:o,_events:s}=v(n),r=new e(t,_(n,"state"),_(n,"options"));return Object.keys(s).forEach((t=>j(r,t,s[t]))),R(null,o,r),r}static updateObject(t,e,n){const{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(e);if(C(n,"state")){const o=_(e,"state",{}),s=_(n,"state",{});o.type!==s.type&&t.setType(s.type),o.behaviors!==s.behaviors&&(o.behaviors&&t.behaviors.disable(o.behaviors),s.behaviors&&t.behaviors.enable(s.behaviors)),s.zoom&&o.zoom!==s.zoom&&t.setZoom(s.zoom),s.center&&o.center!==s.center&&t.setCenter(s.center),s.bounds&&o.bounds!==s.bounds&&t.setBounds(s.bounds)}if(C(n,"options")){const o=_(e,"options"),s=_(n,"options",{});o!==s&&t.options.set(s)}_(e,"width")===_(n,"width")&&_(e,"height")===_(n,"height")||t.container.fitToViewport(),g(t,r,o),R(a,s,t)}static unmountObject(t,e){const{instanceRef:n,_events:o}=v(e);null!==t&&(Object.keys(o).forEach((e=>O(t,e,o[e]))),t.destroy(),R(n))}}const k=x(d(M,!0,["Map"]));k.defaultProps={width:320,height:240};class S extends react.Component{constructor(){super(),this.state={instance:null},this._parentElement=null,this._getRef=t=>{this._parentElement=t}}componentDidMount(){this._mounted=!0,this.props.ymaps.panorama.isSupported()&&S.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then((t=>this._mounted&&this.setState({instance:t})))}componentDidUpdate(t){null!==this.state.instance&&S.updateObject(this.state.instance,t,this.props)}componentWillUnmount(){this._mounted=!1,S.unmountObject(this.state.instance,this.props)}render(){const e=w(this.props);return react.createElement("div",r({ref:this._getRef},e))}static mountObject(t,e,n){const{instanceRef:o,_events:s}=v(n),r=_(n,"point"),a=_(n,"locateOptions"),i=_(n,"options");return new Promise(((n,c)=>{e.locate(r,a).done((r=>{if(r.length>0){const a=new e.Player(t,r[0],i);R(null,o,a),Object.keys(s).forEach((t=>j(a,t,s[t]))),n(a)}}),c)}))}static updateObject(t,e,n){const{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(e);if(C(n,"options")){const o=_(e,"options"),s=_(n,"options");o!==s&&t.options.set(s)}if(C(n,"point")){const o=_(n,"point"),s=_(e,"point"),r=_(n,"locateOptions");o!==s&&t.moveTo(o,r)}g(t,r,o),R(a,s,t)}static unmountObject(t,e){const{instanceRef:n,_events:o}=v(e);null!==t&&(Object.keys(o).forEach((e=>O(t,e,o[e]))),R(n))}}x(d(S,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"])).defaultProps={width:320,height:240};class U extends react.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const t=U.mountControl(this.props.ymaps.control[this.props.name],this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){null!==this.instance&&U.updateControl(this.instance,t,this.props)}componentWillUnmount(){U.unmountControl(this.instance,this.props)}render(){return react.createElement(c.Provider,{value:this.state.instance},this.props.children)}static mountControl(t,e){const{instanceRef:n,parent:o,lazy:s,_events:r}=v(e),a=new t({data:_(e,"data"),options:_(e,"options"),state:_(e,"state"),mapTypes:_(e,"mapTypes"),lazy:s});if(Object.keys(r).forEach((t=>j(a,t,r[t]))),o&&o.controls&&"function"==typeof o.controls.add)o.controls.add(a);else{if(!o||!o.add||"function"!=typeof o.add)throw new Error(`No parent found to mount ${e.name}`);o.add(a)}return R(null,n,a),a}static updateControl(t,e,n){const{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(e);if(C(n,"options")){const o=_(e,"options"),s=_(n,"options");o!==s&&t.options.set(s)}if(C(n,"data")){const o=_(e,"data"),s=_(n,"data");o!==s&&t.data.set(s)}if(C(n,"state")){const o=_(e,"state"),s=_(n,"state");o!==s&&t.state.set(s)}if(C(n,"mapTypes")){const o=_(e,"mapTypes"),s=_(n,"mapTypes");o!==s&&(t.removeAllMapTypes(),s.forEach((e=>t.addMapType(e))))}g(t,r,o),R(a,s,t)}static unmountControl(t,e){const{instanceRef:n,parent:o,_events:s}=v(e);null!==t&&(Object.keys(s).forEach((e=>O(t,e,s[e]))),o.controls&&"function"==typeof o.controls.remove?o.controls.remove(t):o.remove&&"function"==typeof o.remove&&o.remove(t),R(n))}}x(l(d((e=>react.createElement(U,r({},e,{name:"Button"}))),!0,["control.Button"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"FullscreenControl"}))),!0,["control.FullscreenControl"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"GeolocationControl"}))),!0,["control.GeolocationControl"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"ListBox"}))),!0,["control.ListBox"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"ListBoxItem"}))),!0,["control.ListBoxItem"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"RouteButton"}))),!0,["control.RouteButton"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"RouteEditor"}))),!0,["control.RouteEditor"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"RoutePanel"}))),!0,["control.RoutePanel"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"RulerControl"}))),!0,["control.RulerControl"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"SearchControl"}))),!0,["control.SearchControl"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"TrafficControl"}))),!0,["control.TrafficControl"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"TypeSelector"}))),!0,["control.TypeSelector"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"ZoomControl"}))),!0,["control.ZoomControl"])));class Y extends react.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const t=Y.mountObject(this.props.ymaps.Clusterer,this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){null!==this.state.instance&&Y.updateObject(this.instance,t,this.props)}componentWillUnmount(){Y.unmountObject(this.instance,this.props)}render(){return react.createElement(c.Provider,{value:this.state.instance},this.props.children)}static mountObject(t,e){const{instanceRef:n,parent:o,_events:s}=v(e),r=new t(_(e,"options"));if(Object.keys(s).forEach((t=>j(r,t,s[t]))),o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(r);else{if(!o.add||"function"!=typeof o.add)throw new Error("No parent found to mount Clusterer");o.add(r)}return R(null,n,r),r}static updateObject(t,e,n){const{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(e);if(C(n,"options")){const o=_(e,"options"),s=_(n,"options");o!==s&&t.options.set(s)}g(t,r,o),R(a,s,t)}static unmountObject(t,e){const{instanceRef:n,parent:o,_events:s}=v(e);null!==t&&(Object.keys(s).forEach((e=>O(t,e,s[e]))),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(t):o.remove&&"function"==typeof o.remove&&o.remove(t),R(n))}}x(l(d(Y,!0,["Clusterer"])));class H extends react.Component{constructor(){super(),this.state={instance:null}}componentDidMount(){const t=H.mountObject(this.props.ymaps.ObjectManager,this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){null!==this.instance&&H.updateObject(this.instance,t,this.props)}componentWillUnmount(){H.unmountObject(this.instance,this.props)}render(){return null}static mountObject(t,e){const{instanceRef:n,parent:o,_events:s}=v(e),r=_(e,"options",{}),a=_(e,"features",{}),i=_(e,"filter",null),c=_(e,"objects",{}),l=_(e,"clusters",{}),p=new t(r);if(p.add(a||[]),p.setFilter(i),p.objects.options.set(c),p.clusters.options.set(l),Object.keys(s).forEach((t=>j(p,t,s[t]))),o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(p);else{if(!o.add||"function"!=typeof o.add)throw new Error("No parent found to mount ObjectManager");o.add(p)}return R(null,n,p),p}static updateObject(t,e,n){const{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(e);if(C(n,"options")){const o=_(e,"options"),s=_(n,"options");o!==s&&t.options.set(s)}if(C(n,"objects")){const o=_(e,"objects"),s=_(n,"objects");o!==s&&t.objects.options.set(s)}if(C(n,"clusters")){const o=_(e,"clusters"),s=_(n,"clusters");o!==s&&t.clusters.options.set(s)}if(C(n,"filter")){const o=_(e,"filter"),s=_(n,"filter");o!==s&&t.setFilter(s)}if(C(n,"features")){const o=_(e,"features"),s=_(n,"features");o!==s&&(t.remove(o),t.add(s))}g(t,r,o),R(a,s,t)}static unmountObject(t,e){const{instanceRef:n,parent:o,_events:s}=v(e);null!==t&&(Object.keys(s).forEach((e=>O(t,e,s[e]))),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(t):o.remove&&"function"==typeof o.remove&&o.remove(t),R(n))}}x(l(d(H,!0,["ObjectManager"])));class K extends react.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const{name:t,ymaps:e,dangerZone:n}=this.props,o=K.mountObject(n&&"function"==typeof n.modifyConstructor?n.modifyConstructor(e[t]):e[t],this.props);this.instance=o,this.setState({instance:o})}componentDidUpdate(t){null!==this.instance&&K.updateObject(this.instance,t,this.props)}componentWillUnmount(){K.unmountObject(this.instance,this.props)}render(){return null}static mountObject(t,e){const{instanceRef:n,parent:o,_events:s}=v(e),r=new t(_(e,"geometry"),_(e,"properties"),_(e,"options"));if(Object.keys(s).forEach((t=>j(r,t,s[t]))),o&&o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(r);else{if(!o||!o.add||"function"!=typeof o.add)throw new Error(`No parent found to mount ${e.name}`);o.add(r)}return R(null,n,r),r}static updateObject(t,e,n){const{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(e);if(C(n,"geometry")){const o=_(e,"geometry",{}),s=_(n,"geometry",{});Array.isArray(s)&&s!==o?Array.isArray(s[0])&&"number"==typeof s[1]?(t.geometry.setCoordinates(s[0]),t.geometry.setRadius(s[1])):t.geometry.setCoordinates(s):"object"==typeof s&&(s.coordinates!==o.coordinates&&t.geometry.setCoordinates(s.coordinates),s.radius!==o.radius&&t.geometry.setRadius(s.radius))}if(C(n,"properties")){const o=_(e,"properties"),s=_(n,"properties");o!==s&&t.properties.set(s)}if(C(n,"options")){const o=_(e,"options"),s=_(n,"options");o!==s&&t.options.set(s)}g(t,r,o),R(a,s,t)}static unmountObject(t,e){const{instanceRef:n,parent:o,_events:s}=v(e);null!==t&&(Object.keys(s).forEach((e=>O(t,e,s[e]))),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(t):o.remove&&"function"==typeof o.remove&&o.remove(t),R(n))}}const Q={modifyConstructor(t){function e(e,n,o){t.call(this,{geometry:e,properties:n},o)}return e.prototype=t.prototype,e}};x(l(d((e=>react.createElement(K,r({},e,{name:"GeoObject",dangerZone:Q}))),!0,["GeoObject"]))),x(l(d((e=>react.createElement(K,r({},e,{name:"Circle"}))),!0,["Circle"])));var et=x(l(d((e=>react.createElement(K,r({},e,{name:"Placemark"}))),!0,["Placemark"]))),Button=(x(l(d((e=>react.createElement(K,r({},e,{name:"Polygon"}))),!0,["Polygon"]))),x(l(d((e=>react.createElement(K,r({},e,{name:"Polyline"}))),!0,["Polyline"]))),x(l(d((e=>react.createElement(K,r({},e,{name:"Rectangle"}))),!0,["Rectangle"]))),__webpack_require__("./src/components/UI-kit/Button/Button.jsx")),utils=__webpack_require__("./src/utils/utils.js"),constants=__webpack_require__("./src/utils/constants.jsx");var star=__webpack_require__.p+"static/media/star.4e1cf4411991df33ff7fdf387eda8973.svg";var tag=__webpack_require__.p+"static/media/tag.b57d197ae227d96a414c7d0874723016.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),MainMap=function MainMap(_ref){var points=_ref.points,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isMap=_useState2[0],setMap=_useState2[1],center=(0,utils.n)(points),mapRef=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)("div",{className:"map__container",ref:mapRef,children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:function handleMapButtonClick(){setMap(!isMap),isMap||mapRef.current.scrollIntoView({behavior:"smooth"})},btnClass:"button_type_tertiary".concat(isMap?" button_type_tertiary-shown":""),btnText:isMap?"Скрыть карту":"Показать на карте"}),(0,jsx_runtime.jsx)(y,{children:(0,jsx_runtime.jsx)("div",{className:"map ".concat(isMap?"map_active":"map_inactive"),children:(0,jsx_runtime.jsx)(k,{width:"100%",height:"741px",defaultState:{center:center,zoom:constants.m6,controls:["zoomControl","fullscreenControl"]},modules:["control.ZoomControl","control.FullscreenControl","geoObject.addon.balloon","geoObject.addon.hint"],children:points.map((function(point){var _point$rating;return(0,jsx_runtime.jsx)(et,{defaultGeometry:point.coordinates,properties:{balloonContentHeader:'<img src="'.concat(point.small_photo,'" alt="').concat(point.name,'" class="map__image" height="150" width="200">'),balloonContentBody:'\n              <div class=\'map__body-wrapper\'>\n              <div class ="map__row">\n              <span class="map__name">'.concat(point.name,'</span><div class="map__rating-container"><span class="map__rating">').concat(null!==(_point$rating=point.rating)&&void 0!==_point$rating?_point$rating:"",'</span><img src="').concat(star,'" class="map__icon" alt="Рейтинг" /></div></div>\n              <div class ="map__address-container"><img src="').concat(tag,'" alt="Тег" /><span class="map__address">').concat(point.get_full_address_str,'</span></div><a href = "/points/').concat(point.id,'" class="map__button">Подробнее</a>\n              </div> '),balloonContentFooter:""},options:{iconLayout:"default#image",iconImageHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfzSURBVHgBxVtPTBRXGP9mF1wxKSx/mrQptau0wZo2RS6aYCMcMD1VjRzKSdCDlxqxibYeWiGe1CZiatJ6UPBEm9AIjW2achDbmlAPoolBTaUdxSYmRVg1URB2p99vhoGZt/Pnze4M/SXqzps3b97vfX/f90aFIkYylUrFKd6okVbGl+VEyhvGHe0e/zWtkHIvQzE1rf55nSKEQiGDiSWZ2PYs0TYevBFNko+mNaLhGNFAhjKDaVVNU4gIjSgkF6NYBw+5i+TJeaE3S5kuJqxSCCiYKCTIBI/wUB0UDUIhXBDRZGrt/hgpneQhwVWlGtVuzFBVtfG7slrT2x89UOjZE4Xujyk0cSum//aAync7H6nj5ylP5EXUkGL8JP9sc7oPQs3t81S7KUvr+I8MQPhKfxFdG4rri+AMrTtL2a587Dcw0QVbvMCP1on3qlhau0+8kCbnht/74zR4qtiFsHadye4IqsqBiC6QvMSPpaztkOC2/fPUvHuewsTQuSImXOSk1irbbVMQstJEF5zOqEgSUjzUN6v/GwUmWarHWhMO0tUl2ySrxjGSBNtkt0iydlOGOn+MjiSAsbv4HbUbRXNQ6hb8hBTiMp3gXTmD+czaVt+coU/Ov6DiBEUOvGNzS4Zuj7Cj+scm2bqSZPnj5+npEb8xfFXXsMv4KFlCCFYZkoRtLidgq8daV9DEmE0R02yvG/zs1Vd1mWQnCSRhk8tNEsA79515Ib47qVC8x+9ZT9VNpt6qU0j72trW+vlcweGjEKwqNVT55q9LU2e1TCWSlZdn0lOq23OeEo1R1pbWQZoNbCuFAOrnkwX5AmFMdE4skCNez7i+ccE2/7a2QWWDShOkrvTHOOMpYttaIgn1e329Rpt3zue1eLdHYnS81e4J2VbL3cKNq+quTFa0saf9wLxevT5LLZ8GSwgwmZNtCbp6sUiPg3OzS+uK32gb5ZTvyvdFeg78ao283UO7RC/M851lDzzs1N9VdTk52GW9Ru4aBIPdxfqKTz7wV1P0Ob13hZ72BUH9VvucNFK2uPV1JIosiB+z5bK1AVT22i9xPXVzAlTWzWMPdhfpz8qioUW0U2o05p4LF4kW2UhCbWWzH0jn26O5koEDOf7bDJ2+YfzB74aduVpy7mCxtLPCgmFuAhyl6kI0m7c0R1kiorrCiSEsWRcLv/d8OUcfn5m19QXJoR55qYrel01ujVO/mHOjXW2rXpN3EkM9dpXd1uEdd+u3ZnnnM2drw75UFlXVOTnwe079HIlqFCuzXldWy0kU0hCl2bDTP3Q0787Y7BZjyDgxoKTUfq3plcZcuHldm0GvKiUpoEpgBXY3MrYNkmK/Z09ICg7jlzn1k96mRY2Sl+zXhWZPItyIpu0vJSmIqyvsMjwxcctOLOxNg+NMFMo+tl4/l1xdELVOEFJBduQH1IisEjTChhzRCcFc+Ep16ucyC8XW+f4tecmIzufcwRWejgX3fhAyovpm+XA2+UCcm37UkQMXiQpEA6jghq0ZYSKKaypoJubivQ875kgW4ty4jjTq1M8xYPHZB5+BLAVtc9chYzeImciLrfEURA69v1Lfrax+25AWtERUOwBxVzYLw5zu/JEjhBtOfR2JoixRkVqrmsUws6K+bpPcBFq/mKNnT3MDP4hNjLlnPQ0t83rZVBZ3BPvn2aluJRUvnRy0XQTcWew5MRdox4NcGM8EwbUh+/RZP4bd+roSzVJswHqN1Qsa2yBZ5Lk4e3EDkgozFw4CmIOoMVlSXM9mPGdenlo7qliOHmA/QVTLClP9TceDbAv2nG+87OMdEir5JqC20+r4Grf+ntkzP3yep7VIFAM3t2fymhyekbVxP2CxRoV9K4/c6fWMT9zI9mqWLCnoFioqQGWtIclwQt5Hip5EUWji6topaxukKruziAJ4t1i98JMm4JsJcADu1khTzWtI9SxnO/8XxHfLSBPwJQqpctHpgLUNHtjqCJYLeKdD7OyUeVYqt+MVG9CEGAX1WU4VdlHZgbTkcb90EqtRpl10TF/tTYS+b3QC3oGc2PouTf9cJ3NAdgxpFzqTTqdXJitRgl4saj/5V6HHkwrXfQo7pvBD//FiunnZPlWO74en1b9+lh0jUKzgQ5yRkmQFgvJibNU314oS2cETCuE/fZPjD3qn1PHDFACBg2IiWTbMzD7iFV2sK8FB4PMahxprQYDzgTStgJdlld3BGjZDARC4ZmR44WyTJpRbznLhWaaaIAuM1XfUkWRTPp/f5DUzbIW4JNoktuP85P5Y4c4JY2AsEfzOwJ/dmMg7n2N7fZhIVtxjWtvNNpyQXb0Yp3e2ZKjsZcoLICl6WICNoj2t3pV2PiIKSlxn0tPXS5KVmFGj2WaSfaUm2DEgYB4z5oYspYt3Jt1UAArO0J+np4bdyGIrVrNBzkEhUYe6Ws9QDShdU+rdTioQoWxFnMgC+ncGEqEHIaTvqFMFIxySQGh7LjeyemXiqULvbnEmC4IOcZLCJKmPRiEjmappY1ee8zkMKoD7zix9ZWacciccvbTheMZ7KUREkqgan+1kLnBSkbK2m19/Ak6FbSN/VTiE3B2mkBFZRo6vWhSKXRLJusGSDKgUASKrixibgDIumcaYMK3z6ost4ALJhxQRIi0AgSzH2u+cnNQS9BjZHjR3DYpl2zknU2828ildj6nKhqoq7VHYoxOWtcq18AV3m/7xHc13h/1/W7zwH/tjgs/B+sETAAAAAElFTkSuQmCC",iconImageSize:[40,40],iconImageOffset:[-20,-20]}},point.id)}))})})})]})};MainMap.defaultProps={points:[]},MainMap.__docgenInfo={description:"",methods:[],displayName:"MainMap",props:{points:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{coordinates:{name:"arrayOf",value:{name:"number"},required:!1},id:{name:"number",required:!1},rating:{name:"number",required:!1},name:{name:"string",required:!1},small_photo:{name:"string",required:!1},get_full_address_str:{name:"string",required:!1}}}},required:!1}}}},"./src/utils/constants.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Gu:function(){return LAPTOP_MORE_POINTS_QUANTITY},H6:function(){return DEFAULT_LONGITUDE},V9:function(){return LAPTOP_POINTS_QUANTITY},X3:function(){return LAPTOP_MORE_SHORT_POINTS_QUANTITY},Yi:function(){return EQUIPMENT_MEETING_CATEGORY},Zq:function(){return EQUIPMENT_GENERAL_CATEGORY},m6:function(){return DEFAULT_ZOOM},mV:function(){return DEFAULT_LATITUDE},nU:function(){return LAPTOP_SHORT_POINTS_QUANTITY}});var LAPTOP_SHORT_POINTS_QUANTITY=6,LAPTOP_MORE_SHORT_POINTS_QUANTITY=3,LAPTOP_POINTS_QUANTITY=4,LAPTOP_MORE_POINTS_QUANTITY=2,EQUIPMENT_GENERAL_CATEGORY="Рабочее место",EQUIPMENT_MEETING_CATEGORY="Переговорная",DEFAULT_LATITUDE=59.9,DEFAULT_LONGITUDE=30.3,DEFAULT_ZOOM=11},"./src/utils/utils.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:function(){return generateCenterFromPoints},v:function(){return formatEventDate}});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/constants.jsx");function formatEventDate(date){var dateComponents=date.split("-"),year=dateComponents[0].slice(2),month=dateComponents[1],day=dateComponents[2];return"".concat(month,"/").concat(day,"/").concat(year)}var generateCenterFromPoints=function generateCenterFromPoints(points){if(0===points.length)return[_constants__WEBPACK_IMPORTED_MODULE_0__.mV,_constants__WEBPACK_IMPORTED_MODULE_0__.H6];var totalLat=points.reduce((function(sum,point){return sum+point.coordinates[0]}),0),totalLng=points.reduce((function(sum,point){return sum+point.coordinates[1]}),0);return[totalLat/points.length,totalLng/points.length]}},"./src/images/dummy-spot.jpg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"da6d0df36c06f1236f50.jpg"}}]);