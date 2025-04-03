/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import style from './LeaderPage.module.scss';
import avatar from '../../../assets/images/avatar.jpg';
import leftBlueArrow from '../../../assets/icons/left_blue_arrow.svg';
import leaders from './mock';
import Pagination from '../../pagination/pagination';

export default function LeaderPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 8; // Количество строк на странице
  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(leaders.length / rowsPerPage);

  // Определяем начальный и конечный индексы для текущей страницы
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentLeaders = leaders.slice(startIndex, startIndex + rowsPerPage);

  // TODO: реализовать логику нажатия на кнопку назад
  const handleBackBtnClick = () => {
    console.log('The back button is clicked');
  };

  const headNames = ['Место', 'Аватар', 'Имя', 'Время'];

  return (
    <main className={style.leader_page}>
      <div className={style.leader_page__wrap}>
        <button className={style.leader_page__back_wrap} type="button" onClick={handleBackBtnClick}>
          <img className={style.leader_page__back_icon} src={leftBlueArrow} alt="Стрелка назад" />
          <p className={style.leader_page__back_text}>Назад</p>
        </button>
        <h1 className={style.leader_page__title}>Таблица лидеров</h1>

        <div className={style.leader_page__table}>
          <ul className={style.leader_page__raw}>
            {headNames.map((headName, ind) => (
              <li className={`${style.leader_page__head_text} ${style.leader_page__text} ${headName === 'Имя' ? style.leader_page__name : ''}`} key={ind}>{headName}</li>
            ))}
          </ul>
          <ul className={style.leader_page__table_content}>
            {currentLeaders.map((leader, index) => (
              <li className={style.leader_page__raw} key={index}>
                <p className={`${style.leader_page__raw_text} ${style.leader_page__text}`}>{leader.place}</p>
                <div className={style.leader_page__avatar_wrap}>
                  <img className={style.leader_page__avatar} src={avatar} alt="Аватар" />
                </div>
                <p className={`${style.leader_page__raw_text} ${style.leader_page__text} ${style.leader_page__name}`}>{leader.name}</p>
                <p className={`${style.leader_page__raw_text} ${style.leader_page__text} ${style.leader_page__last_child}`}>{leader.time}</p>
              </li>
            ))}
          </ul>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  );
}
