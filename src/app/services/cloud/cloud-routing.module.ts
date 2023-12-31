import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudComponent } from './cloud.component';

const routes: Routes = [
  { path: '', component: CloudComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // use forChild here
  exports: [RouterModule]
})
export class CloudRoutingModule { }
