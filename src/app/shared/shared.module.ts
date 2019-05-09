import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComboboxComponent } from './components/combobox/combo-box.component';
import { OutsideClickDirective } from './directives/outside-click.directive';

const exportModules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
];

@NgModule({
    imports: [...exportModules],
    exports: [...exportModules, ComboboxComponent],
    declarations: [ComboboxComponent, OutsideClickDirective]
})
export class SharedModule { }