import NextAuth from "next-auth";
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const { handlers, auth } = NextAuth({
    providers: [Github, Google],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
        const isLoggedIn = auth?.user;
        console.log(auth);
        console.log(isLoggedIn);
        const isOnDashboard = nextUrl.pathname.includes('/dashboard');
        if (isOnDashboard) {
            if (isLoggedIn) return true;
            return false; // Redirect unauthenticated users to login page
        } else if (isLoggedIn) {
            return Response.redirect(new URL('/dashboard', nextUrl));
        }
            return true;
        },
  }, })