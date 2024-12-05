"use client";

import { Button } from "../ui/button";

const Filter = ({ setFiltredProducts, filtredProducts }) => {
  return (
    <div className="flex flex-col">
      Filter
      <Button>Podle ceny</Button>
      <Button>velikost</Button>
      <Button>skladem</Button>
    </div>
  );
};

export default Filter;
