import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AchatsEffects } from "src/app/store/effects/achats.effects";
import { AchatsRoutingModule } from "./achats-routing.module";
import { AchatsComponent } from "./achats.component";
import { AddCategoryComponent } from "./components/addCategory/addCategory.component";
import { EffectsModule } from "@ngrx/effects";
import { CategoryComponent } from "./components/category/category.component";
import { CategoryItemComponent } from "./components/category-item/categoryItem.component";
import { AddItemComponent } from "./components/addItem/addItem.component";
import { EditCategoryComponent } from "./components/editCategory/editCategory.component";


@NgModule({
    declarations: [
        AchatsComponent,
        AddCategoryComponent,
        CategoryComponent,
        CategoryItemComponent,
        AddItemComponent,
        EditCategoryComponent
    ],
    imports: [
        AchatsRoutingModule,
        CommonModule,
        FormsModule,
        EffectsModule.forFeature([AchatsEffects])
    ]
})
export class AchatsModule{}