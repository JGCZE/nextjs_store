import { getSession } from "@/utils/login-actions";
import Cart from "./Cart";
import Login from "./Login";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Navbar = async () => {
  const session = await getSession();
  return (
    <nav className="flex justify-between items-center h-24 max-w-[1280px] xl:pl-0 pl-[2.5vw] pr-6 mx-auto mt-2">
      <Logo />
      <Navigation />

      <div className="flex justify-between items-center">
        <Search />
        {session.isLoggedIn && <Link href="/admin-cms">CMS</Link>}
        <Login />
        <Cart />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
