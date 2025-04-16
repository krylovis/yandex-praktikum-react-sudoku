import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginPage from '../../pages/login-page/LoginPage';
import { store } from '../../store';

describe('LoginPage', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
  });
  it('show error validate for input', async () => {
    const emailInput = screen.getByLabelText(/Почта/i);

    fireEvent.change(emailInput, { target: { value: 'wrong-email' } });
    await waitFor(() => {
      expect(screen.getByText(/Пример почты "example@example.ru/i)).toBeInTheDocument();
    });
  });

  it('handle submit not called', async () => {
    const handleSubmit = jest.fn();

    fireEvent.click(screen.getByText(/Авторизоваться/i));
    await waitFor(() => {
      expect(handleSubmit).not.toBeCalled();
    });
  });
});
