import { Component } from '@angular/core';
import { Post } from '../state/post.state';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/appState';
import { addPost } from '../state/post.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  addForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.addForm = this.fb.group({
      title: [],
      description: []
    });
  }

  onSubmit(): void {
    const post: Post = {
      title: this.addForm.value.title,
      description: this.addForm.value.description
    }

    this.store.dispatch(addPost({post}));
  }
}
