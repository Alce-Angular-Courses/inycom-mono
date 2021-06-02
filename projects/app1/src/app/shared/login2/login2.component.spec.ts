import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';

import { Login2Component } from './login2.component';

describe('Login2Component', () => {
	const storeName = 'Token';
	let component: Login2Component;
	let fixture: ComponentFixture<Login2Component>;
	let service: AuthService;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let spy: any;
	let rendered: any;
	let elButton: DebugElement

	

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [Login2Component],
			providers: [AuthService]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(Login2Component);
		component = fixture.componentInstance;
		service = TestBed.inject(AuthService);
		rendered = fixture.nativeElement;
		elButton = fixture.debugElement.query(By.css('#log-button'));
		// 
		localStorage.removeItem(storeName);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render the button...', () => {
		fixture.detectChanges();
		expect(elButton.nativeElement.textContent).toContain('login');
		
	});
	
	it('should render logout the button when login...', () => {
		spy = spyOn(service, 'isLogin').and.returnValue(true);
		fixture.detectChanges();
		expect(elButton.nativeElement.textContent).toContain('logout');
		
	});
});
