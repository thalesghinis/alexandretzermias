import React  from 'react'
import Photo from '../../images/ale2.png'
import { 
  StyledHome, 
  StyledBox, 
  StyledWhoAmI, 
  StyledContent, 
  StyledSubject, 
  StyledContact,
  StyledSpan,
  StyledLink
} from './StyledContact'
import Button from '../Button/Button'


const Contact = () => {

    return (
      <>
        <StyledHome>
       
          <StyledBox>

          <StyledContent>
            <h2>Contato</h2>
            <span>(11)111111111</span>
            <span>alexandre@alexandre.com</span>
            <StyledLink href='https://www.instagram.com/alexandretzermias'>
              <StyledSpan>Link do Instagram</StyledSpan>
            </StyledLink>
            <span>Endereço: <b>Rua xxxxxxxxxxxxxxxxxxx</b></span>
            <StyledLink href='https://tinyurl.com/alexandretzermias'>
              Entre em contato diretamente pelo WhatsApp
              <Button>Botão WhatsApp </Button>
            </StyledLink>

          </StyledContent>
          </StyledBox>


        </StyledHome>
        

        

        <StyledContact>
          <StyledContent>
            <h2>Contato</h2>
            <span>Email</span>
            <span>Email</span>
            <span>Email</span>
            <span>Email</span>
            <span>Btn Whats</span>
          </StyledContent>
        </StyledContact>

     </>
    )
}

export default Contact;

