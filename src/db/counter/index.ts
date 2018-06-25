import { Reducer, Action } from 'redux'

export interface IncrementAction extends Action {
  type: 'INCREMENT'
  payload: {
    stepSize: number
  }
}

export interface DecrementAction extends Action {
  type: 'DECREMENT'
  payload: {
    stepSize: number
  }
}

export type CounterActions = IncrementAction | DecrementAction

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export const reducer: Reducer<CounterState> = (
  state: CounterState = initialState,
  action: CounterActions
) => {
  switch (action.type) {
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload.stepSize }

    case 'INCREMENT':
      return { ...state, count: state.count - action.payload.stepSize }

    default:
      return state
  }
}
