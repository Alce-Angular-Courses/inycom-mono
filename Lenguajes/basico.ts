import {Observable } from 'rxjs';

const obs1: Observable<string> = new Observable( observer =>{
	observer.next('Prueba 1');
	observer.next('Prueba 2');
	observer.next('Prueba 3');
	observer.next('Prueba 4');
	observer.next('Prueba 5');
});

obs1.subscribe(resp => {
	console.log(resp);
});