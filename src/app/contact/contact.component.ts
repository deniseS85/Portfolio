import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  
  public scroll(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
