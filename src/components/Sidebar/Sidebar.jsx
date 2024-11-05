import { Link, NavLink } from 'react-router-dom';

import { adminNavLinks } from '../../constants';

import { images } from '../../assets';
import { useMessages } from '../../hooks';

export const Sidebar = () => {
  const { headerImages } = images;
  const { totalUnreadMessages } = useMessages();

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
      <ul className="flex flex-col items-center gap-6 text-2xl mt-6">
        {adminNavLinks &&
          adminNavLinks.map(link => (
            <li key={link.id} className="relative">
              <NavLink to={link.link} className="relative">
                {link.text}
                {link.link === '/admin/inbox' && totalUnreadMessages !== 0 && (
                  <span className="absolute top-[-8px] right-[-16px] w-5 h-5 bg-red-500 font-bold text-white text-xs rounded-full flex items-center justify-center">
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
