import { createReducer, on } from '@ngrx/store';
import { testAction } from './test.actions';

export interface TestState {
  test: boolean;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const inititalState: TestState = {
  test: false,
  status: 'pending',
};

// -----

export const testReducer = createReducer(
  inititalState,
  on(testAction, (state) => {
    console.log('Original state: ' + JSON.stringify(state));
    return {
      ...state,
      test: true,
    };
  })
);
