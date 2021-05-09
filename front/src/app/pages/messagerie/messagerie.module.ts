import { NgModule } from "@angular/core";
import { MessagerieRoutingModule } from "./messagerie-routing.module";
import { MessagerieComponent } from "./messagerie.component";

@NgModule({
    declarations: [
        MessagerieComponent
    ],
    imports: [
        MessagerieRoutingModule
    ]
})
export class MessagerieModule{}