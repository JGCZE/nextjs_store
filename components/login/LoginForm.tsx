"use client";
import { login } from "@/utils/login-actions";
import React from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);

  return (
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
      {state?.error && <p>{state.error}</p>}
    </form>
  );
};

export default LoginForm;
