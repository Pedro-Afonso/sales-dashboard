import { FC, ReactNode } from 'react'
import Head from 'next/head'

import styles from './BasicLayout.module.scss'

import { Drawer } from '@/components'

interface IBasicLayoutProps {
  children: ReactNode
}

export const BasicLayout: FC<IBasicLayoutProps> = ({ children }) => {
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

        <section className={styles.content}>{children}</section>
      </main>
    </>
  )
}
