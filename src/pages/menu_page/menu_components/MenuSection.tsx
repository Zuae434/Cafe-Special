import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import MenuCard from "./MenuCard";

type SectionItem = {
  image: string;
  title: string;
  subtitle: string;
};

type MenuSectionProps = {
  title: string;
  items: SectionItem[];
};

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { events } = useDraggable(ref as React.MutableRefObject<HTMLElement>);

  return (
    <section className="mt-10 py-8 px-4">
      <h2 className="text-6xl font-serif font-bold mb-6 indent-10 text-title-text">
        {title}
      </h2>
      <div
        ref={ref}
        {...events}
        className="flex flex-row overflow-x-auto scrollbar-hide"
      >
        <div className="flex flex-row">
          {items.map((item, i) => (
            <MenuCard
              key={i}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
