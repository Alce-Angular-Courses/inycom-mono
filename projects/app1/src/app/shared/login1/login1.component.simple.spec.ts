import { AuthService } from '../../services/auth.service';

import { Login1Component } from './login1.component';

describe('Login1Component', () => {
	let component: Login1Component;
	let service: AuthService;
	const storeName = 'Token';
	// let fixture: ComponentFixture<Login1Component>;

	/* beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [Login1Component]
		})
			.compileComponents();
	}); */
 
	beforeEach(() => {
		service = new AuthService(); 
		component = new Login1Component(service);
		// fixture = TestBed.createComponent(Login1Component);
		// component = fixture.componentInstance;
		// fixture.detectChanges();
		localStorage.removeItem(storeName);
	}); 

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should the service be login if there are token...', () => {
		localStorage.setItem(storeName, 'ryueriwityisre');
		expect(service.isLogin()).toBeTrue();
		// expect(component.isLogin).toBeFalse();
	});


	it('should the service not be login if there are not token...', () => {
		// localStorage.setItem(storeName, 'ryueriwityisre');
		expect(service.isLogin()).toBeFalse();
		// expect(component.isLogin).toBeTrue();
	});



});
