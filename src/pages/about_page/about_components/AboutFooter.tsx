import CTAButton from "../../components/CTAButton";
import CoffeeCup from "../../landing_page/landing_components/ContentBar/BrownCoffeeCup.svg";

const AboutFooter = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col flex-start m-10 pl-20 pb-10 pt-10 max-w-[1100px]">
        <p className="font-light text-2xl font-sans">
          We’re proud of the team that brings Coffee Break to life each day—and
          even more excited to share our passion with you. Whether you're
          stopping in for your morning fix, joining us for a local event, or
          just craving something sweet, we’re here to make your break the best
          part of your day.
        </p>
        <div className="flex flex-row gap-8 mt-[50px] items-center">
          <h1 className="text-title-text font-semibold text-4xl text-georgia">
            Ready for your next cup?
          </h1>
          <CTAButton title="ORDER NOW" color />
        </div>
        <p className="font-light text-xl font-sans mt-1.5 tracking-wider">
          Let us bring the Coffee Break experience to you!
        </p>
        <img
          src={CoffeeCup}
          alt=""
          className="self-end w-[500px] h-[300px] transform scale-x-[-1] relative top-20"
        />
      </div>
    </>
  );
};

export default AboutFooter;
