import { Component } from 'react';
import styles from './FormsCards.module.css';

import { FormProps } from '../../pages/Form';

class CardForm extends Component<FormProps> {
  render() {
    const { cards } = this.props;

    return (
      <div>
        <ul className={styles.group}>
          {cards?.map(
            ({ name, surname, birthdate, gender, country, avatar, consent, consentNews }) => {
              return (
                <li key={Date.now()} className={styles.list_cards}>
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
  }
}

export default CardForm;
