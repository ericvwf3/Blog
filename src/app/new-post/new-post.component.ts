import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

 postNew : FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postNew = this.formBuilder.group({
      title: ['', Validators.required],
      content: ''
    });
  }

  onSavePost() {
    const title = this.postNew.get('title').value;
    const content = this.postNew.get('content').value;       
    const postNew = new Post(title, content);
    postNew.content = content;
    this.postsService.createNewPost(postNew);
    this.router.navigate(['/posts']);
  }

  

  

}
