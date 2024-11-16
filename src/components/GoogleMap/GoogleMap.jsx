export const GoogleMap = () => {
  
  return (
    <div className="map-section mx-auto w-full">
      <div className="gmap-frame">
        <div className="mb-[24px] w-full md:mb-[30px] lg:mb-[68px]">
          <iframe
            className="rounded-[18px] sm-max:h-[350px] sm-max:w-full md:w-full lg:h-[430px] lg:w-[600px]"
            width="291"
            height="368"
            src="https://maps.google.com/maps?width=100%25&amp;height=416&amp;hl=en&amp;q=Oranjeplein%2096,%20Maastricht,%20%20Netherlands,%206224%20KV+()&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
        <p className="mb-[8px] text-[20px] font-semibold leading-[1.2] text-[#1e1e1e] md:text-[24px] md:font-bold md:leading-[1.4]">
          Service area:
        </p>
        <p className="text-[16px] font-normal leading-[1.4] text-[#1e1e1e] md:w-[550px] md:text-[20px]">
          Heerlen, Netherlands · Limburg, Netherlands · Liège, Belgium · Aachen, Germany ·
          Maastricht, Netherlands · Genk, Belgium · Luxembourg, Luxembourg · Hasselt, Belgium
        </p>
      </div>
    </div>
  );
};
