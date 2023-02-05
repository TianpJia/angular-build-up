import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { MyFormDemoComponent } from './my-form-demo.conponent';
import { MyDemoFormRoutingModule } from './my-demo-form-routing.module';



@NgModule({
  declarations: [
    FormDemoComponent,
    MyFormDemoComponent
  ],
  imports: [
    CommonModule,
    MyDemoFormRoutingModule
  ],
})
export class MyFormDemoModule { }
