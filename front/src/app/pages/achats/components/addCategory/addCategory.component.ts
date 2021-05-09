import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { take } from "rxjs/operators";
import { AchatService } from "src/app/core/services/achats.service";
import { AddCategory, AddCategoryStart } from "src/app/store/actions/achats.actions";

@Component({
    selector: 'add-category',
    templateUrl: './addCategory.component.html',
    styleUrls: ['./addCategory.component.scss']
})
export class AddCategoryComponent{
    public categoryName: string = '';

    constructor(private _store: Store){}

    public onAddCategory(): void{
        if(this.isCategoryLengthEnough()){
            this._store.dispatch(new AddCategoryStart(this.categoryName));
            this.categoryName = '';
        }
    }

    public isCategoryLengthEnough(): boolean{
        return this.categoryName.length >= 3;
    }
}