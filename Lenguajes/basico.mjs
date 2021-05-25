import {Observable } from "rxjs";

const obs1$ = new Observable( observer =>{

    observer.next('Prueba 1')
    observer.next('Prueba 2')
    observer.next('Prueba 3')
    // observer.error( new Error('Prueba de error'))
    setTimeout(
        () => {
            observer.next('Prueba 4')
            observer.next('Prueba 5')
            observer.next('Prueba 6')
            observer.complete()
        }, 0)
})

obs1$.subscribe(resp => {
    console.log(resp)
}, error => {
    console.log('Error', error.message)
},() => {
    console.log('Emision terminada')
} )

console.log('Código síncrono')