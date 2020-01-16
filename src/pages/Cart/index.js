import React from 'react';

import {Container} from './styles.js';

export default function Cart(){
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                          <img /> 
                        </td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button type='button'>Finalizar pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>R$1920,90</strong>
                </Total>
            </footer>
        </Container> 
    )
}