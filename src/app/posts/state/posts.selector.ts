import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PostsState} from "./posts.state";


const getPostState = createFeatureSelector<PostsState>('posts')

export const getPosts = createSelector(getPostState,state =>{
  return state.posts;
})


export const getPostbyId = createSelector(getPostState,(state,props)=>{
  const post  = state.posts.find((post)=> post.id === props.id)
  return post
})

