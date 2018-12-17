import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Array<Object> = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste provident, incidunt quidem ipsam soluta vitae repellat quaerat dignissimos consequuntur! Labore, non harum minima voluptatem ipsa ratione tempora temporibus amet?',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste provident, incidunt quidem ipsam soluta vitae repellat quaerat dignissimos consequuntur! Labore, non harum minima voluptatem ipsa ratione tempora temporibus amet?',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste provident, incidunt quidem ipsam soluta vitae repellat quaerat dignissimos consequuntur! Labore, non harum minima voluptatem ipsa ratione tempora temporibus amet?',
      loveIts: 0,
      created_at: new Date()
    },
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
