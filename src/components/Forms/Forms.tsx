import styles from './Forms.module.css';
import { Component, createRef } from 'react';
import avatarImg from './avatar.png';

class Forms extends Component {
  constructor(props: Record<string, never>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.name = createRef();
    this.surname = createRef();
    this.birthdate = createRef();
    this.female = createRef();
    this.male = createRef();
    this.country = createRef();
    this.avatar = createRef();
    // this.surname = createRef();
  }
  name: React.RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  birthdate: React.RefObject<HTMLInputElement>;
  female: React.RefObject<HTMLInputElement>;
  male: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  avatar: React.RefObject<HTMLInputElement>;
  // surname: React.RefObject<HTMLInputElement>;
  // surname: React.RefObject<HTMLInputElement>;
  // surname: React.RefObject<HTMLInputElement>;

  handleChange(event: React.SyntheticEvent) {
    event.preventDefault();

    const { name, surname, birthdate, female, male, country, avatar } = this;

    const currentName = (name.current as HTMLInputElement).value;
    const currentSurname = (surname.current as HTMLInputElement).value;
    const currentBirthdate = (birthdate.current as HTMLInputElement).value;
    const currentFemale = (female.current as HTMLInputElement).value;
    const currentMale = (male.current as HTMLInputElement).value;
    const currentCountry = (country.current as HTMLSelectElement).value;
    const currentAvatar = (avatar.current as HTMLInputElement).value;
    // const currentSurname = (surname.current as HTMLInputElement).value;
    // const currentSurname = (surname.current as HTMLInputElement).value;
    // const currentSurname = (surname.current as HTMLInputElement).value;
    console.log(
      currentName,
      currentSurname,
      currentBirthdate,
      currentFemale,
      currentMale,
      currentCountry,
      currentAvatar
    );
  }

  render() {
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
            <input type="radio" name="gender" value="male" ref={this.male} required />
          </label>
          <label className={styles.gender_radio}>
            Female
            <input
              type="radio"
              name="gender"
              value="female"
              ref={this.female}
              className={styles.gender_radio}
              required
            />
          </label>
        </div>

        <button className={styles.form_button} type="submit">
          SUBMIT
        </button>
      </form>
    );
  }
}

export default Forms;
