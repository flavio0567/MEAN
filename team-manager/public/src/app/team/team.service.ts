import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player} from './player';

@Injectable()
export class TeamService {
  user;
  player: Player;

  constructor(private _http: Http) { }

  login(user, callback) {
    this.user = user;
    console.log('LOGIN success: ', this.user);
    callback(this.user);
  }

  getPlayersList(players) {
    this._http.get('/players/list').subscribe(
      (res) => {
        console.log('SUCCESS in getting players: ', res.json());
        players(res.json());
      },
      (err) => {
        console.log('ERROR in getting players: ', err);
      }
    );
  }

  addPlayer(player, callback) {
    this._http.post('/players/addplayer', {player: player} ).subscribe(
      (res) => {
        console.log('SUCCESS creatting player: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR creatting player: ', err);
      }
    );
  }

  destroyPlayer(id, callback) {
    this._http.delete('/player/delete/' + id).subscribe(
      (res) => {
        console.log('SUCCESS in deleting player: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in deleting player: ', err);
      }
    );
  }

  getPlayerById(id, callback) {
    this._http.get('/player/show/' + id ).subscribe(
      (res) => {
        console.log('SUCCESS getting PlayerByID: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR getting PlayerByID: ', err);
      }
    );
  }

  updatePlayer(player, callback) {
    this._http.put('/player/update', player).subscribe(
      (res) => {
        console.log('SUCCESS updating Player: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR updating Player: ', err);
      }
    );
  }


}
