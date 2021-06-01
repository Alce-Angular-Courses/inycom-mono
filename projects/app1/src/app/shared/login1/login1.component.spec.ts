import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../../services/auth.service';

import { Login1Component } from './login1.component';

fdescribe('Login1Component', () => {
	const storeName = 'Token';
	let component: Login1Component;
	let fixture: ComponentFixture<Login1Component>;
	let service: AuthService;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let spy: any;
	

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [Login1Component],
			providers: [AuthService]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(Login1Component);
		component = fixture.componentInstance;
		service = TestBed.inject(AuthService);
		// 
		localStorage.removeItem(storeName);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should be login if there are token...', () => {
		localStorage.setItem(storeName, 'ryueriwityisre');
		expect(service.isLogin()).toBeTrue();
		fixture.detectChanges();
		expect(component.isLogin).toBeTrue();
	});

	it('should not be login if there are not token...', () => {
		// localStorage.setItem(storeName, 'ryueriwityisre');
		expect(service.isLogin()).toBeFalse();
		fixture.detectChanges();
		expect(component.isLogin).toBeFalse();
	});

	it('should be login if there are token (without service)...', () => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		spy = spyOn(service, 'isLogin').and.returnValue(true);
		fixture.detectChanges();
		expect(component.isLogin).toBeTrue();
		expect(service.isLogin).toHaveBeenCalled();
	});

	it('should not be login if there are not token (without service)...', () => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		spy = spyOn(service, 'isLogin').and.returnValue(false);
		fixture.detectChanges();
		expect(component.isLogin).toBeFalse();
		expect(service.isLogin).toHaveBeenCalled();
	});

});
