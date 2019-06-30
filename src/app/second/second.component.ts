import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { DecrementCounters, IncrementCounters } from '../actions/counter.actions';
import { Observable } from 'rxjs';
import { selectCounter, selectLastCounter } from '../selectors/counter.selector';
import { CounterState } from '../reducers/counter.reducer';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  count$: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    
  ) { 
    
   
  }
  decrement(): void {
    this.store.dispatch(new DecrementCounters());
 }
 increment(): void {
    this.store.dispatch(new IncrementCounters());
 }
  ngOnInit() {
    this.count$ = this.store.pipe(select(selectLastCounter));
  }
  
}
