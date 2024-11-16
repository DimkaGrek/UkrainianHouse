import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { adminNavLinks } from "../../constants";

import { images } from "../../assets";
import { useMessages } from "../../hooks";
import { fetchUnreadMessages } from "../../redux";

export const Sidebar = () => {
  const { headerImages } = images;
  const { totalUnreadMessages } = useMessages();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUnreadMessages());
  }, []);

  return (
    <nav>
      <Link to="/">
        <picture>
          <img
            srcSet={`${headerImages.admin_logo_1x} 1x, ${headerImages.admin_logo_2x} 2x`}
            src={headerImages.admin_logo_1x}
            alt="logo"
            width="116"
            height="78"
            loading="lazy"
            className="mx-auto"
          />
        </picture>
      </Link>
      <ul className="mt-6 flex flex-col items-center gap-6 text-2xl">
        {adminNavLinks &&
          adminNavLinks.map((link) => (
            <li key={link.id} className="relative">
              <NavLink to={link.link} className="relative">
                {link.text}
                {link.link === "/admin/inbox" && totalUnreadMessages !== 0 && (
                  <span className="absolute right-[-16px] top-[-8px] flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                    {totalUnreadMessages}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};
