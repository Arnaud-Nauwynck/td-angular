import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CreateGamePageComponent} from './create-game-page/create-game-page.component';
import {GameToJoinListPageComponent} from './game-to-join-list-page/game-to-join-list-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateGamePageComponent, GameToJoinListPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
}
