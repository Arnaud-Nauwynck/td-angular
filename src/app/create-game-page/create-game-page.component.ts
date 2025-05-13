import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-game-page',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './create-game-page.component.html'
})
export class CreateGamePageComponent {
  player1Name = '';
  blitzMinuteDuration = 15;

  constructor(private router: Router) {}

  createGame() {
    console.log('clicked createGame ',
      {player1Name: this.player1Name, blitzMinuteDuration: this.blitzMinuteDuration});
    let newGameId = 100; // TODO: generate id
    this.router.navigate(['wait-game-opponent', newGameId]);
  }

}
