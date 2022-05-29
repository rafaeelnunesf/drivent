import styled from 'styled-components';

const Button = styled.button`
  width: 145px;
  height: 145px;
  margin-right: 24px;
  border: ${(props) => (props.selected === false ? '1px solid #cecece' : 'none')};
  border-radius: 20px;
  background-color: ${(props) => (props.selected === false ? 'white' : '#FFEED2')};
  cursor: pointer;
`;

export default Button;
