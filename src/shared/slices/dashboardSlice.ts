import { createSlice } from '@reduxjs/toolkit'

import { dashboardApi } from '@/services'
import { TOrder, TSettings, TProduct } from '@/types'

type TDashboardState = {
  orders: TOrder[]
  products: TProduct[]
  settings: TSettings | null
}

const initialState: TDashboardState = {
  orders: [],
  products: [],
  settings: {
    companyName: '',
    salesGoal: 0
  }
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        dashboardApi.endpoints.getOrders.matchFulfilled,
        (state, { payload }) => {
          state.orders = payload.orders
        }
      )
      .addMatcher(
        dashboardApi.endpoints.getProducts.matchFulfilled,
        (state, { payload }) => {
          state.products = payload.products
        }
      )
      .addMatcher(
        dashboardApi.endpoints.getSettings.matchFulfilled,
        (state, { payload }) => {
          state.settings = payload.settings
        }
      )
  }
})

export const { reducer: dashboardReducer } = dashboardSlice
