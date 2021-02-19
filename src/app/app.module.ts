import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ CoursesModule } from './courses/courses.module';
import { AppnavComponent } from './app.component';
import{ ArticalsModule } from './articals/articals.module';
import { DatabaseModule } from './databases/database.module';


@NgModule({
  declarations: [
    AppComponent,AppnavComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    ArticalsModule,
    AppRoutingModule,
     DatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
