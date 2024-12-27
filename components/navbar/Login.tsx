import Link from "next/link";
import { GrLogin, GrLogout } from "react-icons/gr";

const Login = () => {
  const isLoggin = false;
  return (
    <div className="ml-4 w-12 h-12 flex justify-center">
      {isLoggin ? (
        <Link href="/">
          <GrLogout size={26} />
          <p>logout</p>
        </Link>
      ) : (
        <Link href="/">
          <GrLogin size={26} />
          <p>login </p>
        </Link>
      )}
    </div>
  );
};

export default Login;
