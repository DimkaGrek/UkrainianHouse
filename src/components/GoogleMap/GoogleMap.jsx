export const GoogleMap = () => {
  return (
    <div className="map-section w-[294px] h-[368px] mx-auto">
      <div className="gmap-frame">
        <div className="w-full mb-[24px]">
          <iframe
            className="rounded-[18px]"
            width="100%"
            height="368"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=416&amp;hl=en&amp;q=Oranjeplein%2096,%20Maastricht,%20%20Netherlands,%206224%20KV+()&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
        <p className="font-semibold text-[20px] leading-[1.2] text-[#1e1e1e] mb-[8px]">
          Service area:
        </p>
        <p className="font-normal text-[16px] leading-[1.4] text-[#1e1e1e]">
          Heerlen, Netherlands · Limburg, Netherlands · Liège, Belgium · Aachen,
          Germany · Maastricht, Netherlands · Genk, Belgium · Luxembourg,
          Luxembourg · Hasselt, Belgium
        </p>
      </div>
    </div>
  );
};
