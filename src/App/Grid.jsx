'use strict';

import React, { useState, useEffect } from 'react';
import Human from './Human';
import css from './Grid.scss';

const randomPos = (posX, posY) => {
  while (true) {
    let [x, y] = [posX, posY];
    const val = Math.random();
    if (val <= .25) {
      x = posX - 1; // Move left
    } else if (val <= .5) {
      y = posY + 1; // Move up
    } else if (val <= .75) {
      x = posX + 1; // Move right
    } else {
      y = posY - 1; // Move down
    }

    // Don't allow 0,0
    // Keep images on left side of page
    if ((x !== 0 || y !== 0) && x <= 0) {
      return { posX: x, posY: y };
    }
  }
};

const Grid = () => {
  const [count, setCount] = useState(-1);
  const [refresh, setRefresh] = useState(0);
  const [images, setImages] = useState([]);
  const [humans, setHumans] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const data = await (await fetch('https://uifaces.co/api?limit=30&emotion[]=happiness&random', {
        headers: {
          'X-API-KEY': '652ad3f96a6451262e9fdd3ecfb99f',
        },
      })).json();
      setImages(images.concat(data));
    };

    fetchImages();
  }, [refresh]);

  useEffect(() => {
    if (!images.length) {
      return;
    }

    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    if (!images.length) {
      return;
    }

    let newPos = { posX: 0, posY: 0 };
    const newHuman = {
      ...images[count],
      ...newPos,
      key: count,
    };

    const clones = humans.slice();
    let displaced;
    for (let i = 0; i < 10 && i < clones.length; i++) {
      displaced = clones.find(h => h !== displaced && h.posX === newPos.posX && h.posY === newPos.posY);
      if (!displaced) {
        break;
      }

      newPos = randomPos(displaced.posX, displaced.posY);
      displaced.posX = newPos.posX;
      displaced.posY = newPos.posY;
    }

    clones.push(newHuman);
    if (clones.length > 100) {
      // Limit
      clones.shift();
    }
    setHumans(clones);
    if (images.length - clones.length === 5) {
      setRefresh(refresh + 1);
    }
  }, [count]);

  return (
    <div className={css.container}>
      {humans.map(h => <Human key={h.key} info={h} />)}
    </div>
  );
};

export default Grid;