import api from '../../utils/api'
import { getAuthUser } from './ActionCreators'

export const handleGetAuthUser = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().get('/users/auth').then((res) => {
      dispatch(getAuthUser(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleChangePassword = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post('/users/change-password', data).then((res) => {
      dispatch(getAuthUser(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
