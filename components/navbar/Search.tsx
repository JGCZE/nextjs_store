import { Input } from "../ui/input";

const NavSearch = () => {
  return (
    <div className="">
      <Input
        type="search"
        placeholder="Hledej..."
        className="bg-white w-80 rounded-3xl"
      />
    </div>
  );
};

export default NavSearch;
