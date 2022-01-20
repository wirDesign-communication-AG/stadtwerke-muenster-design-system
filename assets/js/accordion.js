require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * Handle Accordions
 *
 * <div class="c-accordion" id="acc" data-json="{}" role="tablist">
 *  <div class="c-accordion__item">
 *      <button id="acc-item-2-header" class="c-accordion__toggle" data-toggle="accordion" data-target="#acc-item-2"
 *          data-parent="#acc" aria-expanded="false" aria-controls="acc-item-2" role="tab">Title</button>
 *      <div id="acc-item-2" class="c-accordion__content" aria-labelledby="acc-item-2-header" role="tabpanel">Content</div>
 *  </div>
 * </div>
 * ------------------------------------------------------------------------
 */"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _util=_interopRequireDefault(require("util"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */var NAME='accordion';var VERSION='1.0.0';var DATA_KEY='ide.accordion';var Default={SINGLE_OPEN:false,MAX_HEIGHT:'data-height'};var DefaultType={SINGLE_OPEN:'boolean',MAX_HEIGHT:'string'};var ClassName={ACCORDION:'c-accordion',ACCORDION_BTN:'c-accordion__toggle',ACCORDION_CONTENT:'c-accordion__content',ACTIVE:'is-active',OPEN:'is-open',CLOSE:'is-closed',CALCULATING:'is-calculating'};var Data={JSON:'json',TARGET:'target',PARENT:'parent'};var Selector={DATA_TOGGLE:'[data-toggle="accordion"]'};/**
 * ------------------------------------------------------------------------
 * Class Definition Accordion
 * ------------------------------------------------------------------------
 */var Accordion=/*#__PURE__*/function(){function Accordion(element,parent,config){_classCallCheck(this,Accordion);this._element=element;this._parent=parent;this._elements=this._parent.getElementsByClassName(ClassName.ACCORDION_CONTENT);this._elementsArray=_toConsumableArray(this._elements);this._config=this._getConfig(config);this.init();}/**
     * Private: Get config
     *
     */_createClass(Accordion,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Init Accordion
     *
     */},{key:"init",value:function init(){// console.log('Accordion init..');
this.removeStyles();this.saveHeights(this._elementsArray);}/**
     * Save heights of all accordion contents.
     *
     * @param {Array} items - array of items
     */},{key:"saveHeights",value:function saveHeights(items){for(var i=0;i<items.length;i++){this.saveHeight(items[i]);}}/**
     * Save the height of the accordion content container.
     *
     * @param {Object} item - item to calculate the height
     */},{key:"saveHeight",value:function saveHeight(item){var el=item;// the el is hidden so, making the el block so we can measure its height but still be hidden
_util["default"].addClass(el,ClassName.CALCULATING);var wantedHeight=el.offsetHeight;// reverting to the original values
_util["default"].removeClass(el,ClassName.CALCULATING);// save height in data attribute
_util["default"].handleData(el,Default.MAX_HEIGHT,wantedHeight);}/**
     * Toggle the accordion content by using the id of the accordion button.
     *
     */},{key:"toggleAccordion",value:function toggleAccordion(target,toggle){var _this=this;if(_util["default"].hasClass(target,ClassName.OPEN)){this.saveHeight(target);target.style.height=_util["default"].handleData(target,Default.MAX_HEIGHT)+'px';setTimeout(function(){_this.deactivateBtn(toggle);_this.slideUp(target);},10);}else{if(this._config.SINGLE_OPEN){this.closeAll();}setTimeout(function(){_this.activateBtn(toggle);_this.slideDown(target);},10);}}/**
     * Hide content element
     *
     * @param {Object} target
     */},{key:"slideUp",value:function slideUp(target){target.style.height='0';_util["default"].removeClass(target,ClassName.OPEN);}/**
     * Show content element
     *
     * @param {Object} target
     */},{key:"slideDown",value:function slideDown(target){target.style.height=_util["default"].handleData(target,Default.MAX_HEIGHT)+'px';_util["default"].addClass(target,ClassName.OPEN);}/**
     * Adds active class to the clicked button.
     *
     * @param {Object} toggle
     */},{key:"activateBtn",value:function activateBtn(toggle){_util["default"].addClass(toggle,ClassName.ACTIVE);toggle.setAttribute('aria-expanded','true');}/**
     * Removes active class from the button.
     *
     * @param {Object} toggle
     */},{key:"deactivateBtn",value:function deactivateBtn(toggle){_util["default"].removeClass(toggle,ClassName.ACTIVE);toggle.setAttribute('aria-expanded','false');}/**
     * Remove all styles of the accordion content elements
     */},{key:"removeStyles",value:function removeStyles(){for(var i=0;i<this._elements.length;i++){this._elements[i].style.height=null;}}/**
     * Close all accordion content elements
     *
     */},{key:"closeAll",value:function closeAll(){var content=this._parent.getElementsByClassName(ClassName.ACCORDION_CONTENT);var button=this._parent.getElementsByClassName(ClassName.ACCORDION_BTN);for(var i=0;i<content.length;i++){this.slideUp(content[i]);this.deactivateBtn(button[i]);}}/**
     * open all accordion content elements
     *
     */},{key:"openAll",value:function openAll(){var content=this._parent.getElementsByClassName(ClassName.ACCORDION_CONTENT);var button=this._parent.getElementsByClassName(ClassName.ACCORDION_BTN);for(var i=0;i<content.length;i++){this.slideDown(content[i]);this.activateBtn(button[i]);}}/**
     * Static: Set DOM interface
     *
     */}],[{key:"_DomInterface",value:function _DomInterface(target,toggle){var parentSelector=_util["default"].getSelectorFromElement(toggle,Data.PARENT);var parentTarget=parentSelector?document.querySelector(parentSelector):false;var data=parentTarget?_util["default"].handleData(parentTarget,DATA_KEY):_util["default"].handleData(toggle,DATA_KEY);if(!data){var config;if(parentTarget.hasAttribute('data-'+Data.JSON)){var jsonString=_util["default"].getJsonFromElement(parentTarget,Data.JSON);config=JSON.parse(jsonString);}data=new Accordion(target,parentTarget,config);if(parentTarget){_util["default"].handleData(parentTarget,DATA_KEY,data);}else{_util["default"].handleData(toggle,DATA_KEY,data);}}data.toggleAccordion(target,toggle);window.addEventListener('resize',function(){data.removeStyles();data.saveHeights(data._elementsArray);});}}]);return Accordion;}();/**
 * ------------------------------------------------------------------------
 * Activate Accordion
 * ------------------------------------------------------------------------
 */document.addEventListener('click',function(event){if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;}if(event.target.matches(Selector.DATA_TOGGLE)||event.target.matches(Selector.DATA_TOGGLE+' *')){var toggle=event.target.matches(Selector.DATA_TOGGLE+' *')?event.target.parentNode:event.target;var target;var selector=_util["default"].getSelectorFromElement(toggle,Data.TARGET);if(selector){target=document.querySelector(selector);if(toggle.tagName==='A'){event.preventDefault();}Accordion._DomInterface(target,toggle);}}},false);var _default=Accordion;exports["default"]=_default;

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
