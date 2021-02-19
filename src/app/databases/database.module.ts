import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseComponent } from'./database.component';
import { DatabaseRoutingModule } from './database-routing.module';


@NgModule({
  declarations: [DatabaseComponent],
  imports: [
    CommonModule,
    DatabaseRoutingModule
  ]
})
export class DatabaseModule { }
