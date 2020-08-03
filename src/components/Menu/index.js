import React from 'react';
import {Link} from 'react-router-dom'; // Efeito de Single-Page Application
import Logo from '../../assets/logo.png';
import ButtonLink from './ButtonLink';

import './index.css'

function Menu(){
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={Logo} alt="logo"></img>
            </Link>

            <ButtonLink as={Link} to='/cadastro/video'>
                Novo Vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu;