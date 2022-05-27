import { Indicadores } from './../models/indicadores.model';
import { IndicadoresService } from './../service/indicadores.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pais-codigo',
  templateUrl: './pais-codigo.component.html',
  styleUrls: ['./pais-codigo.component.scss']
})
export class PaisCodigoComponent {
  codigo: string = '';

  constructor(private service: IndicadoresService, private router: Router ) { }

  pesquisar(){
    console.log('Solicitada Nova Pesquisa');

    this.service.pesquisar(this.codigo).subscribe(resultado => {
      this.limparCampos();
      this.router.navigateByUrl('indicador');
    },
    (error) => console.error(error)
    );
  }

  limparCampos(){

    this.codigo = '';
  }

}
