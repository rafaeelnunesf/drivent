import { Box } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { InfoType, Info, HotelButton, HotelName } from '../../../components/Dashboard/HotelsButton';
import PageTitle from '../../../components/Dashboard/PageTitle';
import SubtitleInfo from '../../../components/Dashboard/SubtitleInfo';
import { getHotels } from '../../../services/hotelApi';
import useToken from '../../../hooks/useToken';

export default function Hotel() {
  const [hotels, setHotels] = useState([]);
  const token = useToken();

  async function getHotelsData() {
    const data = await getHotels(token);
    setHotels(data);
  }

  useEffect(() => {
    getHotelsData();
  }, []);

  if (!hotels) return <h1>Loading...</h1>;

  return (
    <>
      <PageTitle>Escolha de quarto e hotel</PageTitle>
      <Box sx={{ marginTop: '37px' }}>
        <SubtitleInfo>Primeiro, escolha seu hotel</SubtitleInfo>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          {hotels.map((hotel) => {
            return (
              <HotelButton key={hotel.hotelId}>
                <img src={hotel.hotelImage} alt={hotel.name}></img>
                <HotelName>{hotel.hotelName}</HotelName>
                <Box>
                  <InfoType>Tipos de acomodação:</InfoType>
                  <Info>{hotel.bedrooms[0].type}</Info>
                </Box>
                <Box>
                  <InfoType>Vagas disponíveis:</InfoType>
                  <Info>{hotel.vacancy._all - hotel.vacancy.userId}</Info>
                </Box>
              </HotelButton>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
