import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { QuienSoyComponent } from './modules/pages/quien-soy/quien-soy.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './modules/pages/error/error.component';
import { MenuPrincipalComponent } from './modules/pages/menu-principal/menu-principal.component';
import { FooterComponent } from './modules/pages/footer/footer.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth/";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    ErrorComponent,
    MenuPrincipalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
