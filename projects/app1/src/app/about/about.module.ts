import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	declarations: [
		AboutComponent,
		NosotrosComponent
	],
	imports: [
		CommonModule,
		NgbModule,
		AboutRoutingModule,
		SharedModule
	]
})
export class AboutModule { }
