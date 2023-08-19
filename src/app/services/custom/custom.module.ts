import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom.component';
import { CustomRoutingModule } from './custom-routing.module';
import { HeaderModule } from '../../home/header/header.module';
import { FooterModule } from '../../home/footer/footer.module';
import { HeroModule } from '../../home/hero/hero.module';
import { CustomHeroComponent } from './custom-hero/custom-hero.component';
import { CustomMainComponent } from './main/main.component';




@NgModule({
  declarations: [
    CustomComponent,
    CustomHeroComponent,
    CustomMainComponent,
    //PortfolioHeroComponent,
    //DemoComponent
  ],
  imports: [
    CommonModule,
    CustomRoutingModule,
    HeaderModule,
    FooterModule,
    HeroModule,
  ],
  exports: [
    CustomComponent
  ],
})
export class CustomModule { }
