import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import UsersReducer from './users-reducer'
import EventsReducer from './events-reducer'

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: [
    'UsersReducer',
    'EventsReducer'
  ]
}

const rootReducer = combineReducers({
  UsersReducer,
  EventsReducer
})

export default persistReducer(persistConfig, rootReducer)
