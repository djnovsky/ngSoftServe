import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appButtonHighlight]'
})
export class ButtonHighlightDirective {

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('firebrick');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
