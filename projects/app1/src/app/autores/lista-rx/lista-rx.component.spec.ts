import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { ListaRxComponent } from './lista-rx.component';

describe('ListaRxComponent', () => {
	let component: ListaRxComponent;
	let fixture: ComponentFixture<ListaRxComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ListaRxComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ListaRxComponent);
		component = fixture.componentInstance;
		component.lista$ = new Observable();
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
