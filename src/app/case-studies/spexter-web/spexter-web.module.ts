import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';
import { SpexterWebComponent } from './spexter-web.component';
import { SpexterWebRoutingModule } from './spexter-web-routing.module';
import { HeaderModule } from '../../home/header/header.module';
import { FooterModule } from '../../home/footer/footer.module';
import { HeroModule } from '../../home/hero/hero.module';

@NgModule({
  declarations: [
    HeroComponent,
    MainComponent,
    SpexterWebComponent,
  ],
  imports: [
    CommonModule,
    SpexterWebRoutingModule,
    HeaderModule,
    FooterModule,
    HeroModule,
  ],
  exports: [
    SpexterWebComponent
  ],
})
export class SpexterWebModule { }

