import { Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {CreateGamePageComponent} from './create-game-page/create-game-page.component';
import {GameToJoinListPageComponent} from './game-to-join-list-page/game-to-join-list-page.component';
import {GameToJoinPageComponent} from './game-to-join-page/game-to-join-page.component';
import {GamePlayPageComponent} from './game-play-page/game-play-page.component';
import {WaitGameOpponentPageComponent} from './wait-game-opponent-page/wait-game-opponent-page.component';

export const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'create-game', component: CreateGamePageComponent},
  {path:'list-games-to-join', component: GameToJoinListPageComponent},
  {path:'join-game/:id', component: GameToJoinPageComponent},
  {path:'play-game/:id', component: GamePlayPageComponent},
  {path:'wait-game-opponent/:id', component: WaitGameOpponentPageComponent},

];
