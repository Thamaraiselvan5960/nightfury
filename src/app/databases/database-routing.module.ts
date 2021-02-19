import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseComponent } from './database.component';
import { dbintroduction } from './database.component';

const routes: Routes = [
	{ path:'database', component: DatabaseComponent, 
		children:[
			{path:'dbintro', component: dbintroduction }
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseRoutingModule { }
