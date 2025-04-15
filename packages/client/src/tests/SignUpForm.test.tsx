import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import SignupPage from '../components/pages/signup-page/SignupPage';

describe('SignupPage inputs validation', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignupPage />
        </MemoryRouter>
      </Provider>
    );
  });

  it('shows error validate for first_name', async () => {
    const input = screen.getByLabelText(/Имя/i);
    fireEvent.change(input, { target: { value: 'никита' } });

    await waitFor(() => {
      expect(screen.getByText(/С большой буквы. Мин. 2 символа/i)).toBeInTheDocument();
    });
  });

  it('shows error validate for second_name', async () => {
    const input = screen.getByLabelText(/Фамилия/i);
    fireEvent.change(input, { target: { value: 'петров' } });

    await waitFor(() => {
      expect(screen.getByText(/С большой буквы. Мин. 2 символа/i)).toBeInTheDocument();
    });
  });

  it('shows error validate for email', async () => {
    const input = screen.getByLabelText(/Почта/i);
    fireEvent.change(input, { target: { value: 'wrong-email' } });

    await waitFor(() => {
      expect(screen.getByText(/Пример почты "example@example.ru"/i)).toBeInTheDocument();
    });
  });

  it('shows error validate for phone', async () => {
    const input = screen.getByLabelText(/Телефон/i);
    fireEvent.change(input, { target: { value: '12345' } });

    await waitFor(() => {
      expect(screen.getByText(/Пример телефона/i)).toBeInTheDocument();
    });
  });

  it('shows error validate for login', async () => {
    const input = screen.getByLabelText(/Логин/i);
    fireEvent.change(input, { target: { value: 'логин' } }); // не латиница

    await waitFor(() => {
      expect(screen.getByText(/Латиница. Мин. 3 символа/i)).toBeInTheDocument();
    });
  });

  it('shows error validate for password', async () => {
    const input = screen.getByLabelText(/^Пароль$/i);
    fireEvent.change(input, { target: { value: '123' } });

    await waitFor(() => {
      expect(screen.getByText(/Мин. 8 знаков. Мин. 1 заглав. буква/i)).toBeInTheDocument();
    });
  });

  it('shows error validate for password with spaces', async () => {
    const input = screen.getByLabelText(/^Пароль$/i);
    fireEvent.change(input, { target: { value: 'Password 123' } });

    await waitFor(() => {
      expect(screen.getByText(/Не должно быть пробелов/i)).toBeInTheDocument();
    });
  });

  it('shows error validate for password_confirmation if password not equal', async () => {
    const input = screen.getByLabelText(/Пароль \(ещё раз\)/i);
    fireEvent.change(input, { target: { value: '123' } });

    await waitFor(() => {
      expect(screen.getByText(/Пароли не совпадают/i)).toBeInTheDocument();
    });
  });
});
