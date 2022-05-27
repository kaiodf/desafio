import { Router } from '@angular/router';
import { EpisodeService } from './../service/episode.service';
import { Component, Input, OnInit } from '@angular/core';
import { Episode } from '../models/episode.model';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  @Input() episodes: Episode[]=[];
  constructor(private service: EpisodeService, private router: Router){}

  ngOnInit(): void {
    this.episodes = this.service.episodes;
  }

}
