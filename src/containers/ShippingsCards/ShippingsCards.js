/* eslint-disable radix */
import React from 'react';
import shortid from 'shortid';

import { List, Item } from './styles';

const ShippingsCards = ({ shippings }) => {
  const cashback = value => {
    // eslint-disable-next-line no-useless-escape
    const number = value.replace(/[^0-9\.]+/g, '');
    const toInt = (parseInt(number) * 10) / 100;
    return toInt.toLocaleString({
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'pt-BR',
    });
  };

  return (
    <List key={shortid.generate()}>
      {shippings &&
        shippings.map(({ code, price, date }) => (
          <Item>
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
              <dd>{`R$${cashback(price)}`}</dd>
            </dl>
          </Item>
        ))}
    </List>
  );
};

export default ShippingsCards;
