import styles from './Forms.module.css';
import { Component, createRef } from 'react';

class Forms extends Component {
  constructor(props: Record<string, never>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.name = createRef();
    this.surname = createRef();
    this.birthdate = createRef();
    this.female = createRef();
    this.male = createRef();
    // this.surname = createRef();
    // this.surname = createRef();
    // this.surname = createRef();
  }
  name: React.RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  birthdate: React.RefObject<HTMLInputElement>;
  female: React.RefObject<HTMLInputElement>;
  male: React.RefObject<HTMLInputElement>;
  // surname: React.RefObject<HTMLInputElement>;
  // surname: React.RefObject<HTMLInputElement>;
  // surname: React.RefObject<HTMLInputElement>;
  // surname: React.RefObject<HTMLInputElement>;
  // surname: React.RefObject<HTMLInputElement>;

  handleChange(event: React.SyntheticEvent) {
    event.preventDefault();

    const { name, surname, birthdate, female, male } = this;
    const currentName = (name.current as HTMLInputElement).value;
    const currentSurname = (surname.current as HTMLInputElement).value;
    const currentBirthdate = (birthdate.current as HTMLInputElement).value;
    const currentFemale = (female.current as HTMLInputElement).value;
    const currentMale = (male.current as HTMLInputElement).value;
    // const currentSurname = (surname.current as HTMLInputElement).value;
    // const currentSurname = (surname.current as HTMLInputElement).value;
    // const currentSurname = (surname.current as HTMLInputElement).value;
    // const currentSurname = (surname.current as HTMLInputElement).value;
    // const currentSurname = (surname.current as HTMLInputElement).value;
    console.log(currentName, currentSurname, currentBirthdate, currentFemale, currentMale);
  }

  render() {
    return (
      <form className={styles.list} onSubmit={this.handleChange}>
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
        <div className={styles.gender}>
          <label>
            Male
            <input
              type="radio"
              name="gender"
              value="male"
              ref={this.male}
              className={styles.gender_radio}
              required
            />
          </label>
          <label>
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
