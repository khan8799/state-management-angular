import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { addCount, decrement, increment, reset } from "./counter.actions";

const _counterReducer = createReducer(initialState,
    on(increment, state => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, state => {
        return {
            ...state,
            counter: state.counter > 0 ?  state.counter - 1 : 0 
        }
    }),
    on(reset, state => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(addCount, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.count
        }
    })
);

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}