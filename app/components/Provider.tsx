import { SessionProvider } from "next-auth/react";

export default function Provider({ children, session }: { children: React.ReactNode, session: object | null }) {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}