// Add new Event
import api from '../../utils/api'
import { getAllTopics, getAvailableJobs, getUpcomingEvents } from './ActionCreators'

export const handleGetUpcomingEvents = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().get('/landing/events', payload).then((res) => {
      dispatch(getUpcomingEvents(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleGetAvailableJobs = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().get('/landing/jobs', payload).then((res) => {
      dispatch(getAvailableJobs(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleGetLandingTopics = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().get('/landing/topics', payload).then((res) => {
      dispatch(getAllTopics(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
