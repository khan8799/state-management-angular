import { Component, OnInit } from '@angular/core';
import { Post } from './state/post.state';
import { AppState } from '../store/appState';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPosts } from './state/post.selector';
import { deletePost } from './state/post.actions';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

  onDelete(id: number | undefined) {
    this.store.dispatch(deletePost({id: Number(id)}));
  }
}
