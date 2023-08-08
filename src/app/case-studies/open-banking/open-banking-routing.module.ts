import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenBankingComponent } from './open-banking.component';

const routes: Routes = [
  { path: '', component: OpenBankingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // use forChild here
  exports: [RouterModule]
})
export class OpenBankingRoutingModule { }
