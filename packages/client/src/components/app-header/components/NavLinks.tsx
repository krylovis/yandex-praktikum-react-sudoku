import { NavLink } from 'react-router-dom';
import style from './NavLinks.module.scss';
import { TNavLinksProps } from './types';

function NavLinks({ tabs }: TNavLinksProps) {
  return (
    <>
      {tabs.map((tab) => (
        <NavLink
          className={({ isActive }) => {
            let className = style.link;
            if (isActive) className += ` ${style.link_active}`;
            return className;
          }}
          to={tab.route}
          key={tab.title}
        >
          {tab.title}
        </NavLink>
      ))}
    </>
  );
}

export default NavLinks;
