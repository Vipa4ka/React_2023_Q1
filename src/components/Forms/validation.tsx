/* eslint-disable @typescript-eslint/no-unused-vars */

export function reviewAvatar(photo: File[]) {
  let avatarInput = '';
  const img = photo[0];
  if (!img) {
    return (avatarInput = 'Add profile photo');
  }
  return (avatarInput = '');
}

export function reviewName(name: string) {
  let nameInput = '';
  if (name.length < 3) {
    return (nameInput = 'The name  contains less than 3 symbols');
  } else if (!/^[A-ZА-Я]/.test(name)) {
    return (nameInput = 'The name  must start with uppercase');
  } else if (/[0-9\.,-\/#!$%' "^&*;:{}=_`~()-]/.test(name)) {
    return (nameInput = 'The name is wrong');
  }
  return (nameInput = '');
}
export function reviewSurname(name: string) {
  let surnameInput = '';
  if (name.length < 3) {
    return (surnameInput = 'The  surname contains less than 3 symbols');
  } else if (!/^[A-ZА-Я]/.test(name)) {
    return (surnameInput = 'The surname must start with uppercase');
  } else if (/[0-9\.,-\/#!$%' "^&*;:{}=_`~()-]/.test(name)) {
    return (surnameInput = 'The surname is wrong');
  }
  return (surnameInput = '');
}

export function reviewBirthdate(date: string) {
  let dateInput = '';
  if (date === '') {
    return (dateInput = 'Input date of birthdate');
  }
  return (dateInput = '');
}

export function reviewCountry(country: string) {
  let countrySelect = '';
  if (country === 'Choose') {
    return (countrySelect = 'Choose the country');
  }
  return (countrySelect = '');
}

export function reviewGender(gender: string) {
  let genderInput = '';
  if (!(gender === 'female') && !(gender === 'male')) {
    return (genderInput = 'Choose the  gender');
  }
  return (genderInput = '');
}
export function reviewCheckboxConsent(checkbox: boolean) {
  let checkboxConsentInput = '';
  if (!checkbox) {
    return (checkboxConsentInput = 'Agree consent to my personal data');
  }
  return (checkboxConsentInput = '');
}
