import { Box, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ActivityContainer from '../../../components/Dashboard/Activities/ActivityContainer';
import DateButton from '../../../components/Dashboard/Activities/DateButton';
import PageTitle from '../../../components/Dashboard/PageTitle';
import SubtitleInfo from '../../../components/Dashboard/SubtitleInfo';
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
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    activitiesDates();
  }, []);

  async function activitiesDates() {
    const { data: dates } = await getDates(token);
    setDates(dates);
  }

  async function handleDateSelection(name, dateId) {
    if (dateName === '') setDateName(name);
    if (dateName === name) setDateName('');
    if (dateName !== name) setDateName(name);

    const { data: activities } = await getActivities(token, dateId);
    setActivities(activities);
    console.log(activities);
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

  if (!dates) return <h1>Loading...</h1>;

  let main = [];
  let lateral = [];
  let workshop = [];
  if (activities) {
    main = activities.filter((activitie) => activitie.local === 'MAIN');
    lateral = activities.filter((activitie) => activitie.local === 'LATERAL');
    workshop = activities.filter((activitie) => activitie.local === 'WORKSHOP');
  }

  return (
    <>
      <PageTitle>Escolha de atividades</PageTitle>
      <ActivityContainer style={{ marginBottom: '61px' }}>
        {dates.map((date) => (
          <DateButton
            key={date.id}
            onClick={() => handleDateSelection(date.name, date.id)}
            selected={date.name === dateName}
          >
            {date.name}
          </DateButton>
        ))}
      </ActivityContainer>

      {dateName !== '' && (
        <>
          <Grid container sx={{ heigth: '390px' }}>
            <Grid
              item
              sx={{
                border: '1px solid #D7D7D7',
                heigth: '100%',
                width: '290px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <SubtitleInfo>Auditório Principal</SubtitleInfo>
              {main.map((activitie) => (
                <ActivityButton>
                  <h1>{activitie.name}</h1>
                  <p>
                    {activitie.startTime} - {activitie.endTime}
                  </p>
                </ActivityButton>
              ))}
            </Grid>
            <Grid item>
              <SubtitleInfo>Auditório Lateral</SubtitleInfo>
            </Grid>
            <Grid item>
              <SubtitleInfo>Workshop</SubtitleInfo>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

const ActivityButton = styled.button`
  all: unset;

  width: 265px;
  height: 79px;

  background: #f1f1f1;
  border-radius: 5px;
`;
