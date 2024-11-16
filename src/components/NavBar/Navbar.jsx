import { Link, NavLink, useLocation } from "react-router-dom";

import { Icon } from "../../components";

export const Navbar = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];

  if (!lastSegment) return null;

  const capitalizedSegment = lastSegment[0].toUpperCase() + lastSegment.slice(1);

  return (
    <div className="relative mb-[34px] flex items-center gap-[32px] md:mb-[44px] lg:mb-[24px]">
      <Link className="font-proza text-[18px]" to="/">
        Homepage
      </Link>
      <Icon
        className="absolute left-[100px] top-[10px] fill-[black]"
        name="arrow-right"
        size={12}
      />
      <NavLink className="font-proza text-[18px]" to={lastSegment}>
        {capitalizedSegment}
      </NavLink>
      <Icon
        name="heart"
        size={65}
        className="absolute right-[14px] top-[-25px] hidden fill-[#daefff] md:block lg:right-0"
        viewbox="36"
      />
    </div>
  );
};
