import { FormEvent, useState } from 'react';
import styles from './TopicCreatePage.module.scss';
import BackButton from '../../back-button/BackButton';
import CustomButton from '../../custom-button/CustomButton';

export default function TopicCreatePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Created topic:', { title, content });
    setTitle('');
    setContent('');
  };
  return (
    <div className={styles.page}>
      <h1>Создать новую тему</h1>
      <BackButton />
      <form className={styles.page__createTopicForm} onSubmit={handleSubmit}>
        <div className={styles.page__formGroup}>
          <label htmlFor="title">Заголовок</label>
          <input
            className={styles.page__input}
            id="title"
            type="text"
            placeholder="Введите заголовок топика"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>

        <div className={styles.page__formGroup}>
          <label className={styles.page__label} htmlFor="content">
            Содержимое
          </label>
          <textarea
            className={styles.page__input}
            id="content"
            placeholder="Введите содержимое топика"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
          />
        </div>
        <div className={styles.page__saveButton}>
          <CustomButton
            type="submit"
            color="primary"
            text="Создать"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}
