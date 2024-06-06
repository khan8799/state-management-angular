export interface Post {
    id?: number;
    title: string;
    description: string;
}

export interface PostState {
    posts: Post[];
}

export const initialState: PostState = {
    posts: [
        {
            id: 1,
            title: 'Sample Title 1',
            description: 'Sample Description 1'
        },
        {
            id: 2,
            title: 'Sample Title 2',
            description: 'Sample Description 2'
        }
    ]
}