import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {

  }
}
