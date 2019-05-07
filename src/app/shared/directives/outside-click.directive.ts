import { Directive, ElementRef, Output, EventEmitter, HostListener } from "@angular/core";

@Directive({
    selector: '[clickElsewhere]'
})
export class ClickElsewhereDirective {
    @Output() clickElsewhere = new EventEmitter<MouseEvent>();
    constructor(private elementRef: ElementRef) {}

    /**
     * on outside click of referenced element emit event to close dropdown
     * @param event 
     */
    @HostListener('document:click',['$event'])
    public onDocumentClick(event: MouseEvent): void {
        const targetElement = event.target as HTMLElement;        
        if(targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
            this.clickElsewhere.emit(event);
        }
    }
}