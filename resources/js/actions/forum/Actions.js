import api from '../../utils/api'
import { addNewEvent, deleteEvent, getAllEvents, updateEvent } from './ActionCreators'

// Add new Event
export const handleAddNewEvent = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post('/events', payload).then((res) => {
      dispatch(addNewEvent(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// Get all Event
export const handleGetAllEvent = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().get('/events').then((res) => {
      dispatch(getAllEvents(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// Delete Event
export const handleDeleteEvent = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().delete(`/events/${id}`).then((res) => {
      dispatch(deleteEvent(id))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// Update Event
export const handleUpdateEvent = (values) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post(`/events/${values.get('id')}`, values).then((res) => {
      dispatch(updateEvent(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
