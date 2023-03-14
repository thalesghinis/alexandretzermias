import styled from 'styled-components';
import Capa from '../../images/capa6.jpg'

export const StyledHome = styled.div`
width: 100%;
background-image: url(${Capa});
opacity: 0.7;
background-position: center;
height: 600px;
background-size: 100%;
background-repeat: no-repeat
`;

export const StyledBox = styled.div`
background-color: #fff;
width: 500px;
height: 500px;
margin: 50px auto;
border-radius: 50px;
`;



export const StyledContent = styled.div`
margin: 0 auto;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
span {
    margin: 10px 0;
}
`;

export const StyledContact = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
color: #40838C;
align-items: center;
`;

export const StyledSpan = styled.span`
font-weight: bold;
color: #40838C;
`;

export const StyledLink = styled.a`
text-decoration: none;
display: flex;
flex-direction: column;
align-items: center;
font-weight: bold;
color: #40838C;
margin: 10px 0 0;
`;



