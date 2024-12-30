import LoginForm from "@/components/login/LoginForm";
import LogoutForm from "@/components/login/LogoutForm";
import RegisterForm from "@/components/login/RegisterForm";
import { auth } from "@/lib/auth";

const LoginPage = async () => {
  const session = await auth();
  console.log("XX >>", session);

  return (
    <div>
      Login PAGE
      {session?.user ? <LogoutForm /> : <LoginForm />}
      Nemáš účt?
      <RegisterForm />
    </div>
  );
};

export default LoginPage;
