import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { AuthComponent } from './pages/authentification/authentification.component';
import { AchatsComponent } from './pages/achats/achats.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'authentification/:type', component: AuthComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'achats', component: AchatsComponent},
  {path: 'messagerie', loadChildren: () => import('./pages/messagerie/messagerie.module').then(m => m.MessagerieModule)},
  {path: 'taches', loadChildren: () => import('./pages/taches/taches.module').then(m => m.TachesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
