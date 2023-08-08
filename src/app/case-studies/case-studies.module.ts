import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudiesComponent } from './case-studies.component';
import { SpexterWebComponent } from './spexter-web/spexter-web.component';
import { BettercloudComponent } from './bettercloud/bettercloud.component';
import { OpenBankingComponent } from './open-banking/open-banking.component';
import { AspirityTechComponent } from './aspirity-tech/aspirity-tech.component';
import { OpenBankingHeroComponent } from './open-banking/open-banking-hero/open-banking-hero.component';
import { OpenBankingMainComponent } from './open-banking/open-banking-main/open-banking-main.component';



@NgModule({
  declarations: [
    CaseStudiesComponent,
    SpexterWebComponent,
    BettercloudComponent,
    OpenBankingComponent,
    AspirityTechComponent,
    OpenBankingHeroComponent,
    OpenBankingMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CaseStudiesModule { }
