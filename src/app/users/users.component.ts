import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUsers } from '../model/i-users.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersItem: IUsers[] = [];
  constructor(private userService: UsersService, private http : HttpClient) {
    //  this.http.get('https://reqres.in/api/users?page=2',{
    //    observe:'body'
    //  }).subscribe(data => console.log(data));
  }
  getData():void {
    this.userService.getAllData().subscribe(res=>{
      
      this.usersItem= res;
      console.log(this.usersItem) ;
      console.log(res);
    })

  }

  ngOnInit(): void {
    this.getData();
  }
}
