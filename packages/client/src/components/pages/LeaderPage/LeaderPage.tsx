/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import style from './LeaderPage.module.scss';
import numbersImage from '../../../assets/images/numbers.png';
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

  return (
    <main className={style.wrapper}>
      <img className={style.backgroung} src={numbersImage} alt="Цифры" />
      <div className={style.wrap}>
        <button className={style.backWrap} type="button">
          <img src={leftBlueArrow} alt="Стрелка назад" />
          <p className={style.backText}>Назад</p>
        </button>
        <h1 className={style.title}>Таблица лидеров</h1>
        <table className={style.table}>
          <thead>
            <tr className={style.raw}>
              <th>
                <p className={`${style.headText} ${style.text}`}>Место</p>
              </th>
              <th>
                <p className={`${style.headText} ${style.text}`}>Аватар</p>
              </th>
              <th>
                <p className={`${style.headText} ${style.text}`}>Имя</p>
              </th>
              <th>
                <p className={`${style.headText} ${style.text} ${style.lastChild}`}>Время</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentLeaders.map((leader, index) => (
              <tr className={style.raw} key={index}>
                <td>
                  <p className={`${style.rawText} ${style.text}`}>{leader.place}</p>
                </td>
                <td aria-label="Avatar">
                  <div className={style.avatarWrap}>
                    <img className={style.avatar} src={avatar} alt="Аватар" />
                  </div>
                </td>
                <td>
                  <p className={`${style.rawText} ${style.text} ${style.name}`}>{leader.name}</p>
                </td>
                <td>
                  <p className={`${style.rawText} ${style.text} ${style.lastChild}`}>{leader.time}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  );
}
