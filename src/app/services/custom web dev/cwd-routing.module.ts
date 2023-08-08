import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CWDComponent } from './cwd.component';

const routes: Routes = [
  { path: '', component: CWDComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // use forChild here
  exports: [RouterModule]
})
export class CWDRoutingModule { }
