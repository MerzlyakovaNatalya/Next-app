// 'use client'

import Link from "next/link"
import { authConfig } from "@/configs/auth"
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react"

const Profile = async () => {
    const session = await getServerSession(authConfig)
    return (
        <div>
            <h1>Profile</h1>
            <p>email: {session?.user?.email}</p>
            {/* <Link href='#' onClick={() => signOut({callbackUrl: '/'})}>Выйти</Link> */}
        </div>
    )
}

export default Profile