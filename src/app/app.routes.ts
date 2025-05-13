import { Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {CreateGamePageComponent} from './create-game-page/create-game-page.component';
import {GameToJoinListPageComponent} from './game-to-join-list-page/game-to-join-list-page.component';

export const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'create-game', component: CreateGamePageComponent},
  {path:'list-games-to-join', component: GameToJoinListPageComponent},

];
