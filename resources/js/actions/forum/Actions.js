import api from '../../utils/api'
import { addNewTopic, deleteTopic, getAllTopics, topicDetail, updateTopic } from './ActionCreators'

// Add new Topic
export const handleAddNewTopic = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post('/forum/topics', payload).then((res) => {
      dispatch(addNewTopic(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// Get all Topic
export const handleGetAllTopics = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().get('/forum/topics').then((res) => {
      dispatch(getAllTopics(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// Delete Topic
export const handleDeleteTopic = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().delete(`/forum/topics/${id}`).then((res) => {
      dispatch(deleteTopic(id))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// Update Topic
export const handleUpdateTopic = (values) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post(`/forum/topics/${values.get('id')}`, values).then((res) => {
      dispatch(updateTopic(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// Update Topic
export const handleTopicDetail = (topicId) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().get(`/forum/topics/${topicId}`).then((res) => {
      dispatch(topicDetail(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
