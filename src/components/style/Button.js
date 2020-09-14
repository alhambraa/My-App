import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const StyledButton = styled.button`
  color: ${props => props.primary ? "White" : "palevioletred"};
  background: ${props => props.primary ? "palevioletred" : "white"};
  width: 80px;
  font-size: 14px;
  padding: 5px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin-right : 10px;
  &:hover {
      color: ${props =>
        props.primary ? 'palevioletred' : 'white'};
      background-color: ${props =>
        props.primary ? 'white' : 'palevioletred'};
  }
`;

const Button = (props) => {
  return <StyledButton primary={props.primary}>{props.text}</StyledButton>
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;