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
            Alexandre Tzemias
        </StyledTitle>
        <StyledAbout>
            <span>Médico Psiquiatra, Psiquiatra da Infância e Adolescência e terapeuta DBT. Co-fundador da DBT Campinas.</span>
            <span>Mentor da equipe de treinamento da DBT Brasil desde 2021. </span>
            <span>Membro da Sociedade Iberoamericana de DBT desde 2022</span>
            <span>Colunista do Portal Comporte-se <a href='https://comportese.com/'>(www.comportese.com.br)</a></span> 
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
                <StyledCV>Diversos cursos e supervisão em DBT:</StyledCV>    <br />
                • DBT-A com Jill Rathus (2 workshops de 2 dias) <br />
                • Family Connections (com Luciana Payne através do Family Connections Brasil e com Alan Fruzzetti);  <br />
                • Skills for DBT Team Leaders to Promote Team Adherence, com Michaela Swales e Christine Dunkley, Behavioral Tech / British Isles DBT. <br />
                • Supervisão em DBT com profissionais referência da área (Vinicius Dornelles e Pablo Gagliesi).
            </p>
        </StyledAbout>
        </>
    )
}

export default About;