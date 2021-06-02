import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SaludoRxComponent } from './saludo-rx.component';

describe('SaludoRxComponent', () => {
	let component: SaludoRxComponent;
	let fixture: ComponentFixture<SaludoRxComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SaludoRxComponent],
			imports: [ReactiveFormsModule]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SaludoRxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
