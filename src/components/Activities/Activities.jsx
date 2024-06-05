import { Link } from 'react-router-dom';
import { Icon } from 'components';
import friendsImg1 from '../../assets/images/home/Friends@1x_mobile.png';
import friendsImg2 from '../../assets/images/home/Friends@2x_mobile.png';

import friendsImg3 from '../../assets/images/home/Friends@1x_tablet.png';
import friendsImg4 from '../../assets/images/home/Friends@2x_tablet.png';

import friendsImg5 from '../../assets/images/home/Friends@1x_desktop.png';
import friendsImg6 from '../../assets/images/home/Friends@2x_desktop.png';

export const Activities = () => {
  return (
    <section>
      <div>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${friendsImg3} 1x, ${friendsImg4} 2x`}
            type="image/png"
            height="274"
            width="310"
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${friendsImg5} 1x, ${friendsImg6} 2x`}
            height="413"
            width="473"
            type="image/png"
          />
          <img
            className="mb-[34px]"
            src={friendsImg1}
            srcSet={`${friendsImg1} 1x, ${friendsImg2} 2x`}
            alt="Photo of friends"
            height="247"
            width="300"
          />
        </picture>
        <h2 className="font-proza-semibold text-[20px] leading-[1.6] mb-[24px] font-[600]">
          Get Involved!
        </h2>
        <p className="leading-[1.37] mb-[30px] font-istok">
          Come join our vibrant activities and explore new horizons. Whether
          you&#39;re into learning, having fun, or finding inner peace,
          there&#39;s something for everyone here.
        </p>
        <p className="leading-[1.37] font-istok">
          With a vision of bridging cultures and building connections, we strive
          to be a beacon of Ukrainian{' '}
          <span className="font-[700] ">culture and identity</span>
        </p>
        <p className="leading-[1.37] mb-[44px] font-istok">
          {' '}
          in the heart of Limburg.
        </p>
      </div>
      <ul className="flex flex-col gap-[16px] mb-[44px] leading-[1.2] text-[20px] font-[500] font-proza-medium">
        <li className="font-[600] flex items-center gap-[8px]">
          <Icon
            className="fill-[#ffd437] scale-x-[-1]"
            name="heart"
            size={15}
          />
          <Link className="border-b-2 border-[#2355cc] text-[#2355cc]">
            Ukrainian Echo
          </Link>
        </li>
        <li className="flex items-center gap-[8px]">
          {' '}
          <Icon
            name="heart"
            className="fill-[#ffd437] scale-x-[-1]"
            size={15}
          />{' '}
          Dutch Lessons
        </li>
        <li className="flex items-center gap-[8px]">
          <Icon
            name="heart"
            className="fill-[#ffd437] scale-x-[-1]"
            size={15}
          />
          Cultural Events
        </li>
        <li className="flex items-center gap-[8px]">
          {' '}
          <Icon
            name="heart"
            className="fill-[#ffd437] scale-x-[-1]"
            size={15}
          />{' '}
          Integration Lectures
        </li>
        <li className="flex items-center gap-[8px]">
          {' '}
          <Icon
            name="heart"
            className="fill-[#ffd437] scale-x-[-1]"
            size={15}
          />{' '}
          Creative Workshops
        </li>
        <li className="flex items-center gap-[8px]">
          {' '}
          <Icon
            name="heart"
            className="fill-[#ffd437] scale-x-[-1]"
            size={15}
          />{' '}
          Yoga Sessions
        </li>
        <li className="flex items-center gap-[8px]">
          {' '}
          <Icon
            name="heart"
            className="fill-[#ffd437] scale-x-[-1]"
            size={15}
          />{' '}
          Cinema
        </li>
        <li className="font-[600] flex items-center gap-[8px]">
          <Icon
            name="heart"
            className="fill-[#ffd437] scale-x-[-1]"
            size={15}
          />
          <Link
            to="/library"
            className="border-b-2 border-[#2355cc] text-[#2355cc]"
          >
            Library
          </Link>
        </li>
      </ul>
      <p className="leading-[1.37] mb-[20px] font-istok">
        Step into our center and dive into the
        <br /> rich world of{' '}
        <span className="font-[700] ">Ukrainian culture!</span>
      </p>
      <Link
        to="/contacts"
        className=" font-[700] text-[#1e1e1e] mb-[75px] text-[16px]  leading-[1.5] h-[44px] w-full flex items-center justify-center gap-[8px] border-[1px] border-[#1e1e1e] rounded-[10px] hover:bg-[#ffc520]  focus:bg-[#ffc520] transition duration-300"
        aria-label="Link to contacts"
      >
        Contact Us to Get More Details
      </Link>
    </section>
  );
};
