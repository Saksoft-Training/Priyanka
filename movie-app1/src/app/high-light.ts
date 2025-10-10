import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLight {

    constructor(private element:ElementRef) {
    console.log('HighLight directive initialized:',element);

   }

   @HostListener('mouseenter') onMouseEnter() {
    console.log('Element clicked - applying highlight styles');
    this.element.nativeElement.style.backgroundColor='blue';
    this.element.nativeElement.style.boxShadow='0.5px 0.5px o.5px 10px rgba(17,231,63,0.3)';
    this.element.nativeElement.style.borderColor='black';
   }

}
