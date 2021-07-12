import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {


  users = [{ name: "Maksims", lastname: "Michulis" }]
  constructor(
    private dataService: DataService

  ) { }

  ngOnInit(): void {
    this.dataService.getPublicUsers().subscribe(
      users => { this.users = users; }
    )
  }

}
