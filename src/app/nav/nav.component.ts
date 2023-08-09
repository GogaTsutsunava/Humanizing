import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isMenuOpened: boolean = false;

  toogleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
  closeMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  
  constructor() {}

  ngOnInit(): void {}
}
