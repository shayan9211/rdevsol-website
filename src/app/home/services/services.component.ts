import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  constructor(private router: Router) {}

  navigateToCustomWebDev() {
    this.router.navigate(['/cwd']);
  }
  navigateToGpt() {
    this.router.navigate(['/gpt']);
  }
  navigateToMl() {
    this.router.navigate(['/ml']);
  }
  navigateToWebdev() {
    this.router.navigate(['/webdev']);
  }
}
