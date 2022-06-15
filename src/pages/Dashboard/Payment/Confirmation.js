import React, { useContext, useState, useEffect } from 'react';
import PageTitle from '../../../components/Dashboard/PageTitle';
import Button from '../../../components/Dashboard/Button';
import SubtitleInfo from '../../../components/Dashboard/SubtitleInfo';
import SubmitButton from '../../../components/Dashboard/SubmitButton';
import Card from '../../../components/Card';
import UserContext from '../../../contexts/UserContext';
import { toast } from 'react-toastify';
import { confirmPayment } from '../../../services/paymentApi';

export default function Confirmation({ total, formData }) {
  const [submit, setSubmit] = useState({});
  const { userData } = useContext(UserContext);

  useEffect(() => {
    handleSubmitInfo();
  }, []);

  function handleSubmitInfo() {
    if (formData.accommodationType === 'Com Hotel') {
      setSubmit({ userId: userData.user.id, type: formData.ticketType, value: total, accomodation: true });
    } else {
      setSubmit({ userId: userData.user.id, type: formData.ticketType, value: total, accomodation: false });
    }
  }

  function onSubmit() {
    const promise = confirmPayment(submit);
    promise.then((response) => toast('Pagamento confirmado!'));
    promise.catch((error) => alert(error));
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
      <SubmitButton onClick={() => onSubmit()}>FINALIZAR PAGAMENTO</SubmitButton>
    </>
  );
}
