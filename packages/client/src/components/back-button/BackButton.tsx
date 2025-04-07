import { useNavigate } from 'react-router-dom';
import style from './BackButton.module.scss';

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Возвращает пользователя на предыдущую страницу
  };

  return (
    <button type="button" onClick={handleBack} className={style.back}>
      ← Назад
    </button>
  );
}

export default BackButton;
