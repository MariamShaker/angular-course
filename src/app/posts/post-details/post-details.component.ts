import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/model/posts.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  postId?: string;
  post?: Posts;
  date = new Date();

  constructor(
    private postService: PostsService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.postId = params.get('postId') as string;
      console.log(this.postId);
    });
    this.getPostById();
  }
  getPostById() {
    this.postService.getPostById(this.postId).subscribe((res) => {
      this.post = res;
      console.log(res);
    });
  }
}
