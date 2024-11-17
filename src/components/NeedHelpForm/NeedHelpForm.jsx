import { Loader, Modal, NeedHelpModal } from "../../components";

import { useNeedHelpForm } from "../../hooks";

export const NeedHelpForm = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    inputClass,
    renderMessage,
    isOpenModal,
    toggleModal,
    isLoading,
  } = useNeedHelpForm();

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="contacts-form"
        name="contacts-form"
        className="mb-[34px] md:mb-[30px] lg:mb-0"
      >
        <p className="mb-[16px] text-[20px] font-semibold leading-[1.2] text-[#1e1e1e] md:mb-[26px] md:w-[500px] md:font-normal md:leading-[1.4] lg:text-[26px] lg:font-bold lg:leading-[1.4]">
          Need help, have feedback, or want to collaborate? Contact us!
        </p>
        <div className="relative mb-[12px] flex flex-col gap-[6px] md:mb-[18px]">
          <label className="font-proza text-[16px] font-normal text-[#1e1e1e]">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Type your name..."
            {...register("name")}
            className={inputClass("name")}
          />
          {renderMessage("name")}
        </div>
        <div className="relative mb-[12px] flex flex-col gap-[6px] md:mb-[18px]">
          <label className="text-[16px] font-normal text-[#1e1e1e]">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Type your phone..."
            {...register("phone")}
            className={inputClass("phone")}
          />
          {renderMessage("phone")}
        </div>
        <div className="relative mb-[12px] flex flex-col gap-[6px] md:mb-[18px]">
          <label className="text-[16px] font-normal text-[#1e1e1e]">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Type your email..."
            {...register("email")}
            className={inputClass("email")}
          />
          {renderMessage("email")}
        </div>

        <div className="relative mb-5 flex flex-col gap-[6px] md:mb-[25px]">
          <label className="text-[16px] font-normal leading-[1.4] text-[#1e1e1e]">
            Your message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Tell us what's on your mind! We're happy to answer your questions, hear your feedback, or just chat about... well, anything!"
            {...register("message")}
            className={inputClass("message")}
          ></textarea>
          {renderMessage("message")}
        </div>

        <button
          type="submit"
          className="h-[44px] w-full rounded-[10px] border border-[#1e1e1e] px-[18px] py-[10px] text-[16px] font-bold leading-none text-[#1e1e1e] transition duration-300 hover:bg-[#ffd437] focus-visible:bg-[#ffd437] md:h-[52px] md:text-[20px] md:font-bold"
        >
          Submit
        </button>
      </form>
      {isOpenModal && (
        <Modal
          toggleModal={toggleModal}
          isOpen={isOpenModal}
          className="bg-white px-[24px] pb-[47px] pt-[36px] lg:py-[181px] lg:pl-[124px] lg:pr-[479px]"
        >
          <NeedHelpModal toggleModal={toggleModal} />
        </Modal>
      )}

      {isLoading && <Loader />}
    </>
  );
};
