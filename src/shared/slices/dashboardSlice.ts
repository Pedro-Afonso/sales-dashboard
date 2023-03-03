import { createSlice, isAnyOf } from '@reduxjs/toolkit'

import { dashboardApi } from '@/services'
import { TOrder, TSettings, TProduct } from '@/types'
import { checkIfDateIsToday } from './helpers'

type TDashboardState = {
  orders: TOrder[]
  products: TProduct[]
  settings: TSettings | null
  today: {
    totalOrders: number
    totalSales: number
  }
  cumulate: number
}

const initialState: TDashboardState = {
  orders: [],
  products: [],
  settings: {
    companyName: '',
    salesGoal: 0
  },
  today: {
    totalOrders: 0,
    totalSales: 0
  },
  cumulate: 0
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
      .addMatcher(
        isAnyOf(
          dashboardApi.endpoints.getProducts.matchFulfilled,
          dashboardApi.endpoints.getOrders.matchFulfilled
        ),
        state => {
          const canProceed =
            state.orders.length > 0 && state.products.length > 0

          if (!canProceed) return

          const mapPrices = new Map()
          state.products.forEach(product =>
            mapPrices.set(product.code, product.price)
          )

          const todayOrders = []
          let totalSales = 0
          let cumulate = 0

          for (let i = 0; i < state.orders.length; i++) {
            if (checkIfDateIsToday(state.orders[i].date)) {
              todayOrders.push(state.orders[i])
              totalSales += mapPrices.get(state.orders[i].product)
            }
            cumulate += mapPrices.get(state.orders[i].product)
          }

          state.today.totalOrders = todayOrders.length
          state.today.totalSales = totalSales
          state.cumulate = cumulate
        }
      )
  }
})

export const { reducer: dashboardReducer } = dashboardSlice
