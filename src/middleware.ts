import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      const isLoggedin = !!token;
      return isLoggedin;
    },
  },
});

export const config = { matcher: ["/(backoffice.*)"] };
