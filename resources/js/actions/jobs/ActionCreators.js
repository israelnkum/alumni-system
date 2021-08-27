import { Types } from './Types'

export function addNewJob (payload) {
  return {
    type: Types.ADD_JOB,
    payload
  }
}

export function getAllJobs (payload) {
  return {
    type: Types.GET_ALL_JOBS,
    payload
  }
}

export function deleteJob (id) {
  return {
    type: Types.DELETE_JOB,
    id
  }
}

export function updateJob (payload) {
  return {
    type: Types.UPDATE_JOB,
    payload
  }
}
