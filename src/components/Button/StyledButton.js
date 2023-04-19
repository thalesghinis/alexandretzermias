import styled from 'styled-components';

export const StyledButton = styled.button`
    width:  ${(props) => props.customWidth};
    background-color: #40838C;
    border: none;
    padding: 10px 20px;
    color: #FFF;
    margin-top: 10px;
    border-radius: 20px;
    cursor: pointer;
    :hover {
        color: #40838C;
        transition: all 0.4s ease-in-out;
        background-color: #9BBFC4;
    }

`;
