import contacts_mobile1x from '../../assets/images/contacts/contacts_mobile1x.png';
import contacts_mobile2x from '../../assets/images/contacts/contacts_mobile2x.png';
import contacts_2_mobile1x from '../../assets/images/contacts/contacts_2_mobile1x.png';
import contacts_2_mobile2x from '../../assets/images/contacts/contacts_2_mobile2x.png';
import franko_mobile1x from '../../assets/images/contacts/franko_mobile1x.png';
import franko_mobile2x from '../../assets/images/contacts/franko_mobile2x.png';

import photo_shevtsova_mob1x from '../../assets/images/contacts/team/photo_shevtsova_mob1x.jpg';
import photo_shevtsova_mob2x from '../../assets/images/contacts/team/photo_shevtsova_mob2x.jpg';
import photo_kulyna_mob1x from '../../assets/images/contacts/team/photo_kulyna_mob1x.jpg';
import photo_kulyna_mob2x from '../../assets/images/contacts/team/photo_kulyna_mob2x.jpg';
import photo_levchuk_mob1x from '../../assets/images/contacts/team/photo_levchuk_mob1x.jpg';
import photo_levchuk_mob2x from '../../assets/images/contacts/team/photo_levchuk_mob2x.jpg';
import photo_oliinyk_mob1x from '../../assets/images/contacts/team/photo_oliinyk_mob1x.jpg';
import photo_oliinyk_mob2x from '../../assets/images/contacts/team/photo_oliinyk_mob2x.jpg';
import photo_shalobodynska_mob1x from '../../assets/images/contacts/team/photo_shalobodynska_mob1x.jpg';
import photo_shalobodynska_mob2x from '../../assets/images/contacts/team/photo_shalobodynska_mob2x.jpg';
import photo_sukhoviy_mob1x from '../../assets/images/contacts/team/photo_sukhoviy_mob1x.jpg';
import photo_sukhoviy_mob2x from '../../assets/images/contacts/team/photo_sukhoviy_mob2x.jpg';
import photo_svintsitska_mob1x from '../../assets/images/contacts/team/photo_svintsitska_mob1x.jpg';
import photo_svintsitska_mob2x from '../../assets/images/contacts/team/photo_svintsitska_mob2x.jpg';
import photo_zhykhareva_tolstik_mob1x from '../../assets/images/contacts/team/photo_zhykhareva_tolstik_mob1x.jpg';
import photo_zhykhareva_tolstik_mob2x from '../../assets/images/contacts/team/photo_zhykhareva_tolstik_mob2x.jpg';

import { Icon } from '../../components/Icon/Icon';

const Contacts = () => {
  return (
    <>
      <img
        srcSet={`${contacts_mobile1x} 1x, ${contacts_mobile2x} 2x`}
        src={contacts_mobile1x}
        alt="Images of portraits of young people"
        className="w-[342px] h-[80px] mb-[30px] md:hidden"
        loading="lazy"
      />
      <h3 className="hidden md:block font-proza-semibold font-semibold text-[20px] text-[#222] leading-[1.6] mb-[50px] lg:font-proza-medium lg:font-medium lg:text-[60px] lg:leading-[1.3] lg:text-[#1e1e1e] lg:mb-[44px]">
        Contacts
      </h3>
      <form
        className="rounded-[18px] py-[34px] px-[24px] w-[342px] h-[1196px] bg-[#daefff] mb-[30px]"
        name="contacts-form"
      >
        <p className="font-semibold text-[20px] leading-[1.2] text-[#1e1e1e] mb-[16px]">
          Need help, have feedback, or want to collaborate? Contact us!
        </p>
        <div className="flex flex-col gap-[6px] mb-[12px]">
          <label className="font-proza font-normal text-[16px] text-[#1e1e1e]">
            Name
          </label>
          <input
            className="py-[14px] px-[18px] w-full h-[50px] border border-[#b3b3b3] rounded-[10px] bg-[#fff] placeholder-[#666] outline-none hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300"
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
            className="py-[14px] px-[18px] w-full h-[50px] border border-[#b3b3b3] rounded-[10px] bg-[#fff] placeholder-[#666] outline-none hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300"
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
            className="py-[14px] px-[18px] w-full h-[50px] border border-[#b3b3b3] rounded-[10px] bg-[#fff] placeholder-[#666] outline-none hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300"
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
            className="py-[14px] px-[18px] w-full h-[125px] border border-[#b3b3b3] rounded-[10px] bg-[#fff] placeholder-[#666] outline-none hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300"
            name="user-comment"
            id="user-comment"
            rows="7"
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

      <img
        srcSet={`${contacts_2_mobile1x} 1x, ${contacts_2_mobile2x} 2x`}
        src={contacts_2_mobile1x}
        alt="Images of portraits of young people"
        className="w-[342px] h-[80px] mb-[30px]"
        loading="lazy"
      />

      <address className="rounded-[18px] py-[34px] px-[24px] bg-[#daefff] w-[342px] h-[156px] mb-[34px]">
        <ul className="flex flex-col gap-[16px] text-[#1e1e1e] font-normal text-[16px] leading-[1.3] not-italic">
          <li className="flex gap-[6px]">
            <Icon
              name="mail"
              className="fill-[#1e1e1e]"
              size="24"
              viewbox="24"
            />
            ukrainianhouse.maastricht@gmail.com
          </li>
          <li className="flex gap-[6px]">
            <Icon name="adress" className="fill-[#1e1e1e]" size="24" />
            Oranjeplein 96, Maastricht, Netherlands, 6224 KV
          </li>
        </ul>
      </address>

      <div className="carousel carousel-center max-w-[342px] space-x-[24px] mb-[16px]">
        <div className="carousel-item flex flex-col w-[294px] h-[413px] rounded-[18px]">
          <img
            srcSet={`${photo_shevtsova_mob1x} 1x, ${photo_shevtsova_mob2x} 2x`}
            src={photo_shevtsova_mob1x}
            alt="Photo of Yevheniia Shevtsova"
            className="rounded-[18px]rounded-box w-[294px] h-[299px] mb-[12px]"
            loading="lazy"
          />
          <p className="font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[12px]">
            Yevheniia Shevtsova
          </p>
          <p className="font-normal text-[16px] leading-[1.3] text-center text-black mb-[18px]">
            Volunteer, Yoga Teacher, and Event Coordinator
          </p>
        </div>
        <div className="carousel-item flex flex-col w-[295px] h-[421px]">
          <img
            srcSet={`${photo_kulyna_mob1x} 1x, ${photo_kulyna_mob2x} 2x`}
            src={photo_kulyna_mob1x}
            alt="Photo of Olha Kulyna"
            className="rounded-[18px] w-[294px] h-[299px] mb-[12px]"
            loading="lazy"
          />
          <p className="font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[12px]">
            Olha Kulyna
          </p>
          <p className="font-normal text-[16px] leading-[1.3] text-center text-black mb-[18px]">
            Co-founder, Coordinator of the Ukrainian Echo Newspaper, Translator
          </p>
        </div>
        <div className="carousel-item flex flex-col w-[295px] h-[421x]">
          <img
            srcSet={`${photo_shalobodynska_mob1x} 1x, ${photo_shalobodynska_mob2x} 2x`}
            src={photo_shalobodynska_mob1x}
            alt="Photo of Julia Shalobodynska"
            className="rounded-[18px] w-[294px] h-[299px] mb-[12px]"
            loading="lazy"
          />
          <p className="font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[12px]">
            Julia Shalobodynska
          </p>
          <p className="font-normal text-[16px] leading-[1.3] text-center text-black mb-[18px]">
            Co-founder, Website Manager, and Ukrainian library Manager
          </p>
        </div>
        <div className="carousel-item flex flex-col w-[295px] h-[421px]">
          <img
            srcSet={`${photo_svintsitska_mob1x} 1x, ${photo_svintsitska_mob2x} 2x`}
            src={photo_svintsitska_mob1x}
            alt="Photo of Viktoriia Svintsitska"
            className="rounded-[18px] w-[294px] h-[299px] mb-[12px]"
            loading="lazy"
          />
          <p className="font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[12px]">
            Viktoriia Svintsitska
          </p>
          <p className="font-normal text-[16px] leading-[1.3] text-center text-black mb-[18px]">
            Special Events Coordinator, and craftsperson
          </p>
        </div>
        <div className="carousel-item flex flex-col w-[295px] h-[421px]">
          <img
            srcSet={`${photo_oliinyk_mob1x} 1x, ${photo_oliinyk_mob2x} 2x`}
            src={photo_oliinyk_mob1x}
            alt="Photo of Julia Oliinyk"
            className="rounded-[18px] w-[294px] h-[299px] mb-[12px]"
            loading="lazy"
          />
          <p className="font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[12px]">
            Julia Oliinyk
          </p>
          <p className="font-normal text-[16px] leading-[1.3] text-center text-black mb-[18px]">
            Volunteer, Social Media Specialist, Videographer, and Event
            Coordinator
          </p>
        </div>
        <div className="carousel-item flex flex-col w-[295px] h-[421px]">
          <img
            srcSet={`${photo_levchuk_mob1x} 1x, ${photo_levchuk_mob2x} 2x`}
            src={photo_levchuk_mob1x}
            alt="Photo of Maryna Levchuk"
            className="rounded-[18px] w-[294px] h-[299px] mb-[12px]"
            loading="lazy"
          />
          <p className="font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[12px]">
            Maryna Levchuk
          </p>
          <p className="font-normal text-[16px] leading-[1.3] text-center text-black mb-[18px]">
            Official Photographer
          </p>
        </div>
        <div className="carousel-item flex flex-col w-[295px] h-[421px]">
          <img
            srcSet={`${photo_sukhoviy_mob1x} 1x, ${photo_sukhoviy_mob2x} 2x`}
            src={photo_sukhoviy_mob1x}
            alt="Photo of Olha Sukhoviy"
            className="rounded-[18px] w-[294px] h-[299px] mb-[12px]"
            loading="lazy"
          />
          <p className="font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[12px]">
            Olha Sukhoviy
          </p>
          <p className="font-normal text-[16px] leading-[1.3] text-center text-black mb-[18px]">
            Co-founder, Event Coordinator, Secretary
          </p>
        </div>
        <div className="carousel-item flex flex-col w-[295px] h-[421px]">
          <img
            srcSet={`${photo_zhykhareva_tolstik_mob1x} 1x, ${photo_zhykhareva_tolstik_mob2x} 2x`}
            src={photo_zhykhareva_tolstik_mob1x}
            alt="Photo of Hanna Zhykhareva-Tolstik"
            className="rounded-[18px] w-[294px] h-[299px] mb-[12px]"
            loading="lazy"
          />
          <p className="font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[12px]">
            Hanna Zhykhareva-Tolstik
          </p>
          <p className="font-normal text-[16px] leading-[1.3] text-center text-black mb-[18px]">
            Project Manager, PR Manager, and Lecturer
          </p>
        </div>
      </div>

      <img
        srcSet={`${franko_mobile1x} 1x, ${franko_mobile2x} 2x`}
        src={franko_mobile1x}
        alt="Image of the writer Ivan Franko"
        className="w-[294px] h-[356px] mb-[40px]"
        loading="lazy"
      />
    </>
  );
};

export default Contacts;
