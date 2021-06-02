import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	constructor() {
		//
	}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler): Observable<HttpEvent<unknown>> {
		console.log('Paso por Token Internceptor');

		//const headers = new HttpHeaders({ 'x-token': 'interceptor-sfdhf4839jslfd4uiu0' });
		//const requestClone = request.clone({ headers });

		return next.handle(request).pipe(
			catchError(error => {
				let errorMessage = '';
				if (error instanceof ErrorEvent) {
					// client-side error
					errorMessage = `[Interceptor] Client-side error: ${error.error.message}`;
				} else {
					// backend error
					errorMessage = `[Interceptor] Server-side error: ${error.status} ${error.message}`;
				}
				// aquí podrías agregar código que muestre el error en alguna parte fija de la pantalla.
				// this.errorService.show(errorMessage);
				console.log('En el servicio', errorMessage);
				return throwError(errorMessage);
			})
		);
	}
}
