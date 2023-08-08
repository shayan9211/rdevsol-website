import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenBankingHeroComponent } from './open-banking-hero/open-banking-hero.component';
import { OpenBankingMainComponent } from './open-banking-main/open-banking-main.component';
import { OpenBankingComponent } from './open-banking.component';
import { OpenBankingRoutingModule } from './open-banking-routing.module';
import { HeaderModule } from '../../home/header/header.module';
import { FooterModule } from '../../home/footer/footer.module';
import { HeroModule } from '../../home/hero/hero.module';

@NgModule({
  declarations: [
    OpenBankingHeroComponent,
    OpenBankingMainComponent,
    OpenBankingComponent,
  ],
  imports: [
    CommonModule,
    OpenBankingRoutingModule,
    HeaderModule,
    FooterModule,
    HeroModule,
  ],
  exports: [
    OpenBankingComponent
  ],
})
export class OpenBankingModule { }

