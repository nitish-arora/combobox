import { NgModule } from '@angular/core';
import { ComboboxComponent } from './combobox.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { SharedModule } from './../common/shared.module';

@NgModule({
    imports: [MultiSelectModule, SharedModule],
    exports: [ComboboxComponent],
    declarations: [ComboboxComponent],
    providers: []
})
export class ComboboxModule{ }