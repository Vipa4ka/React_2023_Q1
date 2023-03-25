import styles from './Forms.module.css';
import { Component } from 'react';

class Forms extends Component {
  state = {
    value: '',
    agreed: false,
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  handleChangeCheckbox = () => {
    // this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = () => {};

  render() {
    const { value, agreed } = this.state;

    return (
      <form className={styles.list} onSubmit={this.handleSubmit}>
        <label>
          <input
            className={styles.input}
            type="text"
            placeholder="First Name"
            value={value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            className={styles.input}
            type="text"
            placeholder="Last Name"
            value={value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            className={styles.input}
            type="text"
            placeholder="Your Birthday"
            value={value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Male
          <input
            type="radio"
            // checked={gender === Gender.MALE}
            name="gender"
            // value={Gender.MALE}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Female
          <input
            type="radio"
            // checked={gender === Gender.FEMALE}
            name="gender"
            // value={Gender.FEMALE}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            className={styles.input}
            type="text"
            placeholder=""
            value={value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            className={styles.input}
            type="text"
            placeholder="Your Country"
            value={value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input type="checkbox" checked={agreed} onChange={this.handleChangeCheckbox} />I am not a
          robot
        </label>
        <label>
          <input type="checkbox" checked={agreed} onChange={this.handleChangeCheckbox} />
          Agree to terms
        </label>
        <label>
          <input
            className={styles.input}
            type="text"
            placeholder=""
            value={value}
            onChange={this.handleChange}
          />
          Avatar
        </label>

        <button className={styles.form_button} type="submit">
          SUBMIT {value}
        </button>
      </form>
    );
  }
}

export default Forms;
