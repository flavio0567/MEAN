import { NgModule } from '@angular/core';
import { TeamComponent } from './team/team.component';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './team/player-list/player-list.component';
import { StatusGameComponent } from './team/status-game/status-game.component';
import { PlayerNewComponent } from './team/player-new/player-new.component';
import { PageNotFoundComponent } from './team/page-not-found/page-not-found.component';
// import { PopupComponent } from './team/popup/popup.component';

const routes: Routes = [
  { 
    path: '',
    component: TeamComponent,
    pathMatch: 'full'
  },
  {
    path: 'players/list',
    component: PlayerListComponent,
    pathMatch: 'full'
  },
  {
    path: 'status/game/:id',
    component: StatusGameComponent,
    pathMatch: 'full'
  },
  {
    path: 'players/addplayer',
    component: PlayerNewComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'player/delete/:id',
  //   component: PopupComponent,
  //   pathMatch: 'full'
  // },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
