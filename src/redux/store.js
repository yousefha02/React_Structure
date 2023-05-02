import { configureStore , combineReducers} from '@reduxjs/toolkit'
import languageRreducer from './languageSlice';

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
  import storage from 'redux-persist/lib/storage';

  const persistConfig = {
    key: 'root1',
    version: 1,
    storage,
  }

  const rootReducer=combineReducers({
    admin:persistReducer(persistConfig, languageRreducer),
  })

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const  persistor = persistStore(store)