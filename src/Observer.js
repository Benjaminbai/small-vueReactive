import { def } from "./util"
import defineReactive from "./defineReactive"
import { arrayMethods } from "./array"
import observe from "./observe"
import Dep from "./Dep"

export default class Observer {
    constructor(value) {
        this.dep = new Dep()
        def(value, '__ob__', this, false)
        if (Array.isArray(value)) {
            Object.setPrototypeOf(value, arrayMethods)
            this.observeArray(value)
        }
        this.walk(value)
    }

    walk(value) {
        for (const key in value) {
            defineReactive(value, key)
        }
    }

    observeArray(arr) {
        for (let i = 0, l = arr.length; i < l; i++) {
            observe(arr[i])
        }
    }
}