import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { RegistrationSuccessComponent } from './success/success.component';
import { RouterModule } from '@angular/router';
import { ComboboxModule } from './../selectable-combobox/combobox.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../common/shared.module';
import { RegistrationService } from './registration.service';

@NgModule({
    imports: [
        RouterModule,
        ComboboxModule,
        HttpClientModule,
        SharedModule,
    ],
    exports: [],
    declarations: [RegistrationComponent, RegistrationSuccessComponent],
    providers: [RegistrationService]
})
export class RegistrationModule{ }