import { GameField } from '../../components';

import style from './GamePage.module.scss';

export default function GamePage() {
  return (
    <main className={style.main}>
      <GameField />
    </main>
  );
}
