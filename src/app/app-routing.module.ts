import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) },  // lazy load PortfolioModule
  { path: 'cwd', loadChildren: () => import('./services/custom web dev/cwd.module').then(m => m.CWDModule) },
  { path: 'gpt', loadChildren: () => import('./services/gpt/gpt.module').then(m => m.GPTModule) },
  { path: 'ml', loadChildren: () => import('./services/ml/ml.module').then(m => m.MLModule) },
  { path: 'webdev', loadChildren: () => import('./services/web-dev/web-dev.module').then(m => m.WebDevModule) },
  { path: 'spexter', loadChildren: () => import('./case-studies/spexter-web/spexter-web.module').then(m => m.SpexterWebModule) },
  { path: 'open-banking', loadChildren: () => import('./case-studies/open-banking/open-banking.module').then(m => m.OpenBankingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // use forRoot here
  exports: [RouterModule]
})
export class AppRoutingModule { }