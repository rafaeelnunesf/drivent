import PageTitle from '../../../components/Dashboard/PageTitle';
import UnauthorizedMessage from '../../../components/Dashboard/UnauthorizedMessage';
import UnauthorizedMessageContainer from '../../../components/Dashboard/UnauthorizedMessageContainer';
import usePayment from '../../../hooks/api/usePayment';

export default function Hotel() {
  const { payment } = usePayment();

  if (!payment) {
    return (
      <>
        <PageTitle>Escolha de hotel e quarto</PageTitle>
        <UnauthorizedMessageContainer>
          <UnauthorizedMessage>
            {' '}
            Você precisa ter confirmado pagamento antes
            <br /> de fazer a escolha de hospedagem
          </UnauthorizedMessage>
        </UnauthorizedMessageContainer>
      </>
    );
  }

  if (payment.accomodation === false) {
    return (
      <>
        <PageTitle>Escolha de hotel e quarto</PageTitle>
        <UnauthorizedMessageContainer>
          <UnauthorizedMessage>
            {' '}
            Sua modalidade de ingresso não inclui hospedagem
            <br /> Prossiga para a escolha de atividades
          </UnauthorizedMessage>
        </UnauthorizedMessageContainer>
      </>
    );
  }
}
