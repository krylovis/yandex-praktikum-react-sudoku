import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { test } from '@jest/globals';
import App from './App';

test('Example test', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
