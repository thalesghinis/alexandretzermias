import styled from 'styled-components';
import Capa from '../../images/landscape2.png'
import Insta from '../../images/instagram.png'
import Ornament from '../../images/ornament.png'

export const StyledHome = styled.div`
width: 100%;
background-image: url(${Capa});
opacity: 0.7;
background-position: center;
background-repeat: no-repeat;
background-size: 100%;
height: 100vh;
hr {
    width: 300px;
    height: 2px;
    background-color: #40838C;
    border: none;
}
`;

export const StyledBox = styled.div`
width: 100%;
background-image: url(${Ornament});
opacity: 1;
background-position: right;
background-repeat: no-repeat;
background-color: #fff;
width: 500px;
height: 700px;
margin: 50px auto;
border-radius: 50px;
`;

export const StyledContent = styled.div`
margin: 0 auto;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
span {
    text-align: center;
}
@media (max-width: 844px) {
    gap: 20px;
}

`;

export const StyledContact = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
color: #000;
align-items: center;
`;

export const StyledSpan = styled.span`
font-weight: bold;
color: #000;
`;

export const StyledSpanLink = styled.a`
text-decoration: none;
display: flex;
flex-direction: row;
gap: 10px;
align-items: center;
font-weight: bold;
color: #000;
`;


export const StyledLink = styled.a`
text-decoration: none;
display: flex;
flex-direction: column;
align-items: center;
font-weight: bold;
color: #000;
  
`;

export const StyledTitle = styled.span`
font-weight: bold;
`;

export const StyledAddress = styled.span`
border: 1px solid #40838C;
border-radius: 20px;
display: flex;
flex-direction: column;
padding: 20px;
gap: 10px;
a {
    color: #40838C;
    text-decoration: none;
}
@media (max-width: 844px) {
    gap: 15px;
}
`;

export const StyledBold = styled.span`
font-weight: bold;
@media (max-width: 844px) {
    
}
`;

export const StyledInsta = styled.div`
width: 20px;
background-image: url(${Insta});
background-position: center;
height: 20px;
background-size: 100%;
background-repeat: no-repeat;
border: none;
`;

