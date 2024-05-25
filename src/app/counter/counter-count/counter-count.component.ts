import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { addCount } from '../state/counter.actions';

@Component({
  selector: 'app-counter-count',
  templateUrl: './counter-count.component.html',
  styleUrls: ['./counter-count.component.scss']
})
export class CounterCountComponent {
  count!: number;

  constructor(
    private store: Store<{counter: CounterState}>
  ) {}

  onAddCount(): void {
    this.store.dispatch(addCount({count: this.count}));
    this.count = 0;
  }
}
