import { NeedHelpForm, GoogleMap, CarouselTeam, Address } from "../../components";

import { images } from "../../assets";

const ContactsPage = () => {
  const { contactsImages } = images;
  return (
    <>
      <h3 className="font-proza-semibold lg:font-proza-medium mb-[50px] hidden text-[20px] font-semibold leading-[1.6] text-[#222] md:block lg:mb-[44px] lg:text-[60px] lg:font-medium lg:leading-[1.3] lg:text-[#1e1e1e]">
        Contacts
      </h3>
      <div className="contacts-form-wrapper relative mb-[35vw] mt-[35vw] w-full rounded-[18px] bg-[#daefff] px-[24px] py-[34px] md:mb-[20vw] md:mt-0 lg:mb-[14vw] lg:flex lg:gap-[90px]">
        <NeedHelpForm />
        <GoogleMap />
      </div>

      <Address
        listClass="flex flex-col items-center sm-max:items-start gap-[16px] rounded-[18px] p-[20px] bg-[#daefff] w-full h-full mb-[34px] md:mb-[50px] md:flex-row md:items-center md:justify-between md:py-[20px] text-[#1e1e1e] font-normal text-[16px] leading-[1.3] not-italic sm-max:text-[12px] md:text-[14px] lg:text-[24px] lg:py-[24px]"
        itemClass="flex gap-[6px] items-center sm-max:w-[232px]"
        iconClass="fill-[#1e1e1e] sm-max:size-[18px] lg:size-[28px]"
      />

      <h3 className="font-proza-semibold mb-[16px] hidden text-[20px] font-semibold leading-[1.6] text-[#222] md:block lg:hidden">
        Our team
      </h3>

      <CarouselTeam />

      <img
        srcSet={`${contactsImages.franko_mobile1x} 1x, ${contactsImages.franko_mobile2x} 2x`}
        src={contactsImages.franko_mobile1x}
        alt="Image of the writer Ivan Franko"
        width="294"
        height="356"
        className="mb-[40px] sm-max:h-[308px] sm-max:w-[246px] md:hidden"
        loading="lazy"
      />
    </>
  );
};

export default ContactsPage;
