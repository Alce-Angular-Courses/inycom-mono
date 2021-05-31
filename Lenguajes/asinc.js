let x = 12
let y = 23
console.log(x + y)

setTimeout( () => {
    console.log('Asincronia')
}, 1000)


let element = 0
for (let i = 0; i < 2000; i++) {
    element += i
    console.log(element)
}


// estrategia onPush
const obj = {algo : 10}
const data = []
obj.algo = 12
//  disparo evento

// estrategia onPush
let obj2 = {algo : 10}
obj2 = {...obj2}
obj2.algo = 12
// disparo de evento