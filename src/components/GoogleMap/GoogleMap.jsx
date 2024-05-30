export const GoogleMap = () => {
  return (
    <div className="map-section w-full mx-auto">
      <div className="gmap-frame">
        <div className="w-full mb-[24px] md:mb-[30px] lg:mb-[68px]">
          <iframe
            className="rounded-[18px] md:w-full lg:w-[600px] lg:h-[416px]"
            width="291"
            height="368"
            src="https://maps.google.com/maps?width=100%25&amp;height=416&amp;hl=en&amp;q=Oranjeplein%2096,%20Maastricht,%20%20Netherlands,%206224%20KV+()&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
        <p className="font-semibold text-[20px] leading-[1.2] text-[#1e1e1e] mb-[8px] md:font-bold md:text-[24px] md:leading-[1.4]">
          Service area:
        </p>
        <p className="font-normal text-[16px] leading-[1.4] text-[#1e1e1e] md:text-[20px] md:w-[550px]">
          Heerlen, Netherlands · Limburg, Netherlands · Liège, Belgium · Aachen,
          Germany · Maastricht, Netherlands · Genk, Belgium · Luxembourg,
          Luxembourg · Hasselt, Belgium
        </p>
      </div>
    </div>
  );
};
