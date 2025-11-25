import NextAuth from "next-auth"
import github from "next-auth/providers/github"

// Middleware runs in Edge Runtime and cannot use Prisma
// So we create a minimal auth config without the Prisma adapter
const { auth } = NextAuth({
    providers: [github],
})

export default auth