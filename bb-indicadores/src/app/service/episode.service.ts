import { API_PATH } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episode } from '../models/episode.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private listaEpisodes: Episode[];

  constructor(private httpClient: HttpClient) {
    this.listaEpisodes = [];
  }

  get episodes(){
    return this.listaEpisodes;
  }

  pesquisarEpisodes(title:string):Observable<Episode[]>{
    const retorno = this.httpClient.get<Episode[]>(API_PATH.concat('tvseries?title=').concat(title));
    retorno.subscribe((epiList: Episode[]) =>{
      this.listaEpisodes = epiList;
    });
    return retorno;
  }

}
