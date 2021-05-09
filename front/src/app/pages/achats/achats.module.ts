import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AchatsRoutingModule } from "./achats-routing.module";
import { AchatsComponent } from "./achats.component";

@NgModule({
    declarations: [
        AchatsComponent
    ],
    imports: [
        AchatsRoutingModule,
        CommonModule
    ]
})
export class AchatsModule{}