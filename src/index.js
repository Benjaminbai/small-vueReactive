const obj = {}

function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log('访问')
            return val
        },
        set(newVal) {
            console.log('赋值')
            if (val === newVal) return
            val = newVal
        }
    })
}

defineReactive(obj, 'a', 10)
obj.a = 66
console.log(11111, obj.a)
console.log(22222, obj)