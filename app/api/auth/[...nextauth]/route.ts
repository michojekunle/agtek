import { handlers, auth } from "@/auth";

export const { GET, POST } = handlers;

// import NextAuth, { NextAuthConfig } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';

// const handler = NextAuth({
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         })
//     ],
//     callbacks: {
//         authorized({ auth, request: { nextUrl } }) {
//           const isLoggedIn = auth?.user;
//           console.log(auth);
//           console.log(isLoggedIn);
//           const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
//           if (isOnDashboard) {
//             if (isLoggedIn) return true;
//             return false; // Redirect unauthenticated users to login page
//           } else if (isLoggedIn) {
//             return Response.redirect(new URL('/dashboard', nextUrl));
//           }
//           return true;
//         },
//       },
// } satisfies NextAuthConfig)



// export { handler as GET, handler as POST };