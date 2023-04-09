import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const setSearch = vi.fn();
  it('correct render ', () => {
    const { getByPlaceholderText, getByText } = render(<SearchBar setSearch={setSearch} />);
    const input = getByPlaceholderText('Search movies...');
    const Btn = getByText('Search');

    expect(input).toBeInTheDocument();
    expect(Btn).toBeInTheDocument();
  });

  it('test SearchQuery ', () => {
    const { getByPlaceholderText, getByText } = render(<SearchBar setSearch={setSearch} />);
    const input = getByPlaceholderText('Search movies...');
    const Btn = getByText('Search');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(Btn);
  });

  it('test placeholder without', () => {
    render(<SearchBar setSearch={setSearch} />);

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
