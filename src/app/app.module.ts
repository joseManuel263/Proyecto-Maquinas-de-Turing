import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuringInputComponent } from './turing-input/turing-input.component';
import { TuringSimulationComponent } from './turing-simulation/turing-simulation.component';
import { FormsModule } from '@angular/forms';
import { TuringUniversalComponent } from './turing-universal/turing-universal.component';

@NgModule({
  declarations: [
    AppComponent,
    TuringInputComponent,
    TuringSimulationComponent,
    TuringUniversalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
