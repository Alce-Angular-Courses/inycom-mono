import { Subject, ReplaySubject } from "rxjs";

const sb$ = new Subject()
const rp$ = new ReplaySubject()

rp$.next('Prueba 1')
rp$.next('Prueba 2')
rp$.next('Prueba 3')
rp$.next('Prueba 4')

sb$.next('Prueba 1')
sb$.next('Prueba 2')
sb$.next('Prueba 3')
sb$.next('Prueba 4')

sb$.subscribe( resp => {
    console.log('resp')
})

rp$.subscribe( resp => {
    console.log(resp)
})