import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  constructor(private router: Router) {}

  navigateToAi() {
    this.router.navigate(['/AI']);
  }
  navigateToCloud() {
    this.router.navigate(['/cloud']);
  }
  navigateToConsulting() {
    this.router.navigate(['/consulting']);
  }
  navigateToCustom() {
    this.router.navigate(['/custom']);
  }
  navigateToMarketing() {
    this.router.navigate(['/marketing']);
  }
  navigateToMobile() {
    this.router.navigate(['/mobile']);
  }
  navigateToWeb3() {
    this.router.navigate(['/web3']);
  }
  navigateToWebDev() {
    this.router.navigate(['/webdev']);
  }
}
