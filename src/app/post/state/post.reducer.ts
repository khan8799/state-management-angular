import { createReducer, on } from "@ngrx/store";
import { initialState } from "./post.state";
import { addPost, deletePost, updatePost } from "./post.actions";

const _postReducer = createReducer(initialState,
    on(addPost, (state, action) => {
        const post = {...action.post};

        post.id = state.posts.length + 1;

        return {
            ...state,
            posts: [
                ...state.posts,
                post
            ]
        }
    }),
    on(updatePost, (state, action) => {
        const updatedPost = state.posts.map(post => post.id == action.post.id ? action.post : post);

        return {
            ...state,
            posts: updatedPost
        }
    }),
    on(deletePost, (state, action) => {
        const updatedPost = state.posts.filter(post => post.id != action.id);

        return {
            ...state,
            posts: updatedPost
        }
    })
)

export function postReducer(state: any, action: any) {
    return _postReducer(state, action);
}