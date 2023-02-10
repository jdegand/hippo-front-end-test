import React from 'react';
import './ImageGrid.scss';

import grid1 from '../../images/grid1.webp';
import grid2 from '../../images/grid2.webp';
import grid3 from '../../images/grid3.webp';
import grid4 from '../../images/grid4.webp';
import grid5 from '../../images/grid5.webp';
import grid6 from '../../images/grid6.webp';

function ImageGrid() {
  return (
    <section>
      <h2 className="image-grid__h2">
        {' '}
        See (and Hear) the Hippo Difference for Yourself
      </h2>
      <div className="image-grid">
        <img className="image-grid__image" alt="product 1" src={grid1} />
        <img className="image-grid__image" alt="product 2" src={grid2} />
        <img className="image-grid__image" alt="product 3" src={grid3} />
        <img className="image-grid__image" alt="product 4" src={grid4} />
        <img className="image-grid__image" alt="product 5" src={grid5} />
        <img className="image-grid__image" alt="product 6" src={grid6} />
      </div>
    </section>
  );
}

export default ImageGrid;
