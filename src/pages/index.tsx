import { Heading } from '@/components'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <section className={styles.dashboard}>
      <Heading
        title={`Olá, Sales Dashboard`}
        subtitle="Confira seus resultados de hoje"
      />

      <section className={styles.columns}>
        <section className={styles.column1}></section>
        <section className={styles.column2}></section>
      </section>
    </section>
  )
}
