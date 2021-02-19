import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticalsRoutingModule } from './articals-routing.module';
import { ArticalsComponent } from './articals.component';


@NgModule({
  declarations: [ArticalsComponent],
  imports: [
    CommonModule,
    ArticalsRoutingModule
  ]
})
export class ArticalsModule { }
