import { Component, Input } from "@angular/core";

@Component({
    selector: 'Shared-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent{
    @Input() content!: string;
}