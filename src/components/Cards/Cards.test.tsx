import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Cards from './Cards';
import allCards from '../../card.json';

describe('Cards', () => {
  const cards = [
    {
      id: '1',
      name: 'Card 1',
      image: 'card1.jpg',
      price: 10,
      quantity: 1,
    },
    {
      id: '2',
      name: 'Card 2',
      image: 'card2.jpg',
      price: 20,
      quantity: 2,
    },
  ];

  it('renders without crashing', () => {
    const { getByRole } = render(<Cards cards={[]} />);
    expect(getByRole('list')).toBeInTheDocument();
  });

  it('renders the correct number of cards', () => {
    const { getAllByRole } = render(<Cards cards={allCards.slice(0, 8)} />);
    expect(getAllByRole('listitem')).toHaveLength(8);
  });

  it('renders the card information correctly', () => {
    const { getByText, getByAltText } = render(<Cards cards={cards.slice(0, 1)} />);
    expect(getByText('Card 1')).toBeInTheDocument();
    expect(getByText('1 kg')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('₴')).toBeInTheDocument();
    expect(getByAltText('Card 1')).toBeInTheDocument();
    expect(getByAltText('Card 1')).toHaveAttribute('src', 'card1.jpg');
    expect(getByAltText('Card 1')).toHaveAttribute('width', '280');
    expect(getByAltText('Card 1')).toHaveAttribute('height', '222');
  });
});
