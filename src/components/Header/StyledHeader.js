import styled from 'styled-components';
import Logo from '../../images/logo.png'

export const StyledHeader = styled.div`
width: 100%;
max-width: 1000px;
height: 70px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background: #fff;
color: #40838C;
margin: 0 auto;
span {
font-size: 14px;
font-weight: 500;
}

@media (max-width: 844px) {
    padding: 0 50px;
    max-width: 480px;
  }
`;

export const StyledUl = styled.ul`
display: flex;
list-style-type: none;
`;

export const StyledLi = styled.li`
margin-left: 10px;
font-family: 'Open Sans', sans-serif;
font-weight: 800;
color: #40838C;
cursor: pointer;
font-size: 14px;
:hover {
    opacity: 0.3;
    transition: all 0.4s ease-in-out;
}
`;

export const StyledLogo = styled.div`
width: 120px;
background-image: url(${Logo});
background-position: center;
height: 100%;
background-size: 100%;
background-repeat: no-repeat;
border: none;
`;

export const StyledTeste = styled.div`

`;
