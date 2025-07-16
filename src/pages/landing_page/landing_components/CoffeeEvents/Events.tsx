import FiftyOff from "./EventsImages/50Off.png";
import AllWelcome from "./EventsImages/AllWelcome.png";
import OpenMic from "./EventsImages/OpenMic.png";
import TimeStamp from "./EventsImages/TimeStamp.png";

const CoffeeEvents = () => {
  return (
    <div className="bg-repeating-stripes bg-[#F7F7F7]">
      <div className="items-center mx-auto h-auto section-yellow-overlay m-10 max-w-[90%] py-10">
        <div className="container mx-auto">
          <h1 className="text-title-text font-bold text-5xl">
            Coffee Break Events
          </h1>
        </div>

        <div className="container mx-auto flex flex-row flex-start mt-10">
          <div className="flex flex-col">
            <img src={OpenMic} alt="Open Mic" className="h-[450px] w-[350px]" />
            <button className="mt-2 text-[#8F7D5E] cursor-pointer text-xl font-bold self-end hover:text-hover-text transition-all ease-in-out duration-150">
              View All Events
            </button>
          </div>
          <div className="flex flex-col ml-10 mt-5">
            <h2 className="font-georgia text-2xl text-[#4A2C20] font-bold mb-5">
              Open Mic Friday Karaoke
            </h2>
            <div className="text-[#4A2C20] text-lg font-georgia max-w-[550px]">
              <p>
                When the lights dim and the mic turns on, Coffee Break
                transforms into your favorite Friday night hangout. From 6PM to
                11PM, our cozy café becomes a stage for singers of all kinds.
              </p>
              <p>
                Whether you're a first-timer, a pop diva, a classic rock
                enthusiast, or just here to cheer on your friends. Karoake Night
                is all about fun, laughter, and community, no matter your vocal
                range.
              </p>
            </div>
            <div className="flex flex-row mt-5 justify-around">
              <img
                src={FiftyOff}
                alt="50% Off"
                className="h-[188px] w-[178px] ml-10"
              />
              <img
                src={AllWelcome}
                alt="All Welcome"
                className="w-[350px] h-[310px] ml-25"
              />
              <img
                src={TimeStamp}
                alt="Time Stamp"
                className="w-[215px] h-[215px] ml-[-320px] mb-8 mt-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeEvents;
