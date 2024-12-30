import { auth, useSession } from "@/lib/auth";
import Link from "next/link";
import { GrLogin, GrLogout } from "react-icons/gr";

const Login = async () => {
  const session = await auth();
  console.log("AAA", session);

  return (
    <div className="ml-4 w-24 h-12 flex justify-center items-center">
      {session?.user ? (
        <Link href="/login" className="flex gap-2 text-red-700 font-extrabold">
          <GrLogout size={26} />
          <p>logout</p>
        </Link>
      ) : (
        <Link
          href="/login"
          className="flex gap-2 text-violet-900 font-extrabold"
        >
          <GrLogin size={26} />
          <p>login </p>
        </Link>
      )}
    </div>
  );
};

export default Login;
