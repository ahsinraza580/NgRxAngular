import {createReducer, on} from "@ngrx/store";
import {initialState} from "./posts.state";
import {addPost, deletePost, updatePost} from "./posts.actions";
import {state} from "@angular/animations";



const _postsReducer = createReducer(
  initialState,
  on(addPost,(state ,action) => {
    let post = {...action.post}

    post.id = (state.posts.length + 1).toString();
    return{
      ...state,
      posts:[...state.posts,post]
    }
  }),on(updatePost,(state,action)=>{
    const updatedPost = state.posts.map((post)=>{
      return action.post.id === post.id ? action.post : post
    })
    return{
      ...state,
      posts:updatedPost

    }
  }),on(deletePost,(state,action)=>{
    const deleteRec = state.posts.filter((post)=>{
      return action.id !== post.id;
    })
    return {
      ...state,
      posts:deleteRec

    }
  })

)
export function postsReducer(state:any,action:any){
  return _postsReducer(state,action)

}
