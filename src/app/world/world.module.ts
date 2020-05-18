import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WorldComponent } from './world.component';

@NgModule({
  declarations: [WorldComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WorldModule { }
