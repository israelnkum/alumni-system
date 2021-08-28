import { Types } from './Types'

export function addNewTopic (payload) {
  return {
    type: Types.ADD_TOPIC,
    payload
  }
}

export function getAllTopics (payload) {
  return {
    type: Types.GET_ALL_TOPICS,
    payload
  }
}

export function deleteTopic (id) {
  return {
    type: Types.DELETE_TOPIC,
    id
  }
}

export function updateTopic (payload) {
  return {
    type: Types.UPDATE_TOPIC,
    payload
  }
}

export function topicDetail (payload) {
  return {
    type: Types.TOPIC_DETAIL,
    payload
  }
}
