import { MdShoppingBag } from 'react-icons/md'

import { useAppSelector } from '@/hooks'
import { formatCurrency } from '@/utils'
import { Card } from '@/components'

import styles from './Cards.module.scss'

export const Cards = () => {
  const { cumulate, today } = useAppSelector(state => state.dashboard)

  return (
    <div className={styles.cards}>
      <Card
        title="Pedidos"
        subtitle="Total em pedidos hoje"
        content={formatContent(today.totalOrders)}
        icon={<MdShoppingBag />}
      />
      <Card
        title="Vendas"
        subtitle="Total das vendas de hoje"
        content={formatContent(today.totalSales)}
        icon={<MdShoppingBag />}
      />
      <Card
        title="Acumulado"
        subtitle="Total em vendas"
        content={formatContent(cumulate)}
        icon={<MdShoppingBag />}
      />
    </div>
  )
}

function formatContent(value: number) {
  return formatCurrency(value).toString()
  // Math.floor(value).toString()
}
