import { EpisodeService } from './../../service/episode.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-epis',
  templateUrl: './p-epis.component.html',
  styleUrls: ['./p-epis.component.scss']
})
export class PEpisComponent {
  codigo: string = 'girls';

  constructor(private service: EpisodeService, private router: Router ) { }

  pesquisar(){
    console.log('Solicitada Nova Pesquisa');

    this.service.pesquisarEpisodes(this.codigo).subscribe(resultado => {
      this.limparCampos();
      this.router.navigateByUrl('episode');
    },
    (error) => console.error(error)
    );
  }

  limparCampos(){

    this.codigo = '';
  }

}
