import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "123",
      clientSecret: "123",
    }),
  ],
  secret: "123",
};

export default NextAuth(authOptions);