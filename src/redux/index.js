import { createStore } from 'redux'

// Action Constants
const INCREMENT_CLICKS = 'INCREMENT_CLICKS'

// Action Creators
export const incrementClicks = () => ({
  type: INCREMENT_CLICKS
})

// Reducers
const initialState = {
  clicks: 0
}

function clicksReducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT_CLICKS:
      return { ...state, clicks: state.clicks + 1}
    default:
      return state
  }
}

// Store
export const store = createStore(clicksReducer)
