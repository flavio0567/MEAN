import { Component, OnInit, Inject } from '@angular/core';
import { Player } from '../player';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  user;
  team: Array<Player> = [];
  player: Player[];

  constructor(private _teamService: TeamService, private _router: Router, 
    public dialog: MatDialog) { }

  ngOnInit() {
    this.user = this._teamService.user;
    this.getPlayerList();
  }

  getPlayerList(){
    this._teamService.getPlayersList((res) => {
      this.team = res;
    });
  }

  openDialog(player): void {
    let dialogRef = this.dialog.open(Dialog, {
      width: '250px',
      data: {
        id: player._id,
        name: player.name,
        user: this.user
      }
    });

    dialogRef.afterClosed().subscribe(res => {
        console.log('The dialog was closed');
        this.getPlayerList();
    });
  }
}

@Component({
  selector: 'app-popup',
  templateUrl: '../popup/popup.component.html',
  styleUrls: ['../popup/popup.component.css']
})

export class Dialog {

  constructor(private _teamService: TeamService, 
    private _router: Router, 
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deletePlayer(id) {
    this._teamService.destroyPlayer((id), (res) => {
      console.log('The dialog called delete player!', res);
    });
    this.dialogRef.close();
  }

}