import { NgModule } from "@angular/core";
import { ButtonComponent } from './components/button/button.component';
import { ErrorComponent } from "./components/error/error.component";
import { FormInputComponent } from "./components/formInput/form-input.component";

@NgModule({
    declarations: [
        ButtonComponent,
        ErrorComponent,
        FormInputComponent
    ],
    exports: [
        ButtonComponent,
        ErrorComponent,
        FormInputComponent
    ]
})

export class SharedModule{}