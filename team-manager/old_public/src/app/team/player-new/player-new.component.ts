import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css']
})
export class PlayerNewComponent implements OnInit {
  player: Player[];

  constructor(      
    private _teamService: TeamService, 
    private _router: Router, 
    private _route: ActivatedRoute
) { }

  ngOnInit() {
  }

  newPlayer() {
    this._teamService.newPlayer(this.player, (res) => {
      this._router.navigate(['/players/addplayer', res]);
    });
  };

}
