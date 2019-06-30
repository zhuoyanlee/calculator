import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  LoadCounters = '[Counter] Load Counters',
  Increment = "Increment",
  Decrement = "Decrement"
}

export class LoadCounters implements Action {
  readonly type = CounterActionTypes.LoadCounters;
}
export class IncrementCounters implements Action {
  readonly type = CounterActionTypes.Increment;
}
export class DecrementCounters implements Action {
  readonly type = CounterActionTypes.Decrement;
}
export type CounterActions = LoadCounters;
