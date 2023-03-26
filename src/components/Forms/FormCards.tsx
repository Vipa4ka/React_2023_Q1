import { Component } from 'react';
// import styles from '../styles/FormCards.module.scss';

import { FormProps } from '../../pages/Form';

class CardForm extends Component<FormProps> {
  render() {
    const { cards } = this.props;

    return (
      <div>
        <ul>
          {cards?.map(
            ({ name, surname, birthdate, gender, country, avatar, consent, consentNews }) => {
              return (
                <li key={Date.now()}>
                  <img src={avatar} alt="avatar" />
                  <p>Name: {name}</p>
                  <p>Surname: {surname}</p>
                  <p>Birthdate: {birthdate}</p>
                  <p>Gender: {gender}</p>
                  <p>Country: {country}</p>
                  <p>Consent to personal data: {consent}</p>
                  <p>Consent to receive news: {consentNews}</p>

                  {/* <p>Phone Number: {phone}</p>
                <time>Birth Date: {date}</time>
                <p>Gender: {gender}</p>
                <p>My favorite genre: {genre}</p>
                <p>I consent to my personal data: {agree ? 'Yes' : 'No'}</p> */}
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
