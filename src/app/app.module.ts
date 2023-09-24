import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormularioUniversitarioComponent } from './components/formulario-universitario/formulario-universitario.component';
import { FormularioEscuelaComponent } from './components/formulario-escuela/formulario-escuela.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormularioUniversitarioComponent,
    FormularioEscuelaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
