"use client";
import { Button } from "../ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "../ui/label";

interface IProps {
  available: boolean;
  setAvailable: (arg: boolean) => void;
  onAvailable: () => void;
}

const Filter = ({ available, setAvailable, onAvailable }: IProps) => {
  return (
    <div className="flex flex-col">
      Filter
      <div className="flex items-center space-x-2">
        <Switch
          id="airplane-mode"
          //checked={() => console.log("SSDSDS")}
          onCheckedChange={() => {
            setAvailable(!available);
            onAvailable();
          }}
        />
        <Label htmlFor="airplane-mode" className="ml-3 text-xl">
          Pouze skladem
        </Label>
      </div>
      <Button>Podle ceny</Button>
      <Button>velikost</Button>
    </div>
  );
};

export default Filter;
