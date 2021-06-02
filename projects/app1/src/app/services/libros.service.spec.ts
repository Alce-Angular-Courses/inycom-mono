import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { LibrosService } from './libros.service';

describe('LibrosService', () => {
	let service: LibrosService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HttpClientModule]
		});
	});

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(LibrosService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should be array when search "ranas" ', waitForAsync(() => {
		let result: any;
		const clave = 'ranas';
		service.getGoogleRx(clave).subscribe(
			resp => {
				result = resp;
				expect(result).toBeTruthy();
				expect(typeof result).toBe('object');
				expect(Array.isArray(result)).toBeTrue;
			}
		);
	}));
});
