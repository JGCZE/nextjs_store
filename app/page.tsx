import Hero from "@/components/home/Hero";
import MainSection from "@/components/home/MainSection";
import SecondarySection from "@/components/home/SecondarySection";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <MainSection />
      <SecondarySection />
    </div>
  );
};

export default Home;
