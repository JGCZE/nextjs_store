import React from "react";
import { Button } from "../ui/button";
import { handleLogout } from "@/lib/actions";

const LogoutForm = async () => {
  return (
    <div className="py-6 px-10">
      Jsi přihlášený jako,
      <form action={handleLogout} className="mt-6">
        <Button>Odhlásit se</Button>
      </form>
    </div>
  );
};

export default LogoutForm;
