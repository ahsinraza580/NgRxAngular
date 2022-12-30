import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {counterState} from "../state/counter.state";
import {customIncrement} from "../state/counter.actions";

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent {

  constructor(private store:Store<{counter:counterState}>) {
  }

  value: number | undefined

  onAdd(){
    // @ts-ignore
    this.store.dispatch(customIncrement({value: +this.value}))
    console.log(this.value)
  }

}
