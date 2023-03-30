import { useState } from 'react';
import HeadTitle from '../components/HeadTitle';
import Forms from '../components/Forms';
import CardForm from '../components/Forms/CardForm';

export type FormCards = {
  name: string;
  surname: string;
  birthdate: string;
  gender: string;
  country: string;
  avatar: string;
  consent: string;
  consentNews: string;
  id: number;
};

export interface FormProps {
  onSubmitForms?: (newCard: FormCards) => void;
  cards?: FormCards[];
}

export default function Form() {
  const [cards, setCards] = useState<FormCards[]>([]);

  const submitForms = (e: FormCards) => {
    setCards([e, ...cards]);
  };

  return (
    <>
      <HeadTitle>Form</HeadTitle>

      <Forms onSubmitForms={submitForms} />
      {cards.length > 0 && <CardForm cards={cards} />}
    </>
  );
}
