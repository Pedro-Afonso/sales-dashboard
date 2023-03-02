import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { dashboardReducer } from '@/slices/dashboardSlice'

import { dashboardApi } from '@/services'

const rootReucer = combineReducers({
  dashboard: dashboardReducer,
  [dashboardApi.reducerPath]: dashboardApi.reducer
})

export const setupStore = () =>
  configureStore({
    reducer: rootReucer,
    middleware: gDM => gDM().concat(dashboardApi.middleware)
  })

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
