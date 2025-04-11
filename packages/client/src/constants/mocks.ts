import { IFolderTopic, ITopic, ITopicList } from '../models/Forum';
import avatar from '../assets/images/avatar.jpg';

export const mockFoldersTopics: IFolderTopic[] = [
  {
    id: 1,
    title: 'Новости и анонсы',
    topicsCount: 2,
    repliesCount: 6,
    lastPostPreview: 'Обновление правил форума: чего ожидать в 2024 году...',
    createUrl: '/forum/news/create', // URL для создания топика в разделе "Новости и анонсы"
  },
  {
    id: 2,
    title: 'Судоку: головоломка',
    topicsCount: 3,
    repliesCount: 15,
    lastPostPreview: 'Опишите головоломку или способ решения...',
    createUrl: '/forum/sudoku/create', // URL для создания топика в разделе "Судоку: головоломка"
  },
  {
    id: 3,
    title: 'Ресурсы',
    topicsCount: 2,
    repliesCount: 3,
    lastPostPreview: 'Книги о судоку',
    createUrl: '/forum/resources/create', // URL для создания топика в разделе "Ресурсы"
  },
];

export const mockTopic: ITopic[] = [
  {
    id: 111,
    parentId: 11,
    title: 'Обновление правил форума: чего ожидать в 2024 году',
    content:
      'Информация о любых изменениях в правилах, политике модерации или функциональности форума...',
    author: {
      name: 'Ivan Ivanov',
      avatarUrl: avatar,
    },
    comments: [
      {
        id: 1,
        author: {
          name: 'Irina Smirnova',
          avatarUrl: avatar,
        },
        content:
          'Спасибо за своевременное уведомление! Важно быть в курсе изменений.',
      },
      {
        id: 2,
        author: {
          name: 'Ekaterina',
          avatarUrl: avatar,
        },
        content: 'Надеюсь, новые правила сделают форум еще более дружелюбным.',
      },
    ],
  },
  {
    id: 112,
    parentId: 12,
    title: 'Новые правила игры и таблица рекордов',
    content: 'Информация о новых правилах и таблице рекордов',
    author: {
      name: 'Ivan Ivanov',
      avatarUrl: avatar,
    },
    comments: [
      {
        id: 1,
        author: {
          name: 'Irina Smirnova',
          avatarUrl: avatar,
        },
        content: 'Ух ты! Это интересно!',
      },
      {
        id: 2,
        author: {
          name: 'Ekaterina',
          avatarUrl: avatar,
        },
        content: 'Надеюсь, это сделает игру лучше.',
      },
    ],
  },
];

export const mockTopics: ITopicList[] = [
  {
    id: 11,
    parentId: 1,
    title: 'Правила форума',
    repliesCount: 5,
    lastPostPreview: 'Обновление правил форума: чего ожидать в 2024 году...',
    children: mockTopic,
  },
  {
    id: 12,
    parentId: 1,
    title: 'Обсуждение нововведений',
    repliesCount: 12,
    lastPostPreview: 'Новые правила игры и таблица рекордов',
    children: mockTopic,
  },
  {
    id: 21,
    parentId: 2,
    title: 'Как решать сложные судоку',
    repliesCount: 8,
    lastPostPreview: 'Советы и рекомендации',
    children: mockTopic,
  },
  {
    id: 22,
    parentId: 2,
    title: 'Стратегии для начинающих',
    repliesCount: 10,
    lastPostPreview: 'Пошаговое руководство для начинающих',
    children: mockTopic,
  },
];
