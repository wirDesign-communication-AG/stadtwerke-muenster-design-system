require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * Bundled Javascript
 * ------------------------------------------------------------------------
 */"use strict";var _animate=_interopRequireDefault(require("./../app/components/core/animate/scripts/animate.js"));var _fileUpload=_interopRequireDefault(require("./../app/components/core/file-upload/scripts/file-upload.js"));var _form=_interopRequireDefault(require("./../app/components/core/form/scripts/form.js"));var _inputMask=_interopRequireDefault(require("./../app/components/core/form/scripts/input-mask.js"));var _modal=_interopRequireDefault(require("./../app/components/core/modal/scripts/modal.js"));var _rangeSlider=_interopRequireDefault(require("./../app/components/core/range-slider/scripts/range-slider.js"));var _scrollIntoView=_interopRequireDefault(require("./../app/components/core/scroll-into-view/scripts/scroll-into-view.js"));var _section=_interopRequireDefault(require("./../app/components/core/section/scripts/section.js"));var _svg=_interopRequireDefault(require("./../app/components/core/svg/scripts/svg.js"));var _video=_interopRequireDefault(require("./../app/components/core/video/scripts/video.js"));var _videoSrcset=_interopRequireDefault(require("./../app/components/core/video/scripts/video-srcset.js"));var _header=_interopRequireDefault(require("./../app/components/modules/header/scripts/header.js"));var _nav=_interopRequireDefault(require("./../app/components/modules/nav/scripts/nav.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}

},{"./../app/components/core/animate/scripts/animate.js":2,"./../app/components/core/file-upload/scripts/file-upload.js":4,"./../app/components/core/form/scripts/form.js":5,"./../app/components/core/form/scripts/input-mask.js":6,"./../app/components/core/modal/scripts/modal.js":7,"./../app/components/core/range-slider/scripts/range-slider.js":8,"./../app/components/core/scroll-into-view/scripts/scroll-into-view.js":9,"./../app/components/core/section/scripts/section.js":10,"./../app/components/core/svg/scripts/svg.js":11,"./../app/components/core/video/scripts/video-srcset.js":12,"./../app/components/core/video/scripts/video.js":13,"./../app/components/modules/header/scripts/header.js":14,"./../app/components/modules/nav/scripts/nav.js":15}],2:[function(require,module,exports){
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
 * TODO: description
 * ------------------------------------------------------------------------
 */"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _util=_interopRequireDefault(require("util"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */var NAME='form';var VERSION='1.0.0';var DATA_KEY='ide.form';var Default={EMAILREGEX:/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,IBANREGEX:/^DE\d{2}\s?([0-9a-zA-Z]{4}\s?){4}[0-9a-zA-Z]{2}$/i,phpScriptPath:"/template-ide-export/web/assets/media/mailer.php"};var DefaultType={EMAILREGEX:'regexp',IBANREGEX:'regexp',phpScriptPath:'string'};var ClassName={INPUT_WRAPPER:'c-form__input-wrapper',RESPONSE:'c-form__response',INPUT:'c-form__input',IS_ERROR:'is-error',IS_HIDDEN:'is-hidden'};var Data={JSON:'json'};var Selector={DATA_SUBMIT:'[data-submit="form"]'};/**
 * ------------------------------------------------------------------------
 * Class Definition CookiesConsent
 * ------------------------------------------------------------------------
 */var Form=/*#__PURE__*/function(){function Form(element,config){_classCallCheck(this,Form);this._element=element;this._config=this._getConfig(config);// this.init();
}/**
     * Private: Get config
     *
     */_createClass(Form,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Init Form
     *
     */},{key:"init",value:function init(){// console.log(this._element, 'Init Form ...')
}/**
     *  Send form data to mail handler
     *
     */},{key:"sendForm",value:function sendForm(){if(this._validateFields()){var request=new XMLHttpRequest();var data=this._serialize(this._element);var _this=this;request.open('POST',this._config.phpScriptPath,true);request.setRequestHeader('Content-type','application/x-www-form-urlencoded');request.onload=function(){var mailerResponse=JSON.parse(this.response);if(this.status>=200&&this.status<400){_this._showResponse(mailerResponse.message);}else{_this._showResponse(mailerResponse.message);}};request.onerror=function(){// TODO: There was a connection error of some sort
};request.send(data);}}},{key:"_validateFields",value:function _validateFields(){var isValid=true;var valElements=this._element.querySelectorAll('[data-required="true"]');var valElementsArray=_toConsumableArray(valElements);valElementsArray.forEach(function(inputItem,i){var errorObj=inputItem.nextElementSibling;_util["default"].removeClass(inputItem,ClassName.IS_ERROR);_util["default"].removeClass(errorObj,ClassName.IS_ERROR);if(inputItem.getAttribute('type')==='text'||inputItem.getAttribute('data-type')==='text'){if(inputItem.value.length<2){_util["default"].addClass(inputItem,ClassName.IS_ERROR);_util["default"].addClass(errorObj,ClassName.IS_ERROR);isValid=false;}}if(inputItem.getAttribute('type')==='email'){var re=Default.EMAILREGEX;if(!re.test(inputItem.value)){_util["default"].addClass(inputItem,ClassName.IS_ERROR);_util["default"].addClass(errorObj,ClassName.IS_ERROR);isValid=false;}}if(inputItem.getAttribute('type')==='text'&&inputItem.getAttribute('data-type')==='iban'){var _re=Default.IBANREGEX;if(!_re.test(inputItem.value)){_util["default"].addClass(inputItem,ClassName.IS_ERROR);_util["default"].addClass(errorObj,ClassName.IS_ERROR);isValid=false;}}// TODO: add validation for number
// TODO: add validation for password
// TODO: add validation for url
// TODO: add validation for tel
// TODO: add validation for zipcode
});return isValid;}},{key:"_serialize",value:function _serialize(form){var arr=[];Array.prototype.slice.call(form.elements).forEach(function(field){if(!field.name||field.disabled||['file','reset','submit','button'].indexOf(field.type)>-1)return;if(field.type==='select-multiple'){Array.prototype.slice.call(field.options).forEach(function(option){if(!option.selected)return;arr.push(encodeURIComponent(field.name)+'='+encodeURIComponent(option.value));});return;}if(['checkbox','radio'].indexOf(field.type)>-1&&!field.checked)return;arr.push(encodeURIComponent(field.name)+'='+encodeURIComponent(field.value));});return arr.join('&');}},{key:"_showResponse",value:function _showResponse(message){var wrapper=this._element.getElementsByClassName(ClassName.INPUT_WRAPPER)[0];var el=document.createElement('div');el.className=ClassName.RESPONSE;el.innerHTML='<span>'+message+'</span>';wrapper.appendChild(el);setTimeout(function(){_util["default"].addClass(el,ClassName.IS_HIDDEN);},5000);this._clearFields();}},{key:"_clearFields",value:function _clearFields(){var fields=this._element.getElementsByClassName(ClassName.INPUT);var fieldsArray=_toConsumableArray(fields);fieldsArray.forEach(function(item,i){item.value='';});}/**
     * Static: Set DOM interface
     *
     */}],[{key:"_DomInterface",value:function _DomInterface(target){var data=_util["default"].handleData(target,DATA_KEY);if(!data){var config;if(target.hasAttribute('data-'+Data.JSON)){var jsonString=_util["default"].getJsonFromElement(target,Data.JSON);config=JSON.parse(jsonString);}data=new Form(target,config);_util["default"].handleData(target,DATA_KEY,data);}data.sendForm();}}]);return Form;}();/**
 * ------------------------------------------------------------------------
 * Activate Form
 * ------------------------------------------------------------------------
 */document.addEventListener('submit',function(event){if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;}if(event.target.matches(Selector.DATA_SUBMIT)){event.preventDefault();var submit=event.target;Form._DomInterface(submit);}},false);var _default=Form;exports["default"]=_default;

},{"util":"util"}],6:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * TODO: description
 * ------------------------------------------------------------------------
 */"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _util=_interopRequireDefault(require("util"));var _cleave=_interopRequireDefault(require("cleave.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */var NAME='input-mask';var VERSION='1.0.0';var DATA_KEY='ide.input-mask';var Default={};var DefaultType={};var ClassName={INPUT_WRAPPER:'c-form__input-wrapper'};var Data={JSON:'json'};var Selector={MASK:'[data-mask]'};var Mask={IBAN:{BLOCKS:[2,2,5,15],UPPERCASE:true}};/**
 * ------------------------------------------------------------------------
 * Class Definition CookiesConsent
 * ------------------------------------------------------------------------
 */var InputMask=/*#__PURE__*/function(){function InputMask(element,config){_classCallCheck(this,InputMask);this._element=element;this._config=this._getConfig(config);this.init();}/**
     * Private: Get config
     *
     */_createClass(InputMask,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Init Form
     *
     */},{key:"init",value:function init(){//console.log(this._element, 'Init Input-Mask ...');
// let inputElements = this._element.querySelectorAll('[data-mask]');
// let inputElementsArray = [...inputElements];
// inputElementsArray.forEach(function (inputItem, i) {
if(this._element.getAttribute('data-mask')==='iban'){var cleave=new _cleave["default"](this._element,{blocks:Mask.IBAN.BLOCKS,uppercase:Mask.IBAN.UPPERCASE});}// });
}/**
     * Static: Set DOM interface
     *
     */}],[{key:"_DomInterface",value:function _DomInterface(target,submit){var data=_util["default"].handleData(target,DATA_KEY);if(!data){var config;if(target.hasAttribute('data-'+Data.JSON)){var jsonString=_util["default"].getJsonFromElement(target,Data.JSON);config=JSON.parse(jsonString);}data=new InputMask(target,config);_util["default"].handleData(target,DATA_KEY,data);}if(submit){data.sendForm();}}}]);return InputMask;}();/**
 * ------------------------------------------------------------------------
 * Activate Input Mask
 * ------------------------------------------------------------------------
 */document.addEventListener("DOMContentLoaded",function(){var inputMaskList=document.querySelectorAll(Selector.MASK);for(var i=0;i<inputMaskList.length;i++){if(inputMaskList[i]){InputMask._DomInterface(inputMaskList[i]);}}},false);var _default=InputMask;exports["default"]=_default;

},{"cleave.js":"cleave.js","util":"util"}],7:[function(require,module,exports){
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

},{"./../../../../../app/components/core/backdrop/scripts/backdrop.js":3,"util":"util"}],8:[function(require,module,exports){
/**
 * ------------------------------------------------------------------------
 * TODO: description
 * ------------------------------------------------------------------------
 */"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _util=_interopRequireDefault(require("util"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */var NAME='range-slider';var VERSION='1.0.0';var DATA_KEY='ide.range-slider';var Default={};var DefaultType={};var ClassName={INPUT:'c-range-slider__native',ICON:'c-range-slider__icon'};var Data={};var Selector={RANGE_SLIDER:".c-range-slider"};/**
 * ------------------------------------------------------------------------
 * Class Definition CookiesConsent
 * ------------------------------------------------------------------------
 */var RangeSlider=/*#__PURE__*/function(){function RangeSlider(element,config){_classCallCheck(this,RangeSlider);this._element=element;this._config=this._getConfig(config);this.init();}/**
     * Private: Get config
     *
     */_createClass(RangeSlider,[{key:"_getConfig",value:function _getConfig(config){config=_objectSpread(_objectSpread({},Default),config);_util["default"].typeCheckConfig(NAME,VERSION,config,DefaultType);return config;}/**
     * Init Form
     *
     */},{key:"init",value:function init(){// console.log(this._element, 'Init Range-Slider ...')
var input=this._element.getElementsByClassName(ClassName.INPUT)[0];var icons=this._element.getElementsByClassName(ClassName.ICON);input.addEventListener('input',function(el){for(var i=0;i<icons.length;i++){if(this.value>i){icons[i].style.color='#121212';}else{icons[i].style.color='#888888';}}el.target.style.background='linear-gradient(to right, #00693C 0%, #00693C '+100/(this.max-1)*(this.value-1)+'%, #C4C4C4 '+100/(this.max-1)*(this.value-1)+'%, #C4C4C4 100%)';});}/**
     * Static: Set DOM interface
     *
     */}],[{key:"_DomInterface",value:function _DomInterface(target,submit){var data=_util["default"].handleData(target,DATA_KEY);if(!data){var config;if(target.hasAttribute('data-'+Data.JSON)){var jsonString=_util["default"].getJsonFromElement(target,Data.JSON);config=JSON.parse(jsonString);}data=new RangeSlider(target,config);_util["default"].handleData(target,DATA_KEY,data);}}}]);return RangeSlider;}();/**
 * ------------------------------------------------------------------------
 * Activate Form
 * ------------------------------------------------------------------------
 */document.addEventListener("DOMContentLoaded",function(){var formList=document.querySelectorAll(Selector.RANGE_SLIDER);for(var i=0;i<formList.length;i++){if(formList[i]){RangeSlider._DomInterface(formList[i]);}}},false);var _default=RangeSlider;exports["default"]=_default;

},{"util":"util"}],9:[function(require,module,exports){
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

},{"util":"util"}],10:[function(require,module,exports){
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

},{"util":"util"}],11:[function(require,module,exports){
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

},{"lottie":"lottie","scroll-out":"scroll-out","util":"util"}],12:[function(require,module,exports){
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

},{"util":"util"}],13:[function(require,module,exports){
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

},{"util":"util"}],14:[function(require,module,exports){
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

},{"scroll-out":"scroll-out","util":"util"}],15:[function(require,module,exports){
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

},{"util":"util"}],"cleave.js":[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Cleave"] = factory();
	else
		root["Cleave"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/**
	 * Construct a new Cleave instance by passing the configuration object
	 *
	 * @param {String | HTMLElement} element
	 * @param {Object} opts
	 */
	var Cleave = function (element, opts) {
	    var owner = this;
	    var hasMultipleElements = false;

	    if (typeof element === 'string') {
	        owner.element = document.querySelector(element);
	        hasMultipleElements = document.querySelectorAll(element).length > 1;
	    } else {
	      if (typeof element.length !== 'undefined' && element.length > 0) {
	        owner.element = element[0];
	        hasMultipleElements = element.length > 1;
	      } else {
	        owner.element = element;
	      }
	    }

	    if (!owner.element) {
	        throw new Error('[cleave.js] Please check the element');
	    }

	    if (hasMultipleElements) {
	      try {
	        // eslint-disable-next-line
	        console.warn('[cleave.js] Multiple input fields matched, cleave.js will only take the first one.');
	      } catch (e) {
	        // Old IE
	      }
	    }

	    opts.initValue = owner.element.value;

	    owner.properties = Cleave.DefaultProperties.assign({}, opts);

	    owner.init();
	};

	Cleave.prototype = {
	    init: function () {
	        var owner = this, pps = owner.properties;

	        // no need to use this lib
	        if (!pps.numeral && !pps.phone && !pps.creditCard && !pps.time && !pps.date && (pps.blocksLength === 0 && !pps.prefix)) {
	            owner.onInput(pps.initValue);

	            return;
	        }

	        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);

	        owner.isAndroid = Cleave.Util.isAndroid();
	        owner.lastInputValue = '';
	        owner.isBackward = '';

	        owner.onChangeListener = owner.onChange.bind(owner);
	        owner.onKeyDownListener = owner.onKeyDown.bind(owner);
	        owner.onFocusListener = owner.onFocus.bind(owner);
	        owner.onCutListener = owner.onCut.bind(owner);
	        owner.onCopyListener = owner.onCopy.bind(owner);

	        owner.initSwapHiddenInput();

	        owner.element.addEventListener('input', owner.onChangeListener);
	        owner.element.addEventListener('keydown', owner.onKeyDownListener);
	        owner.element.addEventListener('focus', owner.onFocusListener);
	        owner.element.addEventListener('cut', owner.onCutListener);
	        owner.element.addEventListener('copy', owner.onCopyListener);


	        owner.initPhoneFormatter();
	        owner.initDateFormatter();
	        owner.initTimeFormatter();
	        owner.initNumeralFormatter();

	        // avoid touch input field if value is null
	        // otherwise Firefox will add red box-shadow for <input required />
	        if (pps.initValue || (pps.prefix && !pps.noImmediatePrefix)) {
	            owner.onInput(pps.initValue);
	        }
	    },

	    initSwapHiddenInput: function () {
	        var owner = this, pps = owner.properties;
	        if (!pps.swapHiddenInput) return;

	        var inputFormatter = owner.element.cloneNode(true);
	        owner.element.parentNode.insertBefore(inputFormatter, owner.element);

	        owner.elementSwapHidden = owner.element;
	        owner.elementSwapHidden.type = 'hidden';

	        owner.element = inputFormatter;
	        owner.element.id = '';
	    },

	    initNumeralFormatter: function () {
	        var owner = this, pps = owner.properties;

	        if (!pps.numeral) {
	            return;
	        }

	        pps.numeralFormatter = new Cleave.NumeralFormatter(
	            pps.numeralDecimalMark,
	            pps.numeralIntegerScale,
	            pps.numeralDecimalScale,
	            pps.numeralThousandsGroupStyle,
	            pps.numeralPositiveOnly,
	            pps.stripLeadingZeroes,
	            pps.prefix,
	            pps.signBeforePrefix,
	            pps.tailPrefix,
	            pps.delimiter
	        );
	    },

	    initTimeFormatter: function() {
	        var owner = this, pps = owner.properties;

	        if (!pps.time) {
	            return;
	        }

	        pps.timeFormatter = new Cleave.TimeFormatter(pps.timePattern, pps.timeFormat);
	        pps.blocks = pps.timeFormatter.getBlocks();
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
	    },

	    initDateFormatter: function () {
	        var owner = this, pps = owner.properties;

	        if (!pps.date) {
	            return;
	        }

	        pps.dateFormatter = new Cleave.DateFormatter(pps.datePattern, pps.dateMin, pps.dateMax);
	        pps.blocks = pps.dateFormatter.getBlocks();
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
	    },

	    initPhoneFormatter: function () {
	        var owner = this, pps = owner.properties;

	        if (!pps.phone) {
	            return;
	        }

	        // Cleave.AsYouTypeFormatter should be provided by
	        // external google closure lib
	        try {
	            pps.phoneFormatter = new Cleave.PhoneFormatter(
	                new pps.root.Cleave.AsYouTypeFormatter(pps.phoneRegionCode),
	                pps.delimiter
	            );
	        } catch (ex) {
	            throw new Error('[cleave.js] Please include phone-type-formatter.{country}.js lib');
	        }
	    },

	    onKeyDown: function (event) {
	        var owner = this,
	            charCode = event.which || event.keyCode;

	        owner.lastInputValue = owner.element.value;
	        owner.isBackward = charCode === 8;
	    },

	    onChange: function (event) {
	        var owner = this, pps = owner.properties,
	            Util = Cleave.Util;

	        owner.isBackward = owner.isBackward || event.inputType === 'deleteContentBackward';

	        var postDelimiter = Util.getPostDelimiter(owner.lastInputValue, pps.delimiter, pps.delimiters);

	        if (owner.isBackward && postDelimiter) {
	            pps.postDelimiterBackspace = postDelimiter;
	        } else {
	            pps.postDelimiterBackspace = false;
	        }

	        this.onInput(this.element.value);
	    },

	    onFocus: function () {
	        var owner = this,
	            pps = owner.properties;
	        owner.lastInputValue = owner.element.value;

	        if (pps.prefix && pps.noImmediatePrefix && !owner.element.value) {
	            this.onInput(pps.prefix);
	        }

	        Cleave.Util.fixPrefixCursor(owner.element, pps.prefix, pps.delimiter, pps.delimiters);
	    },

	    onCut: function (e) {
	        if (!Cleave.Util.checkFullSelection(this.element.value)) return;
	        this.copyClipboardData(e);
	        this.onInput('');
	    },

	    onCopy: function (e) {
	        if (!Cleave.Util.checkFullSelection(this.element.value)) return;
	        this.copyClipboardData(e);
	    },

	    copyClipboardData: function (e) {
	        var owner = this,
	            pps = owner.properties,
	            Util = Cleave.Util,
	            inputValue = owner.element.value,
	            textToCopy = '';

	        if (!pps.copyDelimiter) {
	            textToCopy = Util.stripDelimiters(inputValue, pps.delimiter, pps.delimiters);
	        } else {
	            textToCopy = inputValue;
	        }

	        try {
	            if (e.clipboardData) {
	                e.clipboardData.setData('Text', textToCopy);
	            } else {
	                window.clipboardData.setData('Text', textToCopy);
	            }

	            e.preventDefault();
	        } catch (ex) {
	            //  empty
	        }
	    },

	    onInput: function (value) {
	        var owner = this, pps = owner.properties,
	            Util = Cleave.Util;

	        // case 1: delete one more character "4"
	        // 1234*| -> hit backspace -> 123|
	        // case 2: last character is not delimiter which is:
	        // 12|34* -> hit backspace -> 1|34*
	        // note: no need to apply this for numeral mode
	        var postDelimiterAfter = Util.getPostDelimiter(value, pps.delimiter, pps.delimiters);
	        if (!pps.numeral && pps.postDelimiterBackspace && !postDelimiterAfter) {
	            value = Util.headStr(value, value.length - pps.postDelimiterBackspace.length);
	        }

	        // phone formatter
	        if (pps.phone) {
	            if (pps.prefix && (!pps.noImmediatePrefix || value.length)) {
	                pps.result = pps.prefix + pps.phoneFormatter.format(value).slice(pps.prefix.length);
	            } else {
	                pps.result = pps.phoneFormatter.format(value);
	            }
	            owner.updateValueState();

	            return;
	        }

	        // numeral formatter
	        if (pps.numeral) {
	            // Do not show prefix when noImmediatePrefix is specified
	            // This mostly because we need to show user the native input placeholder
	            if (pps.prefix && pps.noImmediatePrefix && value.length === 0) {
	                pps.result = '';
	            } else {
	                pps.result = pps.numeralFormatter.format(value);
	            }
	            owner.updateValueState();

	            return;
	        }

	        // date
	        if (pps.date) {
	            value = pps.dateFormatter.getValidatedDate(value);
	        }

	        // time
	        if (pps.time) {
	            value = pps.timeFormatter.getValidatedTime(value);
	        }

	        // strip delimiters
	        value = Util.stripDelimiters(value, pps.delimiter, pps.delimiters);

	        // strip prefix
	        value = Util.getPrefixStrippedValue(value, pps.prefix, pps.prefixLength, pps.result, pps.delimiter, pps.delimiters, pps.noImmediatePrefix, pps.tailPrefix, pps.signBeforePrefix);

	        // strip non-numeric characters
	        value = pps.numericOnly ? Util.strip(value, /[^\d]/g) : value;

	        // convert case
	        value = pps.uppercase ? value.toUpperCase() : value;
	        value = pps.lowercase ? value.toLowerCase() : value;

	        // prevent from showing prefix when no immediate option enabled with empty input value
	        if (pps.prefix) {
	            if (pps.tailPrefix) {
	                value = value + pps.prefix;
	            } else {
	                value = pps.prefix + value;
	            }


	            // no blocks specified, no need to do formatting
	            if (pps.blocksLength === 0) {
	                pps.result = value;
	                owner.updateValueState();

	                return;
	            }
	        }

	        // update credit card props
	        if (pps.creditCard) {
	            owner.updateCreditCardPropsByValue(value);
	        }

	        // strip over length characters
	        value = Util.headStr(value, pps.maxLength);

	        // apply blocks
	        pps.result = Util.getFormattedValue(
	            value,
	            pps.blocks, pps.blocksLength,
	            pps.delimiter, pps.delimiters, pps.delimiterLazyShow
	        );

	        owner.updateValueState();
	    },

	    updateCreditCardPropsByValue: function (value) {
	        var owner = this, pps = owner.properties,
	            Util = Cleave.Util,
	            creditCardInfo;

	        // At least one of the first 4 characters has changed
	        if (Util.headStr(pps.result, 4) === Util.headStr(value, 4)) {
	            return;
	        }

	        creditCardInfo = Cleave.CreditCardDetector.getInfo(value, pps.creditCardStrictMode);

	        pps.blocks = creditCardInfo.blocks;
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Util.getMaxLength(pps.blocks);

	        // credit card type changed
	        if (pps.creditCardType !== creditCardInfo.type) {
	            pps.creditCardType = creditCardInfo.type;

	            pps.onCreditCardTypeChanged.call(owner, pps.creditCardType);
	        }
	    },

	    updateValueState: function () {
	        var owner = this,
	            Util = Cleave.Util,
	            pps = owner.properties;

	        if (!owner.element) {
	            return;
	        }

	        var endPos = owner.element.selectionEnd;
	        var oldValue = owner.element.value;
	        var newValue = pps.result;

	        endPos = Util.getNextCursorPosition(endPos, oldValue, newValue, pps.delimiter, pps.delimiters);

	        // fix Android browser type="text" input field
	        // cursor not jumping issue
	        if (owner.isAndroid) {
	            window.setTimeout(function () {
	                owner.element.value = newValue;
	                Util.setSelection(owner.element, endPos, pps.document, false);
	                owner.callOnValueChanged();
	            }, 1);

	            return;
	        }

	        owner.element.value = newValue;
	        if (pps.swapHiddenInput) owner.elementSwapHidden.value = owner.getRawValue();

	        Util.setSelection(owner.element, endPos, pps.document, false);
	        owner.callOnValueChanged();
	    },

	    callOnValueChanged: function () {
	        var owner = this,
	            pps = owner.properties;

	        pps.onValueChanged.call(owner, {
	            target: {
	                name: owner.element.name,
	                value: pps.result,
	                rawValue: owner.getRawValue()
	            }
	        });
	    },

	    setPhoneRegionCode: function (phoneRegionCode) {
	        var owner = this, pps = owner.properties;

	        pps.phoneRegionCode = phoneRegionCode;
	        owner.initPhoneFormatter();
	        owner.onChange();
	    },

	    setRawValue: function (value) {
	        var owner = this, pps = owner.properties;

	        value = value !== undefined && value !== null ? value.toString() : '';

	        if (pps.numeral) {
	            value = value.replace('.', pps.numeralDecimalMark);
	        }

	        pps.postDelimiterBackspace = false;

	        owner.element.value = value;
	        owner.onInput(value);
	    },

	    getRawValue: function () {
	        var owner = this,
	            pps = owner.properties,
	            Util = Cleave.Util,
	            rawValue = owner.element.value;

	        if (pps.rawValueTrimPrefix) {
	            rawValue = Util.getPrefixStrippedValue(rawValue, pps.prefix, pps.prefixLength, pps.result, pps.delimiter, pps.delimiters, pps.noImmediatePrefix, pps.tailPrefix, pps.signBeforePrefix);
	        }

	        if (pps.numeral) {
	            rawValue = pps.numeralFormatter.getRawValue(rawValue);
	        } else {
	            rawValue = Util.stripDelimiters(rawValue, pps.delimiter, pps.delimiters);
	        }

	        return rawValue;
	    },

	    getISOFormatDate: function () {
	        var owner = this,
	            pps = owner.properties;

	        return pps.date ? pps.dateFormatter.getISOFormatDate() : '';
	    },

	    getISOFormatTime: function () {
	        var owner = this,
	            pps = owner.properties;

	        return pps.time ? pps.timeFormatter.getISOFormatTime() : '';
	    },

	    getFormattedValue: function () {
	        return this.element.value;
	    },

	    destroy: function () {
	        var owner = this;

	        owner.element.removeEventListener('input', owner.onChangeListener);
	        owner.element.removeEventListener('keydown', owner.onKeyDownListener);
	        owner.element.removeEventListener('focus', owner.onFocusListener);
	        owner.element.removeEventListener('cut', owner.onCutListener);
	        owner.element.removeEventListener('copy', owner.onCopyListener);
	    },

	    toString: function () {
	        return '[Cleave Object]';
	    }
	};

	Cleave.NumeralFormatter = __webpack_require__(1);
	Cleave.DateFormatter = __webpack_require__(2);
	Cleave.TimeFormatter = __webpack_require__(3);
	Cleave.PhoneFormatter = __webpack_require__(4);
	Cleave.CreditCardDetector = __webpack_require__(5);
	Cleave.Util = __webpack_require__(6);
	Cleave.DefaultProperties = __webpack_require__(7);

	// for angular directive
	((typeof global === 'object' && global) ? global : window)['Cleave'] = Cleave;

	// CommonJS
	module.exports = Cleave;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	var NumeralFormatter = function (numeralDecimalMark,
	                                 numeralIntegerScale,
	                                 numeralDecimalScale,
	                                 numeralThousandsGroupStyle,
	                                 numeralPositiveOnly,
	                                 stripLeadingZeroes,
	                                 prefix,
	                                 signBeforePrefix,
	                                 tailPrefix,
	                                 delimiter) {
	    var owner = this;

	    owner.numeralDecimalMark = numeralDecimalMark || '.';
	    owner.numeralIntegerScale = numeralIntegerScale > 0 ? numeralIntegerScale : 0;
	    owner.numeralDecimalScale = numeralDecimalScale >= 0 ? numeralDecimalScale : 2;
	    owner.numeralThousandsGroupStyle = numeralThousandsGroupStyle || NumeralFormatter.groupStyle.thousand;
	    owner.numeralPositiveOnly = !!numeralPositiveOnly;
	    owner.stripLeadingZeroes = stripLeadingZeroes !== false;
	    owner.prefix = (prefix || prefix === '') ? prefix : '';
	    owner.signBeforePrefix = !!signBeforePrefix;
	    owner.tailPrefix = !!tailPrefix;
	    owner.delimiter = (delimiter || delimiter === '') ? delimiter : ',';
	    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';
	};

	NumeralFormatter.groupStyle = {
	    thousand: 'thousand',
	    lakh:     'lakh',
	    wan:      'wan',
	    none:     'none'    
	};

	NumeralFormatter.prototype = {
	    getRawValue: function (value) {
	        return value.replace(this.delimiterRE, '').replace(this.numeralDecimalMark, '.');
	    },

	    format: function (value) {
	        var owner = this, parts, partSign, partSignAndPrefix, partInteger, partDecimal = '';

	        // strip alphabet letters
	        value = value.replace(/[A-Za-z]/g, '')
	            // replace the first decimal mark with reserved placeholder
	            .replace(owner.numeralDecimalMark, 'M')

	            // strip non numeric letters except minus and "M"
	            // this is to ensure prefix has been stripped
	            .replace(/[^\dM-]/g, '')

	            // replace the leading minus with reserved placeholder
	            .replace(/^\-/, 'N')

	            // strip the other minus sign (if present)
	            .replace(/\-/g, '')

	            // replace the minus sign (if present)
	            .replace('N', owner.numeralPositiveOnly ? '' : '-')

	            // replace decimal mark
	            .replace('M', owner.numeralDecimalMark);

	        // strip any leading zeros
	        if (owner.stripLeadingZeroes) {
	            value = value.replace(/^(-)?0+(?=\d)/, '$1');
	        }

	        partSign = value.slice(0, 1) === '-' ? '-' : '';
	        if (typeof owner.prefix != 'undefined') {
	            if (owner.signBeforePrefix) {
	                partSignAndPrefix = partSign + owner.prefix;
	            } else {
	                partSignAndPrefix = owner.prefix + partSign;
	            }
	        } else {
	            partSignAndPrefix = partSign;
	        }
	        
	        partInteger = value;

	        if (value.indexOf(owner.numeralDecimalMark) >= 0) {
	            parts = value.split(owner.numeralDecimalMark);
	            partInteger = parts[0];
	            partDecimal = owner.numeralDecimalMark + parts[1].slice(0, owner.numeralDecimalScale);
	        }

	        if(partSign === '-') {
	            partInteger = partInteger.slice(1);
	        }

	        if (owner.numeralIntegerScale > 0) {
	          partInteger = partInteger.slice(0, owner.numeralIntegerScale);
	        }

	        switch (owner.numeralThousandsGroupStyle) {
	        case NumeralFormatter.groupStyle.lakh:
	            partInteger = partInteger.replace(/(\d)(?=(\d\d)+\d$)/g, '$1' + owner.delimiter);

	            break;

	        case NumeralFormatter.groupStyle.wan:
	            partInteger = partInteger.replace(/(\d)(?=(\d{4})+$)/g, '$1' + owner.delimiter);

	            break;

	        case NumeralFormatter.groupStyle.thousand:
	            partInteger = partInteger.replace(/(\d)(?=(\d{3})+$)/g, '$1' + owner.delimiter);

	            break;
	        }

	        if (owner.tailPrefix) {
	            return partSign + partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : '') + owner.prefix;
	        }

	        return partSignAndPrefix + partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : '');
	    }
	};

	module.exports = NumeralFormatter;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var DateFormatter = function (datePattern, dateMin, dateMax) {
	    var owner = this;

	    owner.date = [];
	    owner.blocks = [];
	    owner.datePattern = datePattern;
	    owner.dateMin = dateMin
	      .split('-')
	      .reverse()
	      .map(function(x) {
	        return parseInt(x, 10);
	      });
	    if (owner.dateMin.length === 2) owner.dateMin.unshift(0);

	    owner.dateMax = dateMax
	      .split('-')
	      .reverse()
	      .map(function(x) {
	        return parseInt(x, 10);
	      });
	    if (owner.dateMax.length === 2) owner.dateMax.unshift(0);
	    
	    owner.initBlocks();
	};

	DateFormatter.prototype = {
	    initBlocks: function () {
	        var owner = this;
	        owner.datePattern.forEach(function (value) {
	            if (value === 'Y') {
	                owner.blocks.push(4);
	            } else {
	                owner.blocks.push(2);
	            }
	        });
	    },

	    getISOFormatDate: function () {
	        var owner = this,
	            date = owner.date;

	        return date[2] ? (
	            date[2] + '-' + owner.addLeadingZero(date[1]) + '-' + owner.addLeadingZero(date[0])
	        ) : '';
	    },

	    getBlocks: function () {
	        return this.blocks;
	    },

	    getValidatedDate: function (value) {
	        var owner = this, result = '';

	        value = value.replace(/[^\d]/g, '');

	        owner.blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    sub0 = sub.slice(0, 1),
	                    rest = value.slice(length);

	                switch (owner.datePattern[index]) {
	                case 'd':
	                    if (sub === '00') {
	                        sub = '01';
	                    } else if (parseInt(sub0, 10) > 3) {
	                        sub = '0' + sub0;
	                    } else if (parseInt(sub, 10) > 31) {
	                        sub = '31';
	                    }

	                    break;

	                case 'm':
	                    if (sub === '00') {
	                        sub = '01';
	                    } else if (parseInt(sub0, 10) > 1) {
	                        sub = '0' + sub0;
	                    } else if (parseInt(sub, 10) > 12) {
	                        sub = '12';
	                    }

	                    break;
	                }

	                result += sub;

	                // update remaining string
	                value = rest;
	            }
	        });

	        return this.getFixedDateString(result);
	    },

	    getFixedDateString: function (value) {
	        var owner = this, datePattern = owner.datePattern, date = [],
	            dayIndex = 0, monthIndex = 0, yearIndex = 0,
	            dayStartIndex = 0, monthStartIndex = 0, yearStartIndex = 0,
	            day, month, year, fullYearDone = false;

	        // mm-dd || dd-mm
	        if (value.length === 4 && datePattern[0].toLowerCase() !== 'y' && datePattern[1].toLowerCase() !== 'y') {
	            dayStartIndex = datePattern[0] === 'd' ? 0 : 2;
	            monthStartIndex = 2 - dayStartIndex;
	            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);

	            date = this.getFixedDate(day, month, 0);
	        }

	        // yyyy-mm-dd || yyyy-dd-mm || mm-dd-yyyy || dd-mm-yyyy || dd-yyyy-mm || mm-yyyy-dd
	        if (value.length === 8) {
	            datePattern.forEach(function (type, index) {
	                switch (type) {
	                case 'd':
	                    dayIndex = index;
	                    break;
	                case 'm':
	                    monthIndex = index;
	                    break;
	                default:
	                    yearIndex = index;
	                    break;
	                }
	            });

	            yearStartIndex = yearIndex * 2;
	            dayStartIndex = (dayIndex <= yearIndex) ? dayIndex * 2 : (dayIndex * 2 + 2);
	            monthStartIndex = (monthIndex <= yearIndex) ? monthIndex * 2 : (monthIndex * 2 + 2);

	            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
	            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);

	            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;

	            date = this.getFixedDate(day, month, year);
	        }

	        // mm-yy || yy-mm
	        if (value.length === 4 && (datePattern[0] === 'y' || datePattern[1] === 'y')) {
	            monthStartIndex = datePattern[0] === 'm' ? 0 : 2;
	            yearStartIndex = 2 - monthStartIndex;
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
	            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 2), 10);

	            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 2).length === 2;

	            date = [0, month, year];
	        }

	        // mm-yyyy || yyyy-mm
	        if (value.length === 6 && (datePattern[0] === 'Y' || datePattern[1] === 'Y')) {
	            monthStartIndex = datePattern[0] === 'm' ? 0 : 4;
	            yearStartIndex = 2 - 0.5 * monthStartIndex;
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
	            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);

	            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;

	            date = [0, month, year];
	        }

	        date = owner.getRangeFixedDate(date);
	        owner.date = date;

	        var result = date.length === 0 ? value : datePattern.reduce(function (previous, current) {
	            switch (current) {
	            case 'd':
	                return previous + (date[0] === 0 ? '' : owner.addLeadingZero(date[0]));
	            case 'm':
	                return previous + (date[1] === 0 ? '' : owner.addLeadingZero(date[1]));
	            case 'y':
	                return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], false) : '');
	            case 'Y':
	                return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], true) : '');
	            }
	        }, '');

	        return result;
	    },

	    getRangeFixedDate: function (date) {
	        var owner = this,
	            datePattern = owner.datePattern,
	            dateMin = owner.dateMin || [],
	            dateMax = owner.dateMax || [];

	        if (!date.length || (dateMin.length < 3 && dateMax.length < 3)) return date;

	        if (
	          datePattern.find(function(x) {
	            return x.toLowerCase() === 'y';
	          }) &&
	          date[2] === 0
	        ) return date;

	        if (dateMax.length && (dateMax[2] < date[2] || (
	          dateMax[2] === date[2] && (dateMax[1] < date[1] || (
	            dateMax[1] === date[1] && dateMax[0] < date[0]
	          ))
	        ))) return dateMax;

	        if (dateMin.length && (dateMin[2] > date[2] || (
	          dateMin[2] === date[2] && (dateMin[1] > date[1] || (
	            dateMin[1] === date[1] && dateMin[0] > date[0]
	          ))
	        ))) return dateMin;

	        return date;
	    },

	    getFixedDate: function (day, month, year) {
	        day = Math.min(day, 31);
	        month = Math.min(month, 12);
	        year = parseInt((year || 0), 10);

	        if ((month < 7 && month % 2 === 0) || (month > 8 && month % 2 === 1)) {
	            day = Math.min(day, month === 2 ? (this.isLeapYear(year) ? 29 : 28) : 30);
	        }

	        return [day, month, year];
	    },

	    isLeapYear: function (year) {
	        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
	    },

	    addLeadingZero: function (number) {
	        return (number < 10 ? '0' : '') + number;
	    },

	    addLeadingZeroForYear: function (number, fullYearMode) {
	        if (fullYearMode) {
	            return (number < 10 ? '000' : (number < 100 ? '00' : (number < 1000 ? '0' : ''))) + number;
	        }

	        return (number < 10 ? '0' : '') + number;
	    }
	};

	module.exports = DateFormatter;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	var TimeFormatter = function (timePattern, timeFormat) {
	    var owner = this;

	    owner.time = [];
	    owner.blocks = [];
	    owner.timePattern = timePattern;
	    owner.timeFormat = timeFormat;
	    owner.initBlocks();
	};

	TimeFormatter.prototype = {
	    initBlocks: function () {
	        var owner = this;
	        owner.timePattern.forEach(function () {
	            owner.blocks.push(2);
	        });
	    },

	    getISOFormatTime: function () {
	        var owner = this,
	            time = owner.time;

	        return time[2] ? (
	            owner.addLeadingZero(time[0]) + ':' + owner.addLeadingZero(time[1]) + ':' + owner.addLeadingZero(time[2])
	        ) : '';
	    },

	    getBlocks: function () {
	        return this.blocks;
	    },

	    getTimeFormatOptions: function () {
	        var owner = this;
	        if (String(owner.timeFormat) === '12') {
	            return {
	                maxHourFirstDigit: 1,
	                maxHours: 12,
	                maxMinutesFirstDigit: 5,
	                maxMinutes: 60
	            };
	        }

	        return {
	            maxHourFirstDigit: 2,
	            maxHours: 23,
	            maxMinutesFirstDigit: 5,
	            maxMinutes: 60
	        };
	    },

	    getValidatedTime: function (value) {
	        var owner = this, result = '';

	        value = value.replace(/[^\d]/g, '');

	        var timeFormatOptions = owner.getTimeFormatOptions();

	        owner.blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    sub0 = sub.slice(0, 1),
	                    rest = value.slice(length);

	                switch (owner.timePattern[index]) {

	                case 'h':
	                    if (parseInt(sub0, 10) > timeFormatOptions.maxHourFirstDigit) {
	                        sub = '0' + sub0;
	                    } else if (parseInt(sub, 10) > timeFormatOptions.maxHours) {
	                        sub = timeFormatOptions.maxHours + '';
	                    }

	                    break;

	                case 'm':
	                case 's':
	                    if (parseInt(sub0, 10) > timeFormatOptions.maxMinutesFirstDigit) {
	                        sub = '0' + sub0;
	                    } else if (parseInt(sub, 10) > timeFormatOptions.maxMinutes) {
	                        sub = timeFormatOptions.maxMinutes + '';
	                    }
	                    break;
	                }

	                result += sub;

	                // update remaining string
	                value = rest;
	            }
	        });

	        return this.getFixedTimeString(result);
	    },

	    getFixedTimeString: function (value) {
	        var owner = this, timePattern = owner.timePattern, time = [],
	            secondIndex = 0, minuteIndex = 0, hourIndex = 0,
	            secondStartIndex = 0, minuteStartIndex = 0, hourStartIndex = 0,
	            second, minute, hour;

	        if (value.length === 6) {
	            timePattern.forEach(function (type, index) {
	                switch (type) {
	                case 's':
	                    secondIndex = index * 2;
	                    break;
	                case 'm':
	                    minuteIndex = index * 2;
	                    break;
	                case 'h':
	                    hourIndex = index * 2;
	                    break;
	                }
	            });

	            hourStartIndex = hourIndex;
	            minuteStartIndex = minuteIndex;
	            secondStartIndex = secondIndex;

	            second = parseInt(value.slice(secondStartIndex, secondStartIndex + 2), 10);
	            minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
	            hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);

	            time = this.getFixedTime(hour, minute, second);
	        }

	        if (value.length === 4 && owner.timePattern.indexOf('s') < 0) {
	            timePattern.forEach(function (type, index) {
	                switch (type) {
	                case 'm':
	                    minuteIndex = index * 2;
	                    break;
	                case 'h':
	                    hourIndex = index * 2;
	                    break;
	                }
	            });

	            hourStartIndex = hourIndex;
	            minuteStartIndex = minuteIndex;

	            second = 0;
	            minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
	            hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);

	            time = this.getFixedTime(hour, minute, second);
	        }

	        owner.time = time;

	        return time.length === 0 ? value : timePattern.reduce(function (previous, current) {
	            switch (current) {
	            case 's':
	                return previous + owner.addLeadingZero(time[2]);
	            case 'm':
	                return previous + owner.addLeadingZero(time[1]);
	            case 'h':
	                return previous + owner.addLeadingZero(time[0]);
	            }
	        }, '');
	    },

	    getFixedTime: function (hour, minute, second) {
	        second = Math.min(parseInt(second || 0, 10), 60);
	        minute = Math.min(minute, 60);
	        hour = Math.min(hour, 60);

	        return [hour, minute, second];
	    },

	    addLeadingZero: function (number) {
	        return (number < 10 ? '0' : '') + number;
	    }
	};

	module.exports = TimeFormatter;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	var PhoneFormatter = function (formatter, delimiter) {
	    var owner = this;

	    owner.delimiter = (delimiter || delimiter === '') ? delimiter : ' ';
	    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';

	    owner.formatter = formatter;
	};

	PhoneFormatter.prototype = {
	    setFormatter: function (formatter) {
	        this.formatter = formatter;
	    },

	    format: function (phoneNumber) {
	        var owner = this;

	        owner.formatter.clear();

	        // only keep number and +
	        phoneNumber = phoneNumber.replace(/[^\d+]/g, '');

	        // strip non-leading +
	        phoneNumber = phoneNumber.replace(/^\+/, 'B').replace(/\+/g, '').replace('B', '+');

	        // strip delimiter
	        phoneNumber = phoneNumber.replace(owner.delimiterRE, '');

	        var result = '', current, validated = false;

	        for (var i = 0, iMax = phoneNumber.length; i < iMax; i++) {
	            current = owner.formatter.inputDigit(phoneNumber.charAt(i));

	            // has ()- or space inside
	            if (/[\s()-]/g.test(current)) {
	                result = current;

	                validated = true;
	            } else {
	                if (!validated) {
	                    result = current;
	                }
	                // else: over length input
	                // it turns to invalid number again
	            }
	        }

	        // strip ()
	        // e.g. US: 7161234567 returns (716) 123-4567
	        result = result.replace(/[()]/g, '');
	        // replace library delimiter with user customized delimiter
	        result = result.replace(/[\s-]/g, owner.delimiter);

	        return result;
	    }
	};

	module.exports = PhoneFormatter;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	var CreditCardDetector = {
	    blocks: {
	        uatp:          [4, 5, 6],
	        amex:          [4, 6, 5],
	        diners:        [4, 6, 4],
	        discover:      [4, 4, 4, 4],
	        mastercard:    [4, 4, 4, 4],
	        dankort:       [4, 4, 4, 4],
	        instapayment:  [4, 4, 4, 4],
	        jcb15:         [4, 6, 5],
	        jcb:           [4, 4, 4, 4],
	        maestro:       [4, 4, 4, 4],
	        visa:          [4, 4, 4, 4],
	        mir:           [4, 4, 4, 4],
	        unionPay:      [4, 4, 4, 4],
	        general:       [4, 4, 4, 4]
	    },

	    re: {
	        // starts with 1; 15 digits, not starts with 1800 (jcb card)
	        uatp: /^(?!1800)1\d{0,14}/,

	        // starts with 34/37; 15 digits
	        amex: /^3[47]\d{0,13}/,

	        // starts with 6011/65/644-649; 16 digits
	        discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,

	        // starts with 300-305/309 or 36/38/39; 14 digits
	        diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,

	        // starts with 51-55/2221–2720; 16 digits
	        mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,

	        // starts with 5019/4175/4571; 16 digits
	        dankort: /^(5019|4175|4571)\d{0,12}/,

	        // starts with 637-639; 16 digits
	        instapayment: /^63[7-9]\d{0,13}/,

	        // starts with 2131/1800; 15 digits
	        jcb15: /^(?:2131|1800)\d{0,11}/,

	        // starts with 2131/1800/35; 16 digits
	        jcb: /^(?:35\d{0,2})\d{0,12}/,

	        // starts with 50/56-58/6304/67; 16 digits
	        maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,

	        // starts with 22; 16 digits
	        mir: /^220[0-4]\d{0,12}/,

	        // starts with 4; 16 digits
	        visa: /^4\d{0,15}/,

	        // starts with 62/81; 16 digits
	        unionPay: /^(62|81)\d{0,14}/
	    },

	    getStrictBlocks: function (block) {
	      var total = block.reduce(function (prev, current) {
	        return prev + current;
	      }, 0);

	      return block.concat(19 - total);
	    },

	    getInfo: function (value, strictMode) {
	        var blocks = CreditCardDetector.blocks,
	            re = CreditCardDetector.re;

	        // Some credit card can have up to 19 digits number.
	        // Set strictMode to true will remove the 16 max-length restrain,
	        // however, I never found any website validate card number like
	        // this, hence probably you don't want to enable this option.
	        strictMode = !!strictMode;

	        for (var key in re) {
	            if (re[key].test(value)) {
	                var matchedBlocks = blocks[key];
	                return {
	                    type: key,
	                    blocks: strictMode ? this.getStrictBlocks(matchedBlocks) : matchedBlocks
	                };
	            }
	        }

	        return {
	            type: 'unknown',
	            blocks: strictMode ? this.getStrictBlocks(blocks.general) : blocks.general
	        };
	    }
	};

	module.exports = CreditCardDetector;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	var Util = {
	    noop: function () {
	    },

	    strip: function (value, re) {
	        return value.replace(re, '');
	    },

	    getPostDelimiter: function (value, delimiter, delimiters) {
	        // single delimiter
	        if (delimiters.length === 0) {
	            return value.slice(-delimiter.length) === delimiter ? delimiter : '';
	        }

	        // multiple delimiters
	        var matchedDelimiter = '';
	        delimiters.forEach(function (current) {
	            if (value.slice(-current.length) === current) {
	                matchedDelimiter = current;
	            }
	        });

	        return matchedDelimiter;
	    },

	    getDelimiterREByDelimiter: function (delimiter) {
	        return new RegExp(delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'g');
	    },

	    getNextCursorPosition: function (prevPos, oldValue, newValue, delimiter, delimiters) {
	      // If cursor was at the end of value, just place it back.
	      // Because new value could contain additional chars.
	      if (oldValue.length === prevPos) {
	          return newValue.length;
	      }

	      return prevPos + this.getPositionOffset(prevPos, oldValue, newValue, delimiter ,delimiters);
	    },

	    getPositionOffset: function (prevPos, oldValue, newValue, delimiter, delimiters) {
	        var oldRawValue, newRawValue, lengthOffset;

	        oldRawValue = this.stripDelimiters(oldValue.slice(0, prevPos), delimiter, delimiters);
	        newRawValue = this.stripDelimiters(newValue.slice(0, prevPos), delimiter, delimiters);
	        lengthOffset = oldRawValue.length - newRawValue.length;

	        return (lengthOffset !== 0) ? (lengthOffset / Math.abs(lengthOffset)) : 0;
	    },

	    stripDelimiters: function (value, delimiter, delimiters) {
	        var owner = this;

	        // single delimiter
	        if (delimiters.length === 0) {
	            var delimiterRE = delimiter ? owner.getDelimiterREByDelimiter(delimiter) : '';

	            return value.replace(delimiterRE, '');
	        }

	        // multiple delimiters
	        delimiters.forEach(function (current) {
	            current.split('').forEach(function (letter) {
	                value = value.replace(owner.getDelimiterREByDelimiter(letter), '');
	            });
	        });

	        return value;
	    },

	    headStr: function (str, length) {
	        return str.slice(0, length);
	    },

	    getMaxLength: function (blocks) {
	        return blocks.reduce(function (previous, current) {
	            return previous + current;
	        }, 0);
	    },

	    // strip prefix
	    // Before type  |   After type    |     Return value
	    // PEFIX-...    |   PEFIX-...     |     ''
	    // PREFIX-123   |   PEFIX-123     |     123
	    // PREFIX-123   |   PREFIX-23     |     23
	    // PREFIX-123   |   PREFIX-1234   |     1234
	    getPrefixStrippedValue: function (value, prefix, prefixLength, prevResult, delimiter, delimiters, noImmediatePrefix, tailPrefix, signBeforePrefix) {
	        // No prefix
	        if (prefixLength === 0) {
	          return value;
	        }

	        // Value is prefix
	        if (value === prefix && value !== '') {
	          return '';
	        }

	        if (signBeforePrefix && (value.slice(0, 1) == '-')) {
	            var prev = (prevResult.slice(0, 1) == '-') ? prevResult.slice(1) : prevResult;
	            return '-' + this.getPrefixStrippedValue(value.slice(1), prefix, prefixLength, prev, delimiter, delimiters, noImmediatePrefix, tailPrefix, signBeforePrefix);
	        }

	        // Pre result prefix string does not match pre-defined prefix
	        if (prevResult.slice(0, prefixLength) !== prefix && !tailPrefix) {
	            // Check if the first time user entered something
	            if (noImmediatePrefix && !prevResult && value) return value;
	            return '';
	        } else if (prevResult.slice(-prefixLength) !== prefix && tailPrefix) {
	            // Check if the first time user entered something
	            if (noImmediatePrefix && !prevResult && value) return value;
	            return '';
	        }

	        var prevValue = this.stripDelimiters(prevResult, delimiter, delimiters);

	        // New value has issue, someone typed in between prefix letters
	        // Revert to pre value
	        if (value.slice(0, prefixLength) !== prefix && !tailPrefix) {
	            return prevValue.slice(prefixLength);
	        } else if (value.slice(-prefixLength) !== prefix && tailPrefix) {
	            return prevValue.slice(0, -prefixLength - 1);
	        }

	        // No issue, strip prefix for new value
	        return tailPrefix ? value.slice(0, -prefixLength) : value.slice(prefixLength);
	    },

	    getFirstDiffIndex: function (prev, current) {
	        var index = 0;

	        while (prev.charAt(index) === current.charAt(index)) {
	            if (prev.charAt(index++) === '') {
	                return -1;
	            }
	        }

	        return index;
	    },

	    getFormattedValue: function (value, blocks, blocksLength, delimiter, delimiters, delimiterLazyShow) {
	        var result = '',
	            multipleDelimiters = delimiters.length > 0,
	            currentDelimiter = '';

	        // no options, normal input
	        if (blocksLength === 0) {
	            return value;
	        }

	        blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    rest = value.slice(length);

	                if (multipleDelimiters) {
	                    currentDelimiter = delimiters[delimiterLazyShow ? (index - 1) : index] || currentDelimiter;
	                } else {
	                    currentDelimiter = delimiter;
	                }

	                if (delimiterLazyShow) {
	                    if (index > 0) {
	                        result += currentDelimiter;
	                    }

	                    result += sub;
	                } else {
	                    result += sub;

	                    if (sub.length === length && index < blocksLength - 1) {
	                        result += currentDelimiter;
	                    }
	                }

	                // update remaining string
	                value = rest;
	            }
	        });

	        return result;
	    },

	    // move cursor to the end
	    // the first time user focuses on an input with prefix
	    fixPrefixCursor: function (el, prefix, delimiter, delimiters) {
	        if (!el) {
	            return;
	        }

	        var val = el.value,
	            appendix = delimiter || (delimiters[0] || ' ');

	        if (!el.setSelectionRange || !prefix || (prefix.length + appendix.length) <= val.length) {
	            return;
	        }

	        var len = val.length * 2;

	        // set timeout to avoid blink
	        setTimeout(function () {
	            el.setSelectionRange(len, len);
	        }, 1);
	    },

	    // Check if input field is fully selected
	    checkFullSelection: function(value) {
	      try {
	        var selection = window.getSelection() || document.getSelection() || {};
	        return selection.toString().length === value.length;
	      } catch (ex) {
	        // Ignore
	      }

	      return false;
	    },

	    setSelection: function (element, position, doc) {
	        if (element !== this.getActiveElement(doc)) {
	            return;
	        }

	        // cursor is already in the end
	        if (element && element.value.length <= position) {
	          return;
	        }

	        if (element.createTextRange) {
	            var range = element.createTextRange();

	            range.move('character', position);
	            range.select();
	        } else {
	            try {
	                element.setSelectionRange(position, position);
	            } catch (e) {
	                // eslint-disable-next-line
	                console.warn('The input element type does not support selection');
	            }
	        }
	    },

	    getActiveElement: function(parent) {
	        var activeElement = parent.activeElement;
	        if (activeElement && activeElement.shadowRoot) {
	            return this.getActiveElement(activeElement.shadowRoot);
	        }
	        return activeElement;
	    },

	    isAndroid: function () {
	        return navigator && /android/i.test(navigator.userAgent);
	    },

	    // On Android chrome, the keyup and keydown events
	    // always return key code 229 as a composition that
	    // buffers the user’s keystrokes
	    // see https://github.com/nosir/cleave.js/issues/147
	    isAndroidBackspaceKeydown: function (lastInputValue, currentInputValue) {
	        if (!this.isAndroid() || !lastInputValue || !currentInputValue) {
	            return false;
	        }

	        return currentInputValue === lastInputValue.slice(0, -1);
	    }
	};

	module.exports = Util;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/**
	 * Props Assignment
	 *
	 * Separate this, so react module can share the usage
	 */
	var DefaultProperties = {
	    // Maybe change to object-assign
	    // for now just keep it as simple
	    assign: function (target, opts) {
	        target = target || {};
	        opts = opts || {};

	        // credit card
	        target.creditCard = !!opts.creditCard;
	        target.creditCardStrictMode = !!opts.creditCardStrictMode;
	        target.creditCardType = '';
	        target.onCreditCardTypeChanged = opts.onCreditCardTypeChanged || (function () {});

	        // phone
	        target.phone = !!opts.phone;
	        target.phoneRegionCode = opts.phoneRegionCode || 'AU';
	        target.phoneFormatter = {};

	        // time
	        target.time = !!opts.time;
	        target.timePattern = opts.timePattern || ['h', 'm', 's'];
	        target.timeFormat = opts.timeFormat || '24';
	        target.timeFormatter = {};

	        // date
	        target.date = !!opts.date;
	        target.datePattern = opts.datePattern || ['d', 'm', 'Y'];
	        target.dateMin = opts.dateMin || '';
	        target.dateMax = opts.dateMax || '';
	        target.dateFormatter = {};

	        // numeral
	        target.numeral = !!opts.numeral;
	        target.numeralIntegerScale = opts.numeralIntegerScale > 0 ? opts.numeralIntegerScale : 0;
	        target.numeralDecimalScale = opts.numeralDecimalScale >= 0 ? opts.numeralDecimalScale : 2;
	        target.numeralDecimalMark = opts.numeralDecimalMark || '.';
	        target.numeralThousandsGroupStyle = opts.numeralThousandsGroupStyle || 'thousand';
	        target.numeralPositiveOnly = !!opts.numeralPositiveOnly;
	        target.stripLeadingZeroes = opts.stripLeadingZeroes !== false;
	        target.signBeforePrefix = !!opts.signBeforePrefix;
	        target.tailPrefix = !!opts.tailPrefix;

	        // others
	        target.swapHiddenInput = !!opts.swapHiddenInput;
	        
	        target.numericOnly = target.creditCard || target.date || !!opts.numericOnly;

	        target.uppercase = !!opts.uppercase;
	        target.lowercase = !!opts.lowercase;

	        target.prefix = (target.creditCard || target.date) ? '' : (opts.prefix || '');
	        target.noImmediatePrefix = !!opts.noImmediatePrefix;
	        target.prefixLength = target.prefix.length;
	        target.rawValueTrimPrefix = !!opts.rawValueTrimPrefix;
	        target.copyDelimiter = !!opts.copyDelimiter;

	        target.initValue = (opts.initValue !== undefined && opts.initValue !== null) ? opts.initValue.toString() : '';

	        target.delimiter =
	            (opts.delimiter || opts.delimiter === '') ? opts.delimiter :
	                (opts.date ? '/' :
	                    (opts.time ? ':' :
	                        (opts.numeral ? ',' :
	                            (opts.phone ? ' ' :
	                                ' '))));
	        target.delimiterLength = target.delimiter.length;
	        target.delimiterLazyShow = !!opts.delimiterLazyShow;
	        target.delimiters = opts.delimiters || [];

	        target.blocks = opts.blocks || [];
	        target.blocksLength = target.blocks.length;

	        target.root = (typeof global === 'object' && global) ? global : window;
	        target.document = opts.document || target.root.document;

	        target.maxLength = 0;

	        target.backspace = false;
	        target.result = '';

	        target.onValueChanged = opts.onValueChanged || (function () {});

	        return target;
	    }
	};

	module.exports = DefaultProperties;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ })
/******/ ])
});
;
},{}],"dropzone":[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
// The Emitter class provides the ability to call `.on()` on Dropzone to listen
// to events.
// It is strongly based on component's emitter class, and I removed the
// functionality because of the dependency hell with different frameworks.
var Emitter = /*#__PURE__*/function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
  }

  _createClass(Emitter, [{
    key: "on",
    // Add an event listener for given event
    value: function on(event, fn) {
      this._callbacks = this._callbacks || {}; // Create namespace for this event

      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }

      this._callbacks[event].push(fn);

      return this;
    }
  }, {
    key: "emit",
    value: function emit(event) {
      this._callbacks = this._callbacks || {};
      var callbacks = this._callbacks[event];

      if (callbacks) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var _iterator = _createForOfIteratorHelper(callbacks),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var callback = _step.value;
            callback.apply(this, args);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return this;
    } // Remove event listener for given event. If fn is not provided, all event
    // listeners for that event will be removed. If neither is provided, all
    // event listeners will be removed.

  }, {
    key: "off",
    value: function off(event, fn) {
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      } // specific event


      var callbacks = this._callbacks[event];

      if (!callbacks) {
        return this;
      } // remove all handlers


      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      } // remove specific handler


      for (var i = 0; i < callbacks.length; i++) {
        var callback = callbacks[i];

        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }

      return this;
    }
  }]);

  return Emitter;
}();

var Dropzone = /*#__PURE__*/function (_Emitter) {
  _inherits(Dropzone, _Emitter);

  var _super = _createSuper(Dropzone);

  _createClass(Dropzone, null, [{
    key: "initClass",
    value: function initClass() {
      // Exposing the emitter class, mainly for tests
      this.prototype.Emitter = Emitter;
      /*
       This is a list of all available events you can register on a dropzone object.
        You can register an event handler like this:
        dropzone.on("dragEnter", function() { });
        */

      this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];
      this.prototype.defaultOptions = {
        /**
         * Has to be specified on elements other than form (or when the form
         * doesn't have an `action` attribute). You can also
         * provide a function that will be called with `files` and
         * must return the url (since `v3.12.0`)
         */
        url: null,

        /**
         * Can be changed to `"put"` if necessary. You can also provide a function
         * that will be called with `files` and must return the method (since `v3.12.0`).
         */
        method: "post",

        /**
         * Will be set on the XHRequest.
         */
        withCredentials: false,

        /**
         * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
         */
        timeout: 30000,

        /**
         * How many file uploads to process in parallel (See the
         * Enqueuing file uploads documentation section for more info)
         */
        parallelUploads: 2,

        /**
         * Whether to send multiple files in one request. If
         * this it set to true, then the fallback file input element will
         * have the `multiple` attribute as well. This option will
         * also trigger additional events (like `processingmultiple`). See the events
         * documentation section for more information.
         */
        uploadMultiple: false,

        /**
         * Whether you want files to be uploaded in chunks to your server. This can't be
         * used in combination with `uploadMultiple`.
         *
         * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
         */
        chunking: false,

        /**
         * If `chunking` is enabled, this defines whether **every** file should be chunked,
         * even if the file size is below chunkSize. This means, that the additional chunk
         * form data will be submitted and the `chunksUploaded` callback will be invoked.
         */
        forceChunking: false,

        /**
         * If `chunking` is `true`, then this defines the chunk size in bytes.
         */
        chunkSize: 2000000,

        /**
         * If `true`, the individual chunks of a file are being uploaded simultaneously.
         */
        parallelChunkUploads: false,

        /**
         * Whether a chunk should be retried if it fails.
         */
        retryChunks: false,

        /**
         * If `retryChunks` is true, how many times should it be retried.
         */
        retryChunksLimit: 3,

        /**
         * If not `null` defines how many files this Dropzone handles. If it exceeds,
         * the event `maxfilesexceeded` will be called. The dropzone element gets the
         * class `dz-max-files-reached` accordingly so you can provide visual feedback.
         */
        maxFilesize: 256,

        /**
         * The name of the file param that gets transferred.
         * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
         * Dropzone will append `[]` to the name.
         */
        paramName: "file",

        /**
         * Whether thumbnails for images should be generated
         */
        createImageThumbnails: true,

        /**
         * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
         */
        maxThumbnailFilesize: 10,

        /**
         * If `null`, the ratio of the image will be used to calculate it.
         */
        thumbnailWidth: 120,

        /**
         * The same as `thumbnailWidth`. If both are null, images will not be resized.
         */
        thumbnailHeight: 120,

        /**
         * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        thumbnailMethod: 'crop',

        /**
         * If set, images will be resized to these dimensions before being **uploaded**.
         * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
         * ratio of the file will be preserved.
         *
         * The `options.transformFile` function uses these options, so if the `transformFile` function
         * is overridden, these options don't do anything.
         */
        resizeWidth: null,

        /**
         * See `resizeWidth`.
         */
        resizeHeight: null,

        /**
         * The mime type of the resized image (before it gets uploaded to the server).
         * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
         * See `resizeWidth` for more information.
         */
        resizeMimeType: null,

        /**
         * The quality of the resized images. See `resizeWidth`.
         */
        resizeQuality: 0.8,

        /**
         * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        resizeMethod: 'contain',

        /**
         * The base that is used to calculate the filesize. You can change this to
         * 1024 if you would rather display kibibytes, mebibytes, etc...
         * 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte` not `1 kilobyte`.
         * You can change this to `1024` if you don't care about validity.
         */
        filesizeBase: 1000,

        /**
         * Can be used to limit the maximum number of files that will be handled by this Dropzone
         */
        maxFiles: null,

        /**
         * An optional object to send additional headers to the server. Eg:
         * `{ "My-Awesome-Header": "header value" }`
         */
        headers: null,

        /**
         * If `true`, the dropzone element itself will be clickable, if `false`
         * nothing will be clickable.
         *
         * You can also pass an HTML element, a CSS selector (for multiple elements)
         * or an array of those. In that case, all of those elements will trigger an
         * upload when clicked.
         */
        clickable: true,

        /**
         * Whether hidden files in directories should be ignored.
         */
        ignoreHiddenFiles: true,

        /**
         * The default implementation of `accept` checks the file's mime type or
         * extension against this list. This is a comma separated list of mime
         * types or file extensions.
         *
         * Eg.: `image/*,application/pdf,.psd`
         *
         * If the Dropzone is `clickable` this option will also be used as
         * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
         * parameter on the hidden file input as well.
         */
        acceptedFiles: null,

        /**
         * **Deprecated!**
         * Use acceptedFiles instead.
         */
        acceptedMimeTypes: null,

        /**
         * If false, files will be added to the queue but the queue will not be
         * processed automatically.
         * This can be useful if you need some additional user input before sending
         * files (or if you want want all files sent at once).
         * If you're ready to send the file simply call `myDropzone.processQueue()`.
         *
         * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
         * section for more information.
         */
        autoProcessQueue: true,

        /**
         * If false, files added to the dropzone will not be queued by default.
         * You'll have to call `enqueueFile(file)` manually.
         */
        autoQueue: true,

        /**
         * If `true`, this will add a link to every file preview to remove or cancel (if
         * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
         * and `dictRemoveFile` options are used for the wording.
         */
        addRemoveLinks: false,

        /**
         * Defines where to display the file previews – if `null` the
         * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
         * selector. The element should have the `dropzone-previews` class so
         * the previews are displayed properly.
         */
        previewsContainer: null,

        /**
         * This is the element the hidden input field (which is used when clicking on the
         * dropzone to trigger file selection) will be appended to. This might
         * be important in case you use frameworks to switch the content of your page.
         *
         * Can be a selector string, or an element directly.
         */
        hiddenInputContainer: "body",

        /**
         * If null, no capture type will be specified
         * If camera, mobile devices will skip the file selection and choose camera
         * If microphone, mobile devices will skip the file selection and choose the microphone
         * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
         * On apple devices multiple must be set to false.  AcceptedFiles may need to
         * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
         */
        capture: null,

        /**
         * **Deprecated**. Use `renameFile` instead.
         */
        renameFilename: null,

        /**
         * A function that is invoked before the file is uploaded to the server and renames the file.
         * This function gets the `File` as argument and can use the `file.name`. The actual name of the
         * file that gets used during the upload can be accessed through `file.upload.filename`.
         */
        renameFile: null,

        /**
         * If `true` the fallback will be forced. This is very useful to test your server
         * implementations first and make sure that everything works as
         * expected without dropzone if you experience problems, and to test
         * how your fallbacks will look.
         */
        forceFallback: false,

        /**
         * The text used before any files are dropped.
         */
        dictDefaultMessage: "Drop files here to upload",

        /**
         * The text that replaces the default message text it the browser is not supported.
         */
        dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",

        /**
         * The text that will be added before the fallback form.
         * If you provide a  fallback element yourself, or if this option is `null` this will
         * be ignored.
         */
        dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",

        /**
         * If the filesize is too big.
         * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
         */
        dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",

        /**
         * If the file doesn't match the file type.
         */
        dictInvalidFileType: "You can't upload files of this type.",

        /**
         * If the server response was invalid.
         * `{{statusCode}}` will be replaced with the servers status code.
         */
        dictResponseError: "Server responded with {{statusCode}} code.",

        /**
         * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
         */
        dictCancelUpload: "Cancel upload",

        /**
         * The text that is displayed if an upload was manually canceled
         */
        dictUploadCanceled: "Upload canceled.",

        /**
         * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
         */
        dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",

        /**
         * If `addRemoveLinks` is true, the text to be used to remove a file.
         */
        dictRemoveFile: "Remove file",

        /**
         * If this is not null, then the user will be prompted before removing a file.
         */
        dictRemoveFileConfirmation: null,

        /**
         * Displayed if `maxFiles` is st and exceeded.
         * The string `{{maxFiles}}` will be replaced by the configuration value.
         */
        dictMaxFilesExceeded: "You can not upload any more files.",

        /**
         * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
         * `b` for bytes.
         */
        dictFileSizeUnits: {
          tb: "TB",
          gb: "GB",
          mb: "MB",
          kb: "KB",
          b: "b"
        },

        /**
         * Called when dropzone initialized
         * You can add event listeners here
         */
        init: function init() {},

        /**
         * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
         * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
         * of a function, this needs to return a map.
         *
         * The default implementation does nothing for normal uploads, but adds relevant information for
         * chunked uploads.
         *
         * This is the same as adding hidden input fields in the form element.
         */
        params: function params(files, xhr, chunk) {
          if (chunk) {
            return {
              dzuuid: chunk.file.upload.uuid,
              dzchunkindex: chunk.index,
              dztotalfilesize: chunk.file.size,
              dzchunksize: this.options.chunkSize,
              dztotalchunkcount: chunk.file.upload.totalChunkCount,
              dzchunkbyteoffset: chunk.index * this.options.chunkSize
            };
          }
        },

        /**
         * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
         * and a `done` function as parameters.
         *
         * If the done function is invoked without arguments, the file is "accepted" and will
         * be processed. If you pass an error message, the file is rejected, and the error
         * message will be displayed.
         * This function will not be called if the file is too big or doesn't match the mime types.
         */
        accept: function accept(file, done) {
          return done();
        },

        /**
         * The callback that will be invoked when all chunks have been uploaded for a file.
         * It gets the file for which the chunks have been uploaded as the first parameter,
         * and the `done` function as second. `done()` needs to be invoked when everything
         * needed to finish the upload process is done.
         */
        chunksUploaded: function chunksUploaded(file, done) {
          done();
        },

        /**
         * Gets called when the browser is not supported.
         * The default implementation shows the fallback input field and adds
         * a text.
         */
        fallback: function fallback() {
          // This code should pass in IE7... :(
          var messageElement;
          this.element.className = "".concat(this.element.className, " dz-browser-not-supported");

          var _iterator2 = _createForOfIteratorHelper(this.element.getElementsByTagName("div")),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var child = _step2.value;

              if (/(^| )dz-message($| )/.test(child.className)) {
                messageElement = child;
                child.className = "dz-message"; // Removes the 'dz-default' class

                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          if (!messageElement) {
            messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
            this.element.appendChild(messageElement);
          }

          var span = messageElement.getElementsByTagName("span")[0];

          if (span) {
            if (span.textContent != null) {
              span.textContent = this.options.dictFallbackMessage;
            } else if (span.innerText != null) {
              span.innerText = this.options.dictFallbackMessage;
            }
          }

          return this.element.appendChild(this.getFallbackForm());
        },

        /**
         * Gets called to calculate the thumbnail dimensions.
         *
         * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
         *
         *  - `srcWidth` & `srcHeight` (required)
         *  - `trgWidth` & `trgHeight` (required)
         *  - `srcX` & `srcY` (optional, default `0`)
         *  - `trgX` & `trgY` (optional, default `0`)
         *
         * Those values are going to be used by `ctx.drawImage()`.
         */
        resize: function resize(file, width, height, resizeMethod) {
          var info = {
            srcX: 0,
            srcY: 0,
            srcWidth: file.width,
            srcHeight: file.height
          };
          var srcRatio = file.width / file.height; // Automatically calculate dimensions if not specified

          if (width == null && height == null) {
            width = info.srcWidth;
            height = info.srcHeight;
          } else if (width == null) {
            width = height * srcRatio;
          } else if (height == null) {
            height = width / srcRatio;
          } // Make sure images aren't upscaled


          width = Math.min(width, info.srcWidth);
          height = Math.min(height, info.srcHeight);
          var trgRatio = width / height;

          if (info.srcWidth > width || info.srcHeight > height) {
            // Image is bigger and needs rescaling
            if (resizeMethod === 'crop') {
              if (srcRatio > trgRatio) {
                info.srcHeight = file.height;
                info.srcWidth = info.srcHeight * trgRatio;
              } else {
                info.srcWidth = file.width;
                info.srcHeight = info.srcWidth / trgRatio;
              }
            } else if (resizeMethod === 'contain') {
              // Method 'contain'
              if (srcRatio > trgRatio) {
                height = width / srcRatio;
              } else {
                width = height * srcRatio;
              }
            } else {
              throw new Error("Unknown resizeMethod '".concat(resizeMethod, "'"));
            }
          }

          info.srcX = (file.width - info.srcWidth) / 2;
          info.srcY = (file.height - info.srcHeight) / 2;
          info.trgWidth = width;
          info.trgHeight = height;
          return info;
        },

        /**
         * Can be used to transform the file (for example, resize an image if necessary).
         *
         * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
         * images according to those dimensions.
         *
         * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
         * to be invoked with the file when the transformation is done.
         */
        transformFile: function transformFile(file, done) {
          if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
            return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
          } else {
            return done(file);
          }
        },

        /**
         * A string that contains the template used for each dropped
         * file. Change it to fulfill your needs but make sure to properly
         * provide all elements.
         *
         * If you want to use an actual HTML element instead of providing a String
         * as a config option, you could create a div with the id `tpl`,
         * put the template inside it and provide the element like this:
         *
         *     document
         *       .querySelector('#tpl')
         *       .innerHTML
         *
         */
        previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>Check</title>\n      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>Error</title>\n      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",
        // END OPTIONS
        // (Required by the dropzone documentation parser)

        /*
         Those functions register themselves to the events on init and handle all
         the user interface specific stuff. Overwriting them won't break the upload
         but can break the way it's displayed.
         You can overwrite them if you don't like the default behavior. If you just
         want to add an additional event handler, register it on the dropzone object
         and don't overwrite those options.
         */
        // Those are self explanatory and simply concern the DragnDrop.
        drop: function drop(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragstart: function dragstart(e) {},
        dragend: function dragend(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragenter: function dragenter(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragover: function dragover(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragleave: function dragleave(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        paste: function paste(e) {},
        // Called whenever there are no files left in the dropzone anymore, and the
        // dropzone should be displayed as if in the initial state.
        reset: function reset() {
          return this.element.classList.remove("dz-started");
        },
        // Called when a file is added to the queue
        // Receives `file`
        addedfile: function addedfile(file) {
          var _this2 = this;

          if (this.element === this.previewsContainer) {
            this.element.classList.add("dz-started");
          }

          if (this.previewsContainer) {
            file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
            file.previewTemplate = file.previewElement; // Backwards compatibility

            this.previewsContainer.appendChild(file.previewElement);

            var _iterator3 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-name]")),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var node = _step3.value;
                node.textContent = file.name;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            var _iterator4 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-size]")),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                node = _step4.value;
                node.innerHTML = this.filesize(file.size);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            if (this.options.addRemoveLinks) {
              file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>".concat(this.options.dictRemoveFile, "</a>"));
              file.previewElement.appendChild(file._removeLink);
            }

            var removeFileEvent = function removeFileEvent(e) {
              e.preventDefault();
              e.stopPropagation();

              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this2.options.dictCancelUploadConfirmation, function () {
                  return _this2.removeFile(file);
                });
              } else {
                if (_this2.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this2.options.dictRemoveFileConfirmation, function () {
                    return _this2.removeFile(file);
                  });
                } else {
                  return _this2.removeFile(file);
                }
              }
            };

            var _iterator5 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-remove]")),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var removeLink = _step5.value;
                removeLink.addEventListener("click", removeFileEvent);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        },
        // Called whenever a file is removed.
        removedfile: function removedfile(file) {
          if (file.previewElement != null && file.previewElement.parentNode != null) {
            file.previewElement.parentNode.removeChild(file.previewElement);
          }

          return this._updateMaxFilesReachedClass();
        },
        // Called when a thumbnail has been generated
        // Receives `file` and `dataUrl`
        thumbnail: function thumbnail(file, dataUrl) {
          if (file.previewElement) {
            file.previewElement.classList.remove("dz-file-preview");

            var _iterator6 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-thumbnail]")),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var thumbnailElement = _step6.value;
                thumbnailElement.alt = file.name;
                thumbnailElement.src = dataUrl;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return setTimeout(function () {
              return file.previewElement.classList.add("dz-image-preview");
            }, 1);
          }
        },
        // Called whenever an error occurs
        // Receives `file` and `message`
        error: function error(file, message) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-error");

            if (typeof message !== "string" && message.error) {
              message = message.error;
            }

            var _iterator7 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-errormessage]")),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var node = _step7.value;
                node.textContent = message;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        },
        errormultiple: function errormultiple() {},
        // Called when a file gets processed. Since there is a cue, not all added
        // files are processed immediately.
        // Receives `file`
        processing: function processing(file) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-processing");

            if (file._removeLink) {
              return file._removeLink.innerHTML = this.options.dictCancelUpload;
            }
          }
        },
        processingmultiple: function processingmultiple() {},
        // Called whenever the upload progress gets updated.
        // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
        // To get the total number of bytes of the file, use `file.size`
        uploadprogress: function uploadprogress(file, progress, bytesSent) {
          if (file.previewElement) {
            var _iterator8 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-uploadprogress]")),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var node = _step8.value;
                node.nodeName === 'PROGRESS' ? node.value = progress : node.style.width = "".concat(progress, "%");
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        },
        // Called whenever the total upload progress gets updated.
        // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
        totaluploadprogress: function totaluploadprogress() {},
        // Called just before the file is sent. Gets the `xhr` object as second
        // parameter, so you can modify it (for example to add a CSRF token) and a
        // `formData` object to add additional information.
        sending: function sending() {},
        sendingmultiple: function sendingmultiple() {},
        // When the complete upload is finished and successful
        // Receives `file`
        success: function success(file) {
          if (file.previewElement) {
            return file.previewElement.classList.add("dz-success");
          }
        },
        successmultiple: function successmultiple() {},
        // When the upload is canceled.
        canceled: function canceled(file) {
          return this.emit("error", file, this.options.dictUploadCanceled);
        },
        canceledmultiple: function canceledmultiple() {},
        // When the upload is finished, either with success or an error.
        // Receives `file`
        complete: function complete(file) {
          if (file._removeLink) {
            file._removeLink.innerHTML = this.options.dictRemoveFile;
          }

          if (file.previewElement) {
            return file.previewElement.classList.add("dz-complete");
          }
        },
        completemultiple: function completemultiple() {},
        maxfilesexceeded: function maxfilesexceeded() {},
        maxfilesreached: function maxfilesreached() {},
        queuecomplete: function queuecomplete() {},
        addedfiles: function addedfiles() {}
      };
      this.prototype._thumbnailQueue = [];
      this.prototype._processingThumbnail = false;
    } // global utility

  }, {
    key: "extend",
    value: function extend(target) {
      for (var _len2 = arguments.length, objects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        objects[_key2 - 1] = arguments[_key2];
      }

      for (var _i = 0, _objects = objects; _i < _objects.length; _i++) {
        var object = _objects[_i];

        for (var key in object) {
          var val = object[key];
          target[key] = val;
        }
      }

      return target;
    }
  }]);

  function Dropzone(el, options) {
    var _this;

    _classCallCheck(this, Dropzone);

    _this = _super.call(this);
    var fallback, left;
    _this.element = el; // For backwards compatibility since the version was in the prototype previously

    _this.version = Dropzone.version;
    _this.defaultOptions.previewTemplate = _this.defaultOptions.previewTemplate.replace(/\n*/g, "");
    _this.clickableElements = [];
    _this.listeners = [];
    _this.files = []; // All files

    if (typeof _this.element === "string") {
      _this.element = document.querySelector(_this.element);
    } // Not checking if instance of HTMLElement or Element since IE9 is extremely weird.


    if (!_this.element || _this.element.nodeType == null) {
      throw new Error("Invalid dropzone element.");
    }

    if (_this.element.dropzone) {
      throw new Error("Dropzone already attached.");
    } // Now add this dropzone to the instances.


    Dropzone.instances.push(_assertThisInitialized(_this)); // Put the dropzone inside the element itself.

    _this.element.dropzone = _assertThisInitialized(_this);
    var elementOptions = (left = Dropzone.optionsForElement(_this.element)) != null ? left : {};
    _this.options = Dropzone.extend({}, _this.defaultOptions, elementOptions, options != null ? options : {}); // If the browser failed, just call the fallback and leave

    if (_this.options.forceFallback || !Dropzone.isBrowserSupported()) {
      return _possibleConstructorReturn(_this, _this.options.fallback.call(_assertThisInitialized(_this)));
    } // @options.url = @element.getAttribute "action" unless @options.url?


    if (_this.options.url == null) {
      _this.options.url = _this.element.getAttribute("action");
    }

    if (!_this.options.url) {
      throw new Error("No URL provided.");
    }

    if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) {
      throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
    }

    if (_this.options.uploadMultiple && _this.options.chunking) {
      throw new Error('You cannot set both: uploadMultiple and chunking.');
    } // Backwards compatibility


    if (_this.options.acceptedMimeTypes) {
      _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
      delete _this.options.acceptedMimeTypes;
    } // Backwards compatibility


    if (_this.options.renameFilename != null) {
      _this.options.renameFile = function (file) {
        return _this.options.renameFilename.call(_assertThisInitialized(_this), file.name, file);
      };
    }

    if (typeof _this.options.method === 'string') {
      _this.options.method = _this.options.method.toUpperCase();
    }

    if ((fallback = _this.getExistingFallback()) && fallback.parentNode) {
      // Remove the fallback
      fallback.parentNode.removeChild(fallback);
    } // Display previews in the previewsContainer element or the Dropzone element unless explicitly set to false


    if (_this.options.previewsContainer !== false) {
      if (_this.options.previewsContainer) {
        _this.previewsContainer = Dropzone.getElement(_this.options.previewsContainer, "previewsContainer");
      } else {
        _this.previewsContainer = _this.element;
      }
    }

    if (_this.options.clickable) {
      if (_this.options.clickable === true) {
        _this.clickableElements = [_this.element];
      } else {
        _this.clickableElements = Dropzone.getElements(_this.options.clickable, "clickable");
      }
    }

    _this.init();

    return _this;
  } // Returns all files that have been accepted


  _createClass(Dropzone, [{
    key: "getAcceptedFiles",
    value: function getAcceptedFiles() {
      return this.files.filter(function (file) {
        return file.accepted;
      }).map(function (file) {
        return file;
      });
    } // Returns all files that have been rejected
    // Not sure when that's going to be useful, but added for completeness.

  }, {
    key: "getRejectedFiles",
    value: function getRejectedFiles() {
      return this.files.filter(function (file) {
        return !file.accepted;
      }).map(function (file) {
        return file;
      });
    }
  }, {
    key: "getFilesWithStatus",
    value: function getFilesWithStatus(status) {
      return this.files.filter(function (file) {
        return file.status === status;
      }).map(function (file) {
        return file;
      });
    } // Returns all files that are in the queue

  }, {
    key: "getQueuedFiles",
    value: function getQueuedFiles() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    }
  }, {
    key: "getUploadingFiles",
    value: function getUploadingFiles() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    }
  }, {
    key: "getAddedFiles",
    value: function getAddedFiles() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    } // Files that are either queued or uploading

  }, {
    key: "getActiveFiles",
    value: function getActiveFiles() {
      return this.files.filter(function (file) {
        return file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED;
      }).map(function (file) {
        return file;
      });
    } // The function that gets called when Dropzone is initialized. You
    // can (and should) setup event listeners inside this function.

  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      // In case it isn't set already
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }

      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><button class=\"dz-button\" type=\"button\">".concat(this.options.dictDefaultMessage, "</button></div>")));
      }

      if (this.clickableElements.length) {
        var setupHiddenFileInput = function setupHiddenFileInput() {
          if (_this3.hiddenFileInput) {
            _this3.hiddenFileInput.parentNode.removeChild(_this3.hiddenFileInput);
          }

          _this3.hiddenFileInput = document.createElement("input");

          _this3.hiddenFileInput.setAttribute("type", "file");

          if (_this3.options.maxFiles === null || _this3.options.maxFiles > 1) {
            _this3.hiddenFileInput.setAttribute("multiple", "multiple");
          }

          _this3.hiddenFileInput.className = "dz-hidden-input";

          if (_this3.options.acceptedFiles !== null) {
            _this3.hiddenFileInput.setAttribute("accept", _this3.options.acceptedFiles);
          }

          if (_this3.options.capture !== null) {
            _this3.hiddenFileInput.setAttribute("capture", _this3.options.capture);
          } // Not setting `display="none"` because some browsers don't accept clicks
          // on elements that aren't displayed.


          _this3.hiddenFileInput.style.visibility = "hidden";
          _this3.hiddenFileInput.style.position = "absolute";
          _this3.hiddenFileInput.style.top = "0";
          _this3.hiddenFileInput.style.left = "0";
          _this3.hiddenFileInput.style.height = "0";
          _this3.hiddenFileInput.style.width = "0";
          Dropzone.getElement(_this3.options.hiddenInputContainer, 'hiddenInputContainer').appendChild(_this3.hiddenFileInput);
          return _this3.hiddenFileInput.addEventListener("change", function () {
            var files = _this3.hiddenFileInput.files;

            if (files.length) {
              var _iterator9 = _createForOfIteratorHelper(files),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var file = _step9.value;

                  _this3.addFile(file);
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }

            _this3.emit("addedfiles", files);

            return setupHiddenFileInput();
          });
        };

        setupHiddenFileInput();
      }

      this.URL = window.URL !== null ? window.URL : window.webkitURL; // Setup all event listeners on the Dropzone object itself.
      // They're not in @setupEventListeners() because they shouldn't be removed
      // again when the dropzone gets disabled.

      var _iterator10 = _createForOfIteratorHelper(this.events),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var eventName = _step10.value;
          this.on(eventName, this.options[eventName]);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      this.on("uploadprogress", function () {
        return _this3.updateTotalUploadProgress();
      });
      this.on("removedfile", function () {
        return _this3.updateTotalUploadProgress();
      });
      this.on("canceled", function (file) {
        return _this3.emit("complete", file);
      }); // Emit a `queuecomplete` event if all files finished uploading.

      this.on("complete", function (file) {
        if (_this3.getAddedFiles().length === 0 && _this3.getUploadingFiles().length === 0 && _this3.getQueuedFiles().length === 0) {
          // This needs to be deferred so that `queuecomplete` really triggers after `complete`
          return setTimeout(function () {
            return _this3.emit("queuecomplete");
          }, 0);
        }
      });

      var containsFiles = function containsFiles(e) {
        if (e.dataTransfer.types) {
          // Because e.dataTransfer.types is an Object in
          // IE, we need to iterate like this instead of
          // using e.dataTransfer.types.some()
          for (var i = 0; i < e.dataTransfer.types.length; i++) {
            if (e.dataTransfer.types[i] === "Files") return true;
          }
        }

        return false;
      };

      var noPropagation = function noPropagation(e) {
        // If there are no files, we don't want to stop
        // propagation so we don't interfere with other
        // drag and drop behaviour.
        if (!containsFiles(e)) return;
        e.stopPropagation();

        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      }; // Create the listeners


      this.listeners = [{
        element: this.element,
        events: {
          "dragstart": function dragstart(e) {
            return _this3.emit("dragstart", e);
          },
          "dragenter": function dragenter(e) {
            noPropagation(e);
            return _this3.emit("dragenter", e);
          },
          "dragover": function dragover(e) {
            // Makes it possible to drag files from chrome's download bar
            // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
            // Try is required to prevent bug in Internet Explorer 11 (SCRIPT65535 exception)
            var efct;

            try {
              efct = e.dataTransfer.effectAllowed;
            } catch (error) {}

            e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
            noPropagation(e);
            return _this3.emit("dragover", e);
          },
          "dragleave": function dragleave(e) {
            return _this3.emit("dragleave", e);
          },
          "drop": function drop(e) {
            noPropagation(e);
            return _this3.drop(e);
          },
          "dragend": function dragend(e) {
            return _this3.emit("dragend", e);
          }
        } // This is disabled right now, because the browsers don't implement it properly.
        // "paste": (e) =>
        //   noPropagation e
        //   @paste e

      }];
      this.clickableElements.forEach(function (clickableElement) {
        return _this3.listeners.push({
          element: clickableElement,
          events: {
            "click": function click(evt) {
              // Only the actual dropzone or the message element should trigger file selection
              if (clickableElement !== _this3.element || evt.target === _this3.element || Dropzone.elementInside(evt.target, _this3.element.querySelector(".dz-message"))) {
                _this3.hiddenFileInput.click(); // Forward the click

              }

              return true;
            }
          }
        });
      });
      this.enable();
      return this.options.init.call(this);
    } // Not fully tested yet

  }, {
    key: "destroy",
    value: function destroy() {
      this.disable();
      this.removeAllFiles(true);

      if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }

      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    }
  }, {
    key: "updateTotalUploadProgress",
    value: function updateTotalUploadProgress() {
      var totalUploadProgress;
      var totalBytesSent = 0;
      var totalBytes = 0;
      var activeFiles = this.getActiveFiles();

      if (activeFiles.length) {
        var _iterator11 = _createForOfIteratorHelper(this.getActiveFiles()),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var file = _step11.value;
            totalBytesSent += file.upload.bytesSent;
            totalBytes += file.upload.total;
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }

      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    } // @options.paramName can be a function taking one parameter rather than a string.
    // A parameter name for a file is obtained simply by calling this with an index number.

  }, {
    key: "_getParamName",
    value: function _getParamName(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "".concat(this.options.paramName).concat(this.options.uploadMultiple ? "[".concat(n, "]") : "");
      }
    } // If @options.renameFile is a function,
    // the function will be used to rename the file.name before appending it to the formData

  }, {
    key: "_renameFile",
    value: function _renameFile(file) {
      if (typeof this.options.renameFile !== "function") {
        return file.name;
      }

      return this.options.renameFile(file);
    } // Returns a form that can be used as fallback if the browser does not support DragnDrop
    //
    // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
    // This code has to pass in IE7 :(

  }, {
    key: "getFallbackForm",
    value: function getFallbackForm() {
      var existingFallback, form;

      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }

      var fieldsString = "<div class=\"dz-fallback\">";

      if (this.options.dictFallbackText) {
        fieldsString += "<p>".concat(this.options.dictFallbackText, "</p>");
      }

      fieldsString += "<input type=\"file\" name=\"".concat(this._getParamName(0), "\" ").concat(this.options.uploadMultiple ? 'multiple="multiple"' : undefined, " /><input type=\"submit\" value=\"Upload!\"></div>");
      var fields = Dropzone.createElement(fieldsString);

      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"".concat(this.options.url, "\" enctype=\"multipart/form-data\" method=\"").concat(this.options.method, "\"></form>"));
        form.appendChild(fields);
      } else {
        // Make sure that the enctype and method attributes are set properly
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }

      return form != null ? form : fields;
    } // Returns the fallback elements if they exist already
    //
    // This code has to pass in IE7 :(

  }, {
    key: "getExistingFallback",
    value: function getExistingFallback() {
      var getFallback = function getFallback(elements) {
        var _iterator12 = _createForOfIteratorHelper(elements),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var el = _step12.value;

            if (/(^| )fallback($| )/.test(el.className)) {
              return el;
            }
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      };

      for (var _i2 = 0, _arr = ["div", "form"]; _i2 < _arr.length; _i2++) {
        var tagName = _arr[_i2];
        var fallback;

        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    } // Activates all listeners stored in @listeners

  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];

          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.addEventListener(event, listener, false));
          }

          return result;
        }();
      });
    } // Deactivates all listeners stored in @listeners

  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];

          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.removeEventListener(event, listener, false));
          }

          return result;
        }();
      });
    } // Removes all event listeners and cancels all files in the queue or being processed.

  }, {
    key: "disable",
    value: function disable() {
      var _this4 = this;

      this.clickableElements.forEach(function (element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      this.disabled = true;
      return this.files.map(function (file) {
        return _this4.cancelUpload(file);
      });
    }
  }, {
    key: "enable",
    value: function enable() {
      delete this.disabled;
      this.clickableElements.forEach(function (element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    } // Returns a nicely formatted filesize

  }, {
    key: "filesize",
    value: function filesize(size) {
      var selectedSize = 0;
      var selectedUnit = "b";

      if (size > 0) {
        var units = ['tb', 'gb', 'mb', 'kb', 'b'];

        for (var i = 0; i < units.length; i++) {
          var unit = units[i];
          var cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;

          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }

        selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
      }

      return "<strong>".concat(selectedSize, "</strong> ").concat(this.options.dictFileSizeUnits[selectedUnit]);
    } // Adds or removes the `dz-max-files-reached` class from the form.

  }, {
    key: "_updateMaxFilesReachedClass",
    value: function _updateMaxFilesReachedClass() {
      if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }

        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    }
  }, {
    key: "drop",
    value: function drop(e) {
      if (!e.dataTransfer) {
        return;
      }

      this.emit("drop", e); // Convert the FileList to an Array
      // This is necessary for IE11

      var files = [];

      for (var i = 0; i < e.dataTransfer.files.length; i++) {
        files[i] = e.dataTransfer.files[i];
      } // Even if it's a folder, files.length will contain the folders.


      if (files.length) {
        var items = e.dataTransfer.items;

        if (items && items.length && items[0].webkitGetAsEntry != null) {
          // The browser supports dropping of folders, so handle items instead of files
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }

      this.emit("addedfiles", files);
    }
  }, {
    key: "paste",
    value: function paste(e) {
      if (__guard__(e != null ? e.clipboardData : undefined, function (x) {
        return x.items;
      }) == null) {
        return;
      }

      this.emit("paste", e);
      var items = e.clipboardData.items;

      if (items.length) {
        return this._addFilesFromItems(items);
      }
    }
  }, {
    key: "handleFiles",
    value: function handleFiles(files) {
      var _iterator13 = _createForOfIteratorHelper(files),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var file = _step13.value;
          this.addFile(file);
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    } // When a folder is dropped (or files are pasted), items must be handled
    // instead of files.

  }, {
    key: "_addFilesFromItems",
    value: function _addFilesFromItems(items) {
      var _this5 = this;

      return function () {
        var result = [];

        var _iterator14 = _createForOfIteratorHelper(items),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var item = _step14.value;
            var entry;

            if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
              if (entry.isFile) {
                result.push(_this5.addFile(item.getAsFile()));
              } else if (entry.isDirectory) {
                // Append all files from that directory to files
                result.push(_this5._addFilesFromDirectory(entry, entry.name));
              } else {
                result.push(undefined);
              }
            } else if (item.getAsFile != null) {
              if (item.kind == null || item.kind === "file") {
                result.push(_this5.addFile(item.getAsFile()));
              } else {
                result.push(undefined);
              }
            } else {
              result.push(undefined);
            }
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }

        return result;
      }();
    } // Goes through the directory, and adds each file it finds recursively

  }, {
    key: "_addFilesFromDirectory",
    value: function _addFilesFromDirectory(directory, path) {
      var _this6 = this;

      var dirReader = directory.createReader();

      var errorHandler = function errorHandler(error) {
        return __guardMethod__(console, 'log', function (o) {
          return o.log(error);
        });
      };

      var readEntries = function readEntries() {
        return dirReader.readEntries(function (entries) {
          if (entries.length > 0) {
            var _iterator15 = _createForOfIteratorHelper(entries),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var entry = _step15.value;

                if (entry.isFile) {
                  entry.file(function (file) {
                    if (_this6.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                      return;
                    }

                    file.fullPath = "".concat(path, "/").concat(file.name);
                    return _this6.addFile(file);
                  });
                } else if (entry.isDirectory) {
                  _this6._addFilesFromDirectory(entry, "".concat(path, "/").concat(entry.name));
                }
              } // Recursively call readEntries() again, since browser only handle
              // the first 100 entries.
              // See: https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReader#readEntries

            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }

            readEntries();
          }

          return null;
        }, errorHandler);
      };

      return readEntries();
    } // If `done()` is called without argument the file is accepted
    // If you call it with an error message, the file is rejected
    // (This allows for asynchronous validation)
    //
    // This function checks the filesize, and if the file.type passes the
    // `acceptedFiles` check.

  }, {
    key: "accept",
    value: function accept(file, done) {
      if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1024 * 1024) {
        done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        done(this.options.dictInvalidFileType);
      } else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        this.emit("maxfilesexceeded", file);
      } else {
        this.options.accept.call(this, file, done);
      }
    }
  }, {
    key: "addFile",
    value: function addFile(file) {
      var _this7 = this;

      file.upload = {
        uuid: Dropzone.uuidv4(),
        progress: 0,
        // Setting the total upload size to file.size for the beginning
        // It's actual different than the size to be transmitted.
        total: file.size,
        bytesSent: 0,
        filename: this._renameFile(file) // Not setting chunking information here, because the acutal data — and
        // thus the chunks — might change if `options.transformFile` is set
        // and does something to the data.

      };
      this.files.push(file);
      file.status = Dropzone.ADDED;
      this.emit("addedfile", file);

      this._enqueueThumbnail(file);

      this.accept(file, function (error) {
        if (error) {
          file.accepted = false;

          _this7._errorProcessing([file], error); // Will set the file.status

        } else {
          file.accepted = true;

          if (_this7.options.autoQueue) {
            _this7.enqueueFile(file);
          } // Will set .accepted = true

        }

        _this7._updateMaxFilesReachedClass();
      });
    } // Wrapper for enqueueFile

  }, {
    key: "enqueueFiles",
    value: function enqueueFiles(files) {
      var _iterator16 = _createForOfIteratorHelper(files),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var file = _step16.value;
          this.enqueueFile(file);
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      return null;
    }
  }, {
    key: "enqueueFile",
    value: function enqueueFile(file) {
      var _this8 = this;

      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;

        if (this.options.autoProcessQueue) {
          return setTimeout(function () {
            return _this8.processQueue();
          }, 0); // Deferring the call
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    }
  }, {
    key: "_enqueueThumbnail",
    value: function _enqueueThumbnail(file) {
      var _this9 = this;

      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);

        return setTimeout(function () {
          return _this9._processThumbnailQueue();
        }, 0); // Deferring the call
      }
    }
  }, {
    key: "_processThumbnailQueue",
    value: function _processThumbnailQueue() {
      var _this10 = this;

      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }

      this._processingThumbnail = true;

      var file = this._thumbnailQueue.shift();

      return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, function (dataUrl) {
        _this10.emit("thumbnail", file, dataUrl);

        _this10._processingThumbnail = false;
        return _this10._processThumbnailQueue();
      });
    } // Can be called by the user to remove a file

  }, {
    key: "removeFile",
    value: function removeFile(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }

      this.files = without(this.files, file);
      this.emit("removedfile", file);

      if (this.files.length === 0) {
        return this.emit("reset");
      }
    } // Removes all files that aren't currently processed from the list

  }, {
    key: "removeAllFiles",
    value: function removeAllFiles(cancelIfNecessary) {
      // Create a copy of files since removeFile() changes the @files array.
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }

      var _iterator17 = _createForOfIteratorHelper(this.files.slice()),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var file = _step17.value;

          if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
            this.removeFile(file);
          }
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }

      return null;
    } // Resizes an image before it gets sent to the server. This function is the default behavior of
    // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
    // the resized blob.

  }, {
    key: "resizeImage",
    value: function resizeImage(file, width, height, resizeMethod, callback) {
      var _this11 = this;

      return this.createThumbnail(file, width, height, resizeMethod, true, function (dataUrl, canvas) {
        if (canvas == null) {
          // The image has not been resized
          return callback(file);
        } else {
          var resizeMimeType = _this11.options.resizeMimeType;

          if (resizeMimeType == null) {
            resizeMimeType = file.type;
          }

          var resizedDataURL = canvas.toDataURL(resizeMimeType, _this11.options.resizeQuality);

          if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') {
            // Now add the original EXIF information
            resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
          }

          return callback(Dropzone.dataURItoBlob(resizedDataURL));
        }
      });
    }
  }, {
    key: "createThumbnail",
    value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
      var _this12 = this;

      var fileReader = new FileReader();

      fileReader.onload = function () {
        file.dataURL = fileReader.result; // Don't bother creating a thumbnail for SVG images since they're vector

        if (file.type === "image/svg+xml") {
          if (callback != null) {
            callback(fileReader.result);
          }

          return;
        }

        _this12.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
      };

      fileReader.readAsDataURL(file);
    } // `mockFile` needs to have these attributes:
    // 
    //     { name: 'name', size: 12345, imageUrl: '' }
    //
    // `callback` will be invoked when the image has been downloaded and displayed.
    // `crossOrigin` will be added to the `img` tag when accessing the file.

  }, {
    key: "displayExistingFile",
    value: function displayExistingFile(mockFile, imageUrl, callback, crossOrigin) {
      var _this13 = this;

      var resizeThumbnail = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      this.emit("addedfile", mockFile);
      this.emit("complete", mockFile);

      if (!resizeThumbnail) {
        this.emit("thumbnail", mockFile, imageUrl);
        if (callback) callback();
      } else {
        var onDone = function onDone(thumbnail) {
          _this13.emit('thumbnail', mockFile, thumbnail);

          if (callback) callback();
        };

        mockFile.dataURL = imageUrl;
        this.createThumbnailFromUrl(mockFile, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.resizeMethod, this.options.fixOrientation, onDone, crossOrigin);
      }
    }
  }, {
    key: "createThumbnailFromUrl",
    value: function createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
      var _this14 = this;

      // Not using `new Image` here because of a bug in latest Chrome versions.
      // See https://github.com/enyo/dropzone/pull/226
      var img = document.createElement("img");

      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      } // fixOrientation is not needed anymore with browsers handling imageOrientation


      fixOrientation = getComputedStyle(document.body)['imageOrientation'] == 'from-image' ? false : fixOrientation;

      img.onload = function () {
        var loadExif = function loadExif(callback) {
          return callback(1);
        };

        if (typeof EXIF !== 'undefined' && EXIF !== null && fixOrientation) {
          loadExif = function loadExif(callback) {
            return EXIF.getData(img, function () {
              return callback(EXIF.getTag(this, 'Orientation'));
            });
          };
        }

        return loadExif(function (orientation) {
          file.width = img.width;
          file.height = img.height;

          var resizeInfo = _this14.options.resize.call(_this14, file, width, height, resizeMethod);

          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          canvas.width = resizeInfo.trgWidth;
          canvas.height = resizeInfo.trgHeight;

          if (orientation > 4) {
            canvas.width = resizeInfo.trgHeight;
            canvas.height = resizeInfo.trgWidth;
          }

          switch (orientation) {
            case 2:
              // horizontal flip
              ctx.translate(canvas.width, 0);
              ctx.scale(-1, 1);
              break;

            case 3:
              // 180° rotate left
              ctx.translate(canvas.width, canvas.height);
              ctx.rotate(Math.PI);
              break;

            case 4:
              // vertical flip
              ctx.translate(0, canvas.height);
              ctx.scale(1, -1);
              break;

            case 5:
              // vertical flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.scale(1, -1);
              break;

            case 6:
              // 90° rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(0, -canvas.width);
              break;

            case 7:
              // horizontal flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(canvas.height, -canvas.width);
              ctx.scale(-1, 1);
              break;

            case 8:
              // 90° rotate left
              ctx.rotate(-0.5 * Math.PI);
              ctx.translate(-canvas.height, 0);
              break;
          } // This is a bugfix for iOS' scaling bug.


          drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
          var thumbnail = canvas.toDataURL("image/png");

          if (callback != null) {
            return callback(thumbnail, canvas);
          }
        });
      };

      if (callback != null) {
        img.onerror = callback;
      }

      return img.src = file.dataURL;
    } // Goes through the queue and processes files if there aren't too many already.

  }, {
    key: "processQueue",
    value: function processQueue() {
      var parallelUploads = this.options.parallelUploads;
      var processingLength = this.getUploadingFiles().length;
      var i = processingLength; // There are already at least as many files uploading than should be

      if (processingLength >= parallelUploads) {
        return;
      }

      var queuedFiles = this.getQueuedFiles();

      if (!(queuedFiles.length > 0)) {
        return;
      }

      if (this.options.uploadMultiple) {
        // The files should be uploaded in one request
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          } // Nothing left to process


          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    } // Wrapper for `processFiles`

  }, {
    key: "processFile",
    value: function processFile(file) {
      return this.processFiles([file]);
    } // Loads the file, then calls finishedLoading()

  }, {
    key: "processFiles",
    value: function processFiles(files) {
      var _iterator18 = _createForOfIteratorHelper(files),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var file = _step18.value;
          file.processing = true; // Backwards compatibility

          file.status = Dropzone.UPLOADING;
          this.emit("processing", file);
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }

      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }

      return this.uploadFiles(files);
    }
  }, {
    key: "_getFilesWithXhr",
    value: function _getFilesWithXhr(xhr) {
      var files;
      return files = this.files.filter(function (file) {
        return file.xhr === xhr;
      }).map(function (file) {
        return file;
      });
    } // Cancels the file upload and sets the status to CANCELED
    // **if** the file is actually being uploaded.
    // If it's still in the queue, the file is being removed from it and the status
    // set to CANCELED.

  }, {
    key: "cancelUpload",
    value: function cancelUpload(file) {
      if (file.status === Dropzone.UPLOADING) {
        var groupedFiles = this._getFilesWithXhr(file.xhr);

        var _iterator19 = _createForOfIteratorHelper(groupedFiles),
            _step19;

        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var groupedFile = _step19.value;
            groupedFile.status = Dropzone.CANCELED;
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }

        if (typeof file.xhr !== 'undefined') {
          file.xhr.abort();
        }

        var _iterator20 = _createForOfIteratorHelper(groupedFiles),
            _step20;

        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var _groupedFile = _step20.value;
            this.emit("canceled", _groupedFile);
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }

        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if (file.status === Dropzone.ADDED || file.status === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);

        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }, {
    key: "resolveOption",
    value: function resolveOption(option) {
      if (typeof option === 'function') {
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        return option.apply(this, args);
      }

      return option;
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(file) {
      return this.uploadFiles([file]);
    }
  }, {
    key: "uploadFiles",
    value: function uploadFiles(files) {
      var _this15 = this;

      this._transformFiles(files, function (transformedFiles) {
        if (_this15.options.chunking) {
          // Chunking is not allowed to be used with `uploadMultiple` so we know
          // that there is only __one__file.
          var transformedFile = transformedFiles[0];
          files[0].upload.chunked = _this15.options.chunking && (_this15.options.forceChunking || transformedFile.size > _this15.options.chunkSize);
          files[0].upload.totalChunkCount = Math.ceil(transformedFile.size / _this15.options.chunkSize);
        }

        if (files[0].upload.chunked) {
          // This file should be sent in chunks!
          // If the chunking option is set, we **know** that there can only be **one** file, since
          // uploadMultiple is not allowed with this option.
          var file = files[0];
          var _transformedFile = transformedFiles[0];
          var startedChunkCount = 0;
          file.upload.chunks = [];

          var handleNextChunk = function handleNextChunk() {
            var chunkIndex = 0; // Find the next item in file.upload.chunks that is not defined yet.

            while (file.upload.chunks[chunkIndex] !== undefined) {
              chunkIndex++;
            } // This means, that all chunks have already been started.


            if (chunkIndex >= file.upload.totalChunkCount) return;
            startedChunkCount++;
            var start = chunkIndex * _this15.options.chunkSize;
            var end = Math.min(start + _this15.options.chunkSize, _transformedFile.size);
            var dataBlock = {
              name: _this15._getParamName(0),
              data: _transformedFile.webkitSlice ? _transformedFile.webkitSlice(start, end) : _transformedFile.slice(start, end),
              filename: file.upload.filename,
              chunkIndex: chunkIndex
            };
            file.upload.chunks[chunkIndex] = {
              file: file,
              index: chunkIndex,
              dataBlock: dataBlock,
              // In case we want to retry.
              status: Dropzone.UPLOADING,
              progress: 0,
              retries: 0 // The number of times this block has been retried.

            };

            _this15._uploadData(files, [dataBlock]);
          };

          file.upload.finishedChunkUpload = function (chunk) {
            var allFinished = true;
            chunk.status = Dropzone.SUCCESS; // Clear the data from the chunk

            chunk.dataBlock = null; // Leaving this reference to xhr intact here will cause memory leaks in some browsers

            chunk.xhr = null;

            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              if (file.upload.chunks[i] === undefined) {
                return handleNextChunk();
              }

              if (file.upload.chunks[i].status !== Dropzone.SUCCESS) {
                allFinished = false;
              }
            }

            if (allFinished) {
              _this15.options.chunksUploaded(file, function () {
                _this15._finished(files, '', null);
              });
            }
          };

          if (_this15.options.parallelChunkUploads) {
            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              handleNextChunk();
            }
          } else {
            handleNextChunk();
          }
        } else {
          var dataBlocks = [];

          for (var _i3 = 0; _i3 < files.length; _i3++) {
            dataBlocks[_i3] = {
              name: _this15._getParamName(_i3),
              data: transformedFiles[_i3],
              filename: files[_i3].upload.filename
            };
          }

          _this15._uploadData(files, dataBlocks);
        }
      });
    } /// Returns the right chunk for given file and xhr

  }, {
    key: "_getChunk",
    value: function _getChunk(file, xhr) {
      for (var i = 0; i < file.upload.totalChunkCount; i++) {
        if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) {
          return file.upload.chunks[i];
        }
      }
    } // This function actually uploads the file(s) to the server.
    // If dataBlocks contains the actual data to upload (meaning, that this could either be transformed
    // files, or individual chunks for chunked upload).

  }, {
    key: "_uploadData",
    value: function _uploadData(files, dataBlocks) {
      var _this16 = this;

      var xhr = new XMLHttpRequest(); // Put the xhr object in the file objects to be able to reference it later.

      var _iterator21 = _createForOfIteratorHelper(files),
          _step21;

      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var file = _step21.value;
          file.xhr = xhr;
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }

      if (files[0].upload.chunked) {
        // Put the xhr object in the right chunk object, so it can be associated later, and found with _getChunk
        files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
      }

      var method = this.resolveOption(this.options.method, files);
      var url = this.resolveOption(this.options.url, files);
      xhr.open(method, url, true); // Setting the timeout after open because of IE11 issue: https://gitlab.com/meno/dropzone/issues/8

      xhr.timeout = this.resolveOption(this.options.timeout, files); // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179

      xhr.withCredentials = !!this.options.withCredentials;

      xhr.onload = function (e) {
        _this16._finishedUploading(files, xhr, e);
      };

      xhr.ontimeout = function () {
        _this16._handleUploadError(files, xhr, "Request timedout after ".concat(_this16.options.timeout / 1000, " seconds"));
      };

      xhr.onerror = function () {
        _this16._handleUploadError(files, xhr);
      }; // Some browsers do not have the .upload property


      var progressObj = xhr.upload != null ? xhr.upload : xhr;

      progressObj.onprogress = function (e) {
        return _this16._updateFilesUploadProgress(files, xhr, e);
      };

      var headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };

      if (this.options.headers) {
        Dropzone.extend(headers, this.options.headers);
      }

      for (var headerName in headers) {
        var headerValue = headers[headerName];

        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }

      var formData = new FormData(); // Adding all @options parameters

      if (this.options.params) {
        var additionalParams = this.options.params;

        if (typeof additionalParams === 'function') {
          additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
        }

        for (var key in additionalParams) {
          var value = additionalParams[key];

          if (Array.isArray(value)) {
            // The additional parameter contains an array,
            // so lets iterate over it to attach each value
            // individually.
            for (var i = 0; i < value.length; i++) {
              formData.append(key, value[i]);
            }
          } else {
            formData.append(key, value);
          }
        }
      } // Let the user add additional data if necessary


      var _iterator22 = _createForOfIteratorHelper(files),
          _step22;

      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var _file = _step22.value;
          this.emit("sending", _file, xhr, formData);
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }

      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }

      this._addFormElementData(formData); // Finally add the files
      // Has to be last because some servers (eg: S3) expect the file to be the last parameter


      for (var _i4 = 0; _i4 < dataBlocks.length; _i4++) {
        var dataBlock = dataBlocks[_i4];
        formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
      }

      this.submitRequest(xhr, formData, files);
    } // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.

  }, {
    key: "_transformFiles",
    value: function _transformFiles(files, done) {
      var _this17 = this;

      var transformedFiles = []; // Clumsy way of handling asynchronous calls, until I get to add a proper Future library.

      var doneCounter = 0;

      var _loop = function _loop(i) {
        _this17.options.transformFile.call(_this17, files[i], function (transformedFile) {
          transformedFiles[i] = transformedFile;

          if (++doneCounter === files.length) {
            done(transformedFiles);
          }
        });
      };

      for (var i = 0; i < files.length; i++) {
        _loop(i);
      }
    } // Takes care of adding other input elements of the form to the AJAX request

  }, {
    key: "_addFormElementData",
    value: function _addFormElementData(formData) {
      // Take care of other input elements
      if (this.element.tagName === "FORM") {
        var _iterator23 = _createForOfIteratorHelper(this.element.querySelectorAll("input, textarea, select, button")),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var input = _step23.value;
            var inputName = input.getAttribute("name");
            var inputType = input.getAttribute("type");
            if (inputType) inputType = inputType.toLowerCase(); // If the input doesn't have a name, we can't use it.

            if (typeof inputName === 'undefined' || inputName === null) continue;

            if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
              // Possibly multiple values
              var _iterator24 = _createForOfIteratorHelper(input.options),
                  _step24;

              try {
                for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                  var option = _step24.value;

                  if (option.selected) {
                    formData.append(inputName, option.value);
                  }
                }
              } catch (err) {
                _iterator24.e(err);
              } finally {
                _iterator24.f();
              }
            } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) {
              formData.append(inputName, input.value);
            }
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      }
    } // Invoked when there is new progress information about given files.
    // If e is not provided, it is assumed that the upload is finished.

  }, {
    key: "_updateFilesUploadProgress",
    value: function _updateFilesUploadProgress(files, xhr, e) {
      var progress;

      if (typeof e !== 'undefined') {
        progress = 100 * e.loaded / e.total;

        if (files[0].upload.chunked) {
          var file = files[0]; // Since this is a chunked upload, we need to update the appropriate chunk progress.

          var chunk = this._getChunk(file, xhr);

          chunk.progress = progress;
          chunk.total = e.total;
          chunk.bytesSent = e.loaded;
          var fileProgress = 0,
              fileTotal,
              fileBytesSent;
          file.upload.progress = 0;
          file.upload.total = 0;
          file.upload.bytesSent = 0;

          for (var i = 0; i < file.upload.totalChunkCount; i++) {
            if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].progress !== undefined) {
              file.upload.progress += file.upload.chunks[i].progress;
              file.upload.total += file.upload.chunks[i].total;
              file.upload.bytesSent += file.upload.chunks[i].bytesSent;
            }
          }

          file.upload.progress = file.upload.progress / file.upload.totalChunkCount;
        } else {
          var _iterator25 = _createForOfIteratorHelper(files),
              _step25;

          try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var _file2 = _step25.value;
              _file2.upload.progress = progress;
              _file2.upload.total = e.total;
              _file2.upload.bytesSent = e.loaded;
            }
          } catch (err) {
            _iterator25.e(err);
          } finally {
            _iterator25.f();
          }
        }

        var _iterator26 = _createForOfIteratorHelper(files),
            _step26;

        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var _file3 = _step26.value;
            this.emit("uploadprogress", _file3, _file3.upload.progress, _file3.upload.bytesSent);
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }
      } else {
        // Called when the file finished uploading
        var allFilesFinished = true;
        progress = 100;

        var _iterator27 = _createForOfIteratorHelper(files),
            _step27;

        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var _file4 = _step27.value;

            if (_file4.upload.progress !== 100 || _file4.upload.bytesSent !== _file4.upload.total) {
              allFilesFinished = false;
            }

            _file4.upload.progress = progress;
            _file4.upload.bytesSent = _file4.upload.total;
          } // Nothing to do, all files already at 100%

        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }

        if (allFilesFinished) {
          return;
        }

        var _iterator28 = _createForOfIteratorHelper(files),
            _step28;

        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _file5 = _step28.value;
            this.emit("uploadprogress", _file5, progress, _file5.upload.bytesSent);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
      }
    }
  }, {
    key: "_finishedUploading",
    value: function _finishedUploading(files, xhr, e) {
      var response;

      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {
        response = xhr.responseText;

        if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
          try {
            response = JSON.parse(response);
          } catch (error) {
            e = error;
            response = "Invalid JSON response from server.";
          }
        }
      }

      this._updateFilesUploadProgress(files);

      if (!(200 <= xhr.status && xhr.status < 300)) {
        this._handleUploadError(files, xhr, response);
      } else {
        if (files[0].upload.chunked) {
          files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr));
        } else {
          this._finished(files, response, e);
        }
      }
    }
  }, {
    key: "_handleUploadError",
    value: function _handleUploadError(files, xhr, response) {
      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (files[0].upload.chunked && this.options.retryChunks) {
        var chunk = this._getChunk(files[0], xhr);

        if (chunk.retries++ < this.options.retryChunksLimit) {
          this._uploadData(files, [chunk.dataBlock]);

          return;
        } else {
          console.warn('Retried this chunk too often. Giving up.');
        }
      }

      this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
    }
  }, {
    key: "submitRequest",
    value: function submitRequest(xhr, formData, files) {
      xhr.send(formData);
    } // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_finished",
    value: function _finished(files, responseText, e) {
      var _iterator29 = _createForOfIteratorHelper(files),
          _step29;

      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
          var file = _step29.value;
          file.status = Dropzone.SUCCESS;
          this.emit("success", file, responseText, e);
          this.emit("complete", file);
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }

      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    } // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_errorProcessing",
    value: function _errorProcessing(files, message, xhr) {
      var _iterator30 = _createForOfIteratorHelper(files),
          _step30;

      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var file = _step30.value;
          file.status = Dropzone.ERROR;
          this.emit("error", file, message, xhr);
          this.emit("complete", file);
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }

      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }], [{
    key: "uuidv4",
    value: function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
  }]);

  return Dropzone;
}(Emitter);

Dropzone.initClass();
Dropzone.version = "5.7.2"; // This is a map of options for your different dropzones. Add configurations
// to this object for your different dropzone elemens.
//
// Example:
//
//     Dropzone.options.myDropzoneElementId = { maxFilesize: 1 };
//
// To disable autoDiscover for a specific element, you can set `false` as an option:
//
//     Dropzone.options.myDisabledElementId = false;
//
// And in html:
//
//     <form action="/upload" id="my-dropzone-element-id" class="dropzone"></form>

Dropzone.options = {}; // Returns the options for an element or undefined if none available.

Dropzone.optionsForElement = function (element) {
  // Get the `Dropzone.options.elementId` for this element if it exists
  if (element.getAttribute("id")) {
    return Dropzone.options[camelize(element.getAttribute("id"))];
  } else {
    return undefined;
  }
}; // Holds a list of all dropzone instances


Dropzone.instances = []; // Returns the dropzone for given element if any

Dropzone.forElement = function (element) {
  if (typeof element === "string") {
    element = document.querySelector(element);
  }

  if ((element != null ? element.dropzone : undefined) == null) {
    throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
  }

  return element.dropzone;
}; // Set to false if you don't want Dropzone to automatically find and attach to .dropzone elements.


Dropzone.autoDiscover = true; // Looks for all .dropzone elements and creates a dropzone for them

Dropzone.discover = function () {
  var dropzones;

  if (document.querySelectorAll) {
    dropzones = document.querySelectorAll(".dropzone");
  } else {
    dropzones = []; // IE :(

    var checkElements = function checkElements(elements) {
      return function () {
        var result = [];

        var _iterator31 = _createForOfIteratorHelper(elements),
            _step31;

        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var el = _step31.value;

            if (/(^| )dropzone($| )/.test(el.className)) {
              result.push(dropzones.push(el));
            } else {
              result.push(undefined);
            }
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }

        return result;
      }();
    };

    checkElements(document.getElementsByTagName("div"));
    checkElements(document.getElementsByTagName("form"));
  }

  return function () {
    var result = [];

    var _iterator32 = _createForOfIteratorHelper(dropzones),
        _step32;

    try {
      for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
        var dropzone = _step32.value;

        // Create a dropzone unless auto discover has been disabled for specific element
        if (Dropzone.optionsForElement(dropzone) !== false) {
          result.push(new Dropzone(dropzone));
        } else {
          result.push(undefined);
        }
      }
    } catch (err) {
      _iterator32.e(err);
    } finally {
      _iterator32.f();
    }

    return result;
  }();
}; // Since the whole Drag'n'Drop API is pretty new, some browsers implement it,
// but not correctly.
// So I created a blacklist of userAgents. Yes, yes. Browser sniffing, I know.
// But what to do when browsers *theoretically* support an API, but crash
// when using it.
//
// This is a list of regular expressions tested against navigator.userAgent
//
// ** It should only be used on browser that *do* support the API, but
// incorrectly **
//


Dropzone.blacklistedBrowsers = [// The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
/opera.*(Macintosh|Windows Phone).*version\/12/i]; // Checks if the browser is supported

Dropzone.isBrowserSupported = function () {
  var capableBrowser = true;

  if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
    if (!("classList" in document.createElement("a"))) {
      capableBrowser = false;
    } else {
      // The browser supports the API, but may be blacklisted.
      var _iterator33 = _createForOfIteratorHelper(Dropzone.blacklistedBrowsers),
          _step33;

      try {
        for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
          var regex = _step33.value;

          if (regex.test(navigator.userAgent)) {
            capableBrowser = false;
            continue;
          }
        }
      } catch (err) {
        _iterator33.e(err);
      } finally {
        _iterator33.f();
      }
    }
  } else {
    capableBrowser = false;
  }

  return capableBrowser;
};

Dropzone.dataURItoBlob = function (dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]); // separate out the mime component

  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to an ArrayBuffer

  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
    ia[i] = byteString.charCodeAt(i);
  } // write the ArrayBuffer to a blob


  return new Blob([ab], {
    type: mimeString
  });
}; // Returns an array without the rejected item


var without = function without(list, rejectedItem) {
  return list.filter(function (item) {
    return item !== rejectedItem;
  }).map(function (item) {
    return item;
  });
}; // abc-def_ghi -> abcDefGhi


var camelize = function camelize(str) {
  return str.replace(/[\-_](\w)/g, function (match) {
    return match.charAt(1).toUpperCase();
  });
}; // Creates an element from string


Dropzone.createElement = function (string) {
  var div = document.createElement("div");
  div.innerHTML = string;
  return div.childNodes[0];
}; // Tests if given element is inside (or simply is) the container


Dropzone.elementInside = function (element, container) {
  if (element === container) {
    return true;
  } // Coffeescript doesn't support do/while loops


  while (element = element.parentNode) {
    if (element === container) {
      return true;
    }
  }

  return false;
};

Dropzone.getElement = function (el, name) {
  var element;

  if (typeof el === "string") {
    element = document.querySelector(el);
  } else if (el.nodeType != null) {
    element = el;
  }

  if (element == null) {
    throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector or a plain HTML element."));
  }

  return element;
};

Dropzone.getElements = function (els, name) {
  var el, elements;

  if (els instanceof Array) {
    elements = [];

    try {
      var _iterator34 = _createForOfIteratorHelper(els),
          _step34;

      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          el = _step34.value;
          elements.push(this.getElement(el, name));
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }
    } catch (e) {
      elements = null;
    }
  } else if (typeof els === "string") {
    elements = [];

    var _iterator35 = _createForOfIteratorHelper(document.querySelectorAll(els)),
        _step35;

    try {
      for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
        el = _step35.value;
        elements.push(el);
      }
    } catch (err) {
      _iterator35.e(err);
    } finally {
      _iterator35.f();
    }
  } else if (els.nodeType != null) {
    elements = [els];
  }

  if (elements == null || !elements.length) {
    throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));
  }

  return elements;
}; // Asks the user the question and calls accepted or rejected accordingly
//
// The default implementation just uses `window.confirm` and then calls the
// appropriate callback.


Dropzone.confirm = function (question, accepted, rejected) {
  if (window.confirm(question)) {
    return accepted();
  } else if (rejected != null) {
    return rejected();
  }
}; // Validates the mime type like this:
//
// https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept


Dropzone.isValidFile = function (file, acceptedFiles) {
  if (!acceptedFiles) {
    return true;
  } // If there are no accepted mime types, it's OK


  acceptedFiles = acceptedFiles.split(",");
  var mimeType = file.type;
  var baseMimeType = mimeType.replace(/\/.*$/, "");

  var _iterator36 = _createForOfIteratorHelper(acceptedFiles),
      _step36;

  try {
    for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
      var validType = _step36.value;
      validType = validType.trim();

      if (validType.charAt(0) === ".") {
        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
          return true;
        }
      } else if (/\/\*$/.test(validType)) {
        // This is something like a image/* mime type
        if (baseMimeType === validType.replace(/\/.*$/, "")) {
          return true;
        }
      } else {
        if (mimeType === validType) {
          return true;
        }
      }
    }
  } catch (err) {
    _iterator36.e(err);
  } finally {
    _iterator36.f();
  }

  return false;
}; // Augment jQuery


if (typeof jQuery !== 'undefined' && jQuery !== null) {
  jQuery.fn.dropzone = function (options) {
    return this.each(function () {
      return new Dropzone(this, options);
    });
  };
}

if (typeof module !== 'undefined' && module !== null) {
  module.exports = Dropzone;
} else {
  window.Dropzone = Dropzone;
} // Dropzone file status codes


Dropzone.ADDED = "added";
Dropzone.QUEUED = "queued"; // For backwards compatibility. Now, if a file is accepted, it's either queued
// or uploading.

Dropzone.ACCEPTED = Dropzone.QUEUED;
Dropzone.UPLOADING = "uploading";
Dropzone.PROCESSING = Dropzone.UPLOADING; // alias

Dropzone.CANCELED = "canceled";
Dropzone.ERROR = "error";
Dropzone.SUCCESS = "success";
/*

 Bugfix for iOS 6 and 7
 Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 based on the work of https://github.com/stomita/ios-imagefile-megapixel

 */
// Detecting vertical squash in loaded image.
// Fixes a bug which squash image vertically while drawing into canvas for some images.
// This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel

var detectVerticalSquash = function detectVerticalSquash(img) {
  var iw = img.naturalWidth;
  var ih = img.naturalHeight;
  var canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = ih;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var _ctx$getImageData = ctx.getImageData(1, 0, 1, ih),
      data = _ctx$getImageData.data; // search image edge pixel position in case it is squashed vertically.


  var sy = 0;
  var ey = ih;
  var py = ih;

  while (py > sy) {
    var alpha = data[(py - 1) * 4 + 3];

    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }

    py = ey + sy >> 1;
  }

  var ratio = py / ih;

  if (ratio === 0) {
    return 1;
  } else {
    return ratio;
  }
}; // A replacement for context.drawImage
// (args are for source and destination).


var drawImageIOSFix = function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
  var vertSquashRatio = detectVerticalSquash(img);
  return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
}; // Based on MinifyJpeg
// Source: http://www.perry.cz/files/ExifRestorer.js
// http://elicon.blog57.fc2.com/blog-entry-206.html


var ExifRestore = /*#__PURE__*/function () {
  function ExifRestore() {
    _classCallCheck(this, ExifRestore);
  }

  _createClass(ExifRestore, null, [{
    key: "initClass",
    value: function initClass() {
      this.KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    }
  }, {
    key: "encode64",
    value: function encode64(input) {
      var output = '';
      var chr1 = undefined;
      var chr2 = undefined;
      var chr3 = '';
      var enc1 = undefined;
      var enc2 = undefined;
      var enc3 = undefined;
      var enc4 = '';
      var i = 0;

      while (true) {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }

        output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';

        if (!(i < input.length)) {
          break;
        }
      }

      return output;
    }
  }, {
    key: "restore",
    value: function restore(origFileBase64, resizedFileBase64) {
      if (!origFileBase64.match('data:image/jpeg;base64,')) {
        return resizedFileBase64;
      }

      var rawImage = this.decode64(origFileBase64.replace('data:image/jpeg;base64,', ''));
      var segments = this.slice2Segments(rawImage);
      var image = this.exifManipulation(resizedFileBase64, segments);
      return "data:image/jpeg;base64,".concat(this.encode64(image));
    }
  }, {
    key: "exifManipulation",
    value: function exifManipulation(resizedFileBase64, segments) {
      var exifArray = this.getExifArray(segments);
      var newImageArray = this.insertExif(resizedFileBase64, exifArray);
      var aBuffer = new Uint8Array(newImageArray);
      return aBuffer;
    }
  }, {
    key: "getExifArray",
    value: function getExifArray(segments) {
      var seg = undefined;
      var x = 0;

      while (x < segments.length) {
        seg = segments[x];

        if (seg[0] === 255 & seg[1] === 225) {
          return seg;
        }

        x++;
      }

      return [];
    }
  }, {
    key: "insertExif",
    value: function insertExif(resizedFileBase64, exifArray) {
      var imageData = resizedFileBase64.replace('data:image/jpeg;base64,', '');
      var buf = this.decode64(imageData);
      var separatePoint = buf.indexOf(255, 3);
      var mae = buf.slice(0, separatePoint);
      var ato = buf.slice(separatePoint);
      var array = mae;
      array = array.concat(exifArray);
      array = array.concat(ato);
      return array;
    }
  }, {
    key: "slice2Segments",
    value: function slice2Segments(rawImageArray) {
      var head = 0;
      var segments = [];

      while (true) {
        var length;

        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
          break;
        }

        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
          head += 2;
        } else {
          length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
          var endPoint = head + length + 2;
          var seg = rawImageArray.slice(head, endPoint);
          segments.push(seg);
          head = endPoint;
        }

        if (head > rawImageArray.length) {
          break;
        }
      }

      return segments;
    }
  }, {
    key: "decode64",
    value: function decode64(input) {
      var output = '';
      var chr1 = undefined;
      var chr2 = undefined;
      var chr3 = '';
      var enc1 = undefined;
      var enc2 = undefined;
      var enc3 = undefined;
      var enc4 = '';
      var i = 0;
      var buf = []; // remove all characters that are not A-Z, a-z, 0-9, +, /, or =

      var base64test = /[^A-Za-z0-9\+\/\=]/g;

      if (base64test.exec(input)) {
        console.warn('There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, \'+\', \'/\',and \'=\'\nExpect errors in decoding.');
      }

      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

      while (true) {
        enc1 = this.KEY_STR.indexOf(input.charAt(i++));
        enc2 = this.KEY_STR.indexOf(input.charAt(i++));
        enc3 = this.KEY_STR.indexOf(input.charAt(i++));
        enc4 = this.KEY_STR.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        buf.push(chr1);

        if (enc3 !== 64) {
          buf.push(chr2);
        }

        if (enc4 !== 64) {
          buf.push(chr3);
        }

        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';

        if (!(i < input.length)) {
          break;
        }
      }

      return buf;
    }
  }]);

  return ExifRestore;
}();

ExifRestore.initClass();
/*
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 */
// @win window reference
// @fn function reference

var contentLoaded = function contentLoaded(win, fn) {
  var done = false;
  var top = true;
  var doc = win.document;
  var root = doc.documentElement;
  var add = doc.addEventListener ? "addEventListener" : "attachEvent";
  var rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
  var pre = doc.addEventListener ? "" : "on";

  var init = function init(e) {
    if (e.type === "readystatechange" && doc.readyState !== "complete") {
      return;
    }

    (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);

    if (!done && (done = true)) {
      return fn.call(win, e.type || e);
    }
  };

  var poll = function poll() {
    try {
      root.doScroll("left");
    } catch (e) {
      setTimeout(poll, 50);
      return;
    }

    return init("poll");
  };

  if (doc.readyState !== "complete") {
    if (doc.createEventObject && root.doScroll) {
      try {
        top = !win.frameElement;
      } catch (error) {}

      if (top) {
        poll();
      }
    }

    doc[add](pre + "DOMContentLoaded", init, false);
    doc[add](pre + "readystatechange", init, false);
    return win[add](pre + "load", init, false);
  }
}; // As a single function to be able to write tests.


Dropzone._autoDiscoverFunction = function () {
  if (Dropzone.autoDiscover) {
    return Dropzone.discover();
  }
};

contentLoaded(window, Dropzone._autoDiscoverFunction);

function __guard__(value, transform) {
  return typeof value !== 'undefined' && value !== null ? transform(value) : undefined;
}

function __guardMethod__(obj, methodName, transform) {
  if (typeof obj !== 'undefined' && obj !== null && typeof obj[methodName] === 'function') {
    return transform(obj, methodName);
  } else {
    return undefined;
  }
}

},{}],"glide":[function(require,module,exports){
/*!
 * Glide.js v3.4.1
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Glide = factory());
}(this, (function () { 'use strict';

  var defaults = {
    /**
     * Type of the movement.
     *
     * Available types:
     * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
     * `carousel` - Changes slides without starting over when it reaches the first or last slide.
     *
     * @type {String}
     */
    type: 'slider',

    /**
     * Start at specific slide number defined with zero-based index.
     *
     * @type {Number}
     */
    startAt: 0,

    /**
     * A number of slides visible on the single viewport.
     *
     * @type {Number}
     */
    perView: 1,

    /**
     * Focus currently active slide at a specified position in the track.
     *
     * Available inputs:
     * `center` - Current slide will be always focused at the center of a track.
     * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
     *
     * @type {String|Number}
     */
    focusAt: 0,

    /**
     * A size of the gap added between slides.
     *
     * @type {Number}
     */
    gap: 10,

    /**
     * Change slides after a specified interval. Use `false` for turning off autoplay.
     *
     * @type {Number|Boolean}
     */
    autoplay: false,

    /**
     * Stop autoplay on mouseover event.
     *
     * @type {Boolean}
     */
    hoverpause: true,

    /**
     * Allow for changing slides with left and right keyboard arrows.
     *
     * @type {Boolean}
     */
    keyboard: true,

    /**
     * Stop running `perView` number of slides from the end. Use this
     * option if you don't want to have an empty space after
     * a slider. Works only with `slider` type and a
     * non-centered `focusAt` setting.
     *
     * @type {Boolean}
     */
    bound: false,

    /**
     * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
     *
     * @type {Number|Boolean}
     */
    swipeThreshold: 80,

    /**
     * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
     *
     * @type {Number|Boolean}
     */
    dragThreshold: 120,

    /**
     * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
     *
     * @type {Number|Boolean}
     */
    perTouch: false,

    /**
     * Moving distance ratio of the slides on a swiping and dragging.
     *
     * @type {Number}
     */
    touchRatio: 0.5,

    /**
     * Angle required to activate slides moving on swiping or dragging.
     *
     * @type {Number}
     */
    touchAngle: 45,

    /**
     * Duration of the animation in milliseconds.
     *
     * @type {Number}
     */
    animationDuration: 400,

    /**
     * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
     *
     * @type {Boolean}
     */
    rewind: true,

    /**
     * Duration of the rewinding animation of the `slider` type in milliseconds.
     *
     * @type {Number}
     */
    rewindDuration: 800,

    /**
     * Easing function for the animation.
     *
     * @type {String}
     */
    animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

    /**
     * Throttle costly events at most once per every wait milliseconds.
     *
     * @type {Number}
     */
    throttle: 10,

    /**
     * Moving direction mode.
     *
     * Available inputs:
     * - 'ltr' - left to right movement,
     * - 'rtl' - right to left movement.
     *
     * @type {String}
     */
    direction: 'ltr',

    /**
     * The distance value of the next and previous viewports which
     * have to peek in the current view. Accepts number and
     * pixels as a string. Left and right peeking can be
     * set up separately with a directions object.
     *
     * For example:
     * `100` - Peek 100px on the both sides.
     * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
     *
     * @type {Number|String|Object}
     */
    peek: 0,

    /**
     * Collection of options applied at specified media breakpoints.
     * For example: display two slides per view under 800px.
     * `{
     *   '800px': {
     *     perView: 2
     *   }
     * }`
     */
    breakpoints: {},

    /**
     * Collection of internally used HTML classes.
     *
     * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
     * @type {Object}
     */
    classes: {
      direction: {
        ltr: 'glide--ltr',
        rtl: 'glide--rtl'
      },
      slider: 'glide--slider',
      carousel: 'glide--carousel',
      swipeable: 'glide--swipeable',
      dragging: 'glide--dragging',
      cloneSlide: 'glide__slide--clone',
      activeNav: 'glide__bullet--active',
      activeSlide: 'glide__slide--active',
      disabledArrow: 'glide__arrow--disabled'
    }
  };

  /**
   * Outputs warning message to the bowser console.
   *
   * @param  {String} msg
   * @return {Void}
   */
  function warn(msg) {
    console.error("[Glide warn]: " + msg);
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /**
   * Converts value entered as number
   * or string to integer value.
   *
   * @param {String} value
   * @returns {Number}
   */
  function toInt(value) {
    return parseInt(value);
  }

  /**
   * Converts value entered as number
   * or string to flat value.
   *
   * @param {String} value
   * @returns {Number}
   */
  function toFloat(value) {
    return parseFloat(value);
  }

  /**
   * Indicates whether the specified value is a string.
   *
   * @param  {*}   value
   * @return {Boolean}
   */
  function isString(value) {
    return typeof value === 'string';
  }

  /**
   * Indicates whether the specified value is an object.
   *
   * @param  {*} value
   * @return {Boolean}
   *
   * @see https://github.com/jashkenas/underscore
   */
  function isObject(value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

    return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
  }

  /**
   * Indicates whether the specified value is a number.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isNumber(value) {
    return typeof value === 'number';
  }

  /**
   * Indicates whether the specified value is a function.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isFunction(value) {
    return typeof value === 'function';
  }

  /**
   * Indicates whether the specified value is undefined.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isUndefined(value) {
    return typeof value === 'undefined';
  }

  /**
   * Indicates whether the specified value is an array.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isArray(value) {
    return value.constructor === Array;
  }

  /**
   * Creates and initializes specified collection of extensions.
   * Each extension receives access to instance of glide and rest of components.
   *
   * @param {Object} glide
   * @param {Object} extensions
   *
   * @returns {Object}
   */
  function mount(glide, extensions, events) {
    var components = {};

    for (var name in extensions) {
      if (isFunction(extensions[name])) {
        components[name] = extensions[name](glide, components, events);
      } else {
        warn('Extension must be a function');
      }
    }

    for (var _name in components) {
      if (isFunction(components[_name].mount)) {
        components[_name].mount();
      }
    }

    return components;
  }

  /**
   * Defines getter and setter property on the specified object.
   *
   * @param  {Object} obj         Object where property has to be defined.
   * @param  {String} prop        Name of the defined property.
   * @param  {Object} definition  Get and set definitions for the property.
   * @return {Void}
   */
  function define(obj, prop, definition) {
    Object.defineProperty(obj, prop, definition);
  }

  /**
   * Sorts aphabetically object keys.
   *
   * @param  {Object} obj
   * @return {Object}
   */
  function sortKeys(obj) {
    return Object.keys(obj).sort().reduce(function (r, k) {
      r[k] = obj[k];

      return r[k], r;
    }, {});
  }

  /**
   * Merges passed settings object with default options.
   *
   * @param  {Object} defaults
   * @param  {Object} settings
   * @return {Object}
   */
  function mergeOptions(defaults, settings) {
    var options = _extends({}, defaults, settings);

    // `Object.assign` do not deeply merge objects, so we
    // have to do it manually for every nested object
    // in options. Although it does not look smart,
    // it's smaller and faster than some fancy
    // merging deep-merge algorithm script.
    if (settings.hasOwnProperty('classes')) {
      options.classes = _extends({}, defaults.classes, settings.classes);

      if (settings.classes.hasOwnProperty('direction')) {
        options.classes.direction = _extends({}, defaults.classes.direction, settings.classes.direction);
      }
    }

    if (settings.hasOwnProperty('breakpoints')) {
      options.breakpoints = _extends({}, defaults.breakpoints, settings.breakpoints);
    }

    return options;
  }

  var EventsBus = function () {
    /**
     * Construct a EventBus instance.
     *
     * @param {Object} events
     */
    function EventsBus() {
      var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, EventsBus);

      this.events = events;
      this.hop = events.hasOwnProperty;
    }

    /**
     * Adds listener to the specifed event.
     *
     * @param {String|Array} event
     * @param {Function} handler
     */


    createClass(EventsBus, [{
      key: 'on',
      value: function on(event, handler) {
        if (isArray(event)) {
          for (var i = 0; i < event.length; i++) {
            this.on(event[i], handler);
          }
        }

        // Create the event's object if not yet created
        if (!this.hop.call(this.events, event)) {
          this.events[event] = [];
        }

        // Add the handler to queue
        var index = this.events[event].push(handler) - 1;

        // Provide handle back for removal of event
        return {
          remove: function remove() {
            delete this.events[event][index];
          }
        };
      }

      /**
       * Runs registered handlers for specified event.
       *
       * @param {String|Array} event
       * @param {Object=} context
       */

    }, {
      key: 'emit',
      value: function emit(event, context) {
        if (isArray(event)) {
          for (var i = 0; i < event.length; i++) {
            this.emit(event[i], context);
          }
        }

        // If the event doesn't exist, or there's no handlers in queue, just leave
        if (!this.hop.call(this.events, event)) {
          return;
        }

        // Cycle through events queue, fire!
        this.events[event].forEach(function (item) {
          item(context || {});
        });
      }
    }]);
    return EventsBus;
  }();

  var Glide = function () {
    /**
     * Construct glide.
     *
     * @param  {String} selector
     * @param  {Object} options
     */
    function Glide(selector) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      classCallCheck(this, Glide);

      this._c = {};
      this._t = [];
      this._e = new EventsBus();

      this.disabled = false;
      this.selector = selector;
      this.settings = mergeOptions(defaults, options);
      this.index = this.settings.startAt;
    }

    /**
     * Initializes glide.
     *
     * @param {Object} extensions Collection of extensions to initialize.
     * @return {Glide}
     */


    createClass(Glide, [{
      key: 'mount',
      value: function mount$$1() {
        var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this._e.emit('mount.before');

        if (isObject(extensions)) {
          this._c = mount(this, extensions, this._e);
        } else {
          warn('You need to provide a object on `mount()`');
        }

        this._e.emit('mount.after');

        return this;
      }

      /**
       * Collects an instance `translate` transformers.
       *
       * @param  {Array} transformers Collection of transformers.
       * @return {Void}
       */

    }, {
      key: 'mutate',
      value: function mutate() {
        var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        if (isArray(transformers)) {
          this._t = transformers;
        } else {
          warn('You need to provide a array on `mutate()`');
        }

        return this;
      }

      /**
       * Updates glide with specified settings.
       *
       * @param {Object} settings
       * @return {Glide}
       */

    }, {
      key: 'update',
      value: function update() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this.settings = mergeOptions(this.settings, settings);

        if (settings.hasOwnProperty('startAt')) {
          this.index = settings.startAt;
        }

        this._e.emit('update');

        return this;
      }

      /**
       * Change slide with specified pattern. A pattern must be in the special format:
       * `>` - Move one forward
       * `<` - Move one backward
       * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
       * `>>` - Rewinds to end (last slide)
       * `<<` - Rewinds to start (first slide)
       *
       * @param {String} pattern
       * @return {Glide}
       */

    }, {
      key: 'go',
      value: function go(pattern) {
        this._c.Run.make(pattern);

        return this;
      }

      /**
       * Move track by specified distance.
       *
       * @param {String} distance
       * @return {Glide}
       */

    }, {
      key: 'move',
      value: function move(distance) {
        this._c.Transition.disable();
        this._c.Move.make(distance);

        return this;
      }

      /**
       * Destroy instance and revert all changes done by this._c.
       *
       * @return {Glide}
       */

    }, {
      key: 'destroy',
      value: function destroy() {
        this._e.emit('destroy');

        return this;
      }

      /**
       * Start instance autoplaying.
       *
       * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
       * @return {Glide}
       */

    }, {
      key: 'play',
      value: function play() {
        var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (interval) {
          this.settings.autoplay = interval;
        }

        this._e.emit('play');

        return this;
      }

      /**
       * Stop instance autoplaying.
       *
       * @return {Glide}
       */

    }, {
      key: 'pause',
      value: function pause() {
        this._e.emit('pause');

        return this;
      }

      /**
       * Sets glide into a idle status.
       *
       * @return {Glide}
       */

    }, {
      key: 'disable',
      value: function disable() {
        this.disabled = true;

        return this;
      }

      /**
       * Sets glide into a active status.
       *
       * @return {Glide}
       */

    }, {
      key: 'enable',
      value: function enable() {
        this.disabled = false;

        return this;
      }

      /**
       * Adds cuutom event listener with handler.
       *
       * @param  {String|Array} event
       * @param  {Function} handler
       * @return {Glide}
       */

    }, {
      key: 'on',
      value: function on(event, handler) {
        this._e.on(event, handler);

        return this;
      }

      /**
       * Checks if glide is a precised type.
       *
       * @param  {String} name
       * @return {Boolean}
       */

    }, {
      key: 'isType',
      value: function isType(name) {
        return this.settings.type === name;
      }

      /**
       * Gets value of the core options.
       *
       * @return {Object}
       */

    }, {
      key: 'settings',
      get: function get$$1() {
        return this._o;
      }

      /**
       * Sets value of the core options.
       *
       * @param  {Object} o
       * @return {Void}
       */
      ,
      set: function set$$1(o) {
        if (isObject(o)) {
          this._o = o;
        } else {
          warn('Options must be an `object` instance.');
        }
      }

      /**
       * Gets current index of the slider.
       *
       * @return {Object}
       */

    }, {
      key: 'index',
      get: function get$$1() {
        return this._i;
      }

      /**
       * Sets current index a slider.
       *
       * @return {Object}
       */
      ,
      set: function set$$1(i) {
        this._i = toInt(i);
      }

      /**
       * Gets type name of the slider.
       *
       * @return {String}
       */

    }, {
      key: 'type',
      get: function get$$1() {
        return this.settings.type;
      }

      /**
       * Gets value of the idle status.
       *
       * @return {Boolean}
       */

    }, {
      key: 'disabled',
      get: function get$$1() {
        return this._d;
      }

      /**
       * Sets value of the idle status.
       *
       * @return {Boolean}
       */
      ,
      set: function set$$1(status) {
        this._d = !!status;
      }
    }]);
    return Glide;
  }();

  function Run (Glide, Components, Events) {
    var Run = {
      /**
       * Initializes autorunning of the glide.
       *
       * @return {Void}
       */
      mount: function mount() {
        this._o = false;
      },


      /**
       * Makes glides running based on the passed moving schema.
       *
       * @param {String} move
       */
      make: function make(move) {
        var _this = this;

        if (!Glide.disabled) {
          Glide.disable();

          this.move = move;

          Events.emit('run.before', this.move);

          this.calculate();

          Events.emit('run', this.move);

          Components.Transition.after(function () {
            if (_this.isStart()) {
              Events.emit('run.start', _this.move);
            }

            if (_this.isEnd()) {
              Events.emit('run.end', _this.move);
            }

            if (_this.isOffset('<') || _this.isOffset('>')) {
              _this._o = false;

              Events.emit('run.offset', _this.move);
            }

            Events.emit('run.after', _this.move);

            Glide.enable();
          });
        }
      },


      /**
       * Calculates current index based on defined move.
       *
       * @return {Void}
       */
      calculate: function calculate() {
        var move = this.move,
            length = this.length;
        var steps = move.steps,
            direction = move.direction;


        var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;

        switch (direction) {
          case '>':
            if (steps === '>') {
              Glide.index = length;
            } else if (this.isEnd()) {
              if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
                this._o = true;

                Glide.index = 0;
              }
            } else if (countableSteps) {
              Glide.index += Math.min(length - Glide.index, -toInt(steps));
            } else {
              Glide.index++;
            }
            break;

          case '<':
            if (steps === '<') {
              Glide.index = 0;
            } else if (this.isStart()) {
              if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
                this._o = true;

                Glide.index = length;
              }
            } else if (countableSteps) {
              Glide.index -= Math.min(Glide.index, toInt(steps));
            } else {
              Glide.index--;
            }
            break;

          case '=':
            Glide.index = steps;
            break;

          default:
            warn('Invalid direction pattern [' + direction + steps + '] has been used');
            break;
        }
      },


      /**
       * Checks if we are on the first slide.
       *
       * @return {Boolean}
       */
      isStart: function isStart() {
        return Glide.index === 0;
      },


      /**
       * Checks if we are on the last slide.
       *
       * @return {Boolean}
       */
      isEnd: function isEnd() {
        return Glide.index === this.length;
      },


      /**
       * Checks if we are making a offset run.
       *
       * @param {String} direction
       * @return {Boolean}
       */
      isOffset: function isOffset(direction) {
        return this._o && this.move.direction === direction;
      }
    };

    define(Run, 'move', {
      /**
       * Gets value of the move schema.
       *
       * @returns {Object}
       */
      get: function get() {
        return this._m;
      },


      /**
       * Sets value of the move schema.
       *
       * @returns {Object}
       */
      set: function set(value) {
        var step = value.substr(1);

        this._m = {
          direction: value.substr(0, 1),
          steps: step ? toInt(step) ? toInt(step) : step : 0
        };
      }
    });

    define(Run, 'length', {
      /**
       * Gets value of the running distance based
       * on zero-indexing number of slides.
       *
       * @return {Number}
       */
      get: function get() {
        var settings = Glide.settings;
        var length = Components.Html.slides.length;

        // If the `bound` option is acitve, a maximum running distance should be
        // reduced by `perView` and `focusAt` settings. Running distance
        // should end before creating an empty space after instance.

        if (Glide.isType('slider') && settings.focusAt !== 'center' && settings.bound) {
          return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
        }

        return length - 1;
      }
    });

    define(Run, 'offset', {
      /**
       * Gets status of the offsetting flag.
       *
       * @return {Boolean}
       */
      get: function get() {
        return this._o;
      }
    });

    return Run;
  }

  /**
   * Returns a current time.
   *
   * @return {Number}
   */
  function now() {
    return new Date().getTime();
  }

  /**
   * Returns a function, that, when invoked, will only be triggered
   * at most once during a given window of time.
   *
   * @param {Function} func
   * @param {Number} wait
   * @param {Object=} options
   * @return {Function}
   *
   * @see https://github.com/jashkenas/underscore
   */
  function throttle(func, wait, options) {
    var timeout = void 0,
        context = void 0,
        args = void 0,
        result = void 0;
    var previous = 0;
    if (!options) options = {};

    var later = function later() {
      previous = options.leading === false ? 0 : now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function throttled() {
      var at = now();
      if (!previous && options.leading === false) previous = at;
      var remaining = wait - (at - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = at;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function () {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  }

  var MARGIN_TYPE = {
    ltr: ['marginLeft', 'marginRight'],
    rtl: ['marginRight', 'marginLeft']
  };

  function Gaps (Glide, Components, Events) {
    var Gaps = {
      /**
       * Applies gaps between slides. First and last
       * slides do not receive it's edge margins.
       *
       * @param {HTMLCollection} slides
       * @return {Void}
       */
      apply: function apply(slides) {
        for (var i = 0, len = slides.length; i < len; i++) {
          var style = slides[i].style;
          var direction = Components.Direction.value;

          if (i !== 0) {
            style[MARGIN_TYPE[direction][0]] = this.value / 2 + 'px';
          } else {
            style[MARGIN_TYPE[direction][0]] = '';
          }

          if (i !== slides.length - 1) {
            style[MARGIN_TYPE[direction][1]] = this.value / 2 + 'px';
          } else {
            style[MARGIN_TYPE[direction][1]] = '';
          }
        }
      },


      /**
       * Removes gaps from the slides.
       *
       * @param {HTMLCollection} slides
       * @returns {Void}
      */
      remove: function remove(slides) {
        for (var i = 0, len = slides.length; i < len; i++) {
          var style = slides[i].style;

          style.marginLeft = '';
          style.marginRight = '';
        }
      }
    };

    define(Gaps, 'value', {
      /**
       * Gets value of the gap.
       *
       * @returns {Number}
       */
      get: function get() {
        return toInt(Glide.settings.gap);
      }
    });

    define(Gaps, 'grow', {
      /**
       * Gets additional dimentions value caused by gaps.
       * Used to increase width of the slides wrapper.
       *
       * @returns {Number}
       */
      get: function get() {
        return Gaps.value * (Components.Sizes.length - 1);
      }
    });

    define(Gaps, 'reductor', {
      /**
       * Gets reduction value caused by gaps.
       * Used to subtract width of the slides.
       *
       * @returns {Number}
       */
      get: function get() {
        var perView = Glide.settings.perView;

        return Gaps.value * (perView - 1) / perView;
      }
    });

    /**
     * Apply calculated gaps:
     * - after building, so slides (including clones) will receive proper margins
     * - on updating via API, to recalculate gaps with new options
     */
    Events.on(['build.after', 'update'], throttle(function () {
      Gaps.apply(Components.Html.wrapper.children);
    }, 30));

    /**
     * Remove gaps:
     * - on destroying to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Gaps.remove(Components.Html.wrapper.children);
    });

    return Gaps;
  }

  /**
   * Finds siblings nodes of the passed node.
   *
   * @param  {Element} node
   * @return {Array}
   */
  function siblings(node) {
    if (node && node.parentNode) {
      var n = node.parentNode.firstChild;
      var matched = [];

      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== node) {
          matched.push(n);
        }
      }

      return matched;
    }

    return [];
  }

  /**
   * Checks if passed node exist and is a valid element.
   *
   * @param  {Element} node
   * @return {Boolean}
   */
  function exist(node) {
    if (node && node instanceof window.HTMLElement) {
      return true;
    }

    return false;
  }

  var TRACK_SELECTOR = '[data-glide-el="track"]';

  function Html (Glide, Components) {
    var Html = {
      /**
       * Setup slider HTML nodes.
       *
       * @param {Glide} glide
       */
      mount: function mount() {
        this.root = Glide.selector;
        this.track = this.root.querySelector(TRACK_SELECTOR);
        this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (slide) {
          return !slide.classList.contains(Glide.settings.classes.cloneSlide);
        });
      }
    };

    define(Html, 'root', {
      /**
       * Gets node of the glide main element.
       *
       * @return {Object}
       */
      get: function get() {
        return Html._r;
      },


      /**
       * Sets node of the glide main element.
       *
       * @return {Object}
       */
      set: function set(r) {
        if (isString(r)) {
          r = document.querySelector(r);
        }

        if (exist(r)) {
          Html._r = r;
        } else {
          warn('Root element must be a existing Html node');
        }
      }
    });

    define(Html, 'track', {
      /**
       * Gets node of the glide track with slides.
       *
       * @return {Object}
       */
      get: function get() {
        return Html._t;
      },


      /**
       * Sets node of the glide track with slides.
       *
       * @return {Object}
       */
      set: function set(t) {
        if (exist(t)) {
          Html._t = t;
        } else {
          warn('Could not find track element. Please use ' + TRACK_SELECTOR + ' attribute.');
        }
      }
    });

    define(Html, 'wrapper', {
      /**
       * Gets node of the slides wrapper.
       *
       * @return {Object}
       */
      get: function get() {
        return Html.track.children[0];
      }
    });

    return Html;
  }

  function Peek (Glide, Components, Events) {
    var Peek = {
      /**
       * Setups how much to peek based on settings.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.value = Glide.settings.peek;
      }
    };

    define(Peek, 'value', {
      /**
       * Gets value of the peek.
       *
       * @returns {Number|Object}
       */
      get: function get() {
        return Peek._v;
      },


      /**
       * Sets value of the peek.
       *
       * @param {Number|Object} value
       * @return {Void}
       */
      set: function set(value) {
        if (isObject(value)) {
          value.before = toInt(value.before);
          value.after = toInt(value.after);
        } else {
          value = toInt(value);
        }

        Peek._v = value;
      }
    });

    define(Peek, 'reductor', {
      /**
       * Gets reduction value caused by peek.
       *
       * @returns {Number}
       */
      get: function get() {
        var value = Peek.value;
        var perView = Glide.settings.perView;

        if (isObject(value)) {
          return value.before / perView + value.after / perView;
        }

        return value * 2 / perView;
      }
    });

    /**
     * Recalculate peeking sizes on:
     * - when resizing window to update to proper percents
     */
    Events.on(['resize', 'update'], function () {
      Peek.mount();
    });

    return Peek;
  }

  function Move (Glide, Components, Events) {
    var Move = {
      /**
       * Constructs move component.
       *
       * @returns {Void}
       */
      mount: function mount() {
        this._o = 0;
      },


      /**
       * Calculates a movement value based on passed offset and currently active index.
       *
       * @param  {Number} offset
       * @return {Void}
       */
      make: function make() {
        var _this = this;

        var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        this.offset = offset;

        Events.emit('move', {
          movement: this.value
        });

        Components.Transition.after(function () {
          Events.emit('move.after', {
            movement: _this.value
          });
        });
      }
    };

    define(Move, 'offset', {
      /**
       * Gets an offset value used to modify current translate.
       *
       * @return {Object}
       */
      get: function get() {
        return Move._o;
      },


      /**
       * Sets an offset value used to modify current translate.
       *
       * @return {Object}
       */
      set: function set(value) {
        Move._o = !isUndefined(value) ? toInt(value) : 0;
      }
    });

    define(Move, 'translate', {
      /**
       * Gets a raw movement value.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Sizes.slideWidth * Glide.index;
      }
    });

    define(Move, 'value', {
      /**
       * Gets an actual movement value corrected by offset.
       *
       * @return {Number}
       */
      get: function get() {
        var offset = this.offset;
        var translate = this.translate;

        if (Components.Direction.is('rtl')) {
          return translate + offset;
        }

        return translate - offset;
      }
    });

    /**
     * Make movement to proper slide on:
     * - before build, so glide will start at `startAt` index
     * - on each standard run to move to newly calculated index
     */
    Events.on(['build.before', 'run'], function () {
      Move.make();
    });

    return Move;
  }

  function Sizes (Glide, Components, Events) {
    var Sizes = {
      /**
       * Setups dimentions of slides.
       *
       * @return {Void}
       */
      setupSlides: function setupSlides() {
        var width = this.slideWidth + 'px';
        var slides = Components.Html.slides;

        for (var i = 0; i < slides.length; i++) {
          slides[i].style.width = width;
        }
      },


      /**
       * Setups dimentions of slides wrapper.
       *
       * @return {Void}
       */
      setupWrapper: function setupWrapper(dimention) {
        Components.Html.wrapper.style.width = this.wrapperSize + 'px';
      },


      /**
       * Removes applied styles from HTML elements.
       *
       * @returns {Void}
       */
      remove: function remove() {
        var slides = Components.Html.slides;

        for (var i = 0; i < slides.length; i++) {
          slides[i].style.width = '';
        }

        Components.Html.wrapper.style.width = '';
      }
    };

    define(Sizes, 'length', {
      /**
       * Gets count number of the slides.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Html.slides.length;
      }
    });

    define(Sizes, 'width', {
      /**
       * Gets width value of the glide.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Html.root.offsetWidth;
      }
    });

    define(Sizes, 'wrapperSize', {
      /**
       * Gets size of the slides wrapper.
       *
       * @return {Number}
       */
      get: function get() {
        return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
      }
    });

    define(Sizes, 'slideWidth', {
      /**
       * Gets width value of the single slide.
       *
       * @return {Number}
       */
      get: function get() {
        return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
      }
    });

    /**
     * Apply calculated glide's dimensions:
     * - before building, so other dimentions (e.g. translate) will be calculated propertly
     * - when resizing window to recalculate sildes dimensions
     * - on updating via API, to calculate dimensions based on new options
     */
    Events.on(['build.before', 'resize', 'update'], function () {
      Sizes.setupSlides();
      Sizes.setupWrapper();
    });

    /**
     * Remove calculated glide's dimensions:
     * - on destoting to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Sizes.remove();
    });

    return Sizes;
  }

  function Build (Glide, Components, Events) {
    var Build = {
      /**
       * Init glide building. Adds classes, sets
       * dimensions and setups initial state.
       *
       * @return {Void}
       */
      mount: function mount() {
        Events.emit('build.before');

        this.typeClass();
        this.activeClass();

        Events.emit('build.after');
      },


      /**
       * Adds `type` class to the glide element.
       *
       * @return {Void}
       */
      typeClass: function typeClass() {
        Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type]);
      },


      /**
       * Sets active class to current slide.
       *
       * @return {Void}
       */
      activeClass: function activeClass() {
        var classes = Glide.settings.classes;
        var slide = Components.Html.slides[Glide.index];

        if (slide) {
          slide.classList.add(classes.activeSlide);

          siblings(slide).forEach(function (sibling) {
            sibling.classList.remove(classes.activeSlide);
          });
        }
      },


      /**
       * Removes HTML classes applied at building.
       *
       * @return {Void}
       */
      removeClasses: function removeClasses() {
        var classes = Glide.settings.classes;

        Components.Html.root.classList.remove(classes[Glide.settings.type]);

        Components.Html.slides.forEach(function (sibling) {
          sibling.classList.remove(classes.activeSlide);
        });
      }
    };

    /**
     * Clear building classes:
     * - on destroying to bring HTML to its initial state
     * - on updating to remove classes before remounting component
     */
    Events.on(['destroy', 'update'], function () {
      Build.removeClasses();
    });

    /**
     * Remount component:
     * - on resizing of the window to calculate new dimentions
     * - on updating settings via API
     */
    Events.on(['resize', 'update'], function () {
      Build.mount();
    });

    /**
     * Swap active class of current slide:
     * - after each move to the new index
     */
    Events.on('move.after', function () {
      Build.activeClass();
    });

    return Build;
  }

  function Clones (Glide, Components, Events) {
    var Clones = {
      /**
       * Create pattern map and collect slides to be cloned.
       */
      mount: function mount() {
        this.items = [];

        if (Glide.isType('carousel')) {
          this.items = this.collect();
        }
      },


      /**
       * Collect clones with pattern.
       *
       * @return {Void}
       */
      collect: function collect() {
        var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var slides = Components.Html.slides;
        var _Glide$settings = Glide.settings,
            perView = _Glide$settings.perView,
            classes = _Glide$settings.classes;


        var peekIncrementer = +!!Glide.settings.peek;
        var part = perView + peekIncrementer;
        var start = slides.slice(0, part);
        var end = slides.slice(-part);

        for (var r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++) {
          for (var i = 0; i < start.length; i++) {
            var clone = start[i].cloneNode(true);

            clone.classList.add(classes.cloneSlide);

            items.push(clone);
          }

          for (var _i = 0; _i < end.length; _i++) {
            var _clone = end[_i].cloneNode(true);

            _clone.classList.add(classes.cloneSlide);

            items.unshift(_clone);
          }
        }

        return items;
      },


      /**
       * Append cloned slides with generated pattern.
       *
       * @return {Void}
       */
      append: function append() {
        var items = this.items;
        var _Components$Html = Components.Html,
            wrapper = _Components$Html.wrapper,
            slides = _Components$Html.slides;


        var half = Math.floor(items.length / 2);
        var prepend = items.slice(0, half).reverse();
        var append = items.slice(half, items.length);
        var width = Components.Sizes.slideWidth + 'px';

        for (var i = 0; i < append.length; i++) {
          wrapper.appendChild(append[i]);
        }

        for (var _i2 = 0; _i2 < prepend.length; _i2++) {
          wrapper.insertBefore(prepend[_i2], slides[0]);
        }

        for (var _i3 = 0; _i3 < items.length; _i3++) {
          items[_i3].style.width = width;
        }
      },


      /**
       * Remove all cloned slides.
       *
       * @return {Void}
       */
      remove: function remove() {
        var items = this.items;


        for (var i = 0; i < items.length; i++) {
          Components.Html.wrapper.removeChild(items[i]);
        }
      }
    };

    define(Clones, 'grow', {
      /**
       * Gets additional dimentions value caused by clones.
       *
       * @return {Number}
       */
      get: function get() {
        return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
      }
    });

    /**
     * Append additional slide's clones:
     * - while glide's type is `carousel`
     */
    Events.on('update', function () {
      Clones.remove();
      Clones.mount();
      Clones.append();
    });

    /**
     * Append additional slide's clones:
     * - while glide's type is `carousel`
     */
    Events.on('build.before', function () {
      if (Glide.isType('carousel')) {
        Clones.append();
      }
    });

    /**
     * Remove clones HTMLElements:
     * - on destroying, to bring HTML to its initial state
     */
    Events.on('destroy', function () {
      Clones.remove();
    });

    return Clones;
  }

  var EventsBinder = function () {
    /**
     * Construct a EventsBinder instance.
     */
    function EventsBinder() {
      var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, EventsBinder);

      this.listeners = listeners;
    }

    /**
     * Adds events listeners to arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Function} closure
     * @param  {Boolean|Object} capture
     * @return {Void}
     */


    createClass(EventsBinder, [{
      key: 'on',
      value: function on(events, el, closure) {
        var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (isString(events)) {
          events = [events];
        }

        for (var i = 0; i < events.length; i++) {
          this.listeners[events[i]] = closure;

          el.addEventListener(events[i], this.listeners[events[i]], capture);
        }
      }

      /**
       * Removes event listeners from arrows HTML elements.
       *
       * @param  {String|Array} events
       * @param  {Element|Window|Document} el
       * @param  {Boolean|Object} capture
       * @return {Void}
       */

    }, {
      key: 'off',
      value: function off(events, el) {
        var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (isString(events)) {
          events = [events];
        }

        for (var i = 0; i < events.length; i++) {
          el.removeEventListener(events[i], this.listeners[events[i]], capture);
        }
      }

      /**
       * Destroy collected listeners.
       *
       * @returns {Void}
       */

    }, {
      key: 'destroy',
      value: function destroy() {
        delete this.listeners;
      }
    }]);
    return EventsBinder;
  }();

  function Resize (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Resize = {
      /**
       * Initializes window bindings.
       */
      mount: function mount() {
        this.bind();
      },


      /**
       * Binds `rezsize` listener to the window.
       * It's a costly event, so we are debouncing it.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('resize', window, throttle(function () {
          Events.emit('resize');
        }, Glide.settings.throttle));
      },


      /**
       * Unbinds listeners from the window.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('resize', window);
      }
    };

    /**
     * Remove bindings from window:
     * - on destroying, to remove added EventListener
     */
    Events.on('destroy', function () {
      Resize.unbind();
      Binder.destroy();
    });

    return Resize;
  }

  var VALID_DIRECTIONS = ['ltr', 'rtl'];
  var FLIPED_MOVEMENTS = {
    '>': '<',
    '<': '>',
    '=': '='
  };

  function Direction (Glide, Components, Events) {
    var Direction = {
      /**
       * Setups gap value based on settings.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.value = Glide.settings.direction;
      },


      /**
       * Resolves pattern based on direction value
       *
       * @param {String} pattern
       * @returns {String}
       */
      resolve: function resolve(pattern) {
        var token = pattern.slice(0, 1);

        if (this.is('rtl')) {
          return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
        }

        return pattern;
      },


      /**
       * Checks value of direction mode.
       *
       * @param {String} direction
       * @returns {Boolean}
       */
      is: function is(direction) {
        return this.value === direction;
      },


      /**
       * Applies direction class to the root HTML element.
       *
       * @return {Void}
       */
      addClass: function addClass() {
        Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
      },


      /**
       * Removes direction class from the root HTML element.
       *
       * @return {Void}
       */
      removeClass: function removeClass() {
        Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
      }
    };

    define(Direction, 'value', {
      /**
       * Gets value of the direction.
       *
       * @returns {Number}
       */
      get: function get() {
        return Direction._v;
      },


      /**
       * Sets value of the direction.
       *
       * @param {String} value
       * @return {Void}
       */
      set: function set(value) {
        if (VALID_DIRECTIONS.indexOf(value) > -1) {
          Direction._v = value;
        } else {
          warn('Direction value must be `ltr` or `rtl`');
        }
      }
    });

    /**
     * Clear direction class:
     * - on destroy to bring HTML to its initial state
     * - on update to remove class before reappling bellow
     */
    Events.on(['destroy', 'update'], function () {
      Direction.removeClass();
    });

    /**
     * Remount component:
     * - on update to reflect changes in direction value
     */
    Events.on('update', function () {
      Direction.mount();
    });

    /**
     * Apply direction class:
     * - before building to apply class for the first time
     * - on updating to reapply direction class that may changed
     */
    Events.on(['build.before', 'update'], function () {
      Direction.addClass();
    });

    return Direction;
  }

  /**
   * Reflects value of glide movement.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Rtl (Glide, Components) {
    return {
      /**
       * Negates the passed translate if glide is in RTL option.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        if (Components.Direction.is('rtl')) {
          return -translate;
        }

        return translate;
      }
    };
  }

  /**
   * Updates glide movement with a `gap` settings.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Gap (Glide, Components) {
    return {
      /**
       * Modifies passed translate value with number in the `gap` settings.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        return translate + Components.Gaps.value * Glide.index;
      }
    };
  }

  /**
   * Updates glide movement with width of additional clones width.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Grow (Glide, Components) {
    return {
      /**
       * Adds to the passed translate width of the half of clones.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        return translate + Components.Clones.grow / 2;
      }
    };
  }

  /**
   * Updates glide movement with a `peek` settings.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Peeking (Glide, Components) {
    return {
      /**
       * Modifies passed translate value with a `peek` setting.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        if (Glide.settings.focusAt >= 0) {
          var peek = Components.Peek.value;

          if (isObject(peek)) {
            return translate - peek.before;
          }

          return translate - peek;
        }

        return translate;
      }
    };
  }

  /**
   * Updates glide movement with a `focusAt` settings.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Focusing (Glide, Components) {
    return {
      /**
       * Modifies passed translate value with index in the `focusAt` setting.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        var gap = Components.Gaps.value;
        var width = Components.Sizes.width;
        var focusAt = Glide.settings.focusAt;
        var slideWidth = Components.Sizes.slideWidth;

        if (focusAt === 'center') {
          return translate - (width / 2 - slideWidth / 2);
        }

        return translate - slideWidth * focusAt - gap * focusAt;
      }
    };
  }

  /**
   * Applies diffrent transformers on translate value.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function mutator (Glide, Components, Events) {
    /**
     * Merge instance transformers with collection of default transformers.
     * It's important that the Rtl component be last on the list,
     * so it reflects all previous transformations.
     *
     * @type {Array}
     */
    var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);

    return {
      /**
       * Piplines translate value with registered transformers.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      mutate: function mutate(translate) {
        for (var i = 0; i < TRANSFORMERS.length; i++) {
          var transformer = TRANSFORMERS[i];

          if (isFunction(transformer) && isFunction(transformer().modify)) {
            translate = transformer(Glide, Components, Events).modify(translate);
          } else {
            warn('Transformer should be a function that returns an object with `modify()` method');
          }
        }

        return translate;
      }
    };
  }

  function Translate (Glide, Components, Events) {
    var Translate = {
      /**
       * Sets value of translate on HTML element.
       *
       * @param {Number} value
       * @return {Void}
       */
      set: function set(value) {
        var transform = mutator(Glide, Components).mutate(value);

        Components.Html.wrapper.style.transform = 'translate3d(' + -1 * transform + 'px, 0px, 0px)';
      },


      /**
       * Removes value of translate from HTML element.
       *
       * @return {Void}
       */
      remove: function remove() {
        Components.Html.wrapper.style.transform = '';
      }
    };

    /**
     * Set new translate value:
     * - on move to reflect index change
     * - on updating via API to reflect possible changes in options
     */
    Events.on('move', function (context) {
      var gap = Components.Gaps.value;
      var length = Components.Sizes.length;
      var width = Components.Sizes.slideWidth;

      if (Glide.isType('carousel') && Components.Run.isOffset('<')) {
        Components.Transition.after(function () {
          Events.emit('translate.jump');

          Translate.set(width * (length - 1));
        });

        return Translate.set(-width - gap * length);
      }

      if (Glide.isType('carousel') && Components.Run.isOffset('>')) {
        Components.Transition.after(function () {
          Events.emit('translate.jump');

          Translate.set(0);
        });

        return Translate.set(width * length + gap * length);
      }

      return Translate.set(context.movement);
    });

    /**
     * Remove translate:
     * - on destroying to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Translate.remove();
    });

    return Translate;
  }

  function Transition (Glide, Components, Events) {
    /**
     * Holds inactivity status of transition.
     * When true transition is not applied.
     *
     * @type {Boolean}
     */
    var disabled = false;

    var Transition = {
      /**
       * Composes string of the CSS transition.
       *
       * @param {String} property
       * @return {String}
       */
      compose: function compose(property) {
        var settings = Glide.settings;

        if (!disabled) {
          return property + ' ' + this.duration + 'ms ' + settings.animationTimingFunc;
        }

        return property + ' 0ms ' + settings.animationTimingFunc;
      },


      /**
       * Sets value of transition on HTML element.
       *
       * @param {String=} property
       * @return {Void}
       */
      set: function set() {
        var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

        Components.Html.wrapper.style.transition = this.compose(property);
      },


      /**
       * Removes value of transition from HTML element.
       *
       * @return {Void}
       */
      remove: function remove() {
        Components.Html.wrapper.style.transition = '';
      },


      /**
       * Runs callback after animation.
       *
       * @param  {Function} callback
       * @return {Void}
       */
      after: function after(callback) {
        setTimeout(function () {
          callback();
        }, this.duration);
      },


      /**
       * Enable transition.
       *
       * @return {Void}
       */
      enable: function enable() {
        disabled = false;

        this.set();
      },


      /**
       * Disable transition.
       *
       * @return {Void}
       */
      disable: function disable() {
        disabled = true;

        this.set();
      }
    };

    define(Transition, 'duration', {
      /**
       * Gets duration of the transition based
       * on currently running animation type.
       *
       * @return {Number}
       */
      get: function get() {
        var settings = Glide.settings;

        if (Glide.isType('slider') && Components.Run.offset) {
          return settings.rewindDuration;
        }

        return settings.animationDuration;
      }
    });

    /**
     * Set transition `style` value:
     * - on each moving, because it may be cleared by offset move
     */
    Events.on('move', function () {
      Transition.set();
    });

    /**
     * Disable transition:
     * - before initial build to avoid transitioning from `0` to `startAt` index
     * - while resizing window and recalculating dimentions
     * - on jumping from offset transition at start and end edges in `carousel` type
     */
    Events.on(['build.before', 'resize', 'translate.jump'], function () {
      Transition.disable();
    });

    /**
     * Enable transition:
     * - on each running, because it may be disabled by offset move
     */
    Events.on('run', function () {
      Transition.enable();
    });

    /**
     * Remove transition:
     * - on destroying to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Transition.remove();
    });

    return Transition;
  }

  /**
   * Test via a getter in the options object to see
   * if the passive property is accessed.
   *
   * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
   */

  var supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });

    window.addEventListener('testPassive', null, opts);
    window.removeEventListener('testPassive', null, opts);
  } catch (e) {}

  var supportsPassive$1 = supportsPassive;

  var START_EVENTS = ['touchstart', 'mousedown'];
  var MOVE_EVENTS = ['touchmove', 'mousemove'];
  var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
  var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

  function Swipe (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var swipeSin = 0;
    var swipeStartX = 0;
    var swipeStartY = 0;
    var disabled = false;
    var capture = supportsPassive$1 ? { passive: true } : false;

    var Swipe = {
      /**
       * Initializes swipe bindings.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.bindSwipeStart();
      },


      /**
       * Handler for `swipestart` event. Calculates entry points of the user's tap.
       *
       * @param {Object} event
       * @return {Void}
       */
      start: function start(event) {
        if (!disabled && !Glide.disabled) {
          this.disable();

          var swipe = this.touches(event);

          swipeSin = null;
          swipeStartX = toInt(swipe.pageX);
          swipeStartY = toInt(swipe.pageY);

          this.bindSwipeMove();
          this.bindSwipeEnd();

          Events.emit('swipe.start');
        }
      },


      /**
       * Handler for `swipemove` event. Calculates user's tap angle and distance.
       *
       * @param {Object} event
       */
      move: function move(event) {
        if (!Glide.disabled) {
          var _Glide$settings = Glide.settings,
              touchAngle = _Glide$settings.touchAngle,
              touchRatio = _Glide$settings.touchRatio,
              classes = _Glide$settings.classes;


          var swipe = this.touches(event);

          var subExSx = toInt(swipe.pageX) - swipeStartX;
          var subEySy = toInt(swipe.pageY) - swipeStartY;
          var powEX = Math.abs(subExSx << 2);
          var powEY = Math.abs(subEySy << 2);
          var swipeHypotenuse = Math.sqrt(powEX + powEY);
          var swipeCathetus = Math.sqrt(powEY);

          swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

          if (swipeSin * 180 / Math.PI < touchAngle) {
            event.stopPropagation();

            Components.Move.make(subExSx * toFloat(touchRatio));

            Components.Html.root.classList.add(classes.dragging);

            Events.emit('swipe.move');
          } else {
            return false;
          }
        }
      },


      /**
       * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
       *
       * @param {Object} event
       * @return {Void}
       */
      end: function end(event) {
        if (!Glide.disabled) {
          var settings = Glide.settings;

          var swipe = this.touches(event);
          var threshold = this.threshold(event);

          var swipeDistance = swipe.pageX - swipeStartX;
          var swipeDeg = swipeSin * 180 / Math.PI;
          var steps = Math.round(swipeDistance / Components.Sizes.slideWidth);

          this.enable();

          if (swipeDistance > threshold && swipeDeg < settings.touchAngle) {
            // While swipe is positive and greater than threshold move backward.
            if (settings.perTouch) {
              steps = Math.min(steps, toInt(settings.perTouch));
            }

            if (Components.Direction.is('rtl')) {
              steps = -steps;
            }

            Components.Run.make(Components.Direction.resolve('<' + steps));
          } else if (swipeDistance < -threshold && swipeDeg < settings.touchAngle) {
            // While swipe is negative and lower than negative threshold move forward.
            if (settings.perTouch) {
              steps = Math.max(steps, -toInt(settings.perTouch));
            }

            if (Components.Direction.is('rtl')) {
              steps = -steps;
            }

            Components.Run.make(Components.Direction.resolve('>' + steps));
          } else {
            // While swipe don't reach distance apply previous transform.
            Components.Move.make();
          }

          Components.Html.root.classList.remove(settings.classes.dragging);

          this.unbindSwipeMove();
          this.unbindSwipeEnd();

          Events.emit('swipe.end');
        }
      },


      /**
       * Binds swipe's starting event.
       *
       * @return {Void}
       */
      bindSwipeStart: function bindSwipeStart() {
        var _this = this;

        var settings = Glide.settings;

        if (settings.swipeThreshold) {
          Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
            _this.start(event);
          }, capture);
        }

        if (settings.dragThreshold) {
          Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
            _this.start(event);
          }, capture);
        }
      },


      /**
       * Unbinds swipe's starting event.
       *
       * @return {Void}
       */
      unbindSwipeStart: function unbindSwipeStart() {
        Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
        Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
      },


      /**
       * Binds swipe's moving event.
       *
       * @return {Void}
       */
      bindSwipeMove: function bindSwipeMove() {
        var _this2 = this;

        Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
          _this2.move(event);
        }, Glide.settings.throttle), capture);
      },


      /**
       * Unbinds swipe's moving event.
       *
       * @return {Void}
       */
      unbindSwipeMove: function unbindSwipeMove() {
        Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
      },


      /**
       * Binds swipe's ending event.
       *
       * @return {Void}
       */
      bindSwipeEnd: function bindSwipeEnd() {
        var _this3 = this;

        Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
          _this3.end(event);
        });
      },


      /**
       * Unbinds swipe's ending event.
       *
       * @return {Void}
       */
      unbindSwipeEnd: function unbindSwipeEnd() {
        Binder.off(END_EVENTS, Components.Html.wrapper);
      },


      /**
       * Normalizes event touches points accorting to different types.
       *
       * @param {Object} event
       */
      touches: function touches(event) {
        if (MOUSE_EVENTS.indexOf(event.type) > -1) {
          return event;
        }

        return event.touches[0] || event.changedTouches[0];
      },


      /**
       * Gets value of minimum swipe distance settings based on event type.
       *
       * @return {Number}
       */
      threshold: function threshold(event) {
        var settings = Glide.settings;

        if (MOUSE_EVENTS.indexOf(event.type) > -1) {
          return settings.dragThreshold;
        }

        return settings.swipeThreshold;
      },


      /**
       * Enables swipe event.
       *
       * @return {self}
       */
      enable: function enable() {
        disabled = false;

        Components.Transition.enable();

        return this;
      },


      /**
       * Disables swipe event.
       *
       * @return {self}
       */
      disable: function disable() {
        disabled = true;

        Components.Transition.disable();

        return this;
      }
    };

    /**
     * Add component class:
     * - after initial building
     */
    Events.on('build.after', function () {
      Components.Html.root.classList.add(Glide.settings.classes.swipeable);
    });

    /**
     * Remove swiping bindings:
     * - on destroying, to remove added EventListeners
     */
    Events.on('destroy', function () {
      Swipe.unbindSwipeStart();
      Swipe.unbindSwipeMove();
      Swipe.unbindSwipeEnd();
      Binder.destroy();
    });

    return Swipe;
  }

  function Images (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Images = {
      /**
       * Binds listener to glide wrapper.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.bind();
      },


      /**
       * Binds `dragstart` event on wrapper to prevent dragging images.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
      },


      /**
       * Unbinds `dragstart` event on wrapper.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('dragstart', Components.Html.wrapper);
      },


      /**
       * Event handler. Prevents dragging.
       *
       * @return {Void}
       */
      dragstart: function dragstart(event) {
        event.preventDefault();
      }
    };

    /**
     * Remove bindings from images:
     * - on destroying, to remove added EventListeners
     */
    Events.on('destroy', function () {
      Images.unbind();
      Binder.destroy();
    });

    return Images;
  }

  function Anchors (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    /**
     * Holds detaching status of anchors.
     * Prevents detaching of already detached anchors.
     *
     * @private
     * @type {Boolean}
     */
    var detached = false;

    /**
     * Holds preventing status of anchors.
     * If `true` redirection after click will be disabled.
     *
     * @private
     * @type {Boolean}
     */
    var prevented = false;

    var Anchors = {
      /**
       * Setups a initial state of anchors component.
       *
       * @returns {Void}
       */
      mount: function mount() {
        /**
         * Holds collection of anchors elements.
         *
         * @private
         * @type {HTMLCollection}
         */
        this._a = Components.Html.wrapper.querySelectorAll('a');

        this.bind();
      },


      /**
       * Binds events to anchors inside a track.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('click', Components.Html.wrapper, this.click);
      },


      /**
       * Unbinds events attached to anchors inside a track.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('click', Components.Html.wrapper);
      },


      /**
       * Handler for click event. Prevents clicks when glide is in `prevent` status.
       *
       * @param  {Object} event
       * @return {Void}
       */
      click: function click(event) {
        if (prevented) {
          event.stopPropagation();
          event.preventDefault();
        }
      },


      /**
       * Detaches anchors click event inside glide.
       *
       * @return {self}
       */
      detach: function detach() {
        prevented = true;

        if (!detached) {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].draggable = false;

            this.items[i].setAttribute('data-href', this.items[i].getAttribute('href'));

            this.items[i].removeAttribute('href');
          }

          detached = true;
        }

        return this;
      },


      /**
       * Attaches anchors click events inside glide.
       *
       * @return {self}
       */
      attach: function attach() {
        prevented = false;

        if (detached) {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].draggable = true;

            this.items[i].setAttribute('href', this.items[i].getAttribute('data-href'));
          }

          detached = false;
        }

        return this;
      }
    };

    define(Anchors, 'items', {
      /**
       * Gets collection of the arrows HTML elements.
       *
       * @return {HTMLElement[]}
       */
      get: function get() {
        return Anchors._a;
      }
    });

    /**
     * Detach anchors inside slides:
     * - on swiping, so they won't redirect to its `href` attributes
     */
    Events.on('swipe.move', function () {
      Anchors.detach();
    });

    /**
     * Attach anchors inside slides:
     * - after swiping and transitions ends, so they can redirect after click again
     */
    Events.on('swipe.end', function () {
      Components.Transition.after(function () {
        Anchors.attach();
      });
    });

    /**
     * Unbind anchors inside slides:
     * - on destroying, to bring anchors to its initial state
     */
    Events.on('destroy', function () {
      Anchors.attach();
      Anchors.unbind();
      Binder.destroy();
    });

    return Anchors;
  }

  var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
  var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';

  function Controls (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var capture = supportsPassive$1 ? { passive: true } : false;

    var Controls = {
      /**
       * Inits arrows. Binds events listeners
       * to the arrows HTML elements.
       *
       * @return {Void}
       */
      mount: function mount() {
        /**
         * Collection of navigation HTML elements.
         *
         * @private
         * @type {HTMLCollection}
         */
        this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);

        /**
         * Collection of controls HTML elements.
         *
         * @private
         * @type {HTMLCollection}
         */
        this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);

        this.addBindings();
      },


      /**
       * Sets active class to current slide.
       *
       * @return {Void}
       */
      setActive: function setActive() {
        for (var i = 0; i < this._n.length; i++) {
          this.addClass(this._n[i].children);
        }
      },


      /**
       * Removes active class to current slide.
       *
       * @return {Void}
       */
      removeActive: function removeActive() {
        for (var i = 0; i < this._n.length; i++) {
          this.removeClass(this._n[i].children);
        }
      },


      /**
       * Toggles active class on items inside navigation.
       *
       * @param  {HTMLElement} controls
       * @return {Void}
       */
      addClass: function addClass(controls) {
        var settings = Glide.settings;
        var item = controls[Glide.index];

        if (item) {
          item.classList.add(settings.classes.activeNav);

          siblings(item).forEach(function (sibling) {
            sibling.classList.remove(settings.classes.activeNav);
          });
        }
      },


      /**
       * Removes active class from active control.
       *
       * @param  {HTMLElement} controls
       * @return {Void}
       */
      removeClass: function removeClass(controls) {
        var item = controls[Glide.index];

        if (item) {
          item.classList.remove(Glide.settings.classes.activeNav);
        }
      },


      /**
       * Adds handles to the each group of controls.
       *
       * @return {Void}
       */
      addBindings: function addBindings() {
        for (var i = 0; i < this._c.length; i++) {
          this.bind(this._c[i].children);
        }
      },


      /**
       * Removes handles from the each group of controls.
       *
       * @return {Void}
       */
      removeBindings: function removeBindings() {
        for (var i = 0; i < this._c.length; i++) {
          this.unbind(this._c[i].children);
        }
      },


      /**
       * Binds events to arrows HTML elements.
       *
       * @param {HTMLCollection} elements
       * @return {Void}
       */
      bind: function bind(elements) {
        for (var i = 0; i < elements.length; i++) {
          Binder.on('click', elements[i], this.click);
          Binder.on('touchstart', elements[i], this.click, capture);
        }
      },


      /**
       * Unbinds events binded to the arrows HTML elements.
       *
       * @param {HTMLCollection} elements
       * @return {Void}
       */
      unbind: function unbind(elements) {
        for (var i = 0; i < elements.length; i++) {
          Binder.off(['click', 'touchstart'], elements[i]);
        }
      },


      /**
       * Handles `click` event on the arrows HTML elements.
       * Moves slider in driection precised in
       * `data-glide-dir` attribute.
       *
       * @param {Object} event
       * @return {Void}
       */
      click: function click(event) {
        event.preventDefault();

        Components.Run.make(Components.Direction.resolve(event.currentTarget.getAttribute('data-glide-dir')));
      }
    };

    define(Controls, 'items', {
      /**
       * Gets collection of the controls HTML elements.
       *
       * @return {HTMLElement[]}
       */
      get: function get() {
        return Controls._c;
      }
    });

    /**
     * Swap active class of current navigation item:
     * - after mounting to set it to initial index
     * - after each move to the new index
     */
    Events.on(['mount.after', 'move.after'], function () {
      Controls.setActive();
    });

    /**
     * Remove bindings and HTML Classes:
     * - on destroying, to bring markup to its initial state
     */
    Events.on('destroy', function () {
      Controls.removeBindings();
      Controls.removeActive();
      Binder.destroy();
    });

    return Controls;
  }

  function Keyboard (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Keyboard = {
      /**
       * Binds keyboard events on component mount.
       *
       * @return {Void}
       */
      mount: function mount() {
        if (Glide.settings.keyboard) {
          this.bind();
        }
      },


      /**
       * Adds keyboard press events.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('keyup', document, this.press);
      },


      /**
       * Removes keyboard press events.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('keyup', document);
      },


      /**
       * Handles keyboard's arrows press and moving glide foward and backward.
       *
       * @param  {Object} event
       * @return {Void}
       */
      press: function press(event) {
        if (event.keyCode === 39) {
          Components.Run.make(Components.Direction.resolve('>'));
        }

        if (event.keyCode === 37) {
          Components.Run.make(Components.Direction.resolve('<'));
        }
      }
    };

    /**
     * Remove bindings from keyboard:
     * - on destroying to remove added events
     * - on updating to remove events before remounting
     */
    Events.on(['destroy', 'update'], function () {
      Keyboard.unbind();
    });

    /**
     * Remount component
     * - on updating to reflect potential changes in settings
     */
    Events.on('update', function () {
      Keyboard.mount();
    });

    /**
     * Destroy binder:
     * - on destroying to remove listeners
     */
    Events.on('destroy', function () {
      Binder.destroy();
    });

    return Keyboard;
  }

  function Autoplay (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Autoplay = {
      /**
       * Initializes autoplaying and events.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.start();

        if (Glide.settings.hoverpause) {
          this.bind();
        }
      },


      /**
       * Starts autoplaying in configured interval.
       *
       * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
       * @return {Void}
       */
      start: function start() {
        var _this = this;

        if (Glide.settings.autoplay) {
          if (isUndefined(this._i)) {
            this._i = setInterval(function () {
              _this.stop();

              Components.Run.make('>');

              _this.start();
            }, this.time);
          }
        }
      },


      /**
       * Stops autorunning of the glide.
       *
       * @return {Void}
       */
      stop: function stop() {
        this._i = clearInterval(this._i);
      },


      /**
       * Stops autoplaying while mouse is over glide's area.
       *
       * @return {Void}
       */
      bind: function bind() {
        var _this2 = this;

        Binder.on('mouseover', Components.Html.root, function () {
          _this2.stop();
        });

        Binder.on('mouseout', Components.Html.root, function () {
          _this2.start();
        });
      },


      /**
       * Unbind mouseover events.
       *
       * @returns {Void}
       */
      unbind: function unbind() {
        Binder.off(['mouseover', 'mouseout'], Components.Html.root);
      }
    };

    define(Autoplay, 'time', {
      /**
       * Gets time period value for the autoplay interval. Prioritizes
       * times in `data-glide-autoplay` attrubutes over options.
       *
       * @return {Number}
       */
      get: function get() {
        var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

        if (autoplay) {
          return toInt(autoplay);
        }

        return toInt(Glide.settings.autoplay);
      }
    });

    /**
     * Stop autoplaying and unbind events:
     * - on destroying, to clear defined interval
     * - on updating via API to reset interval that may changed
     */
    Events.on(['destroy', 'update'], function () {
      Autoplay.unbind();
    });

    /**
     * Stop autoplaying:
     * - before each run, to restart autoplaying
     * - on pausing via API
     * - on destroying, to clear defined interval
     * - while starting a swipe
     * - on updating via API to reset interval that may changed
     */
    Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], function () {
      Autoplay.stop();
    });

    /**
     * Start autoplaying:
     * - after each run, to restart autoplaying
     * - on playing via API
     * - while ending a swipe
     */
    Events.on(['run.after', 'play', 'swipe.end'], function () {
      Autoplay.start();
    });

    /**
     * Remount autoplaying:
     * - on updating via API to reset interval that may changed
     */
    Events.on('update', function () {
      Autoplay.mount();
    });

    /**
     * Destroy a binder:
     * - on destroying glide instance to clearup listeners
     */
    Events.on('destroy', function () {
      Binder.destroy();
    });

    return Autoplay;
  }

  /**
   * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
   *
   * @param {Object} points
   * @returns {Object}
   */
  function sortBreakpoints(points) {
    if (isObject(points)) {
      return sortKeys(points);
    } else {
      warn('Breakpoints option must be an object');
    }

    return {};
  }

  function Breakpoints (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    /**
     * Holds reference to settings.
     *
     * @type {Object}
     */
    var settings = Glide.settings;

    /**
     * Holds reference to breakpoints object in settings. Sorts breakpoints
     * from smaller to larger. It is required in order to proper
     * matching currently active breakpoint settings.
     *
     * @type {Object}
     */
    var points = sortBreakpoints(settings.breakpoints);

    /**
     * Cache initial settings before overwritting.
     *
     * @type {Object}
     */
    var defaults = _extends({}, settings);

    var Breakpoints = {
      /**
       * Matches settings for currectly matching media breakpoint.
       *
       * @param {Object} points
       * @returns {Object}
       */
      match: function match(points) {
        if (typeof window.matchMedia !== 'undefined') {
          for (var point in points) {
            if (points.hasOwnProperty(point)) {
              if (window.matchMedia('(max-width: ' + point + 'px)').matches) {
                return points[point];
              }
            }
          }
        }

        return defaults;
      }
    };

    /**
     * Overwrite instance settings with currently matching breakpoint settings.
     * This happens right after component initialization.
     */
    _extends(settings, Breakpoints.match(points));

    /**
     * Update glide with settings of matched brekpoint:
     * - window resize to update slider
     */
    Binder.on('resize', window, throttle(function () {
      Glide.settings = mergeOptions(settings, Breakpoints.match(points));
    }, Glide.settings.throttle));

    /**
     * Resort and update default settings:
     * - on reinit via API, so breakpoint matching will be performed with options
     */
    Events.on('update', function () {
      points = sortBreakpoints(points);

      defaults = _extends({}, settings);
    });

    /**
     * Unbind resize listener:
     * - on destroying, to bring markup to its initial state
     */
    Events.on('destroy', function () {
      Binder.off('resize', window);
    });

    return Breakpoints;
  }

  var COMPONENTS = {
    // Required
    Html: Html,
    Translate: Translate,
    Transition: Transition,
    Direction: Direction,
    Peek: Peek,
    Sizes: Sizes,
    Gaps: Gaps,
    Move: Move,
    Clones: Clones,
    Resize: Resize,
    Build: Build,
    Run: Run,

    // Optional
    Swipe: Swipe,
    Images: Images,
    Anchors: Anchors,
    Controls: Controls,
    Keyboard: Keyboard,
    Autoplay: Autoplay,
    Breakpoints: Breakpoints
  };

  var Glide$1 = function (_Core) {
    inherits(Glide$$1, _Core);

    function Glide$$1() {
      classCallCheck(this, Glide$$1);
      return possibleConstructorReturn(this, (Glide$$1.__proto__ || Object.getPrototypeOf(Glide$$1)).apply(this, arguments));
    }

    createClass(Glide$$1, [{
      key: 'mount',
      value: function mount() {
        var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return get(Glide$$1.prototype.__proto__ || Object.getPrototypeOf(Glide$$1.prototype), 'mount', this).call(this, _extends({}, COMPONENTS, extensions));
      }
    }]);
    return Glide$$1;
  }(Glide);

  return Glide$1;

})));

},{}],"lottie":[function(require,module,exports){
"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}typeof navigator!=="undefined"&&function(root,factory){if(typeof define==="function"&&define.amd){define(function(){return factory(root);});}else if((typeof module==="undefined"?"undefined":_typeof(module))==="object"&&module.exports){module.exports=factory(root);}else{root.lottie=factory(root);root.bodymovin=root.lottie;}}(window||{},function(window){"use strict";var svgNS="http://www.w3.org/2000/svg";var locationHref='';var initialDefaultFrame=-999999;var subframeEnabled=true;var expressionsPlugin;var isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);var cachedColors={};var bm_rounder=Math.round;var bm_rnd;var bm_pow=Math.pow;var bm_sqrt=Math.sqrt;var bm_abs=Math.abs;var bm_floor=Math.floor;var bm_max=Math.max;var bm_min=Math.min;var blitter=10;var BMMath={};(function(){var propertyNames=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"];var i,len=propertyNames.length;for(i=0;i<len;i+=1){BMMath[propertyNames[i]]=Math[propertyNames[i]];}})();function ProjectInterface(){return{};}BMMath.random=Math.random;BMMath.abs=function(val){var tOfVal=_typeof(val);if(tOfVal==='object'&&val.length){var absArr=createSizedArray(val.length);var i,len=val.length;for(i=0;i<len;i+=1){absArr[i]=Math.abs(val[i]);}return absArr;}return Math.abs(val);};var defaultCurveSegments=150;var degToRads=Math.PI/180;var roundCorner=0.5519;function roundValues(flag){if(flag){bm_rnd=Math.round;}else{bm_rnd=function bm_rnd(val){return val;};}}roundValues(false);function styleDiv(element){element.style.position='absolute';element.style.top=0;element.style.left=0;element.style.display='block';element.style.transformOrigin=element.style.webkitTransformOrigin='0 0';element.style.backfaceVisibility=element.style.webkitBackfaceVisibility='visible';element.style.transformStyle=element.style.webkitTransformStyle=element.style.mozTransformStyle="preserve-3d";}function BMEnterFrameEvent(type,currentTime,totalTime,frameMultiplier){this.type=type;this.currentTime=currentTime;this.totalTime=totalTime;this.direction=frameMultiplier<0?-1:1;}function BMCompleteEvent(type,frameMultiplier){this.type=type;this.direction=frameMultiplier<0?-1:1;}function BMCompleteLoopEvent(type,totalLoops,currentLoop,frameMultiplier){this.type=type;this.currentLoop=currentLoop;this.totalLoops=totalLoops;this.direction=frameMultiplier<0?-1:1;}function BMSegmentStartEvent(type,firstFrame,totalFrames){this.type=type;this.firstFrame=firstFrame;this.totalFrames=totalFrames;}function BMDestroyEvent(type,target){this.type=type;this.target=target;}function BMRenderFrameErrorEvent(nativeError,currentTime){this.type='renderFrameError';this.nativeError=nativeError;this.currentTime=currentTime;}function BMConfigErrorEvent(nativeError){this.type='configError';this.nativeError=nativeError;}function BMAnimationConfigErrorEvent(type,nativeError){this.type=type;this.nativeError=nativeError;this.currentTime=currentTime;}var createElementID=function(){var _count=0;return function createID(){return'__lottie_element_'+ ++_count;};}();function HSVtoRGB(h,s,v){var r,g,b,i,f,p,q,t;i=Math.floor(h*6);f=h*6-i;p=v*(1-s);q=v*(1-f*s);t=v*(1-(1-f)*s);switch(i%6){case 0:r=v;g=t;b=p;break;case 1:r=q;g=v;b=p;break;case 2:r=p;g=v;b=t;break;case 3:r=p;g=q;b=v;break;case 4:r=t;g=p;b=v;break;case 5:r=v;g=p;b=q;break;}return[r,g,b];}function RGBtoHSV(r,g,b){var max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min,h,s=max===0?0:d/max,v=max/255;switch(max){case min:h=0;break;case r:h=g-b+d*(g<b?6:0);h/=6*d;break;case g:h=b-r+d*2;h/=6*d;break;case b:h=r-g+d*4;h/=6*d;break;}return[h,s,v];}function addSaturationToRGB(color,offset){var hsv=RGBtoHSV(color[0]*255,color[1]*255,color[2]*255);hsv[1]+=offset;if(hsv[1]>1){hsv[1]=1;}else if(hsv[1]<=0){hsv[1]=0;}return HSVtoRGB(hsv[0],hsv[1],hsv[2]);}function addBrightnessToRGB(color,offset){var hsv=RGBtoHSV(color[0]*255,color[1]*255,color[2]*255);hsv[2]+=offset;if(hsv[2]>1){hsv[2]=1;}else if(hsv[2]<0){hsv[2]=0;}return HSVtoRGB(hsv[0],hsv[1],hsv[2]);}function addHueToRGB(color,offset){var hsv=RGBtoHSV(color[0]*255,color[1]*255,color[2]*255);hsv[0]+=offset/360;if(hsv[0]>1){hsv[0]-=1;}else if(hsv[0]<0){hsv[0]+=1;}return HSVtoRGB(hsv[0],hsv[1],hsv[2]);}var rgbToHex=function(){var colorMap=[];var i;var hex;for(i=0;i<256;i+=1){hex=i.toString(16);colorMap[i]=hex.length==1?'0'+hex:hex;}return function(r,g,b){if(r<0){r=0;}if(g<0){g=0;}if(b<0){b=0;}return'#'+colorMap[r]+colorMap[g]+colorMap[b];};}();function BaseEvent(){}BaseEvent.prototype={triggerEvent:function triggerEvent(eventName,args){if(this._cbs[eventName]){var len=this._cbs[eventName].length;for(var i=0;i<len;i++){this._cbs[eventName][i](args);}}},addEventListener:function addEventListener(eventName,callback){if(!this._cbs[eventName]){this._cbs[eventName]=[];}this._cbs[eventName].push(callback);return function(){this.removeEventListener(eventName,callback);}.bind(this);},removeEventListener:function removeEventListener(eventName,callback){if(!callback){this._cbs[eventName]=null;}else if(this._cbs[eventName]){var i=0,len=this._cbs[eventName].length;while(i<len){if(this._cbs[eventName][i]===callback){this._cbs[eventName].splice(i,1);i-=1;len-=1;}i+=1;}if(!this._cbs[eventName].length){this._cbs[eventName]=null;}}}};var createTypedArray=function(){function createRegularArray(type,len){var i=0,arr=[],value;switch(type){case'int16':case'uint8c':value=1;break;default:value=1.1;break;}for(i=0;i<len;i+=1){arr.push(value);}return arr;}function createTypedArray(type,len){if(type==='float32'){return new Float32Array(len);}else if(type==='int16'){return new Int16Array(len);}else if(type==='uint8c'){return new Uint8ClampedArray(len);}}if(typeof Uint8ClampedArray==='function'&&typeof Float32Array==='function'){return createTypedArray;}else{return createRegularArray;}}();function createSizedArray(len){return Array.apply(null,{length:len});}function createNS(type){//return {appendChild:function(){},setAttribute:function(){},style:{}}
return document.createElementNS(svgNS,type);}function createTag(type){//return {appendChild:function(){},setAttribute:function(){},style:{}}
return document.createElement(type);}function DynamicPropertyContainer(){};DynamicPropertyContainer.prototype={addDynamicProperty:function addDynamicProperty(prop){if(this.dynamicProperties.indexOf(prop)===-1){this.dynamicProperties.push(prop);this.container.addDynamicProperty(this);this._isAnimated=true;}},iterateDynamicProperties:function iterateDynamicProperties(){this._mdf=false;var i,len=this.dynamicProperties.length;for(i=0;i<len;i+=1){this.dynamicProperties[i].getValue();if(this.dynamicProperties[i]._mdf){this._mdf=true;}}},initDynamicPropertyContainer:function initDynamicPropertyContainer(container){this.container=container;this.dynamicProperties=[];this._mdf=false;this._isAnimated=false;}};var getBlendMode=function(){var blendModeEnums={0:'source-over',1:'multiply',2:'screen',3:'overlay',4:'darken',5:'lighten',6:'color-dodge',7:'color-burn',8:'hard-light',9:'soft-light',10:'difference',11:'exclusion',12:'hue',13:'saturation',14:'color',15:'luminosity'};return function(mode){return blendModeEnums[mode]||'';};}();/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */ /**
     * 2D transformation matrix object initialized with identity matrix.
     *
     * The matrix can synchronize a canvas context by supplying the context
     * as an argument, or later apply current absolute transform to an
     * existing context.
     *
     * All values are handled as floating point values.
     *
     * @param {CanvasRenderingContext2D} [context] - Optional context to sync with Matrix
     * @prop {number} a - scale x
     * @prop {number} b - shear y
     * @prop {number} c - shear x
     * @prop {number} d - scale y
     * @prop {number} e - translate x
     * @prop {number} f - translate y
     * @prop {CanvasRenderingContext2D|null} [context=null] - set or get current canvas context
     * @constructor
     */var Matrix=function(){var _cos=Math.cos;var _sin=Math.sin;var _tan=Math.tan;var _rnd=Math.round;function reset(){this.props[0]=1;this.props[1]=0;this.props[2]=0;this.props[3]=0;this.props[4]=0;this.props[5]=1;this.props[6]=0;this.props[7]=0;this.props[8]=0;this.props[9]=0;this.props[10]=1;this.props[11]=0;this.props[12]=0;this.props[13]=0;this.props[14]=0;this.props[15]=1;return this;}function rotate(angle){if(angle===0){return this;}var mCos=_cos(angle);var mSin=_sin(angle);return this._t(mCos,-mSin,0,0,mSin,mCos,0,0,0,0,1,0,0,0,0,1);}function rotateX(angle){if(angle===0){return this;}var mCos=_cos(angle);var mSin=_sin(angle);return this._t(1,0,0,0,0,mCos,-mSin,0,0,mSin,mCos,0,0,0,0,1);}function rotateY(angle){if(angle===0){return this;}var mCos=_cos(angle);var mSin=_sin(angle);return this._t(mCos,0,mSin,0,0,1,0,0,-mSin,0,mCos,0,0,0,0,1);}function rotateZ(angle){if(angle===0){return this;}var mCos=_cos(angle);var mSin=_sin(angle);return this._t(mCos,-mSin,0,0,mSin,mCos,0,0,0,0,1,0,0,0,0,1);}function shear(sx,sy){return this._t(1,sy,sx,1,0,0);}function skew(ax,ay){return this.shear(_tan(ax),_tan(ay));}function skewFromAxis(ax,angle){var mCos=_cos(angle);var mSin=_sin(angle);return this._t(mCos,mSin,0,0,-mSin,mCos,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,_tan(ax),1,0,0,0,0,1,0,0,0,0,1)._t(mCos,-mSin,0,0,mSin,mCos,0,0,0,0,1,0,0,0,0,1);//return this._t(mCos, mSin, -mSin, mCos, 0, 0)._t(1, 0, _tan(ax), 1, 0, 0)._t(mCos, -mSin, mSin, mCos, 0, 0);
}function scale(sx,sy,sz){if(!sz&&sz!==0){sz=1;}if(sx===1&&sy===1&&sz===1){return this;}return this._t(sx,0,0,0,0,sy,0,0,0,0,sz,0,0,0,0,1);}function setTransform(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){this.props[0]=a;this.props[1]=b;this.props[2]=c;this.props[3]=d;this.props[4]=e;this.props[5]=f;this.props[6]=g;this.props[7]=h;this.props[8]=i;this.props[9]=j;this.props[10]=k;this.props[11]=l;this.props[12]=m;this.props[13]=n;this.props[14]=o;this.props[15]=p;return this;}function translate(tx,ty,tz){tz=tz||0;if(tx!==0||ty!==0||tz!==0){return this._t(1,0,0,0,0,1,0,0,0,0,1,0,tx,ty,tz,1);}return this;}function transform(a2,b2,c2,d2,e2,f2,g2,h2,i2,j2,k2,l2,m2,n2,o2,p2){var _p=this.props;if(a2===1&&b2===0&&c2===0&&d2===0&&e2===0&&f2===1&&g2===0&&h2===0&&i2===0&&j2===0&&k2===1&&l2===0){//NOTE: commenting this condition because TurboFan deoptimizes code when present
//if(m2 !== 0 || n2 !== 0 || o2 !== 0){
_p[12]=_p[12]*a2+_p[15]*m2;_p[13]=_p[13]*f2+_p[15]*n2;_p[14]=_p[14]*k2+_p[15]*o2;_p[15]=_p[15]*p2;//}
this._identityCalculated=false;return this;}var a1=_p[0];var b1=_p[1];var c1=_p[2];var d1=_p[3];var e1=_p[4];var f1=_p[5];var g1=_p[6];var h1=_p[7];var i1=_p[8];var j1=_p[9];var k1=_p[10];var l1=_p[11];var m1=_p[12];var n1=_p[13];var o1=_p[14];var p1=_p[15];/* matrix order (canvas compatible):
         * ace
         * bdf
         * 001
         */_p[0]=a1*a2+b1*e2+c1*i2+d1*m2;_p[1]=a1*b2+b1*f2+c1*j2+d1*n2;_p[2]=a1*c2+b1*g2+c1*k2+d1*o2;_p[3]=a1*d2+b1*h2+c1*l2+d1*p2;_p[4]=e1*a2+f1*e2+g1*i2+h1*m2;_p[5]=e1*b2+f1*f2+g1*j2+h1*n2;_p[6]=e1*c2+f1*g2+g1*k2+h1*o2;_p[7]=e1*d2+f1*h2+g1*l2+h1*p2;_p[8]=i1*a2+j1*e2+k1*i2+l1*m2;_p[9]=i1*b2+j1*f2+k1*j2+l1*n2;_p[10]=i1*c2+j1*g2+k1*k2+l1*o2;_p[11]=i1*d2+j1*h2+k1*l2+l1*p2;_p[12]=m1*a2+n1*e2+o1*i2+p1*m2;_p[13]=m1*b2+n1*f2+o1*j2+p1*n2;_p[14]=m1*c2+n1*g2+o1*k2+p1*o2;_p[15]=m1*d2+n1*h2+o1*l2+p1*p2;this._identityCalculated=false;return this;}function isIdentity(){if(!this._identityCalculated){this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1);this._identityCalculated=true;}return this._identity;}function equals(matr){var i=0;while(i<16){if(matr.props[i]!==this.props[i]){return false;}i+=1;}return true;}function clone(matr){var i;for(i=0;i<16;i+=1){matr.props[i]=this.props[i];}}function cloneFromProps(props){var i;for(i=0;i<16;i+=1){this.props[i]=props[i];}}function applyToPoint(x,y,z){return{x:x*this.props[0]+y*this.props[4]+z*this.props[8]+this.props[12],y:x*this.props[1]+y*this.props[5]+z*this.props[9]+this.props[13],z:x*this.props[2]+y*this.props[6]+z*this.props[10]+this.props[14]};/*return {
         x: x * me.a + y * me.c + me.e,
         y: x * me.b + y * me.d + me.f
         };*/}function applyToX(x,y,z){return x*this.props[0]+y*this.props[4]+z*this.props[8]+this.props[12];}function applyToY(x,y,z){return x*this.props[1]+y*this.props[5]+z*this.props[9]+this.props[13];}function applyToZ(x,y,z){return x*this.props[2]+y*this.props[6]+z*this.props[10]+this.props[14];}function getInverseMatrix(){var determinant=this.props[0]*this.props[5]-this.props[1]*this.props[4];var a=this.props[5]/determinant;var b=-this.props[1]/determinant;var c=-this.props[4]/determinant;var d=this.props[0]/determinant;var e=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/determinant;var f=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/determinant;var inverseMatrix=new Matrix();inverseMatrix.props[0]=a;inverseMatrix.props[1]=b;inverseMatrix.props[4]=c;inverseMatrix.props[5]=d;inverseMatrix.props[12]=e;inverseMatrix.props[13]=f;return inverseMatrix;}function inversePoint(pt){var inverseMatrix=this.getInverseMatrix();return inverseMatrix.applyToPointArray(pt[0],pt[1],pt[2]||0);}function inversePoints(pts){var i,len=pts.length,retPts=[];for(i=0;i<len;i+=1){retPts[i]=inversePoint(pts[i]);}return retPts;}function applyToTriplePoints(pt1,pt2,pt3){var arr=createTypedArray('float32',6);if(this.isIdentity()){arr[0]=pt1[0];arr[1]=pt1[1];arr[2]=pt2[0];arr[3]=pt2[1];arr[4]=pt3[0];arr[5]=pt3[1];}else{var p0=this.props[0],p1=this.props[1],p4=this.props[4],p5=this.props[5],p12=this.props[12],p13=this.props[13];arr[0]=pt1[0]*p0+pt1[1]*p4+p12;arr[1]=pt1[0]*p1+pt1[1]*p5+p13;arr[2]=pt2[0]*p0+pt2[1]*p4+p12;arr[3]=pt2[0]*p1+pt2[1]*p5+p13;arr[4]=pt3[0]*p0+pt3[1]*p4+p12;arr[5]=pt3[0]*p1+pt3[1]*p5+p13;}return arr;}function applyToPointArray(x,y,z){var arr;if(this.isIdentity()){arr=[x,y,z];}else{arr=[x*this.props[0]+y*this.props[4]+z*this.props[8]+this.props[12],x*this.props[1]+y*this.props[5]+z*this.props[9]+this.props[13],x*this.props[2]+y*this.props[6]+z*this.props[10]+this.props[14]];}return arr;}function applyToPointStringified(x,y){if(this.isIdentity()){return x+','+y;}var _p=this.props;return Math.round((x*_p[0]+y*_p[4]+_p[12])*100)/100+','+Math.round((x*_p[1]+y*_p[5]+_p[13])*100)/100;}function toCSS(){//Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
/*if(this.isIdentity()) {
            return '';
        }*/var i=0;var props=this.props;var cssValue='matrix3d(';var v=10000;while(i<16){cssValue+=_rnd(props[i]*v)/v;cssValue+=i===15?')':',';i+=1;}return cssValue;}function roundMatrixProperty(val){var v=10000;if(val<0.000001&&val>0||val>-0.000001&&val<0){return _rnd(val*v)/v;}return val;}function to2dCSS(){//Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
/*if(this.isIdentity()) {
            return '';
        }*/var props=this.props;var _a=roundMatrixProperty(props[0]);var _b=roundMatrixProperty(props[1]);var _c=roundMatrixProperty(props[4]);var _d=roundMatrixProperty(props[5]);var _e=roundMatrixProperty(props[12]);var _f=roundMatrixProperty(props[13]);return"matrix("+_a+','+_b+','+_c+','+_d+','+_e+','+_f+")";}return function(){this.reset=reset;this.rotate=rotate;this.rotateX=rotateX;this.rotateY=rotateY;this.rotateZ=rotateZ;this.skew=skew;this.skewFromAxis=skewFromAxis;this.shear=shear;this.scale=scale;this.setTransform=setTransform;this.translate=translate;this.transform=transform;this.applyToPoint=applyToPoint;this.applyToX=applyToX;this.applyToY=applyToY;this.applyToZ=applyToZ;this.applyToPointArray=applyToPointArray;this.applyToTriplePoints=applyToTriplePoints;this.applyToPointStringified=applyToPointStringified;this.toCSS=toCSS;this.to2dCSS=to2dCSS;this.clone=clone;this.cloneFromProps=cloneFromProps;this.equals=equals;this.inversePoints=inversePoints;this.inversePoint=inversePoint;this.getInverseMatrix=getInverseMatrix;this._t=this.transform;this.isIdentity=isIdentity;this._identity=true;this._identityCalculated=false;this.props=createTypedArray('float32',16);this.reset();};}();/*
 Copyright 2014 David Bau.

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */(function(pool,math){//
// The following constants are related to IEEE 754 limits.
//
var global=this,width=256,// each RC4 output is 0 <= x < 256
chunks=6,// at least six RC4 outputs for each double
digits=52,// there are 52 significant digits in a double
rngname='random',// rngname: name for Math.random and Math.seedrandom
startdenom=math.pow(width,chunks),significance=math.pow(2,digits),overflow=significance*2,mask=width-1,nodecrypto;// node.js crypto module, initialized at the bottom.
//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed,options,callback){var key=[];options=options===true?{entropy:true}:options||{};// Flatten the seed string or build one from local entropy if needed.
var shortseed=mixkey(flatten(options.entropy?[seed,tostring(pool)]:seed===null?autoseed():seed,3),key);// Use the seed to initialize an ARC4 generator.
var arc4=new ARC4(key);// This function returns a random double in [0, 1) that contains
// randomness in every bit of the mantissa of the IEEE 754 value.
var prng=function prng(){var n=arc4.g(chunks),// Start with a numerator n < 2 ^ 48
d=startdenom,//   and denominator d = 2 ^ 48.
x=0;//   and no 'extra last byte'.
while(n<significance){// Fill up all significant digits by
n=(n+x)*width;//   shifting numerator and
d*=width;//   denominator and generating a
x=arc4.g(1);//   new least-significant-byte.
}while(n>=overflow){// To avoid rounding up, before adding
n/=2;//   last byte, shift everything
d/=2;//   right using integer math until
x>>>=1;//   we have exactly the desired bits.
}return(n+x)/d;// Form the number within [0, 1).
};prng.int32=function(){return arc4.g(4)|0;};prng.quick=function(){return arc4.g(4)/0x100000000;};prng["double"]=prng;// Mix the randomness into accumulated entropy.
mixkey(tostring(arc4.S),pool);// Calling convention: what to return as a function of prng, seed, is_math.
return(options.pass||callback||function(prng,seed,is_math_call,state){if(state){// Load the arc4 state from the given state if it has an S array.
if(state.S){copy(state,arc4);}// Only provide the .state method if requested via options.state.
prng.state=function(){return copy(arc4,{});};}// If called as a method of Math (Math.seedrandom()), mutate
// Math.random because that is how seedrandom.js has worked since v1.0.
if(is_math_call){math[rngname]=prng;return seed;}// Otherwise, it is a newer calling convention, so return the
// prng directly.
else return prng;})(prng,shortseed,'global'in options?options.global:this==math,options.state);}math['seed'+rngname]=seedrandom;//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key){var t,keylen=key.length,me=this,i=0,j=me.i=me.j=0,s=me.S=[];// The empty key [] is treated as [0].
if(!keylen){key=[keylen++];}// Set up S using the standard key scheduling algorithm.
while(i<width){s[i]=i++;}for(i=0;i<width;i++){s[i]=s[j=mask&j+key[i%keylen]+(t=s[i])];s[j]=t;}// The "g" method returns the next (count) outputs as one number.
me.g=function(count){// Using instance members instead of closure state nearly doubles speed.
var t,r=0,i=me.i,j=me.j,s=me.S;while(count--){t=s[i=mask&i+1];r=r*width+s[mask&(s[i]=s[j=mask&j+t])+(s[j]=t)];}me.i=i;me.j=j;return r;// For robust unpredictability, the function call below automatically
// discards an initial batch of values.  This is called RC4-drop[256].
// See http://google.com/search?q=rsa+fluhrer+response&btnI
};}//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f,t){t.i=f.i;t.j=f.j;t.S=f.S.slice();return t;}//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj,depth){var result=[],typ=_typeof(obj),prop;if(depth&&typ=='object'){for(prop in obj){try{result.push(flatten(obj[prop],depth-1));}catch(e){}}}return result.length?result:typ=='string'?obj:obj+'\0';}//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed,key){var stringseed=seed+'',smear,j=0;while(j<stringseed.length){key[mask&j]=mask&(smear^=key[mask&j]*19)+stringseed.charCodeAt(j++);}return tostring(key);}//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed(){try{if(nodecrypto){return tostring(nodecrypto.randomBytes(width));}var out=new Uint8Array(width);(global.crypto||global.msCrypto).getRandomValues(out);return tostring(out);}catch(e){var browser=global.navigator,plugins=browser&&browser.plugins;return[+new Date(),global,plugins,global.screen,tostring(pool)];}}//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a){return String.fromCharCode.apply(0,a);}//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(),pool);//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
// End anonymous scope, and pass initial values.
})([],// pool: entropy pool starts empty
BMMath// math: package containing random, pow, and seedrandom
);var BezierFactory=function(){/**
         * BezierEasing - use bezier curve for transition easing function
         * by Gaëtan Renaudeau 2014 - 2015 – MIT License
         *
         * Credits: is based on Firefox's nsSMILKeySpline.cpp
         * Usage:
         * var spline = BezierEasing([ 0.25, 0.1, 0.25, 1.0 ])
         * spline.get(x) => returns the easing value | x must be in [0, 1] range
         *
         */var ob={};ob.getBezierEasing=getBezierEasing;var beziers={};function getBezierEasing(a,b,c,d,nm){var str=nm||('bez_'+a+'_'+b+'_'+c+'_'+d).replace(/\./g,'p');if(beziers[str]){return beziers[str];}var bezEasing=new BezierEasing([a,b,c,d]);beziers[str]=bezEasing;return bezEasing;}// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS=4;var NEWTON_MIN_SLOPE=0.001;var SUBDIVISION_PRECISION=0.0000001;var SUBDIVISION_MAX_ITERATIONS=10;var kSplineTableSize=11;var kSampleStepSize=1.0/(kSplineTableSize-1.0);var float32ArraySupported=typeof Float32Array==="function";function A(aA1,aA2){return 1.0-3.0*aA2+3.0*aA1;}function B(aA1,aA2){return 3.0*aA2-6.0*aA1;}function C(aA1){return 3.0*aA1;}// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT,aA1,aA2){return((A(aA1,aA2)*aT+B(aA1,aA2))*aT+C(aA1))*aT;}// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT,aA1,aA2){return 3.0*A(aA1,aA2)*aT*aT+2.0*B(aA1,aA2)*aT+C(aA1);}function binarySubdivide(aX,aA,aB,mX1,mX2){var currentX,currentT,i=0;do{currentT=aA+(aB-aA)/2.0;currentX=calcBezier(currentT,mX1,mX2)-aX;if(currentX>0.0){aB=currentT;}else{aA=currentT;}}while(Math.abs(currentX)>SUBDIVISION_PRECISION&&++i<SUBDIVISION_MAX_ITERATIONS);return currentT;}function newtonRaphsonIterate(aX,aGuessT,mX1,mX2){for(var i=0;i<NEWTON_ITERATIONS;++i){var currentSlope=getSlope(aGuessT,mX1,mX2);if(currentSlope===0.0)return aGuessT;var currentX=calcBezier(aGuessT,mX1,mX2)-aX;aGuessT-=currentX/currentSlope;}return aGuessT;}/**
         * points is an array of [ mX1, mY1, mX2, mY2 ]
         */function BezierEasing(points){this._p=points;this._mSampleValues=float32ArraySupported?new Float32Array(kSplineTableSize):new Array(kSplineTableSize);this._precomputed=false;this.get=this.get.bind(this);}BezierEasing.prototype={get:function get(x){var mX1=this._p[0],mY1=this._p[1],mX2=this._p[2],mY2=this._p[3];if(!this._precomputed)this._precompute();if(mX1===mY1&&mX2===mY2)return x;// linear
// Because JavaScript number are imprecise, we should guarantee the extremes are right.
if(x===0)return 0;if(x===1)return 1;return calcBezier(this._getTForX(x),mY1,mY2);},// Private part
_precompute:function _precompute(){var mX1=this._p[0],mY1=this._p[1],mX2=this._p[2],mY2=this._p[3];this._precomputed=true;if(mX1!==mY1||mX2!==mY2)this._calcSampleValues();},_calcSampleValues:function _calcSampleValues(){var mX1=this._p[0],mX2=this._p[2];for(var i=0;i<kSplineTableSize;++i){this._mSampleValues[i]=calcBezier(i*kSampleStepSize,mX1,mX2);}},/**
             * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
             */_getTForX:function _getTForX(aX){var mX1=this._p[0],mX2=this._p[2],mSampleValues=this._mSampleValues;var intervalStart=0.0;var currentSample=1;var lastSample=kSplineTableSize-1;for(;currentSample!==lastSample&&mSampleValues[currentSample]<=aX;++currentSample){intervalStart+=kSampleStepSize;}--currentSample;// Interpolate to provide an initial guess for t
var dist=(aX-mSampleValues[currentSample])/(mSampleValues[currentSample+1]-mSampleValues[currentSample]);var guessForT=intervalStart+dist*kSampleStepSize;var initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope>=NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT,mX1,mX2);}else if(initialSlope===0.0){return guessForT;}else{return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);}}};return ob;}();(function(){var lastTime=0;var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame'];}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(callback,element){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=setTimeout(function(){callback(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(id){clearTimeout(id);};})();function extendPrototype(sources,destination){var i,len=sources.length,sourcePrototype;for(i=0;i<len;i+=1){sourcePrototype=sources[i].prototype;for(var attr in sourcePrototype){if(sourcePrototype.hasOwnProperty(attr))destination.prototype[attr]=sourcePrototype[attr];}}}function getDescriptor(object,prop){return Object.getOwnPropertyDescriptor(object,prop);}function createProxyFunction(prototype){function ProxyFunction(){}ProxyFunction.prototype=prototype;return ProxyFunction;}function bezFunction(){var easingFunctions=[];var math=Math;function pointOnLine2D(x1,y1,x2,y2,x3,y3){var det1=x1*y2+y1*x3+x2*y3-x3*y2-y3*x1-x2*y1;return det1>-0.001&&det1<0.001;}function pointOnLine3D(x1,y1,z1,x2,y2,z2,x3,y3,z3){if(z1===0&&z2===0&&z3===0){return pointOnLine2D(x1,y1,x2,y2,x3,y3);}var dist1=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)+Math.pow(z2-z1,2));var dist2=Math.sqrt(Math.pow(x3-x1,2)+Math.pow(y3-y1,2)+Math.pow(z3-z1,2));var dist3=Math.sqrt(Math.pow(x3-x2,2)+Math.pow(y3-y2,2)+Math.pow(z3-z2,2));var diffDist;if(dist1>dist2){if(dist1>dist3){diffDist=dist1-dist2-dist3;}else{diffDist=dist3-dist2-dist1;}}else if(dist3>dist2){diffDist=dist3-dist2-dist1;}else{diffDist=dist2-dist1-dist3;}return diffDist>-0.0001&&diffDist<0.0001;}var getBezierLength=function(){return function(pt1,pt2,pt3,pt4){var curveSegments=defaultCurveSegments;var k;var i,len;var ptCoord,perc,addedLength=0;var ptDistance;var point=[],lastPoint=[];var lengthData=bezier_length_pool.newElement();len=pt3.length;for(k=0;k<curveSegments;k+=1){perc=k/(curveSegments-1);ptDistance=0;for(i=0;i<len;i+=1){ptCoord=bm_pow(1-perc,3)*pt1[i]+3*bm_pow(1-perc,2)*perc*pt3[i]+3*(1-perc)*bm_pow(perc,2)*pt4[i]+bm_pow(perc,3)*pt2[i];point[i]=ptCoord;if(lastPoint[i]!==null){ptDistance+=bm_pow(point[i]-lastPoint[i],2);}lastPoint[i]=point[i];}if(ptDistance){ptDistance=bm_sqrt(ptDistance);addedLength+=ptDistance;}lengthData.percents[k]=perc;lengthData.lengths[k]=addedLength;}lengthData.addedLength=addedLength;return lengthData;};}();function getSegmentsLength(shapeData){var segmentsLength=segments_length_pool.newElement();var closed=shapeData.c;var pathV=shapeData.v;var pathO=shapeData.o;var pathI=shapeData.i;var i,len=shapeData._length;var lengths=segmentsLength.lengths;var totalLength=0;for(i=0;i<len-1;i+=1){lengths[i]=getBezierLength(pathV[i],pathV[i+1],pathO[i],pathI[i+1]);totalLength+=lengths[i].addedLength;}if(closed&&len){lengths[i]=getBezierLength(pathV[i],pathV[0],pathO[i],pathI[0]);totalLength+=lengths[i].addedLength;}segmentsLength.totalLength=totalLength;return segmentsLength;}function BezierData(length){this.segmentLength=0;this.points=new Array(length);}function PointData(partial,point){this.partialLength=partial;this.point=point;}var buildBezierData=function(){var storedData={};return function(pt1,pt2,pt3,pt4){var bezierName=(pt1[0]+'_'+pt1[1]+'_'+pt2[0]+'_'+pt2[1]+'_'+pt3[0]+'_'+pt3[1]+'_'+pt4[0]+'_'+pt4[1]).replace(/\./g,'p');if(!storedData[bezierName]){var curveSegments=defaultCurveSegments;var k,i,len;var ptCoord,perc,addedLength=0;var ptDistance;var point,lastPoint=null;if(pt1.length===2&&(pt1[0]!=pt2[0]||pt1[1]!=pt2[1])&&pointOnLine2D(pt1[0],pt1[1],pt2[0],pt2[1],pt1[0]+pt3[0],pt1[1]+pt3[1])&&pointOnLine2D(pt1[0],pt1[1],pt2[0],pt2[1],pt2[0]+pt4[0],pt2[1]+pt4[1])){curveSegments=2;}var bezierData=new BezierData(curveSegments);len=pt3.length;for(k=0;k<curveSegments;k+=1){point=createSizedArray(len);perc=k/(curveSegments-1);ptDistance=0;for(i=0;i<len;i+=1){ptCoord=bm_pow(1-perc,3)*pt1[i]+3*bm_pow(1-perc,2)*perc*(pt1[i]+pt3[i])+3*(1-perc)*bm_pow(perc,2)*(pt2[i]+pt4[i])+bm_pow(perc,3)*pt2[i];point[i]=ptCoord;if(lastPoint!==null){ptDistance+=bm_pow(point[i]-lastPoint[i],2);}}ptDistance=bm_sqrt(ptDistance);addedLength+=ptDistance;bezierData.points[k]=new PointData(ptDistance,point);lastPoint=point;}bezierData.segmentLength=addedLength;storedData[bezierName]=bezierData;}return storedData[bezierName];};}();function getDistancePerc(perc,bezierData){var percents=bezierData.percents;var lengths=bezierData.lengths;var len=percents.length;var initPos=bm_floor((len-1)*perc);var lengthPos=perc*bezierData.addedLength;var lPerc=0;if(initPos===len-1||initPos===0||lengthPos===lengths[initPos]){return percents[initPos];}else{var dir=lengths[initPos]>lengthPos?-1:1;var flag=true;while(flag){if(lengths[initPos]<=lengthPos&&lengths[initPos+1]>lengthPos){lPerc=(lengthPos-lengths[initPos])/(lengths[initPos+1]-lengths[initPos]);flag=false;}else{initPos+=dir;}if(initPos<0||initPos>=len-1){//FIX for TypedArrays that don't store floating point values with enough accuracy
if(initPos===len-1){return percents[initPos];}flag=false;}}return percents[initPos]+(percents[initPos+1]-percents[initPos])*lPerc;}}function getPointInSegment(pt1,pt2,pt3,pt4,percent,bezierData){var t1=getDistancePerc(percent,bezierData);var u0=1;var u1=1-t1;var ptX=Math.round((u1*u1*u1*pt1[0]+(t1*u1*u1+u1*t1*u1+u1*u1*t1)*pt3[0]+(t1*t1*u1+u1*t1*t1+t1*u1*t1)*pt4[0]+t1*t1*t1*pt2[0])*1000)/1000;var ptY=Math.round((u1*u1*u1*pt1[1]+(t1*u1*u1+u1*t1*u1+u1*u1*t1)*pt3[1]+(t1*t1*u1+u1*t1*t1+t1*u1*t1)*pt4[1]+t1*t1*t1*pt2[1])*1000)/1000;return[ptX,ptY];}function getSegmentArray(){}var bezier_segment_points=createTypedArray('float32',8);function getNewSegment(pt1,pt2,pt3,pt4,startPerc,endPerc,bezierData){startPerc=startPerc<0?0:startPerc>1?1:startPerc;var t0=getDistancePerc(startPerc,bezierData);endPerc=endPerc>1?1:endPerc;var t1=getDistancePerc(endPerc,bezierData);var i,len=pt1.length;var u0=1-t0;var u1=1-t1;var u0u0u0=u0*u0*u0;var t0u0u0_3=t0*u0*u0*3;var t0t0u0_3=t0*t0*u0*3;var t0t0t0=t0*t0*t0;//
var u0u0u1=u0*u0*u1;var t0u0u1_3=t0*u0*u1+u0*t0*u1+u0*u0*t1;var t0t0u1_3=t0*t0*u1+u0*t0*t1+t0*u0*t1;var t0t0t1=t0*t0*t1;//
var u0u1u1=u0*u1*u1;var t0u1u1_3=t0*u1*u1+u0*t1*u1+u0*u1*t1;var t0t1u1_3=t0*t1*u1+u0*t1*t1+t0*u1*t1;var t0t1t1=t0*t1*t1;//
var u1u1u1=u1*u1*u1;var t1u1u1_3=t1*u1*u1+u1*t1*u1+u1*u1*t1;var t1t1u1_3=t1*t1*u1+u1*t1*t1+t1*u1*t1;var t1t1t1=t1*t1*t1;for(i=0;i<len;i+=1){bezier_segment_points[i*4]=Math.round((u0u0u0*pt1[i]+t0u0u0_3*pt3[i]+t0t0u0_3*pt4[i]+t0t0t0*pt2[i])*1000)/1000;bezier_segment_points[i*4+1]=Math.round((u0u0u1*pt1[i]+t0u0u1_3*pt3[i]+t0t0u1_3*pt4[i]+t0t0t1*pt2[i])*1000)/1000;bezier_segment_points[i*4+2]=Math.round((u0u1u1*pt1[i]+t0u1u1_3*pt3[i]+t0t1u1_3*pt4[i]+t0t1t1*pt2[i])*1000)/1000;bezier_segment_points[i*4+3]=Math.round((u1u1u1*pt1[i]+t1u1u1_3*pt3[i]+t1t1u1_3*pt4[i]+t1t1t1*pt2[i])*1000)/1000;}return bezier_segment_points;}return{getSegmentsLength:getSegmentsLength,getNewSegment:getNewSegment,getPointInSegment:getPointInSegment,buildBezierData:buildBezierData,pointOnLine2D:pointOnLine2D,pointOnLine3D:pointOnLine3D};}var bez=bezFunction();function dataFunctionManager(){//var tCanvasHelper = createTag('canvas').getContext('2d');
function completeLayers(layers,comps,fontManager){var layerData;var animArray,lastFrame;var i,len=layers.length;var j,jLen,k,kLen;for(i=0;i<len;i+=1){layerData=layers[i];if(!('ks'in layerData)||layerData.completed){continue;}layerData.completed=true;if(layerData.tt){layers[i-1].td=layerData.tt;}animArray=[];lastFrame=-1;if(layerData.hasMask){var maskProps=layerData.masksProperties;jLen=maskProps.length;for(j=0;j<jLen;j+=1){if(maskProps[j].pt.k.i){convertPathsToAbsoluteValues(maskProps[j].pt.k);}else{kLen=maskProps[j].pt.k.length;for(k=0;k<kLen;k+=1){if(maskProps[j].pt.k[k].s){convertPathsToAbsoluteValues(maskProps[j].pt.k[k].s[0]);}if(maskProps[j].pt.k[k].e){convertPathsToAbsoluteValues(maskProps[j].pt.k[k].e[0]);}}}}}if(layerData.ty===0){layerData.layers=findCompLayers(layerData.refId,comps);completeLayers(layerData.layers,comps,fontManager);}else if(layerData.ty===4){completeShapes(layerData.shapes);}else if(layerData.ty==5){completeText(layerData,fontManager);}}}function findCompLayers(id,comps){var i=0,len=comps.length;while(i<len){if(comps[i].id===id){if(!comps[i].layers.__used){comps[i].layers.__used=true;return comps[i].layers;}return JSON.parse(JSON.stringify(comps[i].layers));}i+=1;}}function completeShapes(arr){var i,len=arr.length;var j,jLen;var hasPaths=false;for(i=len-1;i>=0;i-=1){if(arr[i].ty=='sh'){if(arr[i].ks.k.i){convertPathsToAbsoluteValues(arr[i].ks.k);}else{jLen=arr[i].ks.k.length;for(j=0;j<jLen;j+=1){if(arr[i].ks.k[j].s){convertPathsToAbsoluteValues(arr[i].ks.k[j].s[0]);}if(arr[i].ks.k[j].e){convertPathsToAbsoluteValues(arr[i].ks.k[j].e[0]);}}}hasPaths=true;}else if(arr[i].ty=='gr'){completeShapes(arr[i].it);}}/*if(hasPaths){
            //mx: distance
            //ss: sensitivity
            //dc: decay
            arr.splice(arr.length-1,0,{
                "ty": "ms",
                "mx":20,
                "ss":10,
                 "dc":0.001,
                "maxDist":200
            });
        }*/}function convertPathsToAbsoluteValues(path){var i,len=path.i.length;for(i=0;i<len;i+=1){path.i[i][0]+=path.v[i][0];path.i[i][1]+=path.v[i][1];path.o[i][0]+=path.v[i][0];path.o[i][1]+=path.v[i][1];}}function checkVersion(minimum,animVersionString){var animVersion=animVersionString?animVersionString.split('.'):[100,100,100];if(minimum[0]>animVersion[0]){return true;}else if(animVersion[0]>minimum[0]){return false;}if(minimum[1]>animVersion[1]){return true;}else if(animVersion[1]>minimum[1]){return false;}if(minimum[2]>animVersion[2]){return true;}else if(animVersion[2]>minimum[2]){return false;}}var checkText=function(){var minimumVersion=[4,4,14];function updateTextLayer(textLayer){var documentData=textLayer.t.d;textLayer.t.d={k:[{s:documentData,t:0}]};}function iterateLayers(layers){var i,len=layers.length;for(i=0;i<len;i+=1){if(layers[i].ty===5){updateTextLayer(layers[i]);}}}return function(animationData){if(checkVersion(minimumVersion,animationData.v)){iterateLayers(animationData.layers);if(animationData.assets){var i,len=animationData.assets.length;for(i=0;i<len;i+=1){if(animationData.assets[i].layers){iterateLayers(animationData.assets[i].layers);}}}}};}();var checkChars=function(){var minimumVersion=[4,7,99];return function(animationData){if(animationData.chars&&!checkVersion(minimumVersion,animationData.v)){var i,len=animationData.chars.length,j,jLen,k,kLen;var pathData,paths;for(i=0;i<len;i+=1){if(animationData.chars[i].data&&animationData.chars[i].data.shapes){paths=animationData.chars[i].data.shapes[0].it;jLen=paths.length;for(j=0;j<jLen;j+=1){pathData=paths[j].ks.k;if(!pathData.__converted){convertPathsToAbsoluteValues(paths[j].ks.k);pathData.__converted=true;}}}}}};}();var checkColors=function(){var minimumVersion=[4,1,9];function iterateShapes(shapes){var i,len=shapes.length;var j,jLen;for(i=0;i<len;i+=1){if(shapes[i].ty==='gr'){iterateShapes(shapes[i].it);}else if(shapes[i].ty==='fl'||shapes[i].ty==='st'){if(shapes[i].c.k&&shapes[i].c.k[0].i){jLen=shapes[i].c.k.length;for(j=0;j<jLen;j+=1){if(shapes[i].c.k[j].s){shapes[i].c.k[j].s[0]/=255;shapes[i].c.k[j].s[1]/=255;shapes[i].c.k[j].s[2]/=255;shapes[i].c.k[j].s[3]/=255;}if(shapes[i].c.k[j].e){shapes[i].c.k[j].e[0]/=255;shapes[i].c.k[j].e[1]/=255;shapes[i].c.k[j].e[2]/=255;shapes[i].c.k[j].e[3]/=255;}}}else{shapes[i].c.k[0]/=255;shapes[i].c.k[1]/=255;shapes[i].c.k[2]/=255;shapes[i].c.k[3]/=255;}}}}function iterateLayers(layers){var i,len=layers.length;for(i=0;i<len;i+=1){if(layers[i].ty===4){iterateShapes(layers[i].shapes);}}}return function(animationData){if(checkVersion(minimumVersion,animationData.v)){iterateLayers(animationData.layers);if(animationData.assets){var i,len=animationData.assets.length;for(i=0;i<len;i+=1){if(animationData.assets[i].layers){iterateLayers(animationData.assets[i].layers);}}}}};}();var checkShapes=function(){var minimumVersion=[4,4,18];function completeShapes(arr){var i,len=arr.length;var j,jLen;var hasPaths=false;for(i=len-1;i>=0;i-=1){if(arr[i].ty=='sh'){if(arr[i].ks.k.i){arr[i].ks.k.c=arr[i].closed;}else{jLen=arr[i].ks.k.length;for(j=0;j<jLen;j+=1){if(arr[i].ks.k[j].s){arr[i].ks.k[j].s[0].c=arr[i].closed;}if(arr[i].ks.k[j].e){arr[i].ks.k[j].e[0].c=arr[i].closed;}}}hasPaths=true;}else if(arr[i].ty=='gr'){completeShapes(arr[i].it);}}}function iterateLayers(layers){var layerData;var i,len=layers.length;var j,jLen,k,kLen;for(i=0;i<len;i+=1){layerData=layers[i];if(layerData.hasMask){var maskProps=layerData.masksProperties;jLen=maskProps.length;for(j=0;j<jLen;j+=1){if(maskProps[j].pt.k.i){maskProps[j].pt.k.c=maskProps[j].cl;}else{kLen=maskProps[j].pt.k.length;for(k=0;k<kLen;k+=1){if(maskProps[j].pt.k[k].s){maskProps[j].pt.k[k].s[0].c=maskProps[j].cl;}if(maskProps[j].pt.k[k].e){maskProps[j].pt.k[k].e[0].c=maskProps[j].cl;}}}}}if(layerData.ty===4){completeShapes(layerData.shapes);}}}return function(animationData){if(checkVersion(minimumVersion,animationData.v)){iterateLayers(animationData.layers);if(animationData.assets){var i,len=animationData.assets.length;for(i=0;i<len;i+=1){if(animationData.assets[i].layers){iterateLayers(animationData.assets[i].layers);}}}}};}();function completeData(animationData,fontManager){if(animationData.__complete){return;}checkColors(animationData);checkText(animationData);checkChars(animationData);checkShapes(animationData);completeLayers(animationData.layers,animationData.assets,fontManager);animationData.__complete=true;//blitAnimation(animationData, animationData.assets, fontManager);
}function completeText(data,fontManager){if(data.t.a.length===0&&!('m'in data.t.p)){data.singleShape=true;}}var moduleOb={};moduleOb.completeData=completeData;moduleOb.checkColors=checkColors;moduleOb.checkChars=checkChars;moduleOb.checkShapes=checkShapes;moduleOb.completeLayers=completeLayers;return moduleOb;}var dataManager=dataFunctionManager();var FontManager=function(){var maxWaitingTime=5000;var emptyChar={w:0,size:0,shapes:[]};var combinedCharacters=[];//Hindi characters
combinedCharacters=combinedCharacters.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);function setUpNode(font,family){var parentNode=createTag('span');parentNode.style.fontFamily=family;var node=createTag('span');// Characters that vary significantly among different fonts
node.innerHTML='giItT1WQy@!-/#';// Visible - so we can measure it - but not on the screen
parentNode.style.position='absolute';parentNode.style.left='-10000px';parentNode.style.top='-10000px';// Large font size makes even subtle changes obvious
parentNode.style.fontSize='300px';// Reset any font properties
parentNode.style.fontVariant='normal';parentNode.style.fontStyle='normal';parentNode.style.fontWeight='normal';parentNode.style.letterSpacing='0';parentNode.appendChild(node);document.body.appendChild(parentNode);// Remember width with no applied web font
var width=node.offsetWidth;node.style.fontFamily=font+', '+family;return{node:node,w:width,parent:parentNode};}function checkLoadedFonts(){var i,len=this.fonts.length;var node,w;var loadedCount=len;for(i=0;i<len;i+=1){if(this.fonts[i].loaded){loadedCount-=1;continue;}if(this.fonts[i].fOrigin==='n'||this.fonts[i].origin===0){this.fonts[i].loaded=true;}else{node=this.fonts[i].monoCase.node;w=this.fonts[i].monoCase.w;if(node.offsetWidth!==w){loadedCount-=1;this.fonts[i].loaded=true;}else{node=this.fonts[i].sansCase.node;w=this.fonts[i].sansCase.w;if(node.offsetWidth!==w){loadedCount-=1;this.fonts[i].loaded=true;}}if(this.fonts[i].loaded){this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent);this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent);}}}if(loadedCount!==0&&Date.now()-this.initTime<maxWaitingTime){setTimeout(this.checkLoadedFonts.bind(this),20);}else{setTimeout(function(){this.isLoaded=true;}.bind(this),0);}}function createHelper(def,fontData){var tHelper=createNS('text');tHelper.style.fontSize='100px';//tHelper.style.fontFamily = fontData.fFamily;
tHelper.setAttribute('font-family',fontData.fFamily);tHelper.setAttribute('font-style',fontData.fStyle);tHelper.setAttribute('font-weight',fontData.fWeight);tHelper.textContent='1';if(fontData.fClass){tHelper.style.fontFamily='inherit';tHelper.setAttribute('class',fontData.fClass);}else{tHelper.style.fontFamily=fontData.fFamily;}def.appendChild(tHelper);var tCanvasHelper=createTag('canvas').getContext('2d');tCanvasHelper.font=fontData.fWeight+' '+fontData.fStyle+' 100px '+fontData.fFamily;//tCanvasHelper.font = ' 100px '+ fontData.fFamily;
return tHelper;}function addFonts(fontData,defs){if(!fontData){this.isLoaded=true;return;}if(this.chars){this.isLoaded=true;this.fonts=fontData.list;return;}var fontArr=fontData.list;var i,len=fontArr.length;var _pendingFonts=len;for(i=0;i<len;i+=1){var shouldLoadFont=true;var loadedSelector;var j;fontArr[i].loaded=false;fontArr[i].monoCase=setUpNode(fontArr[i].fFamily,'monospace');fontArr[i].sansCase=setUpNode(fontArr[i].fFamily,'sans-serif');if(!fontArr[i].fPath){fontArr[i].loaded=true;_pendingFonts-=1;}else if(fontArr[i].fOrigin==='p'||fontArr[i].origin===3){loadedSelector=document.querySelectorAll('style[f-forigin="p"][f-family="'+fontArr[i].fFamily+'"], style[f-origin="3"][f-family="'+fontArr[i].fFamily+'"]');if(loadedSelector.length>0){shouldLoadFont=false;}if(shouldLoadFont){var s=createTag('style');s.setAttribute('f-forigin',fontArr[i].fOrigin);s.setAttribute('f-origin',fontArr[i].origin);s.setAttribute('f-family',fontArr[i].fFamily);s.type="text/css";s.innerHTML="@font-face {"+"font-family: "+fontArr[i].fFamily+"; font-style: normal; src: url('"+fontArr[i].fPath+"');}";defs.appendChild(s);}}else if(fontArr[i].fOrigin==='g'||fontArr[i].origin===1){loadedSelector=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');for(j=0;j<loadedSelector.length;j++){if(loadedSelector[j].href.indexOf(fontArr[i].fPath)!==-1){// Font is already loaded
shouldLoadFont=false;}}if(shouldLoadFont){var l=createTag('link');l.setAttribute('f-forigin',fontArr[i].fOrigin);l.setAttribute('f-origin',fontArr[i].origin);l.type="text/css";l.rel="stylesheet";l.href=fontArr[i].fPath;document.body.appendChild(l);}}else if(fontArr[i].fOrigin==='t'||fontArr[i].origin===2){loadedSelector=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');for(j=0;j<loadedSelector.length;j++){if(fontArr[i].fPath===loadedSelector[j].src){// Font is already loaded
shouldLoadFont=false;}}if(shouldLoadFont){var sc=createTag('link');sc.setAttribute('f-forigin',fontArr[i].fOrigin);sc.setAttribute('f-origin',fontArr[i].origin);sc.setAttribute('rel','stylesheet');sc.setAttribute('href',fontArr[i].fPath);defs.appendChild(sc);}}fontArr[i].helper=createHelper(defs,fontArr[i]);fontArr[i].cache={};this.fonts.push(fontArr[i]);}if(_pendingFonts===0){this.isLoaded=true;}else{//On some cases even if the font is loaded, it won't load correctly when measuring text on canvas.
//Adding this timeout seems to fix it
setTimeout(this.checkLoadedFonts.bind(this),100);}}function addChars(chars){if(!chars){return;}if(!this.chars){this.chars=[];}var i,len=chars.length;var j,jLen=this.chars.length,found;for(i=0;i<len;i+=1){j=0;found=false;while(j<jLen){if(this.chars[j].style===chars[i].style&&this.chars[j].fFamily===chars[i].fFamily&&this.chars[j].ch===chars[i].ch){found=true;}j+=1;}if(!found){this.chars.push(chars[i]);jLen+=1;}}}function getCharData(_char,style,font){var i=0,len=this.chars.length;while(i<len){if(this.chars[i].ch===_char&&this.chars[i].style===style&&this.chars[i].fFamily===font){return this.chars[i];}i+=1;}if((typeof _char==='string'&&_char.charCodeAt(0)!==13||!_char)&&console&&console.warn){console.warn('Missing character from exported characters list: ',_char,style,font);}return emptyChar;}function measureText(_char2,fontName,size){var fontData=this.getFontByName(fontName);var index=_char2.charCodeAt(0);if(!fontData.cache[index+1]){var tHelper=fontData.helper;//Canvas version
//fontData.cache[index] = tHelper.measureText(char).width / 100;
//SVG version
//console.log(tHelper.getBBox().width)
if(_char2===' '){tHelper.textContent='|'+_char2+'|';var doubleSize=tHelper.getComputedTextLength();tHelper.textContent='||';var singleSize=tHelper.getComputedTextLength();fontData.cache[index+1]=(doubleSize-singleSize)/100;}else{tHelper.textContent=_char2;fontData.cache[index+1]=tHelper.getComputedTextLength()/100;}}return fontData.cache[index+1]*size;}function getFontByName(name){var i=0,len=this.fonts.length;while(i<len){if(this.fonts[i].fName===name){return this.fonts[i];}i+=1;}return this.fonts[0];}function getCombinedCharacterCodes(){return combinedCharacters;}function loaded(){return this.isLoaded;}var Font=function Font(){this.fonts=[];this.chars=null;this.typekitLoaded=0;this.isLoaded=false;this.initTime=Date.now();};//TODO: for now I'm adding these methods to the Class and not the prototype. Think of a better way to implement it.
Font.getCombinedCharacterCodes=getCombinedCharacterCodes;Font.prototype.addChars=addChars;Font.prototype.addFonts=addFonts;Font.prototype.getCharData=getCharData;Font.prototype.getFontByName=getFontByName;Font.prototype.measureText=measureText;Font.prototype.checkLoadedFonts=checkLoadedFonts;Font.prototype.loaded=loaded;return Font;}();var PropertyFactory=function(){var initFrame=initialDefaultFrame;var math_abs=Math.abs;function interpolateValue(frameNum,caching){var offsetTime=this.offsetTime;var newValue;if(this.propType==='multidimensional'){newValue=createTypedArray('float32',this.pv.length);}var iterationIndex=caching.lastIndex;var i=iterationIndex;var len=this.keyframes.length-1,flag=true;var keyData,nextKeyData;while(flag){keyData=this.keyframes[i];nextKeyData=this.keyframes[i+1];if(i===len-1&&frameNum>=nextKeyData.t-offsetTime){if(keyData.h){keyData=nextKeyData;}iterationIndex=0;break;}if(nextKeyData.t-offsetTime>frameNum){iterationIndex=i;break;}if(i<len-1){i+=1;}else{iterationIndex=0;flag=false;}}var k,kLen,perc,jLen,j,fnc;var nextKeyTime=nextKeyData.t-offsetTime;var keyTime=keyData.t-offsetTime;var endValue;if(keyData.to){if(!keyData.bezierData){keyData.bezierData=bez.buildBezierData(keyData.s,nextKeyData.s||keyData.e,keyData.to,keyData.ti);}var bezierData=keyData.bezierData;if(frameNum>=nextKeyTime||frameNum<keyTime){var ind=frameNum>=nextKeyTime?bezierData.points.length-1:0;kLen=bezierData.points[ind].point.length;for(k=0;k<kLen;k+=1){newValue[k]=bezierData.points[ind].point[k];}// caching._lastKeyframeIndex = -1;
}else{if(keyData.__fnct){fnc=keyData.__fnct;}else{fnc=BezierFactory.getBezierEasing(keyData.o.x,keyData.o.y,keyData.i.x,keyData.i.y,keyData.n).get;keyData.__fnct=fnc;}perc=fnc((frameNum-keyTime)/(nextKeyTime-keyTime));var distanceInLine=bezierData.segmentLength*perc;var segmentPerc;var addedLength=caching.lastFrame<frameNum&&caching._lastKeyframeIndex===i?caching._lastAddedLength:0;j=caching.lastFrame<frameNum&&caching._lastKeyframeIndex===i?caching._lastPoint:0;flag=true;jLen=bezierData.points.length;while(flag){addedLength+=bezierData.points[j].partialLength;if(distanceInLine===0||perc===0||j===bezierData.points.length-1){kLen=bezierData.points[j].point.length;for(k=0;k<kLen;k+=1){newValue[k]=bezierData.points[j].point[k];}break;}else if(distanceInLine>=addedLength&&distanceInLine<addedLength+bezierData.points[j+1].partialLength){segmentPerc=(distanceInLine-addedLength)/bezierData.points[j+1].partialLength;kLen=bezierData.points[j].point.length;for(k=0;k<kLen;k+=1){newValue[k]=bezierData.points[j].point[k]+(bezierData.points[j+1].point[k]-bezierData.points[j].point[k])*segmentPerc;}break;}if(j<jLen-1){j+=1;}else{flag=false;}}caching._lastPoint=j;caching._lastAddedLength=addedLength-bezierData.points[j].partialLength;caching._lastKeyframeIndex=i;}}else{var outX,outY,inX,inY,keyValue;len=keyData.s.length;endValue=nextKeyData.s||keyData.e;if(this.sh&&keyData.h!==1){if(frameNum>=nextKeyTime){newValue[0]=endValue[0];newValue[1]=endValue[1];newValue[2]=endValue[2];}else if(frameNum<=keyTime){newValue[0]=keyData.s[0];newValue[1]=keyData.s[1];newValue[2]=keyData.s[2];}else{var quatStart=createQuaternion(keyData.s);var quatEnd=createQuaternion(endValue);var time=(frameNum-keyTime)/(nextKeyTime-keyTime);quaternionToEuler(newValue,slerp(quatStart,quatEnd,time));}}else{for(i=0;i<len;i+=1){if(keyData.h!==1){if(frameNum>=nextKeyTime){perc=1;}else if(frameNum<keyTime){perc=0;}else{if(keyData.o.x.constructor===Array){if(!keyData.__fnct){keyData.__fnct=[];}if(!keyData.__fnct[i]){outX=typeof keyData.o.x[i]==='undefined'?keyData.o.x[0]:keyData.o.x[i];outY=typeof keyData.o.y[i]==='undefined'?keyData.o.y[0]:keyData.o.y[i];inX=typeof keyData.i.x[i]==='undefined'?keyData.i.x[0]:keyData.i.x[i];inY=typeof keyData.i.y[i]==='undefined'?keyData.i.y[0]:keyData.i.y[i];fnc=BezierFactory.getBezierEasing(outX,outY,inX,inY).get;keyData.__fnct[i]=fnc;}else{fnc=keyData.__fnct[i];}}else{if(!keyData.__fnct){outX=keyData.o.x;outY=keyData.o.y;inX=keyData.i.x;inY=keyData.i.y;fnc=BezierFactory.getBezierEasing(outX,outY,inX,inY).get;keyData.__fnct=fnc;}else{fnc=keyData.__fnct;}}perc=fnc((frameNum-keyTime)/(nextKeyTime-keyTime));}}endValue=nextKeyData.s||keyData.e;keyValue=keyData.h===1?keyData.s[i]:keyData.s[i]+(endValue[i]-keyData.s[i])*perc;if(this.propType==='multidimensional'){newValue[i]=keyValue;}else{newValue=keyValue;}}}}caching.lastIndex=iterationIndex;return newValue;}//based on @Toji's https://github.com/toji/gl-matrix/
function slerp(a,b,t){var out=[];var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=b[0],by=b[1],bz=b[2],bw=b[3];var omega,cosom,sinom,scale0,scale1;cosom=ax*bx+ay*by+az*bz+aw*bw;if(cosom<0.0){cosom=-cosom;bx=-bx;by=-by;bz=-bz;bw=-bw;}if(1.0-cosom>0.000001){omega=Math.acos(cosom);sinom=Math.sin(omega);scale0=Math.sin((1.0-t)*omega)/sinom;scale1=Math.sin(t*omega)/sinom;}else{scale0=1.0-t;scale1=t;}out[0]=scale0*ax+scale1*bx;out[1]=scale0*ay+scale1*by;out[2]=scale0*az+scale1*bz;out[3]=scale0*aw+scale1*bw;return out;}function quaternionToEuler(out,quat){var qx=quat[0];var qy=quat[1];var qz=quat[2];var qw=quat[3];var heading=Math.atan2(2*qy*qw-2*qx*qz,1-2*qy*qy-2*qz*qz);var attitude=Math.asin(2*qx*qy+2*qz*qw);var bank=Math.atan2(2*qx*qw-2*qy*qz,1-2*qx*qx-2*qz*qz);out[0]=heading/degToRads;out[1]=attitude/degToRads;out[2]=bank/degToRads;}function createQuaternion(values){var heading=values[0]*degToRads;var attitude=values[1]*degToRads;var bank=values[2]*degToRads;var c1=Math.cos(heading/2);var c2=Math.cos(attitude/2);var c3=Math.cos(bank/2);var s1=Math.sin(heading/2);var s2=Math.sin(attitude/2);var s3=Math.sin(bank/2);var w=c1*c2*c3-s1*s2*s3;var x=s1*s2*c3+c1*c2*s3;var y=s1*c2*c3+c1*s2*s3;var z=c1*s2*c3-s1*c2*s3;return[x,y,z,w];}function getValueAtCurrentTime(){var frameNum=this.comp.renderedFrame-this.offsetTime;var initTime=this.keyframes[0].t-this.offsetTime;var endTime=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(frameNum===this._caching.lastFrame||this._caching.lastFrame!==initFrame&&(this._caching.lastFrame>=endTime&&frameNum>=endTime||this._caching.lastFrame<initTime&&frameNum<initTime))){if(this._caching.lastFrame>=frameNum){this._caching._lastKeyframeIndex=-1;this._caching.lastIndex=0;}var renderResult=this.interpolateValue(frameNum,this._caching);this.pv=renderResult;}this._caching.lastFrame=frameNum;return this.pv;}function setVValue(val){var multipliedValue;if(this.propType==='unidimensional'){multipliedValue=val*this.mult;if(math_abs(this.v-multipliedValue)>0.00001){this.v=multipliedValue;this._mdf=true;}}else{var i=0,len=this.v.length;while(i<len){multipliedValue=val[i]*this.mult;if(math_abs(this.v[i]-multipliedValue)>0.00001){this.v[i]=multipliedValue;this._mdf=true;}i+=1;}}}function processEffectsSequence(){if(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length){return;}if(this.lock){this.setVValue(this.pv);return;}this.lock=true;this._mdf=this._isFirstFrame;var multipliedValue;var i,len=this.effectsSequence.length;var finalValue=this.kf?this.pv:this.data.k;for(i=0;i<len;i+=1){finalValue=this.effectsSequence[i](finalValue);}this.setVValue(finalValue);this._isFirstFrame=false;this.lock=false;this.frameId=this.elem.globalData.frameId;}function addEffect(effectFunction){this.effectsSequence.push(effectFunction);this.container.addDynamicProperty(this);}function ValueProperty(elem,data,mult,container){this.propType='unidimensional';this.mult=mult||1;this.data=data;this.v=mult?data.k*mult:data.k;this.pv=data.k;this._mdf=false;this.elem=elem;this.container=container;this.comp=elem.comp;this.k=false;this.kf=false;this.vel=0;this.effectsSequence=[];this._isFirstFrame=true;this.getValue=processEffectsSequence;this.setVValue=setVValue;this.addEffect=addEffect;}function MultiDimensionalProperty(elem,data,mult,container){this.propType='multidimensional';this.mult=mult||1;this.data=data;this._mdf=false;this.elem=elem;this.container=container;this.comp=elem.comp;this.k=false;this.kf=false;this.frameId=-1;var i,len=data.k.length;this.v=createTypedArray('float32',len);this.pv=createTypedArray('float32',len);var arr=createTypedArray('float32',len);this.vel=createTypedArray('float32',len);for(i=0;i<len;i+=1){this.v[i]=data.k[i]*this.mult;this.pv[i]=data.k[i];}this._isFirstFrame=true;this.effectsSequence=[];this.getValue=processEffectsSequence;this.setVValue=setVValue;this.addEffect=addEffect;}function KeyframedValueProperty(elem,data,mult,container){this.propType='unidimensional';this.keyframes=data.k;this.offsetTime=elem.data.st;this.frameId=-1;this._caching={lastFrame:initFrame,lastIndex:0,value:0,_lastKeyframeIndex:-1};this.k=true;this.kf=true;this.data=data;this.mult=mult||1;this.elem=elem;this.container=container;this.comp=elem.comp;this.v=initFrame;this.pv=initFrame;this._isFirstFrame=true;this.getValue=processEffectsSequence;this.setVValue=setVValue;this.interpolateValue=interpolateValue;this.effectsSequence=[getValueAtCurrentTime.bind(this)];this.addEffect=addEffect;}function KeyframedMultidimensionalProperty(elem,data,mult,container){this.propType='multidimensional';var i,len=data.k.length;var s,e,to,ti;for(i=0;i<len-1;i+=1){if(data.k[i].to&&data.k[i].s&&data.k[i+1]&&data.k[i+1].s){s=data.k[i].s;e=data.k[i+1].s;to=data.k[i].to;ti=data.k[i].ti;if(s.length===2&&!(s[0]===e[0]&&s[1]===e[1])&&bez.pointOnLine2D(s[0],s[1],e[0],e[1],s[0]+to[0],s[1]+to[1])&&bez.pointOnLine2D(s[0],s[1],e[0],e[1],e[0]+ti[0],e[1]+ti[1])||s.length===3&&!(s[0]===e[0]&&s[1]===e[1]&&s[2]===e[2])&&bez.pointOnLine3D(s[0],s[1],s[2],e[0],e[1],e[2],s[0]+to[0],s[1]+to[1],s[2]+to[2])&&bez.pointOnLine3D(s[0],s[1],s[2],e[0],e[1],e[2],e[0]+ti[0],e[1]+ti[1],e[2]+ti[2])){data.k[i].to=null;data.k[i].ti=null;}if(s[0]===e[0]&&s[1]===e[1]&&to[0]===0&&to[1]===0&&ti[0]===0&&ti[1]===0){if(s.length===2||s[2]===e[2]&&to[2]===0&&ti[2]===0){data.k[i].to=null;data.k[i].ti=null;}}}}this.effectsSequence=[getValueAtCurrentTime.bind(this)];this.keyframes=data.k;this.offsetTime=elem.data.st;this.k=true;this.kf=true;this._isFirstFrame=true;this.mult=mult||1;this.elem=elem;this.container=container;this.comp=elem.comp;this.getValue=processEffectsSequence;this.setVValue=setVValue;this.interpolateValue=interpolateValue;this.frameId=-1;var arrLen=data.k[0].s.length;this.v=createTypedArray('float32',arrLen);this.pv=createTypedArray('float32',arrLen);for(i=0;i<arrLen;i+=1){this.v[i]=initFrame;this.pv[i]=initFrame;}this._caching={lastFrame:initFrame,lastIndex:0,value:createTypedArray('float32',arrLen)};this.addEffect=addEffect;}function getProp(elem,data,type,mult,container){var p;if(!data.k.length){p=new ValueProperty(elem,data,mult,container);}else if(typeof data.k[0]==='number'){p=new MultiDimensionalProperty(elem,data,mult,container);}else{switch(type){case 0:p=new KeyframedValueProperty(elem,data,mult,container);break;case 1:p=new KeyframedMultidimensionalProperty(elem,data,mult,container);break;}}if(p.effectsSequence.length){container.addDynamicProperty(p);}return p;}var ob={getProp:getProp};return ob;}();var TransformPropertyFactory=function(){var defaultVector=[0,0];function applyToMatrix(mat){var _mdf=this._mdf;this.iterateDynamicProperties();this._mdf=this._mdf||_mdf;if(this.a){mat.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]);}if(this.s){mat.scale(this.s.v[0],this.s.v[1],this.s.v[2]);}if(this.sk){mat.skewFromAxis(-this.sk.v,this.sa.v);}if(this.r){mat.rotate(-this.r.v);}else{mat.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);}if(this.data.p.s){if(this.data.p.z){mat.translate(this.px.v,this.py.v,-this.pz.v);}else{mat.translate(this.px.v,this.py.v,0);}}else{mat.translate(this.p.v[0],this.p.v[1],-this.p.v[2]);}}function processKeys(forceRender){if(this.elem.globalData.frameId===this.frameId){return;}if(this._isDirty){this.precalculateMatrix();this._isDirty=false;}this.iterateDynamicProperties();if(this._mdf||forceRender){this.v.cloneFromProps(this.pre.props);if(this.appliedTransformations<1){this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]);}if(this.appliedTransformations<2){this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]);}if(this.sk&&this.appliedTransformations<3){this.v.skewFromAxis(-this.sk.v,this.sa.v);}if(this.r&&this.appliedTransformations<4){this.v.rotate(-this.r.v);}else if(!this.r&&this.appliedTransformations<4){this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);}if(this.autoOriented){var v1,v2,frameRate=this.elem.globalData.frameRate;if(this.p&&this.p.keyframes&&this.p.getValueAtTime){if(this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t){v1=this.p.getValueAtTime((this.p.keyframes[0].t+0.01)/frameRate,0);v2=this.p.getValueAtTime(this.p.keyframes[0].t/frameRate,0);}else if(this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t){v1=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/frameRate,0);v2=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-0.05)/frameRate,0);}else{v1=this.p.pv;v2=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-0.01)/frameRate,this.p.offsetTime);}}else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){v1=[];v2=[];var px=this.px,py=this.py,frameRate;if(px._caching.lastFrame+px.offsetTime<=px.keyframes[0].t){v1[0]=px.getValueAtTime((px.keyframes[0].t+0.01)/frameRate,0);v1[1]=py.getValueAtTime((py.keyframes[0].t+0.01)/frameRate,0);v2[0]=px.getValueAtTime(px.keyframes[0].t/frameRate,0);v2[1]=py.getValueAtTime(py.keyframes[0].t/frameRate,0);}else if(px._caching.lastFrame+px.offsetTime>=px.keyframes[px.keyframes.length-1].t){v1[0]=px.getValueAtTime(px.keyframes[px.keyframes.length-1].t/frameRate,0);v1[1]=py.getValueAtTime(py.keyframes[py.keyframes.length-1].t/frameRate,0);v2[0]=px.getValueAtTime((px.keyframes[px.keyframes.length-1].t-0.01)/frameRate,0);v2[1]=py.getValueAtTime((py.keyframes[py.keyframes.length-1].t-0.01)/frameRate,0);}else{v1=[px.pv,py.pv];v2[0]=px.getValueAtTime((px._caching.lastFrame+px.offsetTime-0.01)/frameRate,px.offsetTime);v2[1]=py.getValueAtTime((py._caching.lastFrame+py.offsetTime-0.01)/frameRate,py.offsetTime);}}else{v1=v2=defaultVector;}this.v.rotate(-Math.atan2(v1[1]-v2[1],v1[0]-v2[0]));}if(this.data.p&&this.data.p.s){if(this.data.p.z){this.v.translate(this.px.v,this.py.v,-this.pz.v);}else{this.v.translate(this.px.v,this.py.v,0);}}else{this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2]);}}this.frameId=this.elem.globalData.frameId;}function precalculateMatrix(){if(!this.a.k){this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]);this.appliedTransformations=1;}else{return;}if(!this.s.effectsSequence.length){this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]);this.appliedTransformations=2;}else{return;}if(this.sk){if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length){this.pre.skewFromAxis(-this.sk.v,this.sa.v);this.appliedTransformations=3;}else{return;}}if(this.r){if(!this.r.effectsSequence.length){this.pre.rotate(-this.r.v);this.appliedTransformations=4;}else{return;}}else if(!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length){this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);this.appliedTransformations=4;}}function autoOrient(){//
//var prevP = this.getValueAtTime();
}function addDynamicProperty(prop){this._addDynamicProperty(prop);this.elem.addDynamicProperty(prop);this._isDirty=true;}function TransformProperty(elem,data,container){this.elem=elem;this.frameId=-1;this.propType='transform';this.data=data;this.v=new Matrix();//Precalculated matrix with non animated properties
this.pre=new Matrix();this.appliedTransformations=0;this.initDynamicPropertyContainer(container||elem);if(data.p&&data.p.s){this.px=PropertyFactory.getProp(elem,data.p.x,0,0,this);this.py=PropertyFactory.getProp(elem,data.p.y,0,0,this);if(data.p.z){this.pz=PropertyFactory.getProp(elem,data.p.z,0,0,this);}}else{this.p=PropertyFactory.getProp(elem,data.p||{k:[0,0,0]},1,0,this);}if(data.rx){this.rx=PropertyFactory.getProp(elem,data.rx,0,degToRads,this);this.ry=PropertyFactory.getProp(elem,data.ry,0,degToRads,this);this.rz=PropertyFactory.getProp(elem,data.rz,0,degToRads,this);if(data.or.k[0].ti){var i,len=data.or.k.length;for(i=0;i<len;i+=1){data.or.k[i].to=data.or.k[i].ti=null;}}this.or=PropertyFactory.getProp(elem,data.or,1,degToRads,this);//sh Indicates it needs to be capped between -180 and 180
this.or.sh=true;}else{this.r=PropertyFactory.getProp(elem,data.r||{k:0},0,degToRads,this);}if(data.sk){this.sk=PropertyFactory.getProp(elem,data.sk,0,degToRads,this);this.sa=PropertyFactory.getProp(elem,data.sa,0,degToRads,this);}this.a=PropertyFactory.getProp(elem,data.a||{k:[0,0,0]},1,0,this);this.s=PropertyFactory.getProp(elem,data.s||{k:[100,100,100]},1,0.01,this);// Opacity is not part of the transform properties, that's why it won't use this.dynamicProperties. That way transforms won't get updated if opacity changes.
if(data.o){this.o=PropertyFactory.getProp(elem,data.o,0,0.01,elem);}else{this.o={_mdf:false,v:1};}this._isDirty=true;if(!this.dynamicProperties.length){this.getValue(true);}}TransformProperty.prototype={applyToMatrix:applyToMatrix,getValue:processKeys,precalculateMatrix:precalculateMatrix,autoOrient:autoOrient};extendPrototype([DynamicPropertyContainer],TransformProperty);TransformProperty.prototype.addDynamicProperty=addDynamicProperty;TransformProperty.prototype._addDynamicProperty=DynamicPropertyContainer.prototype.addDynamicProperty;function getTransformProperty(elem,data,container){return new TransformProperty(elem,data,container);}return{getTransformProperty:getTransformProperty};}();function ShapePath(){this.c=false;this._length=0;this._maxLength=8;this.v=createSizedArray(this._maxLength);this.o=createSizedArray(this._maxLength);this.i=createSizedArray(this._maxLength);}ShapePath.prototype.setPathData=function(closed,len){this.c=closed;this.setLength(len);var i=0;while(i<len){this.v[i]=point_pool.newElement();this.o[i]=point_pool.newElement();this.i[i]=point_pool.newElement();i+=1;}};ShapePath.prototype.setLength=function(len){while(this._maxLength<len){this.doubleArrayLength();}this._length=len;};ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(createSizedArray(this._maxLength));this.i=this.i.concat(createSizedArray(this._maxLength));this.o=this.o.concat(createSizedArray(this._maxLength));this._maxLength*=2;};ShapePath.prototype.setXYAt=function(x,y,type,pos,replace){var arr;this._length=Math.max(this._length,pos+1);if(this._length>=this._maxLength){this.doubleArrayLength();}switch(type){case'v':arr=this.v;break;case'i':arr=this.i;break;case'o':arr=this.o;break;}if(!arr[pos]||arr[pos]&&!replace){arr[pos]=point_pool.newElement();}arr[pos][0]=x;arr[pos][1]=y;};ShapePath.prototype.setTripleAt=function(vX,vY,oX,oY,iX,iY,pos,replace){this.setXYAt(vX,vY,'v',pos,replace);this.setXYAt(oX,oY,'o',pos,replace);this.setXYAt(iX,iY,'i',pos,replace);};ShapePath.prototype.reverse=function(){var newPath=new ShapePath();newPath.setPathData(this.c,this._length);var vertices=this.v,outPoints=this.o,inPoints=this.i;var init=0;if(this.c){newPath.setTripleAt(vertices[0][0],vertices[0][1],inPoints[0][0],inPoints[0][1],outPoints[0][0],outPoints[0][1],0,false);init=1;}var cnt=this._length-1;var len=this._length;var i;for(i=init;i<len;i+=1){newPath.setTripleAt(vertices[cnt][0],vertices[cnt][1],inPoints[cnt][0],inPoints[cnt][1],outPoints[cnt][0],outPoints[cnt][1],i,false);cnt-=1;}return newPath;};var ShapePropertyFactory=function(){var initFrame=-999999;function interpolateShape(frameNum,previousValue,caching){var iterationIndex=caching.lastIndex;var keyPropS,keyPropE,isHold,j,k,jLen,kLen,perc,vertexValue;var kf=this.keyframes;if(frameNum<kf[0].t-this.offsetTime){keyPropS=kf[0].s[0];isHold=true;iterationIndex=0;}else if(frameNum>=kf[kf.length-1].t-this.offsetTime){keyPropS=kf[kf.length-1].s?kf[kf.length-1].s[0]:kf[kf.length-2].e[0];/*if(kf[kf.length - 1].s){
                keyPropS = kf[kf.length - 1].s[0];
            }else{
                keyPropS = kf[kf.length - 2].e[0];
            }*/isHold=true;}else{var i=iterationIndex;var len=kf.length-1,flag=true,keyData,nextKeyData;while(flag){keyData=kf[i];nextKeyData=kf[i+1];if(nextKeyData.t-this.offsetTime>frameNum){break;}if(i<len-1){i+=1;}else{flag=false;}}isHold=keyData.h===1;iterationIndex=i;if(!isHold){if(frameNum>=nextKeyData.t-this.offsetTime){perc=1;}else if(frameNum<keyData.t-this.offsetTime){perc=0;}else{var fnc;if(keyData.__fnct){fnc=keyData.__fnct;}else{fnc=BezierFactory.getBezierEasing(keyData.o.x,keyData.o.y,keyData.i.x,keyData.i.y).get;keyData.__fnct=fnc;}perc=fnc((frameNum-(keyData.t-this.offsetTime))/(nextKeyData.t-this.offsetTime-(keyData.t-this.offsetTime)));}keyPropE=nextKeyData.s?nextKeyData.s[0]:keyData.e[0];}keyPropS=keyData.s[0];}jLen=previousValue._length;kLen=keyPropS.i[0].length;caching.lastIndex=iterationIndex;for(j=0;j<jLen;j+=1){for(k=0;k<kLen;k+=1){vertexValue=isHold?keyPropS.i[j][k]:keyPropS.i[j][k]+(keyPropE.i[j][k]-keyPropS.i[j][k])*perc;previousValue.i[j][k]=vertexValue;vertexValue=isHold?keyPropS.o[j][k]:keyPropS.o[j][k]+(keyPropE.o[j][k]-keyPropS.o[j][k])*perc;previousValue.o[j][k]=vertexValue;vertexValue=isHold?keyPropS.v[j][k]:keyPropS.v[j][k]+(keyPropE.v[j][k]-keyPropS.v[j][k])*perc;previousValue.v[j][k]=vertexValue;}}}function interpolateShapeCurrentTime(){var frameNum=this.comp.renderedFrame-this.offsetTime;var initTime=this.keyframes[0].t-this.offsetTime;var endTime=this.keyframes[this.keyframes.length-1].t-this.offsetTime;var lastFrame=this._caching.lastFrame;if(!(lastFrame!==initFrame&&(lastFrame<initTime&&frameNum<initTime||lastFrame>endTime&&frameNum>endTime))){////
this._caching.lastIndex=lastFrame<frameNum?this._caching.lastIndex:0;this.interpolateShape(frameNum,this.pv,this._caching);////
}this._caching.lastFrame=frameNum;return this.pv;}function resetShape(){this.paths=this.localShapeCollection;}function shapesEqual(shape1,shape2){if(shape1._length!==shape2._length||shape1.c!==shape2.c){return false;}var i,len=shape1._length;for(i=0;i<len;i+=1){if(shape1.v[i][0]!==shape2.v[i][0]||shape1.v[i][1]!==shape2.v[i][1]||shape1.o[i][0]!==shape2.o[i][0]||shape1.o[i][1]!==shape2.o[i][1]||shape1.i[i][0]!==shape2.i[i][0]||shape1.i[i][1]!==shape2.i[i][1]){return false;}}return true;}function setVValue(newPath){if(!shapesEqual(this.v,newPath)){this.v=shape_pool.clone(newPath);this.localShapeCollection.releaseShapes();this.localShapeCollection.addShape(this.v);this._mdf=true;this.paths=this.localShapeCollection;}}function processEffectsSequence(){if(this.elem.globalData.frameId===this.frameId){return;}else if(!this.effectsSequence.length){this._mdf=false;return;}if(this.lock){this.setVValue(this.pv);return;}this.lock=true;this._mdf=false;var finalValue=this.kf?this.pv:this.data.ks?this.data.ks.k:this.data.pt.k;var i,len=this.effectsSequence.length;for(i=0;i<len;i+=1){finalValue=this.effectsSequence[i](finalValue);}this.setVValue(finalValue);this.lock=false;this.frameId=this.elem.globalData.frameId;};function ShapeProperty(elem,data,type){this.propType='shape';this.comp=elem.comp;this.container=elem;this.elem=elem;this.data=data;this.k=false;this.kf=false;this._mdf=false;var pathData=type===3?data.pt.k:data.ks.k;this.v=shape_pool.clone(pathData);this.pv=shape_pool.clone(this.v);this.localShapeCollection=shapeCollection_pool.newShapeCollection();this.paths=this.localShapeCollection;this.paths.addShape(this.v);this.reset=resetShape;this.effectsSequence=[];}function addEffect(effectFunction){this.effectsSequence.push(effectFunction);this.container.addDynamicProperty(this);}ShapeProperty.prototype.interpolateShape=interpolateShape;ShapeProperty.prototype.getValue=processEffectsSequence;ShapeProperty.prototype.setVValue=setVValue;ShapeProperty.prototype.addEffect=addEffect;function KeyframedShapeProperty(elem,data,type){this.propType='shape';this.comp=elem.comp;this.elem=elem;this.container=elem;this.offsetTime=elem.data.st;this.keyframes=type===3?data.pt.k:data.ks.k;this.k=true;this.kf=true;var i,len=this.keyframes[0].s[0].i.length;var jLen=this.keyframes[0].s[0].i[0].length;this.v=shape_pool.newElement();this.v.setPathData(this.keyframes[0].s[0].c,len);this.pv=shape_pool.clone(this.v);this.localShapeCollection=shapeCollection_pool.newShapeCollection();this.paths=this.localShapeCollection;this.paths.addShape(this.v);this.lastFrame=initFrame;this.reset=resetShape;this._caching={lastFrame:initFrame,lastIndex:0};this.effectsSequence=[interpolateShapeCurrentTime.bind(this)];}KeyframedShapeProperty.prototype.getValue=processEffectsSequence;KeyframedShapeProperty.prototype.interpolateShape=interpolateShape;KeyframedShapeProperty.prototype.setVValue=setVValue;KeyframedShapeProperty.prototype.addEffect=addEffect;var EllShapeProperty=function(){var cPoint=roundCorner;function EllShapeProperty(elem,data){/*this.v = {
                v: createSizedArray(4),
                i: createSizedArray(4),
                o: createSizedArray(4),
                c: true
            };*/this.v=shape_pool.newElement();this.v.setPathData(true,4);this.localShapeCollection=shapeCollection_pool.newShapeCollection();this.paths=this.localShapeCollection;this.localShapeCollection.addShape(this.v);this.d=data.d;this.elem=elem;this.comp=elem.comp;this.frameId=-1;this.initDynamicPropertyContainer(elem);this.p=PropertyFactory.getProp(elem,data.p,1,0,this);this.s=PropertyFactory.getProp(elem,data.s,1,0,this);if(this.dynamicProperties.length){this.k=true;}else{this.k=false;this.convertEllToPath();}};EllShapeProperty.prototype={reset:resetShape,getValue:function getValue(){if(this.elem.globalData.frameId===this.frameId){return;}this.frameId=this.elem.globalData.frameId;this.iterateDynamicProperties();if(this._mdf){this.convertEllToPath();}},convertEllToPath:function convertEllToPath(){var p0=this.p.v[0],p1=this.p.v[1],s0=this.s.v[0]/2,s1=this.s.v[1]/2;var _cw=this.d!==3;var _v=this.v;_v.v[0][0]=p0;_v.v[0][1]=p1-s1;_v.v[1][0]=_cw?p0+s0:p0-s0;_v.v[1][1]=p1;_v.v[2][0]=p0;_v.v[2][1]=p1+s1;_v.v[3][0]=_cw?p0-s0:p0+s0;_v.v[3][1]=p1;_v.i[0][0]=_cw?p0-s0*cPoint:p0+s0*cPoint;_v.i[0][1]=p1-s1;_v.i[1][0]=_cw?p0+s0:p0-s0;_v.i[1][1]=p1-s1*cPoint;_v.i[2][0]=_cw?p0+s0*cPoint:p0-s0*cPoint;_v.i[2][1]=p1+s1;_v.i[3][0]=_cw?p0-s0:p0+s0;_v.i[3][1]=p1+s1*cPoint;_v.o[0][0]=_cw?p0+s0*cPoint:p0-s0*cPoint;_v.o[0][1]=p1-s1;_v.o[1][0]=_cw?p0+s0:p0-s0;_v.o[1][1]=p1+s1*cPoint;_v.o[2][0]=_cw?p0-s0*cPoint:p0+s0*cPoint;_v.o[2][1]=p1+s1;_v.o[3][0]=_cw?p0-s0:p0+s0;_v.o[3][1]=p1-s1*cPoint;}};extendPrototype([DynamicPropertyContainer],EllShapeProperty);return EllShapeProperty;}();var StarShapeProperty=function(){function StarShapeProperty(elem,data){this.v=shape_pool.newElement();this.v.setPathData(true,0);this.elem=elem;this.comp=elem.comp;this.data=data;this.frameId=-1;this.d=data.d;this.initDynamicPropertyContainer(elem);if(data.sy===1){this.ir=PropertyFactory.getProp(elem,data.ir,0,0,this);this.is=PropertyFactory.getProp(elem,data.is,0,0.01,this);this.convertToPath=this.convertStarToPath;}else{this.convertToPath=this.convertPolygonToPath;}this.pt=PropertyFactory.getProp(elem,data.pt,0,0,this);this.p=PropertyFactory.getProp(elem,data.p,1,0,this);this.r=PropertyFactory.getProp(elem,data.r,0,degToRads,this);this.or=PropertyFactory.getProp(elem,data.or,0,0,this);this.os=PropertyFactory.getProp(elem,data.os,0,0.01,this);this.localShapeCollection=shapeCollection_pool.newShapeCollection();this.localShapeCollection.addShape(this.v);this.paths=this.localShapeCollection;if(this.dynamicProperties.length){this.k=true;}else{this.k=false;this.convertToPath();}};StarShapeProperty.prototype={reset:resetShape,getValue:function getValue(){if(this.elem.globalData.frameId===this.frameId){return;}this.frameId=this.elem.globalData.frameId;this.iterateDynamicProperties();if(this._mdf){this.convertToPath();}},convertStarToPath:function convertStarToPath(){var numPts=Math.floor(this.pt.v)*2;var angle=Math.PI*2/numPts;/*this.v.v.length = numPts;
                this.v.i.length = numPts;
                this.v.o.length = numPts;*/var longFlag=true;var longRad=this.or.v;var shortRad=this.ir.v;var longRound=this.os.v;var shortRound=this.is.v;var longPerimSegment=2*Math.PI*longRad/(numPts*2);var shortPerimSegment=2*Math.PI*shortRad/(numPts*2);var i,rad,roundness,perimSegment,currentAng=-Math.PI/2;currentAng+=this.r.v;var dir=this.data.d===3?-1:1;this.v._length=0;for(i=0;i<numPts;i+=1){rad=longFlag?longRad:shortRad;roundness=longFlag?longRound:shortRound;perimSegment=longFlag?longPerimSegment:shortPerimSegment;var x=rad*Math.cos(currentAng);var y=rad*Math.sin(currentAng);var ox=x===0&&y===0?0:y/Math.sqrt(x*x+y*y);var oy=x===0&&y===0?0:-x/Math.sqrt(x*x+y*y);x+=+this.p.v[0];y+=+this.p.v[1];this.v.setTripleAt(x,y,x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir,x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir,i,true);/*this.v.v[i] = [x,y];
                    this.v.i[i] = [x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir];
                    this.v.o[i] = [x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir];
                    this.v._length = numPts;*/longFlag=!longFlag;currentAng+=angle*dir;}},convertPolygonToPath:function convertPolygonToPath(){var numPts=Math.floor(this.pt.v);var angle=Math.PI*2/numPts;var rad=this.or.v;var roundness=this.os.v;var perimSegment=2*Math.PI*rad/(numPts*4);var i,currentAng=-Math.PI/2;var dir=this.data.d===3?-1:1;currentAng+=this.r.v;this.v._length=0;for(i=0;i<numPts;i+=1){var x=rad*Math.cos(currentAng);var y=rad*Math.sin(currentAng);var ox=x===0&&y===0?0:y/Math.sqrt(x*x+y*y);var oy=x===0&&y===0?0:-x/Math.sqrt(x*x+y*y);x+=+this.p.v[0];y+=+this.p.v[1];this.v.setTripleAt(x,y,x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir,x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir,i,true);currentAng+=angle*dir;}this.paths.length=0;this.paths[0]=this.v;}};extendPrototype([DynamicPropertyContainer],StarShapeProperty);return StarShapeProperty;}();var RectShapeProperty=function(){function RectShapeProperty(elem,data){this.v=shape_pool.newElement();this.v.c=true;this.localShapeCollection=shapeCollection_pool.newShapeCollection();this.localShapeCollection.addShape(this.v);this.paths=this.localShapeCollection;this.elem=elem;this.comp=elem.comp;this.frameId=-1;this.d=data.d;this.initDynamicPropertyContainer(elem);this.p=PropertyFactory.getProp(elem,data.p,1,0,this);this.s=PropertyFactory.getProp(elem,data.s,1,0,this);this.r=PropertyFactory.getProp(elem,data.r,0,0,this);if(this.dynamicProperties.length){this.k=true;}else{this.k=false;this.convertRectToPath();}};RectShapeProperty.prototype={convertRectToPath:function convertRectToPath(){var p0=this.p.v[0],p1=this.p.v[1],v0=this.s.v[0]/2,v1=this.s.v[1]/2;var round=bm_min(v0,v1,this.r.v);var cPoint=round*(1-roundCorner);this.v._length=0;if(this.d===2||this.d===1){this.v.setTripleAt(p0+v0,p1-v1+round,p0+v0,p1-v1+round,p0+v0,p1-v1+cPoint,0,true);this.v.setTripleAt(p0+v0,p1+v1-round,p0+v0,p1+v1-cPoint,p0+v0,p1+v1-round,1,true);if(round!==0){this.v.setTripleAt(p0+v0-round,p1+v1,p0+v0-round,p1+v1,p0+v0-cPoint,p1+v1,2,true);this.v.setTripleAt(p0-v0+round,p1+v1,p0-v0+cPoint,p1+v1,p0-v0+round,p1+v1,3,true);this.v.setTripleAt(p0-v0,p1+v1-round,p0-v0,p1+v1-round,p0-v0,p1+v1-cPoint,4,true);this.v.setTripleAt(p0-v0,p1-v1+round,p0-v0,p1-v1+cPoint,p0-v0,p1-v1+round,5,true);this.v.setTripleAt(p0-v0+round,p1-v1,p0-v0+round,p1-v1,p0-v0+cPoint,p1-v1,6,true);this.v.setTripleAt(p0+v0-round,p1-v1,p0+v0-cPoint,p1-v1,p0+v0-round,p1-v1,7,true);}else{this.v.setTripleAt(p0-v0,p1+v1,p0-v0+cPoint,p1+v1,p0-v0,p1+v1,2);this.v.setTripleAt(p0-v0,p1-v1,p0-v0,p1-v1+cPoint,p0-v0,p1-v1,3);}}else{this.v.setTripleAt(p0+v0,p1-v1+round,p0+v0,p1-v1+cPoint,p0+v0,p1-v1+round,0,true);if(round!==0){this.v.setTripleAt(p0+v0-round,p1-v1,p0+v0-round,p1-v1,p0+v0-cPoint,p1-v1,1,true);this.v.setTripleAt(p0-v0+round,p1-v1,p0-v0+cPoint,p1-v1,p0-v0+round,p1-v1,2,true);this.v.setTripleAt(p0-v0,p1-v1+round,p0-v0,p1-v1+round,p0-v0,p1-v1+cPoint,3,true);this.v.setTripleAt(p0-v0,p1+v1-round,p0-v0,p1+v1-cPoint,p0-v0,p1+v1-round,4,true);this.v.setTripleAt(p0-v0+round,p1+v1,p0-v0+round,p1+v1,p0-v0+cPoint,p1+v1,5,true);this.v.setTripleAt(p0+v0-round,p1+v1,p0+v0-cPoint,p1+v1,p0+v0-round,p1+v1,6,true);this.v.setTripleAt(p0+v0,p1+v1-round,p0+v0,p1+v1-round,p0+v0,p1+v1-cPoint,7,true);}else{this.v.setTripleAt(p0-v0,p1-v1,p0-v0+cPoint,p1-v1,p0-v0,p1-v1,1,true);this.v.setTripleAt(p0-v0,p1+v1,p0-v0,p1+v1-cPoint,p0-v0,p1+v1,2,true);this.v.setTripleAt(p0+v0,p1+v1,p0+v0-cPoint,p1+v1,p0+v0,p1+v1,3,true);}}},getValue:function getValue(frameNum){if(this.elem.globalData.frameId===this.frameId){return;}this.frameId=this.elem.globalData.frameId;this.iterateDynamicProperties();if(this._mdf){this.convertRectToPath();}},reset:resetShape};extendPrototype([DynamicPropertyContainer],RectShapeProperty);return RectShapeProperty;}();function getShapeProp(elem,data,type){var prop;if(type===3||type===4){var dataProp=type===3?data.pt:data.ks;var keys=dataProp.k;if(keys.length){prop=new KeyframedShapeProperty(elem,data,type);}else{prop=new ShapeProperty(elem,data,type);}}else if(type===5){prop=new RectShapeProperty(elem,data);}else if(type===6){prop=new EllShapeProperty(elem,data);}else if(type===7){prop=new StarShapeProperty(elem,data);}if(prop.k){elem.addDynamicProperty(prop);}return prop;}function getConstructorFunction(){return ShapeProperty;}function getKeyframedConstructorFunction(){return KeyframedShapeProperty;}var ob={};ob.getShapeProp=getShapeProp;ob.getConstructorFunction=getConstructorFunction;ob.getKeyframedConstructorFunction=getKeyframedConstructorFunction;return ob;}();var ShapeModifiers=function(){var ob={};var modifiers={};ob.registerModifier=registerModifier;ob.getModifier=getModifier;function registerModifier(nm,factory){if(!modifiers[nm]){modifiers[nm]=factory;}}function getModifier(nm,elem,data){return new modifiers[nm](elem,data);}return ob;}();function ShapeModifier(){}ShapeModifier.prototype.initModifierProperties=function(){};ShapeModifier.prototype.addShapeToModifier=function(){};ShapeModifier.prototype.addShape=function(data){if(!this.closed){// Adding shape to dynamic properties. It covers the case where a shape has no effects applied, to reset it's _mdf state on every tick.
data.sh.container.addDynamicProperty(data.sh);var shapeData={shape:data.sh,data:data,localShapeCollection:shapeCollection_pool.newShapeCollection()};this.shapes.push(shapeData);this.addShapeToModifier(shapeData);if(this._isAnimated){data.setAsAnimated();}}};ShapeModifier.prototype.init=function(elem,data){this.shapes=[];this.elem=elem;this.initDynamicPropertyContainer(elem);this.initModifierProperties(elem,data);this.frameId=initialDefaultFrame;this.closed=false;this.k=false;if(this.dynamicProperties.length){this.k=true;}else{this.getValue(true);}};ShapeModifier.prototype.processKeys=function(){if(this.elem.globalData.frameId===this.frameId){return;}this.frameId=this.elem.globalData.frameId;this.iterateDynamicProperties();};extendPrototype([DynamicPropertyContainer],ShapeModifier);function TrimModifier(){}extendPrototype([ShapeModifier],TrimModifier);TrimModifier.prototype.initModifierProperties=function(elem,data){this.s=PropertyFactory.getProp(elem,data.s,0,0.01,this);this.e=PropertyFactory.getProp(elem,data.e,0,0.01,this);this.o=PropertyFactory.getProp(elem,data.o,0,0,this);this.sValue=0;this.eValue=0;this.getValue=this.processKeys;this.m=data.m;this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length;};TrimModifier.prototype.addShapeToModifier=function(shapeData){shapeData.pathsData=[];};TrimModifier.prototype.calculateShapeEdges=function(s,e,shapeLength,addedLength,totalModifierLength){var segments=[];if(e<=1){segments.push({s:s,e:e});}else if(s>=1){segments.push({s:s-1,e:e-1});}else{segments.push({s:s,e:1});segments.push({s:0,e:e-1});}var shapeSegments=[];var i,len=segments.length,segmentOb;for(i=0;i<len;i+=1){segmentOb=segments[i];if(segmentOb.e*totalModifierLength<addedLength||segmentOb.s*totalModifierLength>addedLength+shapeLength){}else{var shapeS,shapeE;if(segmentOb.s*totalModifierLength<=addedLength){shapeS=0;}else{shapeS=(segmentOb.s*totalModifierLength-addedLength)/shapeLength;}if(segmentOb.e*totalModifierLength>=addedLength+shapeLength){shapeE=1;}else{shapeE=(segmentOb.e*totalModifierLength-addedLength)/shapeLength;}shapeSegments.push([shapeS,shapeE]);}}if(!shapeSegments.length){shapeSegments.push([0,0]);}return shapeSegments;};TrimModifier.prototype.releasePathsData=function(pathsData){var i,len=pathsData.length;for(i=0;i<len;i+=1){segments_length_pool.release(pathsData[i]);}pathsData.length=0;return pathsData;};TrimModifier.prototype.processShapes=function(_isFirstFrame){var s,e;if(this._mdf||_isFirstFrame){var o=this.o.v%360/360;if(o<0){o+=1;}s=(this.s.v>1?1:this.s.v<0?0:this.s.v)+o;e=(this.e.v>1?1:this.e.v<0?0:this.e.v)+o;if(s===e){}if(s>e){var _s=s;s=e;e=_s;}s=Math.round(s*10000)*0.0001;e=Math.round(e*10000)*0.0001;this.sValue=s;this.eValue=e;}else{s=this.sValue;e=this.eValue;}var shapePaths;var i,len=this.shapes.length,j,jLen;var pathsData,pathData,totalShapeLength,totalModifierLength=0;if(e===s){for(i=0;i<len;i+=1){this.shapes[i].localShapeCollection.releaseShapes();this.shapes[i].shape._mdf=true;this.shapes[i].shape.paths=this.shapes[i].localShapeCollection;}}else if(!(e===1&&s===0||e===0&&s===1)){var segments=[],shapeData,localShapeCollection;for(i=0;i<len;i+=1){shapeData=this.shapes[i];// if shape hasn't changed and trim properties haven't changed, cached previous path can be used
if(!shapeData.shape._mdf&&!this._mdf&&!_isFirstFrame&&this.m!==2){shapeData.shape.paths=shapeData.localShapeCollection;}else{shapePaths=shapeData.shape.paths;jLen=shapePaths._length;totalShapeLength=0;if(!shapeData.shape._mdf&&shapeData.pathsData.length){totalShapeLength=shapeData.totalShapeLength;}else{pathsData=this.releasePathsData(shapeData.pathsData);for(j=0;j<jLen;j+=1){pathData=bez.getSegmentsLength(shapePaths.shapes[j]);pathsData.push(pathData);totalShapeLength+=pathData.totalLength;}shapeData.totalShapeLength=totalShapeLength;shapeData.pathsData=pathsData;}totalModifierLength+=totalShapeLength;shapeData.shape._mdf=true;}}var shapeS=s,shapeE=e,addedLength=0,edges;for(i=len-1;i>=0;i-=1){shapeData=this.shapes[i];if(shapeData.shape._mdf){localShapeCollection=shapeData.localShapeCollection;localShapeCollection.releaseShapes();//if m === 2 means paths are trimmed individually so edges need to be found for this specific shape relative to whoel group
if(this.m===2&&len>1){edges=this.calculateShapeEdges(s,e,shapeData.totalShapeLength,addedLength,totalModifierLength);addedLength+=shapeData.totalShapeLength;}else{edges=[[shapeS,shapeE]];}jLen=edges.length;for(j=0;j<jLen;j+=1){shapeS=edges[j][0];shapeE=edges[j][1];segments.length=0;if(shapeE<=1){segments.push({s:shapeData.totalShapeLength*shapeS,e:shapeData.totalShapeLength*shapeE});}else if(shapeS>=1){segments.push({s:shapeData.totalShapeLength*(shapeS-1),e:shapeData.totalShapeLength*(shapeE-1)});}else{segments.push({s:shapeData.totalShapeLength*shapeS,e:shapeData.totalShapeLength});segments.push({s:0,e:shapeData.totalShapeLength*(shapeE-1)});}var newShapesData=this.addShapes(shapeData,segments[0]);if(segments[0].s!==segments[0].e){if(segments.length>1){var lastShapeInCollection=shapeData.shape.paths.shapes[shapeData.shape.paths._length-1];if(lastShapeInCollection.c){var lastShape=newShapesData.pop();this.addPaths(newShapesData,localShapeCollection);newShapesData=this.addShapes(shapeData,segments[1],lastShape);}else{this.addPaths(newShapesData,localShapeCollection);newShapesData=this.addShapes(shapeData,segments[1]);}}this.addPaths(newShapesData,localShapeCollection);}}shapeData.shape.paths=localShapeCollection;}}}else if(this._mdf){for(i=0;i<len;i+=1){//Releasign Trim Cached paths data when no trim applied in case shapes are modified inbetween.
//Don't remove this even if it's losing cached info.
this.shapes[i].pathsData.length=0;this.shapes[i].shape._mdf=true;}}};TrimModifier.prototype.addPaths=function(newPaths,localShapeCollection){var i,len=newPaths.length;for(i=0;i<len;i+=1){localShapeCollection.addShape(newPaths[i]);}};TrimModifier.prototype.addSegment=function(pt1,pt2,pt3,pt4,shapePath,pos,newShape){shapePath.setXYAt(pt2[0],pt2[1],'o',pos);shapePath.setXYAt(pt3[0],pt3[1],'i',pos+1);if(newShape){shapePath.setXYAt(pt1[0],pt1[1],'v',pos);}shapePath.setXYAt(pt4[0],pt4[1],'v',pos+1);};TrimModifier.prototype.addSegmentFromArray=function(points,shapePath,pos,newShape){shapePath.setXYAt(points[1],points[5],'o',pos);shapePath.setXYAt(points[2],points[6],'i',pos+1);if(newShape){shapePath.setXYAt(points[0],points[4],'v',pos);}shapePath.setXYAt(points[3],points[7],'v',pos+1);};TrimModifier.prototype.addShapes=function(shapeData,shapeSegment,shapePath){var pathsData=shapeData.pathsData;var shapePaths=shapeData.shape.paths.shapes;var i,len=shapeData.shape.paths._length,j,jLen;var addedLength=0;var currentLengthData,segmentCount;var lengths;var segment;var shapes=[];var initPos;var newShape=true;if(!shapePath){shapePath=shape_pool.newElement();segmentCount=0;initPos=0;}else{segmentCount=shapePath._length;initPos=shapePath._length;}shapes.push(shapePath);for(i=0;i<len;i+=1){lengths=pathsData[i].lengths;shapePath.c=shapePaths[i].c;jLen=shapePaths[i].c?lengths.length:lengths.length+1;for(j=1;j<jLen;j+=1){currentLengthData=lengths[j-1];if(addedLength+currentLengthData.addedLength<shapeSegment.s){addedLength+=currentLengthData.addedLength;shapePath.c=false;}else if(addedLength>shapeSegment.e){shapePath.c=false;break;}else{if(shapeSegment.s<=addedLength&&shapeSegment.e>=addedLength+currentLengthData.addedLength){this.addSegment(shapePaths[i].v[j-1],shapePaths[i].o[j-1],shapePaths[i].i[j],shapePaths[i].v[j],shapePath,segmentCount,newShape);newShape=false;}else{segment=bez.getNewSegment(shapePaths[i].v[j-1],shapePaths[i].v[j],shapePaths[i].o[j-1],shapePaths[i].i[j],(shapeSegment.s-addedLength)/currentLengthData.addedLength,(shapeSegment.e-addedLength)/currentLengthData.addedLength,lengths[j-1]);this.addSegmentFromArray(segment,shapePath,segmentCount,newShape);// this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
newShape=false;shapePath.c=false;}addedLength+=currentLengthData.addedLength;segmentCount+=1;}}if(shapePaths[i].c&&lengths.length){currentLengthData=lengths[j-1];if(addedLength<=shapeSegment.e){var segmentLength=lengths[j-1].addedLength;if(shapeSegment.s<=addedLength&&shapeSegment.e>=addedLength+segmentLength){this.addSegment(shapePaths[i].v[j-1],shapePaths[i].o[j-1],shapePaths[i].i[0],shapePaths[i].v[0],shapePath,segmentCount,newShape);newShape=false;}else{segment=bez.getNewSegment(shapePaths[i].v[j-1],shapePaths[i].v[0],shapePaths[i].o[j-1],shapePaths[i].i[0],(shapeSegment.s-addedLength)/segmentLength,(shapeSegment.e-addedLength)/segmentLength,lengths[j-1]);this.addSegmentFromArray(segment,shapePath,segmentCount,newShape);// this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
newShape=false;shapePath.c=false;}}else{shapePath.c=false;}addedLength+=currentLengthData.addedLength;segmentCount+=1;}if(shapePath._length){shapePath.setXYAt(shapePath.v[initPos][0],shapePath.v[initPos][1],'i',initPos);shapePath.setXYAt(shapePath.v[shapePath._length-1][0],shapePath.v[shapePath._length-1][1],'o',shapePath._length-1);}if(addedLength>shapeSegment.e){break;}if(i<len-1){shapePath=shape_pool.newElement();newShape=true;shapes.push(shapePath);segmentCount=0;}}return shapes;};ShapeModifiers.registerModifier('tm',TrimModifier);function RoundCornersModifier(){}extendPrototype([ShapeModifier],RoundCornersModifier);RoundCornersModifier.prototype.initModifierProperties=function(elem,data){this.getValue=this.processKeys;this.rd=PropertyFactory.getProp(elem,data.r,0,null,this);this._isAnimated=!!this.rd.effectsSequence.length;};RoundCornersModifier.prototype.processPath=function(path,round){var cloned_path=shape_pool.newElement();cloned_path.c=path.c;var i,len=path._length;var currentV,currentI,currentO,closerV,newV,newO,newI,distance,newPosPerc,index=0;var vX,vY,oX,oY,iX,iY;for(i=0;i<len;i+=1){currentV=path.v[i];currentO=path.o[i];currentI=path.i[i];if(currentV[0]===currentO[0]&&currentV[1]===currentO[1]&&currentV[0]===currentI[0]&&currentV[1]===currentI[1]){if((i===0||i===len-1)&&!path.c){cloned_path.setTripleAt(currentV[0],currentV[1],currentO[0],currentO[1],currentI[0],currentI[1],index);/*cloned_path.v[index] = currentV;
                cloned_path.o[index] = currentO;
                cloned_path.i[index] = currentI;*/index+=1;}else{if(i===0){closerV=path.v[len-1];}else{closerV=path.v[i-1];}distance=Math.sqrt(Math.pow(currentV[0]-closerV[0],2)+Math.pow(currentV[1]-closerV[1],2));newPosPerc=distance?Math.min(distance/2,round)/distance:0;vX=iX=currentV[0]+(closerV[0]-currentV[0])*newPosPerc;vY=iY=currentV[1]-(currentV[1]-closerV[1])*newPosPerc;oX=vX-(vX-currentV[0])*roundCorner;oY=vY-(vY-currentV[1])*roundCorner;cloned_path.setTripleAt(vX,vY,oX,oY,iX,iY,index);index+=1;if(i===len-1){closerV=path.v[0];}else{closerV=path.v[i+1];}distance=Math.sqrt(Math.pow(currentV[0]-closerV[0],2)+Math.pow(currentV[1]-closerV[1],2));newPosPerc=distance?Math.min(distance/2,round)/distance:0;vX=oX=currentV[0]+(closerV[0]-currentV[0])*newPosPerc;vY=oY=currentV[1]+(closerV[1]-currentV[1])*newPosPerc;iX=vX-(vX-currentV[0])*roundCorner;iY=vY-(vY-currentV[1])*roundCorner;cloned_path.setTripleAt(vX,vY,oX,oY,iX,iY,index);index+=1;}}else{cloned_path.setTripleAt(path.v[i][0],path.v[i][1],path.o[i][0],path.o[i][1],path.i[i][0],path.i[i][1],index);index+=1;}}return cloned_path;};RoundCornersModifier.prototype.processShapes=function(_isFirstFrame){var shapePaths;var i,len=this.shapes.length;var j,jLen;var rd=this.rd.v;if(rd!==0){var shapeData,newPaths,localShapeCollection;for(i=0;i<len;i+=1){shapeData=this.shapes[i];newPaths=shapeData.shape.paths;localShapeCollection=shapeData.localShapeCollection;if(!(!shapeData.shape._mdf&&!this._mdf&&!_isFirstFrame)){localShapeCollection.releaseShapes();shapeData.shape._mdf=true;shapePaths=shapeData.shape.paths.shapes;jLen=shapeData.shape.paths._length;for(j=0;j<jLen;j+=1){localShapeCollection.addShape(this.processPath(shapePaths[j],rd));}}shapeData.shape.paths=shapeData.localShapeCollection;}}if(!this.dynamicProperties.length){this._mdf=false;}};ShapeModifiers.registerModifier('rd',RoundCornersModifier);function RepeaterModifier(){}extendPrototype([ShapeModifier],RepeaterModifier);RepeaterModifier.prototype.initModifierProperties=function(elem,data){this.getValue=this.processKeys;this.c=PropertyFactory.getProp(elem,data.c,0,null,this);this.o=PropertyFactory.getProp(elem,data.o,0,null,this);this.tr=TransformPropertyFactory.getTransformProperty(elem,data.tr,this);this.so=PropertyFactory.getProp(elem,data.tr.so,0,0.01,this);this.eo=PropertyFactory.getProp(elem,data.tr.eo,0,0.01,this);this.data=data;if(!this.dynamicProperties.length){this.getValue(true);}this._isAnimated=!!this.dynamicProperties.length;this.pMatrix=new Matrix();this.rMatrix=new Matrix();this.sMatrix=new Matrix();this.tMatrix=new Matrix();this.matrix=new Matrix();};RepeaterModifier.prototype.applyTransforms=function(pMatrix,rMatrix,sMatrix,transform,perc,inv){var dir=inv?-1:1;var scaleX=transform.s.v[0]+(1-transform.s.v[0])*(1-perc);var scaleY=transform.s.v[1]+(1-transform.s.v[1])*(1-perc);pMatrix.translate(transform.p.v[0]*dir*perc,transform.p.v[1]*dir*perc,transform.p.v[2]);rMatrix.translate(-transform.a.v[0],-transform.a.v[1],transform.a.v[2]);rMatrix.rotate(-transform.r.v*dir*perc);rMatrix.translate(transform.a.v[0],transform.a.v[1],transform.a.v[2]);sMatrix.translate(-transform.a.v[0],-transform.a.v[1],transform.a.v[2]);sMatrix.scale(inv?1/scaleX:scaleX,inv?1/scaleY:scaleY);sMatrix.translate(transform.a.v[0],transform.a.v[1],transform.a.v[2]);};RepeaterModifier.prototype.init=function(elem,arr,pos,elemsData){this.elem=elem;this.arr=arr;this.pos=pos;this.elemsData=elemsData;this._currentCopies=0;this._elements=[];this._groups=[];this.frameId=-1;this.initDynamicPropertyContainer(elem);this.initModifierProperties(elem,arr[pos]);var cont=0;while(pos>0){pos-=1;//this._elements.unshift(arr.splice(pos,1)[0]);
this._elements.unshift(arr[pos]);cont+=1;}if(this.dynamicProperties.length){this.k=true;}else{this.getValue(true);}};RepeaterModifier.prototype.resetElements=function(elements){var i,len=elements.length;for(i=0;i<len;i+=1){elements[i]._processed=false;if(elements[i].ty==='gr'){this.resetElements(elements[i].it);}}};RepeaterModifier.prototype.cloneElements=function(elements){var i,len=elements.length;var newElements=JSON.parse(JSON.stringify(elements));this.resetElements(newElements);return newElements;};RepeaterModifier.prototype.changeGroupRender=function(elements,renderFlag){var i,len=elements.length;for(i=0;i<len;i+=1){elements[i]._render=renderFlag;if(elements[i].ty==='gr'){this.changeGroupRender(elements[i].it,renderFlag);}}};RepeaterModifier.prototype.processShapes=function(_isFirstFrame){var items,itemsTransform,i,dir,cont;if(this._mdf||_isFirstFrame){var copies=Math.ceil(this.c.v);if(this._groups.length<copies){while(this._groups.length<copies){var group={it:this.cloneElements(this._elements),ty:'gr'};group.it.push({"a":{"a":0,"ix":1,"k":[0,0]},"nm":"Transform","o":{"a":0,"ix":7,"k":100},"p":{"a":0,"ix":2,"k":[0,0]},"r":{"a":1,"ix":6,"k":[{s:0,e:0,t:0},{s:0,e:0,t:1}]},"s":{"a":0,"ix":3,"k":[100,100]},"sa":{"a":0,"ix":5,"k":0},"sk":{"a":0,"ix":4,"k":0},"ty":"tr"});this.arr.splice(0,0,group);this._groups.splice(0,0,group);this._currentCopies+=1;}this.elem.reloadShapes();}cont=0;var renderFlag;for(i=0;i<=this._groups.length-1;i+=1){renderFlag=cont<copies;this._groups[i]._render=renderFlag;this.changeGroupRender(this._groups[i].it,renderFlag);cont+=1;}this._currentCopies=copies;////
var offset=this.o.v;var offsetModulo=offset%1;var roundOffset=offset>0?Math.floor(offset):Math.ceil(offset);var k;var tMat=this.tr.v.props;var pProps=this.pMatrix.props;var rProps=this.rMatrix.props;var sProps=this.sMatrix.props;this.pMatrix.reset();this.rMatrix.reset();this.sMatrix.reset();this.tMatrix.reset();this.matrix.reset();var iteration=0;if(offset>0){while(iteration<roundOffset){this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,false);iteration+=1;}if(offsetModulo){this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,offsetModulo,false);iteration+=offsetModulo;}}else if(offset<0){while(iteration>roundOffset){this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,true);iteration-=1;}if(offsetModulo){this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-offsetModulo,true);iteration-=offsetModulo;}}i=this.data.m===1?0:this._currentCopies-1;dir=this.data.m===1?1:-1;cont=this._currentCopies;var j,jLen;while(cont){items=this.elemsData[i].it;itemsTransform=items[items.length-1].transform.mProps.v.props;jLen=itemsTransform.length;items[items.length-1].transform.mProps._mdf=true;items[items.length-1].transform.op._mdf=true;items[items.length-1].transform.op.v=this.so.v+(this.eo.v-this.so.v)*(i/(this._currentCopies-1));if(iteration!==0){if(i!==0&&dir===1||i!==this._currentCopies-1&&dir===-1){this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,false);}this.matrix.transform(rProps[0],rProps[1],rProps[2],rProps[3],rProps[4],rProps[5],rProps[6],rProps[7],rProps[8],rProps[9],rProps[10],rProps[11],rProps[12],rProps[13],rProps[14],rProps[15]);this.matrix.transform(sProps[0],sProps[1],sProps[2],sProps[3],sProps[4],sProps[5],sProps[6],sProps[7],sProps[8],sProps[9],sProps[10],sProps[11],sProps[12],sProps[13],sProps[14],sProps[15]);this.matrix.transform(pProps[0],pProps[1],pProps[2],pProps[3],pProps[4],pProps[5],pProps[6],pProps[7],pProps[8],pProps[9],pProps[10],pProps[11],pProps[12],pProps[13],pProps[14],pProps[15]);for(j=0;j<jLen;j+=1){itemsTransform[j]=this.matrix.props[j];}this.matrix.reset();}else{this.matrix.reset();for(j=0;j<jLen;j+=1){itemsTransform[j]=this.matrix.props[j];}}iteration+=1;cont-=1;i+=dir;}}else{cont=this._currentCopies;i=0;dir=1;while(cont){items=this.elemsData[i].it;itemsTransform=items[items.length-1].transform.mProps.v.props;items[items.length-1].transform.mProps._mdf=false;items[items.length-1].transform.op._mdf=false;cont-=1;i+=dir;}}};RepeaterModifier.prototype.addShape=function(){};ShapeModifiers.registerModifier('rp',RepeaterModifier);function ShapeCollection(){this._length=0;this._maxLength=4;this.shapes=createSizedArray(this._maxLength);}ShapeCollection.prototype.addShape=function(shapeData){if(this._length===this._maxLength){this.shapes=this.shapes.concat(createSizedArray(this._maxLength));this._maxLength*=2;}this.shapes[this._length]=shapeData;this._length+=1;};ShapeCollection.prototype.releaseShapes=function(){var i;for(i=0;i<this._length;i+=1){shape_pool.release(this.shapes[i]);}this._length=0;};function DashProperty(elem,data,renderer,container){this.elem=elem;this.frameId=-1;this.dataProps=createSizedArray(data.length);this.renderer=renderer;this.k=false;this.dashStr='';this.dashArray=createTypedArray('float32',data.length?data.length-1:0);this.dashoffset=createTypedArray('float32',1);this.initDynamicPropertyContainer(container);var i,len=data.length||0,prop;for(i=0;i<len;i+=1){prop=PropertyFactory.getProp(elem,data[i].v,0,0,this);this.k=prop.k||this.k;this.dataProps[i]={n:data[i].n,p:prop};}if(!this.k){this.getValue(true);}this._isAnimated=this.k;}DashProperty.prototype.getValue=function(forceRender){if(this.elem.globalData.frameId===this.frameId&&!forceRender){return;}this.frameId=this.elem.globalData.frameId;this.iterateDynamicProperties();this._mdf=this._mdf||forceRender;if(this._mdf){var i=0,len=this.dataProps.length;if(this.renderer==='svg'){this.dashStr='';}for(i=0;i<len;i+=1){if(this.dataProps[i].n!='o'){if(this.renderer==='svg'){this.dashStr+=' '+this.dataProps[i].p.v;}else{this.dashArray[i]=this.dataProps[i].p.v;}}else{this.dashoffset[0]=this.dataProps[i].p.v;}}}};extendPrototype([DynamicPropertyContainer],DashProperty);function GradientProperty(elem,data,container){this.data=data;this.c=createTypedArray('uint8c',data.p*4);var cLength=data.k.k[0].s?data.k.k[0].s.length-data.p*4:data.k.k.length-data.p*4;this.o=createTypedArray('float32',cLength);this._cmdf=false;this._omdf=false;this._collapsable=this.checkCollapsable();this._hasOpacity=cLength;this.initDynamicPropertyContainer(container);this.prop=PropertyFactory.getProp(elem,data.k,1,null,this);this.k=this.prop.k;this.getValue(true);}GradientProperty.prototype.comparePoints=function(values,points){var i=0,len=this.o.length/2,diff;while(i<len){diff=Math.abs(values[i*4]-values[points*4+i*2]);if(diff>0.01){return false;}i+=1;}return true;};GradientProperty.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4){return false;}if(this.data.k.k[0].s){var i=0,len=this.data.k.k.length;while(i<len){if(!this.comparePoints(this.data.k.k[i].s,this.data.p)){return false;}i+=1;}}else if(!this.comparePoints(this.data.k.k,this.data.p)){return false;}return true;};GradientProperty.prototype.getValue=function(forceRender){this.prop.getValue();this._mdf=false;this._cmdf=false;this._omdf=false;if(this.prop._mdf||forceRender){var i,len=this.data.p*4;var mult,val;for(i=0;i<len;i+=1){mult=i%4===0?100:255;val=Math.round(this.prop.v[i]*mult);if(this.c[i]!==val){this.c[i]=val;this._cmdf=!forceRender;}}if(this.o.length){len=this.prop.v.length;for(i=this.data.p*4;i<len;i+=1){mult=i%2===0?100:1;val=i%2===0?Math.round(this.prop.v[i]*100):this.prop.v[i];if(this.o[i-this.data.p*4]!==val){this.o[i-this.data.p*4]=val;this._omdf=!forceRender;}}}this._mdf=!forceRender;}};extendPrototype([DynamicPropertyContainer],GradientProperty);var buildShapeString=function buildShapeString(pathNodes,length,closed,mat){if(length===0){return'';}var _o=pathNodes.o;var _i=pathNodes.i;var _v=pathNodes.v;var i,shapeString=" M"+mat.applyToPointStringified(_v[0][0],_v[0][1]);for(i=1;i<length;i+=1){shapeString+=" C"+mat.applyToPointStringified(_o[i-1][0],_o[i-1][1])+" "+mat.applyToPointStringified(_i[i][0],_i[i][1])+" "+mat.applyToPointStringified(_v[i][0],_v[i][1]);}if(closed&&length){shapeString+=" C"+mat.applyToPointStringified(_o[i-1][0],_o[i-1][1])+" "+mat.applyToPointStringified(_i[0][0],_i[0][1])+" "+mat.applyToPointStringified(_v[0][0],_v[0][1]);shapeString+='z';}return shapeString;};var ImagePreloader=function(){var proxyImage=function(){var canvas=createTag('canvas');canvas.width=1;canvas.height=1;var ctx=canvas.getContext('2d');ctx.fillStyle='rgba(0,0,0,0)';ctx.fillRect(0,0,1,1);return canvas;}();function imageLoaded(){this.loadedAssets+=1;if(this.loadedAssets===this.totalImages){if(this.imagesLoadedCb){this.imagesLoadedCb(null);}}}function getAssetsPath(assetData,assetsPath,original_path){var path='';if(assetData.e){path=assetData.p;}else if(assetsPath){var imagePath=assetData.p;if(imagePath.indexOf('images/')!==-1){imagePath=imagePath.split('/')[1];}path=assetsPath+imagePath;}else{path=original_path;path+=assetData.u?assetData.u:'';path+=assetData.p;}return path;}function createImageData(assetData){var path=getAssetsPath(assetData,this.assetsPath,this.path);var img=createTag('img');img.crossOrigin='anonymous';img.addEventListener('load',this._imageLoaded.bind(this),false);img.addEventListener('error',function(){ob.img=proxyImage;this._imageLoaded();}.bind(this),false);img.src=path;var ob={img:img,assetData:assetData};return ob;}function loadAssets(assets,cb){this.imagesLoadedCb=cb;var i,len=assets.length;for(i=0;i<len;i+=1){if(!assets[i].layers){this.totalImages+=1;this.images.push(this._createImageData(assets[i]));}}}function setPath(path){this.path=path||'';}function setAssetsPath(path){this.assetsPath=path||'';}function getImage(assetData){var i=0,len=this.images.length;while(i<len){if(this.images[i].assetData===assetData){return this.images[i].img;}i+=1;}}function destroy(){this.imagesLoadedCb=null;this.images.length=0;}function loaded(){return this.totalImages===this.loadedAssets;}return function ImagePreloader(){this.loadAssets=loadAssets;this.setAssetsPath=setAssetsPath;this.setPath=setPath;this.loaded=loaded;this.destroy=destroy;this.getImage=getImage;this._createImageData=createImageData;this._imageLoaded=imageLoaded;this.assetsPath='';this.path='';this.totalImages=0;this.loadedAssets=0;this.imagesLoadedCb=null;this.images=[];};}();var featureSupport=function(){var ob={maskType:true};if(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent)){ob.maskType=false;}return ob;}();var filtersFactory=function(){var ob={};ob.createFilter=createFilter;ob.createAlphaToLuminanceFilter=createAlphaToLuminanceFilter;function createFilter(filId){var fil=createNS('filter');fil.setAttribute('id',filId);fil.setAttribute('filterUnits','objectBoundingBox');fil.setAttribute('x','0%');fil.setAttribute('y','0%');fil.setAttribute('width','100%');fil.setAttribute('height','100%');return fil;}function createAlphaToLuminanceFilter(){var feColorMatrix=createNS('feColorMatrix');feColorMatrix.setAttribute('type','matrix');feColorMatrix.setAttribute('color-interpolation-filters','sRGB');feColorMatrix.setAttribute('values','0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1');return feColorMatrix;}return ob;}();var assetLoader=function(){function formatResponse(xhr){if(xhr.response&&_typeof(xhr.response)==='object'){return xhr.response;}else if(xhr.response&&typeof xhr.response==='string'){return JSON.parse(xhr.response);}else if(xhr.responseText){return JSON.parse(xhr.responseText);}}function loadAsset(path,callback,errorCallback){var response;var xhr=new XMLHttpRequest();xhr.open('GET',path,true);// set responseType after calling open or IE will break.
try{// This crashes on Android WebView prior to KitKat
xhr.responseType="json";}catch(err){}xhr.send();xhr.onreadystatechange=function(){if(xhr.readyState==4){if(xhr.status==200){response=formatResponse(xhr);callback(response);}else{try{response=formatResponse(xhr);callback(response);}catch(err){if(errorCallback){errorCallback(err);}}}}};}return{load:loadAsset};}();function TextAnimatorProperty(textData,renderType,elem){this._isFirstFrame=true;this._hasMaskedPath=false;this._frameId=-1;this._textData=textData;this._renderType=renderType;this._elem=elem;this._animatorsData=createSizedArray(this._textData.a.length);this._pathData={};this._moreOptions={alignment:{}};this.renderedLetters=[];this.lettersChangedFlag=false;this.initDynamicPropertyContainer(elem);}TextAnimatorProperty.prototype.searchProperties=function(){var i,len=this._textData.a.length,animatorProps;var getProp=PropertyFactory.getProp;for(i=0;i<len;i+=1){animatorProps=this._textData.a[i];this._animatorsData[i]=new TextAnimatorDataProperty(this._elem,animatorProps,this);}if(this._textData.p&&'m'in this._textData.p){this._pathData={f:getProp(this._elem,this._textData.p.f,0,0,this),l:getProp(this._elem,this._textData.p.l,0,0,this),r:this._textData.p.r,m:this._elem.maskManager.getMaskProperty(this._textData.p.m)};this._hasMaskedPath=true;}else{this._hasMaskedPath=false;}this._moreOptions.alignment=getProp(this._elem,this._textData.m.a,1,0,this);};TextAnimatorProperty.prototype.getMeasures=function(documentData,lettersChangedFlag){this.lettersChangedFlag=lettersChangedFlag;if(!this._mdf&&!this._isFirstFrame&&!lettersChangedFlag&&(!this._hasMaskedPath||!this._pathData.m._mdf)){return;}this._isFirstFrame=false;var alignment=this._moreOptions.alignment.v;var animators=this._animatorsData;var textData=this._textData;var matrixHelper=this.mHelper;var renderType=this._renderType;var renderedLettersCount=this.renderedLetters.length;var data=this.data;var xPos,yPos;var i,len;var letters=documentData.l,pathInfo,currentLength,currentPoint,segmentLength,flag,pointInd,segmentInd,prevPoint,points,segments,partialLength,totalLength,perc,tanAngle,mask;if(this._hasMaskedPath){mask=this._pathData.m;if(!this._pathData.n||this._pathData._mdf){var paths=mask.v;if(this._pathData.r){paths=paths.reverse();}// TODO: release bezier data cached from previous pathInfo: this._pathData.pi
pathInfo={tLength:0,segments:[]};len=paths._length-1;var bezierData;totalLength=0;for(i=0;i<len;i+=1){bezierData=bez.buildBezierData(paths.v[i],paths.v[i+1],[paths.o[i][0]-paths.v[i][0],paths.o[i][1]-paths.v[i][1]],[paths.i[i+1][0]-paths.v[i+1][0],paths.i[i+1][1]-paths.v[i+1][1]]);pathInfo.tLength+=bezierData.segmentLength;pathInfo.segments.push(bezierData);totalLength+=bezierData.segmentLength;}i=len;if(mask.v.c){bezierData=bez.buildBezierData(paths.v[i],paths.v[0],[paths.o[i][0]-paths.v[i][0],paths.o[i][1]-paths.v[i][1]],[paths.i[0][0]-paths.v[0][0],paths.i[0][1]-paths.v[0][1]]);pathInfo.tLength+=bezierData.segmentLength;pathInfo.segments.push(bezierData);totalLength+=bezierData.segmentLength;}this._pathData.pi=pathInfo;}pathInfo=this._pathData.pi;currentLength=this._pathData.f.v;segmentInd=0;pointInd=1;segmentLength=0;flag=true;segments=pathInfo.segments;if(currentLength<0&&mask.v.c){if(pathInfo.tLength<Math.abs(currentLength)){currentLength=-Math.abs(currentLength)%pathInfo.tLength;}segmentInd=segments.length-1;points=segments[segmentInd].points;pointInd=points.length-1;while(currentLength<0){currentLength+=points[pointInd].partialLength;pointInd-=1;if(pointInd<0){segmentInd-=1;points=segments[segmentInd].points;pointInd=points.length-1;}}}points=segments[segmentInd].points;prevPoint=points[pointInd-1];currentPoint=points[pointInd];partialLength=currentPoint.partialLength;}len=letters.length;xPos=0;yPos=0;var yOff=documentData.finalSize*1.2*0.714;var firstLine=true;var animatorProps,animatorSelector;var j,jLen;var letterValue;jLen=animators.length;var lastLetter;var mult,ind=-1,offf,xPathPos,yPathPos;var initPathPos=currentLength,initSegmentInd=segmentInd,initPointInd=pointInd,currentLine=-1;var elemOpacity;var sc,sw,fc,k;var lineLength=0;var letterSw,letterSc,letterFc,letterM='',letterP=this.defaultPropsArray,letterO;//
if(documentData.j===2||documentData.j===1){var animatorJustifyOffset=0;var animatorFirstCharOffset=0;var justifyOffsetMult=documentData.j===2?-0.5:-1;var lastIndex=0;var isNewLine=true;for(i=0;i<len;i+=1){if(letters[i].n){if(animatorJustifyOffset){animatorJustifyOffset+=animatorFirstCharOffset;}while(lastIndex<i){letters[lastIndex].animatorJustifyOffset=animatorJustifyOffset;lastIndex+=1;}animatorJustifyOffset=0;isNewLine=true;}else{for(j=0;j<jLen;j+=1){animatorProps=animators[j].a;if(animatorProps.t.propType){if(isNewLine&&documentData.j===2){animatorFirstCharOffset+=animatorProps.t.v*justifyOffsetMult;}animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);if(mult.length){animatorJustifyOffset+=animatorProps.t.v*mult[0]*justifyOffsetMult;}else{animatorJustifyOffset+=animatorProps.t.v*mult*justifyOffsetMult;}}}isNewLine=false;}}if(animatorJustifyOffset){animatorJustifyOffset+=animatorFirstCharOffset;}while(lastIndex<i){letters[lastIndex].animatorJustifyOffset=animatorJustifyOffset;lastIndex+=1;}}//
for(i=0;i<len;i+=1){matrixHelper.reset();elemOpacity=1;if(letters[i].n){xPos=0;yPos+=documentData.yOffset;yPos+=firstLine?1:0;currentLength=initPathPos;firstLine=false;lineLength=0;if(this._hasMaskedPath){segmentInd=initSegmentInd;pointInd=initPointInd;points=segments[segmentInd].points;prevPoint=points[pointInd-1];currentPoint=points[pointInd];partialLength=currentPoint.partialLength;segmentLength=0;}letterO=letterSw=letterFc=letterM='';letterP=this.defaultPropsArray;}else{if(this._hasMaskedPath){if(currentLine!==letters[i].line){switch(documentData.j){case 1:currentLength+=totalLength-documentData.lineWidths[letters[i].line];break;case 2:currentLength+=(totalLength-documentData.lineWidths[letters[i].line])/2;break;}currentLine=letters[i].line;}if(ind!==letters[i].ind){if(letters[ind]){currentLength+=letters[ind].extra;}currentLength+=letters[i].an/2;ind=letters[i].ind;}currentLength+=alignment[0]*letters[i].an/200;var animatorOffset=0;for(j=0;j<jLen;j+=1){animatorProps=animators[j].a;if(animatorProps.p.propType){animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);if(mult.length){animatorOffset+=animatorProps.p.v[0]*mult[0];}else{animatorOffset+=animatorProps.p.v[0]*mult;}}if(animatorProps.a.propType){animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);if(mult.length){animatorOffset+=animatorProps.a.v[0]*mult[0];}else{animatorOffset+=animatorProps.a.v[0]*mult;}}}flag=true;while(flag){if(segmentLength+partialLength>=currentLength+animatorOffset||!points){perc=(currentLength+animatorOffset-segmentLength)/currentPoint.partialLength;xPathPos=prevPoint.point[0]+(currentPoint.point[0]-prevPoint.point[0])*perc;yPathPos=prevPoint.point[1]+(currentPoint.point[1]-prevPoint.point[1])*perc;matrixHelper.translate(-alignment[0]*letters[i].an/200,-(alignment[1]*yOff/100));flag=false;}else if(points){segmentLength+=currentPoint.partialLength;pointInd+=1;if(pointInd>=points.length){pointInd=0;segmentInd+=1;if(!segments[segmentInd]){if(mask.v.c){pointInd=0;segmentInd=0;points=segments[segmentInd].points;}else{segmentLength-=currentPoint.partialLength;points=null;}}else{points=segments[segmentInd].points;}}if(points){prevPoint=currentPoint;currentPoint=points[pointInd];partialLength=currentPoint.partialLength;}}}offf=letters[i].an/2-letters[i].add;matrixHelper.translate(-offf,0,0);}else{offf=letters[i].an/2-letters[i].add;matrixHelper.translate(-offf,0,0);// Grouping alignment
matrixHelper.translate(-alignment[0]*letters[i].an/200,-alignment[1]*yOff/100,0);}lineLength+=letters[i].l/2;for(j=0;j<jLen;j+=1){animatorProps=animators[j].a;if(animatorProps.t.propType){animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);//This condition is to prevent applying tracking to first character in each line. Might be better to use a boolean "isNewLine"
if(xPos!==0||documentData.j!==0){if(this._hasMaskedPath){if(mult.length){currentLength+=animatorProps.t.v*mult[0];}else{currentLength+=animatorProps.t.v*mult;}}else{if(mult.length){xPos+=animatorProps.t.v*mult[0];}else{xPos+=animatorProps.t.v*mult;}}}}}lineLength+=letters[i].l/2;if(documentData.strokeWidthAnim){sw=documentData.sw||0;}if(documentData.strokeColorAnim){if(documentData.sc){sc=[documentData.sc[0],documentData.sc[1],documentData.sc[2]];}else{sc=[0,0,0];}}if(documentData.fillColorAnim&&documentData.fc){fc=[documentData.fc[0],documentData.fc[1],documentData.fc[2]];}for(j=0;j<jLen;j+=1){animatorProps=animators[j].a;if(animatorProps.a.propType){animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);if(mult.length){matrixHelper.translate(-animatorProps.a.v[0]*mult[0],-animatorProps.a.v[1]*mult[1],animatorProps.a.v[2]*mult[2]);}else{matrixHelper.translate(-animatorProps.a.v[0]*mult,-animatorProps.a.v[1]*mult,animatorProps.a.v[2]*mult);}}}for(j=0;j<jLen;j+=1){animatorProps=animators[j].a;if(animatorProps.s.propType){animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);if(mult.length){matrixHelper.scale(1+(animatorProps.s.v[0]-1)*mult[0],1+(animatorProps.s.v[1]-1)*mult[1],1);}else{matrixHelper.scale(1+(animatorProps.s.v[0]-1)*mult,1+(animatorProps.s.v[1]-1)*mult,1);}}}for(j=0;j<jLen;j+=1){animatorProps=animators[j].a;animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);if(animatorProps.sk.propType){if(mult.length){matrixHelper.skewFromAxis(-animatorProps.sk.v*mult[0],animatorProps.sa.v*mult[1]);}else{matrixHelper.skewFromAxis(-animatorProps.sk.v*mult,animatorProps.sa.v*mult);}}if(animatorProps.r.propType){if(mult.length){matrixHelper.rotateZ(-animatorProps.r.v*mult[2]);}else{matrixHelper.rotateZ(-animatorProps.r.v*mult);}}if(animatorProps.ry.propType){if(mult.length){matrixHelper.rotateY(animatorProps.ry.v*mult[1]);}else{matrixHelper.rotateY(animatorProps.ry.v*mult);}}if(animatorProps.rx.propType){if(mult.length){matrixHelper.rotateX(animatorProps.rx.v*mult[0]);}else{matrixHelper.rotateX(animatorProps.rx.v*mult);}}if(animatorProps.o.propType){if(mult.length){elemOpacity+=(animatorProps.o.v*mult[0]-elemOpacity)*mult[0];}else{elemOpacity+=(animatorProps.o.v*mult-elemOpacity)*mult;}}if(documentData.strokeWidthAnim&&animatorProps.sw.propType){if(mult.length){sw+=animatorProps.sw.v*mult[0];}else{sw+=animatorProps.sw.v*mult;}}if(documentData.strokeColorAnim&&animatorProps.sc.propType){for(k=0;k<3;k+=1){if(mult.length){sc[k]=sc[k]+(animatorProps.sc.v[k]-sc[k])*mult[0];}else{sc[k]=sc[k]+(animatorProps.sc.v[k]-sc[k])*mult;}}}if(documentData.fillColorAnim&&documentData.fc){if(animatorProps.fc.propType){for(k=0;k<3;k+=1){if(mult.length){fc[k]=fc[k]+(animatorProps.fc.v[k]-fc[k])*mult[0];}else{fc[k]=fc[k]+(animatorProps.fc.v[k]-fc[k])*mult;}}}if(animatorProps.fh.propType){if(mult.length){fc=addHueToRGB(fc,animatorProps.fh.v*mult[0]);}else{fc=addHueToRGB(fc,animatorProps.fh.v*mult);}}if(animatorProps.fs.propType){if(mult.length){fc=addSaturationToRGB(fc,animatorProps.fs.v*mult[0]);}else{fc=addSaturationToRGB(fc,animatorProps.fs.v*mult);}}if(animatorProps.fb.propType){if(mult.length){fc=addBrightnessToRGB(fc,animatorProps.fb.v*mult[0]);}else{fc=addBrightnessToRGB(fc,animatorProps.fb.v*mult);}}}}for(j=0;j<jLen;j+=1){animatorProps=animators[j].a;if(animatorProps.p.propType){animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);if(this._hasMaskedPath){if(mult.length){matrixHelper.translate(0,animatorProps.p.v[1]*mult[0],-animatorProps.p.v[2]*mult[1]);}else{matrixHelper.translate(0,animatorProps.p.v[1]*mult,-animatorProps.p.v[2]*mult);}}else{if(mult.length){matrixHelper.translate(animatorProps.p.v[0]*mult[0],animatorProps.p.v[1]*mult[1],-animatorProps.p.v[2]*mult[2]);}else{matrixHelper.translate(animatorProps.p.v[0]*mult,animatorProps.p.v[1]*mult,-animatorProps.p.v[2]*mult);}}}}if(documentData.strokeWidthAnim){letterSw=sw<0?0:sw;}if(documentData.strokeColorAnim){letterSc='rgb('+Math.round(sc[0]*255)+','+Math.round(sc[1]*255)+','+Math.round(sc[2]*255)+')';}if(documentData.fillColorAnim&&documentData.fc){letterFc='rgb('+Math.round(fc[0]*255)+','+Math.round(fc[1]*255)+','+Math.round(fc[2]*255)+')';}if(this._hasMaskedPath){matrixHelper.translate(0,-documentData.ls);matrixHelper.translate(0,alignment[1]*yOff/100+yPos,0);if(textData.p.p){tanAngle=(currentPoint.point[1]-prevPoint.point[1])/(currentPoint.point[0]-prevPoint.point[0]);var rot=Math.atan(tanAngle)*180/Math.PI;if(currentPoint.point[0]<prevPoint.point[0]){rot+=180;}matrixHelper.rotate(-rot*Math.PI/180);}matrixHelper.translate(xPathPos,yPathPos,0);currentLength-=alignment[0]*letters[i].an/200;if(letters[i+1]&&ind!==letters[i+1].ind){currentLength+=letters[i].an/2;currentLength+=documentData.tr/1000*documentData.finalSize;}}else{matrixHelper.translate(xPos,yPos,0);if(documentData.ps){//matrixHelper.translate(documentData.ps[0],documentData.ps[1],0);
matrixHelper.translate(documentData.ps[0],documentData.ps[1]+documentData.ascent,0);}switch(documentData.j){case 1:matrixHelper.translate(letters[i].animatorJustifyOffset+documentData.justifyOffset+(documentData.boxWidth-documentData.lineWidths[letters[i].line]),0,0);break;case 2:matrixHelper.translate(letters[i].animatorJustifyOffset+documentData.justifyOffset+(documentData.boxWidth-documentData.lineWidths[letters[i].line])/2,0,0);break;}matrixHelper.translate(0,-documentData.ls);matrixHelper.translate(offf,0,0);matrixHelper.translate(alignment[0]*letters[i].an/200,alignment[1]*yOff/100,0);xPos+=letters[i].l+documentData.tr/1000*documentData.finalSize;}if(renderType==='html'){letterM=matrixHelper.toCSS();}else if(renderType==='svg'){letterM=matrixHelper.to2dCSS();}else{letterP=[matrixHelper.props[0],matrixHelper.props[1],matrixHelper.props[2],matrixHelper.props[3],matrixHelper.props[4],matrixHelper.props[5],matrixHelper.props[6],matrixHelper.props[7],matrixHelper.props[8],matrixHelper.props[9],matrixHelper.props[10],matrixHelper.props[11],matrixHelper.props[12],matrixHelper.props[13],matrixHelper.props[14],matrixHelper.props[15]];}letterO=elemOpacity;}if(renderedLettersCount<=i){letterValue=new LetterProps(letterO,letterSw,letterSc,letterFc,letterM,letterP);this.renderedLetters.push(letterValue);renderedLettersCount+=1;this.lettersChangedFlag=true;}else{letterValue=this.renderedLetters[i];this.lettersChangedFlag=letterValue.update(letterO,letterSw,letterSc,letterFc,letterM,letterP)||this.lettersChangedFlag;}}};TextAnimatorProperty.prototype.getValue=function(){if(this._elem.globalData.frameId===this._frameId){return;}this._frameId=this._elem.globalData.frameId;this.iterateDynamicProperties();};TextAnimatorProperty.prototype.mHelper=new Matrix();TextAnimatorProperty.prototype.defaultPropsArray=[];extendPrototype([DynamicPropertyContainer],TextAnimatorProperty);function TextAnimatorDataProperty(elem,animatorProps,container){var defaultData={propType:false};var getProp=PropertyFactory.getProp;var textAnimator_animatables=animatorProps.a;this.a={r:textAnimator_animatables.r?getProp(elem,textAnimator_animatables.r,0,degToRads,container):defaultData,rx:textAnimator_animatables.rx?getProp(elem,textAnimator_animatables.rx,0,degToRads,container):defaultData,ry:textAnimator_animatables.ry?getProp(elem,textAnimator_animatables.ry,0,degToRads,container):defaultData,sk:textAnimator_animatables.sk?getProp(elem,textAnimator_animatables.sk,0,degToRads,container):defaultData,sa:textAnimator_animatables.sa?getProp(elem,textAnimator_animatables.sa,0,degToRads,container):defaultData,s:textAnimator_animatables.s?getProp(elem,textAnimator_animatables.s,1,0.01,container):defaultData,a:textAnimator_animatables.a?getProp(elem,textAnimator_animatables.a,1,0,container):defaultData,o:textAnimator_animatables.o?getProp(elem,textAnimator_animatables.o,0,0.01,container):defaultData,p:textAnimator_animatables.p?getProp(elem,textAnimator_animatables.p,1,0,container):defaultData,sw:textAnimator_animatables.sw?getProp(elem,textAnimator_animatables.sw,0,0,container):defaultData,sc:textAnimator_animatables.sc?getProp(elem,textAnimator_animatables.sc,1,0,container):defaultData,fc:textAnimator_animatables.fc?getProp(elem,textAnimator_animatables.fc,1,0,container):defaultData,fh:textAnimator_animatables.fh?getProp(elem,textAnimator_animatables.fh,0,0,container):defaultData,fs:textAnimator_animatables.fs?getProp(elem,textAnimator_animatables.fs,0,0.01,container):defaultData,fb:textAnimator_animatables.fb?getProp(elem,textAnimator_animatables.fb,0,0.01,container):defaultData,t:textAnimator_animatables.t?getProp(elem,textAnimator_animatables.t,0,0,container):defaultData};this.s=TextSelectorProp.getTextSelectorProp(elem,animatorProps.s,container);this.s.t=animatorProps.s.t;}function LetterProps(o,sw,sc,fc,m,p){this.o=o;this.sw=sw;this.sc=sc;this.fc=fc;this.m=m;this.p=p;this._mdf={o:true,sw:!!sw,sc:!!sc,fc:!!fc,m:true,p:true};}LetterProps.prototype.update=function(o,sw,sc,fc,m,p){this._mdf.o=false;this._mdf.sw=false;this._mdf.sc=false;this._mdf.fc=false;this._mdf.m=false;this._mdf.p=false;var updated=false;if(this.o!==o){this.o=o;this._mdf.o=true;updated=true;}if(this.sw!==sw){this.sw=sw;this._mdf.sw=true;updated=true;}if(this.sc!==sc){this.sc=sc;this._mdf.sc=true;updated=true;}if(this.fc!==fc){this.fc=fc;this._mdf.fc=true;updated=true;}if(this.m!==m){this.m=m;this._mdf.m=true;updated=true;}if(p.length&&(this.p[0]!==p[0]||this.p[1]!==p[1]||this.p[4]!==p[4]||this.p[5]!==p[5]||this.p[12]!==p[12]||this.p[13]!==p[13])){this.p=p;this._mdf.p=true;updated=true;}return updated;};function TextProperty(elem,data){this._frameId=initialDefaultFrame;this.pv='';this.v='';this.kf=false;this._isFirstFrame=true;this._mdf=false;this.data=data;this.elem=elem;this.comp=this.elem.comp;this.keysIndex=0;this.canResize=false;this.minimumFontSize=1;this.effectsSequence=[];this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:'',fStyle:'',fWeight:'',fc:'',j:'',justifyOffset:'',l:[],lh:0,lineWidths:[],ls:'',of:'',s:'',sc:'',sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:false,strokeColorAnim:false,strokeWidthAnim:false,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:false};this.copyData(this.currentData,this.data.d.k[0].s);if(!this.searchProperty()){this.completeTextData(this.currentData);}}TextProperty.prototype.defaultBoxWidth=[0,0];TextProperty.prototype.copyData=function(obj,data){for(var s in data){if(data.hasOwnProperty(s)){obj[s]=data[s];}}return obj;};TextProperty.prototype.setCurrentData=function(data){if(!data.__complete){this.completeTextData(data);}this.currentData=data;this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth;this._mdf=true;};TextProperty.prototype.searchProperty=function(){return this.searchKeyframes();};TextProperty.prototype.searchKeyframes=function(){this.kf=this.data.d.k.length>1;if(this.kf){this.addEffect(this.getKeyframeValue.bind(this));}return this.kf;};TextProperty.prototype.addEffect=function(effectFunction){this.effectsSequence.push(effectFunction);this.elem.addDynamicProperty(this);};TextProperty.prototype.getValue=function(_finalValue){if((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!_finalValue){return;}this.currentData.t=this.data.d.k[this.keysIndex].s.t;var currentValue=this.currentData;var currentIndex=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return;}this.lock=true;this._mdf=false;var multipliedValue;var i,len=this.effectsSequence.length;var finalValue=_finalValue||this.data.d.k[this.keysIndex].s;for(i=0;i<len;i+=1){//Checking if index changed to prevent creating a new object every time the expression updates.
if(currentIndex!==this.keysIndex){finalValue=this.effectsSequence[i](finalValue,finalValue.t);}else{finalValue=this.effectsSequence[i](this.currentData,finalValue.t);}}if(currentValue!==finalValue){this.setCurrentData(finalValue);}this.pv=this.v=this.currentData;this.lock=false;this.frameId=this.elem.globalData.frameId;};TextProperty.prototype.getKeyframeValue=function(){var textKeys=this.data.d.k,textDocumentData;var frameNum=this.elem.comp.renderedFrame;var i=0,len=textKeys.length;while(i<=len-1){textDocumentData=textKeys[i].s;if(i===len-1||textKeys[i+1].t>frameNum){break;}i+=1;}if(this.keysIndex!==i){this.keysIndex=i;}return this.data.d.k[this.keysIndex].s;};TextProperty.prototype.buildFinalText=function(text){var combinedCharacters=FontManager.getCombinedCharacterCodes();var charactersArray=[];var i=0,len=text.length;var charCode;while(i<len){charCode=text.charCodeAt(i);if(combinedCharacters.indexOf(charCode)!==-1){charactersArray[charactersArray.length-1]+=text.charAt(i);}else{if(charCode>=0xD800&&charCode<=0xDBFF){charCode=text.charCodeAt(i+1);if(charCode>=0xDC00&&charCode<=0xDFFF){charactersArray.push(text.substr(i,2));++i;}else{charactersArray.push(text.charAt(i));}}else{charactersArray.push(text.charAt(i));}}i+=1;}return charactersArray;};TextProperty.prototype.completeTextData=function(documentData){documentData.__complete=true;var fontManager=this.elem.globalData.fontManager;var data=this.data;var letters=[];var i,len;var newLineFlag,index=0,val;var anchorGrouping=data.m.g;var currentSize=0,currentPos=0,currentLine=0,lineWidths=[];var lineWidth=0;var maxLineWidth=0;var j,jLen;var fontData=fontManager.getFontByName(documentData.f);var charData,cLength=0;var styles=fontData.fStyle?fontData.fStyle.split(' '):[];var fWeight='normal',fStyle='normal';len=styles.length;var styleName;for(i=0;i<len;i+=1){styleName=styles[i].toLowerCase();switch(styleName){case'italic':fStyle='italic';break;case'bold':fWeight='700';break;case'black':fWeight='900';break;case'medium':fWeight='500';break;case'regular':case'normal':fWeight='400';break;case'light':case'thin':fWeight='200';break;}}documentData.fWeight=fontData.fWeight||fWeight;documentData.fStyle=fStyle;documentData.finalSize=documentData.s;documentData.finalText=this.buildFinalText(documentData.t);len=documentData.finalText.length;documentData.finalLineHeight=documentData.lh;var trackingOffset=documentData.tr/1000*documentData.finalSize;var charCode;if(documentData.sz){var flag=true;var boxWidth=documentData.sz[0];var boxHeight=documentData.sz[1];var currentHeight,finalText;while(flag){finalText=this.buildFinalText(documentData.t);currentHeight=0;lineWidth=0;len=finalText.length;trackingOffset=documentData.tr/1000*documentData.finalSize;var lastSpaceIndex=-1;for(i=0;i<len;i+=1){charCode=finalText[i].charCodeAt(0);newLineFlag=false;if(finalText[i]===' '){lastSpaceIndex=i;}else if(charCode===13||charCode===3){lineWidth=0;newLineFlag=true;currentHeight+=documentData.finalLineHeight||documentData.finalSize*1.2;}if(fontManager.chars){charData=fontManager.getCharData(finalText[i],fontData.fStyle,fontData.fFamily);cLength=newLineFlag?0:charData.w*documentData.finalSize/100;}else{//tCanvasHelper.font = documentData.s + 'px '+ fontData.fFamily;
cLength=fontManager.measureText(finalText[i],documentData.f,documentData.finalSize);}if(lineWidth+cLength>boxWidth&&finalText[i]!==' '){if(lastSpaceIndex===-1){len+=1;}else{i=lastSpaceIndex;}currentHeight+=documentData.finalLineHeight||documentData.finalSize*1.2;finalText.splice(i,lastSpaceIndex===i?1:0,"\r");//finalText = finalText.substr(0,i) + "\r" + finalText.substr(i === lastSpaceIndex ? i + 1 : i);
lastSpaceIndex=-1;lineWidth=0;}else{lineWidth+=cLength;lineWidth+=trackingOffset;}}currentHeight+=fontData.ascent*documentData.finalSize/100;if(this.canResize&&documentData.finalSize>this.minimumFontSize&&boxHeight<currentHeight){documentData.finalSize-=1;documentData.finalLineHeight=documentData.finalSize*documentData.lh/documentData.s;}else{documentData.finalText=finalText;len=documentData.finalText.length;flag=false;}}}lineWidth=-trackingOffset;cLength=0;var uncollapsedSpaces=0;var currentChar;for(i=0;i<len;i+=1){newLineFlag=false;currentChar=documentData.finalText[i];charCode=currentChar.charCodeAt(0);if(currentChar===' '){val="\xA0";}else if(charCode===13||charCode===3){uncollapsedSpaces=0;lineWidths.push(lineWidth);maxLineWidth=lineWidth>maxLineWidth?lineWidth:maxLineWidth;lineWidth=-2*trackingOffset;val='';newLineFlag=true;currentLine+=1;}else{val=documentData.finalText[i];}if(fontManager.chars){charData=fontManager.getCharData(currentChar,fontData.fStyle,fontManager.getFontByName(documentData.f).fFamily);cLength=newLineFlag?0:charData.w*documentData.finalSize/100;}else{//var charWidth = fontManager.measureText(val, documentData.f, documentData.finalSize);
//tCanvasHelper.font = documentData.finalSize + 'px '+ fontManager.getFontByName(documentData.f).fFamily;
cLength=fontManager.measureText(val,documentData.f,documentData.finalSize);}//
if(currentChar===' '){uncollapsedSpaces+=cLength+trackingOffset;}else{lineWidth+=cLength+trackingOffset+uncollapsedSpaces;uncollapsedSpaces=0;}letters.push({l:cLength,an:cLength,add:currentSize,n:newLineFlag,anIndexes:[],val:val,line:currentLine,animatorJustifyOffset:0});if(anchorGrouping==2){currentSize+=cLength;if(val===''||val==="\xA0"||i===len-1){if(val===''||val==="\xA0"){currentSize-=cLength;}while(currentPos<=i){letters[currentPos].an=currentSize;letters[currentPos].ind=index;letters[currentPos].extra=cLength;currentPos+=1;}index+=1;currentSize=0;}}else if(anchorGrouping==3){currentSize+=cLength;if(val===''||i===len-1){if(val===''){currentSize-=cLength;}while(currentPos<=i){letters[currentPos].an=currentSize;letters[currentPos].ind=index;letters[currentPos].extra=cLength;currentPos+=1;}currentSize=0;index+=1;}}else{letters[index].ind=index;letters[index].extra=0;index+=1;}}documentData.l=letters;maxLineWidth=lineWidth>maxLineWidth?lineWidth:maxLineWidth;lineWidths.push(lineWidth);if(documentData.sz){documentData.boxWidth=documentData.sz[0];documentData.justifyOffset=0;}else{documentData.boxWidth=maxLineWidth;switch(documentData.j){case 1:documentData.justifyOffset=-documentData.boxWidth;break;case 2:documentData.justifyOffset=-documentData.boxWidth/2;break;default:documentData.justifyOffset=0;}}documentData.lineWidths=lineWidths;var animators=data.a,animatorData,letterData;jLen=animators.length;var based,ind,indexes=[];for(j=0;j<jLen;j+=1){animatorData=animators[j];if(animatorData.a.sc){documentData.strokeColorAnim=true;}if(animatorData.a.sw){documentData.strokeWidthAnim=true;}if(animatorData.a.fc||animatorData.a.fh||animatorData.a.fs||animatorData.a.fb){documentData.fillColorAnim=true;}ind=0;based=animatorData.s.b;for(i=0;i<len;i+=1){letterData=letters[i];letterData.anIndexes[j]=ind;if(based==1&&letterData.val!==''||based==2&&letterData.val!==''&&letterData.val!=="\xA0"||based==3&&(letterData.n||letterData.val=="\xA0"||i==len-1)||based==4&&(letterData.n||i==len-1)){if(animatorData.s.rn===1){indexes.push(ind);}ind+=1;}}data.a[j].s.totalChars=ind;var currentInd=-1,newInd;if(animatorData.s.rn===1){for(i=0;i<len;i+=1){letterData=letters[i];if(currentInd!=letterData.anIndexes[j]){currentInd=letterData.anIndexes[j];newInd=indexes.splice(Math.floor(Math.random()*indexes.length),1)[0];}letterData.anIndexes[j]=newInd;}}}documentData.yOffset=documentData.finalLineHeight||documentData.finalSize*1.2;documentData.ls=documentData.ls||0;documentData.ascent=fontData.ascent*documentData.finalSize/100;};TextProperty.prototype.updateDocumentData=function(newData,index){index=index===undefined?this.keysIndex:index;var dData=this.copyData({},this.data.d.k[index].s);dData=this.copyData(dData,newData);this.data.d.k[index].s=dData;this.recalculate(index);this.elem.addDynamicProperty(this);};TextProperty.prototype.recalculate=function(index){var dData=this.data.d.k[index].s;dData.__complete=false;this.keysIndex=0;this._isFirstFrame=true;this.getValue(dData);};TextProperty.prototype.canResizeFont=function(_canResize){this.canResize=_canResize;this.recalculate(this.keysIndex);this.elem.addDynamicProperty(this);};TextProperty.prototype.setMinimumFontSize=function(_fontValue){this.minimumFontSize=Math.floor(_fontValue)||1;this.recalculate(this.keysIndex);this.elem.addDynamicProperty(this);};var TextSelectorProp=function(){var max=Math.max;var min=Math.min;var floor=Math.floor;function TextSelectorProp(elem,data){this._currentTextLength=-1;this.k=false;this.data=data;this.elem=elem;this.comp=elem.comp;this.finalS=0;this.finalE=0;this.initDynamicPropertyContainer(elem);this.s=PropertyFactory.getProp(elem,data.s||{k:0},0,0,this);if('e'in data){this.e=PropertyFactory.getProp(elem,data.e,0,0,this);}else{this.e={v:100};}this.o=PropertyFactory.getProp(elem,data.o||{k:0},0,0,this);this.xe=PropertyFactory.getProp(elem,data.xe||{k:0},0,0,this);this.ne=PropertyFactory.getProp(elem,data.ne||{k:0},0,0,this);this.a=PropertyFactory.getProp(elem,data.a,0,0.01,this);if(!this.dynamicProperties.length){this.getValue();}}TextSelectorProp.prototype={getMult:function getMult(ind){if(this._currentTextLength!==this.elem.textProperty.currentData.l.length){this.getValue();}//var easer = bez.getEasingCurve(this.ne.v/100,0,1-this.xe.v/100,1);
var x1=0;var y1=0;var x2=1;var y2=1;if(this.ne.v>0){x1=this.ne.v/100.0;}else{y1=-this.ne.v/100.0;}if(this.xe.v>0){x2=1.0-this.xe.v/100.0;}else{y2=1.0+this.xe.v/100.0;}var easer=BezierFactory.getBezierEasing(x1,y1,x2,y2).get;var mult=0;var s=this.finalS;var e=this.finalE;var type=this.data.sh;if(type===2){if(e===s){mult=ind>=e?1:0;}else{mult=max(0,min(0.5/(e-s)+(ind-s)/(e-s),1));}mult=easer(mult);}else if(type===3){if(e===s){mult=ind>=e?0:1;}else{mult=1-max(0,min(0.5/(e-s)+(ind-s)/(e-s),1));}mult=easer(mult);}else if(type===4){if(e===s){mult=0;}else{mult=max(0,min(0.5/(e-s)+(ind-s)/(e-s),1));if(mult<0.5){mult*=2;}else{mult=1-2*(mult-0.5);}}mult=easer(mult);}else if(type===5){if(e===s){mult=0;}else{var tot=e-s;/*ind += 0.5;
                    mult = -4/(tot*tot)*(ind*ind)+(4/tot)*ind;*/ind=min(max(0,ind+0.5-s),e-s);var x=-tot/2+ind;var a=tot/2;mult=Math.sqrt(1-x*x/(a*a));}mult=easer(mult);}else if(type===6){if(e===s){mult=0;}else{ind=min(max(0,ind+0.5-s),e-s);mult=(1+Math.cos(Math.PI+Math.PI*2*ind/(e-s)))/2;}mult=easer(mult);}else{if(ind>=floor(s)){if(ind-s<0){mult=max(0,min(min(e,1)-(s-ind),1));}else{mult=max(0,min(e-ind,1));}}mult=easer(mult);}return mult*this.a.v;},getValue:function getValue(newCharsFlag){this.iterateDynamicProperties();this._mdf=newCharsFlag||this._mdf;this._currentTextLength=this.elem.textProperty.currentData.l.length||0;if(newCharsFlag&&this.data.r===2){this.e.v=this._currentTextLength;}var divisor=this.data.r===2?1:100/this.data.totalChars;var o=this.o.v/divisor;var s=this.s.v/divisor+o;var e=this.e.v/divisor+o;if(s>e){var _s=s;s=e;e=_s;}this.finalS=s;this.finalE=e;}};extendPrototype([DynamicPropertyContainer],TextSelectorProp);function getTextSelectorProp(elem,data,arr){return new TextSelectorProp(elem,data,arr);}return{getTextSelectorProp:getTextSelectorProp};}();var pool_factory=function(){return function(initialLength,_create,_release,_clone){var _length=0;var _maxLength=initialLength;var pool=createSizedArray(_maxLength);var ob={newElement:newElement,release:release};function newElement(){var element;if(_length){_length-=1;element=pool[_length];}else{element=_create();}return element;}function release(element){if(_length===_maxLength){pool=pooling["double"](pool);_maxLength=_maxLength*2;}if(_release){_release(element);}pool[_length]=element;_length+=1;}function clone(){var clonedElement=newElement();return _clone(clonedElement);}return ob;};}();var pooling=function(){function _double(arr){return arr.concat(createSizedArray(arr.length));}return{"double":_double};}();var point_pool=function(){function create(){return createTypedArray('float32',2);}return pool_factory(8,create);}();var shape_pool=function(){function create(){return new ShapePath();}function release(shapePath){var len=shapePath._length,i;for(i=0;i<len;i+=1){point_pool.release(shapePath.v[i]);point_pool.release(shapePath.i[i]);point_pool.release(shapePath.o[i]);shapePath.v[i]=null;shapePath.i[i]=null;shapePath.o[i]=null;}shapePath._length=0;shapePath.c=false;}function clone(shape){var cloned=factory.newElement();var i,len=shape._length===undefined?shape.v.length:shape._length;cloned.setLength(len);cloned.c=shape.c;var pt;for(i=0;i<len;i+=1){cloned.setTripleAt(shape.v[i][0],shape.v[i][1],shape.o[i][0],shape.o[i][1],shape.i[i][0],shape.i[i][1],i);}return cloned;}var factory=pool_factory(4,create,release);factory.clone=clone;return factory;}();var shapeCollection_pool=function(){var ob={newShapeCollection:newShapeCollection,release:release};var _length=0;var _maxLength=4;var pool=createSizedArray(_maxLength);function newShapeCollection(){var shapeCollection;if(_length){_length-=1;shapeCollection=pool[_length];}else{shapeCollection=new ShapeCollection();}return shapeCollection;}function release(shapeCollection){var i,len=shapeCollection._length;for(i=0;i<len;i+=1){shape_pool.release(shapeCollection.shapes[i]);}shapeCollection._length=0;if(_length===_maxLength){pool=pooling["double"](pool);_maxLength=_maxLength*2;}pool[_length]=shapeCollection;_length+=1;}return ob;}();var segments_length_pool=function(){function create(){return{lengths:[],totalLength:0};}function release(element){var i,len=element.lengths.length;for(i=0;i<len;i+=1){bezier_length_pool.release(element.lengths[i]);}element.lengths.length=0;}return pool_factory(8,create,release);}();var bezier_length_pool=function(){function create(){return{addedLength:0,percents:createTypedArray('float32',defaultCurveSegments),lengths:createTypedArray('float32',defaultCurveSegments)};}return pool_factory(8,create);}();function BaseRenderer(){}BaseRenderer.prototype.checkLayers=function(num){var i,len=this.layers.length,data;this.completeLayers=true;for(i=len-1;i>=0;i--){if(!this.elements[i]){data=this.layers[i];if(data.ip-data.st<=num-this.layers[i].st&&data.op-data.st>num-this.layers[i].st){this.buildItem(i);}}this.completeLayers=this.elements[i]?this.completeLayers:false;}this.checkPendingElements();};BaseRenderer.prototype.createItem=function(layer){switch(layer.ty){case 2:return this.createImage(layer);case 0:return this.createComp(layer);case 1:return this.createSolid(layer);case 3:return this.createNull(layer);case 4:return this.createShape(layer);case 5:return this.createText(layer);case 13:return this.createCamera(layer);}return this.createNull(layer);};BaseRenderer.prototype.createCamera=function(){throw new Error('You\'re using a 3d camera. Try the html renderer.');};BaseRenderer.prototype.buildAllItems=function(){var i,len=this.layers.length;for(i=0;i<len;i+=1){this.buildItem(i);}this.checkPendingElements();};BaseRenderer.prototype.includeLayers=function(newLayers){this.completeLayers=false;var i,len=newLayers.length;var j,jLen=this.layers.length;for(i=0;i<len;i+=1){j=0;while(j<jLen){if(this.layers[j].id==newLayers[i].id){this.layers[j]=newLayers[i];break;}j+=1;}}};BaseRenderer.prototype.setProjectInterface=function(pInterface){this.globalData.projectInterface=pInterface;};BaseRenderer.prototype.initItems=function(){if(!this.globalData.progressiveLoad){this.buildAllItems();}};BaseRenderer.prototype.buildElementParenting=function(element,parentName,hierarchy){var elements=this.elements;var layers=this.layers;var i=0,len=layers.length;while(i<len){if(layers[i].ind==parentName){if(!elements[i]||elements[i]===true){this.buildItem(i);this.addPendingElement(element);}else{hierarchy.push(elements[i]);elements[i].setAsParent();if(layers[i].parent!==undefined){this.buildElementParenting(element,layers[i].parent,hierarchy);}else{element.setHierarchy(hierarchy);}}}i+=1;}};BaseRenderer.prototype.addPendingElement=function(element){this.pendingElements.push(element);};BaseRenderer.prototype.searchExtraCompositions=function(assets){var i,len=assets.length;for(i=0;i<len;i+=1){if(assets[i].xt){var comp=this.createComp(assets[i]);comp.initExpressions();this.globalData.projectInterface.registerComposition(comp);}}};BaseRenderer.prototype.setupGlobalData=function(animData,fontsContainer){this.globalData.fontManager=new FontManager();this.globalData.fontManager.addChars(animData.chars);this.globalData.fontManager.addFonts(animData.fonts,fontsContainer);this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem);this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem);this.globalData.imageLoader=this.animationItem.imagePreloader;this.globalData.frameId=0;this.globalData.frameRate=animData.fr;this.globalData.nm=animData.nm;this.globalData.compSize={w:animData.w,h:animData.h};};function SVGRenderer(animationItem,config){this.animationItem=animationItem;this.layers=null;this.renderedFrame=-1;this.svgElement=createNS('svg');var ariaLabel='';if(config&&config.title){var titleElement=createNS('title');var titleId=createElementID();titleElement.setAttribute('id',titleId);titleElement.textContent=config.title;this.svgElement.appendChild(titleElement);ariaLabel+=titleId;}if(config&&config.description){var descElement=createNS('desc');var descId=createElementID();descElement.setAttribute('id',descId);descElement.textContent=config.description;this.svgElement.appendChild(descElement);ariaLabel+=' '+descId;}if(ariaLabel){this.svgElement.setAttribute('aria-labelledby',ariaLabel);}var defs=createNS('defs');this.svgElement.appendChild(defs);var maskElement=createNS('g');this.svgElement.appendChild(maskElement);this.layerElement=maskElement;this.renderConfig={preserveAspectRatio:config&&config.preserveAspectRatio||'xMidYMid meet',imagePreserveAspectRatio:config&&config.imagePreserveAspectRatio||'xMidYMid slice',progressiveLoad:config&&config.progressiveLoad||false,hideOnTransparent:config&&config.hideOnTransparent===false?false:true,viewBoxOnly:config&&config.viewBoxOnly||false,viewBoxSize:config&&config.viewBoxSize||false,className:config&&config.className||'',id:config&&config.id||'',focusable:config&&config.focusable};this.globalData={_mdf:false,frameNum:-1,defs:defs,renderConfig:this.renderConfig};this.elements=[];this.pendingElements=[];this.destroyed=false;this.rendererType='svg';}extendPrototype([BaseRenderer],SVGRenderer);SVGRenderer.prototype.createNull=function(data){return new NullElement(data,this.globalData,this);};SVGRenderer.prototype.createShape=function(data){return new SVGShapeElement(data,this.globalData,this);};SVGRenderer.prototype.createText=function(data){return new SVGTextElement(data,this.globalData,this);};SVGRenderer.prototype.createImage=function(data){return new IImageElement(data,this.globalData,this);};SVGRenderer.prototype.createComp=function(data){return new SVGCompElement(data,this.globalData,this);};SVGRenderer.prototype.createSolid=function(data){return new ISolidElement(data,this.globalData,this);};SVGRenderer.prototype.configAnimation=function(animData){this.svgElement.setAttribute('xmlns','http://www.w3.org/2000/svg');if(this.renderConfig.viewBoxSize){this.svgElement.setAttribute('viewBox',this.renderConfig.viewBoxSize);}else{this.svgElement.setAttribute('viewBox','0 0 '+animData.w+' '+animData.h);}if(!this.renderConfig.viewBoxOnly){this.svgElement.setAttribute('width',animData.w);this.svgElement.setAttribute('height',animData.h);this.svgElement.style.width='100%';this.svgElement.style.height='100%';this.svgElement.style.transform='translate3d(0,0,0)';}if(this.renderConfig.className){this.svgElement.setAttribute('class',this.renderConfig.className);}if(this.renderConfig.id){this.svgElement.setAttribute('id',this.renderConfig.id);}if(this.renderConfig.focusable!==undefined){this.svgElement.setAttribute('focusable',this.renderConfig.focusable);}this.svgElement.setAttribute('preserveAspectRatio',this.renderConfig.preserveAspectRatio);//this.layerElement.style.transform = 'translate3d(0,0,0)';
//this.layerElement.style.transformOrigin = this.layerElement.style.mozTransformOrigin = this.layerElement.style.webkitTransformOrigin = this.layerElement.style['-webkit-transform'] = "0px 0px 0px";
this.animationItem.wrapper.appendChild(this.svgElement);//Mask animation
var defs=this.globalData.defs;this.setupGlobalData(animData,defs);this.globalData.progressiveLoad=this.renderConfig.progressiveLoad;this.data=animData;var maskElement=createNS('clipPath');var rect=createNS('rect');rect.setAttribute('width',animData.w);rect.setAttribute('height',animData.h);rect.setAttribute('x',0);rect.setAttribute('y',0);var maskId=createElementID();maskElement.setAttribute('id',maskId);maskElement.appendChild(rect);this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+maskId+")");defs.appendChild(maskElement);this.layers=animData.layers;this.elements=createSizedArray(animData.layers.length);};SVGRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML='';this.layerElement=null;this.globalData.defs=null;var i,len=this.layers?this.layers.length:0;for(i=0;i<len;i++){if(this.elements[i]){this.elements[i].destroy();}}this.elements.length=0;this.destroyed=true;this.animationItem=null;};SVGRenderer.prototype.updateContainerSize=function(){};SVGRenderer.prototype.buildItem=function(pos){var elements=this.elements;if(elements[pos]||this.layers[pos].ty==99){return;}elements[pos]=true;var element=this.createItem(this.layers[pos]);elements[pos]=element;if(expressionsPlugin){if(this.layers[pos].ty===0){this.globalData.projectInterface.registerComposition(element);}element.initExpressions();}this.appendElementInPos(element,pos);if(this.layers[pos].tt){if(!this.elements[pos-1]||this.elements[pos-1]===true){this.buildItem(pos-1);this.addPendingElement(element);}else{element.setMatte(elements[pos-1].layerId);}}};SVGRenderer.prototype.checkPendingElements=function(){while(this.pendingElements.length){var element=this.pendingElements.pop();element.checkParenting();if(element.data.tt){var i=0,len=this.elements.length;while(i<len){if(this.elements[i]===element){element.setMatte(this.elements[i-1].layerId);break;}i+=1;}}}};SVGRenderer.prototype.renderFrame=function(num){if(this.renderedFrame===num||this.destroyed){return;}if(num===null){num=this.renderedFrame;}else{this.renderedFrame=num;}// console.log('-------');
// console.log('FRAME ',num);
this.globalData.frameNum=num;this.globalData.frameId+=1;this.globalData.projectInterface.currentFrame=num;this.globalData._mdf=false;var i,len=this.layers.length;if(!this.completeLayers){this.checkLayers(num);}for(i=len-1;i>=0;i--){if(this.completeLayers||this.elements[i]){this.elements[i].prepareFrame(num-this.layers[i].st);}}if(this.globalData._mdf){for(i=0;i<len;i+=1){if(this.completeLayers||this.elements[i]){this.elements[i].renderFrame();}}}};SVGRenderer.prototype.appendElementInPos=function(element,pos){var newElement=element.getBaseElement();if(!newElement){return;}var i=0;var nextElement;while(i<pos){if(this.elements[i]&&this.elements[i]!==true&&this.elements[i].getBaseElement()){nextElement=this.elements[i].getBaseElement();}i+=1;}if(nextElement){this.layerElement.insertBefore(newElement,nextElement);}else{this.layerElement.appendChild(newElement);}};SVGRenderer.prototype.hide=function(){this.layerElement.style.display='none';};SVGRenderer.prototype.show=function(){this.layerElement.style.display='block';};function MaskElement(data,element,globalData){this.data=data;this.element=element;this.globalData=globalData;this.storedData=[];this.masksProperties=this.data.masksProperties||[];this.maskElement=null;var defs=this.globalData.defs;var i,len=this.masksProperties?this.masksProperties.length:0;this.viewData=createSizedArray(len);this.solidPath='';var path,properties=this.masksProperties;var count=0;var currentMasks=[];var j,jLen;var layerId=createElementID();var rect,expansor,feMorph,x;var maskType='clipPath',maskRef='clip-path';for(i=0;i<len;i++){if(properties[i].mode!=='a'&&properties[i].mode!=='n'||properties[i].inv||properties[i].o.k!==100||properties[i].o.x){maskType='mask';maskRef='mask';}if((properties[i].mode=='s'||properties[i].mode=='i')&&count===0){rect=createNS('rect');rect.setAttribute('fill','#ffffff');rect.setAttribute('width',this.element.comp.data.w||0);rect.setAttribute('height',this.element.comp.data.h||0);currentMasks.push(rect);}else{rect=null;}path=createNS('path');if(properties[i].mode=='n'){// TODO move this to a factory or to a constructor
this.viewData[i]={op:PropertyFactory.getProp(this.element,properties[i].o,0,0.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,properties[i],3),elem:path,lastPath:''};defs.appendChild(path);continue;}count+=1;path.setAttribute('fill',properties[i].mode==='s'?'#000000':'#ffffff');path.setAttribute('clip-rule','nonzero');var filterID;if(properties[i].x.k!==0){maskType='mask';maskRef='mask';x=PropertyFactory.getProp(this.element,properties[i].x,0,null,this.element);filterID=createElementID();expansor=createNS('filter');expansor.setAttribute('id',filterID);feMorph=createNS('feMorphology');feMorph.setAttribute('operator','erode');feMorph.setAttribute('in','SourceGraphic');feMorph.setAttribute('radius','0');expansor.appendChild(feMorph);defs.appendChild(expansor);path.setAttribute('stroke',properties[i].mode==='s'?'#000000':'#ffffff');}else{feMorph=null;x=null;}// TODO move this to a factory or to a constructor
this.storedData[i]={elem:path,x:x,expan:feMorph,lastPath:'',lastOperator:'',filterId:filterID,lastRadius:0};if(properties[i].mode=='i'){jLen=currentMasks.length;var g=createNS('g');for(j=0;j<jLen;j+=1){g.appendChild(currentMasks[j]);}var mask=createNS('mask');mask.setAttribute('mask-type','alpha');mask.setAttribute('id',layerId+'_'+count);mask.appendChild(path);defs.appendChild(mask);g.setAttribute('mask','url('+locationHref+'#'+layerId+'_'+count+')');currentMasks.length=0;currentMasks.push(g);}else{currentMasks.push(path);}if(properties[i].inv&&!this.solidPath){this.solidPath=this.createLayerSolidPath();}// TODO move this to a factory or to a constructor
this.viewData[i]={elem:path,lastPath:'',op:PropertyFactory.getProp(this.element,properties[i].o,0,0.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,properties[i],3),invRect:rect};if(!this.viewData[i].prop.k){this.drawPath(properties[i],this.viewData[i].prop.v,this.viewData[i]);}}this.maskElement=createNS(maskType);len=currentMasks.length;for(i=0;i<len;i+=1){this.maskElement.appendChild(currentMasks[i]);}if(count>0){this.maskElement.setAttribute('id',layerId);this.element.maskedElement.setAttribute(maskRef,"url("+locationHref+"#"+layerId+")");defs.appendChild(this.maskElement);}if(this.viewData.length){this.element.addRenderableComponent(this);}}MaskElement.prototype.getMaskProperty=function(pos){return this.viewData[pos].prop;};MaskElement.prototype.renderFrame=function(isFirstFrame){var finalMat=this.element.finalTransform.mat;var i,len=this.masksProperties.length;for(i=0;i<len;i++){if(this.viewData[i].prop._mdf||isFirstFrame){this.drawPath(this.masksProperties[i],this.viewData[i].prop.v,this.viewData[i]);}if(this.viewData[i].op._mdf||isFirstFrame){this.viewData[i].elem.setAttribute('fill-opacity',this.viewData[i].op.v);}if(this.masksProperties[i].mode!=='n'){if(this.viewData[i].invRect&&(this.element.finalTransform.mProp._mdf||isFirstFrame)){this.viewData[i].invRect.setAttribute('transform',finalMat.getInverseMatrix().to2dCSS());}if(this.storedData[i].x&&(this.storedData[i].x._mdf||isFirstFrame)){var feMorph=this.storedData[i].expan;if(this.storedData[i].x.v<0){if(this.storedData[i].lastOperator!=='erode'){this.storedData[i].lastOperator='erode';this.storedData[i].elem.setAttribute('filter','url('+locationHref+'#'+this.storedData[i].filterId+')');}feMorph.setAttribute('radius',-this.storedData[i].x.v);}else{if(this.storedData[i].lastOperator!=='dilate'){this.storedData[i].lastOperator='dilate';this.storedData[i].elem.setAttribute('filter',null);}this.storedData[i].elem.setAttribute('stroke-width',this.storedData[i].x.v*2);}}}}};MaskElement.prototype.getMaskelement=function(){return this.maskElement;};MaskElement.prototype.createLayerSolidPath=function(){var path='M0,0 ';path+=' h'+this.globalData.compSize.w;path+=' v'+this.globalData.compSize.h;path+=' h-'+this.globalData.compSize.w;path+=' v-'+this.globalData.compSize.h+' ';return path;};MaskElement.prototype.drawPath=function(pathData,pathNodes,viewData){var pathString=" M"+pathNodes.v[0][0]+','+pathNodes.v[0][1];var i,len;len=pathNodes._length;for(i=1;i<len;i+=1){//pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[i][0]+','+pathNodes.i[i][1] + " "+pathNodes.v[i][0]+','+pathNodes.v[i][1];
pathString+=" C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1]+" "+pathNodes.i[i][0]+','+pathNodes.i[i][1]+" "+pathNodes.v[i][0]+','+pathNodes.v[i][1];}//pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[0][0]+','+pathNodes.i[0][1] + " "+pathNodes.v[0][0]+','+pathNodes.v[0][1];
if(pathNodes.c&&len>1){pathString+=" C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1]+" "+pathNodes.i[0][0]+','+pathNodes.i[0][1]+" "+pathNodes.v[0][0]+','+pathNodes.v[0][1];}//pathNodes.__renderedString = pathString;
if(viewData.lastPath!==pathString){var pathShapeValue='';if(viewData.elem){if(pathNodes.c){pathShapeValue=pathData.inv?this.solidPath+pathString:pathString;}viewData.elem.setAttribute('d',pathShapeValue);}viewData.lastPath=pathString;}};MaskElement.prototype.destroy=function(){this.element=null;this.globalData=null;this.maskElement=null;this.data=null;this.masksProperties=null;};/**
     * @file
     * Handles AE's layer parenting property.
     *
     */function HierarchyElement(){}HierarchyElement.prototype={/**
         * @function
         * Initializes hierarchy properties
         *
         */initHierarchy:function initHierarchy(){//element's parent list
this.hierarchy=[];//if element is parent of another layer _isParent will be true
this._isParent=false;this.checkParenting();},/**
         * @function
         * Sets layer's hierarchy.
         * @param {array} hierarch
         * layer's parent list
         *
         */setHierarchy:function setHierarchy(hierarchy){this.hierarchy=hierarchy;},/**
         * @function
         * Sets layer as parent.
         *
         */setAsParent:function setAsParent(){this._isParent=true;},/**
         * @function
         * Searches layer's parenting chain
         *
         */checkParenting:function checkParenting(){if(this.data.parent!==undefined){this.comp.buildElementParenting(this,this.data.parent,[]);}}};/**
     * @file
     * Handles element's layer frame update.
     * Checks layer in point and out point
     *
     */function FrameElement(){}FrameElement.prototype={/**
         * @function
         * Initializes frame related properties.
         *
         */initFrame:function initFrame(){//set to true when inpoint is rendered
this._isFirstFrame=false;//list of animated properties
this.dynamicProperties=[];// If layer has been modified in current tick this will be true
this._mdf=false;},/**
         * @function
         * Calculates all dynamic values
         *
         * @param {number} num
         * current frame number in Layer's time
         * @param {boolean} isVisible
         * if layers is currently in range
         *
         */prepareProperties:function prepareProperties(num,isVisible){var i,len=this.dynamicProperties.length;for(i=0;i<len;i+=1){if(isVisible||this._isParent&&this.dynamicProperties[i].propType==='transform'){this.dynamicProperties[i].getValue();if(this.dynamicProperties[i]._mdf){this.globalData._mdf=true;this._mdf=true;}}}},addDynamicProperty:function addDynamicProperty(prop){if(this.dynamicProperties.indexOf(prop)===-1){this.dynamicProperties.push(prop);}}};function TransformElement(){}TransformElement.prototype={initTransform:function initTransform(){this.finalTransform={mProp:this.data.ks?TransformPropertyFactory.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:false,_opMdf:false,mat:new Matrix()};if(this.data.ao){this.finalTransform.mProp.autoOriented=true;}//TODO: check TYPE 11: Guided elements
if(this.data.ty!==11){//this.createElements();
}},renderTransform:function renderTransform(){this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame;this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame;if(this.hierarchy){var mat;var finalMat=this.finalTransform.mat;var i=0,len=this.hierarchy.length;//Checking if any of the transformation matrices in the hierarchy chain has changed.
if(!this.finalTransform._matMdf){while(i<len){if(this.hierarchy[i].finalTransform.mProp._mdf){this.finalTransform._matMdf=true;break;}i+=1;}}if(this.finalTransform._matMdf){mat=this.finalTransform.mProp.v.props;finalMat.cloneFromProps(mat);for(i=0;i<len;i+=1){mat=this.hierarchy[i].finalTransform.mProp.v.props;finalMat.transform(mat[0],mat[1],mat[2],mat[3],mat[4],mat[5],mat[6],mat[7],mat[8],mat[9],mat[10],mat[11],mat[12],mat[13],mat[14],mat[15]);}}}},globalToLocal:function globalToLocal(pt){var transforms=[];transforms.push(this.finalTransform);var flag=true;var comp=this.comp;while(flag){if(comp.finalTransform){if(comp.data.hasMask){transforms.splice(0,0,comp.finalTransform);}comp=comp.comp;}else{flag=false;}}var i,len=transforms.length,ptNew;for(i=0;i<len;i+=1){ptNew=transforms[i].mat.applyToPointArray(0,0,0);//ptNew = transforms[i].mat.applyToPointArray(pt[0],pt[1],pt[2]);
pt=[pt[0]-ptNew[0],pt[1]-ptNew[1],0];}return pt;},mHelper:new Matrix()};function RenderableElement(){}RenderableElement.prototype={initRenderable:function initRenderable(){//layer's visibility related to inpoint and outpoint. Rename isVisible to isInRange
this.isInRange=false;//layer's display state
this.hidden=false;// If layer's transparency equals 0, it can be hidden
this.isTransparent=false;//list of animated components
this.renderableComponents=[];},addRenderableComponent:function addRenderableComponent(component){if(this.renderableComponents.indexOf(component)===-1){this.renderableComponents.push(component);}},removeRenderableComponent:function removeRenderableComponent(component){if(this.renderableComponents.indexOf(component)!==-1){this.renderableComponents.splice(this.renderableComponents.indexOf(component),1);}},prepareRenderableFrame:function prepareRenderableFrame(num){this.checkLayerLimits(num);},checkTransparency:function checkTransparency(){if(this.finalTransform.mProp.o.v<=0){if(!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent){this.isTransparent=true;this.hide();}}else if(this.isTransparent){this.isTransparent=false;this.show();}},/**
         * @function
         * Initializes frame related properties.
         *
         * @param {number} num
         * current frame number in Layer's time
         *
         */checkLayerLimits:function checkLayerLimits(num){if(this.data.ip-this.data.st<=num&&this.data.op-this.data.st>num){if(this.isInRange!==true){this.globalData._mdf=true;this._mdf=true;this.isInRange=true;this.show();}}else{if(this.isInRange!==false){this.globalData._mdf=true;this.isInRange=false;this.hide();}}},renderRenderable:function renderRenderable(){var i,len=this.renderableComponents.length;for(i=0;i<len;i+=1){this.renderableComponents[i].renderFrame(this._isFirstFrame);}/*this.maskManager.renderFrame(this.finalTransform.mat);
        this.renderableEffectsManager.renderFrame(this._isFirstFrame);*/},sourceRectAtTime:function sourceRectAtTime(){return{top:0,left:0,width:100,height:100};},getLayerSize:function getLayerSize(){if(this.data.ty===5){return{w:this.data.textData.width,h:this.data.textData.height};}else{return{w:this.data.width,h:this.data.height};}}};function RenderableDOMElement(){}(function(){var _prototype={initElement:function initElement(data,globalData,comp){this.initFrame();this.initBaseData(data,globalData,comp);this.initTransform(data,globalData,comp);this.initHierarchy();this.initRenderable();this.initRendererElement();this.createContainerElements();this.createRenderableComponents();this.createContent();this.hide();},hide:function hide(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var elem=this.baseElement||this.layerElement;elem.style.display='none';this.hidden=true;}},show:function show(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var elem=this.baseElement||this.layerElement;elem.style.display='block';}this.hidden=false;this._isFirstFrame=true;}},renderFrame:function renderFrame(){//If it is exported as hidden (data.hd === true) no need to render
//If it is not visible no need to render
if(this.data.hd||this.hidden){return;}this.renderTransform();this.renderRenderable();this.renderElement();this.renderInnerContent();if(this._isFirstFrame){this._isFirstFrame=false;}},renderInnerContent:function renderInnerContent(){},prepareFrame:function prepareFrame(num){this._mdf=false;this.prepareRenderableFrame(num);this.prepareProperties(num,this.isInRange);this.checkTransparency();},destroy:function destroy(){this.innerElem=null;this.destroyBaseElement();}};extendPrototype([RenderableElement,createProxyFunction(_prototype)],RenderableDOMElement);})();function ProcessedElement(element,position){this.elem=element;this.pos=position;}function SVGStyleData(data,level){this.data=data;this.type=data.ty;this.d='';this.lvl=level;this._mdf=false;this.closed=data.hd===true;this.pElem=createNS('path');this.msElem=null;}SVGStyleData.prototype.reset=function(){this.d='';this._mdf=false;};function SVGShapeData(transformers,level,shape){this.caches=[];this.styles=[];this.transformers=transformers;this.lStr='';this.sh=shape;this.lvl=level;//TODO find if there are some cases where _isAnimated can be false.
// For now, since shapes add up with other shapes. They have to be calculated every time.
// One way of finding out is checking if all styles associated to this shape depend only of this shape
this._isAnimated=!!shape.k;// TODO: commenting this for now since all shapes are animated
var i=0,len=transformers.length;while(i<len){if(transformers[i].mProps.dynamicProperties.length){this._isAnimated=true;break;}i+=1;}}SVGShapeData.prototype.setAsAnimated=function(){this._isAnimated=true;};function SVGTransformData(mProps,op,container){this.transform={mProps:mProps,op:op,container:container};this.elements=[];this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length;}function SVGStrokeStyleData(elem,data,styleOb){this.initDynamicPropertyContainer(elem);this.getValue=this.iterateDynamicProperties;this.o=PropertyFactory.getProp(elem,data.o,0,0.01,this);this.w=PropertyFactory.getProp(elem,data.w,0,null,this);this.d=new DashProperty(elem,data.d||{},'svg',this);this.c=PropertyFactory.getProp(elem,data.c,1,255,this);this.style=styleOb;this._isAnimated=!!this._isAnimated;}extendPrototype([DynamicPropertyContainer],SVGStrokeStyleData);function SVGFillStyleData(elem,data,styleOb){this.initDynamicPropertyContainer(elem);this.getValue=this.iterateDynamicProperties;this.o=PropertyFactory.getProp(elem,data.o,0,0.01,this);this.c=PropertyFactory.getProp(elem,data.c,1,255,this);this.style=styleOb;}extendPrototype([DynamicPropertyContainer],SVGFillStyleData);function SVGGradientFillStyleData(elem,data,styleOb){this.initDynamicPropertyContainer(elem);this.getValue=this.iterateDynamicProperties;this.initGradientData(elem,data,styleOb);}SVGGradientFillStyleData.prototype.initGradientData=function(elem,data,styleOb){this.o=PropertyFactory.getProp(elem,data.o,0,0.01,this);this.s=PropertyFactory.getProp(elem,data.s,1,null,this);this.e=PropertyFactory.getProp(elem,data.e,1,null,this);this.h=PropertyFactory.getProp(elem,data.h||{k:0},0,0.01,this);this.a=PropertyFactory.getProp(elem,data.a||{k:0},0,degToRads,this);this.g=new GradientProperty(elem,data.g,this);this.style=styleOb;this.stops=[];this.setGradientData(styleOb.pElem,data);this.setGradientOpacity(data,styleOb);this._isAnimated=!!this._isAnimated;};SVGGradientFillStyleData.prototype.setGradientData=function(pathElement,data){var gradientId=createElementID();var gfill=createNS(data.t===1?'linearGradient':'radialGradient');gfill.setAttribute('id',gradientId);gfill.setAttribute('spreadMethod','pad');gfill.setAttribute('gradientUnits','userSpaceOnUse');var stops=[];var stop,j,jLen;jLen=data.g.p*4;for(j=0;j<jLen;j+=4){stop=createNS('stop');gfill.appendChild(stop);stops.push(stop);}pathElement.setAttribute(data.ty==='gf'?'fill':'stroke','url('+locationHref+'#'+gradientId+')');this.gf=gfill;this.cst=stops;};SVGGradientFillStyleData.prototype.setGradientOpacity=function(data,styleOb){if(this.g._hasOpacity&&!this.g._collapsable){var stop,j,jLen;var mask=createNS("mask");var maskElement=createNS('path');mask.appendChild(maskElement);var opacityId=createElementID();var maskId=createElementID();mask.setAttribute('id',maskId);var opFill=createNS(data.t===1?'linearGradient':'radialGradient');opFill.setAttribute('id',opacityId);opFill.setAttribute('spreadMethod','pad');opFill.setAttribute('gradientUnits','userSpaceOnUse');jLen=data.g.k.k[0].s?data.g.k.k[0].s.length:data.g.k.k.length;var stops=this.stops;for(j=data.g.p*4;j<jLen;j+=2){stop=createNS('stop');stop.setAttribute('stop-color','rgb(255,255,255)');opFill.appendChild(stop);stops.push(stop);}maskElement.setAttribute(data.ty==='gf'?'fill':'stroke','url('+locationHref+'#'+opacityId+')');this.of=opFill;this.ms=mask;this.ost=stops;this.maskId=maskId;styleOb.msElem=maskElement;}};extendPrototype([DynamicPropertyContainer],SVGGradientFillStyleData);function SVGGradientStrokeStyleData(elem,data,styleOb){this.initDynamicPropertyContainer(elem);this.getValue=this.iterateDynamicProperties;this.w=PropertyFactory.getProp(elem,data.w,0,null,this);this.d=new DashProperty(elem,data.d||{},'svg',this);this.initGradientData(elem,data,styleOb);this._isAnimated=!!this._isAnimated;}extendPrototype([SVGGradientFillStyleData,DynamicPropertyContainer],SVGGradientStrokeStyleData);function ShapeGroupData(){this.it=[];this.prevViewData=[];this.gr=createNS('g');}var SVGElementsRenderer=function(){var _identityMatrix=new Matrix();var _matrixHelper=new Matrix();var ob={createRenderFunction:createRenderFunction};function createRenderFunction(data){var ty=data.ty;switch(data.ty){case'fl':return renderFill;case'gf':return renderGradient;case'gs':return renderGradientStroke;case'st':return renderStroke;case'sh':case'el':case'rc':case'sr':return renderPath;case'tr':return renderContentTransform;}}function renderContentTransform(styleData,itemData,isFirstFrame){if(isFirstFrame||itemData.transform.op._mdf){itemData.transform.container.setAttribute('opacity',itemData.transform.op.v);}if(isFirstFrame||itemData.transform.mProps._mdf){itemData.transform.container.setAttribute('transform',itemData.transform.mProps.v.to2dCSS());}}function renderPath(styleData,itemData,isFirstFrame){var j,jLen,pathStringTransformed,redraw,pathNodes,l,lLen=itemData.styles.length;var lvl=itemData.lvl;var paths,mat,props,iterations,k;for(l=0;l<lLen;l+=1){redraw=itemData.sh._mdf||isFirstFrame;if(itemData.styles[l].lvl<lvl){mat=_matrixHelper.reset();iterations=lvl-itemData.styles[l].lvl;k=itemData.transformers.length-1;while(!redraw&&iterations>0){redraw=itemData.transformers[k].mProps._mdf||redraw;iterations--;k--;}if(redraw){iterations=lvl-itemData.styles[l].lvl;k=itemData.transformers.length-1;while(iterations>0){props=itemData.transformers[k].mProps.v.props;mat.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);iterations--;k--;}}}else{mat=_identityMatrix;}paths=itemData.sh.paths;jLen=paths._length;if(redraw){pathStringTransformed='';for(j=0;j<jLen;j+=1){pathNodes=paths.shapes[j];if(pathNodes&&pathNodes._length){pathStringTransformed+=buildShapeString(pathNodes,pathNodes._length,pathNodes.c,mat);}}itemData.caches[l]=pathStringTransformed;}else{pathStringTransformed=itemData.caches[l];}itemData.styles[l].d+=styleData.hd===true?'':pathStringTransformed;itemData.styles[l]._mdf=redraw||itemData.styles[l]._mdf;}}function renderFill(styleData,itemData,isFirstFrame){var styleElem=itemData.style;if(itemData.c._mdf||isFirstFrame){styleElem.pElem.setAttribute('fill','rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')');}if(itemData.o._mdf||isFirstFrame){styleElem.pElem.setAttribute('fill-opacity',itemData.o.v);}};function renderGradientStroke(styleData,itemData,isFirstFrame){renderGradient(styleData,itemData,isFirstFrame);renderStroke(styleData,itemData,isFirstFrame);}function renderGradient(styleData,itemData,isFirstFrame){var gfill=itemData.gf;var hasOpacity=itemData.g._hasOpacity;var pt1=itemData.s.v,pt2=itemData.e.v;if(itemData.o._mdf||isFirstFrame){var attr=styleData.ty==='gf'?'fill-opacity':'stroke-opacity';itemData.style.pElem.setAttribute(attr,itemData.o.v);}if(itemData.s._mdf||isFirstFrame){var attr1=styleData.t===1?'x1':'cx';var attr2=attr1==='x1'?'y1':'cy';gfill.setAttribute(attr1,pt1[0]);gfill.setAttribute(attr2,pt1[1]);if(hasOpacity&&!itemData.g._collapsable){itemData.of.setAttribute(attr1,pt1[0]);itemData.of.setAttribute(attr2,pt1[1]);}}var stops,i,len,stop;if(itemData.g._cmdf||isFirstFrame){stops=itemData.cst;var cValues=itemData.g.c;len=stops.length;for(i=0;i<len;i+=1){stop=stops[i];stop.setAttribute('offset',cValues[i*4]+'%');stop.setAttribute('stop-color','rgb('+cValues[i*4+1]+','+cValues[i*4+2]+','+cValues[i*4+3]+')');}}if(hasOpacity&&(itemData.g._omdf||isFirstFrame)){var oValues=itemData.g.o;if(itemData.g._collapsable){stops=itemData.cst;}else{stops=itemData.ost;}len=stops.length;for(i=0;i<len;i+=1){stop=stops[i];if(!itemData.g._collapsable){stop.setAttribute('offset',oValues[i*2]+'%');}stop.setAttribute('stop-opacity',oValues[i*2+1]);}}if(styleData.t===1){if(itemData.e._mdf||isFirstFrame){gfill.setAttribute('x2',pt2[0]);gfill.setAttribute('y2',pt2[1]);if(hasOpacity&&!itemData.g._collapsable){itemData.of.setAttribute('x2',pt2[0]);itemData.of.setAttribute('y2',pt2[1]);}}}else{var rad;if(itemData.s._mdf||itemData.e._mdf||isFirstFrame){rad=Math.sqrt(Math.pow(pt1[0]-pt2[0],2)+Math.pow(pt1[1]-pt2[1],2));gfill.setAttribute('r',rad);if(hasOpacity&&!itemData.g._collapsable){itemData.of.setAttribute('r',rad);}}if(itemData.e._mdf||itemData.h._mdf||itemData.a._mdf||isFirstFrame){if(!rad){rad=Math.sqrt(Math.pow(pt1[0]-pt2[0],2)+Math.pow(pt1[1]-pt2[1],2));}var ang=Math.atan2(pt2[1]-pt1[1],pt2[0]-pt1[0]);var percent=itemData.h.v>=1?0.99:itemData.h.v<=-1?-0.99:itemData.h.v;var dist=rad*percent;var x=Math.cos(ang+itemData.a.v)*dist+pt1[0];var y=Math.sin(ang+itemData.a.v)*dist+pt1[1];gfill.setAttribute('fx',x);gfill.setAttribute('fy',y);if(hasOpacity&&!itemData.g._collapsable){itemData.of.setAttribute('fx',x);itemData.of.setAttribute('fy',y);}}//gfill.setAttribute('fy','200');
}};function renderStroke(styleData,itemData,isFirstFrame){var styleElem=itemData.style;var d=itemData.d;if(d&&(d._mdf||isFirstFrame)&&d.dashStr){styleElem.pElem.setAttribute('stroke-dasharray',d.dashStr);styleElem.pElem.setAttribute('stroke-dashoffset',d.dashoffset[0]);}if(itemData.c&&(itemData.c._mdf||isFirstFrame)){styleElem.pElem.setAttribute('stroke','rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')');}if(itemData.o._mdf||isFirstFrame){styleElem.pElem.setAttribute('stroke-opacity',itemData.o.v);}if(itemData.w._mdf||isFirstFrame){styleElem.pElem.setAttribute('stroke-width',itemData.w.v);if(styleElem.msElem){styleElem.msElem.setAttribute('stroke-width',itemData.w.v);}}};return ob;}();function ShapeTransformManager(){this.sequences={};this.sequenceList=[];this.transform_key_count=0;}ShapeTransformManager.prototype={addTransformSequence:function addTransformSequence(transforms){var i,len=transforms.length;var key='_';for(i=0;i<len;i+=1){key+=transforms[i].transform.key+'_';}var sequence=this.sequences[key];if(!sequence){sequence={transforms:[].concat(transforms),finalTransform:new Matrix(),_mdf:false};this.sequences[key]=sequence;this.sequenceList.push(sequence);}return sequence;},processSequence:function processSequence(sequence,isFirstFrame){var i=0,len=sequence.transforms.length,_mdf=isFirstFrame;while(i<len&&!isFirstFrame){if(sequence.transforms[i].transform.mProps._mdf){_mdf=true;break;}i+=1;}if(_mdf){var props;sequence.finalTransform.reset();for(i=len-1;i>=0;i-=1){props=sequence.transforms[i].transform.mProps.v.props;sequence.finalTransform.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);}}sequence._mdf=_mdf;},processSequences:function processSequences(isFirstFrame){var i,len=this.sequenceList.length;for(i=0;i<len;i+=1){this.processSequence(this.sequenceList[i],isFirstFrame);}},getNewKey:function getNewKey(){return'_'+this.transform_key_count++;}};function BaseElement(){}BaseElement.prototype={checkMasks:function checkMasks(){if(!this.data.hasMask){return false;}var i=0,len=this.data.masksProperties.length;while(i<len){if(this.data.masksProperties[i].mode!=='n'&&this.data.masksProperties[i].cl!==false){return true;}i+=1;}return false;},initExpressions:function initExpressions(){this.layerInterface=LayerExpressionInterface(this);if(this.data.hasMask&&this.maskManager){this.layerInterface.registerMaskInterface(this.maskManager);}var effectsInterface=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(effectsInterface);if(this.data.ty===0||this.data.xt){this.compInterface=CompExpressionInterface(this);}else if(this.data.ty===4){this.layerInterface.shapeInterface=ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface);this.layerInterface.content=this.layerInterface.shapeInterface;}else if(this.data.ty===5){this.layerInterface.textInterface=TextExpressionInterface(this);this.layerInterface.text=this.layerInterface.textInterface;}},setBlendMode:function setBlendMode(){var blendModeValue=getBlendMode(this.data.bm);var elem=this.baseElement||this.layerElement;elem.style['mix-blend-mode']=blendModeValue;},initBaseData:function initBaseData(data,globalData,comp){this.globalData=globalData;this.comp=comp;this.data=data;this.layerId=createElementID();//Stretch factor for old animations missing this property.
if(!this.data.sr){this.data.sr=1;}// effects manager
this.effectsManager=new EffectsManager(this.data,this,this.dynamicProperties);},getType:function getType(){return this.type;},sourceRectAtTime:function sourceRectAtTime(){}};function NullElement(data,globalData,comp){this.initFrame();this.initBaseData(data,globalData,comp);this.initFrame();this.initTransform(data,globalData,comp);this.initHierarchy();}NullElement.prototype.prepareFrame=function(num){this.prepareProperties(num,true);};NullElement.prototype.renderFrame=function(){};NullElement.prototype.getBaseElement=function(){return null;};NullElement.prototype.destroy=function(){};NullElement.prototype.sourceRectAtTime=function(){};NullElement.prototype.hide=function(){};extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement],NullElement);function SVGBaseElement(){}SVGBaseElement.prototype={initRendererElement:function initRendererElement(){this.layerElement=createNS('g');},createContainerElements:function createContainerElements(){this.matteElement=createNS('g');this.transformedElement=this.layerElement;this.maskedElement=this.layerElement;this._sizeChanged=false;var layerElementParent=null;//If this layer acts as a mask for the following layer
var filId,fil,gg;if(this.data.td){if(this.data.td==3||this.data.td==1){var masker=createNS('mask');masker.setAttribute('id',this.layerId);masker.setAttribute('mask-type',this.data.td==3?'luminance':'alpha');masker.appendChild(this.layerElement);layerElementParent=masker;this.globalData.defs.appendChild(masker);// This is only for IE and Edge when mask if of type alpha
if(!featureSupport.maskType&&this.data.td==1){masker.setAttribute('mask-type','luminance');filId=createElementID();fil=filtersFactory.createFilter(filId);this.globalData.defs.appendChild(fil);fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());gg=createNS('g');gg.appendChild(this.layerElement);layerElementParent=gg;masker.appendChild(gg);gg.setAttribute('filter','url('+locationHref+'#'+filId+')');}}else if(this.data.td==2){var maskGroup=createNS('mask');maskGroup.setAttribute('id',this.layerId);maskGroup.setAttribute('mask-type','alpha');var maskGrouper=createNS('g');maskGroup.appendChild(maskGrouper);filId=createElementID();fil=filtersFactory.createFilter(filId);////
// This solution doesn't work on Android when meta tag with viewport attribute is set
/*var feColorMatrix = createNS('feColorMatrix');
                feColorMatrix.setAttribute('type', 'matrix');
                feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
                feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1');
                fil.appendChild(feColorMatrix);*/ ////
var feCTr=createNS('feComponentTransfer');feCTr.setAttribute('in','SourceGraphic');fil.appendChild(feCTr);var feFunc=createNS('feFuncA');feFunc.setAttribute('type','table');feFunc.setAttribute('tableValues','1.0 0.0');feCTr.appendChild(feFunc);////
this.globalData.defs.appendChild(fil);var alphaRect=createNS('rect');alphaRect.setAttribute('width',this.comp.data.w);alphaRect.setAttribute('height',this.comp.data.h);alphaRect.setAttribute('x','0');alphaRect.setAttribute('y','0');alphaRect.setAttribute('fill','#ffffff');alphaRect.setAttribute('opacity','0');maskGrouper.setAttribute('filter','url('+locationHref+'#'+filId+')');maskGrouper.appendChild(alphaRect);maskGrouper.appendChild(this.layerElement);layerElementParent=maskGrouper;if(!featureSupport.maskType){maskGroup.setAttribute('mask-type','luminance');fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());gg=createNS('g');maskGrouper.appendChild(alphaRect);gg.appendChild(this.layerElement);layerElementParent=gg;maskGrouper.appendChild(gg);}this.globalData.defs.appendChild(maskGroup);}}else if(this.data.tt){this.matteElement.appendChild(this.layerElement);layerElementParent=this.matteElement;this.baseElement=this.matteElement;}else{this.baseElement=this.layerElement;}if(this.data.ln){this.layerElement.setAttribute('id',this.data.ln);}if(this.data.cl){this.layerElement.setAttribute('class',this.data.cl);}//Clipping compositions to hide content that exceeds boundaries. If collapsed transformations is on, component should not be clipped
if(this.data.ty===0&&!this.data.hd){var cp=createNS('clipPath');var pt=createNS('path');pt.setAttribute('d','M0,0 L'+this.data.w+',0'+' L'+this.data.w+','+this.data.h+' L0,'+this.data.h+'z');var clipId=createElementID();cp.setAttribute('id',clipId);cp.appendChild(pt);this.globalData.defs.appendChild(cp);if(this.checkMasks()){var cpGroup=createNS('g');cpGroup.setAttribute('clip-path','url('+locationHref+'#'+clipId+')');cpGroup.appendChild(this.layerElement);this.transformedElement=cpGroup;if(layerElementParent){layerElementParent.appendChild(this.transformedElement);}else{this.baseElement=this.transformedElement;}}else{this.layerElement.setAttribute('clip-path','url('+locationHref+'#'+clipId+')');}}if(this.data.bm!==0){this.setBlendMode();}},renderElement:function renderElement(){if(this.finalTransform._matMdf){this.transformedElement.setAttribute('transform',this.finalTransform.mat.to2dCSS());}if(this.finalTransform._opMdf){this.transformedElement.setAttribute('opacity',this.finalTransform.mProp.o.v);}},destroyBaseElement:function destroyBaseElement(){this.layerElement=null;this.matteElement=null;this.maskManager.destroy();},getBaseElement:function getBaseElement(){if(this.data.hd){return null;}return this.baseElement;},createRenderableComponents:function createRenderableComponents(){this.maskManager=new MaskElement(this.data,this,this.globalData);this.renderableEffectsManager=new SVGEffects(this);},setMatte:function setMatte(id){if(!this.matteElement){return;}this.matteElement.setAttribute("mask","url("+locationHref+"#"+id+")");}};function IShapeElement(){}IShapeElement.prototype={addShapeToModifiers:function addShapeToModifiers(data){var i,len=this.shapeModifiers.length;for(i=0;i<len;i+=1){this.shapeModifiers[i].addShape(data);}},isShapeInAnimatedModifiers:function isShapeInAnimatedModifiers(data){var i=0,len=this.shapeModifiers.length;while(i<len){if(this.shapeModifiers[i].isAnimatedWithShape(data)){return true;}}return false;},renderModifiers:function renderModifiers(){if(!this.shapeModifiers.length){return;}var i,len=this.shapes.length;for(i=0;i<len;i+=1){this.shapes[i].sh.reset();}len=this.shapeModifiers.length;for(i=len-1;i>=0;i-=1){this.shapeModifiers[i].processShapes(this._isFirstFrame);}},lcEnum:{'1':'butt','2':'round','3':'square'},ljEnum:{'1':'miter','2':'round','3':'bevel'},searchProcessedElement:function searchProcessedElement(elem){var elements=this.processedElements;var i=0,len=elements.length;while(i<len){if(elements[i].elem===elem){return elements[i].pos;}i+=1;}return 0;},addProcessedElement:function addProcessedElement(elem,pos){var elements=this.processedElements;var i=elements.length;while(i){i-=1;if(elements[i].elem===elem){elements[i].pos=pos;return;}}elements.push(new ProcessedElement(elem,pos));},prepareFrame:function prepareFrame(num){this.prepareRenderableFrame(num);this.prepareProperties(num,this.isInRange);}};function ITextElement(){}ITextElement.prototype.initElement=function(data,globalData,comp){this.lettersChangedFlag=true;this.initFrame();this.initBaseData(data,globalData,comp);this.textProperty=new TextProperty(this,data.t,this.dynamicProperties);this.textAnimator=new TextAnimatorProperty(data.t,this.renderType,this);this.initTransform(data,globalData,comp);this.initHierarchy();this.initRenderable();this.initRendererElement();this.createContainerElements();this.createRenderableComponents();this.createContent();this.hide();this.textAnimator.searchProperties(this.dynamicProperties);};ITextElement.prototype.prepareFrame=function(num){this._mdf=false;this.prepareRenderableFrame(num);this.prepareProperties(num,this.isInRange);if(this.textProperty._mdf||this.textProperty._isFirstFrame){this.buildNewText();this.textProperty._isFirstFrame=false;this.textProperty._mdf=false;}};ITextElement.prototype.createPathShape=function(matrixHelper,shapes){var j,jLen=shapes.length;var k,kLen,pathNodes;var shapeStr='';for(j=0;j<jLen;j+=1){pathNodes=shapes[j].ks.k;shapeStr+=buildShapeString(pathNodes,pathNodes.i.length,true,matrixHelper);}return shapeStr;};ITextElement.prototype.updateDocumentData=function(newData,index){this.textProperty.updateDocumentData(newData,index);};ITextElement.prototype.canResizeFont=function(_canResize){this.textProperty.canResizeFont(_canResize);};ITextElement.prototype.setMinimumFontSize=function(_fontSize){this.textProperty.setMinimumFontSize(_fontSize);};ITextElement.prototype.applyTextPropertiesToMatrix=function(documentData,matrixHelper,lineNumber,xPos,yPos){if(documentData.ps){matrixHelper.translate(documentData.ps[0],documentData.ps[1]+documentData.ascent,0);}matrixHelper.translate(0,-documentData.ls,0);switch(documentData.j){case 1:matrixHelper.translate(documentData.justifyOffset+(documentData.boxWidth-documentData.lineWidths[lineNumber]),0,0);break;case 2:matrixHelper.translate(documentData.justifyOffset+(documentData.boxWidth-documentData.lineWidths[lineNumber])/2,0,0);break;}matrixHelper.translate(xPos,yPos,0);};ITextElement.prototype.buildColor=function(colorData){return'rgb('+Math.round(colorData[0]*255)+','+Math.round(colorData[1]*255)+','+Math.round(colorData[2]*255)+')';};ITextElement.prototype.emptyProp=new LetterProps();ITextElement.prototype.destroy=function(){};function ICompElement(){}extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement,RenderableDOMElement],ICompElement);ICompElement.prototype.initElement=function(data,globalData,comp){this.initFrame();this.initBaseData(data,globalData,comp);this.initTransform(data,globalData,comp);this.initRenderable();this.initHierarchy();this.initRendererElement();this.createContainerElements();this.createRenderableComponents();if(this.data.xt||!globalData.progressiveLoad){this.buildAllItems();}this.hide();};/*ICompElement.prototype.hide = function(){
    if(!this.hidden){
        this.hideElement();
        var i,len = this.elements.length;
        for( i = 0; i < len; i+=1 ){
            if(this.elements[i]){
                this.elements[i].hide();
            }
        }
    }
};*/ICompElement.prototype.prepareFrame=function(num){this._mdf=false;this.prepareRenderableFrame(num);this.prepareProperties(num,this.isInRange);if(!this.isInRange&&!this.data.xt){return;}if(!this.tm._placeholder){var timeRemapped=this.tm.v;if(timeRemapped===this.data.op){timeRemapped=this.data.op-1;}this.renderedFrame=timeRemapped;}else{this.renderedFrame=num/this.data.sr;}var i,len=this.elements.length;if(!this.completeLayers){this.checkLayers(this.renderedFrame);}//This iteration needs to be backwards because of how expressions connect between each other
for(i=len-1;i>=0;i-=1){if(this.completeLayers||this.elements[i]){this.elements[i].prepareFrame(this.renderedFrame-this.layers[i].st);if(this.elements[i]._mdf){this._mdf=true;}}}};ICompElement.prototype.renderInnerContent=function(){var i,len=this.layers.length;for(i=0;i<len;i+=1){if(this.completeLayers||this.elements[i]){this.elements[i].renderFrame();}}};ICompElement.prototype.setElements=function(elems){this.elements=elems;};ICompElement.prototype.getElements=function(){return this.elements;};ICompElement.prototype.destroyElements=function(){var i,len=this.layers.length;for(i=0;i<len;i+=1){if(this.elements[i]){this.elements[i].destroy();}}};ICompElement.prototype.destroy=function(){this.destroyElements();this.destroyBaseElement();};function IImageElement(data,globalData,comp){this.assetData=globalData.getAssetData(data.refId);this.initElement(data,globalData,comp);this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h};}extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],IImageElement);IImageElement.prototype.createContent=function(){var assetPath=this.globalData.getAssetsPath(this.assetData);this.innerElem=createNS('image');this.innerElem.setAttribute('width',this.assetData.w+"px");this.innerElem.setAttribute('height',this.assetData.h+"px");this.innerElem.setAttribute('preserveAspectRatio',this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio);this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink','href',assetPath);this.layerElement.appendChild(this.innerElem);};IImageElement.prototype.sourceRectAtTime=function(){return this.sourceRect;};function ISolidElement(data,globalData,comp){this.initElement(data,globalData,comp);}extendPrototype([IImageElement],ISolidElement);ISolidElement.prototype.createContent=function(){var rect=createNS('rect');////rect.style.width = this.data.sw;
////rect.style.height = this.data.sh;
////rect.style.fill = this.data.sc;
rect.setAttribute('width',this.data.sw);rect.setAttribute('height',this.data.sh);rect.setAttribute('fill',this.data.sc);this.layerElement.appendChild(rect);};function SVGCompElement(data,globalData,comp){this.layers=data.layers;this.supports3d=true;this.completeLayers=false;this.pendingElements=[];this.elements=this.layers?createSizedArray(this.layers.length):[];//this.layerElement = createNS('g');
this.initElement(data,globalData,comp);this.tm=data.tm?PropertyFactory.getProp(this,data.tm,0,globalData.frameRate,this):{_placeholder:true};}extendPrototype([SVGRenderer,ICompElement,SVGBaseElement],SVGCompElement);function SVGTextElement(data,globalData,comp){this.textSpans=[];this.renderType='svg';this.initElement(data,globalData,comp);}extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],SVGTextElement);SVGTextElement.prototype.createContent=function(){if(this.data.singleShape&&!this.globalData.fontManager.chars){this.textContainer=createNS('text');}};SVGTextElement.prototype.buildTextContents=function(textArray){var i=0,len=textArray.length;var textContents=[],currentTextContent='';while(i<len){if(textArray[i]===String.fromCharCode(13)||textArray[i]===String.fromCharCode(3)){textContents.push(currentTextContent);currentTextContent='';}else{currentTextContent+=textArray[i];}i+=1;}textContents.push(currentTextContent);return textContents;};SVGTextElement.prototype.buildNewText=function(){var i,len;var documentData=this.textProperty.currentData;this.renderedLetters=createSizedArray(documentData?documentData.l.length:0);if(documentData.fc){this.layerElement.setAttribute('fill',this.buildColor(documentData.fc));}else{this.layerElement.setAttribute('fill','rgba(0,0,0,0)');}if(documentData.sc){this.layerElement.setAttribute('stroke',this.buildColor(documentData.sc));this.layerElement.setAttribute('stroke-width',documentData.sw);}this.layerElement.setAttribute('font-size',documentData.finalSize);var fontData=this.globalData.fontManager.getFontByName(documentData.f);if(fontData.fClass){this.layerElement.setAttribute('class',fontData.fClass);}else{this.layerElement.setAttribute('font-family',fontData.fFamily);var fWeight=documentData.fWeight,fStyle=documentData.fStyle;this.layerElement.setAttribute('font-style',fStyle);this.layerElement.setAttribute('font-weight',fWeight);}this.layerElement.setAttribute('aria-label',documentData.t);var letters=documentData.l||[];var usesGlyphs=!!this.globalData.fontManager.chars;len=letters.length;var tSpan;var matrixHelper=this.mHelper;var shapes,shapeStr='',singleShape=this.data.singleShape;var xPos=0,yPos=0,firstLine=true;var trackingOffset=documentData.tr/1000*documentData.finalSize;if(singleShape&&!usesGlyphs&&!documentData.sz){var tElement=this.textContainer;var justify='start';switch(documentData.j){case 1:justify='end';break;case 2:justify='middle';break;}tElement.setAttribute('text-anchor',justify);tElement.setAttribute('letter-spacing',trackingOffset);var textContent=this.buildTextContents(documentData.finalText);len=textContent.length;yPos=documentData.ps?documentData.ps[1]+documentData.ascent:0;for(i=0;i<len;i+=1){tSpan=this.textSpans[i]||createNS('tspan');tSpan.textContent=textContent[i];tSpan.setAttribute('x',0);tSpan.setAttribute('y',yPos);tSpan.style.display='inherit';tElement.appendChild(tSpan);this.textSpans[i]=tSpan;yPos+=documentData.finalLineHeight;}this.layerElement.appendChild(tElement);}else{var cachedSpansLength=this.textSpans.length;var shapeData,charData;for(i=0;i<len;i+=1){if(!usesGlyphs||!singleShape||i===0){tSpan=cachedSpansLength>i?this.textSpans[i]:createNS(usesGlyphs?'path':'text');if(cachedSpansLength<=i){tSpan.setAttribute('stroke-linecap','butt');tSpan.setAttribute('stroke-linejoin','round');tSpan.setAttribute('stroke-miterlimit','4');this.textSpans[i]=tSpan;this.layerElement.appendChild(tSpan);}tSpan.style.display='inherit';}matrixHelper.reset();matrixHelper.scale(documentData.finalSize/100,documentData.finalSize/100);if(singleShape){if(letters[i].n){xPos=-trackingOffset;yPos+=documentData.yOffset;yPos+=firstLine?1:0;firstLine=false;}this.applyTextPropertiesToMatrix(documentData,matrixHelper,letters[i].line,xPos,yPos);xPos+=letters[i].l||0;//xPos += letters[i].val === ' ' ? 0 : trackingOffset;
xPos+=trackingOffset;}if(usesGlyphs){charData=this.globalData.fontManager.getCharData(documentData.finalText[i],fontData.fStyle,this.globalData.fontManager.getFontByName(documentData.f).fFamily);shapeData=charData&&charData.data||{};shapes=shapeData.shapes?shapeData.shapes[0].it:[];if(!singleShape){tSpan.setAttribute('d',this.createPathShape(matrixHelper,shapes));}else{shapeStr+=this.createPathShape(matrixHelper,shapes);}}else{if(singleShape){tSpan.setAttribute("transform","translate("+matrixHelper.props[12]+","+matrixHelper.props[13]+")");}tSpan.textContent=letters[i].val;tSpan.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve");}//
}if(singleShape&&tSpan){tSpan.setAttribute('d',shapeStr);}}while(i<this.textSpans.length){this.textSpans[i].style.display='none';i+=1;}this._sizeChanged=true;};SVGTextElement.prototype.sourceRectAtTime=function(time){this.prepareFrame(this.comp.renderedFrame-this.data.st);this.renderInnerContent();if(this._sizeChanged){this._sizeChanged=false;var textBox=this.layerElement.getBBox();this.bbox={top:textBox.y,left:textBox.x,width:textBox.width,height:textBox.height};}return this.bbox;};SVGTextElement.prototype.renderInnerContent=function(){if(!this.data.singleShape){this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);if(this.lettersChangedFlag||this.textAnimator.lettersChangedFlag){this._sizeChanged=true;var i,len;var renderedLetters=this.textAnimator.renderedLetters;var letters=this.textProperty.currentData.l;len=letters.length;var renderedLetter,textSpan;for(i=0;i<len;i+=1){if(letters[i].n){continue;}renderedLetter=renderedLetters[i];textSpan=this.textSpans[i];if(renderedLetter._mdf.m){textSpan.setAttribute('transform',renderedLetter.m);}if(renderedLetter._mdf.o){textSpan.setAttribute('opacity',renderedLetter.o);}if(renderedLetter._mdf.sw){textSpan.setAttribute('stroke-width',renderedLetter.sw);}if(renderedLetter._mdf.sc){textSpan.setAttribute('stroke',renderedLetter.sc);}if(renderedLetter._mdf.fc){textSpan.setAttribute('fill',renderedLetter.fc);}}}}};function SVGShapeElement(data,globalData,comp){//List of drawable elements
this.shapes=[];// Full shape data
this.shapesData=data.shapes;//List of styles that will be applied to shapes
this.stylesList=[];//List of modifiers that will be applied to shapes
this.shapeModifiers=[];//List of items in shape tree
this.itemsData=[];//List of items in previous shape tree
this.processedElements=[];// List of animated components
this.animatedContents=[];this.initElement(data,globalData,comp);//Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
// List of elements that have been created
this.prevViewData=[];//Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
}extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement],SVGShapeElement);SVGShapeElement.prototype.initSecondaryElement=function(){};SVGShapeElement.prototype.identityMatrix=new Matrix();SVGShapeElement.prototype.buildExpressionInterface=function(){};SVGShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],true);this.filterUniqueShapes();};/*
This method searches for multiple shapes that affect a single element and one of them is animated
*/SVGShapeElement.prototype.filterUniqueShapes=function(){var i,len=this.shapes.length,shape;var j,jLen=this.stylesList.length;var style,count=0;var tempShapes=[];var areAnimated=false;for(j=0;j<jLen;j+=1){style=this.stylesList[j];areAnimated=false;tempShapes.length=0;for(i=0;i<len;i+=1){shape=this.shapes[i];if(shape.styles.indexOf(style)!==-1){tempShapes.push(shape);areAnimated=shape._isAnimated||areAnimated;}}if(tempShapes.length>1&&areAnimated){this.setShapesAsAnimated(tempShapes);}}};SVGShapeElement.prototype.setShapesAsAnimated=function(shapes){var i,len=shapes.length;for(i=0;i<len;i+=1){shapes[i].setAsAnimated();}};SVGShapeElement.prototype.createStyleElement=function(data,level){//TODO: prevent drawing of hidden styles
var elementData;var styleOb=new SVGStyleData(data,level);var pathElement=styleOb.pElem;if(data.ty==='st'){elementData=new SVGStrokeStyleData(this,data,styleOb);}else if(data.ty==='fl'){elementData=new SVGFillStyleData(this,data,styleOb);}else if(data.ty==='gf'||data.ty==='gs'){var gradientConstructor=data.ty==='gf'?SVGGradientFillStyleData:SVGGradientStrokeStyleData;elementData=new gradientConstructor(this,data,styleOb);this.globalData.defs.appendChild(elementData.gf);if(elementData.maskId){this.globalData.defs.appendChild(elementData.ms);this.globalData.defs.appendChild(elementData.of);pathElement.setAttribute('mask','url('+locationHref+'#'+elementData.maskId+')');}}if(data.ty==='st'||data.ty==='gs'){pathElement.setAttribute('stroke-linecap',this.lcEnum[data.lc]||'round');pathElement.setAttribute('stroke-linejoin',this.ljEnum[data.lj]||'round');pathElement.setAttribute('fill-opacity','0');if(data.lj===1){pathElement.setAttribute('stroke-miterlimit',data.ml);}}if(data.r===2){pathElement.setAttribute('fill-rule','evenodd');}if(data.ln){pathElement.setAttribute('id',data.ln);}if(data.cl){pathElement.setAttribute('class',data.cl);}if(data.bm){pathElement.style['mix-blend-mode']=getBlendMode(data.bm);}this.stylesList.push(styleOb);this.addToAnimatedContents(data,elementData);return elementData;};SVGShapeElement.prototype.createGroupElement=function(data){var elementData=new ShapeGroupData();if(data.ln){elementData.gr.setAttribute('id',data.ln);}if(data.cl){elementData.gr.setAttribute('class',data.cl);}if(data.bm){elementData.gr.style['mix-blend-mode']=getBlendMode(data.bm);}return elementData;};SVGShapeElement.prototype.createTransformElement=function(data,container){var transformProperty=TransformPropertyFactory.getTransformProperty(this,data,this);var elementData=new SVGTransformData(transformProperty,transformProperty.o,container);this.addToAnimatedContents(data,elementData);return elementData;};SVGShapeElement.prototype.createShapeElement=function(data,ownTransformers,level){var ty=4;if(data.ty==='rc'){ty=5;}else if(data.ty==='el'){ty=6;}else if(data.ty==='sr'){ty=7;}var shapeProperty=ShapePropertyFactory.getShapeProp(this,data,ty,this);var elementData=new SVGShapeData(ownTransformers,level,shapeProperty);this.shapes.push(elementData);this.addShapeToModifiers(elementData);this.addToAnimatedContents(data,elementData);return elementData;};SVGShapeElement.prototype.addToAnimatedContents=function(data,element){var i=0,len=this.animatedContents.length;while(i<len){if(this.animatedContents[i].element===element){return;}i+=1;}this.animatedContents.push({fn:SVGElementsRenderer.createRenderFunction(data),element:element,data:data});};SVGShapeElement.prototype.setElementStyles=function(elementData){var arr=elementData.styles;var j,jLen=this.stylesList.length;for(j=0;j<jLen;j+=1){if(!this.stylesList[j].closed){arr.push(this.stylesList[j]);}}};SVGShapeElement.prototype.reloadShapes=function(){this._isFirstFrame=true;var i,len=this.itemsData.length;for(i=0;i<len;i+=1){this.prevViewData[i]=this.itemsData[i];}this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],true);this.filterUniqueShapes();len=this.dynamicProperties.length;for(i=0;i<len;i+=1){this.dynamicProperties[i].getValue();}this.renderModifiers();};SVGShapeElement.prototype.searchShapes=function(arr,itemsData,prevViewData,container,level,transformers,render){var ownTransformers=[].concat(transformers);var i,len=arr.length-1;var j,jLen;var ownStyles=[],ownModifiers=[],styleOb,currentTransform,modifier,processedPos;for(i=len;i>=0;i-=1){processedPos=this.searchProcessedElement(arr[i]);if(!processedPos){arr[i]._render=render;}else{itemsData[i]=prevViewData[processedPos-1];}if(arr[i].ty=='fl'||arr[i].ty=='st'||arr[i].ty=='gf'||arr[i].ty=='gs'){if(!processedPos){itemsData[i]=this.createStyleElement(arr[i],level);}else{itemsData[i].style.closed=false;}if(arr[i]._render){container.appendChild(itemsData[i].style.pElem);}ownStyles.push(itemsData[i].style);}else if(arr[i].ty=='gr'){if(!processedPos){itemsData[i]=this.createGroupElement(arr[i]);}else{jLen=itemsData[i].it.length;for(j=0;j<jLen;j+=1){itemsData[i].prevViewData[j]=itemsData[i].it[j];}}this.searchShapes(arr[i].it,itemsData[i].it,itemsData[i].prevViewData,itemsData[i].gr,level+1,ownTransformers,render);if(arr[i]._render){container.appendChild(itemsData[i].gr);}}else if(arr[i].ty=='tr'){if(!processedPos){itemsData[i]=this.createTransformElement(arr[i],container);}currentTransform=itemsData[i].transform;ownTransformers.push(currentTransform);}else if(arr[i].ty=='sh'||arr[i].ty=='rc'||arr[i].ty=='el'||arr[i].ty=='sr'){if(!processedPos){itemsData[i]=this.createShapeElement(arr[i],ownTransformers,level);}this.setElementStyles(itemsData[i]);}else if(arr[i].ty=='tm'||arr[i].ty=='rd'||arr[i].ty=='ms'){if(!processedPos){modifier=ShapeModifiers.getModifier(arr[i].ty);modifier.init(this,arr[i]);itemsData[i]=modifier;this.shapeModifiers.push(modifier);}else{modifier=itemsData[i];modifier.closed=false;}ownModifiers.push(modifier);}else if(arr[i].ty=='rp'){if(!processedPos){modifier=ShapeModifiers.getModifier(arr[i].ty);itemsData[i]=modifier;modifier.init(this,arr,i,itemsData);this.shapeModifiers.push(modifier);render=false;}else{modifier=itemsData[i];modifier.closed=true;}ownModifiers.push(modifier);}this.addProcessedElement(arr[i],i+1);}len=ownStyles.length;for(i=0;i<len;i+=1){ownStyles[i].closed=true;}len=ownModifiers.length;for(i=0;i<len;i+=1){ownModifiers[i].closed=true;}};SVGShapeElement.prototype.renderInnerContent=function(){this.renderModifiers();var i,len=this.stylesList.length;for(i=0;i<len;i+=1){this.stylesList[i].reset();}this.renderShape();for(i=0;i<len;i+=1){if(this.stylesList[i]._mdf||this._isFirstFrame){if(this.stylesList[i].msElem){this.stylesList[i].msElem.setAttribute('d',this.stylesList[i].d);//Adding M0 0 fixes same mask bug on all browsers
this.stylesList[i].d='M0 0'+this.stylesList[i].d;}this.stylesList[i].pElem.setAttribute('d',this.stylesList[i].d||'M0 0');}}};SVGShapeElement.prototype.renderShape=function(){var i,len=this.animatedContents.length;var animatedContent;for(i=0;i<len;i+=1){animatedContent=this.animatedContents[i];if((this._isFirstFrame||animatedContent.element._isAnimated)&&animatedContent.data!==true){animatedContent.fn(animatedContent.data,animatedContent.element,this._isFirstFrame);}}};SVGShapeElement.prototype.destroy=function(){this.destroyBaseElement();this.shapesData=null;this.itemsData=null;};function SVGTintFilter(filter,filterManager){this.filterManager=filterManager;var feColorMatrix=createNS('feColorMatrix');feColorMatrix.setAttribute('type','matrix');feColorMatrix.setAttribute('color-interpolation-filters','linearRGB');feColorMatrix.setAttribute('values','0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');feColorMatrix.setAttribute('result','f1');filter.appendChild(feColorMatrix);feColorMatrix=createNS('feColorMatrix');feColorMatrix.setAttribute('type','matrix');feColorMatrix.setAttribute('color-interpolation-filters','sRGB');feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');feColorMatrix.setAttribute('result','f2');filter.appendChild(feColorMatrix);this.matrixFilter=feColorMatrix;if(filterManager.effectElements[2].p.v!==100||filterManager.effectElements[2].p.k){var feMerge=createNS('feMerge');filter.appendChild(feMerge);var feMergeNode;feMergeNode=createNS('feMergeNode');feMergeNode.setAttribute('in','SourceGraphic');feMerge.appendChild(feMergeNode);feMergeNode=createNS('feMergeNode');feMergeNode.setAttribute('in','f2');feMerge.appendChild(feMergeNode);}}SVGTintFilter.prototype.renderFrame=function(forceRender){if(forceRender||this.filterManager._mdf){var colorBlack=this.filterManager.effectElements[0].p.v;var colorWhite=this.filterManager.effectElements[1].p.v;var opacity=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute('values',colorWhite[0]-colorBlack[0]+' 0 0 0 '+colorBlack[0]+' '+(colorWhite[1]-colorBlack[1])+' 0 0 0 '+colorBlack[1]+' '+(colorWhite[2]-colorBlack[2])+' 0 0 0 '+colorBlack[2]+' 0 0 0 '+opacity+' 0');}};function SVGFillFilter(filter,filterManager){this.filterManager=filterManager;var feColorMatrix=createNS('feColorMatrix');feColorMatrix.setAttribute('type','matrix');feColorMatrix.setAttribute('color-interpolation-filters','sRGB');feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');filter.appendChild(feColorMatrix);this.matrixFilter=feColorMatrix;}SVGFillFilter.prototype.renderFrame=function(forceRender){if(forceRender||this.filterManager._mdf){var color=this.filterManager.effectElements[2].p.v;var opacity=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute('values','0 0 0 0 '+color[0]+' 0 0 0 0 '+color[1]+' 0 0 0 0 '+color[2]+' 0 0 0 '+opacity+' 0');}};function SVGGaussianBlurEffect(filter,filterManager){// Outset the filter region by 100% on all sides to accommodate blur expansion.
filter.setAttribute('x','-100%');filter.setAttribute('y','-100%');filter.setAttribute('width','300%');filter.setAttribute('height','300%');this.filterManager=filterManager;var feGaussianBlur=createNS('feGaussianBlur');filter.appendChild(feGaussianBlur);this.feGaussianBlur=feGaussianBlur;}SVGGaussianBlurEffect.prototype.renderFrame=function(forceRender){if(forceRender||this.filterManager._mdf){// Empirical value, matching AE's blur appearance.
var kBlurrinessToSigma=0.3;var sigma=this.filterManager.effectElements[0].p.v*kBlurrinessToSigma;// Dimensions mapping:
//
//   1 -> horizontal & vertical
//   2 -> horizontal only
//   3 -> vertical only
//
var dimensions=this.filterManager.effectElements[1].p.v;var sigmaX=dimensions==3?0:sigma;var sigmaY=dimensions==2?0:sigma;this.feGaussianBlur.setAttribute('stdDeviation',sigmaX+" "+sigmaY);// Repeat edges mapping:
//
//   0 -> off -> duplicate
//   1 -> on  -> wrap
var edgeMode=this.filterManager.effectElements[2].p.v==1?'wrap':'duplicate';this.feGaussianBlur.setAttribute('edgeMode',edgeMode);}};function SVGStrokeEffect(elem,filterManager){this.initialized=false;this.filterManager=filterManager;this.elem=elem;this.paths=[];}SVGStrokeEffect.prototype.initialize=function(){var elemChildren=this.elem.layerElement.children||this.elem.layerElement.childNodes;var path,groupPath,i,len;if(this.filterManager.effectElements[1].p.v===1){len=this.elem.maskManager.masksProperties.length;i=0;}else{i=this.filterManager.effectElements[0].p.v-1;len=i+1;}groupPath=createNS('g');groupPath.setAttribute('fill','none');groupPath.setAttribute('stroke-linecap','round');groupPath.setAttribute('stroke-dashoffset',1);for(i;i<len;i+=1){path=createNS('path');groupPath.appendChild(path);this.paths.push({p:path,m:i});}if(this.filterManager.effectElements[10].p.v===3){var mask=createNS('mask');var id=createElementID();mask.setAttribute('id',id);mask.setAttribute('mask-type','alpha');mask.appendChild(groupPath);this.elem.globalData.defs.appendChild(mask);var g=createNS('g');g.setAttribute('mask','url('+locationHref+'#'+id+')');while(elemChildren[0]){g.appendChild(elemChildren[0]);}this.elem.layerElement.appendChild(g);this.masker=mask;groupPath.setAttribute('stroke','#fff');}else if(this.filterManager.effectElements[10].p.v===1||this.filterManager.effectElements[10].p.v===2){if(this.filterManager.effectElements[10].p.v===2){elemChildren=this.elem.layerElement.children||this.elem.layerElement.childNodes;while(elemChildren.length){this.elem.layerElement.removeChild(elemChildren[0]);}}this.elem.layerElement.appendChild(groupPath);this.elem.layerElement.removeAttribute('mask');groupPath.setAttribute('stroke','#fff');}this.initialized=true;this.pathMasker=groupPath;};SVGStrokeEffect.prototype.renderFrame=function(forceRender){if(!this.initialized){this.initialize();}var i,len=this.paths.length;var mask,path;for(i=0;i<len;i+=1){if(this.paths[i].m===-1){continue;}mask=this.elem.maskManager.viewData[this.paths[i].m];path=this.paths[i].p;if(forceRender||this.filterManager._mdf||mask.prop._mdf){path.setAttribute('d',mask.lastPath);}if(forceRender||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||mask.prop._mdf){var dasharrayValue;if(this.filterManager.effectElements[7].p.v!==0||this.filterManager.effectElements[8].p.v!==100){var s=Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100;var e=Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100;var l=path.getTotalLength();dasharrayValue='0 0 0 '+l*s+' ';var lineLength=l*(e-s);var segment=1+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v/100;var units=Math.floor(lineLength/segment);var j;for(j=0;j<units;j+=1){dasharrayValue+='1 '+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v/100+' ';}dasharrayValue+='0 '+l*10+' 0 0';}else{dasharrayValue='1 '+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v/100;}path.setAttribute('stroke-dasharray',dasharrayValue);}}if(forceRender||this.filterManager.effectElements[4].p._mdf){this.pathMasker.setAttribute('stroke-width',this.filterManager.effectElements[4].p.v*2);}if(forceRender||this.filterManager.effectElements[6].p._mdf){this.pathMasker.setAttribute('opacity',this.filterManager.effectElements[6].p.v);}if(this.filterManager.effectElements[10].p.v===1||this.filterManager.effectElements[10].p.v===2){if(forceRender||this.filterManager.effectElements[3].p._mdf){var color=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute('stroke','rgb('+bm_floor(color[0]*255)+','+bm_floor(color[1]*255)+','+bm_floor(color[2]*255)+')');}}};function SVGTritoneFilter(filter,filterManager){this.filterManager=filterManager;var feColorMatrix=createNS('feColorMatrix');feColorMatrix.setAttribute('type','matrix');feColorMatrix.setAttribute('color-interpolation-filters','linearRGB');feColorMatrix.setAttribute('values','0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');feColorMatrix.setAttribute('result','f1');filter.appendChild(feColorMatrix);var feComponentTransfer=createNS('feComponentTransfer');feComponentTransfer.setAttribute('color-interpolation-filters','sRGB');filter.appendChild(feComponentTransfer);this.matrixFilter=feComponentTransfer;var feFuncR=createNS('feFuncR');feFuncR.setAttribute('type','table');feComponentTransfer.appendChild(feFuncR);this.feFuncR=feFuncR;var feFuncG=createNS('feFuncG');feFuncG.setAttribute('type','table');feComponentTransfer.appendChild(feFuncG);this.feFuncG=feFuncG;var feFuncB=createNS('feFuncB');feFuncB.setAttribute('type','table');feComponentTransfer.appendChild(feFuncB);this.feFuncB=feFuncB;}SVGTritoneFilter.prototype.renderFrame=function(forceRender){if(forceRender||this.filterManager._mdf){var color1=this.filterManager.effectElements[0].p.v;var color2=this.filterManager.effectElements[1].p.v;var color3=this.filterManager.effectElements[2].p.v;var tableR=color3[0]+' '+color2[0]+' '+color1[0];var tableG=color3[1]+' '+color2[1]+' '+color1[1];var tableB=color3[2]+' '+color2[2]+' '+color1[2];this.feFuncR.setAttribute('tableValues',tableR);this.feFuncG.setAttribute('tableValues',tableG);this.feFuncB.setAttribute('tableValues',tableB);//var opacity = this.filterManager.effectElements[2].p.v/100;
//this.matrixFilter.setAttribute('values',(colorWhite[0]- colorBlack[0])+' 0 0 0 '+ colorBlack[0] +' '+ (colorWhite[1]- colorBlack[1]) +' 0 0 0 '+ colorBlack[1] +' '+ (colorWhite[2]- colorBlack[2]) +' 0 0 0 '+ colorBlack[2] +' 0 0 0 ' + opacity + ' 0');
}};function SVGProLevelsFilter(filter,filterManager){this.filterManager=filterManager;var effectElements=this.filterManager.effectElements;var feComponentTransfer=createNS('feComponentTransfer');var feFuncR,feFuncG,feFuncB;if(effectElements[10].p.k||effectElements[10].p.v!==0||effectElements[11].p.k||effectElements[11].p.v!==1||effectElements[12].p.k||effectElements[12].p.v!==1||effectElements[13].p.k||effectElements[13].p.v!==0||effectElements[14].p.k||effectElements[14].p.v!==1){this.feFuncR=this.createFeFunc('feFuncR',feComponentTransfer);}if(effectElements[17].p.k||effectElements[17].p.v!==0||effectElements[18].p.k||effectElements[18].p.v!==1||effectElements[19].p.k||effectElements[19].p.v!==1||effectElements[20].p.k||effectElements[20].p.v!==0||effectElements[21].p.k||effectElements[21].p.v!==1){this.feFuncG=this.createFeFunc('feFuncG',feComponentTransfer);}if(effectElements[24].p.k||effectElements[24].p.v!==0||effectElements[25].p.k||effectElements[25].p.v!==1||effectElements[26].p.k||effectElements[26].p.v!==1||effectElements[27].p.k||effectElements[27].p.v!==0||effectElements[28].p.k||effectElements[28].p.v!==1){this.feFuncB=this.createFeFunc('feFuncB',feComponentTransfer);}if(effectElements[31].p.k||effectElements[31].p.v!==0||effectElements[32].p.k||effectElements[32].p.v!==1||effectElements[33].p.k||effectElements[33].p.v!==1||effectElements[34].p.k||effectElements[34].p.v!==0||effectElements[35].p.k||effectElements[35].p.v!==1){this.feFuncA=this.createFeFunc('feFuncA',feComponentTransfer);}if(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA){feComponentTransfer.setAttribute('color-interpolation-filters','sRGB');filter.appendChild(feComponentTransfer);feComponentTransfer=createNS('feComponentTransfer');}if(effectElements[3].p.k||effectElements[3].p.v!==0||effectElements[4].p.k||effectElements[4].p.v!==1||effectElements[5].p.k||effectElements[5].p.v!==1||effectElements[6].p.k||effectElements[6].p.v!==0||effectElements[7].p.k||effectElements[7].p.v!==1){feComponentTransfer.setAttribute('color-interpolation-filters','sRGB');filter.appendChild(feComponentTransfer);this.feFuncRComposed=this.createFeFunc('feFuncR',feComponentTransfer);this.feFuncGComposed=this.createFeFunc('feFuncG',feComponentTransfer);this.feFuncBComposed=this.createFeFunc('feFuncB',feComponentTransfer);}}SVGProLevelsFilter.prototype.createFeFunc=function(type,feComponentTransfer){var feFunc=createNS(type);feFunc.setAttribute('type','table');feComponentTransfer.appendChild(feFunc);return feFunc;};SVGProLevelsFilter.prototype.getTableValue=function(inputBlack,inputWhite,gamma,outputBlack,outputWhite){var cnt=0;var segments=256;var perc;var min=Math.min(inputBlack,inputWhite);var max=Math.max(inputBlack,inputWhite);var table=Array.call(null,{length:segments});var colorValue;var pos=0;var outputDelta=outputWhite-outputBlack;var inputDelta=inputWhite-inputBlack;while(cnt<=256){perc=cnt/256;if(perc<=min){colorValue=inputDelta<0?outputWhite:outputBlack;}else if(perc>=max){colorValue=inputDelta<0?outputBlack:outputWhite;}else{colorValue=outputBlack+outputDelta*Math.pow((perc-inputBlack)/inputDelta,1/gamma);}table[pos++]=colorValue;cnt+=256/(segments-1);}return table.join(' ');};SVGProLevelsFilter.prototype.renderFrame=function(forceRender){if(forceRender||this.filterManager._mdf){var val,cnt,perc,bezier;var effectElements=this.filterManager.effectElements;if(this.feFuncRComposed&&(forceRender||effectElements[3].p._mdf||effectElements[4].p._mdf||effectElements[5].p._mdf||effectElements[6].p._mdf||effectElements[7].p._mdf)){val=this.getTableValue(effectElements[3].p.v,effectElements[4].p.v,effectElements[5].p.v,effectElements[6].p.v,effectElements[7].p.v);this.feFuncRComposed.setAttribute('tableValues',val);this.feFuncGComposed.setAttribute('tableValues',val);this.feFuncBComposed.setAttribute('tableValues',val);}if(this.feFuncR&&(forceRender||effectElements[10].p._mdf||effectElements[11].p._mdf||effectElements[12].p._mdf||effectElements[13].p._mdf||effectElements[14].p._mdf)){val=this.getTableValue(effectElements[10].p.v,effectElements[11].p.v,effectElements[12].p.v,effectElements[13].p.v,effectElements[14].p.v);this.feFuncR.setAttribute('tableValues',val);}if(this.feFuncG&&(forceRender||effectElements[17].p._mdf||effectElements[18].p._mdf||effectElements[19].p._mdf||effectElements[20].p._mdf||effectElements[21].p._mdf)){val=this.getTableValue(effectElements[17].p.v,effectElements[18].p.v,effectElements[19].p.v,effectElements[20].p.v,effectElements[21].p.v);this.feFuncG.setAttribute('tableValues',val);}if(this.feFuncB&&(forceRender||effectElements[24].p._mdf||effectElements[25].p._mdf||effectElements[26].p._mdf||effectElements[27].p._mdf||effectElements[28].p._mdf)){val=this.getTableValue(effectElements[24].p.v,effectElements[25].p.v,effectElements[26].p.v,effectElements[27].p.v,effectElements[28].p.v);this.feFuncB.setAttribute('tableValues',val);}if(this.feFuncA&&(forceRender||effectElements[31].p._mdf||effectElements[32].p._mdf||effectElements[33].p._mdf||effectElements[34].p._mdf||effectElements[35].p._mdf)){val=this.getTableValue(effectElements[31].p.v,effectElements[32].p.v,effectElements[33].p.v,effectElements[34].p.v,effectElements[35].p.v);this.feFuncA.setAttribute('tableValues',val);}}};function SVGDropShadowEffect(filter,filterManager){filter.setAttribute('x','-100%');filter.setAttribute('y','-100%');filter.setAttribute('width','400%');filter.setAttribute('height','400%');this.filterManager=filterManager;var feGaussianBlur=createNS('feGaussianBlur');feGaussianBlur.setAttribute('in','SourceAlpha');feGaussianBlur.setAttribute('result','drop_shadow_1');feGaussianBlur.setAttribute('stdDeviation','0');this.feGaussianBlur=feGaussianBlur;filter.appendChild(feGaussianBlur);var feOffset=createNS('feOffset');feOffset.setAttribute('dx','25');feOffset.setAttribute('dy','0');feOffset.setAttribute('in','drop_shadow_1');feOffset.setAttribute('result','drop_shadow_2');this.feOffset=feOffset;filter.appendChild(feOffset);var feFlood=createNS('feFlood');feFlood.setAttribute('flood-color','#00ff00');feFlood.setAttribute('flood-opacity','1');feFlood.setAttribute('result','drop_shadow_3');this.feFlood=feFlood;filter.appendChild(feFlood);var feComposite=createNS('feComposite');feComposite.setAttribute('in','drop_shadow_3');feComposite.setAttribute('in2','drop_shadow_2');feComposite.setAttribute('operator','in');feComposite.setAttribute('result','drop_shadow_4');filter.appendChild(feComposite);var feMerge=createNS('feMerge');filter.appendChild(feMerge);var feMergeNode;feMergeNode=createNS('feMergeNode');feMerge.appendChild(feMergeNode);feMergeNode=createNS('feMergeNode');feMergeNode.setAttribute('in','SourceGraphic');this.feMergeNode=feMergeNode;this.feMerge=feMerge;this.originalNodeAdded=false;feMerge.appendChild(feMergeNode);}SVGDropShadowEffect.prototype.renderFrame=function(forceRender){if(forceRender||this.filterManager._mdf){if(forceRender||this.filterManager.effectElements[4].p._mdf){this.feGaussianBlur.setAttribute('stdDeviation',this.filterManager.effectElements[4].p.v/4);}if(forceRender||this.filterManager.effectElements[0].p._mdf){var col=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute('flood-color',rgbToHex(Math.round(col[0]*255),Math.round(col[1]*255),Math.round(col[2]*255)));}if(forceRender||this.filterManager.effectElements[1].p._mdf){this.feFlood.setAttribute('flood-opacity',this.filterManager.effectElements[1].p.v/255);}if(forceRender||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var distance=this.filterManager.effectElements[3].p.v;var angle=(this.filterManager.effectElements[2].p.v-90)*degToRads;var x=distance*Math.cos(angle);var y=distance*Math.sin(angle);this.feOffset.setAttribute('dx',x);this.feOffset.setAttribute('dy',y);}/*if(forceRender || this.filterManager.effectElements[5].p._mdf){
            if(this.filterManager.effectElements[5].p.v === 1 && this.originalNodeAdded) {
                this.feMerge.removeChild(this.feMergeNode);
                this.originalNodeAdded = false;
            } else if(this.filterManager.effectElements[5].p.v === 0 && !this.originalNodeAdded) {
                this.feMerge.appendChild(this.feMergeNode);
                this.originalNodeAdded = true;
            }
        }*/}};var _svgMatteSymbols=[];function SVGMatte3Effect(filterElem,filterManager,elem){this.initialized=false;this.filterManager=filterManager;this.filterElem=filterElem;this.elem=elem;elem.matteElement=createNS('g');elem.matteElement.appendChild(elem.layerElement);elem.matteElement.appendChild(elem.transformedElement);elem.baseElement=elem.matteElement;}SVGMatte3Effect.prototype.findSymbol=function(mask){var i=0,len=_svgMatteSymbols.length;while(i<len){if(_svgMatteSymbols[i]===mask){return _svgMatteSymbols[i];}i+=1;}return null;};SVGMatte3Effect.prototype.replaceInParent=function(mask,symbolId){var parentNode=mask.layerElement.parentNode;if(!parentNode){return;}var children=parentNode.children;var i=0,len=children.length;while(i<len){if(children[i]===mask.layerElement){break;}i+=1;}var nextChild;if(i<=len-2){nextChild=children[i+1];}var useElem=createNS('use');useElem.setAttribute('href','#'+symbolId);if(nextChild){parentNode.insertBefore(useElem,nextChild);}else{parentNode.appendChild(useElem);}};SVGMatte3Effect.prototype.setElementAsMask=function(elem,mask){if(!this.findSymbol(mask)){var symbolId=createElementID();var masker=createNS('mask');masker.setAttribute('id',mask.layerId);masker.setAttribute('mask-type','alpha');_svgMatteSymbols.push(mask);var defs=elem.globalData.defs;defs.appendChild(masker);var symbol=createNS('symbol');symbol.setAttribute('id',symbolId);this.replaceInParent(mask,symbolId);symbol.appendChild(mask.layerElement);defs.appendChild(symbol);var useElem=createNS('use');useElem.setAttribute('href','#'+symbolId);masker.appendChild(useElem);mask.data.hd=false;mask.show();}elem.setMatte(mask.layerId);};SVGMatte3Effect.prototype.initialize=function(){var ind=this.filterManager.effectElements[0].p.v;var elements=this.elem.comp.elements;var i=0,len=elements.length;while(i<len){if(elements[i]&&elements[i].data.ind===ind){this.setElementAsMask(this.elem,elements[i]);}i+=1;}this.initialized=true;};SVGMatte3Effect.prototype.renderFrame=function(){if(!this.initialized){this.initialize();}};function SVGEffects(elem){var i,len=elem.data.ef?elem.data.ef.length:0;var filId=createElementID();var fil=filtersFactory.createFilter(filId);var count=0;this.filters=[];var filterManager;for(i=0;i<len;i+=1){filterManager=null;if(elem.data.ef[i].ty===20){count+=1;filterManager=new SVGTintFilter(fil,elem.effectsManager.effectElements[i]);}else if(elem.data.ef[i].ty===21){count+=1;filterManager=new SVGFillFilter(fil,elem.effectsManager.effectElements[i]);}else if(elem.data.ef[i].ty===22){filterManager=new SVGStrokeEffect(elem,elem.effectsManager.effectElements[i]);}else if(elem.data.ef[i].ty===23){count+=1;filterManager=new SVGTritoneFilter(fil,elem.effectsManager.effectElements[i]);}else if(elem.data.ef[i].ty===24){count+=1;filterManager=new SVGProLevelsFilter(fil,elem.effectsManager.effectElements[i]);}else if(elem.data.ef[i].ty===25){count+=1;filterManager=new SVGDropShadowEffect(fil,elem.effectsManager.effectElements[i]);}else if(elem.data.ef[i].ty===28){//count += 1;
filterManager=new SVGMatte3Effect(fil,elem.effectsManager.effectElements[i],elem);}else if(elem.data.ef[i].ty===29){count+=1;filterManager=new SVGGaussianBlurEffect(fil,elem.effectsManager.effectElements[i]);}if(filterManager){this.filters.push(filterManager);}}if(count){elem.globalData.defs.appendChild(fil);elem.layerElement.setAttribute('filter','url('+locationHref+'#'+filId+')');}if(this.filters.length){elem.addRenderableComponent(this);}}SVGEffects.prototype.renderFrame=function(_isFirstFrame){var i,len=this.filters.length;for(i=0;i<len;i+=1){this.filters[i].renderFrame(_isFirstFrame);}};var animationManager=function(){var moduleOb={};var registeredAnimations=[];var initTime=0;var len=0;var playingAnimationsNum=0;var _stopped=true;var _isFrozen=false;function removeElement(ev){var i=0;var animItem=ev.target;while(i<len){if(registeredAnimations[i].animation===animItem){registeredAnimations.splice(i,1);i-=1;len-=1;if(!animItem.isPaused){subtractPlayingCount();}}i+=1;}}function registerAnimation(element,animationData){if(!element){return null;}var i=0;while(i<len){if(registeredAnimations[i].elem==element&&registeredAnimations[i].elem!==null){return registeredAnimations[i].animation;}i+=1;}var animItem=new AnimationItem();setupAnimation(animItem,element);animItem.setData(element,animationData);return animItem;}function getRegisteredAnimations(){var i,len=registeredAnimations.length;var animations=[];for(i=0;i<len;i+=1){animations.push(registeredAnimations[i].animation);}return animations;}function addPlayingCount(){playingAnimationsNum+=1;activate();}function subtractPlayingCount(){playingAnimationsNum-=1;}function setupAnimation(animItem,element){animItem.addEventListener('destroy',removeElement);animItem.addEventListener('_active',addPlayingCount);animItem.addEventListener('_idle',subtractPlayingCount);registeredAnimations.push({elem:element,animation:animItem});len+=1;}function loadAnimation(params){var animItem=new AnimationItem();setupAnimation(animItem,null);animItem.setParams(params);return animItem;}function setSpeed(val,animation){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.setSpeed(val,animation);}}function setDirection(val,animation){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.setDirection(val,animation);}}function play(animation){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.play(animation);}}function resume(nowTime){var elapsedTime=nowTime-initTime;var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.advanceTime(elapsedTime);}initTime=nowTime;if(playingAnimationsNum&&!_isFrozen){window.requestAnimationFrame(resume);}else{_stopped=true;}}function first(nowTime){initTime=nowTime;window.requestAnimationFrame(resume);}function pause(animation){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.pause(animation);}}function goToAndStop(value,isFrame,animation){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.goToAndStop(value,isFrame,animation);}}function stop(animation){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.stop(animation);}}function togglePause(animation){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.togglePause(animation);}}function destroy(animation){var i;for(i=len-1;i>=0;i-=1){registeredAnimations[i].animation.destroy(animation);}}function searchAnimations(animationData,standalone,renderer){var animElements=[].concat([].slice.call(document.getElementsByClassName('lottie')),[].slice.call(document.getElementsByClassName('bodymovin')));var i,len=animElements.length;for(i=0;i<len;i+=1){if(renderer){animElements[i].setAttribute('data-bm-type',renderer);}registerAnimation(animElements[i],animationData);}if(standalone&&len===0){if(!renderer){renderer='svg';}var body=document.getElementsByTagName('body')[0];body.innerHTML='';var div=createTag('div');div.style.width='100%';div.style.height='100%';div.setAttribute('data-bm-type',renderer);body.appendChild(div);registerAnimation(div,animationData);}}function resize(){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.resize();}}function activate(){if(!_isFrozen&&playingAnimationsNum){if(_stopped){window.requestAnimationFrame(first);_stopped=false;}}}function freeze(){_isFrozen=true;}function unfreeze(){_isFrozen=false;activate();}moduleOb.registerAnimation=registerAnimation;moduleOb.loadAnimation=loadAnimation;moduleOb.setSpeed=setSpeed;moduleOb.setDirection=setDirection;moduleOb.play=play;moduleOb.pause=pause;moduleOb.stop=stop;moduleOb.togglePause=togglePause;moduleOb.searchAnimations=searchAnimations;moduleOb.resize=resize;//moduleOb.start = start;
moduleOb.goToAndStop=goToAndStop;moduleOb.destroy=destroy;moduleOb.freeze=freeze;moduleOb.unfreeze=unfreeze;moduleOb.getRegisteredAnimations=getRegisteredAnimations;return moduleOb;}();var AnimationItem=function AnimationItem(){this._cbs=[];this.name='';this.path='';this.isLoaded=false;this.currentFrame=0;this.currentRawFrame=0;this.firstFrame=0;this.totalFrames=0;this.frameRate=0;this.frameMult=0;this.playSpeed=1;this.playDirection=1;this.playCount=0;this.animationData={};this.assets=[];this.isPaused=true;this.autoplay=false;this.loop=true;this.renderer=null;this.animationID=createElementID();this.assetsPath='';this.timeCompleted=0;this.segmentPos=0;this.subframeEnabled=subframeEnabled;this.segments=[];this._idle=true;this._completedLoop=false;this.projectInterface=ProjectInterface();this.imagePreloader=new ImagePreloader();};extendPrototype([BaseEvent],AnimationItem);AnimationItem.prototype.setParams=function(params){if(params.context){this.context=params.context;}if(params.wrapper||params.container){this.wrapper=params.wrapper||params.container;}var animType=params.animType?params.animType:params.renderer?params.renderer:'svg';switch(animType){case'canvas':this.renderer=new CanvasRenderer(this,params.rendererSettings);break;case'svg':this.renderer=new SVGRenderer(this,params.rendererSettings);break;default:this.renderer=new HybridRenderer(this,params.rendererSettings);break;}this.renderer.setProjectInterface(this.projectInterface);this.animType=animType;if(params.loop===''||params.loop===null){}else if(params.loop===false){this.loop=false;}else if(params.loop===true){this.loop=true;}else{this.loop=parseInt(params.loop);}this.autoplay='autoplay'in params?params.autoplay:true;this.name=params.name?params.name:'';this.autoloadSegments=params.hasOwnProperty('autoloadSegments')?params.autoloadSegments:true;this.assetsPath=params.assetsPath;if(params.animationData){this.configAnimation(params.animationData);}else if(params.path){if(params.path.lastIndexOf('\\')!==-1){this.path=params.path.substr(0,params.path.lastIndexOf('\\')+1);}else{this.path=params.path.substr(0,params.path.lastIndexOf('/')+1);}this.fileName=params.path.substr(params.path.lastIndexOf('/')+1);this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf('.json'));assetLoader.load(params.path,this.configAnimation.bind(this),function(){this.trigger('data_failed');}.bind(this));}this.initialSegment=params.initialSegment;};AnimationItem.prototype.setData=function(wrapper,animationData){var params={wrapper:wrapper,animationData:animationData?_typeof(animationData)==="object"?animationData:JSON.parse(animationData):null};var wrapperAttributes=wrapper.attributes;params.path=wrapperAttributes.getNamedItem('data-animation-path')?wrapperAttributes.getNamedItem('data-animation-path').value:wrapperAttributes.getNamedItem('data-bm-path')?wrapperAttributes.getNamedItem('data-bm-path').value:wrapperAttributes.getNamedItem('bm-path')?wrapperAttributes.getNamedItem('bm-path').value:'';params.animType=wrapperAttributes.getNamedItem('data-anim-type')?wrapperAttributes.getNamedItem('data-anim-type').value:wrapperAttributes.getNamedItem('data-bm-type')?wrapperAttributes.getNamedItem('data-bm-type').value:wrapperAttributes.getNamedItem('bm-type')?wrapperAttributes.getNamedItem('bm-type').value:wrapperAttributes.getNamedItem('data-bm-renderer')?wrapperAttributes.getNamedItem('data-bm-renderer').value:wrapperAttributes.getNamedItem('bm-renderer')?wrapperAttributes.getNamedItem('bm-renderer').value:'canvas';var loop=wrapperAttributes.getNamedItem('data-anim-loop')?wrapperAttributes.getNamedItem('data-anim-loop').value:wrapperAttributes.getNamedItem('data-bm-loop')?wrapperAttributes.getNamedItem('data-bm-loop').value:wrapperAttributes.getNamedItem('bm-loop')?wrapperAttributes.getNamedItem('bm-loop').value:'';if(loop===''){}else if(loop==='false'){params.loop=false;}else if(loop==='true'){params.loop=true;}else{params.loop=parseInt(loop);}var autoplay=wrapperAttributes.getNamedItem('data-anim-autoplay')?wrapperAttributes.getNamedItem('data-anim-autoplay').value:wrapperAttributes.getNamedItem('data-bm-autoplay')?wrapperAttributes.getNamedItem('data-bm-autoplay').value:wrapperAttributes.getNamedItem('bm-autoplay')?wrapperAttributes.getNamedItem('bm-autoplay').value:true;params.autoplay=autoplay!=="false";params.name=wrapperAttributes.getNamedItem('data-name')?wrapperAttributes.getNamedItem('data-name').value:wrapperAttributes.getNamedItem('data-bm-name')?wrapperAttributes.getNamedItem('data-bm-name').value:wrapperAttributes.getNamedItem('bm-name')?wrapperAttributes.getNamedItem('bm-name').value:'';var prerender=wrapperAttributes.getNamedItem('data-anim-prerender')?wrapperAttributes.getNamedItem('data-anim-prerender').value:wrapperAttributes.getNamedItem('data-bm-prerender')?wrapperAttributes.getNamedItem('data-bm-prerender').value:wrapperAttributes.getNamedItem('bm-prerender')?wrapperAttributes.getNamedItem('bm-prerender').value:'';if(prerender==='false'){params.prerender=false;}this.setParams(params);};AnimationItem.prototype.includeLayers=function(data){if(data.op>this.animationData.op){this.animationData.op=data.op;this.totalFrames=Math.floor(data.op-this.animationData.ip);}var layers=this.animationData.layers;var i,len=layers.length;var newLayers=data.layers;var j,jLen=newLayers.length;for(j=0;j<jLen;j+=1){i=0;while(i<len){if(layers[i].id==newLayers[j].id){layers[i]=newLayers[j];break;}i+=1;}}if(data.chars||data.fonts){this.renderer.globalData.fontManager.addChars(data.chars);this.renderer.globalData.fontManager.addFonts(data.fonts,this.renderer.globalData.defs);}if(data.assets){len=data.assets.length;for(i=0;i<len;i+=1){this.animationData.assets.push(data.assets[i]);}}this.animationData.__complete=false;dataManager.completeData(this.animationData,this.renderer.globalData.fontManager);this.renderer.includeLayers(data.layers);if(expressionsPlugin){expressionsPlugin.initExpressions(this);}this.loadNextSegment();};AnimationItem.prototype.loadNextSegment=function(){var segments=this.animationData.segments;if(!segments||segments.length===0||!this.autoloadSegments){this.trigger('data_ready');this.timeCompleted=this.totalFrames;return;}var segment=segments.shift();this.timeCompleted=segment.time*this.frameRate;var segmentPath=this.path+this.fileName+'_'+this.segmentPos+'.json';this.segmentPos+=1;assetLoader.load(segmentPath,this.includeLayers.bind(this),function(){this.trigger('data_failed');}.bind(this));};AnimationItem.prototype.loadSegments=function(){var segments=this.animationData.segments;if(!segments){this.timeCompleted=this.totalFrames;}this.loadNextSegment();};AnimationItem.prototype.imagesLoaded=function(){this.trigger('loaded_images');this.checkLoaded();};AnimationItem.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath);this.imagePreloader.setPath(this.path);this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this));};AnimationItem.prototype.configAnimation=function(animData){if(!this.renderer){return;}try{this.animationData=animData;if(this.initialSegment){this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]);this.firstFrame=Math.round(this.initialSegment[0]);}else{this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip);this.firstFrame=Math.round(this.animationData.ip);}this.renderer.configAnimation(animData);if(!animData.assets){animData.assets=[];}this.assets=this.animationData.assets;this.frameRate=this.animationData.fr;this.frameMult=this.animationData.fr/1000;this.renderer.searchExtraCompositions(animData.assets);this.trigger('config_ready');this.preloadImages();this.loadSegments();this.updaFrameModifier();this.waitForFontsLoaded();}catch(error){this.triggerConfigError(error);}};AnimationItem.prototype.waitForFontsLoaded=function(){if(!this.renderer){return;}if(this.renderer.globalData.fontManager.loaded()){this.checkLoaded();}else{setTimeout(this.waitForFontsLoaded.bind(this),20);}};AnimationItem.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.loaded()&&(this.imagePreloader.loaded()||this.renderer.rendererType!=='canvas')){this.isLoaded=true;dataManager.completeData(this.animationData,this.renderer.globalData.fontManager);if(expressionsPlugin){expressionsPlugin.initExpressions(this);}this.renderer.initItems();setTimeout(function(){this.trigger('DOMLoaded');}.bind(this),0);this.gotoFrame();if(this.autoplay){this.play();}}};AnimationItem.prototype.resize=function(){this.renderer.updateContainerSize();};AnimationItem.prototype.setSubframe=function(flag){this.subframeEnabled=flag?true:false;};AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.subframeEnabled?this.currentRawFrame:~~this.currentRawFrame;if(this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted){this.currentFrame=this.timeCompleted;}this.trigger('enterFrame');this.renderFrame();};AnimationItem.prototype.renderFrame=function(){if(this.isLoaded===false){return;}try{this.renderer.renderFrame(this.currentFrame+this.firstFrame);}catch(error){this.triggerRenderFrameError(error);}};AnimationItem.prototype.play=function(name){if(name&&this.name!=name){return;}if(this.isPaused===true){this.isPaused=false;if(this._idle){this._idle=false;this.trigger('_active');}}};AnimationItem.prototype.pause=function(name){if(name&&this.name!=name){return;}if(this.isPaused===false){this.isPaused=true;this._idle=true;this.trigger('_idle');}};AnimationItem.prototype.togglePause=function(name){if(name&&this.name!=name){return;}if(this.isPaused===true){this.play();}else{this.pause();}};AnimationItem.prototype.stop=function(name){if(name&&this.name!=name){return;}this.pause();this.playCount=0;this._completedLoop=false;this.setCurrentRawFrameValue(0);};AnimationItem.prototype.goToAndStop=function(value,isFrame,name){if(name&&this.name!=name){return;}if(isFrame){this.setCurrentRawFrameValue(value);}else{this.setCurrentRawFrameValue(value*this.frameModifier);}this.pause();};AnimationItem.prototype.goToAndPlay=function(value,isFrame,name){this.goToAndStop(value,isFrame,name);this.play();};AnimationItem.prototype.advanceTime=function(value){if(this.isPaused===true||this.isLoaded===false){return;}var nextValue=this.currentRawFrame+value*this.frameModifier;var _isComplete=false;// Checking if nextValue > totalFrames - 1 for addressing non looping and looping animations.
// If animation won't loop, it should stop at totalFrames - 1. If it will loop it should complete the last frame and then loop.
if(nextValue>=this.totalFrames-1&&this.frameModifier>0){if(!this.loop||this.playCount===this.loop){if(!this.checkSegments(nextValue>this.totalFrames?nextValue%this.totalFrames:0)){_isComplete=true;nextValue=this.totalFrames-1;}}else if(nextValue>=this.totalFrames){this.playCount+=1;if(!this.checkSegments(nextValue%this.totalFrames)){this.setCurrentRawFrameValue(nextValue%this.totalFrames);this._completedLoop=true;this.trigger('loopComplete');}}else{this.setCurrentRawFrameValue(nextValue);}}else if(nextValue<0){if(!this.checkSegments(nextValue%this.totalFrames)){if(this.loop&&!(this.playCount--<=0&&this.loop!==true)){this.setCurrentRawFrameValue(this.totalFrames+nextValue%this.totalFrames);if(!this._completedLoop){this._completedLoop=true;}else{this.trigger('loopComplete');}}else{_isComplete=true;nextValue=0;}}}else{this.setCurrentRawFrameValue(nextValue);}if(_isComplete){this.setCurrentRawFrameValue(nextValue);this.pause();this.trigger('complete');}};AnimationItem.prototype.adjustSegment=function(arr,offset){this.playCount=0;if(arr[1]<arr[0]){if(this.frameModifier>0){if(this.playSpeed<0){this.setSpeed(-this.playSpeed);}else{this.setDirection(-1);}}this.timeCompleted=this.totalFrames=arr[0]-arr[1];this.firstFrame=arr[1];this.setCurrentRawFrameValue(this.totalFrames-0.001-offset);}else if(arr[1]>arr[0]){if(this.frameModifier<0){if(this.playSpeed<0){this.setSpeed(-this.playSpeed);}else{this.setDirection(1);}}this.timeCompleted=this.totalFrames=arr[1]-arr[0];this.firstFrame=arr[0];this.setCurrentRawFrameValue(0.001+offset);}this.trigger('segmentStart');};AnimationItem.prototype.setSegment=function(init,end){var pendingFrame=-1;if(this.isPaused){if(this.currentRawFrame+this.firstFrame<init){pendingFrame=init;}else if(this.currentRawFrame+this.firstFrame>end){pendingFrame=end-init;}}this.firstFrame=init;this.timeCompleted=this.totalFrames=end-init;if(pendingFrame!==-1){this.goToAndStop(pendingFrame,true);}};AnimationItem.prototype.playSegments=function(arr,forceFlag){if(forceFlag){this.segments.length=0;}if(_typeof(arr[0])==='object'){var i,len=arr.length;for(i=0;i<len;i+=1){this.segments.push(arr[i]);}}else{this.segments.push(arr);}if(this.segments.length&&forceFlag){this.adjustSegment(this.segments.shift(),0);}if(this.isPaused){this.play();}};AnimationItem.prototype.resetSegments=function(forceFlag){this.segments.length=0;this.segments.push([this.animationData.ip,this.animationData.op]);//this.segments.push([this.animationData.ip*this.frameRate,Math.floor(this.animationData.op - this.animationData.ip+this.animationData.ip*this.frameRate)]);
if(forceFlag){this.checkSegments(0);}};AnimationItem.prototype.checkSegments=function(offset){if(this.segments.length){this.adjustSegment(this.segments.shift(),offset);return true;}return false;};AnimationItem.prototype.destroy=function(name){if(name&&this.name!=name||!this.renderer){return;}this.renderer.destroy();this.imagePreloader.destroy();this.trigger('destroy');this._cbs=null;this.onEnterFrame=this.onLoopComplete=this.onComplete=this.onSegmentStart=this.onDestroy=null;this.renderer=null;};AnimationItem.prototype.setCurrentRawFrameValue=function(value){this.currentRawFrame=value;this.gotoFrame();};AnimationItem.prototype.setSpeed=function(val){this.playSpeed=val;this.updaFrameModifier();};AnimationItem.prototype.setDirection=function(val){this.playDirection=val<0?-1:1;this.updaFrameModifier();};AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection;};AnimationItem.prototype.getPath=function(){return this.path;};AnimationItem.prototype.getAssetsPath=function(assetData){var path='';if(assetData.e){path=assetData.p;}else if(this.assetsPath){var imagePath=assetData.p;if(imagePath.indexOf('images/')!==-1){imagePath=imagePath.split('/')[1];}path=this.assetsPath+imagePath;}else{path=this.path;path+=assetData.u?assetData.u:'';path+=assetData.p;}return path;};AnimationItem.prototype.getAssetData=function(id){var i=0,len=this.assets.length;while(i<len){if(id==this.assets[i].id){return this.assets[i];}i+=1;}};AnimationItem.prototype.hide=function(){this.renderer.hide();};AnimationItem.prototype.show=function(){this.renderer.show();};AnimationItem.prototype.getDuration=function(isFrame){return isFrame?this.totalFrames:this.totalFrames/this.frameRate;};AnimationItem.prototype.trigger=function(name){if(this._cbs&&this._cbs[name]){switch(name){case'enterFrame':this.triggerEvent(name,new BMEnterFrameEvent(name,this.currentFrame,this.totalFrames,this.frameModifier));break;case'loopComplete':this.triggerEvent(name,new BMCompleteLoopEvent(name,this.loop,this.playCount,this.frameMult));break;case'complete':this.triggerEvent(name,new BMCompleteEvent(name,this.frameMult));break;case'segmentStart':this.triggerEvent(name,new BMSegmentStartEvent(name,this.firstFrame,this.totalFrames));break;case'destroy':this.triggerEvent(name,new BMDestroyEvent(name,this));break;default:this.triggerEvent(name);}}if(name==='enterFrame'&&this.onEnterFrame){this.onEnterFrame.call(this,new BMEnterFrameEvent(name,this.currentFrame,this.totalFrames,this.frameMult));}if(name==='loopComplete'&&this.onLoopComplete){this.onLoopComplete.call(this,new BMCompleteLoopEvent(name,this.loop,this.playCount,this.frameMult));}if(name==='complete'&&this.onComplete){this.onComplete.call(this,new BMCompleteEvent(name,this.frameMult));}if(name==='segmentStart'&&this.onSegmentStart){this.onSegmentStart.call(this,new BMSegmentStartEvent(name,this.firstFrame,this.totalFrames));}if(name==='destroy'&&this.onDestroy){this.onDestroy.call(this,new BMDestroyEvent(name,this));}};AnimationItem.prototype.triggerRenderFrameError=function(nativeError){var error=new BMRenderFrameErrorEvent(nativeError,this.currentFrame);this.triggerEvent('error',error);if(this.onError){this.onError.call(this,error);}};AnimationItem.prototype.triggerConfigError=function(nativeError){var error=new BMConfigErrorEvent(nativeError,this.currentFrame);this.triggerEvent('error',error);if(this.onError){this.onError.call(this,error);}};function EffectsManager(){}var lottie={};var _isFrozen=false;function setLocationHref(href){locationHref=href;}function searchAnimations(){if(standalone===true){animationManager.searchAnimations(animationData,standalone,renderer);}else{animationManager.searchAnimations();}}function setSubframeRendering(flag){subframeEnabled=flag;}function loadAnimation(params){if(standalone===true){params.animationData=JSON.parse(animationData);}return animationManager.loadAnimation(params);}function setQuality(value){if(typeof value==='string'){switch(value){case'high':defaultCurveSegments=200;break;case'medium':defaultCurveSegments=50;break;case'low':defaultCurveSegments=10;break;}}else if(!isNaN(value)&&value>1){defaultCurveSegments=value;}if(defaultCurveSegments>=50){roundValues(false);}else{roundValues(true);}}function inBrowser(){return typeof navigator!=='undefined';}function installPlugin(type,plugin){if(type==='expressions'){expressionsPlugin=plugin;}}function getFactory(name){switch(name){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix;}}lottie.play=animationManager.play;lottie.pause=animationManager.pause;lottie.setLocationHref=setLocationHref;lottie.togglePause=animationManager.togglePause;lottie.setSpeed=animationManager.setSpeed;lottie.setDirection=animationManager.setDirection;lottie.stop=animationManager.stop;lottie.searchAnimations=searchAnimations;lottie.registerAnimation=animationManager.registerAnimation;lottie.loadAnimation=loadAnimation;lottie.setSubframeRendering=setSubframeRendering;lottie.resize=animationManager.resize;//lottie.start = start;
lottie.goToAndStop=animationManager.goToAndStop;lottie.destroy=animationManager.destroy;lottie.setQuality=setQuality;lottie.inBrowser=inBrowser;lottie.installPlugin=installPlugin;lottie.freeze=animationManager.freeze;lottie.unfreeze=animationManager.unfreeze;lottie.getRegisteredAnimations=animationManager.getRegisteredAnimations;lottie.__getFactory=getFactory;lottie.version='5.6.5';function checkReady(){if(document.readyState==="complete"){clearInterval(readyStateCheckInterval);searchAnimations();}}function getQueryVariable(variable){var vars=queryString.split('&');for(var i=0;i<vars.length;i++){var pair=vars[i].split('=');if(decodeURIComponent(pair[0])==variable){return decodeURIComponent(pair[1]);}}}var standalone='__[STANDALONE]__';var animationData='__[ANIMATIONDATA]__';var renderer='';if(standalone){var scripts=document.getElementsByTagName('script');var index=scripts.length-1;var myScript=scripts[index]||{src:''};var queryString=myScript.src.replace(/^[^\?]+\??/,'');renderer=getQueryVariable('renderer');}var readyStateCheckInterval=setInterval(checkReady,100);return lottie;});

},{}],"scroll-out":[function(require,module,exports){
'use strict';

function clamp(v, min, max) {
    return min > v ? min : max < v ? max : v;
}
function sign(x) {
    return (+(x > 0) - +(x < 0));
}
function round(n) {
    return Math.round(n * 10000) / 10000;
}

var cache = {};
function replacer(match) {
    return '-' + match[0].toLowerCase();
}
function hyphenate(value) {
    return cache[value] || (cache[value] = value.replace(/([A-Z])/g, replacer));
}

/** find elements */
function $(e, parent) {
    return !e || e.length === 0
        ? // null or empty string returns empty array
            []
        : e.nodeName
            ? // a single element is wrapped in an array
                [e]
            : // selector and NodeList are converted to Element[]
                [].slice.call(e[0].nodeName ? e : (parent || document.documentElement).querySelectorAll(e));
}
function setAttrs(el, attrs) {
    // tslint:disable-next-line:forin
    for (var key in attrs) {
        if (key.indexOf('_')) {
            el.setAttribute('data-' + hyphenate(key), attrs[key]);
        }
    }
}
function setProps(cssProps) {
    return function (el, props) {
        for (var key in props) {
            if (key.indexOf('_') && (cssProps === true || cssProps[key])) {
                el.style.setProperty('--' + hyphenate(key), round(props[key]));
            }
        }
    };
}

var clearTask;
var subscribers = [];
function loop() {
    clearTask = 0;
    subscribers.slice().forEach(function (s2) { return s2(); });
    enqueue();
}
function enqueue() {
    if (!clearTask && subscribers.length) {
        clearTask = requestAnimationFrame(loop);
    }
}
function subscribe(fn) {
    subscribers.push(fn);
    enqueue();
    return function () {
        subscribers = subscribers.filter(function (s) { return s !== fn; });
        if (!subscribers.length && clearTask) {
            cancelAnimationFrame(clearTask);
            clearTask = 0;
        }
    };
}

function unwrap(value, el, ctx, doc) {
    return typeof value === 'function' ? value(el, ctx, doc) : value;
}
function noop() { }

/**
 * Creates a new instance of ScrollOut that marks elements in the viewport with
 * an "in" class and marks elements outside of the viewport with an "out"
 */
// tslint:disable-next-line:no-default-export
function main (opts) {
    // Apply default options.
    opts = opts || {};
    // Debounce onChange/onHidden/onShown.
    var onChange = opts.onChange || noop;
    var onHidden = opts.onHidden || noop;
    var onShown = opts.onShown || noop;
    var onScroll = opts.onScroll || noop;
    var props = opts.cssProps ? setProps(opts.cssProps) : noop;
    var se = opts.scrollingElement;
    var container = se ? $(se)[0] : window;
    var doc = se ? $(se)[0] : document.documentElement;
    var rootChanged = false;
    var scrollingElementContext = {};
    var elementContextList = [];
    var clientOffsetX, clientOffsety;
    var sub;
    function index() {
        elementContextList = $(opts.targets || '[data-scroll]', $(opts.scope || doc)[0]).map(function (el) { return ({ element: el }); });
    }
    function update() {
        // Calculate position, direction and ratio.
        var clientWidth = doc.clientWidth;
        var clientHeight = doc.clientHeight;
        var scrollDirX = sign(-clientOffsetX + (clientOffsetX = doc.scrollLeft || window.pageXOffset));
        var scrollDirY = sign(-clientOffsety + (clientOffsety = doc.scrollTop || window.pageYOffset));
        var scrollPercentX = doc.scrollLeft / (doc.scrollWidth - clientWidth || 1);
        var scrollPercentY = doc.scrollTop / (doc.scrollHeight - clientHeight || 1);
        // Detect if the root context has changed.
        rootChanged =
            rootChanged ||
                scrollingElementContext.scrollDirX !== scrollDirX ||
                scrollingElementContext.scrollDirY !== scrollDirY ||
                scrollingElementContext.scrollPercentX !== scrollPercentX ||
                scrollingElementContext.scrollPercentY !== scrollPercentY;
        scrollingElementContext.scrollDirX = scrollDirX;
        scrollingElementContext.scrollDirY = scrollDirY;
        scrollingElementContext.scrollPercentX = scrollPercentX;
        scrollingElementContext.scrollPercentY = scrollPercentY;
        var childChanged = false;
        for (var index_1 = 0; index_1 < elementContextList.length; index_1++) {
            var ctx = elementContextList[index_1];
            var element = ctx.element;
            // find the distance from the element to the scrolling container
            var target = element;
            var offsetX = 0;
            var offsetY = 0;
            do {
                offsetX += target.offsetLeft;
                offsetY += target.offsetTop;
                target = target.offsetParent;
            } while (target && target !== container);
            // Get element dimensions.
            var elementHeight = element.clientHeight || element.offsetHeight || 0;
            var elementWidth = element.clientWidth || element.offsetWidth || 0;
            // Find visible ratios for each element.
            var visibleX = (clamp(offsetX + elementWidth, clientOffsetX, clientOffsetX + clientWidth) -
                clamp(offsetX, clientOffsetX, clientOffsetX + clientWidth)) /
                elementWidth;
            var visibleY = (clamp(offsetY + elementHeight, clientOffsety, clientOffsety + clientHeight) -
                clamp(offsetY, clientOffsety, clientOffsety + clientHeight)) /
                elementHeight;
            var intersectX = visibleX === 1 ? 0 : sign(offsetX - clientOffsetX);
            var intersectY = visibleY === 1 ? 0 : sign(offsetY - clientOffsety);
            var viewportX = clamp((clientOffsetX - (elementWidth / 2 + offsetX - clientWidth / 2)) / (clientWidth / 2), -1, 1);
            var viewportY = clamp((clientOffsety - (elementHeight / 2 + offsetY - clientHeight / 2)) / (clientHeight / 2), -1, 1);
            var visible = void 0;
            if (opts.offset) {
                visible = unwrap(opts.offset, element, ctx, doc) <= clientOffsety ? 1 : 0;
            }
            else if ((unwrap(opts.threshold, element, ctx, doc) || 0) < visibleX * visibleY) {
                visible = 1;
            }
            else {
                visible = 0;
            }
            var changedVisible = ctx.visible !== visible;
            var changed = ctx._changed ||
                changedVisible ||
                ctx.visibleX !== visibleX ||
                ctx.visibleY !== visibleY ||
                ctx.index !== index_1 ||
                ctx.elementHeight !== elementHeight ||
                ctx.elementWidth !== elementWidth ||
                ctx.offsetX !== offsetX ||
                ctx.offsetY !== offsetY ||
                ctx.intersectX !== ctx.intersectX ||
                ctx.intersectY !== ctx.intersectY ||
                ctx.viewportX !== viewportX ||
                ctx.viewportY !== viewportY;
            if (changed) {
                childChanged = true;
                ctx._changed = true;
                ctx._visibleChanged = changedVisible;
                ctx.visible = visible;
                ctx.elementHeight = elementHeight;
                ctx.elementWidth = elementWidth;
                ctx.index = index_1;
                ctx.offsetX = offsetX;
                ctx.offsetY = offsetY;
                ctx.visibleX = visibleX;
                ctx.visibleY = visibleY;
                ctx.intersectX = intersectX;
                ctx.intersectY = intersectY;
                ctx.viewportX = viewportX;
                ctx.viewportY = viewportY;
                ctx.visible = visible;
            }
        }
        if (!sub && (rootChanged || childChanged)) {
            sub = subscribe(render);
        }
    }
    function render() {
        maybeUnsubscribe();
        // Update root attributes if they have changed.
        if (rootChanged) {
            rootChanged = false;
            setAttrs(doc, {
                scrollDirX: scrollingElementContext.scrollDirX,
                scrollDirY: scrollingElementContext.scrollDirY
            });
            props(doc, scrollingElementContext);
            onScroll(doc, scrollingElementContext, elementContextList);
        }
        var len = elementContextList.length;
        for (var x = len - 1; x > -1; x--) {
            var ctx = elementContextList[x];
            var el = ctx.element;
            var visible = ctx.visible;
            var justOnce = el.hasAttribute('scrollout-once') || false; // Once
            if (ctx._changed) {
                ctx._changed = false;
                props(el, ctx);
            }
            if (ctx._visibleChanged) {
                setAttrs(el, { scroll: visible ? 'in' : 'out' });
                onChange(el, ctx, doc);
                (visible ? onShown : onHidden)(el, ctx, doc);
            }
            // if this is shown multiple times, keep it in the list
            if (visible && (opts.once || justOnce)) { // or if this element just display it once
                elementContextList.splice(x, 1);
            }
        }
    }
    function maybeUnsubscribe() {
        if (sub) {
            sub();
            sub = undefined;
        }
    }
    // Run initialize index.
    index();
    update();
    render();
    // Collapses sequential updates into a single update.
    var updateTaskId = 0;
    var onUpdate = function () {
        updateTaskId = updateTaskId || setTimeout(function () {
            updateTaskId = 0;
            update();
        }, 0);
    };
    // Hook up document listeners to automatically detect changes.
    window.addEventListener('resize', onUpdate);
    container.addEventListener('scroll', onUpdate);
    return {
        index: index,
        update: update,
        teardown: function () {
            maybeUnsubscribe();
            window.removeEventListener('resize', onUpdate);
            container.removeEventListener('scroll', onUpdate);
        }
    };
}

module.exports = main;

},{}],"util":[function(require,module,exports){
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
