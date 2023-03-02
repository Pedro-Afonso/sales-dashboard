import { useAppSelector } from '@/hooks'
import { MdShoppingBag } from 'react-icons/md'
import { Card } from '../Card'

export const Cards = () => {
  const { cumulate, today } = useAppSelector(state => state.dashboard)

  return (
    <div>
      <Card
        title="Pedidos"
        subtitle="Total em pedidos hoje"
        content={Math.floor(today.totalOrders).toString()}
        icon={<MdShoppingBag />}
      />
      <Card
        title="Vendas"
        subtitle="Total das vendas de hoje"
        content={Math.floor(today.totalSales).toString()}
        icon={<MdShoppingBag />}
      />
      <Card
        title="Acumulado"
        subtitle="Total em vendas"
        content={Math.floor(cumulate).toString()}
        icon={<MdShoppingBag />}
      />
    </div>
  )
}
