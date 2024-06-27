import React, { useState } from 'react';
import './featuredIn.scss'

export default function FeaturedIn() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleButtonClick = (index) => {
        setCurrentIndex(index);
      };
  return (
    <div className='featuredin'>
        <h5>Featured In</h5>
        <div className="fi-content">
            <div className="fi-slider">
                <div className="fi-slider-inner" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
                    <p>Jorgobe won “gazelle” award in 2018, which is an exclusive award for the fastest growing Danish companies.</p>
                    <p>“Here at the ELLE editorial team, we love the masks, and we can really see results, so pop into ELLE's shop and see for yourself how beautiful skin you get with Jorgobé's products.”</p>
                    <p>The Multi Peptide Lifting Filler, Niacinamide Serum, Squalane Hand Cream, and White Tea Balancing Cream are all award-winning products in the Danish Beauty Award competition.</p>
                    <p>Niacinamide Peel Off Mask as the ‘Best New Product’ at the Grooming Awards.</p>
                </div>
            </div>
            <div className="fi-ads">
                <div className="buttons">
                    <button onClick={() => handleButtonClick(0)}><img src="./assets/images/gazelle_logo.png" alt="" /></button>
                    <button onClick={() => handleButtonClick(1)}><img src="./assets/images/elle-logo.png" alt="" /></button>
                    <button onClick={() => handleButtonClick(2)}><img src="./assets/images/danish_logo.png" alt="" /></button>
                    <button onClick={() => handleButtonClick(3)}><img src="./assets/images/gq_logo.png" alt="" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}
