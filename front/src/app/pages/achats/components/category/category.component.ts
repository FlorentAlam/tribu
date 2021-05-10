import { Component, Input } from "@angular/core";
import { Achat } from "src/app/core/models/achats.model";

@Component({
    selector: 'achat-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent{
    @Input() achat!: Achat;
}