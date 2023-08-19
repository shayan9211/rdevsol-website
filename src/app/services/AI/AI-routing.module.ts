import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AIComponent } from './AI.component';

const routes: Routes = [
  { path: '', component: AIComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // use forChild here
  exports: [RouterModule]
})
export class AIRoutingModule { }
