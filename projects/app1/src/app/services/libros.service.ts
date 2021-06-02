import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Libro } from '../models/libro';
import { LIBROS } from '../models/libros.data';

@Injectable({
	providedIn: 'root'
})
export class LibrosService {
	urlBase: string;
	constructor(private http: HttpClient) {
		this.urlBase = environment.urlGoogle;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	getMock(clave: string): Array<Libro> {
		return LIBROS;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	getMockAsync(clave: string): Promise<Array<Libro>> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(LIBROS);
			}, 1000);
		});
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	getMockRx(clave: string): Observable<Array<Libro>> {
		return new Observable(subscribe => {
			setTimeout(() => {
				subscribe.next(LIBROS);
			}, 1000);
		});

	}

	getGoogle(clave: string): Promise<Array<Libro>> {
		return this.http.get(this.urlBase + clave)
			.toPromise().then(
				(resp: any) => {
					console.log(resp);
					return resp.items.map(
						(item: any) => {
							return {
								id: item.id,
								titulo: item.volumeInfo.title,
								autor: item.volumeInfo.authors,
								fecha: item.volumeInfo.publishedDate
							};
						}
					); // fin del Array.map
				} // fin de la función onfulfilled
			);
	}

	getGoogleRx(clave: string): Observable<Array<Libro>> {
		return this.http.get(this.urlBase + clave)
			.pipe(
				catchError((error) => {
					let errorMessage
					if (error instanceof ErrorEvent) {
						// client-side error
						errorMessage = `Client-side error: ${error.error.message}`;
					} else {
						// backend error
						errorMessage = `Server-side error: ${error.status} ${error.message}`;
					}
					console.log('Error', error);
					return throwError(errorMessage);
				})

			)
			.pipe(
				map((resp: any) => {
					return resp.items.map(
						(item: any) => {
							return {
								id: item.id,
								titulo: item.volumeInfo.title,
								autor: item.volumeInfo.authors,
								fecha: item.volumeInfo.publishedDate
							};
						}
					); // fin del Array.map
				}) // fin del operador map
			); // fin del pipe
	}
}
