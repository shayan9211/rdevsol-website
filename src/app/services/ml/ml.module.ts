import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MLComponent } from './ml.component';
import { MLRoutingModule } from './ml-routing.module';
import { HeaderModule } from '../../home/header/header.module';
import { FooterModule } from '../../home/footer/footer.module';
import { HeroModule } from '../../home/hero/hero.module';
import { MlHeroComponent } from './ml-hero/ml-hero.component';
//import { DemoComponent } from './demo/demo.component';




@NgModule({
  declarations: [
    MLComponent,
    MlHeroComponent,
    //PortfolioHeroComponent,
    //DemoComponent
  ],
  imports: [
    CommonModule,
    MLRoutingModule,
    HeaderModule,
    FooterModule,
    HeroModule,
  ],
  exports: [
    MLComponent
  ],
})
export class MLModule { }
