import { motion } from "framer-motion";

export type EventType = {
  id: string;
  image: string;
  title: string;
  hours: string;
  scheduleDetails?: string;
  details: string;
};

type EventModalProps = {
  event: EventType;
  onClose: () => void;
};

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div
        className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="container mx-auto yellow-overlay rounded-lg shadow-lg bg-repeating-stripes flex flex-row p-10 gap-8"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="text-2xl text-black cursor-pointer bg-white w-[64px] h-[64px] rounded-[15px] shadow-[4px_4px_14px_0px_rgba(0,0,0,0.07)]"
          >
            &times;
          </button>
          <img
            src={event.image}
            alt={event.title}
            className="w-[263px] h-[375px] object-cover"
          />
          <div className="p-4 font-khmer">
            <h2 className="text-4xl font-bold mb-3">{event.title}</h2>
            <p className="text-2xl text-black mb-3 mt-10">
              Date: {event.scheduleDetails ?? event.hours}
            </p>
            <p className="text-black mb-8 text-2xl">{event.details}</p>
            <p className="text-2xl text-black">
              Bring your family and friends!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventModal;
