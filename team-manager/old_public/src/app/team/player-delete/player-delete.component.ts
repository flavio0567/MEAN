import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css']
})
export class PlayerDeleteComponent implements OnInit {
  player: Player[];

  constructor(private _teamService: TeamService, private _router: Router, 
    private _route: ActivatedRoute
) { }

  ngOnInit() {
    this.getPlayer();
  }

  getPlayer(){
    this._route.paramMap.subscribe(params => {
      this._teamService.getPlayerById(params.get('id'), (res) => {
        this.player = res;
      });
    });
  }

  deletePlayer(id) {
    this.player = this.player['_id'];
    this._teamService.destroyPlayer(this.player, (res) => {
    // this.recipie = res;
    // this.getRecipie();
    });
  }

}
