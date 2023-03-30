import styles from '../Forms.module.css';
import { FormProps } from '../../../pages/Form';

export default function Birthdate({ birthdateProp }: FormProps) {
  return (
    <label>
      Your Birthday
      <input
        type="date"
        name="birthdate"
        ref={birthdateProp}
        className={styles.input}
        placeholder="Your Birthday"
        min="1920-01-01"
        max="2010-01-01"
      />
      {/* {dateInput && <div className={styles.input_err}>{dateInput}</div>} */}
    </label>
  );
}
