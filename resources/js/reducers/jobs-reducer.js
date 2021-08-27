import { Types } from '../actions/jobs/Types'
const initialState = {
  jobs: []
}

const JobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_JOBS:
      return {
        ...state, jobs: action.payload
      }

    case Types.ADD_JOB:
      return {
        ...state,
        jobs: state.jobs.concat(action.payload)
      }

    case Types.UPDATE_JOB:
      return {
        ...state,
        jobs: state.jobs.map((job) => {
          return job.id === action.payload.id ? action.payload : job
        })
      }

    case Types.DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.id)
      }

    default:
      return state
  }
}
export default JobsReducer
