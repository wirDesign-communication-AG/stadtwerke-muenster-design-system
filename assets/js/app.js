require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * Bundled Javascript
 * ------------------------------------------------------------------------
 */"use strict";var _animate=_interopRequireDefault(require("./../app/components/core/animate/scripts/animate.js"));var _fileUpload=_interopRequireDefault(require("./../app/components/core/file-upload/scripts/file-upload.js"));var _modal=_interopRequireDefault(require("./../app/components/core/modal/scripts/modal.js"));var _scrollIntoView=_interopRequireDefault(require("./../app/components/core/scroll-into-view/scripts/scroll-into-view.js"));var _section=_interopRequireDefault(require("./../app/components/core/section/scripts/section.js"));var _svg=_interopRequireDefault(require("./../app/components/core/svg/scripts/svg.js"));var _video=_interopRequireDefault(require("./../app/components/core/video/scripts/video.js"));var _videoSrcset=_interopRequireDefault(require("./../app/components/core/video/scripts/video-srcset.js"));var _header=_interopRequireDefault(require("./../app/components/modules/header/scripts/header.js"));var _nav=_interopRequireDefault(require("./../app/components/modules/nav/scripts/nav.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}

},{"./../app/components/core/animate/scripts/animate.js":2,"./../app/components/core/file-upload/scripts/file-upload.js":4,"./../app/components/core/modal/scripts/modal.js":5,"./../app/components/core/scroll-into-view/scripts/scroll-into-view.js":6,"./../app/components/core/section/scripts/section.js":7,"./../app/components/core/svg/scripts/svg.js":8,"./../app/components/core/video/scripts/video-srcset.js":9,"./../app/components/core/video/scripts/video.js":10,"./../app/components/modules/header/scripts/header.js":11,"./../app/components/modules/nav/scripts/nav.js":12}],2:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * Handle Animation (v1.0.0)
 * https://scroll-out.github.io/
 * 
 * Activate with data-scroll="out" 
 * Set animation type with data-fx-type="fadeInUp|fadeInLeft|fadeInRight"
 * Set animation waiting time with data-fx-time="400"
 * 
 * Change config: data-json="{'fxtype': 'fadeInLeft', 'fxtime': 150}"
 * * ------------------------------------------------------------------------
 */"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _util=_interopRequireDefault(require("util"));var _scrollOut=_interopRequireDefault(require("scroll-out"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */var NAME='animate';var VERSION='1.0.0';var DATA_KEY='ide.animate';var Default={bots:'bot|slurp|crawler|spider|crawling',target:'[data-animate]',treshold:0.1,fxtype:'fadeInUp',fxtime:0};var DefaultType={bots:'string',target:'string',treshold:'number',fxtype:'string',fxtime:'number'};var ClassName={ANIMATE:'c-animate'};var Data={JSON:'json',FXTYPE:'fx-type',FXTIME:'fx-time'};/**
 * ------------------------------------------------------------------------
 * Class Definition Animate
 * ------------------------------------------------------------------------
 */var Animate=/*#__PURE__*/function(){function Animate(element,config){_classCallCheck(this,Animate);this._element=element;this._config=this._getConfig(config);var bots=new RegExp('/'+this._config.bots+'/i');this._isBot=bots.test(navigator.userAgent);this.init();}/**
     * Private: Get config
     *
     */_createClass(Animate,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Init Animate
     *
     */},{key:"init",value:function init(){if(!this._isBot){var _this=this;(0,_scrollOut["default"])({targets:_this._config.target,treshold:_this._config.treshold,scope:_this._element,once:true,onShown:function onShown(elem){_this.showAnimation(elem);}});}}/**
     * Show Animation.
     *
     */},{key:"showAnimation",value:function showAnimation(elem){var fxtype=_util["default"].handleData(elem,Data.FXTYPE);var fxtime=_util["default"].handleData(elem,Data.FXTIME);if(!fxtype){fxtype=this._config.fxtype;}if(!fxtime){fxtime=this._config.fxtime;}fxtime=parseInt(fxtime);setTimeout(function(){_util["default"].addClass(elem,ClassName.ANIMATE);_util["default"].addClass(elem,fxtype);},fxtime);}/**
     * Static: Set DOM interface
     *
     */}],[{key:"_DomInterface",value:function _DomInterface(target){var data=_util["default"].handleData(target,DATA_KEY);if(!data){var config;if(target.hasAttribute('data-'+Data.JSON)){var jsonString=_util["default"].getJsonFromElement(target,Data.JSON);config=JSON.parse(jsonString);}data=new Animate(target,config);_util["default"].handleData(target,DATA_KEY,data);}}}]);return Animate;}();/**
 * ------------------------------------------------------------------------
 * Activate Animate
 * ------------------------------------------------------------------------
 */document.addEventListener('readystatechange',function(){if(document.readyState=='interactive'){var target=document.body;if(target){Animate._DomInterface(target);}}});var _default=Animate;exports["default"]=_default;

},{"scroll-out":"scroll-out","util":"util"}],3:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * Handle Backdrop (v1.0.0)
 * ------------------------------------------------------------------------
 */"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _util=_interopRequireDefault(require("util"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */var NAME='backdrop';var VERSION='1.0.0';var Default={wait:500,modifier:false};var DefaultType={wait:'(number)',modifier:'(boolean|string)'};var ClassName={BACKDROP:'c-backdrop',FADE:'fade',SHOW:'show'};/**
 * ------------------------------------------------------------------------
 * Class Definition Backdrop
 * ------------------------------------------------------------------------
 */var Backdrop=/*#__PURE__*/function(){function Backdrop(config){_classCallCheck(this,Backdrop);this._element=document.createElement("div");this._config=this._getConfig(config);this.init();}/**
     * Private: Get config
     *
     */_createClass(Backdrop,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Init Backdrop
     *
     */},{key:"init",value:function init(){_util["default"].addClass(this._element,ClassName.BACKDROP);if(this._config.modifier){_util["default"].addClass(this._element,this._config.modifier);}document.body.appendChild(this._element);}/**
     * Show Backdrop.
     *
     */},{key:"showBackdrop",value:function showBackdrop(){var _this=this._element;document.body.appendChild(this._element);_util["default"].addClass(_this,ClassName.SHOW);setTimeout(function(){_util["default"].addClass(_this,ClassName.FADE);},10);}/**
     * Hide Backdrop.
     *
     * @param {boolean} doRemove - remove Backdrop from DOM
     */},{key:"hideBackdrop",value:function hideBackdrop(doRemove){var _this=this._element;_util["default"].removeClass(_this,ClassName.FADE);setTimeout(function(){_util["default"].removeClass(_this,ClassName.SHOW);if(doRemove){_this.parentNode.removeChild(_this);}},this._config.wait);}/**
     * Remove Backdrop from DOM.
     *
     */},{key:"removeBackdrop",value:function removeBackdrop(){this._element.parentNode.removeChild(this._element);}}]);return Backdrop;}();var _default=Backdrop;exports["default"]=_default;

},{"util":"util"}],4:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * Handle Upload (v1.0.0)
 *
 * Include Dropzone.js
 * https://www.dropzonejs.com/
 *
 * Change config: data-json="{'VIEW_ID':'uploadFileList', 'LANGUAGE':'EN', 'URL':'assets/media/upload.php'}"
 * * ------------------------------------------------------------------------
 */"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _util=_interopRequireDefault(require("util"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */var NAME='file-upload';var VERSION='0.0.1';var DATA_KEY='ide.file-upload';var Default={};var DefaultType={};var ClassName={};var Data={JSON:'json'};var Selector={FILE_UPLOAD:".c-file-upload",FILE_DELETE:"c-file-upload__delete-filename",UPLOAD_NATIVE:"c-file-upload__native",FILENAME:"c-file-upload__filename",FILENAME_TEXT:".c-file-upload__filename-text"};/**
 * ------------------------------------------------------------------------
 * Class Definition FileUpload
 * ------------------------------------------------------------------------
 */var FileUpload=/*#__PURE__*/function(){function FileUpload(element,config){_classCallCheck(this,FileUpload);this._element=element;this.init();}/**
     * Private: Get config
     *
     */_createClass(FileUpload,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Init FileUpload
     *
     */},{key:"init",value:function init(){// console.log(this._element, 'Init File-Upload ...')
var nativeUpload=this._element.getElementsByClassName(Selector.UPLOAD_NATIVE)[0];var fileName=this._element.getElementsByClassName(Selector.FILENAME)[0];var deleteFile=this._element.getElementsByClassName(Selector.FILENAME)[0];deleteFile.onclick=function(){fileName.style.display='none';nativeUpload.value='';};nativeUpload.onchange=function(){fileName.style.display='flex';fileName.querySelector(Selector.FILENAME_TEXT).textContent=this.files[0].name;};}/**
     * Static: Set DOM interface
     *
     */}],[{key:"_DomInterface",value:function _DomInterface(toggle){var data=_util["default"].handleData(toggle,DATA_KEY);if(!data){var config;if(toggle.hasAttribute('data-'+Data.JSON)){var jsonString=_util["default"].getJsonFromElement(toggle,Data.JSON);config=JSON.parse(jsonString);}data=new FileUpload(toggle,config);_util["default"].handleData(toggle,DATA_KEY,data);}}}]);return FileUpload;}();/**
 * ------------------------------------------------------------------------
 * Activate FileUpload
 * ------------------------------------------------------------------------
 */document.addEventListener("DOMContentLoaded",function(){var uploadList=document.querySelectorAll(Selector.FILE_UPLOAD);for(var i=0;i<uploadList.length;i++){if(uploadList[i]){FileUpload._DomInterface(uploadList[i]);}}});var _default=FileUpload;exports["default"]=_default;

},{"util":"util"}],5:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * Handle Modals
 *
 * Close modal: data-close="modal"
 * ------------------------------------------------------------------------
 */"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _util=_interopRequireDefault(require("util"));var _backdrop=_interopRequireDefault(require("./../../../../../app/components/core/backdrop/scripts/backdrop.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */var NAME='modal';var VERSION='0.0.0';var DATA_KEY='ide.modal';var Default={wait:500,backdrop:true,backdropWait:500,backdropModifier:false};var DefaultType={wait:'number',backdrop:'boolean',backdropWait:'number',backdropModifier:'(boolean|string)'};var ClassName={FADE:'fade-modal',SHOW:'show-modal',ISNT_SCROLLABLE:'isnt-scrollable'};var Data={JSON:'json',TARGET:'target'};var Selector={DATA_TOGGLE:'[data-toggle="modal"]',DATA_CLOSE:'[data-close="modal"]'};/**
 * ------------------------------------------------------------------------
 * Class Definition Modal
 * ------------------------------------------------------------------------
 */var Modal=/*#__PURE__*/function(){function Modal(element,config){_classCallCheck(this,Modal);this._element=element;this._config=this._getConfig(config);this._backdrop=this._config.backdrop?new _backdrop["default"]({modifier:this._config.backdropModifier,wait:this._config.backdropWait}):false;this.init();}/**
     * Private: Get config
     *
     */_createClass(Modal,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Init Modal
     *
     */},{key:"init",value:function init(){// console.log('Modal init...', this._element);
var closeButton=this._element.querySelector(Selector.DATA_CLOSE);closeButton.addEventListener('click',this.toggleModal.bind(this),false);}/**
     * Toggle Modal
     *
     */},{key:"toggleModal",value:function toggleModal(){if(_util["default"].hasClass(this._element,ClassName.SHOW)){this.hideModal();}else{this.showModal();}}/**
     * Show Modal
     *
     */},{key:"showModal",value:function showModal(){var _this=this._element;if(this._config.backdrop){this._backdrop.showBackdrop();}_util["default"].addClass(document.body,ClassName.ISNT_SCROLLABLE);_util["default"].addClass(_this,ClassName.SHOW);setTimeout(function(){_util["default"].addClass(_this,ClassName.FADE);},10);}/**
     * Hide Modal
     *
     */},{key:"hideModal",value:function hideModal(){var _this=this._element;this._backdrop.hideBackdrop(true);_util["default"].removeClass(_this,ClassName.FADE);_util["default"].removeClass(document.body,ClassName.ISNT_SCROLLABLE);setTimeout(function(){_util["default"].removeClass(_this,ClassName.SHOW);},Default.wait);}/**
     * Static: Set DOM interface
     *
     */}],[{key:"_DomInterface",value:function _DomInterface(target,toggle){var data=_util["default"].handleData(toggle,DATA_KEY);if(!data){var config;if(target.hasAttribute('data-'+Data.JSON)){var jsonString=_util["default"].getJsonFromElement(target,Data.JSON);config=JSON.parse(jsonString);}data=new Modal(target,config);_util["default"].handleData(toggle,DATA_KEY,data);}data.toggleModal();}}]);return Modal;}();/**
 * ------------------------------------------------------------------------
 * Activate Modal
 * ------------------------------------------------------------------------
 */document.addEventListener('click',function(event){if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;}if(event.target.matches(Selector.DATA_TOGGLE)||event.target.matches(Selector.DATA_TOGGLE+' *')){var toggle=event.target.matches(Selector.DATA_TOGGLE+' *')?event.target.parentNode:event.target;var target;var selector=toggle.getAttribute('data-target');if(selector){target=document.querySelector('#'+selector);if(toggle.tagName==='A'||toggle.tagName==='AREA'){event.preventDefault();}Modal._DomInterface(target,toggle);}}},false);var _default=Modal;exports["default"]=_default;

},{"./../../../../../app/components/core/backdrop/scripts/backdrop.js":3,"util":"util"}],6:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * Handle Scroll into View (v1.0.0)
 *
 * Activate with data-anchor="" attribute
 * Set behavior of scroll animation
 * Set offset from scroll view
 *
 * Change config: data-json="{'BEHAVIOR': 'smooth', 'OFFSET_TOP': 0}"
 * * ------------------------------------------------------------------------
 */"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _util=_interopRequireDefault(require("util"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */var NAME='scroll-into-view';var VERSION='1.0.0';var DATA_KEY='ide.scrollIntoView';var Default={BEHAVIOR:'smooth',OFFSET_TOP:0};var DefaultType={BEHAVIOR:'string',OFFSET_TOP:'number'};var Data={JSON:'json',TARGET:'target'};var Selector={DATA_JS:'[data-anchor]'};/**
 * ------------------------------------------------------------------------
 * Class Definition ScrollIntoView
 * ------------------------------------------------------------------------
 */var ScrollIntoView=/*#__PURE__*/function(){function ScrollIntoView(element,config){_classCallCheck(this,ScrollIntoView);this._element=element;this._config=this._getConfig(config);this.isScrolling=false;}/**
     * Private: Get config
     *
     */_createClass(ScrollIntoView,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Init Animate
     *
     */},{key:"init",value:function init(){// console.log('Scroll into View init..');
}/**
     * Scroll into View
     *
     */},{key:"scroll",value:function scroll(elem){var href=elem.getAttribute('href');var section=document.querySelector(href);if(!section){console.warn('A section with id="'+href.replace('#','')+'" does not exist!');return false;}var bodyRect=document.body.getBoundingClientRect().top;var sectionRect=section.getBoundingClientRect().top;var sectionPosition=sectionRect-bodyRect;var offsetPosition=sectionPosition-Default.OFFSET_TOP;this.scrollToY(offsetPosition,500,'easeInOutQuint');// prevent ie11 glitch
if(!_util["default"].detectIE11()){window.location.hash=href;}}/**
     * Scroll to a Y position
     *
     * @public
     * @param {int} scrollTargetY - the target scrollY property of the window
     * @param {int} speed - time in pixels per second
     * @param {string} easing - easing equation to use
     *
     */},{key:"scrollToY",value:function scrollToY(){var _this=this;var scrollTargetY=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var speed=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1000;var easing=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'easeInOutQuint';this.isScrolling=true;var scrollY=window.scrollY||window.pageYOffset;var currentTime=0;// min time .1, max time .8 seconds
var time=Math.max(0.1,Math.min(Math.abs(scrollY-scrollTargetY)/speed,0.8));var easingEquations={easeOutSine:function easeOutSine(pos){return Math.sin(pos*(Math.PI/2));},easeInOutSine:function easeInOutSine(pos){return-0.5*(Math.cos(Math.PI*pos)-1);},easeInOutQuint:function easeInOutQuint(pos){if((pos/=0.5)<1){return 0.5*Math.pow(pos,5);}return 0.5*(Math.pow(pos-2,5)+2);}};var tick=function tick(){currentTime+=1/60;var p=currentTime/time;var t=easingEquations[easing](p);var s=scrollY+(scrollTargetY-scrollY)*t;if(p<=1){requestAnimationFrame(tick);window.scrollTo(0,s);}else{_this.isScrolling=false;}};tick();}},{key:"getOffset",value:function getOffset(el){var rect=el.getBoundingClientRect();return{left:rect.left+window.scrollX,top:rect.top+window.scrollY};}/**
     * Static: Set DOM interface
     *
     */}],[{key:"_DomInterface",value:function _DomInterface(target){var data=_util["default"].handleData(target,DATA_KEY);if(!data){var config;if(target.hasAttribute('data-'+Data.JSON)){var jsonString=_util["default"].getJsonFromElement(target,Data.JSON);config=JSON.parse(jsonString);}data=new ScrollIntoView(target,config);_util["default"].handleData(target,DATA_KEY,data);}data.scroll(target);}}]);return ScrollIntoView;}();/**
 * ------------------------------------------------------------------------
 * Activate ScrollIntoView
 * ------------------------------------------------------------------------
 */document.addEventListener('click',function(event){if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;}if(event.target.matches(Selector.DATA_JS)){var target=event.target;if(target.tagName==='A'){event.preventDefault();}ScrollIntoView._DomInterface(target);}},false);var _default=ScrollIntoView;exports["default"]=_default;

},{"util":"util"}],7:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * Handle background videos
 *
 * <video data-src-desktop="video.mp4" data-src-mobile="video-mobile.mp4"></video>
 * ------------------------------------------------------------------------
 */"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _util=_interopRequireDefault(require("util"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */var NAME='section';var VERSION='1.0.0';var DATA_KEY='ide.section';var Default={VIDEO_WIDTH:1280,VIDEO_MOBILE_WIDTH:720,VIDEO_TYPE:'video/mp4'};var DefaultType={VIDEO_WIDTH:'number',VIDEO_MOBILE_WIDTH:'number',VIDEO_TYPE:'string'};var ClassName={VIDEO:'c-section__video-player'};var Data={SRC:'src',SRC_MOBILE:'src-mobile'};/**
 * ------------------------------------------------------------------------
 * Class Definition Section
 * ------------------------------------------------------------------------
 */var Section=/*#__PURE__*/function(){function Section(element,config,source,sourceMobile){_classCallCheck(this,Section);this._element=element;this._video=document.createElement("source");this._config=this._getConfig(config);this._source=source;this._sourceMobile=sourceMobile;this._isMobile=this.checkIfMobile();this.appendSource();}/**
     * Private: Get config
     *
     */_createClass(Section,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Check window inner width
     */},{key:"checkIfMobile",value:function checkIfMobile(){return window.innerWidth<=this._config.VIDEO_MOBILE_WIDTH?true:false;}/**
     * Append video source
     */},{key:"appendSource",value:function appendSource(){var videoWidth=this._config.VIDEO_WIDTH;var videoSrc=this._source;if(this._isMobile){videoWidth=this._config.VIDEO_MOBILE_WIDTH;videoSrc=this._sourceMobile;}this._video.type=this._config.VIDEO_TYPE;this._video.src=videoSrc;this._element.setAttribute('width',videoWidth);this._element.appendChild(this._video);}/**
     * Change video source after window resize
     */},{key:"resizeSource",value:function resizeSource(){var videoWidth=this._config.VIDEO_WIDTH;var videoSrc=this._source;this._isMobile=this.checkIfMobile();if(this._isMobile){videoWidth=this._config.VIDEO_MOBILE_WIDTH;videoSrc=this._sourceMobile;}this._element.setAttribute('width',videoWidth);this._video.src=videoSrc;}/**
     * Static: Set DOM interface
     *
     */}],[{key:"_DomInterface",value:function _DomInterface(target,source,sourceMobile){var data=_util["default"].handleData(target,DATA_KEY);if(!data){var config;if(target.hasAttribute('data-'+Data.JSON)){var jsonString=_util["default"].getJsonFromElement(target,Data.JSON);config=JSON.parse(jsonString);}data=new Section(target,config,source,sourceMobile);_util["default"].handleData(target,DATA_KEY,data);}window.addEventListener('resize',function(){var current=data.checkIfMobile();if(current!=data._isMobile){data.resizeSource();}});}}]);return Section;}();/**
 * ------------------------------------------------------------------------
 * Activate Section
 * ------------------------------------------------------------------------
 */document.addEventListener('readystatechange',function(event){if(document.readyState=='interactive'){var videos=document.getElementsByClassName(ClassName.VIDEO);for(var i=0;i<videos.length;i++){var source=videos[i].getAttribute('data-'+Data.SRC);var sourceMobile=videos[i].getAttribute('data-'+Data.SRC_MOBILE);if(source&&sourceMobile){Section._DomInterface(videos[i],source,sourceMobile);}}}});var _default=Section;exports["default"]=_default;

},{"util":"util"}],8:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * Handle SVG Lottie Animation (v1.0.0)
 *
 * Activate with data-animation="lottie"
 * Set animation name / file name
 * Set animation loop
 * Set animation autoplay
 * Set animation delay
 *
 * Change config: data-json="{'jsonPath': 'assets/animations/lottie-placeholder.json', 'loop': true, 'autoplay': true, 'delay': 0}"
 * * ------------------------------------------------------------------------
 */"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _util=_interopRequireDefault(require("util"));var _lottie=_interopRequireDefault(require("lottie"));var _scrollOut=_interopRequireDefault(require("scroll-out"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */var NAME='svg';var VERSION='1.0.0';var DATA_KEY='ide.svg';var Default={jsonPath:'assets/animations/lottie-placeholder.json',loop:true,autoplay:true,delay:0};var DefaultType={jsonPath:'string',loop:'boolean',autoplay:'boolean',delay:'number'};var Data={JSON:'json',TARGET:'target'};var Selector={DATA_ANIMATION:'[data-animation="lottie"]'};/**
 * ------------------------------------------------------------------------
 * Class Definition Animate
 * ------------------------------------------------------------------------
 */var Svg=/*#__PURE__*/function(){function Svg(element,config){_classCallCheck(this,Svg);this._element=element;this._config=this._getConfig(config);this.init();}/**
     * Private: Get config
     *
     */_createClass(Svg,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Init Animate
     *
     */},{key:"init",value:function init(){// console.log('Svg init...');
var animation=_lottie["default"].loadAnimation({container:this._element,path:this._config.jsonPath,loop:this._config.loop,autoplay:this._config.autoplay,renderer:'svg'});if(_util["default"].detectIE11()){var fixIe11=function fixIe11(elem){var width=elem.clientWidth;var height=elem.clientHeight;var svg=elem.querySelector('svg');if(width>=height){var ratio=width/svg.getAttribute('width');svg.style.width=width+"px";svg.style.height=svg.getAttribute('height')*ratio+"px";}else{var _ratio=height/svg.getAttribute('height');svg.style.width=svg.getAttribute('width')*_ratio+"px";svg.style.height=height+"px";}};var element=this._element;animation.addEventListener('DOMLoaded',function(){fixIe11(element);});window.addEventListener('resize',function(){fixIe11(element);},true);}if(this._config.autoplay===false&&animation){var _element=this._element;var _this=this;(0,_scrollOut["default"])({targets:_element,onShown:function onShown(){setTimeout(function(){animation.play();},_this._config.delay);}});}}/**
     * Static: Set DOM interface
     *
     */}],[{key:"_DomInterface",value:function _DomInterface(target){var data=_util["default"].handleData(target,DATA_KEY);if(!data){var config;if(target.hasAttribute('data-'+Data.JSON)){var jsonString=_util["default"].getJsonFromElement(target,Data.JSON);config=JSON.parse(jsonString);}data=new Svg(target,config);_util["default"].handleData(target,DATA_KEY,data);}}}]);return Svg;}();/**
 * ------------------------------------------------------------------------
 * Activate Animate
 * ------------------------------------------------------------------------
 */document.addEventListener("DOMContentLoaded",function(){var animationList=document.querySelectorAll(Selector.DATA_ANIMATION);for(var i=0;i<animationList.length;i++){if(animationList[i]){Svg._DomInterface(animationList[i]);}}});var _default=Svg;exports["default"]=_default;

},{"lottie":"lottie","scroll-out":"scroll-out","util":"util"}],9:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * Handle Video with srcset (v1.0.0)
 *
 *
 *
 *
 *
 * Change config: data-json="{'RESIZE': false, 'RESIZEDELAY': 10}"
 * * ------------------------------------------------------------------------
 */"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _util=_interopRequireDefault(require("util"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */var NAME='video-srcset';var VERSION='1.0.0';var DATA_KEY='ide.video-srcset';var Default={RESIZE:true,RESIZEDELAY:50};var DefaultType={RESIZE:'boolean',RESIZEDELAY:'number'};var Data={JSON:'json'};var Selector={DATA_TOGGLE:'[data-srcset]',SRCSET:'srcset'};/**
 * ------------------------------------------------------------------------
 * Class Definition VideoSrcset
 * ------------------------------------------------------------------------
 */var VideoSrcset=/*#__PURE__*/function(){function VideoSrcset(element,config){_classCallCheck(this,VideoSrcset);this._element=element;this._config=this._getConfig(config);this.init();}/**
     * Private: Get config
     *
     */_createClass(VideoSrcset,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Init video srcset
     *
     */},{key:"init",value:function init(){if(this._element.tagName=='VIDEO'){var srcset=this._element.getAttribute('data-'+Selector.SRCSET);if(srcset){var selectedSource=this.selectSource(srcset,window.innerWidth);if(selectedSource!==this._element.src){this._element.src=selectedSource;}if(this._config.RESIZE){var _this=this;var resizeDelayTimeout=null;window.addEventListener('resize',function(){if(resizeDelayTimeout!==null){clearTimeout(resizeDelayTimeout);}resizeDelayTimeout=setTimeout(function(){var resizeSource=_this.selectSource(srcset,window.innerWidth);if(resizeSource!==_this._element.src){_this._element.src=resizeSource;}},_this._config.RESIZEDELAY);});}}}}/**
     * Get source sets
     *
     * @param {String} value - The data srcset attribute value
     * @returns {Array}
     */},{key:"getSourceSets",value:function getSourceSets(value){var sources=[];var parts=value.split(',');var regex=/^\s*(.+)\s+(\d+)([wh])?\s*$/;for(var i in parts){var result=void 0;if(result=parts[i].match(regex)){sources.push({width:parseInt(result[2]),src:result[1]});}}return sources;}/**
     * Select sources
     *
     * @param {String} srcsrt - The definition of the data srcset attribute
     * @param {Integer} screenWidth - The width of the container to find matching src for
     * @returns {String}
     */},{key:"selectSource",value:function selectSource(srcsrt,screenWidth){var sources=this.getSourceSets(srcsrt);var selectedDiff=null;var source=null;for(var i in sources){var candidate=sources[i];var candidateDiff=candidate.width-screenWidth;if(source===null||// First One
selectedDiff<0&&candidateDiff>=0||// Got smaller - and then larger
candidateDiff<0&&candidateDiff>selectedDiff||candidateDiff>=0&&candidateDiff<selectedDiff// Got one that match better
){selectedDiff=candidateDiff;source=candidate.src;}}return source;}/**
     * Static: Set DOM interface
     *
     */}],[{key:"_DomInterface",value:function _DomInterface(element){var data=_util["default"].handleData(element,DATA_KEY);if(!data){var config;if(element.hasAttribute('data-'+Data.JSON)){var jsonString=_util["default"].getJsonFromElement(element,Data.JSON);config=JSON.parse(jsonString);}data=new VideoSrcset(element,config);_util["default"].handleData(element,DATA_KEY,data);}}}]);return VideoSrcset;}();/**
 * ------------------------------------------------------------------------
 * Activate VideoSrcset
 * ------------------------------------------------------------------------
 */document.addEventListener('readystatechange',function(event){if(document.readyState=='interactive'){var elements=document.querySelectorAll(Selector.DATA_TOGGLE);if(elements){for(var i=0;i<elements.length;i++){var element=elements[i];VideoSrcset._DomInterface(element);}}}});var _default=VideoSrcset;exports["default"]=_default;

},{"util":"util"}],10:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * Handle Video (v1.0.0)
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
 */var NAME='video';var VERSION='1.0.0';var DATA_KEY='ide.video';var Default={PLAY:'play-circle',BREAK:'pause-circle'};var DefaultType={PLAY:'string',BREAK:'string'};var Data={JSON:'json',TARGET:'target'};var Selector={DATA_TOGGLE:'[data-toggle="video"]'};/**
 * ------------------------------------------------------------------------
 * Class Definition Video
 * ------------------------------------------------------------------------
 */var Video=/*#__PURE__*/function(){function Video(element,parent,config){_classCallCheck(this,Video);this._element=element;this._parent=parent;this._config=this._getConfig(config);}/**
     * Private: Get config
     *
     */_createClass(Video,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Toggle between play and pause
     *
     */},{key:"togglePlay",value:function togglePlay(target,toggle){var video=target.getElementsByTagName('video')[0];if(video.paused){video.play();toggle.innerHTML='<i class="ic ic__'+this._config.BREAK+'"></i>';_util["default"].addClass(toggle,'is-playing');}else{video.pause();toggle.innerHTML='<i class="ic ic__'+this._config.PLAY+'"></i>';_util["default"].removeClass(toggle,'is-playing');}video.addEventListener('ended',function(){toggle.innerHTML='<i class="ic ic__'+this._config.PLAY+'"></i>';_util["default"].removeClass(toggle,'is-playing');},false);}/**
     * Static: Set DOM interface
     *
     */}],[{key:"_DomInterface",value:function _DomInterface(target,toggle){var data=_util["default"].handleData(toggle,DATA_KEY);if(!data){var config;if(target.hasAttribute('data-'+Data.JSON)){var jsonString=_util["default"].getJsonFromElement(target,Data.JSON);config=JSON.parse(jsonString);}data=new Video(toggle,target,config);_util["default"].handleData(toggle,DATA_KEY,data);}data.togglePlay(target,toggle);}}]);return Video;}();/**
 * ------------------------------------------------------------------------
 * Activate Video
 * ------------------------------------------------------------------------
 */document.addEventListener('click',function(event){if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;}if(event.target.matches(Selector.DATA_TOGGLE)){var toggle=event.target;var target;var selector=_util["default"].getSelectorFromElement(toggle,Data.TARGET);if(selector){target=document.querySelector(selector);if(toggle.tagName==='A'){event.preventDefault();}Video._DomInterface(target,toggle);}}},false);var _default=Video;exports["default"]=_default;

},{"util":"util"}],11:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * Handle Header
 *
 * ------------------------------------------------------------------------
 */"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _util=_interopRequireDefault(require("util"));var _scrollOut=_interopRequireDefault(require("scroll-out"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */var NAME='header';var VERSION='1.0.0';var DATA_KEY='ide.header';var Default={OFFSET:120};var DefaultType={OFFSET:'number'};var ID={HEADER:'header'};var ClassName={ACTIVE:'is-active',STICKY:'is-sticky'};var Data={JSON:'json',ANCHOR:'target'};/**
 * ------------------------------------------------------------------------
 * Class Definition Navigation
 * ------------------------------------------------------------------------
 */var Header=/*#__PURE__*/function(){function Header(element,config){_classCallCheck(this,Header);this._element=element;this.init();}/**
     * Private: Get config
     *
     */_createClass(Header,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Init Navigation
     *
     */},{key:"init",value:function init(){// console.log('Header init..');
this.stickyHeader();}/**
     * Sticky Header
     *
     */},{key:"stickyHeader",value:function stickyHeader(){var self=this;(0,_scrollOut["default"])({targets:this._element,offset:Default.OFFSET,onShown:function onShown(el){_util["default"].addClass(self._element,ClassName.ACTIVE);},onHidden:function onHidden(el){el.style.opacity='1';_util["default"].removeClass(self._element,ClassName.ACTIVE);}});}/**
     * Static: Set DOM interface
     *
     */}],[{key:"_DomInterface",value:function _DomInterface(target){var data=_util["default"].handleData(target,DATA_KEY);if(!data){var config;if(target.hasAttribute('data-'+Data.JSON)){var jsonString=_util["default"].getJsonFromElement(target,Data.JSON);config=JSON.parse(jsonString);}data=new Header(target,config);_util["default"].handleData(target,DATA_KEY,data);}}}]);return Header;}();/**
 * ------------------------------------------------------------------------
 * Activate Navigation
 * ------------------------------------------------------------------------
 */document.addEventListener("DOMContentLoaded",function(){var header=document.getElementById(ID.HEADER);if(header){var sticky=_util["default"].hasClass(header,ClassName.STICKY);if(sticky){Header._DomInterface(header);}}});var _default=Header;exports["default"]=_default;

},{"scroll-out":"scroll-out","util":"util"}],12:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * Handle Nav
 *
 * ------------------------------------------------------------------------
 */"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _util=_interopRequireDefault(require("util"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */var NAME='nav';var VERSION='1.0.0';var DATA_KEY='ide.nav';var Default={OFFSET:0,DURATION:3500,TOP:0};var DefaultType={OFFSET:'number',DURATION:'number',TOP:'number'};var ID={MAIN_NAV:'main-nav',NAV_BUTTON:'nav-toggle-button'};var ClassName={ACTIVE:'is-active',OPEN:'is-open',ISNT_SCROLLABLE:'isnt-scrollable'};var Data={JSON:'json',ANCHOR:'target',PARENT:'parent'};var Selector={DATA_ANCHOR:'[data-anchor]'};/**
 * ------------------------------------------------------------------------
 * Class Definition Navigation
 * ------------------------------------------------------------------------
 */var Nav=/*#__PURE__*/function(){function Nav(element,parent,config){_classCallCheck(this,Nav);this._element=element;this._parent=parent;this.navButton=document.getElementById(ID.NAV_BUTTON);this.navContent=document.getElementById(ID.MAIN_NAV);this.init();}/**
     * Private: Get config
     *
     */_createClass(Nav,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Init Navigation
     *
     */},{key:"init",value:function init(){// console.log('Navigation init..', this._element);
this.bindButton();this.anchorLinkToggleNav();}/**
     * Bind click on button.
     *
     */},{key:"bindButton",value:function bindButton(){if(this.navButton){this.openNav=function(e){this.toggleNav(this.navContent,this.navButton);};this.navButton.addEventListener('click',this.openNav.bind(this),false);}}/**
     * Toggle the navigation on mobile
     *
     */},{key:"toggleNav",value:function toggleNav(target,toggle){_util["default"].toggleClass(toggle,ClassName.ACTIVE);_util["default"].toggleClass(target,ClassName.OPEN);_util["default"].toggleClass(document.body,ClassName.ISNT_SCROLLABLE);}/**
     * Remove open nav classes
     *
     */},{key:"removeOpenClasses",value:function removeOpenClasses(target,toggle){_util["default"].removeClass(this.navButton,ClassName.ACTIVE);_util["default"].removeClass(this.navContent,ClassName.OPEN);_util["default"].removeClass(document.body,ClassName.ISNT_SCROLLABLE);}/**
     * Toggle the navigation on anchor link
     *
     */},{key:"anchorLinkToggleNav",value:function anchorLinkToggleNav(target,toggle){var self=this;this._element.addEventListener('click',function(event){var mainNav=event.target.offsetParent;if(event.target.matches(Selector.DATA_ANCHOR)&&mainNav.id){self.removeOpenClasses();}},false);}/**
     * Static: Set DOM interface
     *
     */}],[{key:"_DomInterface",value:function _DomInterface(target){var data=_util["default"].handleData(target,DATA_KEY);if(!data){var config;if(target.hasAttribute('data-'+Data.JSON)){var jsonString=_util["default"].getJsonFromElement(target,Data.JSON);config=JSON.parse(jsonString);}data=new Nav(target,config);_util["default"].handleData(target,DATA_KEY,data);}}}]);return Nav;}();/**
 * ------------------------------------------------------------------------
 * Activate Navigation
 * ------------------------------------------------------------------------
 */document.addEventListener("DOMContentLoaded",function(){var mainNav=document.getElementById(ID.MAIN_NAV);if(mainNav){Nav._DomInterface(mainNav);}});var _default=Nav;exports["default"]=_default;

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
