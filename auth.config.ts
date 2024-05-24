import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credential from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    GitHub,
    Google,
    Credential({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatched = await bcrypt.compare(password, user.password);

          if (passwordMatched) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;