import React from "react";
import { Button } from "../ui/button";
import { handleLogout } from "@/lib/actions";

const LogoutForm = async () => {
  return (
    <div>
      LogoutForm
      <form action={handleLogout}>
        <Button>Odhlásit se</Button>
      </form>
    </div>
  );
};

export default LogoutForm;
