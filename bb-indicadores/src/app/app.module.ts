import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndicadorComponent } from './indicador/indicador.component';
import { PaisCodigoComponent } from './pais-codigo/pais-codigo.component';
import { EpisodeComponent } from './episode/episode.component';
import { PEpisComponent } from './p-epis/p-epis/p-epis.component';

@NgModule({
  declarations: [
    AppComponent,
    IndicadorComponent,
    PaisCodigoComponent,
    EpisodeComponent,
    PEpisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
