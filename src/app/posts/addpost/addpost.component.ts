import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../Model/posts.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {addPost} from "../state/posts.actions";

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit{
  postForm!:FormGroup

  constructor(private store:Store<AppState>) {
  }
  ngOnInit(): void {
    this.postForm = new FormGroup({
      title:new FormControl('',
        [Validators.required , Validators.minLength(6)]),
      description:new FormControl('',
        [Validators.required,Validators.minLength(10)])
    })
  }

  onAddPost(){
    if(!this.postForm.valid){
      return;
    }
    // console.log(this.postForm.value)

    const post:Post = {
      title:this.postForm.value.title,
      description:this.postForm.value.description
    }

    this.store.dispatch(addPost({post}))
    this.postForm.reset();
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
