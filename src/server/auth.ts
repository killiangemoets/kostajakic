import { prisma } from "./db";
import { env } from "@/env/server.mjs";
import bcrypt from "bcrypt";
import { type DefaultSession, type NextAuthOptions, type User, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials): Promise<User> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please provide email and password");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
          throw new Error("Invalid credentials");
        }

        return { name: user.name, email: credentials.email, id: user.id };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 10 * 24 * 60 * 60, // 10 days
  },
  jwt: {
    secret: env.JWT_SECRET,
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          user,
        };
      }
      return token;
    },
    session({ session, token }) {
      const user = token.user as User | undefined;
      return { ...session, user };
    },
    redirect({ baseUrl, url }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  pages: {
    signIn: "/auth",
    signOut: "/auth",
    error: "/auth", // Error code passed in query string as ?error=
    verifyRequest: "/auth", // (used for check email message)
    newUser: "/auth", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};


export const getServerAuthSession = () => getServerSession(authOptions);