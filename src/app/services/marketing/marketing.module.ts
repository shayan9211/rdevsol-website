import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingComponent } from './marketing.component';
import { MarketingRoutingModule } from './marketing-routing.module';
import { HeaderModule } from '../../home/header/header.module';
import { FooterModule } from '../../home/footer/footer.module';
import { HeroModule } from '../../home/hero/hero.module';
import { MarketingHeroComponent } from './marketing-hero/marketing-hero.component';
import { MarketingMainComponent } from './main/main.component';




@NgModule({
  declarations: [
    MarketingComponent,
    MarketingHeroComponent,
    MarketingMainComponent,
    //PortfolioHeroComponent,
    //DemoComponent
  ],
  imports: [
    CommonModule,
    MarketingRoutingModule,
    HeaderModule,
    FooterModule,
    HeroModule,
  ],
  exports: [
    MarketingComponent
  ],
})
export class MarketingModule { }
