import api from '../../utils/api'
import { addNewJob, deleteJob, getAllJobs, updateJob } from './ActionCreators'

// Add new Job
export const handleAddNewJob = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post('/jobs', payload).then((res) => {
      dispatch(addNewJob(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// Get all Job
export const handleGetAllJob = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().get('/jobs').then((res) => {
      dispatch(getAllJobs(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// Delete Job
export const handleDeleteJob = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().delete(`/jobs/${id}`).then((res) => {
      dispatch(deleteJob(id))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// Update Job
export const handleUpdateJob = (values) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post(`/jobs/${values.get('id')}`, values).then((res) => {
      dispatch(updateJob(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
