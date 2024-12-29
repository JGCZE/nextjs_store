import LoginForm from "@/components/login/LoginForm";
import LogoutForm from "@/components/login/LogoutForm";
import { Button } from "@/components/ui/button";
import { getSession } from "@/utils/login-actions";
import Link from "next/link";

const LoginPage = async () => {
  const session = await getSession();

  return (
    <section>
      login page
      {session.isLoggedIn ? <LogoutForm /> : <LoginForm />}
      {session.isLoggedIn && (
        <div>
          <p>
            Vítej, <b>{session.userName}</b>
          </p>
          <b>{session.isAdmin && "Seš přihlášen jako admin"}</b>
          <Button>
            <Link href="/admin-cms">Správa položek</Link>
          </Button>
        </div>
      )}
    </section>
  );
};

export default LoginPage;
