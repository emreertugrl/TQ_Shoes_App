import Buttons from "../../components/buttons";
import Filter from "../../components/filter";
import Hero from "../../components/hero";
import List from "../../components/list";

const Home = () => {
  return (
    <div>
      <Hero />

      <Buttons />

      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 md:mt-7 xl:mt-8">
        Sana Uygun Seçenekler
      </h1>

      <div className="grid grid-cols-4 gap-5">
        <div className="max-lg:hidden">
          <Filter />
        </div>
        <div className="lg:col-span-3 col-span-4 ">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
