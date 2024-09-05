import NextAuth from 'next-auth';
import JWT from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: { id: string };
    backendToken: string;
    refreshToken: string;
    tokenExpireIn: number;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: { id: string };
    backendToken: string;
    refreshToken: string;
    tokenExpireIn: number;
  }
}
