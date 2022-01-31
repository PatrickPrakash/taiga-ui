var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{uDUp:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiCopyProcessorModule",(function(){return L}));var a,o,i,c,r=n("An66"),l=n("3kIJ"),s=n("1VvW"),p=n("SVIu"),u=n("D57K"),d=n("FTac"),m=n("n+W0"),f=n("5E2i"),b=n("kZht"),h=((o=function(){function e(t){_classCallCheck(this,e),this.windowRef=t,this.tuiCopyProcessor=f.a}return _createClass(e,[{key:"onCopy",value:function(e){var t,n=this.windowRef.getSelection();n&&(null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",this.tuiCopyProcessor(String(n))))}}]),e}()).\u0275fac=function(e){return new(e||o)(b["\u0275\u0275directiveInject"](d.i))},o.\u0275dir=b["\u0275\u0275defineDirective"]({type:o,selectors:[["","tuiCopyProcessor",""]],hostBindings:function(e,t){1&e&&b["\u0275\u0275listener"]("copy.prevent",(function(e){return t.onCopy(e)}))},inputs:{tuiCopyProcessor:"tuiCopyProcessor"}}),Object(u.b)([Object(m.a)()],o.prototype,"tuiCopyProcessor",void 0),o),g=((a=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=b["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=b["\u0275\u0275defineInjector"]({factory:function(e){return new(e||a)}}),a),C=n("dvRg"),y=n("OZlg"),_=n("e0eB"),v=n("iyc4"),j=n("Qq0t"),O=n("YjIA"),T=((i=function(){function e(t,n){var a=this;_classCallCheck(this,e),this.format=t,this.notificationsService=n,this.value=12345.67,this.processor=function(e){return e.replace(a.format.decimalSeparator,".").replace(new RegExp(a.format.thousandSeparator,"g"),"")}}return _createClass(e,[{key:"onCopy",value:function(e){var t,n;this.notificationsService.show(null!==(n=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text/plain"))&&void 0!==n?n:"").subscribe()}}]),e}()).\u0275fac=function(e){return new(e||i)(b["\u0275\u0275directiveInject"](j.TUI_NUMBER_FORMAT),b["\u0275\u0275directiveInject"](j.TuiNotificationsService))},i.\u0275cmp=b["\u0275\u0275defineComponent"]({type:i,selectors:[["tui-copy-processor-example-1"]],hostBindings:function(e,t){1&e&&b["\u0275\u0275listener"]("copy",(function(e){return t.onCopy(e)}))},decls:2,vars:2,consts:[[3,"tuiCopyProcessor","ngModel","ngModelChange"]],template:function(e,t){1&e&&(b["\u0275\u0275elementStart"](0,"tui-input-number",0),b["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),b["\u0275\u0275text"](1," Copy this\n"),b["\u0275\u0275elementEnd"]()),2&e&&b["\u0275\u0275property"]("tuiCopyProcessor",t.processor)("ngModel",t.value)},directives:[O.a,h,l.NgControlStatus,l.NgModel],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),i),w=n("u8jZ"),S=["header",$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241f37561c7adb608b3f1dd2646ff27670a6a18c7ab0\u241f4194549152426589533:CopyProcessor"])))],x=["pageTab",$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241fff3774138bffaf62a4b812046dfbb9939c42657e\u241f6492831808763156510:Setup"])))];c=$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241fa0aef0f19512c3fb91ea516052bce537ce0f7ece\u241f8034929292308673999:Directive is used to processed text when coping"])));var E,P,M=["heading",$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f45f210b96a2a6e91f52f153a4f8dc30662629f8e\u241f142654590491855672:Usage"])))];function k(e,t){if(1&e&&(b["\u0275\u0275elementStart"](0,"p"),b["\u0275\u0275i18n"](1,c),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](2,"tui-doc-example",3),b["\u0275\u0275i18nAttributes"](3,M),b["\u0275\u0275element"](4,"tui-copy-processor-example-1"),b["\u0275\u0275elementEnd"]()),2&e){var n=b["\u0275\u0275nextContext"]();b["\u0275\u0275advance"](2),b["\u0275\u0275property"]("content",n.example1)}}function I(e,t){if(1&e&&(b["\u0275\u0275elementStart"](0,"ol",4),b["\u0275\u0275elementStart"](1,"li"),b["\u0275\u0275elementStart"](2,"p"),b["\u0275\u0275i18nStart"](3,E),b["\u0275\u0275element"](4,"code"),b["\u0275\u0275i18nEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275element"](5,"tui-doc-code",5),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](6,"li"),b["\u0275\u0275elementStart"](7,"p"),b["\u0275\u0275i18n"](8,P),b["\u0275\u0275elementEnd"](),b["\u0275\u0275element"](9,"tui-doc-code",6),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"]()),2&e){var n=b["\u0275\u0275nextContext"]();b["\u0275\u0275advance"](5),b["\u0275\u0275property"]("code",n.exampleImportModule),b["\u0275\u0275advance"](4),b["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}E=$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241f415953669748407dbf44a8cbc7e8ef893a56fec9\u241f6368157042718938776: Import ",":START_TAG_CODE:TuiCopyProcessorModule",":CLOSE_TAG_CODE: into a module where you want to use our component "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),P=$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"])));var D,A,z=((A=_createClass((function e(){_classCallCheck(this,e),this.example1={TypeScript:n.e(426).then(n.bind(null,"BVtx")),HTML:n.e(425).then(n.bind(null,"Ezi6"))},this.exampleImportModule=n.e(427).then(n.bind(null,"lsht")),this.exampleInsertTemplate=n.e(428).then(n.bind(null,"HgWS"))}))).\u0275fac=function(e){return new(e||A)},A.\u0275cmp=b["\u0275\u0275defineComponent"]({type:A,selectors:[["example-tui-copy-processor"]],decls:5,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],[6,"pageTab"],["id","usage",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(b["\u0275\u0275elementStart"](0,"tui-doc-page",0),b["\u0275\u0275i18nAttributes"](1,S),b["\u0275\u0275template"](2,k,5,1,"ng-template",1),b["\u0275\u0275template"](3,I,10,2,"ng-template",2),b["\u0275\u0275i18nAttributes"](4,x),b["\u0275\u0275elementEnd"]())},directives:[y.a,_.a,v.a,T,w.a],encapsulation:2,changeDetection:0}),A),L=((D=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=b["\u0275\u0275defineNgModule"]({type:D}),D.\u0275inj=b["\u0275\u0275defineInjector"]({factory:function(e){return new(e||D)},imports:[[r.c,l.FormsModule,C.TuiInputNumberModule,g,p.h,s.f.forChild(Object(p.o)(z))]]}),D)}}]);