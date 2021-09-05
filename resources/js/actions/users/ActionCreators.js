import { Types } from './Types'

export const getAuthUser = (user) => {
  return {
    type: Types.GET_AUTH_USER,
    user
  }
}

export const addNewUser = (user) => {
  return {
    type: Types.ADD_USER,
    user
  }
}

export function updateUserInfo (payload) {
  return {
    type: Types.UPDATE_USER,
    payload
  }
}

export const getAllUsers = (payload) => {
  return {
    type: Types.GET_ALL_USERS,
    payload
  }
}

export const getInitialData = (payload) => {
  return {
    type: Types.GET_INITIAL_DATA,
    payload
  }
}
