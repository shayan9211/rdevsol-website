// portfolio-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GPTComponent } from './gpt.component';

const routes: Routes = [
  { path: '', component: GPTComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // use forChild here
  exports: [RouterModule]
})
export class GPTRoutingModule { }
