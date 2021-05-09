import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AchatsComponent } from "./achats.component";

const routes: Routes = [
    {path: '', component: AchatsComponent}
];
@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AchatsRoutingModule{}