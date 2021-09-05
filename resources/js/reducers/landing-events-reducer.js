import { Types } from '../actions/landing/Types'
const initialState = {
  events: [],
  jobs: [],
  topics: []
}

const LandingEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_UPCOMING_EVENTS:
      return {
        ...state, events: action.payload
      }

    case Types.GET_AVAILABLE_JOBS:
      return {
        ...state, jobs: action.payload
      }

    case Types.GET_LANDING_TOPICS:
      return {
        ...state, topics: action.payload
      }

    default:
      return state
  }
}
export default LandingEventsReducer
