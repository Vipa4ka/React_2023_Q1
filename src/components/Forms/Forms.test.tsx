import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Forms from './Forms';

describe('Forms', () => {
  it('First name ', () => {
    render(<Forms onSubmitForms={() => {}} />);
    expect(screen.queryByText(/the name is capitalized.*/i)).toBeNull();

    const firstName = screen.getByPlaceholderText(/First Name/i);
    fireEvent.change(firstName, { target: { value: 'Masha' } });

    const countryLabel = screen.getByLabelText('Your country:');
    fireEvent.change(countryLabel, { target: { value: 'Germany' } });
  });

  it('Last name ', () => {
    render(<Forms onSubmitForms={() => {}} />);
    expect(screen.queryByText(/the name is capitalized.*/i)).toBeNull();

    const lastName = screen.getByPlaceholderText(/Last Name/i);
    fireEvent.change(lastName, { target: { value: 'Bhdsk' } });
  });

  it('Birthday', () => {
    render(<Forms />);

    const birthday = screen.getByLabelText(/Your Birthday/i);
    fireEvent.change(birthday, { target: { value: '2009-12-31' } });
  });
  it('Your country', () => {
    render(<Forms onSubmitForms={() => {}} />);

    const country = screen.getByLabelText(/Your country/i);
    fireEvent.change(country, { target: { value: 'London' } });
  });

  it(' the correct data after form submit', () => {
    const { queryByLabelText, queryByText } = render(<Forms onSubmitForms={() => {}} />);
    const birthdateInput = queryByLabelText('Your Birthday') as HTMLInputElement;
    const button = queryByText('SUBMIT') as HTMLButtonElement;
    fireEvent.change(birthdateInput, { target: { value: '1920-01-01' } });
    fireEvent.click(button);
    const data = [
      {
        avatar: '',
        name: '',
        surname: '',
        birthday: '1920-01-01',
        country: '',
        gender: '',
        consent: false,
        consentNews: true,
      },
    ];
    expect(data).toEqual(expect.arrayContaining(data));
  });
});
