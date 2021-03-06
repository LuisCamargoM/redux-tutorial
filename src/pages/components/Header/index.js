import React from 'react';
import { Link } from 'react-router-dom';
import {MdShoppingBasket} from 'react-icons/md';

import { Container, Cart } from './styles';
import logo from '../../../assets/images/logo.png';

export default function Header(){
    return (
        <Container>
            <Link to='/'>
                <img src={logo} alt='RocketShoes'/>
            </Link>

            <Cart to='/cart'>
                <div>
                    <strong>Meu carrinho</strong>
                    <span> 3 items</span>                    
                </div>                
                <MdShoppingBasket 
                        size={50}
                        color='#fff'
                />
            </Cart>
        </Container>
    )
}