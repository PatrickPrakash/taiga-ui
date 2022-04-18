(window.webpackJsonp=window.webpackJsonp||[]).push([[916],{"9gXe":function(n,t,e){"use strict";e.r(t),t.default="import {Component} from '@angular/core';\nimport {ValidatorFn} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {defaultSort, TuiComparator} from '@taiga-ui/addon-table';\nimport {TuiDay} from '@taiga-ui/cdk';\n\ninterface Item {\n    readonly name: string;\n    readonly price: number;\n    readonly quantity: number;\n    readonly unit: string;\n    readonly date: TuiDay;\n}\n\n@Component({\n    selector: 'tui-table-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTableExample3 {\n    readonly options = {updateOn: 'blur'} as const;\n\n    readonly units = ['items', 'kg', 'm'];\n\n    pythons: readonly Item[] = [\n        {\n            name: 'Holy Grail',\n            price: 999999,\n            quantity: 1,\n            unit: this.units[0],\n            date: TuiDay.currentLocal(),\n        },\n        {\n            name: 'Foot',\n            price: 29.95,\n            quantity: 5,\n            unit: this.units[2],\n            date: TuiDay.currentLocal().append({day: -42}),\n        },\n        {\n            name: 'Shed',\n            price: 499,\n            quantity: 2,\n            unit: this.units[0],\n            date: TuiDay.currentLocal().append({day: -237}),\n        },\n    ];\n\n    starwars: readonly Item[] = [\n        {\n            name: 'Lightsaber',\n            price: 4999,\n            quantity: 3,\n            unit: this.units[0],\n            date: TuiDay.currentLocal(),\n        },\n        {\n            name: 'Spaceship',\n            price: 19999,\n            quantity: 1,\n            unit: this.units[0],\n            date: TuiDay.currentLocal().append({day: -237}),\n        },\n        {\n            name: 'Stormtrooper helmet',\n            price: 14.95,\n            quantity: 5,\n            unit: this.units[0],\n            date: TuiDay.currentLocal().append({day: -42}),\n        },\n    ];\n\n    readonly columns = ['name', 'price', 'quantity', 'unit', 'total'] as const;\n\n    readonly minPrice: ValidatorFn = ({value}) =>\n        value > 400 ? null : {minPrice: 'Price must be above $400'};\n\n    readonly totalSorter: TuiComparator<Item> = (a, b) =>\n        defaultSort(a.price * a.quantity, b.price * b.quantity);\n\n    getTotal({price, quantity}: Item): number {\n        return price * quantity;\n    }\n\n    onValueChange<K extends keyof Item>(\n        value: Item[K],\n        key: K,\n        current: Item,\n        data: readonly Item[],\n    ) {\n        const updated = {...current, [key]: value};\n\n        this.pythons =\n            data === this.pythons\n                ? this.pythons.map(item => (item === current ? updated : item))\n                : this.pythons;\n\n        this.starwars =\n            data === this.starwars\n                ? this.starwars.map(item => (item === current ? updated : item))\n                : this.starwars;\n    }\n}\n"}}]);