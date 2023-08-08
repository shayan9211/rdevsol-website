import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CWDComponent } from './cwd.component';
import { CWDRoutingModule } from './cwd-routing.module';
import { HeaderModule } from '../../home/header/header.module';
import { FooterModule } from '../../home/footer/footer.module';
import { HeroModule } from '../../home/hero/hero.module';
import { CWDHeroComponent } from './cwd-hero/cwd-hero.component';
import { CWDMainComponent } from './main/main.component';




@NgModule({
  declarations: [
    CWDComponent,
    CWDHeroComponent,
    CWDMainComponent,
    //PortfolioHeroComponent,
    //DemoComponent
  ],
  imports: [
    CommonModule,
    CWDRoutingModule,
    HeaderModule,
    FooterModule,
    HeroModule,
  ],
  exports: [
    CWDComponent
  ],
})
export class CWDModule { }
