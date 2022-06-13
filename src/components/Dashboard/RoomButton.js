import styled from 'styled-components';
import { BsPerson } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { useEffect, useState } from 'react';

export default function RoomButton({ info }) {
  const props = 'livre';

  const [isClicked, setIsClicked] = useState(false);
  const [iconColor, setIconColor] = useState('');

  const Toggle = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      setIconColor('pink');
    } else {
      setIconColor('#FFF');
    }
  }, [isClicked]);

  if (info.type === 'SINGLE') {
    return (
      <>
        <Button>
          <RoomNumber>
            <h1>101</h1>
          </RoomNumber>
          {props === 'livre' && (
            <UserIconBox>
              <IconContext.Provider value={{ size: '26px' }}>
                <BsPerson />
              </IconContext.Provider>
            </UserIconBox>
          )}
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
            {props === 'livre' ? (
              <IconContext.Provider value={{ size: '26px' }}>
                <BsPerson />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ size: '26px' }}>
                <BsPersonFill />
              </IconContext.Provider>
            )}
            {props === 'livre' ? (
              <>
                <IconContext.Provider value={{ size: '26px' }}>
                  <BsPerson />
                </IconContext.Provider>
              </>
            ) : (
              <IconContext.Provider value={{ size: '26px' }}>
                <BsPersonFill />
              </IconContext.Provider>
            )}
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
            {props === 'livre' ? (
              <IconContext.Provider value={{ color: `${iconColor}`, size: '26px' }}>
                <BsPerson onClick={Toggle} />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ color: `${iconColor}`, size: '26px' }}>
                <BsPersonFill />
              </IconContext.Provider>
            )}
            {props === 'livre' ? (
              <>
                <IconContext.Provider value={{ color: `${iconColor}`, size: '26px' }}>
                  <BsPerson />
                </IconContext.Provider>
              </>
            ) : (
              <IconContext.Provider value={{ color: `${iconColor}`, size: '26px' }}>
                <BsPersonFill />
              </IconContext.Provider>
            )}
            {props === 'livre' ? (
              <>
                <IconContext.Provider value={{ color: `${iconColor}`, size: '26px' }}>
                  <BsPerson />
                </IconContext.Provider>
              </>
            ) : (
              <IconContext.Provider value={{ color: `${iconColor}`, size: '26px' }}>
                <BsPersonFill />
              </IconContext.Provider>
            )}
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
  padding: 12px;
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
  width: 75px;
`;
