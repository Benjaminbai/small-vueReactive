import { def } from "./util"

const arrayPrototyppe = Array.prototype
export const arrayMethods = Object.create(arrayPrototyppe)

const methodsNeedChange = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse',
]

methodsNeedChange.forEach(v => {
    const original = arrayPrototyppe[v]
    def(arrayMethods, v, function () {
        const ob = this.__ob__
        let inserted = []
        switch (v) {
            case 'push':
            case 'unshift':
                inserted = arguments
                break;
            case 'splice':
                inserted = [...arguments].slice(2)
                break;

            default:
                break;
        }
        if (inserted) {
            ob.observeArray(inserted)
        }
        ob.dep.notify()
        const result = original.apply(this, arguments)
        return result
    }, false)
})