import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  constructor(private router: Router) {}

  navigateToSpexter() {
    this.router.navigate(['/spexter']);
  }
  navigateToOpenBanking() {
    this.router.navigate(['/open-banking']);
  }
}
