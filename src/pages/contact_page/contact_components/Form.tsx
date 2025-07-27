const Form = () => {
  return (
    <>
      <form className="w-full space-y-4 text-white justify-center items-center">
        <div className="flex flex-row justify-between indent-3 mb-10">
          <div className="flex flex-col">
            <p className="mb-2 text-2xl">
              First Name <span className="text-[#FF0000]">*</span>
            </p>
            <input
              type="text"
              placeholder="First Name"
              className="min-w-[575px] min-h-[60px] px-3 py-2 bg-white bg-opacity-20 text-placeholder-text border border-white rounded-[100px]"
            />
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-2xl">
              Last Name <span className="text-[#FF0000]">*</span>
            </p>
            <input
              type="text"
              placeholder="Last Name"
              className="min-w-[575px] min-h-[60px] px-3 py-2 bg-white bg-opacity-20 text-placeholder-text border border-white rounded-[100px]"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between indent-3 mb-10">
          <div className="flex flex-col">
            <p className="mb-2 text-2xl">
              Email <span className="text-[#FF0000]">*</span>
            </p>
            <input
              type="email"
              placeholder="Email Address"
              className="min-w-[575px] min-h-[60px] px-3 py-2 bg-white bg-opacity-20 text-placeholder-text border border-white rounded-[100px]"
            />
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-2xl">
              Phone <span className="text-[#FF0000]">*</span>
            </p>
            <input
              type="phone"
              placeholder="Phone Number"
              className="min-w-[575px] min-h-[60px] px-3 py-2 bg-white bg-opacity-20 text-placeholder-text border border-white rounded-[100px]"
            />
          </div>
        </div>
        <div className="flex flex-col indent-3">
          <p className="mb-2 text-2xl">Message</p>
          <textarea
            placeholder="Your Message"
            className="w-full min-h-[152px] px-3 py-2 bg-white bg-opacity-20 text-placeholder-text border border-white rounded-[15px]"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-location-text text-white rounded-[100px] max-h-[48px] max-w-[122px] mt-[45px]"
        >
          <p className="text-2xl cursor-pointer">Submit</p>
        </button>
      </form>
    </>
  );
};

export default Form;
