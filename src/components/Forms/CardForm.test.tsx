import React from 'react';
import { render } from '@testing-library/react';
import CardForm from './CardForm';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  cards: [
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
  ],
};

describe('CardForm', () => {
  const reducer = (state = initialState, action: { type: unknown }) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const store = createStore(reducer);

  it('renders form data correctly', () => {
    const { getByAltText, getByText } = render(
      <Provider store={store}>
        <CardForm />
      </Provider>
    );

    expect(getByAltText('avatar')).toBeInTheDocument();
    expect(getByText('Ivan Iks')).toBeInTheDocument();
    expect(getByText(`Birthdate: ${'01.05.1984'}`)).toBeInTheDocument();
    expect(getByText(`Country: ${'Poland'}`)).toBeInTheDocument();
    expect(getByText(`Gender: ${false ? 'female' : 'male'}`)).toBeInTheDocument();
    expect(getByText(`Consent to personal data: ${false ? 'Yes' : 'No'}`)).toBeInTheDocument();
    expect(getByText(`Consent to receive news: ${true ? 'Yes' : 'No'}`)).toBeInTheDocument();
  });
});
