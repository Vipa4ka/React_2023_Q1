import styles from './Forms.module.css';
import { Component, createRef } from 'react';
import avatarImg from './avatar.png';
import { FormProps } from '../../pages/Form';

type State = {
  message: boolean;
  nameInput: string;
  surnameInput: string;
  dateInput: string;
  countrySelect: string;
  genderInput: string;
  checkboxConsentInput: string;
  avatarInput: string;
};

class Forms extends Component<FormProps, State> {
  constructor(props: FormProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.name = createRef();
    this.surname = createRef();
    this.birthdate = createRef();
    this.female = createRef();
    this.male = createRef();
    this.country = createRef();
    this.avatar = createRef();
    this.checkboxConsent = createRef();
    this.checkboxNews = createRef();

    this.state = {
      message: false,
      nameInput: '',
      surnameInput: '',
      dateInput: '',
      countrySelect: '',
      genderInput: '',
      checkboxConsentInput: '',
      avatarInput: '',
    };
  }

  name: React.RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  birthdate: React.RefObject<HTMLInputElement>;
  female: React.RefObject<HTMLInputElement>;
  male: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  avatar: React.RefObject<HTMLInputElement>;
  checkboxConsent: React.RefObject<HTMLInputElement>;
  checkboxNews: React.RefObject<HTMLInputElement>;

  handleChange(event: React.SyntheticEvent) {
    event.preventDefault();
    const { onSubmitForms } = this.props;

    const {
      name,
      surname,
      birthdate,
      female,
      male,
      country,
      avatar,
      checkboxConsent,
      checkboxNews,
    } = this;

    const currentName = (name.current as HTMLInputElement).value;
    const currentSurname = (surname.current as HTMLInputElement).value;
    const currentBirthdate = (birthdate.current as HTMLInputElement).value;
    const currentFemale = (female.current as HTMLInputElement).checked;
    const currentMale = (male.current as HTMLInputElement).checked;
    const currentCountry = (country.current as HTMLSelectElement).value;
    const currentCheckboxConsent = (checkboxConsent.current as HTMLInputElement).checked;
    const currentCheckboxNews = (checkboxNews.current as HTMLInputElement).checked;

    const avatarImg = avatar.current?.files?.[0];
    const fotoAvatar = avatarImg ? URL.createObjectURL(avatarImg) : '';

    let gender = '';
    if (currentFemale) {
      gender = (female.current as HTMLInputElement).alt;
    } else if (currentMale) {
      gender = (male.current as HTMLInputElement).alt;
    }

    let consent = '';
    if (currentCheckboxConsent) {
      consent = 'Yes';
    } else {
      consent = 'No';
    }

    let consentNews = '';
    if (currentCheckboxNews) {
      consentNews = 'Yes';
    } else {
      consentNews = 'No';
    }
    const validateAvatar = this.reviewAvatar(fotoAvatar);
    const validateName = this.reviewName(currentName);
    const validateSurname = this.reviewSurname(currentSurname);
    const validateBirthdate = this.reviewBirthdate(currentBirthdate);
    const validateCountry = this.reviewCountry(currentCountry);
    const validateGender = this.reviewGender(currentFemale, currentMale);
    const validateCheckboxConsent = this.reviewCheckboxConsent(currentCheckboxConsent);

    if (
      validateAvatar &&
      validateName &&
      validateSurname &&
      validateBirthdate &&
      validateCountry &&
      validateGender &&
      validateCheckboxConsent
    ) {
      onSubmitForms &&
        onSubmitForms({
          id: Date.now(),
          name: currentName,
          surname: currentSurname,
          birthdate: currentBirthdate,
          gender: gender,
          country: currentCountry,
          avatar: fotoAvatar,
          consent: consent,
          consentNews: consentNews,
        });
      this.onReset();
      this.onSubmitMessage();
    }
  }

  reviewAvatar(photo: string) {
    if (photo === '') {
      this.setState({ avatarInput: 'Add profile photo' });
      return false;
    }
    this.setState({ avatarInput: '' });
    return true;
  }

  reviewName(name: string) {
    if (name.length < 3) {
      this.setState({ nameInput: 'The name  contains less than 3 symbols' });
      return false;
    } else if (!/^[A-ZА-Я]/.test(name)) {
      this.setState({ nameInput: 'The name  must start with uppercase' });
      return false;
    } else if (/[0-9\.,-\/#!$%' "^&*;:{}=_`~()-]/.test(name)) {
      this.setState({ nameInput: 'The name is wrong' });
      return false;
    }
    this.setState({ nameInput: '' });
    return true;
  }
  reviewSurname(name: string) {
    if (name.length < 3) {
      this.setState({ surnameInput: 'The  surname contains less than 3 symbols' });
      return false;
    } else if (!/^[A-ZА-Я]/.test(name)) {
      this.setState({ surnameInput: 'The surname must start with uppercase' });
      return false;
    } else if (/[0-9\.,-\/#!$%' "^&*;:{}=_`~()-]/.test(name)) {
      this.setState({ surnameInput: 'The surname is wrong' });
      return false;
    }
    this.setState({ surnameInput: '' });
    return true;
  }

  reviewBirthdate(date: string) {
    if (date === '') {
      this.setState({ dateInput: 'Input date of birthdate' });
      return false;
    }
    this.setState({ dateInput: '' });
    return true;
  }

  reviewCountry(country: string) {
    if (country === 'Choose') {
      this.setState({ countrySelect: 'Choose the country' });
      return false;
    }
    this.setState({ countrySelect: '' });
    return true;
  }

  reviewGender(female: boolean, male: boolean) {
    if (!female && !male) {
      this.setState({ genderInput: 'Choose the  gender' });
      return false;
    }
    this.setState({ genderInput: '' });
    return true;
  }
  reviewCheckboxConsent(checkbox: boolean) {
    if (!checkbox) {
      this.setState({ checkboxConsentInput: 'Agree consent to my personal data' });
      return false;
    }
    this.setState({ checkboxConsentInput: '' });
    return true;
  }

  onReset = () => {
    const {
      name,
      surname,
      birthdate,
      female,
      male,
      country,
      avatar,
      checkboxConsent,
      checkboxNews,
    } = this;
    (name.current as HTMLInputElement).value = '';
    (surname.current as HTMLInputElement).value = '';
    (birthdate.current as HTMLInputElement).value = '';
    (female.current as HTMLInputElement).checked = false;
    (male.current as HTMLInputElement).checked = false;
    (country.current as HTMLSelectElement).value = '';
    (avatar.current as HTMLInputElement).value = '';
    (checkboxConsent.current as HTMLInputElement).checked = false;
    (checkboxNews.current as HTMLInputElement).checked = false;
  };

  onSubmitMessage = () => {
    this.setState({ message: true });

    setTimeout(() => {
      this.setState({ message: false });
    }, 1500);
  };

  render() {
    const {
      message,
      nameInput,
      surnameInput,
      dateInput,
      countrySelect,
      genderInput,
      checkboxConsentInput,
      avatarInput,
    } = this.state;
    return (
      <form className={styles.list} onSubmit={this.handleChange}>
        <label>
          <img className={styles.avatar} src={avatarImg} alt="avatarImg" />
          <input
            className={styles.input_avatar}
            type="file"
            name="avatar"
            ref={this.avatar}
            placeholder="Avarat"
            accept="image/*"
          />
          {avatarInput && <div className={styles.input_err}>{avatarInput}</div>}
        </label>
        <label>
          <input
            type="text"
            ref={this.name}
            className={styles.input}
            name="name"
            placeholder="First Name"
            autoFocus
          />
          {nameInput && <div className={styles.input_err}>{nameInput}</div>}
        </label>
        <label>
          <input type="text" ref={this.surname} className={styles.input} placeholder="Last Name" />
          {surnameInput && <div className={styles.input_err}>{surnameInput}</div>}
        </label>
        <label>
          Your Birthday
          <input
            type="date"
            name="birthdate"
            ref={this.birthdate}
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
            className={styles.input}
            id="country"
            name="country"
            defaultValue={'Choose'}
            ref={this.country}
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
              <input type="radio" name="gender" alt="Male" value="male" ref={this.male} />
            </label>
            <label className={styles.gender_radio}>
              Female
              <input
                type="radio"
                name="gender"
                alt="Female"
                value="female"
                ref={this.female}
                className={styles.gender_radio}
              />
            </label>
            {genderInput && <div className={styles.input_err}>{genderInput}</div>}
          </label>
        </div>
        <label htmlFor="checkboxConsent" className={styles.label_checkbox}>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="checkboxConsent"
            id="checkboxConsent"
            ref={this.checkboxConsent}
          />
          I consent to my personal data
          {checkboxConsentInput && <div className={styles.input_err}>{checkboxConsentInput}</div>}
        </label>
        <label htmlFor="checkboxNews" className={styles.label_checkbox}>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="checkboxNews"
            id="checkboxNews"
            ref={this.checkboxNews}
          />
          Receive news about promotions
        </label>
        <button className={styles.form_button} type="submit">
          SUBMIT
        </button>
        {message && <div className={styles.message}>Your data has been saved</div>}
      </form>
    );
  }
}

export default Forms;
