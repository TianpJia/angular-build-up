import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { MyFormDemoComponent } from './my-form-demo.conponent';
import { MyDemoFormRoutingModule } from './my-demo-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnlessDirective } from '../directive/unless.directive';
import { HighlightDirective } from '../directive/highlight.directive';
import { StarPipe } from '../pipe/star.pipe';

@NgModule({
  declarations: [
    FormDemoComponent,
    MyFormDemoComponent,
    UnlessDirective,
    HighlightDirective,
    StarPipe,
  ],
  imports: [
    CommonModule,
    MyDemoFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [UnlessDirective, HighlightDirective, StarPipe],
})
export class MyFormDemoModule {}
