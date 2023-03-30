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
    fireEvent.change(birthday, { target: { value: '1999-11-12' } });
  });
  it('Your country', () => {
    render(<Forms onSubmitForms={() => {}} />);

    const country = screen.getByLabelText(/Your country/i);
    fireEvent.change(country, { target: { value: 'London' } });
  });
});
