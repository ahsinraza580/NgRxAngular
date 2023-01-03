import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {getCounter} from "../state/counter.selectors";
import {AppState} from "../../store/app.state";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit{
  counter!:number;
  counterSubscription: Subscription | undefined
  counter$!: Observable<number>
  constructor(private store:Store<AppState>) {
  }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter)


    // this.store.select(getCounter).subscribe(counter =>{
    //   console.log("Counter Observalble called")
    //   this.counter = counter
    // })

  }

  // ngOnDestroy(): void {
  //   if(this.counterSubscription){
  //     this.counterSubscription?.unsubscribe();
  //   }
  // }

}
