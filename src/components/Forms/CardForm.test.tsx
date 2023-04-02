import React from 'react';
import { render } from '@testing-library/react';
import CardForm from './CardForm';

const cards = [
  {
    avatar: 'avatar',
    name: 'Ivan',
    surname: 'Iks',
    birthdate: '01.05.1984',
    gender: 'male',
    country: 'Poland',
    consent: false,
    consentNews: true,
    id: 5,
  },
];

describe('CardForm', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<CardForm cards={[]} />);
    expect(getByRole('list')).toBeInTheDocument();
  });
  it(' correct data', () => {
    const { getByAltText, getByText } = render(<CardForm cards={cards} />);
    expect(getByAltText('avatar')).toHaveAttribute('src', 'avatar');
    expect(getByText('Ivan Iks')).toBeInTheDocument();
    expect(getByText(`Birthdate: ${'01.05.1984'}`)).toBeInTheDocument();
    expect(getByText(`Country: ${'Poland'}`)).toBeInTheDocument();
    expect(getByText(`Gender: ${false ? 'female' : 'male'}`)).toBeInTheDocument();
    expect(getByText(`Consent to personal data: ${false ? 'Yes' : 'No'}`)).toBeInTheDocument();
    expect(getByText(`Consent to receive news: ${true ? 'Yes' : 'No'}`)).toBeInTheDocument();
  });
});
