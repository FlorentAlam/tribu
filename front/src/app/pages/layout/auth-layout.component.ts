import { Component, Input } from "@angular/core";

@Component({
    selector: 'Auth-layout',
    templateUrl: './auth-layout.component.html',
    styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayout{
    @Input() direction!: string;
}