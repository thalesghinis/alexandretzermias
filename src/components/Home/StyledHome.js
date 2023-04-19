import styled from 'styled-components';
import Capa from '../../images/capa5.jpg'
import Photo from '../../images/alefoto1.jpg'
import Photo2 from '../../images/alefoto2.jpg'

export const StyledHome = styled.div`
width: 100%;
background-image: url(${Capa});
background-position: center;
height: 600px;
background-size: 100%;
background-repeat: no-repeat;

@media (max-width: 844px) {
    height: 400px;
}

`;

export const StyledPhoto = styled.div`
width: 220px;
background-image: url(${Photo});
background-position: center;
background-size: 100%;
background-repeat: no-repeat;
border: 3px solid #40838C;
@media (max-width: 844px) {
    height: 400px;
}

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
@media (max-width: 844px) {
        display: none;
  }

`;

export const StyledWhoAmI = styled.div`
width: 60%;
margin: 0 auto;
display: flex;
flex-direction: row;
justify-content: space-around;
color: #40838C;

@media (max-width: 844px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
}
}
`;

export const StyledContent = styled.div`
width: 50%;
margin-bottom: 30px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
.sectionUp {
    margin-bottom: 20px;
}
.sectionDown {
    width: 100%;
    margin-bottom: 20px;
}
a {
    color: #fff;
    text-decoration: none;
}
@media (max-width: 844px) {
    width: 90%;
}
`;

export const StyledSubject = styled.div`
margin: 50px 0;
display: flex;
flex-direction: row;
justify-content: space-around;
color: #fff;
width: 100%;
background-color: #40838C;
`;

export const StyledSpan = styled.span`
   font-weight: bold;
   color: #fff;
`;

export const StyledLink = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: bold;
    color: #fff;
    margin: 10px 0 0;
`;

export const StyledTitle = styled.span`
    font-weight: bold;
`;

export const StyledWhats = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        color: #40838C;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 60px;
    }
`;

export const StyledPhoto2 = styled.div`
    background-image: url(${Photo2});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: inherit;
    width: 500px;
    height: 548px;
    border: 3px solid #40838C;
    transform: translate(0px, -50px);
    border-radius: 0 0 0 150px;
`;
