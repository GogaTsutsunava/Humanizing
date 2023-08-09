import { Component } from '@angular/core';


@Component({
  selector: 'app-humans',
  templateUrl: './humans.component.html',
  styleUrls: ['./humans.component.scss']
})
export class HumansComponent {
  getImageSource(): string {
    // Check screen width and return the appropriate image source
    if (window.innerWidth <= 375) {
      return './assets/images/image-intro-mobile.jpg';
    } else {
      return './assets/images/image-intro-desktop.jpg';
    }
  }
}

