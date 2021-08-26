import { Types } from '../actions/users/Types'
const initialState = {
  users: [],
  authUser: {}
}

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_USERS:
      return {

      }
    case Types.GET_AUTH_USER:
      return { ...state, authUser: action.user }

    default:
      return state
  }
}
export default UsersReducer
