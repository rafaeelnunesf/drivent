import styled from 'styled-components';

const HotelButton = styled.button`
  all: unset;
  width: 180px;
  height: 220px;
  background: #f1f1f1;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px;

  img {
    width: 178px;                                                                                                                                               px;
    height: 109px;
    border-radius: 5px;
  }
`;

const HotelName = styled.p`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #343434;
`;

const InfoType = styled.p`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  color: #3c3c3c;
`;

const Info = styled.p`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #3c3c3c;
`;

export { HotelButton, HotelName, Info, InfoType };
