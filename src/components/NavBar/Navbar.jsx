import { Link, NavLink, useLocation } from 'react-router-dom';

import { Icon } from '../../components';

export const Navbar = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const lastSegment = pathSegments[pathSegments.length - 1];

  if (!lastSegment) return null;

  const capitalizedSegment =
    lastSegment[0].toUpperCase() + lastSegment.slice(1);

  return (
    <div className="relative flex gap-[9px] items-center mb-[34px] md:mb-[44px] lg:mb-[24px]">
      <Link className="font-proza text-[18px]" to="/">
        Homepage
      </Link>
      <Icon className="fill-[black]" name="arrow-right" size={12} />
      <NavLink className="font-proza text-[18px]" to={lastSegment}>
        {capitalizedSegment}
      </NavLink>
      <Icon
        name="heart"
        size={65}
        className="hidden md:block absolute top-[-25px] right-[14px] lg:right-0 fill-[#daefff]"
        viewbox="36"
      />
    </div>
  );
};
