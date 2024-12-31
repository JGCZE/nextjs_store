"use client";

import { useActionState, useEffect } from "react";
import { Button } from "../ui/button";
import { handleGithubLogin, login } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Input } from "../ui/input";

const LoginForm = () => {
  const [state, formAction] = useActionState(login, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state?.succes) {
      router.push("/login");
    }
  }, [state?.succes, router]);

  return (
    <div className="py-4 w-60 mx-auto">
      <form action={handleGithubLogin}>
        <Button className="w-60 mt-4">
          <FaGithub />
          <p>GitHub</p>
        </Button>
      </form>

      <form action="">
        <Button className="w-60 mt-4">
          <FcGoogle />
          <p>Google</p>
        </Button>
      </form>

      <div className="mt-4 text-center w-60"> - OR -</div>

      <form className="flex flex-col my-4 w-60" action={formAction}>
        <div className="my-2 flex flex-col">
          <Input
            id="userName"
            type="text"
            name="userName"
            required
            placeholder="user name"
            className="h-10 dark:border-white dark:font-bold"
          />
        </div>
        <div className="my-2 flex flex-col">
          <Input
            id="password"
            type="password"
            name="password"
            required
            placeholder="password"
            className="h-10 dark:border-white dark:font-bold"
          />
        </div>
        <Button className="border-2 border-black mt-4 w-60 h-10">Login</Button>
        {state?.error && <p>{state.error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
