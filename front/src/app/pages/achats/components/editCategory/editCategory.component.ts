import { Component, Input } from "@angular/core";

@Component({
    selector: 'achat-edit-category',
    templateUrl: './editCategory.component.html',
    styleUrls: ['./editCategory.component.scss']
})
export class EditCategoryComponent{
    @Input() categoryName!: string;
    public isDisabled: boolean = true;

    onEnable(){
        this.isDisabled = false;
    }
    onSubmit(){
        this.isDisabled = true;
    }  
}