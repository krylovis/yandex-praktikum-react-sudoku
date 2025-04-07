import { FormEvent, useState } from 'react';
import styles from './TopicCreatePage.module.scss';
import BackButton from '../../back-button/BackButton';
import CustomButton from '../../custom-button/CustomButton';

export default function TopicCreatePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { page, createTopicForm, formGroup, saveButton } = styles;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Created topic:', { title, content });
    setTitle('');
    setContent('');
  };
  return (
    <div className={page}>
      <h1>Создать новую тему</h1>
      <BackButton />
      <form className={createTopicForm} onSubmit={handleSubmit}>
        <div className={formGroup}>
          <label htmlFor="title">Заголовок</label>
          <input
            id="title"
            type="text"
            placeholder="Введите заголовок топика"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>

        <div className={formGroup}>
          <label htmlFor="content">Содержимое</label>
          <textarea
            id="content"
            placeholder="Введите содержимое топика"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
          />
        </div>
        <div className={saveButton}>
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
