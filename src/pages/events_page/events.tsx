import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import EventCard from "./event_components/EventCard";
import EventModal, { type EventType } from "./event_components/EventModal";
import EventOne from "./event_components/EventOne.png";
import EventTwo from "./event_components/EventTwo.png";
import EventThree from "./event_components/EventThree.png";
import EventFour from "./event_components/EventFour.png";
import EventFive from "./event_components/EventFive.png";
import EventSix from "./event_components/EventSix.png";
import BrownCoffeeCup from "../landing_page/landing_components/ContentBar/BrownCoffeeCup.svg";

// Event definitions with details for modal
const eventData: EventType[] = [
  {
    id: "open-mic",
    image: EventOne,
    title: "Open Mic Karaoke",
    hours: "Friday | 6pm-11pm",
    scheduleDetails: "Every Friday @ 6:00PM  - 11:00PM",
    details: "Coffee and snack bar open 6:00PM -  9:00PM",
  },
  {
    id: "raffle",
    image: EventTwo,
    title: "Raffle Contest",
    hours: "Thursday | 5pm",
    scheduleDetails: "First Thursday of each month @ 5:00PM  - 6:00PM",
    details:
      "Buy a coffee and receive a raffle ticket.  Every 10 minutes from 5:00PM - 6:00PM we will read out ticket numbers. You could win a free coffee or even better a $20 Gift card and MORE! ",
  },
  {
    id: "trivia",
    image: EventThree,
    title: "Trivia Night",
    hours: "Sunday | 6pm-9pm",
    scheduleDetails: "Every Sunday @ 6:00PM  - 9:00PM",
    details:
      "Get ready to challenge your brain and bond with friends over coffee, laughs, and a little friendly competition. Trivia Night at Coffee Break is packed with fun questions, unexpected facts, and team spirit. Whether you’re a trivia newbie or a seasoned quiz champ, there’s always something new to learn and prizes to win!",
  },
  {
    id: "comedy",
    image: EventFour,
    title: "Open Mic Comedy",
    hours: "Wednesday | 6pm-11pm",
    scheduleDetails: "Every Wednesday @ 6:00PM  - 11:00PM",
    details:
      "Grab a seat, sip something strong, and get ready to laugh. Open Mic Comedy Night at Coffee Break is your chance to see fresh talent, unexpected punchlines, and maybe even try out a few jokes of your own. Whether you're performing or just here for the good vibes, it's a night full of laughter, community, and caffeine-fueled courage.",
  },
  {
    id: "poetry",
    image: EventFive,
    title: "Open Mic Poetry Readings",
    hours: "Monday | 3pm-5pm",
    scheduleDetails: "Every Monday @ 3:00PM  - 5:00PM",
    details:
      "Words take center stage at our Open Mic Poetry Night—a space where voices are heard, stories are shared, and creativity flows freely. Whether you're reading your own work or soaking in the rhythm of others, it's a night built on expression, emotion, and community. All are welcome! No pressure, just presence.",
  },
  {
    id: "live-music",
    image: EventSix,
    title: "LIVE Music Sign-Up",
    hours: "July 28 | Open Hours",
    scheduleDetails: "July 28, 2023",
    details:
      "Want to perform? Sign up for a live music slot on July 28. All genres welcome, gear provided.",
  },
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const closeModal = () => setSelectedEvent(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-repeating-stripes">
        <Header />
        <div className="flex flex-row gap-10 justify-center items-center mt-20">
          <img src={BrownCoffeeCup} alt="" />
          <h1 className="text-title-text text-7xl font-semibold font-khmer mt-15">
            Coffee Break Events
          </h1>
          <img src={BrownCoffeeCup} alt="" className="transform scale-x-[-1]" />
        </div>
        <div className="container mx-auto mt-10 section-yellow-overlay py-10 px-10">
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            {eventData.map((ev) => (
              <EventCard
                key={ev.id}
                image={ev.image}
                title={ev.title}
                hours={ev.hours}
                onDetails={() => setSelectedEvent(ev)}
              />
            ))}
          </div>
          {selectedEvent && (
            <EventModal event={selectedEvent} onClose={closeModal} />
          )}
          <div className="mt-10">
            <h1 className="text-title-text text-3xl font-semibold font-georgia">
              More Than Coffee - It's Community
            </h1>
            <p className="mt-5 font-georgia text-lg">
              From karaoke nights that bring out hidden talent to cozy poetry
              readings that feed the soul, Coffee Break is more than just a
              café—it’s a place to gather, express, and have a little fun. Our
              regular events also include crowd-favorite raffle contests, trivia
              nights that test your knowledge (and your friendships), and live
              music sign-ups that spotlight local talent. Whether you’re here to
              perform, cheer someone on, or just enjoy the buzz of community
              energy, there’s always something worth showing up for. We believe
              coffee tastes better when it comes with connection—and our events
              are the heartbeat of that mission.
            </p>
          </div>
        </div>
        <div className="container mx-auto mt-10 flex flex-col items-center text-center text-xl border-[7px] border-[#FFF1D8] py-5 px-5 mb-10">
          <h1>
            <strong>Want to join the fun?</strong> Follow us on social media,
            check our calendar, or stop by and see what’s coming up.
          </h1>
          <h1 className="mt-1 text-[#EF8E25]">
            There’s always something new brewing at Coffee Break, and there’s
            always room for you.
          </h1>
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Events;
