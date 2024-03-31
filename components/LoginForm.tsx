"use client";

import { signIn } from "next-auth/react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
// import { calSans } from "@/app/fonts";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  return (
    <div className="space-y-3 ">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-2xl dark:text-black`}>
          Please log in to continue.
        </h1>
        <div className="flex justify-center">
          <FcGoogle className="text-black text-7xl my-2"></FcGoogle>
        </div>
        <LoginButton />
      </div>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="mt-4 w-full"
      variant={"secondary"}
      aria-disabled={pending}
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
    >
      Log in with Google
    </Button>
  );
}
