import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'Shared-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent{
    @Input() label!: string;
}