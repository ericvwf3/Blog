import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';
import Datasnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }  
  
  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: Datasnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
      }
    );
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts;
  }

  removePost(post: Post) {
    const postIndexToremove = this.posts.findIndex(
      (postE1)  => {
        if(postE1 === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToremove, 1);
    this.savePosts();
    this.emitPosts();
  }

  
}
