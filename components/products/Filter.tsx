"use client";
import { Switch } from "@/components/ui/switch";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface IProps {
  available: boolean;
  setAvailable: (arg: boolean) => void;
  onAvailable: () => void;
  handleSizeChange: (arg: string) => void;
}

const sizes: Array<string> = ["S", "M", "L", "XL"];
const categories: Array<string> = ["trička", "čepice", "kalhoty"];

const Filter = ({
  available,
  setAvailable,
  onAvailable,
  handleSizeChange,
}: IProps) => {
  return (
    <div className="flex flex-col">
      Počet aktivních filtrů: 0
      <div className="flex flex-col">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-base">
              Kategorie
            </AccordionTrigger>
            <AccordionContent>
              {categories.map((size, index) => {
                return (
                  <div key={index} className="flex my-4 ">
                    <Checkbox
                      id={size}
                      className="w-6 h-6 mr-4"
                      onClick={() => {}}
                    />
                    <label htmlFor={size} className="font-bold cursor-pointer">
                      <p>{size}</p>
                    </label>
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold  text-base">
              Velikosti
            </AccordionTrigger>
            <AccordionContent>
              {sizes.map((size, index) => {
                return (
                  <div key={index} className="flex my-4">
                    <Checkbox
                      id={size}
                      className="w-6 h-6 mr-4"
                      onClick={() => handleSizeChange(size)}
                    />
                    <label htmlFor={size} className="font-bold cursor-pointer">
                      <p>{size}</p>
                    </label>
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex items-center space-x-2 mt-10">
        <Switch
          id="airplane-mode"
          onCheckedChange={() => {
            setAvailable(!available);
            onAvailable();
          }}
        />
        <Label htmlFor="airplane-mode" className="ml-3 text-lg">
          Pouze skladem
        </Label>
      </div>
    </div>
  );
};

export default Filter;
