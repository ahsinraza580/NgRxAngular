import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {decrement, increment, reset} from "../state/counter.actions";
import {counterState} from "../state/counter.state";

@Component({
  selector: 'app-counter-btn',
  templateUrl: './counter-btn.component.html',
  styleUrls: ['./counter-btn.component.scss']
})
export class CounterBtnComponent {


  constructor(private store:Store<{counter:counterState}>) {
  }

  onIncrement()
  {
    this.store.dispatch(increment())
  }

  onDecrement()
  {
    this.store.dispatch(decrement())
  }

  onReset()
  {
    this.store.dispatch(reset())
  }

}
