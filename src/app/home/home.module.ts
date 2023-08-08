import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { HeroModule } from './hero/hero.module';
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { WhyComponent } from './why/why.component';
import { ContactComponent } from './contact/contact.component';
import { FooterModule } from './footer/footer.module';
import { HomeComponent } from './home.component'
import { AppRoutingModule } from '../app-routing.module';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    ClientsComponent,
    ServicesComponent,
    AboutComponent,
    TeamComponent,
    WhyComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeRoutingModule,
    HeaderModule,
    FooterModule,
    HeroModule,
  ],
  exports: [
    ClientsComponent,
    ServicesComponent,
    AboutComponent,
    TeamComponent,
    WhyComponent,
    ContactComponent,
    HomeComponent,
  ]
})
export class HomeModule { }
