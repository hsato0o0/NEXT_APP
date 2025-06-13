import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from './lib/prisma';
import { z } from 'zod';
import bcryptjs from 'bcryptjs';

async function getUser(email: string) {
  return await prisma.user.findUnique({
    where: { email: email },
  });
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  pages: { signIn: '/login' },
  session: {
    maxAge: 60 * 5,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnUser = nextUrl.pathname.startsWith('/user');

      if (isOnUser) {
        if (isLoggedIn) return true;
        return Response.redirect(new URL('/login', nextUrl));
      } else if (isLoggedIn && nextUrl.pathname === '/login') {
        return Response.redirect(new URL('/user', nextUrl));
      }

      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(8),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const email = parsedCredentials.data.email;
          const password = parsedCredentials.data.password;

          const user = await getUser(email);
          if (!user) return null;

          const passwordMatch = await bcryptjs.compare(password, user.password);
          if (passwordMatch) return user;
        }

        return null;
      },
    }),
  ],
});
