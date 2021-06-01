import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresRefComponent } from './autores-ref/autores-ref.component';
// import { AutoresComponent } from './autores.component';

const routes: Routes = [
	{ path: '', component: AutoresRefComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AutoresRoutingModule { }
