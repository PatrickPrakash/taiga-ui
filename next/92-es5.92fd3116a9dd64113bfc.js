var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{"kCF/":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiProgressBarModule",(function(){return pe}));var r,a,o,s,l=n("An66"),i=n("1VvW"),p=n("SVIu"),c=n("Qq0t"),m=n("dvRg"),d=n("kZht"),u=n("OZlg"),g=n("e0eB"),b=n("iyc4"),f=n("l4xa"),h=n("ROBh"),_=n("8lHc"),y=n("YtkY"),C=n("jIqt"),x=n("rWYE"),v=((r=_createClass((function e(t){_classCallCheck(this,e),this.isCypress=t,this.value$=this.isCypress?Object(h.a)(40):Object(_.a)(300,300).pipe(Object(y.a)((function(e){return e+30})),Object(C.a)(30))}))).\u0275fac=function(e){return new(e||r)(d["\u0275\u0275directiveInject"](f.TUI_IS_CYPRESS))},r.\u0275cmp=d["\u0275\u0275defineComponent"]({type:r,selectors:[["tui-progress-bar-example-1"]],decls:2,vars:3,consts:[["tuiProgressBar","","max","100",1,"progress",3,"value"]],template:function(e,t){1&e&&(d["\u0275\u0275element"](0,"progress",0),d["\u0275\u0275pipe"](1,"async")),2&e&&d["\u0275\u0275property"]("value",d["\u0275\u0275pipeBind1"](1,1,t.value$))},directives:[x.a],pipes:[l.b],styles:[".progress[_ngcontent-%COMP%]{width:50%}@media screen and (max-width:37.4375em){.progress[_ngcontent-%COMP%]{width:100%}}"],changeDetection:0}),r),S=n("Yi+y");a=$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241f2a61988eaf710060bd5d75ad1e0a5265606972c3\u241f1687931846348280306:Single color"]))),o=$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241fe6dd85fa41c4e706701e75af47b3f72f28f97446\u241f2113659569404984523:With fancy color gradient"]))),s=$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f43008f3a850ab513f7270ed97dd1c0a3675bf7fd\u241f3602426005547174478:Multicolor segments"])));var O,P,T=((P=_createClass((function e(t){_classCallCheck(this,e),this.isCypress=t,this.fastValue$=this.isCypress?Object(h.a)(80):Object(_.a)(500,100),this.slowValue$=this.isCypress?Object(h.a)(4):Object(_.a)(500,2e3),this.colors=["var(--tui-support-01)","var(--tui-support-21)","lightskyblue","#3682db","var(--tui-support-22)"]}))).\u0275fac=function(e){return new(e||P)(d["\u0275\u0275directiveInject"](f.TUI_IS_CYPRESS))},P.\u0275cmp=d["\u0275\u0275defineComponent"]({type:P,selectors:[["tui-progress-bar-example-2"]],decls:39,vars:23,consts:[[1,"description"],["tuiProgressBar","","max","100",1,"progress",3,"value"],["tuiProgressBar","","max","100","color","linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))",1,"progress",3,"value"],["tuiProgressBar","","max","100",1,"progress",3,"value","color"],["tuiProgressBar","",1,"progress",3,"value","max","color"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"h6",0),d["\u0275\u0275i18n"](1,a),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275text"](3," Use "),d["\u0275\u0275elementStart"](4,"code"),d["\u0275\u0275text"](5,"<progress />"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](6," 's CSS-property "),d["\u0275\u0275elementStart"](7,"code"),d["\u0275\u0275text"](8,"color"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](9," to set solid color of progress indicator.\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](10,"progress",1),d["\u0275\u0275pipe"](11,"async"),d["\u0275\u0275elementStart"](12,"h6",0),d["\u0275\u0275i18n"](13,o),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"p"),d["\u0275\u0275text"](15," Set component's input property "),d["\u0275\u0275elementStart"](16,"code"),d["\u0275\u0275text"](17,"color"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](18," to get more complex color combinations.\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](19,"progress",2),d["\u0275\u0275pipe"](20,"async"),d["\u0275\u0275elementStart"](21,"h6",0),d["\u0275\u0275i18n"](22,s),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](23,"p"),d["\u0275\u0275text"](24," Set component's input property "),d["\u0275\u0275elementStart"](25,"code"),d["\u0275\u0275text"](26,"color"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](27," via "),d["\u0275\u0275elementStart"](28,"code"),d["\u0275\u0275text"](29,"tuiProgressColorSegmentsAsync"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](30," pipe to to get multicolor segments.\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](31,"progress",3),d["\u0275\u0275pipe"](32,"async"),d["\u0275\u0275pipe"](33,"async"),d["\u0275\u0275pipe"](34,"tuiProgressColorSegmentsAsync"),d["\u0275\u0275element"](35,"progress",4),d["\u0275\u0275pipe"](36,"async"),d["\u0275\u0275pipe"](37,"async"),d["\u0275\u0275pipe"](38,"tuiProgressColorSegmentsAsync")),2&e&&(d["\u0275\u0275advance"](10),d["\u0275\u0275property"]("value",d["\u0275\u0275pipeBind1"](11,7,t.fastValue$)),d["\u0275\u0275advance"](9),d["\u0275\u0275property"]("value",d["\u0275\u0275pipeBind1"](20,9,t.fastValue$)),d["\u0275\u0275advance"](12),d["\u0275\u0275property"]("value",d["\u0275\u0275pipeBind1"](32,11,t.fastValue$))("color",d["\u0275\u0275pipeBind1"](33,13,d["\u0275\u0275pipeBind1"](34,15,t.colors))),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("value",d["\u0275\u0275pipeBind1"](36,17,t.slowValue$))("max",t.colors.length)("color",d["\u0275\u0275pipeBind1"](37,19,d["\u0275\u0275pipeBind1"](38,21,t.colors))))},directives:[x.a],pipes:[l.b,S.a],styles:[".progress[_ngcontent-%COMP%]{width:70%;margin-bottom:1rem;color:var(--tui-support-09)}@media screen and (max-width:37.4375em){.progress[_ngcontent-%COMP%]{width:100%}}.description[_ngcontent-%COMP%]{font:var(--tui-font-heading-6);margin-bottom:1rem}.description[_ngcontent-%COMP%]:first-child{margin-top:0}"],changeDetection:0}),P),E=((O=_createClass((function e(){_classCallCheck(this,e)}))).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=d["\u0275\u0275defineComponent"]({type:O,selectors:[["tui-progress-bar-example-3"]],decls:2,vars:2,consts:[["tuiProgressBar","","max","100","size","s",1,"progress",3,"value"],["tuiProgressBar","","max","100","size","m",1,"progress",3,"value"]],template:function(e,t){1&e&&(d["\u0275\u0275element"](0,"progress",0),d["\u0275\u0275element"](1,"progress",1)),2&e&&(d["\u0275\u0275property"]("value",60),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("value",70))},directives:[x.a],styles:[".progress[_ngcontent-%COMP%]{width:50%;margin-bottom:1rem}@media screen and (max-width:37.4375em){.progress[_ngcontent-%COMP%]{width:100%}}"],changeDetection:0}),O),j=n("B8NW"),w=n("F5EF");function A(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"label",1),d["\u0275\u0275text"](1),d["\u0275\u0275element"](2,"progress",2),d["\u0275\u0275elementEnd"]()),2&e){var n=t.ngIf,r=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",n,"% "),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("max",r.max)("value",n)}}var L,I,V,B,z=((I=_createClass((function e(t){var n=this;_classCallCheck(this,e),this.isCypress=t,this.max=100,this.value$=this.isCypress?Object(h.a)(30):Object(_.a)(300,300).pipe(Object(y.a)((function(e){return e+30})),Object(C.a)(30),Object(j.a)((function(e){return e<=n.max})))}))).\u0275fac=function(e){return new(e||I)(d["\u0275\u0275directiveInject"](f.TUI_IS_CYPRESS))},I.\u0275cmp=d["\u0275\u0275defineComponent"]({type:I,selectors:[["tui-progress-bar-example-4"]],decls:2,vars:3,consts:[["tuiProgressLabel","","class","label-wrapper",4,"ngIf"],["tuiProgressLabel","",1,"label-wrapper"],["tuiProgressBar","",3,"max","value"]],template:function(e,t){1&e&&(d["\u0275\u0275template"](0,A,3,3,"label",0),d["\u0275\u0275pipe"](1,"async")),2&e&&d["\u0275\u0275property"]("ngIf",d["\u0275\u0275pipeBind1"](1,1,t.value$))},directives:[l.t,w.a,x.a],pipes:[l.b],styles:[".label-wrapper[_ngcontent-%COMP%]{width:50%}@media screen and (max-width:37.4375em){.label-wrapper[_ngcontent-%COMP%]{width:100%}}"],changeDetection:0}),I),M=((L=_createClass((function e(){_classCallCheck(this,e)}))).\u0275fac=function(e){return new(e||L)},L.\u0275cmp=d["\u0275\u0275defineComponent"]({type:L,selectors:[["tui-progress-bar-example-5"]],decls:3,vars:2,consts:[["tuiProgressLabel","",1,"label-wrapper"],["tuiProgressBar","","max","4","size","s",1,"progress",3,"value"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"label",0),d["\u0275\u0275element"](1,"progress",1),d["\u0275\u0275element"](2,"progress",1),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("value",3),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("value",1))},directives:[w.a,x.a],styles:[".label-wrapper[_ngcontent-%COMP%]{width:50%}@media screen and (max-width:37.4375em){.label-wrapper[_ngcontent-%COMP%]{width:100%}}.progress[_ngcontent-%COMP%]:first-child{color:#a3ecb3}.progress[_ngcontent-%COMP%]:nth-child(2){color:#39b54a}"],changeDetection:0}),L),D=n("EPR0"),$=n("yHor"),k=n("zGJC"),R=n("yZWP"),G=n("u8jZ");V=$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f4ed7053c5c74592c268021eeec7e822e85123eef\u241f8624557147577439768:",":START_TAG_DT:",":START_TAG_CODE:tuiProgressBar",":CLOSE_TAG_CODE:",":CLOSE_TAG_DT:",":START_TAG_DD: \u2013 attribute component for native html tag ",":START_TAG_CODE:<progress />",":CLOSE_TAG_CODE: . ",":CLOSE_TAG_DD:"])),"\ufffd#2\ufffd","[\ufffd#3\ufffd|\ufffd#5\ufffd]","[\ufffd/#3\ufffd|\ufffd/#5\ufffd]","\ufffd/#2\ufffd","\ufffd#4\ufffd","[\ufffd#3\ufffd|\ufffd#5\ufffd]","[\ufffd/#3\ufffd|\ufffd/#5\ufffd]","\ufffd/#4\ufffd"),V=d["\u0275\u0275i18nPostprocess"](V),B=$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241fb784543b96a299f4a0139f02b8b5ff2b12060f7e\u241f2417828173686359493:",":START_TAG_STRONG:Usage:",":CLOSE_TAG_STRONG:",':START_TAG_CODE: <progress tuiProgressBar value="40" max="100"></progress> ',":CLOSE_TAG_CODE: . "])),"\ufffd#8\ufffd","\ufffd/#8\ufffd","\ufffd#9\ufffd","\ufffd/#9\ufffd");var U,N,W,Y,H,K,Z=["heading",$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"])))],F=["heading",$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241fd7a340fb882e7e5f76d0949bbfa10811361d7e93\u241f1598512795966065598:Multicolor"])))],J=["heading",$localize(_templateObject8||(_templateObject8=_taggedTemplateLiteral([":\u241f287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8\u241f2165905371258601036:Sizes"])))],q=["heading",$localize(_templateObject9||(_templateObject9=_taggedTemplateLiteral([":\u241f43cf922b4e2e453f2fcd8e43be9fd18e96f9b74c\u241f8720306042838547123:With label"])))],Q=["heading",$localize(_templateObject10||(_templateObject10=_taggedTemplateLiteral([":\u241fdd4002bde6f74a0a30ec223b660ed5d4458c127d\u241f1765388942323233214:Stacked progress bars"])))];function X(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"dl"),d["\u0275\u0275i18nStart"](1,V),d["\u0275\u0275elementStart"](2,"dt"),d["\u0275\u0275element"](3,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"dd"),d["\u0275\u0275element"](5,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"p"),d["\u0275\u0275i18nStart"](7,B),d["\u0275\u0275element"](8,"strong"),d["\u0275\u0275element"](9,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"tui-doc-example",2),d["\u0275\u0275i18nAttributes"](11,Z),d["\u0275\u0275element"](12,"tui-progress-bar-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](14,F),d["\u0275\u0275element"](15,"tui-progress-bar-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"tui-doc-example",4),d["\u0275\u0275i18nAttributes"](17,J),d["\u0275\u0275element"](18,"tui-progress-bar-example-3"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](19,"tui-doc-example",5),d["\u0275\u0275i18nAttributes"](20,q),d["\u0275\u0275element"](21,"tui-progress-bar-example-4"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"tui-doc-example",6),d["\u0275\u0275i18nAttributes"](23,Q),d["\u0275\u0275element"](24,"tui-progress-bar-example-5"),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](10),d["\u0275\u0275property"]("content",n.basicExample),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",n.multiColorExample),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",n.sizesExample),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",n.labelExample),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",n.stackedExample)}}function ee(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,U),d["\u0275\u0275element"](1,"a",12),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"]())}function te(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,N),d["\u0275\u0275element"](1,"a",12),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"]())}function ne(e,t){1&e&&d["\u0275\u0275i18n"](0,W)}function re(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,Y),d["\u0275\u0275elementStart"](1,"p"),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275element"](3,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"]())}function ae(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo"),d["\u0275\u0275element"](1,"progress",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-documentation"),d["\u0275\u0275template"](3,ee,3,0,"ng-template",8),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().value=e})),d["\u0275\u0275template"](4,te,3,0,"ng-template",9),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().max=e})),d["\u0275\u0275template"](5,ne,1,0,"ng-template",10),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().size=e})),d["\u0275\u0275template"](6,re,4,0,"ng-template",11),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().color=e})),d["\u0275\u0275elementEnd"]()}if(2&e){var r=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("value",r.value)("max",r.max)("size",r.size)("color",r.color),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValue",r.value),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",r.max),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",r.sizeVariants)("documentationPropertyValue",r.size),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",r.colorVariants)("documentationPropertyValue",r.color)}}function oe(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",13),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,H),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",14),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,K),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",15),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",n.exampleImportModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}U=$localize(_templateObject11||(_templateObject11=_taggedTemplateLiteral([":\u241fba74cd5237673a75a1bbbbfe36cf54bc1fcaff01\u241f4894529704152782945: Native attribute ",":START_LINK: value ",":CLOSE_LINK: of ",":START_TAG_CODE:<progress />",":CLOSE_TAG_CODE:"])),"\ufffd#1\ufffd","\ufffd/#1\ufffd","\ufffd#2\ufffd","\ufffd/#2\ufffd"),N=$localize(_templateObject12||(_templateObject12=_taggedTemplateLiteral([":\u241f1826095affba926e4075210d4d2fe1f0b5281214\u241f5682634365450052698: Native attribute ",":START_LINK: max ",":CLOSE_LINK: of ",":START_TAG_CODE:<progress />",":CLOSE_TAG_CODE:"])),"\ufffd#1\ufffd","\ufffd/#1\ufffd","\ufffd#2\ufffd","\ufffd/#2\ufffd"),W=$localize(_templateObject13||(_templateObject13=_taggedTemplateLiteral([":\u241fd9f4db967c9e78b6e28feafdf3c916002fb067c7\u241f5415347527315359817: Size of the progress element "]))),Y=$localize(_templateObject14||(_templateObject14=_taggedTemplateLiteral([":\u241f7ae65b188c23ffa2ea105cdc7c4e30f3ae314321\u241f2864892605454291497: Color of the progress indicator ",":START_PARAGRAPH: We recommend set solid color via ",":START_TAG_CODE:<progress />",":CLOSE_TAG_CODE: 's CSS-property ",":START_TAG_CODE:color",":CLOSE_TAG_CODE: (especially, if you support old not-chromium based Edge) ",":CLOSE_PARAGRAPH:"])),"\ufffd#1\ufffd","[\ufffd#2\ufffd|\ufffd#3\ufffd]","[\ufffd/#2\ufffd|\ufffd/#3\ufffd]","[\ufffd#2\ufffd|\ufffd#3\ufffd]","[\ufffd/#2\ufffd|\ufffd/#3\ufffd]","\ufffd/#1\ufffd"),Y=d["\u0275\u0275i18nPostprocess"](Y),H=$localize(_templateObject15||(_templateObject15=_taggedTemplateLiteral([":\u241f7bc158fa5ee50dd5e598c2cd6720474e7c814cab\u241f8674861496686918589: Import ",":START_TAG_CODE:TuiProgressModule",":CLOSE_TAG_CODE: into a module where you want to use our attribute component "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),K=$localize(_templateObject16||(_templateObject16=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"])));var se,le,ie=((le=_createClass((function e(){_classCallCheck(this,e),this.value=6,this.max=10,this.sizeVariants=["m","s"],this.size=this.sizeVariants[0],this.colorVariants=["var(--tui-primary)","lightskyblue","#3682db","rgba(74, 201, 155, 1)","linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))"],this.color=this.colorVariants[0],this.basicExample={HTML:'<progress\n    tuiProgressBar\n    max="100"\n    class="progress"\n    [value]="value$ | async"\n></progress>\n',TypeScript:"import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS} from '@taiga-ui/cdk';\nimport {of, timer} from 'rxjs';\nimport {map, startWith} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-progress-bar-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressBarExample1 {\n    readonly value$ = this.isCypress\n        ? of(40)\n        : timer(300, 300).pipe(\n              map(i => i + 30),\n              startWith(30),\n          );\n\n    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}\n}\n",LESS:"@import 'taiga-ui-local';\n\n.progress {\n    width: 50%;\n\n    @media @mobile {\n        width: 100%;\n    }\n}\n"},this.multiColorExample={HTML:'<h6 i18n class="description">Single color</h6>\n<p>\n    Use\n    <code>&lt;progress /&gt;</code>\n    \'s CSS-property\n    <code>color</code>\n    to set solid color of progress indicator.\n</p>\n\n<progress\n    tuiProgressBar\n    max="100"\n    class="progress"\n    [value]="fastValue$ | async"\n></progress>\n\n<h6 i18n class="description">With fancy color gradient</h6>\n<p>\n    Set component\'s input property\n    <code>color</code>\n    to get more complex color combinations.\n</p>\n\n<progress\n    tuiProgressBar\n    max="100"\n    color="linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))"\n    class="progress"\n    [value]="fastValue$ | async"\n></progress>\n\n<h6 i18n class="description">Multicolor segments</h6>\n<p>\n    Set component\'s input property\n    <code>color</code>\n    via\n    <code>tuiProgressColorSegmentsAsync</code>\n    pipe to to get multicolor segments.\n</p>\n\n<progress\n    tuiProgressBar\n    max="100"\n    class="progress"\n    [value]="fastValue$ | async"\n    [color]="colors | tuiProgressColorSegmentsAsync | async"\n></progress>\n\n<progress\n    tuiProgressBar\n    class="progress"\n    [value]="slowValue$ | async"\n    [max]="colors.length"\n    [color]="colors | tuiProgressColorSegmentsAsync | async"\n></progress>\n',TypeScript:"import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS} from '@taiga-ui/cdk';\nimport {of, timer} from 'rxjs';\n\n@Component({\n    selector: 'tui-progress-bar-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressBarExample2 {\n    readonly fastValue$ = this.isCypress ? of(80) : timer(500, 100);\n    readonly slowValue$ = this.isCypress ? of(4) : timer(500, 2000);\n    readonly colors = [\n        'var(--tui-support-01)',\n        'var(--tui-support-21)',\n        'lightskyblue',\n        '#3682db',\n        'var(--tui-support-22)',\n    ];\n\n    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}\n}\n",LESS:"@import 'taiga-ui-local';\n\n.progress {\n    width: 70%;\n    margin-bottom: 1rem;\n    color: var(--tui-support-09);\n\n    @media @mobile {\n        width: 100%;\n    }\n}\n\n.description {\n    font: var(--tui-font-heading-6);\n    margin-bottom: 1rem;\n\n    &:first-child {\n        margin-top: 0;\n    }\n}\n"},this.sizesExample={HTML:'<progress\n    tuiProgressBar\n    max="100"\n    size="s"\n    class="progress"\n    [value]="60"\n></progress>\n\n<progress\n    tuiProgressBar\n    max="100"\n    size="m"\n    class="progress"\n    [value]="70"\n></progress>\n',TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-progress-bar-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressBarExample3 {}\n",LESS:"@import 'taiga-ui-local';\n\n.progress {\n    width: 50%;\n    margin-bottom: 1rem;\n\n    @media @mobile {\n        width: 100%;\n    }\n}\n"},this.labelExample={HTML:'<label *ngIf="value$ | async as value" tuiProgressLabel class="label-wrapper">\n    {{value}}%\n    <progress tuiProgressBar [max]="max" [value]="value"></progress>\n</label>\n',TypeScript:"import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS} from '@taiga-ui/cdk';\nimport {of, timer} from 'rxjs';\nimport {map, startWith, takeWhile} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-progress-bar-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressBarExample4 {\n    readonly max = 100;\n    readonly value$ = this.isCypress\n        ? of(30)\n        : timer(300, 300).pipe(\n              map(i => i + 30),\n              startWith(30),\n              takeWhile(value => value <= this.max),\n          );\n\n    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}\n}\n",LESS:"@import 'taiga-ui-local';\n\n.label-wrapper {\n    width: 50%;\n\n    @media @mobile {\n        width: 100%;\n    }\n}\n"},this.stackedExample={HTML:'<label tuiProgressLabel class="label-wrapper">\n    <progress\n        tuiProgressBar\n        max="4"\n        size="s"\n        class="progress"\n        [value]="3"\n    ></progress>\n\n    <progress\n        tuiProgressBar\n        max="4"\n        size="s"\n        class="progress"\n        [value]="1"\n    ></progress>\n</label>\n',TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-progress-bar-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressBarExample5 {}\n",LESS:"@import 'taiga-ui-local';\n\n.label-wrapper {\n    width: 50%;\n\n    @media @mobile {\n        width: 100%;\n    }\n}\n\n.progress {\n    &:nth-child(1) {\n        color: #a3ecb3;\n    }\n    &:nth-child(2) {\n        color: #39b54a;\n    }\n}\n"},this.exampleImportModule="import {TuiProgressModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiProgressModule\n    ],\n...\n",this.exampleInsertTemplate='<progress\n    tuiProgressBar\n    value="40"\n    max="100"\n></progress>\n'}))).\u0275fac=function(e){return new(e||le)},le.\u0275cmp=d["\u0275\u0275defineComponent"]({type:le,selectors:[["example-tui-progress-bar"]],decls:4,vars:0,consts:[["header","ProgressBar","package","KIT","path","kit/components/progress/progress-bar"],["pageTab",""],["id","basic",3,"content",6,"heading"],["id","multicolor",3,"content",6,"heading"],["id","sizes",3,"content",6,"heading"],["id","label",3,"content",6,"heading"],["id","stacked",3,"content",6,"heading"],["tuiProgressBar","",1,"api-progress",3,"value","max","size","color"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","color","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#attributes","target","_blank"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,X,25,5,"ng-template",1),d["\u0275\u0275template"](2,ae,7,10,"ng-template",1),d["\u0275\u0275template"](3,oe,10,2,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[u.a,g.a,b.a,v,T,E,z,M,D.a,x.a,$.a,k.a,R.a,G.a],styles:[".api-progress[_ngcontent-%COMP%]{width:50%}@media screen and (max-width:37.4375em){.api-progress[_ngcontent-%COMP%]{width:100%}}dd[_ngcontent-%COMP%], dt[_ngcontent-%COMP%]{display:inline;margin:0}"],changeDetection:0}),le),pe=((se=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=d["\u0275\u0275defineNgModule"]({type:se}),se.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||se)},imports:[[l.c,p.h,m.TuiProgressModule,c.TuiLinkModule,i.f.forChild(Object(p.o)(ie))]]}),se)}}]);