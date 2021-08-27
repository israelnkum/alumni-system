import { Types } from './Types'

export function addNewEvent (payload) {
  return {
    type: Types.ADD_EVENT,
    payload
  }
}

export function getAllEvents (payload) {
  return {
    type: Types.GET_ALL_EVENTS,
    payload
  }
}

export function deleteEvent (id) {
  return {
    type: Types.DELETE_EVENT,
    id
  }
}

export function updateEvent (payload) {
  return {
    type: Types.UPDATE_EVENT,
    payload
  }
}
