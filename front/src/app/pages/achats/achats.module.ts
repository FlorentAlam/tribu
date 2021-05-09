import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AchatsEffects } from "src/app/store/effects/achats.effects";
import { AchatsRoutingModule } from "./achats-routing.module";
import { AchatsComponent } from "./achats.component";
import { AddCategoryComponent } from "./components/addCategory/addCategory.component";
import { EffectsModule } from "@ngrx/effects";


@NgModule({
    declarations: [
        AchatsComponent,
        AddCategoryComponent
    ],
    imports: [
        AchatsRoutingModule,
        CommonModule,
        FormsModule,
        EffectsModule.forFeature([AchatsEffects])
    ]
})
export class AchatsModule{}