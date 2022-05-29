import { Box } from '@material-ui/core';
import { useState } from 'react';
import Button from '../../../components/Dashboard/Button';
import PageTitle from '../../../components/Dashboard/PageTitle';
import SubtitleInfo from '../../../components/Dashboard/SubtitleInfo';

export default function Payment() {
  const [type, setType] = useState('');
  const [presencial, setPresencial] = useState(false);
  const [online, setOnline] = useState(false);
  // eslint-disable-next-line no-console
  console.log(type);
  
  return (
    <>
      <PageTitle>Ingresso e pagamento</PageTitle>
      <Box sx={{ marginTop: '37px' }}>
        <SubtitleInfo>Primeiro, escolha sua modalidade de ingresso</SubtitleInfo>
        <Button
          selected={presencial}
          onClick={() => {
            setPresencial(!presencial);
            setOnline(false);
            setType('presencial');
          }}
        >
          Presencial
          <br />
          R$ 250
        </Button>
        <Button
          selected={online}
          onClick={() => {
            setOnline(!online);
            setPresencial(false);
            setType('online');
          }}
        >
          Online
          <br />
          R$ 100
        </Button>
      </Box>
    </>
  );
}
