import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile.component';

const routes: Routes = [
  { path: '', component: MobileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // use forChild here
  exports: [RouterModule]
})
export class MobileRoutingModule { }
