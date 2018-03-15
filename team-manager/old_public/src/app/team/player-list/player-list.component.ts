import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  team: Array<Player> = [];
  player: Player[];

  constructor(private _teamService: TeamService, private _router: Router) { }

  ngOnInit() {
    
  }

  playerList(){
    this._teamService.playersList((res) => {
      this.team = res;
    });
  }

  deletePlayer(id) {
    this._teamService.destroyPlayer((id), (res)  => {
        this.player = res;
      });
    // this.playersList()
    };
 
}
