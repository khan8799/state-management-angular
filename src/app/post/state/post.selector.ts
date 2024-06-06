import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.state";

const getPostState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(getPostState, (state) => {
    return state.posts;
})

export const getPostById = (id: number) => createSelector(getPostState, (state) => {
    return state.posts.find(post => post.id == id);
})