import { IndicadoresService } from './service/indicadores.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bb-indicadores';
  constructor(private service: IndicadoresService){

  }
}
