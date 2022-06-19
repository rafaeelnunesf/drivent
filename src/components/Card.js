import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        {' '}
        <CardContainer>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <InputContainer>
            <form>
              <Input
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <Input
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <Input
                type="tel"
                name="expiry"
                placeholder="Valid Thru"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <Input
                type="tel"
                name="cvc"
                placeholder="CVC"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </form>
          </InputContainer>{' '}
        </CardContainer>
      </div>
    );
  }
}

//********** Styled Components
const CardContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 52px;

  display: flex;
  flex-wrap: wrap;
`;
const InputContainer = styled.div`
  width: 400px;
  height: 200px;

  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 300px;
  height: 42px;
  border-radius: 6px;

  &:first-child {
    padding: 5px;
    margin-bottom: 32px;
  }

  &:nth-child(2) {
    padding: 5px;
    margin-bottom: 20px;
  }

  
  &:nth-child(3) {
    width: 180px;
    padding: 5px;
    margin-bottom: 14px;
    margin-right: 20px;
  }

  &:nth-child(4) {
    width: 100px;
    padding: 5px;
    margin-bottom: 14px;
  }
`;
