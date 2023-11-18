import type { AuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoggleProvider from 'next-auth/providers/google'

export const authConfig: AuthOptions = {
  providers: [
    GoggleProvider({
      clientId: 'process.env.GOOGLE_CLIENT_ID',
      clientSecret: 'process.env.GOOGLE_SECRET',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null

        const mockingUsers = [
          {
            id: '1',
            email: credentials.email,
            password: credentials.password,
          },
        ]

        const currentUser = mockingUsers.find(
          (user) => user.email === credentials.email
        )

        if (currentUser && currentUser.password === credentials.password)
          return currentUser as User

        return null
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
}
