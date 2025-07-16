const NewsLetter = () => {
  return (
    <>
      <div className="bg-repeating-stripes bg-[#F7F7F7]">
        <div className="container mx-auto flex flex-row flex-start m-10 section-yellow-overlay pl-20 pb-10 pt-10">
          <div className="flex flex-col">
            <h1 className="text-title-text font-bold text-4xl">
              Stay in the loop!
            </h1>
            <h1 className="text-black text-2xl font-sans mt-5">
              Get the latest events, discounts, and offers straight to your
              email.
            </h1>
            <div className="flex flex-row items-center gap-10 h-[100px] mt-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[500px] h-[85px] bg-[#F7F7F7] border-2 border-[#7D7A7A] text-[#7D7A7A]/80 rounded-[10px] text-2xl pl-5"
              />
              <button className="w-[212px] h-[70px] bg-[#F3B54A] text-black font-bold rounded-[18px] text-2xl cursor-pointer">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
