import { Link } from "react-router-dom";
import { Activities } from "components";

import { images } from "../../assets";

export const GetInvolved = () => {
  const { homeImages } = images;

  return (
    <section className="relative bg-[url('../../assets/images/home/ManwithFlag@2x_tablet.webp')] lg:mb-[40px]">
      <div className="md:mb-[40px] md:flex md:flex-row-reverse md:justify-between lg:mb-[28px] lg:flex-col">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${homeImages.friendsImg5} 1x, ${homeImages.friendsImg6} 2x`}
            height="413"
            width="473"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${homeImages.friendsImg3} 1x, ${homeImages.friendsImg4} 2x`}
            type="image/webp"
            height="274"
            width="310"
          />

          <img
            className="mb-[34px] md:mb-0 lg:absolute lg:left-[-100px] lg:top-[-380px]"
            src={homeImages.friendsImg1}
            srcSet={`${homeImages.friendsImg1} 1x, ${homeImages.friendsImg2} 2x`}
            alt="Photo of friends"
            height="247"
            width="300"
          />
        </picture>
        <div className="md:w-[272px] lg:w-[516px]">
          <h2 className="font-proza-semibold mb-[24px] text-[20px] font-[600] leading-[1.6] md:text-[26px] md:font-[500] md:leading-[1.3] lg:mb-[50px] lg:text-[60px]">
            Get Involved!
          </h2>
          <p className="mb-[30px] font-istok text-[16px] leading-[1.37] md:mb-[28px] md:text-[14px] md:leading-[1.29] lg:mb-0 lg:text-[24px] lg:leading-[1.42]">
            Come <span className="md:font-[700] md:leading-[1.43] lg:font-[400]">join</span> our
            vibrant activities and{" "}
            <span className="md:font-[700] md:leading-[1.43] lg:font-[400]">
              {" "}
              <br className="hidden md:block lg:hidden" />
              explore
            </span>{" "}
            new horizons. Whether you&#39;re into learning, having fun, or finding inner peace,
            there&#39;s <span className="lg:font-[700]"> something for everyone </span> here.
          </p>
          <p className="mb-[44px] font-istok text-[16px] leading-[1.37] md:hidden">
            With a vision of bridging cultures and building connections, we strive to be a beacon of
            Ukrainian <span className="font-[700] md:font-[400]">culture and identity</span>{" "}
            <span className="block md:inline">in the heart of Limburg.</span>
          </p>
        </div>
      </div>
      <div className="flex-col-reverse md:flex lg:relative">
        <Activities />
        <div className="top-[160px] flex-col gap-[24px] md:absolute md:flex lg:relative lg:top-0 lg:w-[516px]">
          <p className="mb-[20px] font-istok leading-[1.37] md:mb-0 md:text-[14px] md:leading-[1.29] lg:text-[24px] lg:leading-[1.42]">
            Step into our center and dive into the
            <br /> rich world of{" "}
            <span className="font-[700] md:font-[400] lg:font-[700]">Ukrainian culture!</span>
          </p>
          <Link
            to="/contacts"
            className="mb-[75px] flex h-[44px] w-full items-center justify-center gap-[8px] rounded-[10px] border-[1px] border-[#1e1e1e] text-[16px] font-[700] leading-[1.5] text-[#1e1e1e] transition duration-300 hover:bg-[#ffc520] focus:bg-[#ffc520] md:mb-0 md:w-[278px] lg:h-[52px] lg:w-[338px] lg:text-[20px]"
            aria-label="Link to contacts"
          >
            Contact Us to Get More Details
          </Link>
        </div>
      </div>
    </section>
  );
};
