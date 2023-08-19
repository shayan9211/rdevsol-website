import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: 'AI', loadChildren: () => import('./services/AI/AI.module').then(m => m.AIModule) },
  { path: 'cloud', loadChildren: () => import('./services/cloud/cloud.module').then(m => m.CloudModule) },
  { path: 'consulting', loadChildren: () => import('./services/consulting/consulting.module').then(m => m.ConsultingModule) },
  { path: 'custom', loadChildren: () => import('./services/custom/custom.module').then(m => m.CustomModule) },
  { path: 'marketing', loadChildren: () => import('./services/marketing/marketing.module').then(m => m.MarketingModule) },
  { path: 'mobile', loadChildren: () => import('./services/mobile/mobile.module').then(m => m.MobileModule) },
  { path: 'web3', loadChildren: () => import('./services/web-3/web-3.module').then(m => m.Web3Module) },
  { path: 'webdev', loadChildren: () => import('./services/web-dev/web-dev.module').then(m => m.WebDevModule) },
  { path: 'spexter', loadChildren: () => import('./case-studies/spexter-web/spexter-web.module').then(m => m.SpexterWebModule) },
  { path: 'open-banking', loadChildren: () => import('./case-studies/open-banking/open-banking.module').then(m => m.OpenBankingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // use forRoot here
  exports: [RouterModule]
})
export class AppRoutingModule { }