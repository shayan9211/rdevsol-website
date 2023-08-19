import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Web3Component } from './web-3.component';
import { Web3RoutingModule } from './web-3-routing.module';
import { HeaderModule } from '../../home/header/header.module';
import { FooterModule } from '../../home/footer/footer.module';
import { HeroModule } from '../../home/hero/hero.module';
import { Web3HeroComponent } from './web-3-hero/web-3-hero.component';
import { Web3MainComponent } from './main/main.component';




@NgModule({
  declarations: [
    Web3Component,
    Web3HeroComponent,
    Web3MainComponent,
    //PortfolioHeroComponent,
    //DemoComponent
  ],
  imports: [
    CommonModule,
    Web3RoutingModule,
    HeaderModule,
    FooterModule,
    HeroModule,
  ],
  exports: [
    Web3Component
  ],
})
export class Web3Module { }
