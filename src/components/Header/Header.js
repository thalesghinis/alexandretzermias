import React from 'react'
import { StyledHeader, StyledUl, StyledLi, StyledLogo, StyledTeste } from './StyledHeader'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <StyledTeste>
            <StyledHeader>
            <StyledLogo />
            <StyledUl>
                    <Link style={{ textDecoration: 'none'}} to="/">
                        <StyledLi>Home</StyledLi>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to="/sobre">
                        <StyledLi>Sobre</StyledLi>
                    </Link>
                    <Link style={{ textDecoration: 'none'}}to="/contato">
                        <StyledLi>Contato</StyledLi>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to="/">
                        <StyledLi>?</StyledLi>
                    </Link>
            </StyledUl>
            </StyledHeader>
        </StyledTeste>
    )
}

export default Header;