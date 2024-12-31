import LoginForm from "@/components/login/LoginForm";
import LogoutForm from "@/components/login/LogoutForm";
import RegisterForm from "@/components/login/RegisterForm";
import { auth } from "@/lib/auth";

const LoginPage = async () => {
  const session = await auth();

  return (
    <div className="flex min-h-[600px] mt-10 border-2 border-black dark:border-white rounded-lg">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h3 className="font-bold">Přihlášení a registrace</h3>
        {session?.user ? <LogoutForm /> : <LoginForm />}

        {!session?.user && (
          <div className="">
            <RegisterForm />
          </div>
        )}
      </div>

      <div className="w-1/2 dark:from-cyan-900 dark:to-fuchsia-900 bg-gradient-to-r from-violet-400 to-fuchsia-400 p-12  text-lg">
        <p className="mt-4 mb-2">
          admin přihlášení umožní přístup do administrace položek, kde můžete
          mazat, přidávat a upravovat položky
        </p>
        <p>user name: test</p>
        <p>heslo: test</p>

        <p className="mt-16 mb-2">
          přihlášení jako bežný uživatel umožňuje při vložení položek do košíku,
          ponechat položky v košíku neomezeně dlouho. Můžete si vytvořit vlastní
          účet nebo použít testovací pro zkušební účely
        </p>
        <p>user name: user</p>
        <p>heslo: user</p>
      </div>
    </div>
  );
};

export default LoginPage;
