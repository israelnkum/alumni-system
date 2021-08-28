import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import UsersReducer from './users-reducer'
import EventsReducer from './events-reducer'
import JobsReducer from './jobs-reducer'
import TopicsReducer from './topics-reducer'

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: [
    'UsersReducer',
    'EventsReducer',
    'JobsReducer',
    'TopicsReducer'
  ]
}

const rootReducer = combineReducers({
  UsersReducer,
  EventsReducer,
  JobsReducer,
  TopicsReducer
})

export default persistReducer(persistConfig, rootReducer)
