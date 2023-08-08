import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HeaderModule } from '../home/header/header.module';
import { FooterModule } from '../home/footer/footer.module';
import { PortfolioHeroComponent } from './portfolio-hero/portfolio-hero.component';
import { DemoComponent } from './demo/demo.component';




@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioHeroComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [
    PortfolioComponent
  ],
})
export class PortfolioModule { }
