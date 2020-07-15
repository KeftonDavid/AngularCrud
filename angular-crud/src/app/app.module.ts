import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MinhasTecnologiasComponent } from './minhas-tecnologias/minhas-tecnologias.component';
import { MinhasTecnologiasListaComponent } from './minhas-tecnologias/minhas-tecnologias-lista/minhas-tecnologias-lista.component';
import { LoginComponent } from './logar-google/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MinhasTecnologiasComponent,
    MinhasTecnologiasListaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
