import NextAuth from "next-auth";
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const { handlers, auth } = NextAuth({ site: process.env.NEXTAUTH_URL, providers: [Github, Google] })