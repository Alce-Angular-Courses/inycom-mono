import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corelib1Component } from './corelib1.component';

describe('Corelib1Component', () => {
	let component: Corelib1Component;
	let fixture: ComponentFixture<Corelib1Component>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ Corelib1Component ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(Corelib1Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
