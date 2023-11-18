'use client'

import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import type { FormEventHandler } from 'react'

const SignInForm = () => {
  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
     
    const formData = new FormData(event.currentTarget)

    const res = await signIn('credential' , {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    })

    if(res && !res.error) {
      router.push('/profile')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" ></input>
        <input type="password" name="password" required></input>
        <button type="submit">Отправить</button>
      </form>
    </div>
  )
}

export default SignInForm
