import { Types } from './Types'

export function getUpcomingEvents (payload) {
  return {
    type: Types.GET_UPCOMING_EVENTS,
    payload
  }
}

export function getAvailableJobs (payload) {
  return {
    type: Types.GET_AVAILABLE_JOBS,
    payload
  }
}

export function getAllTopics (payload) {
  return {
    type: Types.GET_LANDING_TOPICS,
    payload
  }
}
