import contacts_mobile1x from '../../assets/images/contacts/contacts_mobile1x.png';
import contacts_mobile2x from '../../assets/images/contacts/contacts_mobile2x.png';
import contacts_2_mobile1x from '../../assets/images/contacts/contacts_2_mobile1x.png';
import contacts_2_mobile2x from '../../assets/images/contacts/contacts_2_mobile2x.png';
import franko_mobile1x from '../../assets/images/contacts/franko_mobile1x.png';
import franko_mobile2x from '../../assets/images/contacts/franko_mobile2x.png';

import { Icon } from '../../components/Icon/Icon';

const Contacts = () => {
  return (
    <>
      <img
        srcSet={`${contacts_mobile1x} 1x, ${contacts_mobile2x} 2x`}
        src={contacts_mobile1x}
        alt="Images of portraits of young people"
        className="w-[342px] h-[80px] md:hidden"
        loading="lazy"
      />
      <form className="" name="contacts-form">
        <p className="">
          Need help, have feedback, or want to collaborate? Contact us!
        </p>
        <div className="">
          <label className="">Name</label>
          <div className="">
            <input
              className=""
              type="text"
              name="user-name"
              id="user-name"
              placeholder="Type your name..."
            />
          </div>
        </div>
        <div className="">
          <label className="">Phone</label>
          <div className="">
            <input
              className=""
              type="tel"
              name="user-phone"
              id="user-phone"
              placeholder="+xx(xx) xxx xx xx"
            />
          </div>
        </div>
        <div className="">
          <label className="">Email</label>
          <div className="">
            <input
              className=""
              type="email"
              name="user-email"
              id="user-email"
              placeholder="Type your email..."
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="">Your message</label>
          <textarea
            className=""
            name="user-comment"
            id="user-comment"
            rows="7"
            placeholder="Tell us what's on your mind! We're happy to answer your questions, hear your feedback, or just chat about... well, anything!"
          ></textarea>
        </div>

        <button className="" type="submit">
          Submit
        </button>
      </form>

      <img
        srcSet={`${contacts_2_mobile1x} 1x, ${contacts_2_mobile2x} 2x`}
        src={contacts_2_mobile1x}
        alt="Images of portraits of young people"
        className="w-[342px] h-[80px]"
        loading="lazy"
      />

      <address className="rounded-[18px] py-[34px] px-[18px] bg-[#daefff] w-[342px] h-[156px]">
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

      <img
        srcSet={`${franko_mobile1x} 1x, ${franko_mobile2x} 2x`}
        src={franko_mobile1x}
        alt="Image of the writer Ivan Franko"
        className="w-[294px] h-[404px]"
        loading="lazy"
      />
    </>
  );
};

export default Contacts;
