import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './components/reducers/usersReducers'
import counterReducer from './features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
  
})