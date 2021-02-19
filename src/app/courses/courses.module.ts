import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PythonComponent } from './python/python.component';
import { PyIntro } from './python/python.component';
import { PyDatatypes } from './python/python.component';
import { CourseRoutingModule } from './course-route.module';
import { JavascriptComponent } from './javascript/javascript.component';



@NgModule({
  declarations: [ PythonComponent, PyIntro, PyDatatypes, JavascriptComponent ],
  imports: [
    CommonModule,CourseRoutingModule
  ]
})
export class CoursesModule { }
