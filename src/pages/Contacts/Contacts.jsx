import {
  NeedHelpForm,
  GoogleMap,
  CarouselTeam,
  Address,
} from '../../components';

import contacts_mobile1x from '../../assets/images/contacts/contacts_mobile1x.png';
import contacts_mobile2x from '../../assets/images/contacts/contacts_mobile2x.png';
import contacts_2_mobile1x from '../../assets/images/contacts/contacts_2_mobile1x.png';
import contacts_2_mobile2x from '../../assets/images/contacts/contacts_2_mobile2x.png';
import contacts_2_tablet1x from '../../assets/images/contacts/contacts_2_tablet1x.png';
import contacts_2_tablet2x from '../../assets/images/contacts/contacts_2_tablet2x.png';
import contacts_2_desktop1x from '../../assets/images/contacts/contacts_2_desktop1x.png';
import contacts_2_desktop2x from '../../assets/images/contacts/contacts_2_desktop2x.png';
import franko_mobile1x from '../../assets/images/contacts/franko_mobile1x.png';
import franko_mobile2x from '../../assets/images/contacts/franko_mobile2x.png';

const Contacts = () => {
  return (
    <>
      <img
        srcSet={`${contacts_mobile1x} 1x, ${contacts_mobile2x} 2x`}
        src={contacts_mobile1x}
        alt="Images of portraits of young people"
        className="w-[342px] max-h-[80px] mb-[30px] md:hidden"
        loading="lazy"
      />
      <h3 className="hidden md:block font-proza-semibold font-semibold text-[20px] text-[#222] leading-[1.6] mb-[50px] lg:font-proza-medium lg:font-medium lg:text-[60px] lg:leading-[1.3] lg:text-[#1e1e1e] lg:mb-[44px]">
        Contacts
      </h3>
      <div className="rounded-[18px] py-[34px] px-[24px] w-full bg-[#daefff] mb-[30px] lg:flex lg:gap-[90px]">
        <NeedHelpForm />
        <GoogleMap />
      </div>
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={`${contacts_2_desktop1x} 1x, ${contacts_2_desktop2x} 2x`}
          height="170"
          width="1240"
          loading="lazy"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${contacts_2_tablet1x} 1x, ${contacts_2_tablet2x} 2x`}
          height="80"
          width="704"
          loading="lazy"
        />
        <img
          srcSet={`${contacts_2_mobile1x} 1x, ${contacts_2_mobile2x} 2x`}
          src={contacts_2_mobile1x}
          height="80"
          width="339"
          alt="Images of portraits of young people"
          className="max-w-none sm-max:w-full mb-[30px]"
          loading="lazy"
        />
      </picture>

      <Address
        listClass="flex flex-col items-center sm-max:items-start gap-[16px] rounded-[18px] p-[20px] bg-[#daefff] w-full h-full mb-[34px] md:mb-[50px] md:flex-row md:items-center md:justify-between md:py-[20px] text-[#1e1e1e] font-normal text-[16px] leading-[1.3] not-italic sm-max:text-[12px] md:text-[14px] lg:text-[24px] lg:py-[24px]"
        itemClass="flex gap-[6px] items-center sm-max:w-[232px]"
        iconClass="fill-[#1e1e1e] sm-max:size-[18px] lg:size-[28px]"
      />

      <h3 className="hidden md:block font-proza-semibold font-semibold text-[20px] text-[#222] leading-[1.6] mb-[16px] lg:hidden">
        Our team
      </h3>

      <CarouselTeam />

      <img
        srcSet={`${franko_mobile1x} 1x, ${franko_mobile2x} 2x`}
        src={franko_mobile1x}
        alt="Image of the writer Ivan Franko"
        width="294"
        height="356"
        className="mb-[40px] sm-max:w-[246px] sm-max:h-[308px] md:hidden"
        loading="lazy"
      />
    </>
  );
};

export default Contacts;
