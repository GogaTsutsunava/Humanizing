import { Component, Input } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-scroll-button',
  template: `
    <button (click)="scrollTo()" class="scroll-button btn btn-primary">Scroll Up</button>
  `,
  
})
export class ScrollButtonComponent {
  @Input()
  targetId!: string;

  constructor(private scrollService: ScrollService) {}

  scrollTo(): void {
    this.scrollService.scrollTo(this.targetId);
  }
}
