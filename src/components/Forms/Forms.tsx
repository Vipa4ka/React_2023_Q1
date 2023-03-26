import styles from './Forms.module.css';
import { Component, createRef } from 'react';
import avatarImg from './avatar.png';
import { FormProps } from '../../pages/Form';

type State = {
  message: boolean;
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

    this.onSubmitMessage();
    this.onReset();
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
    }, 3000);
  };

  render() {
    const { message } = this.state;
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
        </label>
        <label>
          <input
            type="text"
            ref={this.name}
            className={styles.input}
            name="name"
            placeholder="First Name"
            pattern="^[A-ZА-ЯЁ]{1}[a-zа-яё]+$"
            title="The name can only contain letters. For example, Adrian, Jacob, Charles."
            required
            autoFocus
          />
        </label>
        <label>
          <input
            type="text"
            ref={this.surname}
            className={styles.input}
            placeholder="Last Name"
            pattern="^[A-ZА-ЯЁ]{1}[a-zа-яё]+$"
            title="The name can only contain letters. For example, Adrian, Jacob, Charles."
            required
          />
        </label>
        <label>
          Your Birthday
          <input
            type="date"
            name="birthdate"
            ref={this.birthdate}
            className={styles.input}
            placeholder="Your Birthday"
            pattern="/^\d{2}-\d{2}-\d{4}$/"
            title="Please enter the date of birth in the DD-MM-YYYY format."
            min="1920-01-01"
            max="2010-01-01"
            required
          />
        </label>

        <label htmlFor="country">Your country:</label>
        <select className={styles.input} id="country" name="country" ref={this.country} required>
          <option value="">Choose the country</option>
          <option value="Poland">Poland</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Germany">Germany</option>
          <option value="Romania">Romania</option>
          <option value="other">other</option>
        </select>
        <div className={styles.gender}>
          <label className={styles.gender_radio}>
            Male
            <input type="radio" name="gender" alt="Male" value="male" ref={this.male} required />
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
              required
            />
          </label>
        </div>
        <label htmlFor="checkboxConsent" className={styles.label_checkbox}>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="checkboxConsent"
            id="checkboxConsent"
            ref={this.checkboxConsent}
            required
          />
          I consent to my personal data
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
