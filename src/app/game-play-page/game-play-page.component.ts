import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-game-play-page',
  standalone: true,
  imports: [],
  templateUrl: './game-play-page.component.html',
})
export class GamePlayPageComponent {
  gameId: number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.gameId = +params['id'];
    });
  }

}
