import { BsPerson } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { useEffect, useState } from 'react';

export default function RoomButtonCustomer() {
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
      setIconColor('#000');
    }
  }, [isClicked]);

  return (
    <>
      {props === 'livre' ? (
        <>
          <IconContext.Provider value={{ color: `${iconColor}`, size: '26px' }}>
            <BsPerson onClick={Toggle} />
          </IconContext.Provider>
        </>
      ) : (
        <IconContext.Provider value={{ color: `${iconColor}`, size: '26px' }}>
          <BsPersonFill onClick={Toggle} />
        </IconContext.Provider>
      )}
    </>
  );
}
