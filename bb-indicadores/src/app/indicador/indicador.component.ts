import { Indicadores } from './../models/indicadores.model';
import { IndicadoresService } from './../service/indicadores.service';
import { Component, Input, OnInit } from '@angular/core';
import { Indicador } from '../models/indicador.model';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.scss']
})
export class IndicadorComponent implements OnInit {

  @Input() indicadores: Indicadores[] = [];

  constructor(private service: IndicadoresService) { }

  ngOnInit(): void {
    this.indicadores = this.service.indicadores;
    console.table(this.indicadores);
  }

}
