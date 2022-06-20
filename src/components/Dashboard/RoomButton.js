import styled from 'styled-components';
import RoomButtonCustomer from './RoomButtonCustomer';

export default function RoomButton({ info }) {
  if (info.type === 'SINGLE') {
    return (
      <>
        <Button>
          <RoomNumber>
            <h1>101</h1>
          </RoomNumber>
          <UserIconBox>
            <RoomButtonCustomer />
          </UserIconBox>
        </Button>
      </>
    );
  }
  if (info.type === 'DOUBLE') {
    return (
      <>
        <Button>
          <RoomNumber>
            <h1>101</h1>
          </RoomNumber>
          <UserIconBox>
            <RoomButtonCustomer />
            <RoomButtonCustomer />
          </UserIconBox>
        </Button>
      </>
    );
  }
  if (info.type === 'TRIPLE') {
    return (
      <>
        <Button>
          <RoomNumber>
            <h1>101</h1>
          </RoomNumber>
          <UserIconBox>
            <RoomButtonCustomer />
            <RoomButtonCustomer />
            <RoomButtonCustomer />
          </UserIconBox>
        </Button>
      </>
    );
  }
}
//Component Styles
const Button = styled.div`
  width: 170px;
  height: 44px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #b8b8b8;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const RoomNumber = styled.div`
  h1 {
    font-weight: bold;
  }
`;

const UserIconBox = styled.div`
  width: 95px;
`;
