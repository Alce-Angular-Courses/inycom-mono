import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auxlib1Component } from './auxlib1.component';

describe('Auxlib1Component', () => {
	let component: Auxlib1Component;
	let fixture: ComponentFixture<Auxlib1Component>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ Auxlib1Component ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(Auxlib1Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
