import { Types } from '../actions/users/Types'
const initialState = {
  users: [],
  authUser: {},
  initialData: {}
}

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_USERS:
      return {
        ...state, users: action.payload
      }
    case Types.GET_AUTH_USER:
      return { ...state, authUser: action.user }

    case Types.ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.payload)
      }

    case Types.GET_INITIAL_DATA:
      return {
        ...state,
        initialData: action.payload
      }

    case Types.UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id === action.payload.id ? action.payload : user
        })
      }

    default:
      return state
  }
}
export default UsersReducer
