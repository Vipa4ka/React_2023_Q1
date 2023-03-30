import styles from '../Forms.module.css';
import { FormProps } from '../../../pages/Form';

export default function Country({ countryProp }: FormProps) {
  return (
    <label htmlFor="country">
      Your country:
      <select
        className={styles.input}
        id="country"
        name="country"
        defaultValue={'Choose'}
        ref={countryProp}
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
      {/* {countrySelect && <div className={styles.input_err}>{countrySelect}</div>} */}
    </label>
  );
}
