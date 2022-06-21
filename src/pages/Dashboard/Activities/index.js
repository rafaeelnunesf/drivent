import { Box } from '@material-ui/core';
import { BiLogIn } from 'react-icons/bi';
import { VscError } from 'react-icons/vsc';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ActivityContainer from '../../../components/Dashboard/Activities/ActivityContainer';
import DateButton from '../../../components/Dashboard/Activities/DateButton';
import PageTitle from '../../../components/Dashboard/PageTitle';
import SubtitleInfo from '../../../components/Dashboard/SubtitleInfo';
import UnauthorizedMessage from '../../../components/Dashboard/UnauthorizedMessage';
import UnauthorizedMessageContainer from '../../../components/Dashboard/UnauthorizedMessageContainer';
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
          <LocalContainer>
            <Box sx={styles.localGrid}>
              <SubtitleInfo>Auditório Principal</SubtitleInfo>
              <LocalGrid>
                {main.map((activity) => (
                  <ActivityButton>
                    <Box>
                      <h1>{activity.name}</h1>
                      <p>
                        {activity.startTime} - {activity.endTime}
                      </p>
                    </Box>
                    {activity.seats !== 0 ? (
                      <Box sx={styles.localGrid}>
                        <BiLogIn fontSize="25px" color="#078632" />
                        <p>{activity.seats - activity._count.ActivitySeats} vagas</p>
                      </Box>
                    ) : (
                      <Box sx={styles.localGrid}>
                        <VscError fontSize="25px" color="#CC6666" />
                        <p>Esgotado</p>
                      </Box>
                    )}
                  </ActivityButton>
                ))}
              </LocalGrid>
            </Box>
            <Box sx={styles.localGrid}>
              <SubtitleInfo>Auditório Lateral</SubtitleInfo>
              <LocalGrid>
                {lateral.map((activity) => (
                  <ActivityButton>
                    <Box>
                      <h1>{activity.name}</h1>
                      <p>
                        {activity.startTime} - {activity.endTime}
                      </p>
                    </Box>
                    {activity.seats !== 0 ? (
                      <Box sx={styles.localGrid}>
                        <BiLogIn fontSize="25px" color="#078632" />
                        <p>{activity.seats - activity._count.ActivitySeats} vagas</p>
                      </Box>
                    ) : (
                      <Box sx={styles.localGrid}>
                        <VscError fontSize="25px" color="#CC6666" />
                        <p>Esgotado</p>
                      </Box>
                    )}
                  </ActivityButton>
                ))}
              </LocalGrid>
            </Box>
            <Box sx={styles.localGrid}>
              <SubtitleInfo>Workshop</SubtitleInfo>
              <LocalGrid>
                {workshop.map((activity) => (
                  <ActivityButton>
                    <Box>
                      <h1>{activity.name}</h1>
                      <p>
                        {activity.startTime} - {activity.endTime}
                      </p>
                    </Box>
                    {activity.seats !== 0 ? (
                      <Box sx={styles.localGrid}>
                        <BiLogIn fontSize="25px" color="#078632" />
                        <p>{activity.seats - activity._count.ActivitySeats} vagas</p>
                      </Box>
                    ) : (
                      <Box sx={styles.localGrid}>
                        <VscError fontSize="25px" color="#CC6666" />
                        <p>Esgotado</p>
                      </Box>
                    )}
                  </ActivityButton>
                ))}
              </LocalGrid>
            </Box>
          </LocalContainer>
        </>
      )}
    </>
  );
}

const styles = {
  localGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const ActivityButton = styled.button`
  all: unset;
  box-sizing: border-box;

  width: 260px;
  height: 79px;
  padding: 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #f1f1f1;
  border-radius: 5px;
  cursor: pointer;

  h1 {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;

    color: #343434;
  }

  p {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #343434;
  }
`;

const LocalContainer = styled.div`
  height: 390px;
  display: flex;
`;

const LocalGrid = styled.div`
  width: 288px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid #d7d7d7;
`;
