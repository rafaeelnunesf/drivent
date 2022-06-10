import React, { useContext, useState } from 'react';
import PageTitle from '../../../components/Dashboard/PageTitle';
import Button from '../../../components/Dashboard/Button';
import SubtitleInfo from '../../../components/Dashboard/SubtitleInfo';
import SubmitButton from '../../../components/Dashboard/SubmitButton';
import Card from '../../../components/Card';
import axios from 'axios';
import UserContext from '../../../contexts/UserContext';

export default function Confirmation({ total, formData }) {
  const [submit, setSubmit] = useState({});
  const { userData } = useContext(UserContext);
  console.log(userData);
  function onSubmit(ev) {
    ev.preventDefault();

    if (formData.accommodationType === 'Com Hotel') {
      setSubmit({ userId: userData.user.id, type: formData.ticketType, value: total, accomodation: true });
    } else {
      setSubmit({ userId: userData.user.id, type: formData.ticketType, value: total, accomodation: false });
    }

    const promise = axios.post('http://localhost:4000/payments', submit);
    promise.then((response) => {
      console.log(response);
    });
    promise.catch((error) => alert(error));
    console.log(submit);
  }

  return (
    <>
      <PageTitle>Ingresso e pagamento</PageTitle>
      <SubtitleInfo>Ingresso escolhido</SubtitleInfo>
      <Button>
        {formData.ticketType === 'Presencial'
          ? `${formData.ticketType} + ${formData.accommodationType} R$ ${total}`
          : `${formData.ticketType} R$ ${total}`}
      </Button>
      <SubtitleInfo>Pagamento</SubtitleInfo>
      <Card />
      <SubmitButton onClick={onSubmit}>FINALIZAR PAGAMENTO</SubmitButton>
    </>
  );
}
