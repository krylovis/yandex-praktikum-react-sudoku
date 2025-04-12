import { NavLink } from 'react-router-dom';
import ROUTES from '../../constants/constants';
import style from './AppHeader.module.scss';
import burgerMenuIcon from '../../assets/icons/burger_menu.svg';
import closeIcon from '../../assets/icons/close.svg';
import useModal from '../../hooks/useModal';

export default function AppHeader() {
  const { isModalOpen, toggleModal, closeModal } = useModal(style.header__overlay);

  const tabs = [
    {
      route: ROUTES.MAIN,
      title: 'Главная',
    },
    {
      route: ROUTES.LEADERBOARD,
      title: 'Таблица лидеров',
    },
    {
      route: ROUTES.TOPICS,
      title: 'Форум',
    },
    {
      route: ROUTES.PROFILE,
      title: 'Личный кабинет',
    },
    {
      route: ROUTES.GAME,
      title: 'Новая игра',
    },
  ];

  return (
    <>
      <section className={style.header}>
        <button className={style.header__menu} onClick={toggleModal}>
          <img src={burgerMenuIcon} alt="Меню" />
        </button>
        <nav className={style.header__linksWrap}>
          {tabs.map((tab) => (
            <NavLink
              className={({ isActive, isPending }) => {
                let className = style.header__link;
                if (isPending) return className;
                if (isActive) className += ` ${style.header__link_active}`;
                return className;
              }}
              to={tab.route}
              key={tab.title}
            >
              {tab.title}
            </NavLink>
          ))}
        </nav>
      </section>
      {isModalOpen && (
        <>
          <div className={style.header__overlay} />
          <div className={style.header__modal}>
            <button className={style.header__closeBtn} onClick={closeModal}>
              <img src={closeIcon} alt="Закрыть" />
            </button>
            <nav className={style.header__modalLinksWrap}>
              {tabs.map((tab) => (
                <NavLink
                  className={({ isActive, isPending }) => {
                    let className = style.header__link;
                    if (isPending) return className;
                    if (isActive) className += ` ${style.header__link_active}`;
                    return className;
                  }}
                  to={tab.route}
                  key={tab.title}
                >
                  {tab.title}
                </NavLink>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
