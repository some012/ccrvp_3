import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from './features/counter/counterSlice'
import userApi from './templates/labs/Lab9/users.js';
import usersReducer from './components/reducers/usersReducers.js'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)

export default store