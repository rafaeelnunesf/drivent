import { Box } from '@material-ui/core';
import { useState } from 'react';
import Button from '../../../components/Dashboard/Button';
import SubmitButton from '../../../components/Dashboard/SubmitButton';
import PageTitle from '../../../components/Dashboard/PageTitle';
import SubtitleInfo from '../../../components/Dashboard/SubtitleInfo';

export default function Payment() {
  const [formData, setFormData] = useState({
    ticketType: '',
    accommodationType: '',
  });
  const [ticketValue, setTicketValue] = useState();
  const [total, setTotal] = useState();
  const [showReserveTicketButton, setShowReserveTicketButton] = useState(false);
  const [showReserveAccommodationButton, setShowReserveAccommodationButton] = useState(false);
  const [showAccomodationChoices, setShowAccomodationChoices] = useState(false);

  function handleTicketType(e) {
    const buttonContent = e.target.innerHTML;
    if (buttonContent.includes('Presencial')) {
      setTicketValue(parseInt(buttonContent.replace('Presencial<br>R$ ', '')));
      if (formData.ticketType === '' || formData.ticketType === 'Online') {
        setFormData({ ...formData, ticketType: 'Presencial' });
        setShowReserveTicketButton(true);
      } else {
        setFormData({ ...formData, ticketType: '' });
        setShowReserveTicketButton(false);
      }
    }
    if (buttonContent.includes('Online')) {
      setTicketValue(parseInt(buttonContent.replace('Online<br>R$ ', '')));
      if (formData.ticketType === '' || formData.ticketType === 'Presencial') {
        setFormData({ ...formData, ticketType: 'Online' });
        setShowReserveTicketButton(true);
      }
      if (formData.ticketType === 'Online') {
        setFormData({ ...formData, ticketType: '' });
        setShowReserveTicketButton(false);
      }
    }
  }
  function handleAccommodationType(e) {
    const buttonContent = e.target.innerHTML;
    if (buttonContent.includes('Sem')) {
      const accommodationValue = parseInt(buttonContent.replace('Sem Hotel<br>+ R$', ''));
      setTotal(ticketValue + accommodationValue);
      if (formData.accommodationType === '' || formData.accommodationType === 'Com Hotel') {
        setFormData({ ...formData, accommodationType: 'Sem Hotel' });
        setShowReserveAccommodationButton(true);
      } else {
        setFormData({ ...formData, accommodationType: '' });
        setShowReserveAccommodationButton(false);
      }
    }
    if (buttonContent.includes('Com')) {
      const accommodationValue = parseInt(buttonContent.replace('Com Hotel<br>+ R$', ''));
      setTotal(ticketValue + accommodationValue);
      if (formData.accommodationType === '' || formData.accommodationType === 'Sem Hotel') {
        setFormData({ ...formData, accommodationType: 'Com Hotel' });
        setShowReserveAccommodationButton(true);
      } else {
        setFormData({ ...formData, accommodationType: '' });
        setShowReserveAccommodationButton(false);
      }
    }
  }

  function handleSubmitButton(e) {
    e.preventDefault();
    setShowAccomodationChoices(true);
    setShowReserveTicketButton(false);
  }
  return (
    <>
      <PageTitle>Ingresso e pagamento</PageTitle>
      <Box sx={{ marginTop: '37px' }}>
        <SubtitleInfo>Primeiro, escolha sua modalidade de ingresso</SubtitleInfo>
        <Button
          disabled={showAccomodationChoices}
          selected={formData.ticketType === 'Presencial'}
          onClick={handleTicketType}
        >
          Presencial
          <br />
          R$ 250
        </Button>
        <Button
          disabled={showAccomodationChoices}
          selected={formData.ticketType === 'Online'}
          onClick={handleTicketType}
        >
          Online
          <br />
          R$ 100
        </Button>
      </Box>

      {showReserveTicketButton && (
        <>
          <SubtitleInfo
            style={{ marginTop: '44px' }}
          >{`Fechado! O total ficou em R$ ${ticketValue}. Agora é só confirmar:`}</SubtitleInfo>
          <SubmitButton onClick={handleSubmitButton}>RESERVAR INGRESSO</SubmitButton>
        </>
      )}
      {showAccomodationChoices && (
        <Box sx={{ marginTop: '37px' }}>
          <SubtitleInfo>Ótimo! Agora escolha sua modalidade de hospedagem</SubtitleInfo>
          <Button selected={formData.accommodationType === 'Sem Hotel'} onClick={handleAccommodationType}>
            Sem Hotel
            <br />+ R$ 0
          </Button>
          <Button selected={formData.accommodationType === 'Com Hotel'} onClick={handleAccommodationType}>
            Com Hotel
            <br />+ R$ 350
          </Button>
        </Box>
      )}
      {showReserveAccommodationButton && (
        <>
          <SubtitleInfo
            style={{ marginTop: '44px' }}
          >{`Fechado! O total ficou em R$ ${total}. Agora é só confirmar:`}</SubtitleInfo>
          <SubmitButton>RESERVAR INGRESSO</SubmitButton>
        </>
      )}
    </>
  );
}
