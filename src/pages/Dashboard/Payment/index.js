import { useState } from 'react';
import PageTitle from '../../../components/Dashboard/PageTitle';
import useEnrollment from '../../../hooks/api/useEnrollment';
import UnauthorizedMessage from '../../../components/Dashboard/UnauthorizedMessage';
import UnauthorizedMessageContainer from '../../../components/Dashboard/UnauthorizedMessageContainer';
import Selection from './Selection';
import Confirmation from './Confirmation';

export default function Payment() {
  const [formData, setFormData] = useState({
    ticketType: '',
    accommodationType: '',
  });
  const [total, setTotal] = useState();
  const { enrollment } = useEnrollment();
  const [selection, setSelection] = useState(true);

  function handleSubmitButton(e) {
    e.preventDefault();
    setSelection(false);
  }

  if(!enrollment) {
    return(
      <>
        <PageTitle>Ingresso e pagamento</PageTitle>
        <UnauthorizedMessageContainer>
          <UnauthorizedMessage> Você precisa completar sua inscrição <br />antes de prosseguir pra escolha de ingresso</UnauthorizedMessage>
        </UnauthorizedMessageContainer>
      </>
    );
  };

  return (
    <>
      {selection? <Selection total={total} setTotal={setTotal} formData={formData} setFormData={setFormData} handleSubmitButton={handleSubmitButton}/> : <Confirmation />}
    </>
  );
}
