import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultingComponent } from './consulting.component';

const routes: Routes = [
  { path: '', component: ConsultingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // use forChild here
  exports: [RouterModule]
})
export class ConsultingRoutingModule { }
