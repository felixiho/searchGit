import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id: '1346f69c1471f78f859f';
  private client_secret: 'bd00deaac5bdb59f7b43310efc4ebb43eb986555';

  constructor(private _http: HttpClient) {
    console.log('githubservice is ready...');
    this.username = 'felixiho';
  }

  OnInit() {

  }

  getUser() {
    return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' +
    this.client_secret + '/');
  }

  getRepos() {
    return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' +
    this.client_secret + '/');
  }

  updateUser(username: string) {
    this.username = username;
  }

}
