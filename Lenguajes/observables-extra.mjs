import {BehaviorSubject, Observable, Subject  } from "rxjs";

const obs1$ = new Observable( observer =>{
    observer.next('Prueba 1')
})

const sbj$ = new Subject()
sbj$.subscribe( resp => {
    console.log('S0', resp)
})



sbj$.next('Prueba 1')

sbj$.subscribe( resp => {
    console.log('S2', resp)
})

sbj$.next('Prueba 2')


const bs$ = new BehaviorSubject('BS Prueba 1')
const subscriBs = bs$.subscribe(
    resp => {
        console.log('BS0', resp)
    }
)
bs$.subscribe( resp => {
    console.log('BS1', resp)
})

bs$.next('BS Prueba 2')

bs$.subscribe( resp => {
    console.log('BS2', resp)
})

// subscriBs.unsubscribe()
bs$.next('BS Prueba 3')
