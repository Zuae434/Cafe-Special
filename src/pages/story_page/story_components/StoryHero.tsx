import CoffeeCupStory from "./CoffeeCupStory.png";

const StoryHero = () => {
  return (
    <div className="bg-[#F0ECDC] min-h-[800px] flex flex-row justify-around items-center gap-8 overflow-hidden">
      <h1 className="text-title-text text-4xl z-1 relative left-[10%] min-w-[350px]">
        Pleased to meet you!
        <br />
        <div className="font-bold mt-2">
          Here's a little about us and our history.
        </div>
      </h1>
      <img src={CoffeeCupStory} alt="Coffee Cup" className="w-full" />
    </div>
  );
};

export default StoryHero;
