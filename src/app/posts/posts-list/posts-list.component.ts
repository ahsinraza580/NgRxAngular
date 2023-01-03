import { Component,OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {Observable} from "rxjs";
import {Post} from "../../Model/posts.model";
import {getPosts} from "../state/posts.selector";
import {deletePost} from "../state/posts.actions";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit{

  posts!:Observable<Post[]>
  constructor(private store:Store<AppState>) {
  }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }

  onDeletePost(id:string){
    if(confirm("Are you sure you want to Delete this Record")){
      console.warn("Deleted")
    }
   this.store.dispatch(deletePost({id}))
}

}
