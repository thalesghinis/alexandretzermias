import styled from 'styled-components';
import Capa from '../../images/capa5.jpg'
import Photo from '../../images/ale2.png'

export const StyledHome = styled.div`
width: 100%;
background-image: url(${Capa});
background-position: center;
height: 600px;
background-size: 100%;
background-repeat: no-repeat
`;

export const StyledPhoto = styled.div`
width: 400px;
background-image: url(${Photo});
background-position: center;
height: 100%;
background-size: 100%;
background-repeat: no-repeat
`;

export const StyledBox = styled.div`
display: flex;
justify-content: flex-start;
margin-left: 100px;
padding: 60px;
font-weight: 800;
font-size: 26px;
color: #fff;
flex-direction: column;
span {
    color: #fff;
    opacity: 0.4;
}
`;

export const StyledWhoAmI = styled.div`
margin-top: 50px;
display: flex;
flex-direction: row;
justify-content: space-around;
color: #40838C;
img {
    width: 30%;
}
`;

export const StyledContent = styled.div`
width: 50%;
margin-bottom: 50px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const StyledSubject = styled.div`
margin-top: 50px;
display: flex;
flex-direction: row;
justify-content: space-around;
color: #fff;
width: 100%;
background-color: #40838C;
`;

export const StyledContact = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
color: #40838C;
width: 80%;
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

