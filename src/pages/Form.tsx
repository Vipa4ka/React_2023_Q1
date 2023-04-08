import { useState } from 'react';
import HeadTitle from '../components/HeadTitle';
import Forms from '../components/Forms';
import CardForm from '../components/Forms/CardForm';
import { FormCards } from '../types/index';

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
