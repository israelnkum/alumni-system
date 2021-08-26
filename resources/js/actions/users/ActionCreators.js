import { Types } from './Types'

export const getAuthUser = (user) => {
  return {
    type: Types.GET_AUTH_USER,
    user
  }
}
