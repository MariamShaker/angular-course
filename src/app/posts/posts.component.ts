import { Component, OnInit } from '@angular/core';
import { Posts } from '../model/posts.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  postItem: Posts[] = [];
  
  constructor(private postService: PostsService) {}
  getAllPosts(): void {
    this.postService.getData().subscribe((data) => {
      this.postItem = data;
      console.log(this.postItem);
    });
    
  }
  ngOnInit(): void {
    this.getAllPosts();
  }
  
}
