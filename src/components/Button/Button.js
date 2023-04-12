import React from 'react'
import { StyledButton } from './StyledButton'

const Button = ({ onClick, children }) => {
    return (
      <StyledButton type="button" onClick={onClick}>
        {children}
      </StyledButton>
    );
  };

  export default Button;