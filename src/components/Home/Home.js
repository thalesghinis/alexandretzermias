import React  from 'react'
import Photo from '../../images/ale2.png'
import { 
  StyledHome, 
  StyledBox, 
  StyledWhoAmI, 
  StyledContent, 
  StyledSubject, 
  StyledContact,
  StyledLink,
  StyledSpan,
  StyledPhoto
} from './StyledHome'
import Button from '../Button/Button'

import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  'ὁ βίος βραχὺς, ἡ δὲ τέχνη μακρὴ, ὁ δὲ καιρὸς ὀξὺς, ἡ δὲ πεῖρα σφαλερὴ,  ἡ δὲ κρίσις χαλεπή.',
  'A vida é breve, A arte é longa, A oportunidade passageira, A experiência enganosa, O julgamento difícil',
];



const Home = () => {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      4000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  //<StyledBox>
        
  //<TextTransition springConfig={presets.wobbly}>
   // {TEXTS[index % TEXTS.length]}
 // </TextTransition>
 // </StyledBox>


    return (
      <>
        <StyledHome>
       
          <StyledBox>
            ὁ βίος βραχὺς, <span>A vida é breve,</span>
            ἡ δὲ τέχνη μακρὴ,  <span>A arte é longa,</span>
            ὁ δὲ καιρὸς ὀξὺς,  <span>A oportunidade passageira,</span>
            ἡ δὲ πεῖρα σφαλερὴ, <span> A experiência enganosa,</span>
            ἡ δὲ κρίσις χαλεπή.   <span>O julgamento difícil.</span>v
          </StyledBox>


        </StyledHome>
        <StyledWhoAmI>
          <StyledContent>
            <h2>Dr Alexandre Tzermias</h2>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque diam velit, sit amet lobortis erat ullamcorper vitae. Aliquam ac nunc vitae massa convallis interdum. Curabitur in nibh ac purus tristique elementum. In rhoncus dui enim, vel aliquam purus eleifend a. Curabitur eget mauris condimentum, tincidunt tortor in, tempor libero. Cras blandit scelerisque luctus. Nulla facilisi. Etiam lacinia efficitur purus ut commodo. Proin interdum neque a nisi euismod, id porta mi faucibus. Curabitur est mauris, auctor ut ante vitae, rhoncus tincidunt nibh. Ut eget est vel mi aliquam tincidunt vitae et velit. Suspendisse malesuada ex nulla, vel rhoncus lorem auctor eget. Nam laoreet arcu vel lectus viverra, et commodo risus venenatis. Phasellus a leo purus.</span>
              <br />
            <Button>teste</Button>
          </StyledContent>
          <StyledPhoto />
        </StyledWhoAmI>

        <StyledSubject>
          <StyledContent>
            <h1>Assunto importante</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque diam velit, sit amet lobortis erat ullamcorper vitae. Aliquam ac nunc vitae massa convallis interdum. Curabitur in nibh ac purus tristique elementum. In rhoncus dui enim, vel aliquam purus eleifend a. Curabitur eget mauris condimentum, tincidunt tortor in, tempor libero. Cras blandit scelerisque luctus. Nulla facilisi. Etiam lacinia efficitur purus ut commodo. Proin interdum neque a nisi euismod, id porta mi faucibus. Curabitur est mauris, auctor ut ante vitae, rhoncus tincidunt nibh. Ut eget est vel mi aliquam tincidunt vitae et velit. Suspendisse malesuada ex nulla, vel rhoncus lorem auctor eget. Nam laoreet arcu vel lectus viverra, et commodo risus venenatis. Phasellus a leo purus.</span>
          </StyledContent>
        </StyledSubject>

        <StyledContact>
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
        </StyledContact>

     </>
    )
}

export default Home;

// <img src={Capa} alt=''/>
