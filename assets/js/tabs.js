require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * Handle Tabs (v1.0.0)
 *
 *
 *
 *
 *
 * Change config: data-json=""
 * * ------------------------------------------------------------------------
 */"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _util=_interopRequireDefault(require("util"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */var NAME='tabs';var VERSION='1.0.0';var DATA_KEY='ide.tabs';var Default={};var DefaultType={};var ClassName={TABS_BTN:'c-tabs__cta',TABS_CONTENT:'c-tabs__content',ACTIVE:'is-active'};var Data={JSON:'json',TARGET:'target',PARENT:'parent'};var Selector={DATA_TOGGLE:'[data-toggle="tabs"]'};/**
 * ------------------------------------------------------------------------
 * Class Definition Tabs
 * ------------------------------------------------------------------------
 */var Tabs=/*#__PURE__*/function(){function Tabs(element,parent,config){_classCallCheck(this,Tabs);this._element=element;this._parent=parent;this._config=this._getConfig(config);this.init();}/**
     * Private: Get config
     *
     */_createClass(Tabs,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Init Tabs
     *
     */},{key:"init",value:function init(){// console.log('Tab init..');
}/**
     * Show Content
     *
     */},{key:"showContent",value:function showContent(target,toggle){var contentID=_util["default"].getSelectorFromElement(toggle,Data.TARGET);var content=document.querySelector(contentID);this.resetActiveContent();this.deactivateBtn();this.activateBtn(toggle);_util["default"].addClass(content,ClassName.ACTIVE);}/**
     * Adds active class to the clicked button.
     *
     * @param {Object} toggle
     */},{key:"activateBtn",value:function activateBtn(toggle){_util["default"].addClass(toggle,ClassName.ACTIVE);toggle.setAttribute('aria-selected','true');toggle.setAttribute('tabindex','0');}/**
     * Removes active class from the button.
     *
     * @param {Object} toggle
     */},{key:"deactivateBtn",value:function deactivateBtn(){var buttons=this._parent.getElementsByClassName(ClassName.TABS_BTN);for(var i=0;i<buttons.length;i++){_util["default"].removeClass(buttons[i],ClassName.ACTIVE);buttons[i].setAttribute('aria-selected','false');buttons[i].setAttribute('tabindex','-1');}}/**
     * Remove all styles of the tabs content elements
     */},{key:"resetActiveContent",value:function resetActiveContent(){var content=this._parent.getElementsByClassName(ClassName.TABS_CONTENT);for(var i=0;i<content.length;i++){_util["default"].removeClass(content[i],ClassName.ACTIVE);}}/**
     * Static: Set DOM interface
     *
     */}],[{key:"_DomInterface",value:function _DomInterface(target,toggle){var parentSelector=_util["default"].getSelectorFromElement(toggle,Data.PARENT);var parentTarget=parentSelector?document.querySelector(parentSelector):false;var data=_util["default"].handleData(toggle,DATA_KEY);if(!data){var config;if(parentTarget.hasAttribute('data-'+Data.JSON)){var jsonString=_util["default"].getJsonFromElement(parentTarget,Data.JSON);config=JSON.parse(jsonString);}data=new Tabs(target,parentTarget,config);_util["default"].handleData(toggle,DATA_KEY,data);}data.showContent(target,toggle);}}]);return Tabs;}();/**
 * ------------------------------------------------------------------------
 * Activate Tabs
 * ------------------------------------------------------------------------
 */document.addEventListener('click',function(event){if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;}if(event.target.matches(Selector.DATA_TOGGLE)){var toggle=event.target;var target;var selector=_util["default"].getSelectorFromElement(toggle,Data.TARGET);if(selector){target=document.querySelector(selector);if(toggle.tagName==='A'){event.preventDefault();}Tabs._DomInterface(target,toggle);}}},false);var _default=Tabs;exports["default"]=_default;

},{"util":"util"}],"util":[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/**
 * ------------------------------------------------------------------------
 * Util Helpers
 * ------------------------------------------------------------------------
 */function toType(obj){return{}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();}var storeData=function(){var Wrapper=function Wrapper(element){this[0]=element;var dataStore={};this.data=function(key,value){if(_typeof(value)===(typeof undefined==="undefined"?"undefined":_typeof(undefined))){return dataStore[key]||this[0].getAttribute('data-'+key);}else{dataStore[key]=value;return this;}};},created=[];return function(elem){if(typeof elem==='string'){elem=document.querySelector(elem);}var tmpLength=created.length;for(var i=0;i<tmpLength;i++){if(elem===created[i][0]){return created[i];}}var fresh=new Wrapper(elem);created.push(fresh);return fresh;};}();/**
 * ------------------------------------------------------------------------
 * Public Util Api
 * ------------------------------------------------------------------------
 */var Util={detectIE11:function detectIE11(){return navigator.userAgent.match(/Trident.*rv:11\./)?true:false;},setClassIE11:function setClassIE11(){if(navigator.userAgent.match(/Trident.*rv:11\./)){document.body.classList.add('ie11');}},isElement:function isElement(obj){return(obj[0]||obj).nodeType;},typeCheckConfig:function typeCheckConfig(componentName,componentVersion,config,configTypes){for(var property in configTypes){if(Object.prototype.hasOwnProperty.call(configTypes,property)){var expectedTypes=configTypes[property];var value=config[property];var valueType=value&&Util.isElement(value)?'element':toType(value);if(!new RegExp(expectedTypes).test(valueType)){throw new Error("".concat(componentName.toUpperCase()," (").concat(componentVersion,"): ")+"Option \"".concat(property,"\" provided type \"").concat(valueType,"\" ")+"but expected type \"".concat(expectedTypes,"\"."));}}}},addClass:function addClass(element,className){if(typeof element!=='undefined'){element.classList.add(className);}},removeClass:function removeClass(element,className){if(typeof element!=='undefined'){element.classList.remove(className);}},hasClass:function hasClass(element,className){return typeof element!=='undefined'?element.classList.contains(className):false;},toggleClass:function toggleClass(element,className){if(typeof element!=='undefined'){element.classList.contains(className)?element.classList.remove(className):element.classList.add(className);}},queryElement:function queryElement(selector,parent){var lookUp=parent?parent:document;return selector instanceof Element?selector:lookUp.querySelector(selector);},getSelectorFromElement:function getSelectorFromElement(element,dataName){var selector=element.getAttribute('data-'+dataName);if((!selector||selector==='#')&&dataName==='target'){var hrefAttr=element.getAttribute('href');selector=hrefAttr&&hrefAttr!=='#'?hrefAttr.trim():'';}return selector&&document.querySelector(selector)?selector:null;},getJsonFromElement:function getJsonFromElement(element,dataName){return element.getAttribute('data-'+dataName).replace(/[\']/g,'"');},handleData:function handleData(element,key,value){return storeData(element).data(key,value);},getBreakpoint:function getBreakpoint(){var element=document.querySelector('body');var breakpoint=window.getComputedStyle(element,':after').getPropertyValue('content').replace(/["']/g,'');return breakpoint;}};Util.setClassIE11();var _default=Util;exports["default"]=_default;

},{}]},{},[1]);
