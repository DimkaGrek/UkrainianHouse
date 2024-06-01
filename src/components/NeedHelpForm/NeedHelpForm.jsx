export const NeedHelpForm = () => {
  return (
    <>
      <form name="contacts-form" className="mb-[34px] md:mb-[30px] lg:mb-0">
        <p className="font-semibold text-[20px] leading-[1.2] text-[#1e1e1e] mb-[16px] md:font-normal md:leading-[1.4] md:w-[500px] md:mb-[26px] lg:font-bold lg:text-[26px] lg:leading-[1.4]">
          Need help, have feedback, or want to collaborate? Contact us!
        </p>
        <div className="flex flex-col gap-[6px] mb-[12px] md:mb-[18px]">
          <label className="font-proza font-normal text-[16px] text-[#1e1e1e]">
            Name
          </label>
          <input
            className="py-[14px] px-[18px] w-full h-[50px] md:h-[52px] border border-[#b3b3b3] rounded-[10px] bg-[#fff] text-[#1e1e1e] placeholder-[#666] outline-none hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300 md:text-[20px]"
            type="text"
            name="user-name"
            id="user-name"
            placeholder="Type your name..."
          />
        </div>
        <div className="flex flex-col gap-[6px] mb-[12px] md:mb-[18px]">
          <label className="font-normal text-[16px] text-[#1e1e1e]">
            Phone
          </label>
          <input
            className="py-[14px] px-[18px] w-full h-[50px] md:h-[52px] border border-[#b3b3b3] rounded-[10px] bg-[#fff] text-[#1e1e1e] placeholder-[#666] outline-none hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300 md:text-[20px]"
            type="tel"
            name="user-phone"
            id="user-phone"
            placeholder="+xx(xx) xxx xx xx"
          />
        </div>
        <div className="flex flex-col gap-[6px] mb-[12px] md:mb-[18px]">
          <label className="font-normal text-[16px] text-[#1e1e1e]">
            Email
          </label>
          <input
            className="py-[14px] px-[18px] w-full h-[50px] md:h-[52px] border border-[#b3b3b3] rounded-[10px] bg-[#fff] text-[#1e1e1e] placeholder-[#666] outline-none hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300 md:text-[20px]"
            type="email"
            name="user-email"
            id="user-email"
            placeholder="Type your email..."
          />
        </div>

        <div className="flex flex-col gap-[6px] mb-[12px] md:mb-[18px]">
          <label className="font-normal text-[16px] leading-[1.4] text-[#1e1e1e]">
            Your message
          </label>
          <textarea
            className="overflow-hidden resize-none w-full h-[123px] py-[14px] px-[18px] border border-[#b3b3b3] rounded-[10px] bg-[#fff] text-[#1e1e1e] leading-[1.4] placeholder-[#666] md:placeholder:w-[550px] lg:placeholder:w-[390px] outline-none hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300 sm-max:h-[145px] md:h-[110px] md:text-[20px] md:leading-[1.2] lg:h-[129px]"
            name="user-comment"
            id="user-comment"
            rows="5"
            placeholder="Tell us what's on your mind! We're happy to answer your questions, hear your feedback, or just chat about... well, anything!"
          ></textarea>
        </div>

        <button
          type="submit"
          className="border border-[#1e1e1e] rounded-[10px] py-[10px] px-[18px] w-full h-[44px] font-bold text-[16px] text-[#1e1e1e] leading-none hover:bg-[#ffd437] focus:bg-[#ffd437] transition duration-300 md:text-[20px] md:font-bold md:h-[52px]"
        >
          Submit
        </button>
      </form>
    </>
  );
};
