import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  users = [];

  constructor(
    private dataService: DataService,
    private authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.dataService.getUsers()
      .subscribe((users) => {
        this.users = users;
      })
  }

logout(){
  this.authService.logout();
}

}