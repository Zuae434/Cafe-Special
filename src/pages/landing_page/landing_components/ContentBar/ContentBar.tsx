import type { ReactNode } from "react";

type ContentBarProps = {
  content: ReactNode[];
};

const ContentBar: React.FC<ContentBarProps> = ({ content }) => {
  return (
    <>
      <h1 className="flex flex-row justify-around bg-[#764D3D] text-white/100 items-center min-h-[50px] font-bold">
        {content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </h1>
    </>
  );
};
export default ContentBar;
