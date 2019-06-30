import { createSelector } from '@ngrx/store';
import { CounterState } from '../reducers/counter.reducer';
import { State } from '../reducers';

  export const selectCounter = (state: State) => state.counter.count;

  export const selectLastCounter = createSelector(
    selectCounter,
    (state: number) => state
  );

