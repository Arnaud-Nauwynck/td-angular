import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-wait-game-opponent-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './wait-game-opponent-page.component.html',
})
export class WaitGameOpponentPageComponent {
  gameId: number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.gameId = +params['id'];
    });

    // this.route.snapshot.data.subscribe(data => {
    // not recommended..
    // }
  }

}
