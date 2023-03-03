import { FC, ReactNode } from 'react'

import styles from './Card.module.scss'

interface ICardProps {
  title: string
  subtitle: string
  content: string
  icon: ReactNode
}

export const Card: FC<ICardProps> = ({ title, subtitle, content, icon }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <h5>{content}</h5>
      <div className={styles.icon}>{icon}</div>
    </div>
  )
}
