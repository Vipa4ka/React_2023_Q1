import styles from './FormsCards.module.css';

import { FormProps } from '../../pages/Form';

const CardForm = ({ cards }: FormProps) => {
  return (
    <div>
      <ul className={styles.group}>
        {cards?.map(
          ({ id, name, surname, birthdate, gender, country, avatar, consent, consentNews }) => {
            return (
              <li key={id} className={styles.list_cards}>
                <img src={avatar} alt="avatar" className={styles.avatarFoto} />
                <p>
                  {name} {surname}
                </p>
                <p>Birthdate: {birthdate}</p>
                <p>Gender: {gender}</p>
                <p>Country: {country}</p>
                <p>Consent to personal data: {consent}</p>
                <p>Consent to receive news: {consentNews}</p>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default CardForm;
