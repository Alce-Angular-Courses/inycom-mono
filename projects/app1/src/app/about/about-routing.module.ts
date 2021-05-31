import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
	{ path: '', component: AboutComponent },
	{ path: 'nosotros', component: NosotrosComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AboutRoutingModule { }
