import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComboboxComponent } from './components/combobox/combo-box.component';
import { ClickElsewhereDirective } from './outside-click.directive';

const exportModules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
];

@NgModule({
    imports: [...exportModules],
    exports: [...exportModules, ComboboxComponent],
    declarations: [ComboboxComponent, ClickElsewhereDirective]
})
export class SharedModule { }