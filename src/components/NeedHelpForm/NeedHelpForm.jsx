export const NeedHelpForm = () => {
  return (
    <>
      <form name="contacts-form" className="mb-[34px]">
        <p className="font-semibold text-[20px] leading-[1.2] text-[#1e1e1e] mb-[16px]">
          Need help, have feedback, or want to collaborate? Contact us!
        </p>
        <div className="flex flex-col gap-[6px] mb-[12px]">
          <label className="font-proza font-normal text-[16px] text-[#1e1e1e]">
            Name
          </label>
          <input
            className="py-[14px] px-[18px] w-full h-[50px] border border-[#b3b3b3] rounded-[10px] bg-[#fff] text-[#1e1e1e] placeholder-[#666] outline-none hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300"
            type="text"
            name="user-name"
            id="user-name"
            placeholder="Type your name..."
          />
        </div>
        <div className="flex flex-col gap-[6px] mb-[12px]">
          <label className="font-normal text-[16px] text-[#1e1e1e]">
            Phone
          </label>
          <input
            className="py-[14px] px-[18px] w-full h-[50px] border border-[#b3b3b3] rounded-[10px] bg-[#fff] text-[#1e1e1e] placeholder-[#666] outline-none hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300"
            type="tel"
            name="user-phone"
            id="user-phone"
            placeholder="+xx(xx) xxx xx xx"
          />
        </div>
        <div className="flex flex-col gap-[6px] mb-[12px]">
          <label className="font-normal text-[16px] text-[#1e1e1e]">
            Email
          </label>
          <input
            className="py-[14px] px-[18px] w-full h-[50px] border border-[#b3b3b3] rounded-[10px] bg-[#fff] text-[#1e1e1e] placeholder-[#666] outline-none hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300"
            type="email"
            name="user-email"
            id="user-email"
            placeholder="Type your email..."
          />
        </div>

        <div className="flex flex-col gap-[6px] mb-[12px]">
          <label className="font-normal text-[16px] leading-[1.4] text-[#1e1e1e]">
            Your message
          </label>
          <textarea
            className="py-[14px] px-[18px] w-full h-[125px] border resize-none border-[#b3b3b3] rounded-[10px] bg-[#fff] text-[#1e1e1e] placeholder-[#666] outline-none hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300"
            name="user-comment"
            id="user-comment"
            rows="4"
            placeholder="Tell us what's on your mind! We're happy to answer your questions, hear your feedback, or just chat about... well, anything!"
          ></textarea>
        </div>

        <button
          type="submit"
          className="border border-[#1e1e1e] rounded-[10px] py-[10px] px-[18px] w-[294px] h-[44px] font-bold text-[16px] text-[#1e1e1e] leading-none hover:bg-[#ffd437] focus:bg-[#ffd437] transition duration-300"
        >
          Submit
        </button>
      </form>
    </>
  );
};
