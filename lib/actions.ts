"use server";

import { z } from "zod";
import { CreatePost, DeletePost } from "./schemas";
import { getUserId } from "./utils";
import { error } from "console";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

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

export async function deletePost(formData: FormData) {
  const userId = await getUserId();

  const { id } = DeletePost.parse({
    id: formData.get("id"),
  });

  const post = await prisma.post.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!post) {
    throw new Error("Post not found");
  }

  try {
    await prisma.post.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard");
    return { message: "Deleted Post." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Post." };
  }
}