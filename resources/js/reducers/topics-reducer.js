import { Types } from '../actions/forum/Types'
const initialState = {
  topics: [],
  topicDetail: {}
}

const ForumReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_TOPICS:
      return {
        ...state, topics: action.payload
      }

    case Types.TOPIC_DETAIL:
      return {
        ...state, topicDetail: action.payload
      }

    case Types.ADD_TOPIC:
      return {
        ...state,
        topics: state.topics.concat(action.payload)
      }

    case Types.UPDATE_TOPIC:
      return {
        ...state,
        topics: state.topics.map((topic) => {
          return topic.id === action.payload.id ? action.payload : topic
        })
      }

    case Types.DELETE_TOPIC:
      return {
        ...state,
        topics: state.topics.filter((topic) => topic.id !== action.id)
      }

    default:
      return state
  }
}
export default ForumReducer
