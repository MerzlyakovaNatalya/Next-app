'use client'

import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import type { FormEventHandler } from 'react'

const SignInForm = () => {
  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" required></input>
        <input type="password" name="password" required></input>
        <button type="submit"></button>
      </form>
    </div>
  )
}

export default SignInForm
