import {combineReducers, configureStore} from '@reduxjs/toolkit'

import { appSlice } from './appSlice';
import {rnmApi} from './rnmApi'

const rootReducer = combineReducers({
    appSlice: appSlice.reducer,
    [rnmApi.reducerPath]: rnmApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rnmApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch