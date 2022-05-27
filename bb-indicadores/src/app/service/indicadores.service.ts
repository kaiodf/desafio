import { Indicadores } from './../models/indicadores.model';
import { API_PATH, COD_PATH } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  private listaIndicadores: Indicadores[];
  private codigoPais: string;

  constructor(private httpClient: HttpClient) {
    this.listaIndicadores = [];
    this.codigoPais = "";
   }

   get codigo(){
    return this.codigoPais;
   }

   get indicadores(){
     return this.listaIndicadores;
   }

   pesquisar(cod:string): Observable<Indicadores[]>{
     this.codigoPais = cod;
    const retorno = this.httpClient.get<Indicadores[]>(API_PATH.concat('indicators?cod=').concat(cod));
    retorno.subscribe((indica: Indicadores[]) => {
      this.listaIndicadores = indica;
    });

    return retorno;
  }
}
