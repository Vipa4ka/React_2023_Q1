import { Component } from 'react';
import HeadTitle from '../components/HeadTitle';
import Forms from '../components/Forms';
import CardForm from '../components/Forms/FormCards';

export type FormCards = {
  name: string;
  surname: string;
  birthdate: string;
  gender: string;
  country: string;
  avatar: string;
  consent: string;
  consentNews: string;
};

interface FormState {
  cards: FormCards[];
}

export interface FormProps {
  onSubmitForms?: (newCard: FormCards) => void;
  cards?: FormCards[];
}

class Form extends Component<FormProps, FormState> {
  state = {
    cards: [],
  };

  submitForms = (newCard: FormCards) => {
    this.setState((prev) => ({
      cards: [newCard, ...prev.cards],
    }));
  };

  render() {
    const { cards } = this.state;
    return (
      <>
        <HeadTitle>Form</HeadTitle>

        <Forms onSubmitForms={this.submitForms} />
        {cards.length > 0 && <CardForm cards={cards} />}
      </>
    );
  }
}

export default Form;
