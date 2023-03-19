import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('correct render ', () => {
    const props = vi.fn();
    const { getByPlaceholderText, getByText } = render(
      <SearchBar submitProps={props} currentQuery={''} />
    );
    const input = getByPlaceholderText('Search');
    const Btn = getByText('Search');

    expect(input).toBeInTheDocument();
    expect(Btn).toBeInTheDocument();
  });

  it('test SearchQuery ', () => {
    const props = vi.fn();
    const { getByPlaceholderText, getByText } = render(
      <SearchBar submitProps={props} currentQuery={''} />
    );
    const input = getByPlaceholderText('Search');
    const Btn = getByText('Search');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(Btn);

    expect(props).toHaveBeenCalledWith('test');
    expect(props).toHaveBeenCalledTimes(1);
  });

  it('test placeholder without', () => {
    const props = vi.fn();

    render(<SearchBar submitProps={props} currentQuery="" />);

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
