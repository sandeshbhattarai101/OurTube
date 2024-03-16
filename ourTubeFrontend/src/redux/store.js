import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import videoReducer from './videoSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

// REDUX-PERSIST IS USED CAUSE EVERY TIME THE PAGE REFRESHES THE DATA GETS REMOVED
// TO KEEP PERSISTING DATA IN BETWEEN REFRESHES // stores data in local storage

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}


const rootReducer = combineReducers({user: userReducer, video: videoReducer})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
