import ImageBackground from "./ContactImages/ContactBG.png";
import Facebook from "./ContactImages/Facebook.png";
import Instagram from "./ContactImages/Instagram.png";
import Twitter from "./ContactImages/Twitter.png";

const LandingContact = () => {
  return (
    <>
      <div className="bg-repeating-stripes relative h-[500px]">
        <img
          src={ImageBackground}
          alt="Contact"
          className="absolute inset-0 w-[50%] h-[500px] object-cover z-0"
        />
        <div className="absolute inset-0 w-[50%] h-[500px] bg-[#764D3D] opacity-1 z-1"></div>
        <div className="absolute inset-0 w-[50%] left-[50%] h-[500px] bg-black z-1"></div>
        <div className="absolute inset-0 w-full h-[500px] bg-repeating-stripes-brown z-2"></div>
        <div className="absolute inset-0 w-full h-[500px] brown-overlay z-3"></div>

        {/* Grid Content Column 1 */}
        <div className="relative z-10 grid grid-cols-2 gap-y-2 font-georgia">
          <div className="col-span-1 flex justify-center">
            <div className="w-[320px] mt-[50px] gap-8 flex flex-col items-start">
              <h1 className="text-white text-5xl">COME ON IN!</h1>
              <h1 className="text-[#FFF1D8] text-4xl">OPEN DAILY</h1>
              <h1 className="text-white text-3xl">06AM - 11PM</h1>
              <button className="bg-[#BE9B79] text-[#FFF1D8] h-[80px] w-[320px] text-4xl cursor-pointer">
                ORDER ONLINE
              </button>
              <div className="flex flex-row items-center cursor-pointer gap-2">
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="h-[50px] w-[50px]"
                />
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="h-[50px] w-[50px]"
                />
                <img
                  src={Twitter}
                  alt="Twitter"
                  className="h-[108px] w-[61px]"
                />
              </div>
            </div>
          </div>

          {/* Grid Content Column 2 */}
          <div className="col-span-1 flex justify-center">
            <div className="w-[320px] mt-[50px] gap-8 flex flex-col items-start">
              <h1 className="text-white text-5xl">CONTACT</h1>
              <h1 className="text-[#FFF1D8] text-4xl">PHONE</h1>
              <h1 className="text-white text-3xl">(123) 456-7890</h1>
              <h1 className="text-[#FFF1D8] text-4xl">ADDRESS</h1>
              <h1 className="text-white text-4xl">
                123 Main Street, City, Country
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingContact;
