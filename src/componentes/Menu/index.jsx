import styles from './Menu.module.scss'
import React from 'react'
import { home, maisCurtidas, maisVistas, novas, surpreendaMe } from '../../assets/icones'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt='' />
          <a href='/'>Início</a>
        </li>

        <li>
          <img src={maisCurtidas} alt='' />
          <a href='/'>Mais curtidas</a>
        </li>

        <li>
          <img src={maisVistas} alt='' />
          <a href='/'>Mais vistas</a>
        </li>

        <li>
          <img src={novas} alt='' />
          <a href='/'>Novas</a>
        </li>

        <li>
          <img src={surpreendaMe} alt='' />
          <a href='/'>Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}
