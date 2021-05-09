import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'authentification',
    templateUrl: './authentification.component.html',
    styleUrls: ['./authentification.component.scss']
})
export class AuthComponent{
    public imgPosition: string = "right";

    constructor(private _route: ActivatedRoute){
        this._route.params.subscribe(data => {
            if(data.type === 'inscription'){
                this.imgPosition = "right";
            } else this.imgPosition = "left";
        })
    }
}