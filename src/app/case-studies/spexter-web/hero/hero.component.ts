import { Component } from '@angular/core';

@Component({
  selector: 'spexter-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  images = [
    '../../../../assets/img/case-studies/spexter/Screen Shot 2023-07-01 at 3.18.40 PM.png',
    '../../../../assets/img/case-studies/spexter/Screen Shot 2023-07-02 at 1.25.02 PM.png',
    '../../../../assets/img/case-studies/spexter/Screen Shot 2023-07-02 at 1.12.53 PM.png',
    // Add more URLs as needed
  ];
  currentIndex = 0;

  // Use this to get the current image
  getCurrentImage() {
    return this.images[this.currentIndex];
  }

  // Go to the next image
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  // Go to the previous image
  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
