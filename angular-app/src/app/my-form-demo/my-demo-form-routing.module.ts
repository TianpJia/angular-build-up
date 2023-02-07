import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { MyFormDemoComponent } from './my-form-demo.conponent';

const routes: Routes = [
  { path: '', component: MyFormDemoComponent },
  { path: 'formdemo', component: FormDemoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyDemoFormRoutingModule {}
