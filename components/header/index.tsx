'use client'

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import styles from './page.module.scss'

const Header = () => {
    const session = useSession()
  return (
    <main className={styles.header}>
        {session?.data && (
        <Link className={styles.header_link} href='#' onClick={() => signOut({callbackUrl: '/'})}>Выйти</Link>
        )}
        </main>
  )
}

export default Header