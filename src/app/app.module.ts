import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';  // Si estás usando íconos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuringInputComponent } from './turing-input/turing-input.component';
import { TuringUniversalComponent } from './turing-universal/turing-universal.component';
import { SidebarComponent } from './sidebar/sidebar.component'; // Asegúrate de importar tu SidebarComponent
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    TuringInputComponent,
    TuringUniversalComponent,
    SidebarComponent,
    InicioComponent // Incluye tu componente de sidebar aquí
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  // Necesario para Angular Material
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,// Si estás usando íconos
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
