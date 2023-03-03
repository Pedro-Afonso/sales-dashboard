import { TOrder, TProduct, TSettings } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dashboardApi = createApi({
  reducerPath: 'dashboardPath',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000'
  }),
  endpoints: builder => ({
    getProducts: builder.query<{ products: TProduct[] }, void>({
      query: () => 'api/products'
    }),
    getOrders: builder.query<{ orders: TOrder[] }, void>({
      query: () => 'api/orders'
    }),
    getSettings: builder.query<{ settings: TSettings }, void>({
      query: () => 'api/config'
    })
  })
})

export const { useGetProductsQuery, useGetOrdersQuery, useGetSettingsQuery } =
  dashboardApi
