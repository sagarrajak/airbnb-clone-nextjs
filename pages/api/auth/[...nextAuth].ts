import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import Providers from "next-auth/providers"
import prisma from "@/app/"

export default NextAuth({
  adapter: PrismaAdapter(prisma)
});
