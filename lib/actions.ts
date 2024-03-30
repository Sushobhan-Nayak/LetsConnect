"use server";

import { z } from "zod";
import { CreatePost } from "./schemas";
import { getUserId } from "./utils";
import { error } from "console";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(values: z.infer<typeof CreatePost>) {
  const userId = await getUserId();
  const validatedField = CreatePost.safeParse(values);

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: "Missing fields. Failed to create post.",
    };
  }
  const { fileUrl, caption } = validatedField.data;
  try {
    await prisma?.post.create({
      data: { fileUrl, caption, user: { connect: { id: userId } } },
    });
  } catch (error) {
    return { message: "Database error. Failed to create post." };
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
}
