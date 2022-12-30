import {counterState} from "../counter/state/counter.state";
import {PostsState} from "../posts/state/posts.state";
import {counterReducer} from "../counter/state/counter.reducer";
import {postsReducer} from "../posts/state/posts.reducer";


export interface AppState{
  counter:counterState,
  posts:PostsState
}


export const appReducer = {
  counter:counterReducer,
  posts:postsReducer
}
