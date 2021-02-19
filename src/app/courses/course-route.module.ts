
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PythonComponent } from './python/python.component';
import { PyIntro } from './python/python.component';
import { PyDatatypes } from './python/python.component';
import { dstring } from './python/python.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { jsintro } from './javascript/javascript.component';
import { jsdom } from './javascript/javascript.component';
import { domexample } from './javascript/javascript.component';

const routes: Routes = [
	{path:'', redirectTo:'/python/syllabus', pathMatch:'full' },
	{ path:'python', component:PythonComponent,
	  children:[
	  { path:"syllabus", component: PyIntro },
	  { path:"datastructure", 
	  	children:[
	  	{path:"overview", component: PyDatatypes},
	  	{path:"string", component: dstring},
	  	]
	   }]
	 },
	{ path: 'javascript', component: JavascriptComponent,
		children:[
		{ path: 'introduction', component:jsintro},
		{path: 'dom', component: jsdom},
		{ path: 'domexample', component: domexample}
		]
	 }

	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
