import { FC, ReactNode } from 'react'
import Head from 'next/head'

import styles from './BasicLayout.module.scss'

import { Drawer } from '@/components'
import {
  useGetOrdersQuery,
  useGetProductsQuery,
  useGetSettingsQuery
} from '@/services'

interface IBasicLayoutProps {
  children: ReactNode
}

export const BasicLayout: FC<IBasicLayoutProps> = ({ children }) => {
  const { isLoading: isLoadingProducts } = useGetProductsQuery()
  const { isLoading: isLoadingOrders } = useGetOrdersQuery()
  const { isLoading: isLoadingSettings } = useGetSettingsQuery()

  const isLoading = isLoadingOrders || isLoadingProducts || isLoadingSettings

  return (
    <>
      <Head>
        <title>Sales - Dashboard</title>
        <meta name="description" content="Sales Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Drawer />

        <section className={styles.content}>
          {isLoading ? <p>Carregando...</p> : <p>Carregou</p>}
          {children}
        </section>
      </main>
    </>
  )
}
