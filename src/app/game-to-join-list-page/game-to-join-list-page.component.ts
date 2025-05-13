import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-game-to-join-list-page',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './game-to-join-list-page.component.html',
})
export class GameToJoinListPageComponent {
  games = [
    {id:1, player1Name: 'John', blitzMinuteDuration: 15},
    {id:2, player1Name: 'Paul', blitzMinuteDuration: 15},
  ];

  constructor(private router: Router) {}

  onClickJoin(gameId: number) {
    console.log('change page to join-game', gameId)
    this.router.navigate(['join-game', gameId])
        .then(res => console.log('navigated to join-game', res));
  }
}
