import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

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

  createGame() {
    console.log('clicked createGame ',
      {player1Name: this.player1Name, blitzMinuteDuration: this.blitzMinuteDuration});
  }
}
