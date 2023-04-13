import styled from 'styled-components';
import Capa from '../../images/capa5.jpg'
import Photo from '../../images/ale2.png'

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
width: 400px;
background-image: url(${Photo});
background-position: center;
background-size: 100%;
background-repeat: no-repeat;

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
margin-top: 50px;
display: flex;
flex-direction: row;
justify-content: space-around;
color: #40838C;
img {
    width: 30%;
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
color: #fff;
background-color: #40838C;
width: 60%;
height: 180px;
margin: 50px auto;
border-radius: 50px;
h2 {
    font-size: 2em;    
}
@media (max-width: 844px) {
    width: 82%;
}

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

export const StyledBoxContact = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
`;

export const StyledBoxInfoOne = styled.div`
    border-right: 3px solid #e2e2e2;
    padding: 0 50px 0 0;
    display: flex;
    flex-direction: column;
`;

export const StyledBoxInfoTwo = styled.div`
    padding: 0 0 0 50px; 
    display: flex;
    flex-direction: column;
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