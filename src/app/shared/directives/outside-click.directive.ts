import { Directive, ElementRef, Output, EventEmitter, HostListener } from "@angular/core";

@Directive({
    selector: '[outsideClick]'
})
export class OutsideClickDirective {
    @Output() outsideClick = new EventEmitter<MouseEvent>();
    constructor(private elementRef: ElementRef) {}

    /**
     * on outside click of dropdown emit event to close dropdown
     * @param event 
     */
    @HostListener('document:click',['$event'])
    public onDocumentClick(event: MouseEvent): void {
        const targetElement = event.target as HTMLElement;        
        if(targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
            this.outsideClick.emit(event);
        }
    }
}