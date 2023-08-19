import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIComponent } from './AI.component';
import { AIRoutingModule } from './AI-routing.module';
import { HeaderModule } from '../../home/header/header.module';
import { FooterModule } from '../../home/footer/footer.module';
import { HeroModule } from '../../home/hero/hero.module';
import { AIHeroComponent } from './AI-hero/AI-hero.component';
import { AIMainComponent } from './main/main.component';




@NgModule({
  declarations: [
    AIComponent,
    AIHeroComponent,
    AIMainComponent,
    //PortfolioHeroComponent,
    //DemoComponent
  ],
  imports: [
    CommonModule,
    AIRoutingModule,
    HeaderModule,
    FooterModule,
    HeroModule,
  ],
  exports: [
    AIComponent
  ],
})
export class AIModule { }
