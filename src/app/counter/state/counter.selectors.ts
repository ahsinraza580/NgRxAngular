import {createFeatureSelector, createSelector} from "@ngrx/store";
import {counterState} from "./counter.state";


const getCounterState = createFeatureSelector<counterState>('counter')

export const getCounter = createSelector(getCounterState,state=>{
  return state.counter
})

export const getCompany = createSelector(getCounterState,state =>{
  return state.Company
})
