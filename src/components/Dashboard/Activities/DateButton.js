import styled from 'styled-components';

const DateButton = styled.button`
  all: unset;
  width: 131px;
  height: 37px;
  left: 489px;
  top: 274px;
  background-color: ${(props) => (props.selected === false ? '#E0E0E0' : '#FFD37D')};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;
`;

export default DateButton;
