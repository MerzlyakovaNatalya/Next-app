'use client'
import Link from "next/link"
import styles from './page.module.scss'
import { signIn } from "next-auth/react"

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.main_text}>Для просмотра сайта необходимо авторизоваться</p>
      <Link className={styles.main_link} href='/signin'>Авторизация</Link>
    </main>
  )
}
