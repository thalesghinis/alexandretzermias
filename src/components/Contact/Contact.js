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
            <span><b>aletzermias@icloud.com</b></span>
            <StyledLink className="rowType" href='https://www.instagram.com/alexandretzermias'>
              <StyledSpanLink>
                  <StyledInsta />Link do Instagram
              </StyledSpanLink>
            </StyledLink>
            
            <StyledAddress>
              <StyledSpan>Consultas presenciais:</StyledSpan>
              <StyledTitle>Mentor Clinic</StyledTitle>
                <span><b><a href='tel:+5519981864615'>(19) 98186-4615</a></b> (secretária Priscila)</span>
                  Rua Olavo Bilac, 67, Jaguariúna - SP
              <StyledLink href='https://www.google.com/maps/place/R.+Ol%C3%A1vo+Bilac,+67,+Jaguari%C3%BAna+-+SP,+13820-000/@-22.6988402,-46.9887488,17z/data=!4m14!1m8!3m7!1s0x94c8e80e9f7cc14f:0xeefc604da4910f70!2sR.+Ol%C3%A1vo+Bilac,+67,+Jaguari%C3%BAna+-+SP,+13820-000!3b1!8m2!3d-22.6988402!4d-46.9865601!10e5!3m4!1s0x94c8e80e9f7cc14f:0xeefc604da4910f70!8m2!3d-22.6988402!4d-46.9865601'> Endereço no Google Maps <Button>Clique Aqui</Button></StyledLink>
              <hr></hr>
              <StyledTitle>Consultas on-line:</StyledTitle>
                <span><b><a href='tel:+5519994980627'>(19) 9 9498-0627</a></b> (secretária Márcia Rodrigues)</span>
              <hr></hr>
              <StyledSpan>DBT Campinas:</StyledSpan>
              <StyledTitle>Rua Salvador Penteado, 83, Campinas - SP</StyledTitle>
                <span><b><a href='tel:+551931131518'>(19) 3113-1518</a></b> (secretária Isolda)</span>
            </StyledAddress>
          
          
           <StyledLink href='https://tinyurl.com/alexandretzermiascontato'>
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

