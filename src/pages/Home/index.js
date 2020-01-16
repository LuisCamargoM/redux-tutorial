import React from 'react';
import {MdAddShoppingCart} from 'react-icons/md';


import { ProductList } from './styles';

export default function Home(){
    return (
        <ProductList>
            <li>
                <img src='https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe1.jpg?ims=326x' alt='tenis'/>
                <strong> Tenis foda pa caralho! </strong>
                <span> R$ 129,90</span>

                <button type='button'>
                    <div>
                        <MdAddShoppingCart
                            size={16}
                            color='#fff'
                        />
                    </div>
                    <span> 3 | Adicionar ao carrinho </span>
                </button>
            </li>
            <li>
                <img src='https://static.netshoes.com.br/produtos/mochila-nike-brasilia-90-24-litros/26/HZM-1709-026/HZM-1709-026_detalhe2.jpg?ims=326x' alt='tenis'/>
                <strong> Mochila foda pa caralho! </strong>
                <span> R$ 129,90</span>

                <button type='button'>
                    <div>
                        <MdAddShoppingCart
                            size={16}
                            color='#fff'
                        />
                    </div>
                    <span> 3 | Adicionar ao carrinho </span>
                </button>
            </li>
            <li>
                <img src='https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe1.jpg?ims=326x' alt='tenis'/>
                <strong> Tenis foda pa caralho! </strong>
                <span> R$ 129,90</span>

                <button type='button'>
                    <div>
                        <MdAddShoppingCart
                            size={16}
                            color='#fff'
                        />
                    </div>
                    <span> 3 | Adicionar ao carrinho </span>
                </button>
            </li>
            <li>
                <img src='https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe1.jpg?ims=326x' alt='tenis'/>
                <strong> Tenis foda pa caralho! </strong>
                <span> R$ 129,90</span>

                <button type='button'>
                    <div>
                        <MdAddShoppingCart
                            size={16}
                            color='#fff'
                        />
                    </div>
                    <span> 3 | Adicionar ao carrinho </span>
                </button>
            </li>
            <li>
                <img src='https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe1.jpg?ims=326x' alt='tenis'/>
                <strong> Tenis foda pa caralho! </strong>
                <span> R$ 129,90</span>

                <button type='button'>
                    <div>
                        <MdAddShoppingCart
                            size={16}
                            color='#fff'
                        />
                    </div>
                    <span> 3 | Adicionar ao carrinho </span>
                </button>
            </li>
            <li>
                <img src='https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe1.jpg?ims=326x' alt='tenis'/>
                <strong> Tenis foda pa caralho! </strong>
                <span> R$ 129,90</span>

                <button type='button'>
                    <div>
                        <MdAddShoppingCart
                            size={16}
                            color='#fff'
                        />
                    </div>
                    <span> 3 | Adicionar ao carrinho </span>
                </button>
            </li>
        </ProductList>
    )
}