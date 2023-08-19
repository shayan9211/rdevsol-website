import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultingComponent } from './consulting.component';
import { ConsultingRoutingModule } from './consulting-routing.module';
import { HeaderModule } from '../../home/header/header.module';
import { FooterModule } from '../../home/footer/footer.module';
import { HeroModule } from '../../home/hero/hero.module';
import { ConsultingHeroComponent } from './consulting-hero/consulting-hero.component';
import { ConsultingMainComponent } from './main/main.component';




@NgModule({
  declarations: [
    ConsultingComponent,
    ConsultingHeroComponent,
    ConsultingMainComponent,
    //PortfolioHeroComponent,
    //DemoComponent
  ],
  imports: [
    CommonModule,
    ConsultingRoutingModule,
    HeaderModule,
    FooterModule,
    HeroModule,
  ],
  exports: [
    ConsultingComponent
  ],
})
export class ConsultingModule { }
