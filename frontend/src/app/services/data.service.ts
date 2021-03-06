import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  //to make any request on any endpoint
  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): any {
    return this.http.get('http://localhost:3000/users');
  }

  getPublicUsers(): any {
    return this.http.get('http://localhost:3000/public-users');
  }
}