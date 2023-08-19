import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './custom.component';

const routes: Routes = [
  { path: '', component: CustomComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // use forChild here
  exports: [RouterModule]
})
export class CustomRoutingModule { }
