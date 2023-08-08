import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GPTComponent } from './gpt.component';
import { GPTRoutingModule } from './gpt-routing.module';
import { HeaderModule } from '../../home/header/header.module';
import { FooterModule } from '../../home/footer/footer.module';
import { HeroModule } from '../../home/hero/hero.module';
import { GptHeroComponent } from './gpt-hero/gpt-hero.component';
//import { DemoComponent } from './demo/demo.component';




@NgModule({
  declarations: [
    GPTComponent,
    GptHeroComponent,
    //PortfolioHeroComponent,
    //DemoComponent
  ],
  imports: [
    CommonModule,
    GPTRoutingModule,
    HeaderModule,
    FooterModule,
    HeroModule,
  ],
  exports: [
    GPTComponent
  ],
})
export class GPTModule { }
