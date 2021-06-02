import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';

import { LibrosService } from './libros.service';

describe('LibrosService', () => {
	let service: LibrosService;
	let httpMock: HttpTestingController;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [LibrosService]
		});
	});

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(LibrosService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpMock.verify();
	});


	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('returned Observable should match the right data', () => {
		const mockUsers = [
			{
				name: 'Pepe Perez',
				email: 'pepe@sample.com'
			},
			{
				name: 'Elena Martín',
				email: 'elena@chess.com'
			}
		];
		const clave = 'ranas';
		service.getGoogleRx(clave)
			.subscribe((usersData: any) => {
				expect(usersData[0].name).toEqual('Pepe Perez');
				expect(usersData[0].email).toEqual(
					'pepe@sample.com'
				);

				expect(usersData[1].name).toEqual('Elena Martín');
				expect(usersData[1].email).toEqual(
					'elena@chess.com'
				);
			});

		const req = httpMock.expectOne(
			environment.urlGoogle+clave
		);
		expect(req.request.method).toEqual('GET');
		req.flush(mockUsers);
	});
});
