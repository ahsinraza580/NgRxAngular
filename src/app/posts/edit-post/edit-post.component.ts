import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {getPostbyId} from "../state/posts.selector";
import {Post} from "../../Model/posts.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {updatePost} from "../state/posts.actions";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy{


constructor(private route:ActivatedRoute,private store:Store<AppState> ,private router:Router) {
}
post:Post
postForm:FormGroup;
postSubscription:Subscription;
  ngOnInit(): void {
  this.route.paramMap.subscribe((params)=>{
    console.log(params.get('id'))
    const id = params.get('id')
    this.postSubscription = this.store.select(getPostbyId, {id}).subscribe((data)=>{
      this.post = data
      this.createForm()
      console.warn(this.post)
    })
  })
  }

  createForm()
  {
    this.postForm = new FormGroup({
      title:new FormControl(this.post.title,[Validators.required,Validators.minLength(6)]),
      description:new FormControl(this.post.description,[Validators.required,Validators.minLength(10)])
    })
  }
  onUpdatePost(){
   if(!this.postForm.valid){
     return;
   }
   const title = this.postForm.value.title;
   const description = this.postForm.value.description;

   const post:Post = {
     id:this.post.id,
     title,
     description,
   }

   // @ts-ignore
    this.store.dispatch(updatePost({post}))
    this.postForm.reset()
    this.router.navigate(['posts'])

  }

  ngOnDestroy(): void {
    if(this.postSubscription){
      this.postSubscription.unsubscribe()
    }
  }

  // @ts-ignore
  OnDescriptionError() {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors['required']) {
        return 'Description is Required'
      }
      if (descriptionForm.errors['minlength']) {
        return 'Description Should be minimum of 10 characters '
      }
    }
  }


}
