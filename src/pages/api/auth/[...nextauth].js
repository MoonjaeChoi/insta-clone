import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// https://console.firebase.google.com/?pli=1

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: '/auth/signIn',
  },

  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session ({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase()

        // Moonjae Choi
        // moonjaechoi

        session.user.uid = token.sub
        return session
    }
  },

  // theme: {
  //   logo: 'https://links.papareact.com/sq0',
  //   brandColor: '#F13287',
  //   colorScheme: 'auto',
  // },
}

export default NextAuth(authOptions)