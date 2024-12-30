import React from "react";
import { Button } from "../ui/button";
import { handleLogout } from "@/lib/actions";
import { auth } from "@/lib/auth";

const LogoutForm = async () => {
  const session = await auth();
  const isAdmin: boolean = session?.user?.isAdmin;

  return (
    <div className="py-6 px-10">
      <span>
        Jsi přihlášený jako, {isAdmin ? <b>Admin</b> : <b>Běžný uživatel</b>}
      </span>
      <form action={handleLogout} className="mt-6 text-center">
        <Button className="font-bold">Odhlásit se</Button>
      </form>
    </div>
  );
};

export default LogoutForm;
