import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudComponent } from './cloud.component';
import { CloudRoutingModule } from './cloud-routing.module';
import { HeaderModule } from '../../home/header/header.module';
import { FooterModule } from '../../home/footer/footer.module';
import { HeroModule } from '../../home/hero/hero.module';
import { CloudHeroComponent } from './cloud-hero/cloud-hero.component';
import { CloudMainComponent } from './main/main.component';




@NgModule({
  declarations: [
    CloudComponent,
    CloudHeroComponent,
    CloudMainComponent,
    //PortfolioHeroComponent,
    //DemoComponent
  ],
  imports: [
    CommonModule,
    CloudRoutingModule,
    HeaderModule,
    FooterModule,
    HeroModule,
  ],
  exports: [
    CloudComponent
  ],
})
export class CloudModule { }
