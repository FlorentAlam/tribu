import { Component, Input } from "@angular/core";

@Component({
    selector: 'Shared-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent{
    @Input() content!: string;
}