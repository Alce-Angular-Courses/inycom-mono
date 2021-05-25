import { of, from, interval } from "rxjs";

const ob1$ = of(1)
const ob2$ = of([1, 6, 7, 4, 8])

ob1$.subscribe(resp  => {
    console.log(resp)
})

ob2$.subscribe(resp  => {
    console.log(resp)
})

const ob3$ = from([1, 6, 7, 4, 8])
ob3$.subscribe(resp  => {
    console.log(resp)
})

const ob4$ = interval(1000)
ob4$.subscribe(resp  => {
    console.log(resp)
})