import "../../../App.css";

type EventCardProps = {
  image: string;
  title: string;
  hours: string;
  onDetails?: () => void;
};

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  hours,
  onDetails = () => {},
}) => {
  return (
    <>
      <div className="flex flex-col items-center border-2 border-[rgba(118,77,61,0.26)] bg-[#F7F7F7] bg-repeating-stripes-white max-w-[290px] hover:scale-105 transition ease-in-out duration-300">
        <img
          src={image}
          alt={title}
          className="w-[263px] h-[375px] object-cover mt-2"
        />
        <h2 className="text-2xl font-bold mt-4 text-center">{title}</h2>
        <p className="text-base mt-2 text-[#484646]">{hours}</p>
        <button
          onClick={onDetails}
          className="w-[135px] h-[35px] bg-[#C64D3D] text-white mt-4 cursor-pointer hover:border border-[#CE684E] shadow-[inset_0px_0px_4px_4px_rgba(231,111,80,0.82)] transition-all ease-in-out duration-150 mb-5"
        >
          Details
        </button>
      </div>
    </>
  );
};

export default EventCard;
