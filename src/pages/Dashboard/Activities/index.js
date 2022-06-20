import { useEffect, useState } from 'react';
import ActivityContainer from '../../../components/Dashboard/Activities/ActivityContainer';
import DateButton from '../../../components/Dashboard/Activities/DateButton';
import PageTitle from '../../../components/Dashboard/PageTitle';
import UnauthorizedMessage from '../../../components/Dashboard/UnauthorizedMessage';
import UnauthorizedMessageContainer from '../../../components/Dashboard/UnauthorizedMessageContainer';
import useDates from '../../../hooks/api/useDate';
import usePayment from '../../../hooks/api/usePayment';
import useToken from '../../../hooks/useToken';
import { getActivities } from '../../../services/ActivitiesApi';
import { getDates } from '../../../services/dateApi';

export default function Activities() {
  const { payment } = usePayment();
  const [dateName, setDateName] = useState('');
  const [dates, setDates] = useState([]);
  const token = useToken();

  useEffect(() => {
    activitiesDates();
  }, []);

  async function activitiesDates() {
    const { data: dates } = await getDates(token);
    setDates(dates);
  }

  async function handleDateSelection(name, dateId) {
    setDateName(name);
    /* const { data: activities } = await getActivities(token, dateId);
    console.log(activities); */
  }

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

  if (dates.length === 0) return <h1>Loading...</h1>;
  return (
    <>
      <PageTitle>Escolha de atividades</PageTitle>
      <ActivityContainer>
        {dates.map((date) => (
          <DateButton key={date.id} onClick={() => handleDateSelection(date.name)} selected={date.name === dateName}>
            {date.name}
          </DateButton>
        ))}
      </ActivityContainer>
    </>
  );
}
