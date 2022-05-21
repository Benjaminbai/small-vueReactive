import Dep from "./Dep"
import observe from "./observe"

export default function defineReactive(obj, key, val) {
    const dep = new Dep()
    if (arguments.length == 2) {
        val = obj[key]
    }
    let childOb = observe(val)
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log('访问', key)
            
            if (Dep.target) {
                console.log(333)
                dep.depend()
                if (childOb) {
                    childOb.dep.depend()
                }
            }
            return val
        },
        set(newVal) {
            console.log('赋值', key, newVal)
            if (val === newVal) return
            val = newVal
            childOb = observe(newVal)
            dep.notify()
        }
    })
}