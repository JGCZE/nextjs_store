"use client";

import { handleRegister } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useActionState } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useActionState(handleRegister, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state?.succes && router) router.push("/login");
  }, [state?.succes, router]);

  return (
    <div className="w-60 mx-auto">
      {/* <form action={formAction}>
        <input type="text" placeholder="user name" name="userName" />
        <input type="text" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button>Register</button>
        {state?.error && <p>errpr</p>}
      </form> */}

      <Dialog>
        <DialogTrigger asChild>
          <span className="">
            Ještě nemáš účet?
            <span className="ml-2 font-extrabold text-blue-700 underline cursor-pointer">
              Vytvořit účet
            </span>
          </span>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Vytvořit nový účet</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form action={formAction}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Uživatelské jméno
                </Label>
                <Input
                  id="name"
                  name="userName"
                  className="col-span-3"
                  placeholder="jmeno"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  E-mail
                </Label>
                <Input
                  name="email"
                  id="email"
                  className="col-span-3"
                  placeholder="@"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Heslo
                </Label>
                <Input
                  name="password"
                  id="password"
                  type="password"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              {state?.succes && (
                <>
                  <b className="font-bold text-green-600 text-xl">
                    Úspěšně ses zaregistroval
                  </b>
                  <Button onClick={DialogClose}>
                    <Link href="/login">Login</Link>
                  </Button>
                </>
              )}

              {!state?.succes && <Button type="submit">Zaregistrovat</Button>}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      {state?.error && <p>{state.error}</p>}
    </div>
  );
};

export default RegisterForm;
