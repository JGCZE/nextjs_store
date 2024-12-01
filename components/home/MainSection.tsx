import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { heroLinks } from "@/utils/links";
import clsx from "clsx";
import Link from "next/link";

const MainSection = async () => {
  return (
    <div className="flex flex-col items-center dark:text-secondary mt-10 h-80">
      <h1 className="text-6xl">Find your</h1>
      <h1 className="text-6xl">amazing everything</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[650px] mt-12 px-10" // tato hodnota bude určotvat počer kartiček, pak vyřeším responsivitou
      >
        <CarouselContent>
          {heroLinks.map((link, index) => (
            <div key={index}>
              <CarouselItem>
                <Link href={link.href}>
                  <Card
                    className={clsx(
                      index < 1
                        ? "bg-violet-600 text-white font-bold"
                        : "bg-white dark:text-black",
                      "w-36 font-mono mx-4 rounded-3xl h-28 border-none flex flex-col justify-center items-center"
                    )}
                  >
                    <CardContent className="flex flex-col">
                      <h5 className="text-xl">{link.label}</h5>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious className="w-12 h-10" />
        <CarouselNext className="w-12 h-10" />
      </Carousel>
    </div>
  );
};

export default MainSection;
