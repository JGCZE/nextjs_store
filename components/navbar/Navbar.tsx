import Cart from "./Cart";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-24 max-w-[1280px] xl:pl-0 pl-[2.5vw] pr-[5vw] mx-auto mt-2">
      <Logo />
      <Navigation />

      <div className="flex justify-between">
        <Search />
        <Cart />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
