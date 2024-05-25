import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './post/add-post/add-post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'post',
    component: PostComponent,
    children: [
      {
        path: 'add',
        component: AddPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
