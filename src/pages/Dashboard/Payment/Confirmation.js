import React, { useState } from 'react';
import PageTitle from '../../../components/Dashboard/PageTitle';
import Button from '../../../components/Dashboard/Button';
import SubtitleInfo from '../../../components/Dashboard/SubtitleInfo';
import SubmitButton from '../../../components/Dashboard/SubmitButton';
import Card from '../../../components/Card';

export default function Confirmation({ total, formData }) {
  const [card, setCard] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  const handleInputFocus = (e) => {
    setCard({ focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCard({ [name]: value });
  };

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
      <SubmitButton>
        FINALIZAR PAGAMENTO
      </SubmitButton>
    </>
  );
}
