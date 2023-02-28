import styles from './Drawer.module.scss'

import {
  MdOutlineDashboardCustomize,
  MdOutlineShoppingBag,
  MdAttachMoney,
  MdInsertChartOutlined,
  MdOutlineSettings
} from 'react-icons/md'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { EPortalLocation, Portal } from '../Portal'
import { useEffect, useState } from 'react'

const routes: { [key: string]: string[] } = {
  '/': ['/'],
  '/products': ['/products'],
  '/sales': ['/sales'],
  '/report': ['/report'],
  '/settings': ['/settings']
}

const links = [
  {
    name: 'painel',
    icon: <MdOutlineDashboardCustomize />,
    url: routes['/'][0]
  },
  {
    name: 'produtos',
    icon: <MdOutlineShoppingBag />,
    url: routes['/products'][0]
  },
  { name: 'vendas', icon: <MdAttachMoney />, url: routes['/sales'][0] },
  {
    name: 'relatório',
    icon: <MdInsertChartOutlined />,
    url: routes['/report'][0]
  },
  {
    name: 'configurações',
    icon: <MdOutlineSettings />,
    url: routes['/settings'][0]
  }
]

export const Drawer = () => {
  const { route } = useRouter()

  const [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    setIsFirstRender(false)
  }, [])

  const renderLinks = links.map((link, i) => (
    <li key={i}>
      <Link
        href={link.url}
        className={classNames({
          [styles.active]: routes[link.url].includes(route)
        })}
      >
        <div className={styles.icon}>{link.icon}</div>
        <span>{link.name}</span>
      </Link>
    </li>
  ))

  const drawer = (
    <section className={styles.drawer}>
      <div className={styles.image}>
        <Image src="/logo.png" alt="dashboard" width="100" height="100" />
      </div>
      <nav className={styles.navigation}>
        <ul>{renderLinks}</ul>
      </nav>
    </section>
  )

  if (!isFirstRender) {
    return Portal({
      wrapper: drawer,
      portalLocation: EPortalLocation.SIDEBAR
    })
  } else {
    return null
  }
}
