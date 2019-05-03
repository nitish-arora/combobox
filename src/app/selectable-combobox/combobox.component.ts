import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-combobox',
    templateUrl: './combobox.component.html',
    styleUrls: ['./combobox.component.css']
})
export class ComboboxComponent {
    @Input() selectableFields;
    @Input() title;
    @Input() placeholder;
    @Output() readonly fieldSelection = new EventEmitter();
    selectedFields;

    onGameSelection(games) {
        this.selectedFields = games;
        this.fieldSelection.emit(games);
    }

    

}