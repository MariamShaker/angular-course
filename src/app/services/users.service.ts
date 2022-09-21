import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsers } from '../model/i-users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http:HttpClient) { }
  getAllData():Observable<IUsers[]>{
    return this.http.get<IUsers[]>(`${environment.usersApiUrl}`);
  }

}
