import { Component, Fragment, FormEvent } from 'react';
import styles from '../Forms.module.css';

interface PropsName {
  value: string;
}

class Name extends Component<PropsName> {
  state = {
    value: ' ',
  };

  handleChange = (event: FormEvent<HTMLFormElement>) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default Name;
