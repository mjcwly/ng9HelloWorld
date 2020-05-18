import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HelloComponent],
  imports: [
    CommonModule,
    HelloRoutingModule,
    SharedModule
  ]
})
export class HelloModule { }
