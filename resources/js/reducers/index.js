import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import UsersReducer from './users-reducer'

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist: [
        'UsersReducer'
    ]
}

const rootReducer = combineReducers({
    UsersReducer
})

export default persistReducer(persistConfig, rootReducer)
