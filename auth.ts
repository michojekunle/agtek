import NextAuth from "next-auth";
import Github from 'next-auth/providers/Github';
import Google from 'next-auth/providers/google';

export const { handlers, auth } = NextAuth({ providers: [Github, Google] })