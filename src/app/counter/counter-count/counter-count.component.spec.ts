import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCountComponent } from './counter-count.component';

describe('CounterCountComponent', () => {
  let component: CounterCountComponent;
  let fixture: ComponentFixture<CounterCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterCountComponent]
    });
    fixture = TestBed.createComponent(CounterCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
