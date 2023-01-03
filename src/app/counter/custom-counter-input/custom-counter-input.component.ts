import { Component,OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {counterState} from "../state/counter.state";
import {ChangeText, customIncrement} from "../state/counter.actions";
import {getCompany} from "../state/counter.selectors";
import {Observable} from "rxjs";
import {AppState} from "../../store/app.state";

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit{

  constructor(private store:Store<AppState>) {
  }

  value!:number;
  Company!:string
  Company$!:Observable<string>

  onAdd(){
    // @ts-ignore
    this.store.dispatch(customIncrement({value: +this.value}))
    console.log(this.value)
  }

  ngOnInit(): void {
    this.Company$ = this.store.select(getCompany);

    // this.store.select(getCompany).subscribe((Company)=>{
    //   console.log("Company Name Observable called")
    //   this.Company = Company;
    // })
  }

  onChangeText()
  {
     this.store.dispatch(ChangeText());
  }

}
