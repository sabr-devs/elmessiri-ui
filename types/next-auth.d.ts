import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
  }

  interface User {
    user_role: string ;
    full_name: string;
    jwt: string;
    pic: string;
  }
}

