(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{MwLn:function(n,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-password-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputPasswordExample1 {\n    testForm = new FormGroup({\n        testValue: new FormControl('password', Validators.required),\n    });\n}\n"}}]);