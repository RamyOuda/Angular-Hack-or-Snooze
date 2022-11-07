import { createAction, createReducer, on } from '@ngrx/store';

export const testReducer = createReducer(
  { test: true },
  on(createAction('[Test] Test Reducer'), (state) => {
    console.log('Original state: ' + JSON.stringify(state));
    return {
      ...state,
      test: !state.test,
    };
  })
);
