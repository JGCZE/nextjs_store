import React from "react";
import { Button } from "../ui/button";
import { handleLogout } from "@/lib/actions";
import { auth } from "@/lib/auth";
import Link from "next/link";

const LogoutForm = async () => {
  const session = await auth();
  const { isAdmin, name } = session?.user;

  return (
    <div className="py-6 px-10 text-center">
      <p className="my-4">
        Vítej zpět, <b>{session?.user?.name} !</b>
      </p>
      <span>
        Jsi přihlášený jako,
        {isAdmin ? (
          <>
            <b>Admin</b>
            <p className="my-4"> Nyní máš přístup do administrace</p>
            <Link href="/cms" className="">
              <Button className="mt-6">Přejít na admin dash board</Button>
            </Link>
          </>
        ) : (
          <span>
            <b> běžný uživatel,</b>
          </span>
        )}
      </span>
      <form action={handleLogout} className="mt-6 text-center">
        <Button className="font-bold">Odhlásit se</Button>
      </form>
    </div>
  );
};

export default LogoutForm;
