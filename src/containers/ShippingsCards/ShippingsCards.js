import React from 'react';
import shortid from 'shortid';

import { List, Item } from './styles';

const ShippingsCards = ({ shippings }) => {
  const cashback = value => {
    const number = value.replace(/\D/g, '');
    const toInt = (parseInt(number, 10) * 10) / 100;
    return toInt.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <List>
      {shippings &&
        shippings.map(({ code, price, date }) => (
          <Item key={shortid.generate()}>
            <dl>
              <dt>Code:</dt>
              <dd>{code}</dd>
            </dl>
            <dl>
              <dt>Preço:</dt>
              <dd>{price}</dd>
            </dl>
            <dl>
              <dt>Data:</dt>
              <dd>{date}</dd>
            </dl>
            <dl>
              <dt className="cashback">Cashback:</dt>
              <dd>{cashback(price)}</dd>
            </dl>
          </Item>
        ))}
    </List>
  );
};

export default ShippingsCards;
