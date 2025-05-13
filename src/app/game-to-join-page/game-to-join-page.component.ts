import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-game-to-join-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './game-to-join-page.component.html',
})
export class GameToJoinPageComponent {

  gameId: number = 0;
  player2Name = '';

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => {
      this.gameId = +params['id'];
    });
  }

  joinGame() {
    this.router.navigate(['play-game', this.gameId]);
  }

}
