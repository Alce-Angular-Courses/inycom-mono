import { TestBed } from '@angular/core/testing';

import { Auxlib1Service } from './auxlib1.service';

describe('Auxlib1Service', () => {
	let service: Auxlib1Service;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(Auxlib1Service);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
