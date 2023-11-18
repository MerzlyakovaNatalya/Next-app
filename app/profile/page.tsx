// 'use client'

import { authConfig } from "@/configs/auth"
import { getServerSession } from "next-auth"
import styles from './page.module.scss'

const Profile = async () => {
     const session = await getServerSession(authConfig)
    return (
        <div className={styles.profile}>
            <h1 className={styles.profile_title}>Добро пожаловать!</h1>
            <p className={styles.profile_text}>Ваш email: {session?.user?.email}</p>
        </div>
    )
}

export default Profile