import { Component, OnInit} from '@angular/core';
import { Post } from '../models/post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute, private router: Router, private postsServices: PostsService) { }

  ngOnInit() {
    this.post = new Post ('', '');
    const id = this.route.snapshot.params['id'];
    this.postsServices.getSinglePost(+id).then(
      (post: Post) => {
        this.post = post;
      }
    );
  }

  
  onLike() {

    this.post.loveIts++;
    
  }

  onDislike () {

    this.post.loveIts--;
    
  }

  onBack() {
    this.router.navigate(['/posts']);
  } 

}
