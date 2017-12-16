import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [GithubService]
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any;
  username: string;
  constructor(private _githubService: GithubService) {
    this.user = false;

  }

  ngOnInit() {
  }

  searchUser() {
    this._githubService.updateUser(this.username);

    this.user = this._githubService.getUser().subscribe(users => {
      this.user = users;
    });
    this.repos = this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

}
