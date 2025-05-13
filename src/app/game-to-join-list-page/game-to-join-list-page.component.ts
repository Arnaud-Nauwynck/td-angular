import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-game-to-join-list-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './game-to-join-list-page.component.html',
})
export class GameToJoinListPageComponent {
  games = [
    {id:1, player1Name: 'John', blitzMinuteDuration: 15},
    {id:2, player1Name: 'Paul', blitzMinuteDuration: 15},
  ];

}
