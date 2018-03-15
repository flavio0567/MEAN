import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  user;
  
  constructor(private _teamService: TeamService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._teamService.login(this.user, (res) => {
      this._router.navigate(['/players/list']);
    });

  }

}
