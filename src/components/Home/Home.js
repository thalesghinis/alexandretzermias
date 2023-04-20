import React  from 'react'
import { 
  StyledHome, 
  StyledBox, 
  StyledWhoAmI, 
  StyledContent, 
  StyledSubject, 
  StyledLink,
  StyledPhoto, 
  StyledWhats,
  StyledPhoto2,
  StyledWhoAmITwo
} from './StyledHome'
import Button from '../Button/Button'
import {Link} from 'react-router-dom';

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

    return (
      <>
        <StyledHome>
       
          <StyledBox>
            ὁ βίος βραχὺς, <span>A vida é breve,</span>
            ἡ δὲ τέχνη μακρὴ,  <span>A arte é longa,</span>
            ὁ δὲ καιρὸς ὀξὺς,  <span>A oportunidade passageira,</span>
            ἡ δὲ πεῖρα σφαλερὴ, <span> A experiência enganosa,</span>
            ἡ δὲ κρίσις χαλεπή.   <span>O julgamento difícil.</span>
          </StyledBox>


        </StyledHome>
        <StyledWhoAmI>
        <StyledPhoto />
          <StyledContent>
            <h2>Dr Alexandre Tzermias</h2>
            <span>É minha missão contribuir com a disseminação do conhecimento atual, acurado e não pejorativo sobre o Transtorno de Personalidade Borderline e com o desenvolvimento de tratamentos efetivos, baseados em evidência e compassivos como a Terapia Comportamental Dialética (DBT) para esse transtorno, que é um dos mais estigmatizados na saúde mental.</span>
              <br />
              <Link to="/sobre">
                <Button customWidth={'400px'}>Conheça minha formação</Button>
              </Link>
          </StyledContent>
        </StyledWhoAmI>

        <StyledSubject>
          <StyledContent>
            <h1>Atuação</h1>
            <span className='sectionUp'>
              Avaliação e tratamento psiquiátrico de crianças e adolescentes 
              (transtornos do neurodesenvolvimento, atraso do desenvolvimento e 
              transtornos mentais da infância e adolescência; desregulação emocional 
              pervasiva em adolescentes); avaliação e tratamento psiquiátrico de adultos 
              (transtornos mentais diversos; especialista em desregulação 
              emocional pervasiva/Transtorno de Personalidade Borderline em adultos; 
              tratamento baseado nas guidelines atuais e utilizando, especialmente, 
              princípios da DBT e tratamento com DBT Padrão). 
              Em geral não tenho especialidade na avaliação e tratamento psiquiátrico 
              de idosos (p. ex., casos específicos, doenças neurodegenerativas, 
              síndrome demencial). Porém faço também avaliação e tratamento de casos 
              menos específicos (transtornos mentais comuns, como transtorno de 
              ansiedade e depressão).
            </span>
            <span className='sectionDown'>
              <b>Membro da Sociedade Iberoamericana de DBT desde 2022</b>
            </span>

            <span className='sectionDown'>
              <b>Colunista do Portal Comporte-se <a href='https://comportese.com/'>(www.comportese.com.br)</a></b>
            </span>
          </StyledContent>
        </StyledSubject>
        
        <StyledWhoAmITwo>
          <StyledContent>
            <h2>Contato</h2>
            <span></span>      
            <br />
            <StyledWhats>
              <StyledLink href='https://tinyurl.com/alexandretzermias'>
                  Entre em contato diretamente pelo WhatsApp
                  <Button>Botão WhatsApp </Button>
              </StyledLink>
            </StyledWhats>
          </StyledContent>
          <StyledPhoto2 />
        </StyledWhoAmITwo>
     </>
    )
}

export default Home;