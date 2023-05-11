import styled from 'styled-components';
import Capa from '../../images/capa_transparent.jpg'
import Photo from '../../images/alefoto1.jpg'
import Photo2 from '../../images/alefoto2.jpg'

export const StyledHome = styled.div`
width: 100%;
background-image: url(${Capa});
background-position: center;
height: 500px;
background-size: 100%;
background-repeat: no-repeat;
border-radius: 0 0 0 400px;
margin-bottom: 50px;
transform: scaleX(-1);
@media (max-width: 844px) {
    height: 400px;
    border-radius: 0;
}

`;

export const StyledPhoto = styled.div`
width: 220px;
height: 300px;
background-image: url(${Photo});
background-position: center;
background-size: 100%;
background-repeat: no-repeat;
border: 3px solid #40838C;
@media (max-width: 844px) {
    height: 300px;
}

`;

export const StyledBox = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 50px;
font-weight: 800;
font-size: 24px;
color: #40838C;
flex-direction: column;
transform: scaleX(-1);
span {
    color: #40838C;
    opacity: 0.8;
    font-size: 14px;
}
h5 {
    font-size: 18px;
    margin: 10px 0;
}
@media (max-width: 844px) {
        display: none;
  }
`;

export const StyledGreek = styled.h3`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0 10px 0 100px;
margin: 5px 0;
`;

export const StyledWhoAmI = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
flex-direction: row;
justify-content: space-around;
color: #40838C;
align-items: center;

@media (max-width: 844px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
}
}
`;

export const StyledWhoAmITwo = styled.div`
width: 100%;
margin: 0 auto;
display: flex;
flex-direction: row;
justify-content: space-between;
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

export const StyledWhoAmIThree = styled.div`
width: 100%;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;
color: #40838C;
span {
    color: red;
}

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
justify-content: center;
font-size: 20px;
.sectionUp {
    width: 100%;
    margin-bottom: 20px;
    font-size: 18px;
    text-align: initial;
}
.sectionDown {
    width: 100%;
    margin-bottom: 20px;
    font-size: 30px;
}
a {
    color: #40838C;
    text-decoration: none;
    margin-left: 5px;
}
@media (max-width: 844px) {
    width: 90%;
}
`;

export const StyledSubject = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
color: #fff;
width: 100%;
border-radius: 300px 0 0 0;
background-color: #40838C;
@media (max-width: 844px) {
    border-radius: 0;
}
`;

export const StyledSpan = styled.span`
   font-weight: bold;
   color: #fff;
`;

export const StyledLink = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    font-weight: bold;
    color: #40838C;
    margin-left: 5px;
`;

export const StyledTitle = styled.span`
    font-weight: bold;
`;

export const StyledWhats = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    span {
        font-weight: bold;
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
    border-radius: 0 0 0 150px;
`;
