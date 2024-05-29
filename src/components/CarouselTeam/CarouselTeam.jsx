import photo_shevtsova_mob1x from '../../assets/images/team/photo_shevtsova_mob1x.jpg';
import photo_shevtsova_mob2x from '../../assets/images/team/photo_shevtsova_mob2x.jpg';
import photo_kulyna_mob1x from '../../assets/images/team/photo_kulyna_mob1x.jpg';
import photo_kulyna_mob2x from '../../assets/images/team/photo_kulyna_mob2x.jpg';
import photo_levchuk_mob1x from '../../assets/images/team/photo_levchuk_mob1x.jpg';
import photo_levchuk_mob2x from '../../assets/images/team/photo_levchuk_mob2x.jpg';
import photo_oliinyk_mob1x from '../../assets/images/team/photo_oliinyk_mob1x.jpg';
import photo_oliinyk_mob2x from '../../assets/images/team/photo_oliinyk_mob2x.jpg';
import photo_shalobodynska_mob1x from '../../assets/images/team/photo_shalobodynska_mob1x.jpg';
import photo_shalobodynska_mob2x from '../../assets/images/team/photo_shalobodynska_mob2x.jpg';
import photo_sukhoviy_mob1x from '../../assets/images/team/photo_sukhoviy_mob1x.jpg';
import photo_sukhoviy_mob2x from '../../assets/images/team/photo_sukhoviy_mob2x.jpg';
import photo_svintsitska_mob1x from '../../assets/images/team/photo_svintsitska_mob1x.jpg';
import photo_svintsitska_mob2x from '../../assets/images/team/photo_svintsitska_mob2x.jpg';
import photo_zhykhareva_tolstik_mob1x from '../../assets/images/team/photo_zhykhareva_tolstik_mob1x.jpg';
import photo_zhykhareva_tolstik_mob2x from '../../assets/images/team/photo_zhykhareva_tolstik_mob2x.jpg';

export const CarouselTeam = () => {
  return (
    <div className="carousel carousel-center max-w-full space-x-[24px] mb-[16px] md:mb-[94px]">
      <div className="carousel-item flex flex-col w-[294px] h-[413px] rounded-[18px] sm-max:w-[239px] sm-max:h-[368px]">
        <img
          srcSet={`${photo_shevtsova_mob1x} 1x, ${photo_shevtsova_mob2x} 2x`}
          src={photo_shevtsova_mob1x}
          alt="Photo of Yevheniia Shevtsova"
          className="rounded-[18px] w-full h-[299px] mb-[12px] sm-max:h-[244px]"
          loading="lazy"
        />
        <p className="font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[12px]">
          Yevheniia Shevtsova
        </p>
        <p className="font-normal text-[16px] leading-[1.3] text-center text-black mb-[18px]">
          Volunteer, Yoga Teacher, and Event Coordinator
        </p>
      </div>
      <div className="carousel-item flex flex-col w-[294px] h-[413px] rounded-[18px] sm-max:w-[239px] sm-max:h-[368px]">
        <img
          srcSet={`${photo_kulyna_mob1x} 1x, ${photo_kulyna_mob2x} 2x`}
          src={photo_kulyna_mob1x}
          alt="Photo of Olha Kulyna"
          className="rounded-[18px] w-full h-[299px] mb-[12px] sm-max:h-[244px]"
          loading="lazy"
        />
        <p className="font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[12px]">
          Olha Kulyna
        </p>
        <p className="font-normal text-[16px] leading-[1.3] text-center text-black mb-[18px]">
          Co-founder, Coordinator of the Ukrainian Echo Newspaper, Translator
        </p>
      </div>
      <div className="carousel-item flex flex-col w-[294px] h-[413px] rounded-[18px] sm-max:w-[239px] sm-max:h-[368px]">
        <img
          srcSet={`${photo_shalobodynska_mob1x} 1x, ${photo_shalobodynska_mob2x} 2x`}
          src={photo_shalobodynska_mob1x}
          alt="Photo of Julia Shalobodynska"
          className="rounded-[18px] w-full h-[299px] mb-[12px] sm-max:h-[244px]"
          loading="lazy"
        />
        <p className="font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[12px]">
          Julia Shalobodynska
        </p>
        <p className="font-normal text-[16px] leading-[1.3] text-center text-black mb-[18px]">
          Co-founder, Website Manager, and Ukrainian library Manager
        </p>
      </div>
      <div className="carousel-item flex flex-col w-[294px] h-[413px] rounded-[18px] sm-max:w-[239px] sm-max:h-[368px]">
        <img
          srcSet={`${photo_svintsitska_mob1x} 1x, ${photo_svintsitska_mob2x} 2x`}
          src={photo_svintsitska_mob1x}
          alt="Photo of Viktoriia Svintsitska"
          className="rounded-[18px] w-full h-[299px] mb-[12px] sm-max:h-[244px]"
          loading="lazy"
        />
        <p className="font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[12px]">
          Viktoriia Svintsitska
        </p>
        <p className="font-normal text-[16px] leading-[1.3] text-center text-black mb-[18px]">
          Special Events Coordinator, and craftsperson
        </p>
      </div>
      <div className="carousel-item flex flex-col w-[294px] h-[413px] rounded-[18px] sm-max:w-[239px] sm-max:h-[368px]">
        <img
          srcSet={`${photo_oliinyk_mob1x} 1x, ${photo_oliinyk_mob2x} 2x`}
          src={photo_oliinyk_mob1x}
          alt="Photo of Julia Oliinyk"
          className="rounded-[18px] w-full h-[299px] mb-[12px] sm-max:h-[244px]"
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
      <div className="carousel-item flex flex-col w-[294px] h-[413px] rounded-[18px] sm-max:w-[239px] sm-max:h-[368px]">
        <img
          srcSet={`${photo_levchuk_mob1x} 1x, ${photo_levchuk_mob2x} 2x`}
          src={photo_levchuk_mob1x}
          alt="Photo of Maryna Levchuk"
          className="rounded-[18px] w-full h-[299px] mb-[12px] sm-max:h-[244px]"
          loading="lazy"
        />
        <p className="font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[12px]">
          Maryna Levchuk
        </p>
        <p className="font-normal text-[16px] leading-[1.3] text-center text-black mb-[18px]">
          Official Photographer
        </p>
      </div>
      <div className="carousel-item flex flex-col w-[294px] h-[413px] rounded-[18px] sm-max:w-[240px] sm-max:h-[368px]">
        <img
          srcSet={`${photo_sukhoviy_mob1x} 1x, ${photo_sukhoviy_mob2x} 2x`}
          src={photo_sukhoviy_mob1x}
          alt="Photo of Olha Sukhoviy"
          className="rounded-[18px] w-full h-[299px] mb-[12px] sm-max:h-[244px]"
          loading="lazy"
        />
        <p className="font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[12px]">
          Olha Sukhoviy
        </p>
        <p className="font-normal text-[16px] leading-[1.3] text-center text-black mb-[18px]">
          Co-founder, Event Coordinator, Secretary
        </p>
      </div>
      <div className="carousel-item flex flex-col w-[294px] h-[413px] rounded-[18px] sm-max:w-[239px] sm-max:h-[368px]">
        <img
          srcSet={`${photo_zhykhareva_tolstik_mob1x} 1x, ${photo_zhykhareva_tolstik_mob2x} 2x`}
          src={photo_zhykhareva_tolstik_mob1x}
          alt="Photo of Hanna Zhykhareva-Tolstik"
          className="rounded-[18px] w-full h-[299px] mb-[12px] sm-max:h-[244px]"
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
  );
};
