import { Link } from "react-router-dom";

import TeamMember1 from "./TeamMembers/TeamMember1.png";
import TeamMember2 from "./TeamMembers/TeamMember2.png";
import TeamMember3 from "./TeamMembers/TeamMember3.png";
import TeamMember4 from "./TeamMembers/TeamMember4.png";
import TeamMember5 from "./TeamMembers/TeamMember5.png";
import SarahYoung from "./TeamMembers/xIM0XY.png";
import ReeseWheeler from "./TeamMembers/BarManager.png";

const teamImages = [
  { src: TeamMember1, alt: "Team Member 1" },
  { src: TeamMember2, alt: "Team Member 2" },
  { src: TeamMember3, alt: "Team Member 3" },
  { src: TeamMember4, alt: "Team Member 4" },
  { src: TeamMember5, alt: "Team Member 5" },
  { src: SarahYoung, alt: "Sarah Young" },
  { src: ReeseWheeler, alt: "Reese Wheeler" },
];

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const DraggableTeamGallery = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { events } = useDraggable(ref as React.MutableRefObject<HTMLElement>);

  return (
    <div
      ref={ref}
      {...events}
      className="flex overflow-x-auto scrollbar-hide mt-[-50px]"
    >
      {teamImages.map(({ src, alt }, i) => (
        <div key={i} className="flex-none">
          <img src={src} alt={alt} className="w-[235px] h-[350px]]" />
        </div>
      ))}

      <div className="flex-none flex items-center">
        <Link to="/About">
          <button className="px-4 py-2 bg-[#764D3D] text-white rounded-full cursor-pointer hover:bg-[#5a3b2c] transition duration-300 ml-4">
            Learn more about our team
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DraggableTeamGallery;
