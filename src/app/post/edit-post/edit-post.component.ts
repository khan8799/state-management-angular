import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/appState';
import { Post } from '../state/post.state';
import { getPostById } from '../state/post.selector';
import { updatePost } from '../state/post.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {
  editForm!: FormGroup;
  postId!: any;
  post!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.postId = params.get('id');
      this.getPostById();
    });
  }

  getPostById() {
    this.store.select(getPostById(this.postId)).subscribe(
      res => {
        this.post = res;
        this.initializeForm();
      }
    )
  }

  initializeForm(): void {
    this.editForm = this.fb.group({
      title: [this.post?.title],
      description: [this.post?.description]
    });
  }
  

  onSubmit(): void {
    const post: Post = {
      id: this.post.id,
      title: this.editForm.value.title,
      description: this.editForm.value.description
    }
    this.editForm.reset();

    this.store.dispatch(updatePost({post}))
  }


}
