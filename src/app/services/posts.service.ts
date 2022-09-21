import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, reduce } from 'rxjs';
import { Posts } from '../model/posts.model';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  getData():Observable<Posts[]>{
    return this.http.get<Posts[]>(`${environment.apiUrl}/posts`).pipe(map(res => res.slice(0,9)));
  }
  getPostById(postId:any) : Observable<Posts>{
    return this.http.get<Posts>(`${environment.apiUrl}/posts/${postId}`)

    
  }
  
}
