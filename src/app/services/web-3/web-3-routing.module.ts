import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Web3Component } from './web-3.component';

const routes: Routes = [
  { path: '', component: Web3Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // use forChild here
  exports: [RouterModule]
})
export class Web3RoutingModule { }
