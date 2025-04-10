import { Link, useLocation } from 'react-router-dom';
import { SyntheticEvent, useEffect, useState } from 'react';
import ROUTES from '../../constants/constants';
import style from './AppHeader.module.scss';
import burgerMenuIcon from '../../assets/icons/burger_menu.svg';
import closeIcon from '../../assets/icons/close.svg';

export default function AppHeader() {
  const location = useLocation();
  const [isModalOpen, setModalOpen] = useState(false);

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

  const isActive = (path: string) => location.pathname === path;

  const handleMenuClick = () => {
    setModalOpen(!isModalOpen);
  };

  const closeModalOverlay = (evt: SyntheticEvent<HTMLButtonElement>) => {
    const target = evt.target as HTMLButtonElement;
    if (target.classList.contains(style.header__overlay)) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setModalOpen(false);
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <>
      <section className={style.header}>
        <button className={style.header__menu} onClick={handleMenuClick}>
          <img src={burgerMenuIcon} alt="Меню" />
        </button>
        <div className={style.header__linksWrap}>
          {tabs.map((tab) => (
            <Link className={`${style.header__link} ${isActive(tab.route) ? style.header__link_active : ''}`} to={tab.route} key={tab.title}>{tab.title}</Link>
          ))}
        </div>
      </section>
      {isModalOpen && (
        <>
          <button className={style.header__overlay} onClick={closeModalOverlay} aria-label="Закрыть меню" />
          <div className={style.header__modal}>
            <button className={style.header__closeBtn} onClick={() => setModalOpen(false)}>
              <img src={closeIcon} alt="Закрыть" />
            </button>
            <div className={style.header__modalLinksWrap}>
              {tabs.map((tab) => (
                <Link className={`${style.header__link} ${isActive(tab.route) ? style.header__link_active : ''}`} to={tab.route} key={tab.title}>{tab.title}</Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
