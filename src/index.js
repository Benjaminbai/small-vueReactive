
import observe from "./observe"
import Watcher from "./Watcher"

const obj = {
    a: {
        m: {
            n: 10
        }
    },
    b: 10,
    g: [11, 22, 33, 44]
}



observe(obj)
new Watcher(obj, 'a.m.n', (val) => {
    console.log('********', val)
})
obj.a.m.n = 99


