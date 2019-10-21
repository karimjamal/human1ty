'use strict';

import React from 'react';
import css from './Human.scss';

const Human = ({ info }) => {
  const { name, position, photo, posX, posY } = info;

  return (
    <img
      key={photo}
      src={photo}
      alt={`${name}, ${position}`}
      className={css.container}
      style={{ transform: `translateX(${posX * 100}%) translateY(${posY * 100}%)` }}
    />
  );
};

export default Human;