import { render, screen, fireEvent } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('correct render ', () => {
    const { getByPlaceholderText, getByText } = render(<SearchBar />);
    const input = getByPlaceholderText('Search');
    const Btn = getByText('Search');

    expect(input).toBeInTheDocument();
    expect(Btn).toBeInTheDocument();
  });

  it('test SearchQuery ', () => {
    const { getByPlaceholderText, getByText } = render(<SearchBar />);
    const input = getByPlaceholderText('Search');
    const Btn = getByText('Search');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(Btn);
  });

  it('test placeholder without', () => {
    render(<SearchBar />);

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
