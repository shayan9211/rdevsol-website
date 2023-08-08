import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MLComponent } from './ml.component';

const routes: Routes = [
  { path: '', component: MLComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // use forChild here
  exports: [RouterModule]
})
export class MLRoutingModule { }
