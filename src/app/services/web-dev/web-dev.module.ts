import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebDevComponent } from './web-dev.component';
import { WebDevRoutingModule } from './web-dev-routing.module';
import { HeaderModule } from '../../home/header/header.module';
import { FooterModule } from '../../home/footer/footer.module';
import { HeroModule } from '../../home/hero/hero.module';
import { WebDevHeroComponent } from './web-dev-hero/web-dev-hero.component';
//import { DemoComponent } from './demo/demo.component';




@NgModule({
  declarations: [
    WebDevComponent,
    WebDevHeroComponent,
    //PortfolioHeroComponent,
    //DemoComponent
  ],
  imports: [
    CommonModule,
    WebDevRoutingModule,
    HeaderModule,
    FooterModule,
    HeroModule,
  ],
  exports: [
    WebDevComponent
  ],
})
export class WebDevModule { }
