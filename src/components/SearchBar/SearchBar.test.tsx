import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect } from 'vitest';
import SearchBar from './SearchBar';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  search: {
    search: '',
  },
};

describe('SearchBar', () => {
  const reducer = (state = initialState, action: { type: string }) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const store = createStore(reducer);

  it('correct render ', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const input = getByPlaceholderText('Search movies...');
    const Btn = getByText('Search');

    expect(input).toBeInTheDocument();
    expect(Btn).toBeInTheDocument();
  });

  it('test SearchQuery ', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const input = getByPlaceholderText('Search movies...');
    const Btn = getByText('Search');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(Btn);
  });

  it('test placeholder without', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
