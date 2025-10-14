import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLight {

  //#region Constructor 
  /**
   * 
   * @param element reference to the element on which the directive was applied.
   * This is provided by angular through the DI system.
   *
   *@summary We use the nativeElement property of the ElementRef to access the underlying DOM element
   */
  constructor(private element: ElementRef) {
    console.log('HighLight directive initialized:', element);

  }

  //#endregion

  //#region Host Listeners
  /**
   * @description
   * Decorator that declares a DOM event to listen for,
   * and provides a handler method to run when that event occurs.
   */

  @HostListener('mouseenter') onMouseEnter() {
    console.log('Element clicked - applying highlight styles');
    this.element.nativeElement.style.backgroundColor = 'blue';
    this.element.nativeElement.style.boxShadow = '0.5px 0.5px o.5px 10px rgba(17,231,63,0.3)';
    this.element.nativeElement.style.borderColor = 'black';
  }
  //#endregion
}
