import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

describe('App component', () => {
  it('render home page onDefault', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/MOVIES/i);
  });

  it('renders  page About us when you go to  /about', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/About Us/i);
  });

  it('renders 404 page ', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/404 Not Found/i);
  });

  it('renders  page Form us when you go to  /forms', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/forms']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Form/i);
  });
});
