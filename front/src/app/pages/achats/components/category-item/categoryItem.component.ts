import { Component, Input } from "@angular/core";
import { AchatItem } from "src/app/core/models/achats.model";

@Component({
    selector: '[achatItem]',
    templateUrl: './categoryItem.component.html',
    styleUrls: ['./categoryItem.component.scss']
})
export class CategoryItemComponent{
    @Input() item!: AchatItem;
}