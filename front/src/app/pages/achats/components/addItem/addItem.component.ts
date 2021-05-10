import { Component } from "@angular/core";

@Component({
    selector: 'achat-add-item',
    templateUrl: './addItem.component.html',
    styleUrls: ['./addItem.component.scss']
})
export class AddItemComponent{
    public itemName: string = '';

    onSubmit(){
        console.log(this.itemName);
    }
}