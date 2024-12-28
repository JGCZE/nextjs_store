import Link from "next/link";
import { GrLogin, GrLogout } from "react-icons/gr";

const Login = () => {
  const isLoggin = false;
  return (
    <div className="ml-4 w-24 h-12 flex justify-center items-center">
      {isLoggin ? (
        <Link href="/" className="flex gap-2 text-red-700 font-extrabold">
          <GrLogout size={26} />
          <p>logout</p>
        </Link>
      ) : (
        <Link href="/" className="flex gap-2 text-violet-900 font-extrabold">
          <GrLogin size={26} />
          <p>login </p>
        </Link>
      )}
    </div>
  );
};

export default Login;
