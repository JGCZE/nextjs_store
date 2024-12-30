import { auth } from "@/lib/auth";
import Cart from "./Cart";
import Login from "./Login";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="flex justify-between items-center h-24 max-w-[1280px] xl:pl-0 pl-[2.5vw] pr-6 mx-auto mt-2">
      <Logo />
      <Navigation />

      <div className="flex justify-between items-center">
        <Search />
        {session?.isAdmin && <p>CMS</p>}
        <Login />
        <Cart />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
