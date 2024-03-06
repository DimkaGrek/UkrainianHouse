import flagImg1 from "../../assets/images/Flag@1x.png";
import flagImg2 from "../../assets/images/Flag@2x.png";

const AboutUs = () => {
  return (
    <section>
      <h2
        className="font-proza-medium
text-[60px]
leading-[1.3]
text-[#222] mb-[86px]"
      >
        About Us
      </h2>
      <ul>
        <li>
          <h3
            className="font-proza-semibold
text-[36px]
leading-[1.33333]
text-[#ffd437]"
          >
            Who We Are?
          </h3>
          <p
            className="font-istok text-[24px] leading-[1.42]
text-[#222]"
          >
            We are a passionate{" "}
            <span className="text-[#2355cc] font-[700]">community</span>{" "}
            dedicated to preserving and promoting the rich heritage and
            traditions of Ukraine.
            <br />
            With a vision of bridging cultures and building connections, we
            strive to be a beacon of Ukrainian{" "}
            <span className="text-[#2355cc] font-[700]">
              culture and identity
            </span>{" "}
            in the heart of Limburg.
          </p>
        </li>
        <li>
          <h3
            className="font-proza-semibold
text-[36px]
leading-[1.33333]
text-[#ffd437]"
          >
            What We Do?
          </h3>
          <p
            className="font-istok text-[24px] leading-[1.42]
text-[#222]"
          >
            We organize cultural events, language classes, and community
            initiatives to bring people together and foster a deeper
            understanding and appreciation of{" "}
            <span className="text-[#2355cc] font-[700]">
              Ukrainian culture.
            </span>
            <br />
            From concerts and performances to workshops and discussions,
            there&#39;s always something exciting happening at our center.
          </p>
        </li>
        <li>
          <h3
            className="font-proza-semibold
text-[36px]
leading-[1.33333]
text-[#ffd437]"
          >
            Why We Do?
          </h3>
          <p
            className="font-istok text-[24px] leading-[1.42]
text-[#222]"
          >
            During challenging times like the ongoing war in Ukraine, we firmly
            believe in the unifying power of culture.
            <br />
            <span className="text-[#2355cc] font-[700]">Our mission</span> is to
            preserve and share Ukrainian culture, language, and values while
            fostering a sense of community among Ukrainians in Maastricht and
            Limburg.
            <br />
            Through our efforts, we aim to build bridges and foster connections.
            Together, we&#39;re striving{" "}
            <span className="text-[#2355cc] font-[700]">
              to create a world where everyone feels valued and included.
            </span>
          </p>
        </li>
      </ul>
      <picture>
        <source srcSet={`${flagImg1} 1x, ${flagImg2} 2x`} type="image/png" />
        <img
          className="w-[546px] h-[546px]"
          src={flagImg1}
          alt="Photo of man with ukrainian flag"
        />
      </picture>
    </section>
  );
};

export default AboutUs;
