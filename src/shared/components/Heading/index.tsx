import { FC } from 'react'

import styles from './Heading.module.scss'

interface IHeadingProps {
  title: string
  subtitle?: string
}

export const Heading: FC<IHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.heading}>
      <h1>{title}</h1>
      <h2 className="h4">{subtitle}</h2>
    </div>
  )
}
