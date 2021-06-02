import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Corelib1Module, LayoutModule } from 'corelib1';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		NgbModule,
		FontAwesomeModule,
		Corelib1Module,
		LayoutModule,
		SharedModule
	],
	providers: [
		// {provide: AuthService, useClass: AuthService },
		// AuthService
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
