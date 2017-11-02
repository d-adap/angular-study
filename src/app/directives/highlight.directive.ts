import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[hl]'
})
export class HilightDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'gold';
        console.log(
          `* AppRoot highlight called for ${el.nativeElement.tagName}`);
      }
}
