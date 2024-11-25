import type { DefaultSession } from "next-auth";
import type { SchemaCartProduct } from "./schemaTypes";
import { Users } from "@prisma/client";

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      first_name: string;
      last_name: string;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
  }

  interface User {
    first_name: string;
    last_name: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    first_name: string;
    last_name: string;
  }
}
declare module "@auth/core/adapters" {
  interface AdapterUser extends Users {
    first_name?: string;
    last_name?: string;
    password?: string;
    cart_products?: SchemaCartProduct[];
  }
}
