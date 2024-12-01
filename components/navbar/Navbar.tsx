import Cart from "./Cart";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-24 px-[4%] mt-2">
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
