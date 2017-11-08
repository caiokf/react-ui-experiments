import { fromJS } from 'immutable'

export const initialState = fromJS({ })

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
