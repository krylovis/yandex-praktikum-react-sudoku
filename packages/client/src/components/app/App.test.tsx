import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { jest, test, expect } from '@jest/globals';
import { TextEncoder } from 'text-encoding';
import App from './App';

const appContent = 'Вот тут будет жить ваше приложение :)';
global.TextEncoder = TextEncoder;

// @ts-expect-error Переопределяем глобальный fetch для тестирования
global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve('hey') }));

test('Example test', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(appContent)).toBeDefined();
});
