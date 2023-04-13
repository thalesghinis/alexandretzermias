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
  StyledLink,
  StyledTitle,
  StyledAddress,
  StyledBold,
  StyledInsta,
  StyledSpanLink
} from './StyledContact'
import Button from '../Button/Button'


const Contact = () => {

    return (
      <>
        <StyledHome>
          <StyledBox>
          <StyledContent>
            <h2>Contato</h2>
            <span>(19)99498-0627</span>
            <span>alexandre@alexandre.com</span>
            <StyledLink className="rowType" href='https://www.instagram.com/alexandretzermias'>
              <StyledSpanLink>
                  <StyledInsta />Link do Instagram
              </StyledSpanLink>
            </StyledLink>
            <StyledAddress>
            <StyledSpan>Endereço: </StyledSpan>
                <StyledTitle>Mentor Clinic</StyledTitle>
                Rua Olavo Bilac, 67, Jaguariúna - SP
                <StyledLink href='https://www.google.com/maps/place/R.+Ol%C3%A1vo+Bilac,+67,+Jaguari%C3%BAna+-+SP,+13820-000/@-22.6988402,-46.9887488,17z/data=!4m14!1m8!3m7!1s0x94c8e80e9f7cc14f:0xeefc604da4910f70!2sR.+Ol%C3%A1vo+Bilac,+67,+Jaguari%C3%BAna+-+SP,+13820-000!3b1!8m2!3d-22.6988402!4d-46.9865601!10e5!3m4!1s0x94c8e80e9f7cc14f:0xeefc604da4910f70!8m2!3d-22.6988402!4d-46.9865601'> Endereço no Google Maps <Button>Clique Aqui</Button></StyledLink>
            </StyledAddress>
            <StyledLink href='https://tinyurl.com/alexandretzermias'>
              Entre em contato diretamente pelo WhatsApp
              <Button>Botão WhatsApp </Button>
            </StyledLink>
          </StyledContent>
          </StyledBox>
        </StyledHome>
     </>
    )
}

export default Contact;

