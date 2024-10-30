import { Link, NavLink } from 'react-router-dom';

import { adminNavLinks } from '../../constants';

import { images } from '../../assets';

export const Sidebar = () => {
  const { headerImages } = images;
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
            <li key={link.id}>
              <NavLink to={link.link}>{link.text}</NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};
