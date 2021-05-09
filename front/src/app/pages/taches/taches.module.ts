import { NgModule } from "@angular/core";
import { TachesRoutingModule } from "./taches-routing.module";
import { TachesComponent } from "./taches.component";

@NgModule({
    declarations: [
        TachesComponent
    ],
    imports: [
        TachesRoutingModule
    ]
})

export class TachesModule{}