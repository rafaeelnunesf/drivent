import PageTitle from '../../../components/Dashboard/PageTitle';
import UnauthorizedMessage from '../../../components/Dashboard/UnauthorizedMessage';
import UnauthorizedMessageContainer from '../../../components/Dashboard/UnauthorizedMessageContainer';
import usePayment from '../../../hooks/api/usePayment';

export default function Activities() {
  const { payment } = usePayment();

  if (!payment) {
    return (
      <>
        <PageTitle>Escolha de atividades</PageTitle>
        <UnauthorizedMessageContainer>
          <UnauthorizedMessage>
            Você precisa ter confirmado pagamento antes
            <br /> de fazer a escolha de atividades
          </UnauthorizedMessage>
        </UnauthorizedMessageContainer>
      </>
    );
  }

  if (payment.type === 'Online') {
    return (
      <>
        <PageTitle>Escolha de atividades</PageTitle>
        <UnauthorizedMessageContainer>
          <UnauthorizedMessage>
            Sua modalidade de ingresso não necessita escolher
            <br /> atividade. Você terá acesso a todas as atividades.
          </UnauthorizedMessage>
        </UnauthorizedMessageContainer>
      </>
    );
  }

  return <h1>Página de atividades em construção!</h1>;
}
