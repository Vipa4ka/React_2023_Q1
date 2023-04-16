import HeadTitle from '../components/HeadTitle';
import Forms from '../components/Forms';
import CardForm from '../components/Forms/CardForm';
import { FormCards } from '../types';

import { useAppDispatch, useAppSelector } from '../redux/hook';
import { addForm } from '../redux/slice/formSlice';

export default function Form() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards);

  const submitForms = (e: FormCards) => {
    dispatch(addForm(e));
  };

  return (
    <>
      <HeadTitle>Form</HeadTitle>

      <Forms onSubmitForms={submitForms} />
      {cards.length > 0 && <CardForm cards={cards} />}
    </>
  );
}
