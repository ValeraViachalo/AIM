import React from 'react'
import styles from './styles.module.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bigLogo}>
        <Image fill src="/images/Footer.svg" alt="logo" />
      </div>
    </footer>
  )
}
