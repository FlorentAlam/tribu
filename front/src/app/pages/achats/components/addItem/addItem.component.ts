import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { AddItem, AddItemStart } from "src/app/store/actions/achats.actions";

@Component({
    selector: 'achat-add-item',
    templateUrl: './addItem.component.html',
    styleUrls: ['./addItem.component.scss']
})
export class AddItemComponent{
    @Input() cat_id!: number;
    public itemName: string = '';
    public quantity: string = '';

    constructor(private _store: Store){}

    onSubmit(){
        this._store.dispatch(new AddItemStart(this.cat_id, this.itemName, this.quantity));
    }
}