import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { AuthLayout } from './pages/layout/auth-layout.component';
import { SharedModule } from './core/shared/shared.module';
import { AuthComponent } from './pages/authentification/authentification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscriptionComponent,
    ConnexionComponent,
    AuthLayout,
    AuthComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
