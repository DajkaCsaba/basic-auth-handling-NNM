import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { JWT } from 'next-auth/jwt';
import NextAuth from 'next-auth/next';
import { errorToken } from '@renter/common';

class CredentialsSignin extends Error {
  static type = 'CredentialsSignin';
  code = 'credentials';
}

class CustomError extends CredentialsSignin {
  code = 'invalid_credentials';
}

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(process.env.BACKEND_URL + '/auth/refresh', {
    method: 'POST',
    headers: {
      authorization: `Refresh ${token.refreshToken}`,
    },
  });
  const response = await res.json();

  return {
    ...token,
    backendToken: response.backendToken,
    refreshToken: response.refreshToken,
    tokenExpireIn: response.tokenExpireIn,
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'placeholder@mail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return undefined;
        }

        const { email, password } = credentials;
        const res = await fetch(process.env.BACKEND_URL + '/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const response = await res.json();

        if (response.message === errorToken.InvalidCredentials) {
          throw new CustomError('Invalid login credentials!');
        }
        if (response.message === 'Bad Gateway') {
          throw new CustomError(
            'Unexpected error at login. Please try again later!'
          );
        }

        return response;
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      try {
        if (user) return { ...token, ...user };

        if (new Date().getTime() < token.tokenExpireIn) return token;

        return await refreshToken(token);
      } catch (error) {
        console.error('JWT Session Error:', error);
        // Handle the error appropriately
        return Promise.reject(new Error('JWT_SESSION_ERROR'));
      }
    },
    async session({ session, token, user }) {
      try {
        session.user = token.user;
        session.backendToken = token.backendToken;
        return session;
      } catch (error) {
        console.error('Session Error:', error);
        // Handle the error appropriately
        return Promise.reject(new Error('SESSION_ERROR'));
      }
    },
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
    newUser: '/auth/signup',
  },
  debug: true,
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
