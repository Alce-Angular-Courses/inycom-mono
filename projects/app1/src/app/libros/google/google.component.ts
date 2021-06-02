import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Component({
	selector: 'iny-google',
	templateUrl: './google.component.html',
	styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {
	urlBase!: string;
	clave!: string
	message!: string
	libros!: Array<Libro>
	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.message = 'De que quieres buscar los libros?';
		this.libros = [];
		this.urlBase = environment.urlGooleSimple;
	
	}

	onClickBuscar(): void {
		if (!this.clave) {
			return;
		}
		this.libros = [];
		const params: HttpParams = new HttpParams().append('q','intitle:'+ this.clave );

		// const headers: HttpHeaders = new HttpHeaders({'x-token': 'yiuer7632o4yei'});
		const headers: HttpHeaders = new HttpHeaders({'sec-fetch-dest': 'full'});
		this.http.get(this.urlBase, {params, headers} ).toPromise().then(
			(resp: any) => {
				console.log(resp);
				this.libros = resp.items.map(
					(item: any) => {
						return {
							id: item.id,
							titulo: item.volumeInfo.title,
							autor: item.volumeInfo.authors,
							fecha: item.volumeInfo.publishedDate
						};
					}
				); // fin del Array.map
			}, // fin de la función onfulfilled
			
		).catch((error: any) => {
			console.log(error.message);
		});

		this.clave = '';
	}

	onClickBuscarRx() {
		if (!this.clave) {
			return;
		}
		this.libros = [];
		this.http.get(this.urlBase + this.clave)
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
			).subscribe(
				(resp: Array<Libro>) => this.libros = resp,
				(error: any) => console.log(error.message)
			);

		this.clave = '';
	}

}
