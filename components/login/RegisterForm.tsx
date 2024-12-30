"use client";

import { handleRegister } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useActionState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const RegisterForm = () => {
  const [state, formAction] = useActionState(handleRegister, undefined);
  const router = useRouter();

  console.log("XXX >>", state);

  useEffect(() => {
    if (state?.succes && router) router.push("/register");
  }, [state?.succes, router]);

  return (
    <>
      {state?.succes && <p>Seš zaregistrován</p>}
      <form action={formAction}>
        <input type="text" placeholder="user name" name="userName" />
        <input type="text" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button>Register</button>
        {state?.error && <p>errpr</p>}
      </form>

      {/* <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Vytvoři účet</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Vytvořit nový účet</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Uživatelské jméno
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Heslo
              </Label>
              <Input id="password" value="" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
    </>
  );
};

export default RegisterForm;
