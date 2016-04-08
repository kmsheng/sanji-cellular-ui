!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("angular"),require("sanji-core-ui")):"function"==typeof define&&define.amd?define(["angular","sanji-core-ui"],n):"object"==typeof exports?exports.sjCellular=n(require("angular"),require("sanji-core-ui")):e.sjCellular=n(e.angular,e["sanji-core-ui"])}(this,function(e,n){return function(e){function n(a){if(t[a])return t[a].exports;var i=t[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(2),s=a(l),o=t(21),c=a(o),u=t(14),d=a(u),f=t(8),L=a(f),p=t(9),m=a(p),_=t(7),v=a(_),E=r["default"].module("sanji.cellular",[s["default"],c["default"],d["default"]]);E.config(L["default"]),E.service("cellularService",m["default"]),E.directive("sanjiCellularWindow",v["default"].directiveFactory),n["default"]=E=E.name,e.exports=n["default"]},function(n,t){n.exports=e},function(e,t){e.exports=n},function(e,n){},function(e,n){e.exports={get:{url:"/network/cellulars",type:"collection",titlePrefix:"cellular"},put:{url:"/network/cellulars/:id",type:"model"},fields:[{key:"enable",type:"switch",templateOptions:{label:"CELLULAR_FORM_LABEL_ENABLE",required:!0}},{key:"apn",type:"input",templateOptions:{label:"CELLULAR_FORM_LABEL_APN",required:!0}},{key:"pinCode",type:"input",templateOptions:{label:"CELLULAR_FORM_LABEL_PINCODE",required:!0}},{key:"keepalive.enable",type:"switch",templateOptions:{label:"CELLULAR_FORM_LABEL_ENABLE_KEEPALIVE",required:!0}},{key:"keepalive.targetHost",type:"input",templateOptions:{label:"CELLULAR_FORM_LABEL_TARGET_HOST",required:!0},hideExpression:"!model.keepalive.enable"},{key:"keepalive.intervalSec",type:"number",templateOptions:{label:"CELLULAR_FORM_LABEL_PING_INTERVAL",min:0,max:null,required:!0},hideExpression:"!model.keepalive.enable"}]}},function(e,n){e.exports={CELLULAR:"Cellular",CELLULAR_WINDOW_INFO:"Information",CELLULAR_SEC:"sec.",CELLULAR_FORM_SETTING:"Setting",CELLULAR_FORM_LABEL_ENABLE:"Enable",CELLULAR_FORM_LABEL_APN:"APN",CELLULAR_FORM_LABEL_PINCODE:"Pin Code",CELLULAR_FORM_LABEL_ENABLE_KEEPALIVE:"Enable Keep-alive",CELLULAR_FORM_LABEL_TARGET_HOST:"Target Host",CELLULAR_FORM_LABEL_PING_INTERVAL:"Ping Interval",CELLULAR_FORM_SAVE:"Save",CELLULAR_FORM_SAVE_SUCCESS:"Update data successfully.",CELLULAR_INFO_BASIC:"Basic Information",CELLULAR_INFO_OPERATOR:"Operator Name",CELLULAR_INFO_CONNECTION_STATUS:"Connection Status",CELLULAR_INFO_APN:"APN",CELLULAR_INFO_MODE:"Mode",CELLULAR_INFO_LAC:"LAC",CELLULAR_INFO_IMEI:"IMEI",CELLULAR_INFO_PIN_REMAIN_TIME:"PIN Remain Times",CELLULAR_INFO_NETWORK:"Network Information",CELLULAR_INFO_IP:"IP",CELLULAR_INFO_NETMASK:"Netmask",CELLULAR_INFO_GATEWAY:"Gateway",CELLULAR_INFO_DNS:"DNS",CELLULAR_INFO_USAGE:"Usage",CELLULAR_INFO_TRANSMIT_USAGE:"Transmit",CELLULAR_INFO_RECEIVE_USAGE:"Receive",CELLULAR_INFO_KEEPALIVE:"Keep-alive",CELLULAR_INFO_STATUS:"Status",CELLULAR_INFO_TARGET_HOST:"Target Host",CELLULAR_INFO_PING_INTERVAL:"Ping Interval",CELLULAR_SIGNAL_CHART_TITLE:"Profile Strength Meter",CELLULAR_INFO_NO_MODULE_MSG:"Please insert cellular module."}},function(e,n){e.exports={CELLULAR:"Cellular",CELLULAR_FORM_SETTING:"設定",CELLULAR_FORM_LABEL_ENABLE:"啟用",CELLULAR_FORM_LABEL_APN:"APN",CELLULAR_FORM_LABEL_PINCODE:"Pin 碼",CELLULAR_FORM_LABEL_ENABLE_KEEPALIVE:"啟用保持連線",CELLULAR_FORM_LABEL_TARGET_HOST:"目標主機",CELLULAR_FORM_LABEL_PING_INTERVAL:"Ping 間隔",CELLULAR_FORM_SAVE:"儲存",CELLULAR_FORM_SAVE_SUCCESS:"更新資料成功",CELLULAR_INFO_BASIC:"基本資訊",CELLULAR_INFO_OPERATOR:"營運商名稱",CELLULAR_INFO_CONNECTION_STATUS:"連線狀態",CELLULAR_INFO_APN:"APN",CELLULAR_INFO_MODE:"模式",CELLULAR_INFO_LAC:"位置區域碼",CELLULAR_INFO_IMEI:"IMEI",CELLULAR_INFO_PIN_REMAIN_TIME:"PIN 輸入剩餘次數",CELLULAR_INFO_NETWORK:"網路資訊",CELLULAR_INFO_IP:"網路位址",CELLULAR_INFO_NETMASK:"網路遮罩",CELLULAR_INFO_GATEWAY:"閘道器",CELLULAR_INFO_DNS:"網域伺服器",CELLULAR_INFO_USAGE:"使用量",CELLULAR_INFO_TRANSMIT_USAGE:"傳輸",CELLULAR_INFO_RECEIVE_USAGE:"接收",CELLULAR_INFO_KEEPALIVE:"保持連線",CELLULAR_INFO_STATUS:"狀態",CELLULAR_INFO_TARGET_HOST:"目標主機",CELLULAR_INFO_PING_INTERVAL:"Ping 間隔",CELLULAR_SIGNAL_CHART_TITLE:"訊號強度圖",CELLULAR_INFO_NO_MODULE_MSG:"請插入 Cellular 模組"}},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=new WeakMap,r=[],l=function(){function e(n){t(this,e),e.directiveFactory.$inject.forEach(function(t,a){e[t]=n[a],i.set(e[t],n[a])}),this.restrict="E",this.template='<sanji-window window-id="sanji-cellular-ui"\n                      window-name="{{\'CELLULAR\' | translate}}" show-loading-btn>\n                      <sanji-window-state default-state\n                        state-name="sanji-info"\n                        link-name="{{\'CELLULAR_WINDOW_INFO\' | translate}}"\n                        icon="info">\n                        <sanji-cellular-info-container></sanji-cellular-info-container>\n                      </sanji-window-state>\n                      <sanji-window-state\n                        state-name="sanji-form"\n                        link-name="{{\'CELLULAR_FORM_SETTING\' | translate}}"\n                        icon="settings">\n                        <sanji-cellular-form-container></sanji-cellular-form-container>\n                      </sanji-window-state>\n                    </sanji-window>'}return a(e,null,[{key:"directiveFactory",value:function(){for(var n=arguments.length,t=Array(n),a=0;n>a;a++)t[a]=arguments[a];return e.instance=new e(t),e.instance}}]),e}();l.directiveFactory.$inject=r,n["default"]=l,e.exports=n["default"]},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=["$translateProvider",function(e){"ngInject";e.translations("en",t(5)),e.translations("zh-tw",t(6))}],e.exports=n["default"]},function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),r=["$q","rest","exception","_","pathToRegexp","$filter","logger"],l=t(4),s=function(){function e(){for(var n=this,t=arguments.length,i=Array(t),r=0;t>r;r++)i[r]=arguments[r];switch(a(this,e),e.$inject.forEach(function(e,t){return n[e]=i[t]}),l.get.type){case"collection":this.data=[];break;case"model":this.data={};break;default:this.data=[]}}return i(e,[{key:"_transform",value:function(e){switch(l.get.type){case"collection":return this._.map(e,function(e,n){return{title:(l.get.titlePrefix||"tab")+n,content:e,formOptions:{},fields:l.fields}});case"model":return{content:e,formOptions:{},fields:l.fields};default:return this._.map(e,function(e,n){return{title:(l.get.titlePrefix||"tab")+n,content:e,formOptions:{},fields:l.fields}})}}},{key:"get",value:function(){var e=this,n=this.pathToRegexp.compile(l.get.url);return this.rest.get(n(),void 0).then(function(n){e.data=e._transform(n.data)})["catch"](function(n){return e.exception.catcher("[CellularService] Get data error.")(n),e.$q.reject()})}},{key:"update",value:function(e){var n=this,t=this.pathToRegexp.compile(l.put.url),a=void 0!==e.content.id?t({id:e.content.id}):t();return this.rest.put(a,e.content,e.formOptions.files,void 0).then(function(e){return n.logger.success(n.$filter("translate")("CELLULAR_FORM_SAVE_SUCCESS"),e.data),e.data})["catch"](function(e){return n.exception.catcher("[CellularService] Update data error.")(e),n.$q.reject()})}}]),e}();s.$inject=r,n["default"]=s,e.exports=n["default"]},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=["$scope","sanjiWindowService","cellularService"],r="sanji-cellular-ui",l=function(){function e(){for(var n=this,a=arguments.length,i=Array(a),l=0;a>l;l++)i[l]=arguments[l];t(this,e),e.$inject.forEach(function(e,t){return n[e]=i[t]}),this.sanjiWindowMgr=this.sanjiWindowService.get(r),this.data=this.cellularService.data,this.activate(),this.$scope.$on("sj:window:refresh",this.onRefresh.bind(this))}return a(e,[{key:"activate",value:function(){var e=this;this.sanjiWindowMgr.promise=this.cellularService.get().then(function(){e.data=e.cellularService.data})}},{key:"onRefresh",value:function(e,n){n.id===r&&this.activate()}},{key:"onSave",value:function(e){this.sanjiWindowMgr.promise=this.cellularService.update(e)}}]),e}();l.$inject=i,n["default"]=l,e.exports=n["default"]},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=new WeakMap,r=[],l=function(){function e(n){t(this,e),e.directiveFactory.$inject.forEach(function(t,a){e[t]=n[a],i.set(e[t],n[a])}),this.restrict="EA",this.controller="CellularFormContainerController",this.controllerAs="vm",this.scope={},this.bindToController=!0,this.template='<sanji-cellular-form data="vm.data" on-submit="vm.onSave(data)"></sanji-cellular-form>'}return a(e,null,[{key:"directiveFactory",value:function(){for(var n=arguments.length,t=Array(n),a=0;n>a;a++)t[a]=arguments[a];return e.instance=new e(t),e.instance}}]),e}();l.directiveFactory.$inject=r,n["default"]=l,e.exports=n["default"]},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=[],r=function(){function e(){for(var n=this,a=arguments.length,i=Array(a),r=0;a>r;r++)i[r]=arguments[r];t(this,e),e.$inject.forEach(function(e,t){return n[e]=i[t]})}return a(e,[{key:"save",value:function(e){this.submitCallback({data:e})}}]),e}();r.$inject=i,n["default"]=r,e.exports=n["default"]},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=new WeakMap,r=[],l=function(){function e(n){t(this,e),e.directiveFactory.$inject.forEach(function(t,a){e[t]=n[a],i.set(e[t],n[a])}),this.templateUrl="sanji-cellular-form.tpl.html",this.restrict="EA",this.controller="CellularFormController",this.controllerAs="vm",this.scope={},this.bindToController={tabs:"=data",submitCallback:"&onSubmit"}}return a(e,null,[{key:"directiveFactory",value:function(){for(var n=arguments.length,t=Array(n),a=0;n>a;a++)t[a]=arguments[a];return e.instance=new e(t),e.instance}}]),e}();l.directiveFactory.$inject=r,n["default"]=l,e.exports=n["default"]},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(2),s=a(l);t(22);var o=t(10),c=a(o),u=t(12),d=a(u),f=t(11),L=a(f),p=t(13),m=a(p),_=r["default"].module("sanji.cellular.form",[s["default"]]);_.controller("CellularFormContainerController",c["default"]),_.controller("CellularFormController",d["default"]),_.directive("sanjiCellularFormContainer",L["default"].directiveFactory),_.directive("sanjiCellularForm",m["default"].directiveFactory),n["default"]=_=_.name,e.exports=n["default"]},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=[],i=function r(){for(var e=this,n=arguments.length,a=Array(n),i=0;n>i;i++)a[i]=arguments[i];t(this,r),r.$inject.forEach(function(n,t){return e[n]=a[t]})};i.$inject=a,n["default"]=i,e.exports=n["default"]},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=new WeakMap,r=[],l=function(){function e(n){t(this,e),e.directiveFactory.$inject.forEach(function(t,a){e[t]=n[a],i.set(e[t],n[a])}),this.templateUrl="sanji-cellular-signal.tpl.html",this.restrict="EA",this.controller="CellularSignalController",this.controllerAs="vm",this.scope={},this.bindToController={signal:"@"}}return a(e,null,[{key:"directiveFactory",value:function(){for(var n=arguments.length,t=Array(n),a=0;n>a;a++)t[a]=arguments[a];return e.instance=new e(t),e.instance}}]),e}();l.directiveFactory.$inject=r,n["default"]=l,e.exports=n["default"]},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=["$scope","sanjiWindowService","cellularService"],r="sanji-cellular-ui",l=function(){function e(){for(var n=this,a=arguments.length,i=Array(a),l=0;a>l;l++)i[l]=arguments[l];t(this,e),e.$inject.forEach(function(e,t){return n[e]=i[t]}),this.sanjiWindowMgr=this.sanjiWindowService.get(r),this.data=this.cellularService.data,this.activate(),this.$scope.$on("sj:window:refresh",this.onRefresh.bind(this))}return a(e,[{key:"activate",value:function(){var e=this;this.sanjiWindowMgr.promise=this.cellularService.get().then(function(){e.data=e.cellularService.data})}},{key:"onRefresh",value:function(e,n){n.id===r&&this.activate()}}]),e}();l.$inject=i,n["default"]=l,e.exports=n["default"]},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=new WeakMap,r=[],l=function(){function e(n){t(this,e),e.directiveFactory.$inject.forEach(function(t,a){e[t]=n[a],i.set(e[t],n[a])}),this.restrict="EA",this.controller="CellularInfoContainerController",this.controllerAs="vm",this.scope={},this.bindToController=!0,this.template='<sanji-cellular-info data="vm.data"></sanji-cellular-info>'}return a(e,null,[{key:"directiveFactory",value:function(){for(var n=arguments.length,t=Array(n),a=0;n>a;a++)t[a]=arguments[a];return e.instance=new e(t),e.instance}}]),e}();l.directiveFactory.$inject=r,n["default"]=l,e.exports=n["default"]},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=[],r=function(){function e(){for(var n=this,a=arguments.length,i=Array(a),r=0;a>r;r++)i[r]=arguments[r];t(this,e),e.$inject.forEach(function(e,t){return n[e]=i[t]})}return a(e,[{key:"save",value:function(e){this.submitCallback({data:e})}}]),e}();r.$inject=i,n["default"]=r,e.exports=n["default"]},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=new WeakMap,r=[],l=function(){function e(n){t(this,e),e.directiveFactory.$inject.forEach(function(t,a){e[t]=n[a],i.set(e[t],n[a])}),this.templateUrl="sanji-cellular-info.tpl.html",this.restrict="EA",this.controller="CellularInfoController",this.controllerAs="vm",this.scope={},this.bindToController={tabs:"=data"}}return a(e,null,[{key:"directiveFactory",value:function(){for(var n=arguments.length,t=Array(n),a=0;n>a;a++)t[a]=arguments[a];return e.instance=new e(t),e.instance}}]),e}();l.directiveFactory.$inject=r,n["default"]=l,e.exports=n["default"]},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(2),s=a(l);t(23),t(3);var o=t(15),c=a(o),u=t(16),d=a(u);t(24);var f=t(17),L=a(f),p=t(19),m=a(p),_=t(18),v=a(_),E=t(20),b=a(E),A=r["default"].module("sanji.cellular.info",[s["default"]]);A.controller("CellularInfoContainerController",L["default"]),A.controller("CellularInfoController",m["default"]),A.controller("CellularSignalController",c["default"]),A.directive("sanjiCellularInfoContainer",v["default"].directiveFactory),A.directive("sanjiCellularInfo",b["default"].directiveFactory),A.directive("cellularSignal",d["default"].directiveFactory),n["default"]=A=A.name,e.exports=n["default"]},function(e,n){var t,a=window.angular;try{t=a.module(["ng"])}catch(i){t=a.module("ng",[])}var r='<div ng-if="0 === vm.tabs.length" layout="column" layout-align="center center">\n    <div flex>\n      <ng-md-icon icon="portable_wifi_off" size="100" style="width: 100px; height: 100px;"></ng-md-icon>\n    </div>\n    <md-subheader class="md-warn">\n      <span translate="CELLULAR_INFO_NO_MODULE_MSG"></span>\n    </md-subheader>\n  </div>\n  <md-tabs ng-if="0 < vm.tabs.length" md-dynamic-height md-border-bottom>\n    <md-tab ng-repeat="tab in vm.tabs track by $index"\n    label="{{::tab.content.name}}">\n      <form ng-submit="vm.save(tab)"\n        role="form" layout="column" layout-padding novalidate>\n          <formly-form model="tab.content"\n          options="tab.formOptions" fields="tab.fields" form="tab.form">\n            <div layout layout-align="end center">\n              <md-button type="submit" class="md-raised md-primary"\n              aria-label="sumit"\n              ng-disabled="tab.form.$invalid">\n                <sapn translate="CELLULAR_FORM_SAVE"></span>\n              </md-button>\n            </div>\n          </formly-form>\n      </form>\n    </md-tab>\n  </md-tabs>';t.run(["$templateCache",function(e){e.put("sanji-cellular-form.tpl.html",r)}]),e.exports=r},function(e,n){var t,a=window.angular;try{t=a.module(["ng"])}catch(i){t=a.module("ng",[])}var r='<section class="cellular-signal">\n    <div class="progress-meter">\n      <div class="horizontal-bars">\n        <div class="horizontal-bar"></div>\n        <div class="horizontal-bar"></div>\n        <div class="horizontal-bar"></div>\n        <div class="horizontal-bar"></div>\n        <div class="horizontal-bar"></div>\n      </div>\n      <div class="circle">\n        <div class="circle-text">\n          {{vm.signal}}</br>\n          <span class="circle-text-under">dBm</span>\n        </div>\n      </div>\n      <span class="meter-text" translate="CELLULAR_SIGNAL_CHART_TITLE"></span>\n      <div class="signal-bars">\n        <div class="signal-bar" ng-class="{\'ten-percent\': -125 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'ten-percent-top\': -125 <= vm.signal}"></div>\n        </div>\n        <div class="signal-bar" ng-class="{\'twenty-percent\': -110 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'twenty-percent-top\': -110 <= vm.signal}"></div>\n        </div>\n        <div class="signal-bar" ng-class="{\'thirty-percent\': -110 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'thirty-percent-top\': -110 <= vm.signal}"></div>\n        </div>\n        <div class="signal-bar" ng-class="{\'fifty-percent\': -90 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'fifty-percent-top\': -90 <= vm.signal}"></div>\n        </div>\n        <div class="signal-bar" ng-class="{\'sixty-percent\': -70 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'sixty-percent-top\': -70 <= vm.signal}"></div>\n        </div>\n        <div class="signal-bar" ng-class="{\'eighty-percent\': -70 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'eighty-percent-top\': -70 <= vm.signal}"></div>\n        </div>\n        <div class="signal-bar" ng-class="{\'ninety-percent\': -60 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'ninety-percent-top\': -60 <= vm.signal}"></div>\n        </div>\n        <div class="signal-bar" ng-class="{\'one-hundred-percent\': -60 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'one-hundred-percent-top\': -60 <= vm.signal}"></div>\n        </div>\n      </div>\n    </div>\n\n  </section>';t.run(["$templateCache",function(e){e.put("sanji-cellular-signal.tpl.html",r)}]),e.exports=r},function(e,n){var t,a=window.angular;try{t=a.module(["ng"])}catch(i){t=a.module("ng",[])}var r='<div ng-if="0 === vm.tabs.length" layout="column" layout-align="center center">\n    <div flex>\n      <ng-md-icon icon="portable_wifi_off" size="100" style="width: 100px; height: 100px;"></ng-md-icon>\n    </div>\n    <md-subheader class="md-warn">\n      <span translate="CELLULAR_INFO_NO_MODULE_MSG"></span>\n    </md-subheader>\n  </div>\n  <md-tabs md-dynamic-height md-border-bottom ng-if="0 < vm.tabs.length">\n    <md-tab ng-repeat="tab in vm.tabs track by $index"\n    label="{{::tab.content.name}}">\n      <cellular-signal signal="{{tab.content.signal}}"></cellular-signal>\n      <md-list>\n        <md-subheader class="md-accent">\n          <span translate="CELLULAR_INFO_BASIC"></span>\n        </md-subheader>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_CONNECTION_STATUS"></p>\n          <span ng-bind="tab.content.status"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_OPERATOR"></p>\n          <span ng-bind="tab.content.operatorName"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_APN"></p>\n          <span ng-bind="tab.content.apn"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_MODE"></p>\n          <span ng-bind="tab.content.mode"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_LAC"></p>\n          <span ng-bind="tab.content.lac"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_IMEI"></p>\n          <span ng-bind="tab.content.imei"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_PIN_REMAIN_TIME"></p>\n          <span ng-bind="tab.content.pinRetryRemain"></span>\n        </md-list-item>\n        <md-divider></md-divider>\n        <md-subheader class="md-accent">\n          <span translate="CELLULAR_INFO_NETWORK"></span>\n        </md-subheader>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_IP"></p>\n          <span ng-bind="tab.content.ip"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_NETMASK"></p>\n          <span ng-bind="tab.content.netmask"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_GATEWAY"></p>\n          <span ng-bind="tab.content.gateway"></span>\n        </md-list-item>\n        <md-list-item ng-repeat="dns in tab.content.dns track by $index">\n          <p class="md-body-2">{{\'CELLULAR_INFO_DNS\' | translate}} {{$index + 1}}</p>\n          <span ng-bind="dns || \'\'"></span>\n        </md-list-item>\n        <md-divider></md-divider>\n        <md-subheader class="md-accent">\n          <span translate="CELLULAR_INFO_USAGE"></span>\n        </md-subheader>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_TRANSMIT_USAGE"></p>\n          <span ng-bind="tab.content.usage.txkbyte | kbFmt:0"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_RECEIVE_USAGE"></p>\n          <span ng-bind="tab.content.usage.rxkbyte | kbFmt:0"></span>\n        </md-list-item>\n        <md-divider></md-divider>\n        <md-subheader class="md-accent">\n          <span translate="CELLULAR_INFO_KEEPALIVE"></span>\n        </md-subheader>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_STATUS"></p>\n          <span ng-bind="tab.content.keepalive.enable"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_TARGET_HOST"></p>\n          <span ng-bind="tab.content.keepalive.targetHost"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_PING_INTERVAL"></p>\n          <span ng-bind="tab.content.keepalive.intervalSec"></span>\n          <span translate="CELLULAR_SEC"></span>\n        </md-list-item>\n      </md-list>\n    </md-tab>\n  </md-tabs>';t.run(["$templateCache",function(e){e.put("sanji-cellular-info.tpl.html",r)}]),e.exports=r}])});
//# sourceMappingURL=sanji-cellular-ui.js.map