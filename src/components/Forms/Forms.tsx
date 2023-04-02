import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './Forms.module.css';
import avatarImg from './avatar.png';
import { FormProps } from '../../pages/Form';
import {
  reviewAvatar,
  reviewName,
  reviewSurname,
  reviewBirthdate,
  reviewCountry,
  reviewGender,
  reviewCheckboxConsent,
} from '../Forms/validation';

type State = {
  nameInput: string;
  surnameInput: string;
  dateInput: string;
  countrySelect: string;
  genderInput: string;
  checkboxConsentInput: string;
  avatarInput: string;
};

interface IFormInput {
  avatar: File[];
  name: string;
  surname: string;
  birthdate: string;
  country: string;
  gender: string;
  consent: boolean;
  consentNews: boolean;
}

export default function Forms({ onSubmitForms }: FormProps) {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const [message, setMessage] = useState('');
  const [validation, setValidation] = useState<State>({
    nameInput: '',
    surnameInput: '',
    dateInput: '',
    countrySelect: '',
    genderInput: '',
    checkboxConsentInput: '',
    avatarInput: '',
  });

  const onSubmit = ({
    avatar,
    name,
    surname,
    birthdate,
    country,
    gender,
    consent,
    consentNews,
  }: IFormInput) => {
    const avatarImg = avatar[0];
    const image = avatarImg ? URL.createObjectURL(avatarImg) : '';

    const avatarValid = reviewAvatar(avatar);
    const nameValid = reviewName(name);
    const surNameValid = reviewSurname(surname);
    const birthdateValid = reviewBirthdate(birthdate);
    const countryValid = reviewCountry(country);
    const genderValid = reviewGender(gender);
    const consentValid = reviewCheckboxConsent(consent);

    setValidation({
      avatarInput: avatarValid,
      nameInput: nameValid,
      surnameInput: surNameValid,
      dateInput: birthdateValid,
      countrySelect: countryValid,
      genderInput: genderValid,
      checkboxConsentInput: consentValid,
    });

    const validCards =
      avatarValid === '' &&
      nameValid === '' &&
      surNameValid === '' &&
      genderValid === '' &&
      birthdateValid === '' &&
      genderValid === '' &&
      consentValid === '';

    if (validCards) {
      onSubmitForms &&
        onSubmitForms?.({
          id: Date.now(),
          avatar: image,
          name,
          surname,
          birthdate,
          country,
          gender,
          consent,
          consentNews,
        });
      reset();
      onSubmitMessage();
    }
  };

  function onSubmitMessage() {
    setMessage('Your data has been saved');

    setTimeout(() => {
      setMessage('');
    }, 1500);
  }

  const {
    nameInput,
    surnameInput,
    dateInput,
    countrySelect,
    genderInput,
    checkboxConsentInput,
    avatarInput,
  } = validation;

  return (
    <form className={styles.list} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <img className={styles.avatar} src={avatarImg} alt="avatarImg" />
        <input
          {...register('avatar')}
          className={styles.input_avatar}
          type="file"
          placeholder="Avarat"
          accept="image/*"
        />
        {avatarInput && <div className={styles.input_err}>{avatarInput}</div>}
      </label>
      <label>
        <input
          {...register('name')}
          type="text"
          className={styles.input}
          placeholder="First Name"
          autoFocus
        />
        {nameInput && <div className={styles.input_err}>{nameInput}</div>}
      </label>
      <label>
        <input
          {...register('surname')}
          type="text"
          className={styles.input}
          placeholder="Last Name"
        />
        {surnameInput && <div className={styles.input_err}>{surnameInput}</div>}
      </label>
      <label>
        Your Birthday
        <input
          {...register('birthdate')}
          type="date"
          className={styles.input}
          placeholder="Your Birthday"
          min="1920-01-01"
          max="2010-01-01"
        />
        {dateInput && <div className={styles.input_err}>{dateInput}</div>}
      </label>

      <label htmlFor="country">
        Your country:
        <select
          {...register('country')}
          className={styles.input}
          id="country"
          defaultValue={'Choose'}
        >
          <option defaultChecked value="Choose">
            Choose the country
          </option>
          <option value="Poland">Poland</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Germany">Germany</option>
          <option value="Romania">Romania</option>
          <option value="other">other</option>
        </select>
        {countrySelect && <div className={styles.input_err}>{countrySelect}</div>}
      </label>
      <div className={styles.gender}>
        <label>
          Gender:
          <label className={styles.gender_radio}>
            Male
            <input {...register('gender')} type="radio" alt="Male" value="male" />
          </label>
          <label className={styles.gender_radio}>
            Female
            <input
              {...register('gender')}
              type="radio"
              alt="Female"
              value="female"
              className={styles.gender_radio}
            />
          </label>
          {genderInput && <div className={styles.input_err}>{genderInput}</div>}
        </label>
      </div>
      <label htmlFor="checkboxConsent" className={styles.label_checkbox}>
        <input
          {...register('consent')}
          className={styles.checkbox}
          type="checkbox"
          id="checkboxConsent"
        />
        I consent to my personal data
        {checkboxConsentInput && <div className={styles.input_err}>{checkboxConsentInput}</div>}
      </label>
      <label htmlFor="checkboxNews" className={styles.label_checkbox}>
        <input
          {...register('consentNews')}
          className={styles.checkbox}
          type="checkbox"
          id="checkboxNews"
        />
        Receive news about promotions
      </label>

      <button className={styles.form_button} type="submit">
        SUBMIT
      </button>
      {message && <div className={styles.message}>{message}</div>}
    </form>
  );
}
