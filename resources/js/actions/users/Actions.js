import api from '../../utils/api'
import { addNewUser, getAllUsers, getAuthUser, getInitialData, updateUserInfo } from './ActionCreators'

export const handleGetAuthUser = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().get('/user/auth').then((res) => {
      dispatch(getAuthUser(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleChangePassword = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post('/user/change-password', data).then((res) => {
      dispatch(getAuthUser(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleAddNewUser = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post('/users', data).then((res) => {
      dispatch(addNewUser(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleGetAllUsers = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().get('/users', data).then((res) => {
      dispatch(getAllUsers(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleUpdateUser = (values) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post(`/users/${values.get('id')}`, values).then((res) => {
      dispatch(updateUserInfo(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleGetInitialData = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().get('/initial-data/').then((res) => {
      dispatch(getInitialData(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
