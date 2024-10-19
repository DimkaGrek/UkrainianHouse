import { Link, NavLink } from 'react-router-dom';

import logo_1x from '../../assets/images/admin-page/admin-page-logo_@1x.png';
import logo_2x from '../../assets/images/admin-page/admin-page-logo_@2x.png';
import { adminNavLinks } from '../../constants';

export const Sidebar = () => {
  console.log(adminNavLinks);
  return (
    <nav>
      <Link to="/">
        <picture>
          <img
            srcSet={`${logo_1x} 1x, ${logo_2x} 2x`}
            src={logo_1x}
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
