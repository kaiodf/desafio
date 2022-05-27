import { PEpisComponent } from './p-epis/p-epis/p-epis.component';
import { EpisodeComponent } from './episode/episode.component';
import { PaisCodigoComponent } from './pais-codigo/pais-codigo.component';
import { IndicadorComponent } from './indicador/indicador.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo:'pais-codigo',pathMatch: 'full'},
  {path: 'indicador',component: IndicadorComponent},
  {path: 'pais-codigo',component: PaisCodigoComponent},
  {path: 'episode', component: EpisodeComponent},
  {path: 'p-episode', component: PEpisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
