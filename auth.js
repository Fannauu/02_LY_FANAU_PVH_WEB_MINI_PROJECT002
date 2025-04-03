import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginService } from "./services/login-service";

export const { signIn, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const res = await loginService({
          email,
          password,
        });
        return res;
      },
    }),
  ],
  callbacks: {
    async jwt(token) {
      if (token?.newToken) {
        return token?.newToken;
      }
      return token;
    },
    async session(props) {
      const { token } = props;
      const { token: newToken } = token;
      const { user } = newToken;
      return user?.payload;
    },
  },
  strategy: "jwt",
  pages: {
    signIn: "/login",
  },
});
