import React from 'react'
import { 
    StyledAbout,
    StyledImg,
    StyledTitle,
    StyledCV,
  } from './StyledAbout'

const About = () => {
    return (
        <>
        <StyledImg alt=""/>
        <StyledTitle>
            Alexandre Tzermias
        </StyledTitle>
        <StyledAbout className='aboutGap'>
            <span>
             <b>Médico Psiquiatra, Psiquiatra da Infância e Adolescência e terapeuta DBT. Co-fundador da DBT Campinas.</b>
            </span>
            <span> 
             <b>Mentor da equipe de treinamento da DBT Brasil desde 2021.</b>
            </span>
            <span className='sectionDown'>
              <b>Membro da Sociedade Iberoamericana de DBT desde 2022</b>
            </span>

            <span className='sectionDown'>
              <b>Colunista do Portal Comporte-se <a href='https://comportese.com/author/aletzermias/'>(www.comportese.com.br)</a></b>
            </span>
        </StyledAbout>

        <StyledAbout>
            <h2>Formação</h2>
            <p>
                Residência médica em Psiquiatria: Instituto Bairral de Psiquiatria, 2015-2018. <br />
                Residência médica em Psiquiatria da Infância e Adolescência: UNICAMP, 2018-2019.  <br />
                <br />
                <StyledCV>Formação em DBT:</StyledCV>
                <br />
                Curso introdutório de DBT com Dan Josua e Jan Leonardi no final de 2016.  <br />
                Intensive Training da DBT Brasil / Behavioral Tech em 2019.  <br />
                <br />
                <StyledCV>Outros treinamentos e supervisão em DBT:</StyledCV> <br />
                • DBT-A com Jill Rathus (2 workshops de 2 dias) <br />
                • Family Connections (com Luciana Payne através do Family Connections Brasil e com Alan Fruzzetti);  <br />
                • Skills for DBT Team Leaders to Promote Team Adherence, com Michaela Swales e Christine Dunkley, Behavioral Tech / British Isles DBT. <br />
                • Supervisão em DBT com profissionais referência da área (Vinicius Dornelles e Pablo Gagliesi).
                • DBT-PTSD com Martin Bohus (através da DBT Iberoamerica)
            </p>
        </StyledAbout>
        </>
    )
}

export default About;