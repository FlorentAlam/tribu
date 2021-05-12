import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { AddItemStart } from "src/app/store/actions/achats.actions";

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

    public onSubmit(): void{
        try{
            this.checkAndSubmitItemInfos();
        } catch(error){
            this.handleSubmissionError(error);
        }
        
    }

    private checkAndSubmitItemInfos(): void{
        if(!this.isItemValid()) throw Error("Veuillez renseigner le nom ainsi que la quantité de votre article.");
        this.addItemToStore();
        this.reinitializeItem();
    }
    private reinitializeItem(): void{
        this.itemName = '';
        this.quantity = '';
    }

    private isItemValid(): boolean{
        return this.isStringLongEnough(this.itemName) && this.isStringLongEnough(this.quantity);
    }

    private isStringLongEnough(stringToCheck: string): boolean{
        const MIN_LENGTH = 1;
        return stringToCheck.length >= MIN_LENGTH;
    }

    private addItemToStore(): void{
        this._store.dispatch(new AddItemStart(this.cat_id, this.itemName, this.quantity));
    }
    // TODO : NEEDS TESTING
    private handleSubmissionError(error: Error){
        console.log(error.message);
    }
}
