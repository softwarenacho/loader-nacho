import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  icon: string
}

export const Loader = ({ icon }: Props) => (
  <div className={styles.listener}>
    <div className={styles.border} />
    <div className={styles.circles}>
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
    </div>
    <img className={styles.icon} src={icon} alt='Loading Icon' />
  </div>
)
