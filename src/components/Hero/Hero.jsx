import hugImg1 from "../../assets/images/Hug@1x.png";
import hugImg2 from "../../assets/images/Hug@2x.png";

const Hero = () => {
  return (
    <section>
      <h1>
        <span>Ukrainian </span>House in <span>Maastricht</span>
      </h1>
      <picture>
        <source srcSet={`${hugImg1} 1x, ${hugImg2} 2x`} type="image/png" />
        <img
          className="w-[615px] h-[615px]"
          src={hugImg1}
          alt="Photo of hugs of two girls"
        />
      </picture>
      <p>Community of Ukrainians in Limburg and beyond</p>
      <button>Let&#39;s be friends on facebook</button>
      <button>Join us in Telegram</button>
    </section>
  );
};
export default Hero;
