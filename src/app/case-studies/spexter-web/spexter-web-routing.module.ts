import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpexterWebComponent } from './spexter-web.component';

const routes: Routes = [
  { path: '', component: SpexterWebComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // use forChild here
  exports: [RouterModule]
})
export class SpexterWebRoutingModule { }
