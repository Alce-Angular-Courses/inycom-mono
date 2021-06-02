import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Corelib1Module } from 'corelib1';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				Corelib1Module
			],
			declarations: [
				AppComponent
			],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it('should have as title containinng \'Angular\'', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		fixture.detectChanges();
		expect(app.title).toContain('Angular');
	});

	it('should render title', () => {
		const fixture = TestBed.createComponent(AppComponent);
		//const compiled = fixture.nativeElement;
		// const elTitle = fixture.debugElement.query(By.css('h1'));
		fixture.detectChanges();
		// expect(compiled.querySelector('h1').textContent).toContain('Angular');
		// expect(elTitle.nativeElement.textContent).toContain('Angular');
	});
});
