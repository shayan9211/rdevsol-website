import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile.component';
import { MobileRoutingModule } from './mobile-routing.module';
import { HeaderModule } from '../../home/header/header.module';
import { FooterModule } from '../../home/footer/footer.module';
import { HeroModule } from '../../home/hero/hero.module';
import { MobileHeroComponent } from './mobile-hero/mobile-hero.component';
import { MobileMainComponent } from './main/main.component';




@NgModule({
  declarations: [
    MobileComponent,
    MobileHeroComponent,
    MobileMainComponent,
    //PortfolioHeroComponent,
    //DemoComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    HeaderModule,
    FooterModule,
    HeroModule,
  ],
  exports: [
    MobileComponent
  ],
})
export class MobileModule { }
