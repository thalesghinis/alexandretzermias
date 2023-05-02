import styled from 'styled-components';

export const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
    min-height: 60px;
    background-color: #40838C;;
`;

export const StyledInfo = styled.span`
    color: #fff;
    font-size: 12px;
    @media (max-width: 844px) {
        padding: 0 50px;
      }
    
`;
