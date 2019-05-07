import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-combo-box',
    templateUrl: './combo-box.component.html',
    styleUrls: ['./combo-box.component.css']
})
export class ComboboxComponent implements OnChanges {
    @Input() selectableFields;
    @Input() placeholder;
    @Input() scrollHeight;
    @Output() fieldSelection = new EventEmitter();
    isOptionsVisible: boolean = false;
    tempSelectableFields;
    gameSelected = [];
    lengthPlaceholder;

    ngOnChanges(changes: SimpleChanges) {
        if(changes['selectableFields'].previousValue !== changes['selectableFields'].currentValue) {
            this.selectableFields.forEach(item => {
                item['checked'] = false;
            })
            this.tempSelectableFields = this.selectableFields;
        }
    }

    togglePopup() {
        this.isOptionsVisible = !this.isOptionsVisible;
    }

    searchGame(searchText) {
        this.selectableFields = this.tempSelectableFields;
        if(searchText) {
            searchText = searchText.toLowerCase();
            const filteredGames = this.selectableFields.filter(game => {
                return game.label.toLowerCase().indexOf(searchText) !== -1;
            });
            this.selectableFields = filteredGames;
        }
    }

    onOptionChange(event) {
        if(event.target.checked) {            
            this.gameSelected.push(event.target.value);
        } else {
            this.gameSelected = this.gameSelected.filter(game => {
                return game != event.target.value;
            });
        }
        const gameSelectionChanged = this.tempSelectableFields.find(item => item.value === event.target.value);
        gameSelectionChanged['checked'] = event.target.checked;
        this.lengthPlaceholder = this.gameSelected.length > 0 ? `${this.gameSelected.length} ${this.placeholder} selected` : null;
        this.fieldSelection.emit(this.gameSelected);
    }

    outsideClick() {
        this.isOptionsVisible = false;
        this.selectableFields = this.tempSelectableFields;
    }
}