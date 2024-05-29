import { adminProcedure, publicProcedure, router } from "../trpc";
import { getAdminById, isAdminExisting } from "../utils/admins";
import { loginFormSchema } from "@/schemas/auth";
import { prisma } from "@/server/db";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcrypt";
import { z } from "zod";

export const adminsRouter = router({
  isExisting: publicProcedure.query(async () => {
    return await isAdminExisting();
  }),
  byId: adminProcedure
    .input(
      z.object({
        id: z.string().uuid(),
      })
    )
    .query(async ({ input }) => {
      return await getAdminById(input.id);
    }),
  create: publicProcedure.input(loginFormSchema).mutation(async ({ input }) => {
    const isExisting = await isAdminExisting();
    if (isExisting)
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "We couldn't create a admin because one already exists.",
        cause: "The ID provided is invalid",
      });

    const cryptedPassword = await bcrypt.hash(input.password, 12);

    return await prisma.admin.create({
      data: {
        email: input.email,
        password: cryptedPassword,
      },
    });
  }),
});
