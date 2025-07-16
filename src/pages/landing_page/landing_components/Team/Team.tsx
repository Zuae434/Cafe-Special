import brownCoffee from "../ContentBar/BrownCoffeeCup.svg";
import CTAButton from "../../../components/CTAButton";
import SarahYoung from "./TeamMembers/xIM0XY.png";
import ReeseWheeler from "./TeamMembers/BarManager.png";
import DraggableTeamGallery from "./DraggableTeamGallery";

const MeetTheTeam = () => {
  return (
    <div className="mx-auto h-auto bg-repeating-stripes">
      <hr className="border-2 border-[#764D3D] px-5 mt-[10px]"></hr>
      <div className="container mx-auto">
        <h1 className="flex mt-[50px] text-[#764D3D] font-[Khmer MN] font-bold text-5xl">
          Meet The Team
        </h1>

        {/* Team members */}
        <div className="flex flex-row justify-around mt-[75px]">
          <div className="flex flex-col team-yellow-overlay px-[100px]">
            <div className="w-[250px] h-[350px] rounded-full border-8 border-[#764D3D] overflow-hidden">
              <img
                src={SarahYoung}
                alt="Sarah Young"
                className="w-full h-full object-cover transform transition-transform duration-1000 ease-in-out hover:scale-140"
              />
            </div>
            <p className="text-center text-lg mt-[20px] font-georgia text-black font-extrabold">
              Sarah Young
            </p>
            <p className="text-center text-lg mb-[50px] font-sans text-black">
              Co-Founder / Production Manager
            </p>
          </div>
          <div className="flex flex-col team-yellow-overlay px-[75px]">
            <div className="w-[250px] h-[350px] rounded-full border-8 border-[#764D3D] overflow-hidden">
              <img
                src={ReeseWheeler}
                alt="Reese Wheeler"
                className="w-full h-full object-cover transform transition-transform duration-1000 ease-in-out hover:scale-140"
              />
            </div>
            <p className="text-center text-lg mt-[20px] font-georgia text-black font-extrabold">
              Reese Wheeler
            </p>
            <p className="text-center text-lg mb-[50px] font-sans text-black">
              Co-Founder / Bar Manager
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <img
          className="relative left-[50px]"
          src={brownCoffee}
          alt="Brown Coffee Cup"
        />
        <div className="flex flex-row items-center justify-center mt-[50px] mb-[50px] [&_button]:text-lg">
          <CTAButton title="Learn more about the team" color />
        </div>
        <img
          className="transform scale-x-[-1] relative left-[-50px]"
          src={brownCoffee}
          alt="Brown Coffee Cup"
        />
      </div>
      <hr className="border-20 border-[#F3B54A] px-5 mb-[50px]"></hr>
      <DraggableTeamGallery />
    </div>
  );
};

export default MeetTheTeam;
