import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketingComponent } from './marketing.component';

const routes: Routes = [
  { path: '', component: MarketingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // use forChild here
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
