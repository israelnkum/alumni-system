import { Types } from '../actions/events/Types'
const initialState = {
  events: []
}

const EventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_EVENTS:
      return {
        ...state, events: action.payload
      }

    case Types.ADD_EVENT:
      return {
        ...state,
        events: state.events.concat(action.payload)
      }

    case Types.UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map((event) => {
          return event.id === action.payload.id ? action.payload : event
        })
      }

    case Types.DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.id)
      }

    default:
      return state
  }
}
export default EventsReducer
