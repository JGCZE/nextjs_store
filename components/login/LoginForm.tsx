"use client";

import { useActionState, useEffect } from "react";
import { Button } from "../ui/button";
import { handleGithubLogin, login } from "@/lib/actions";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [state, formAction] = useActionState(login, undefined);
  const router = useRouter();

  console.log("XXX >>", state);

  useEffect(() => {
    if (state?.succes && router) router.push("/register");
  }, [state?.succes, router]);
  return (
    <>
      <form action={handleGithubLogin}>
        <div>
          <label htmlFor="">Github</label>
          <Button>X</Button>
        </div>
      </form>

      <form className="flex flex-col my-4 w-1/3" action={formAction}>
        <div className="my-2 flex flex-col">
          <label htmlFor="userName">uživatelské jméno</label>
          <input
            id="userName"
            type="text"
            name="userName"
            required
            placeholder="user name"
            className="border-2 border-black h-10"
          />
        </div>
        <div className="my-2 flex flex-col">
          <label htmlFor="password"> Heslo </label>
          <input
            id="password"
            type="password"
            name="password"
            required
            placeholder="password"
            className="border-2 border-black h-10"
          />
        </div>
        <button className="border-2 border-black mt-4 h-10">Login</button>
        {/* {state?.error && <p>{state.error}</p>} */}
      </form>
    </>
  );
};

export default LoginForm;
