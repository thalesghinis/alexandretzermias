import styled from 'styled-components';
import Photo from '../../images/landscape.png'

export const StyledTitle = styled.h2`
    position: relative;
    margin: 0 auto;
    transform: translate(-200px, -100px);
    color: #fff;
    font-size: 30px;
    font-family: 'Open Sans', sans-serif;
    @media (max-width: 844px) {
        margin-top: 80px;
        transform: translate(-16px,-40px);
    }
`;

export const StyledImg = styled.img`
    background-image: url(${Photo});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 0 0 400px 0 ;
    width: 100%; 
    height: 200px;
    @media (max-width: 844px) {
        display: none;
    }
`;

export const StyledAbout = styled.div`
    color: #40838C;
    font-family: 'Open Sans', sans-serif;
    margin: 0 auto;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    width: 100%;

    a {
        color: #fff;
        text-decoration: none;
    }

    &:last-child {
        margin-bottom: 50px;
    }
`;

export const StyledCV = styled.span`
    font-weight: bold;
`;