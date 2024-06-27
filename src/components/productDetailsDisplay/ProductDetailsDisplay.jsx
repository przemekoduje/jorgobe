import { useState } from 'react';
import './productDetailsDisplay.scss';
import details from '../../product-details.js';

const ProductDetailsDisplay = () => {
    const product = details[0]; // Assuming we want to display the first product
    const images = [product.imgMain, product.img2, product.img3, product.img4];
    const [mainImage, setMainImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="product-details-display">
      <div className="main-image">
        <img src={mainImage} alt="Main product" />
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(image)}
            className={image === mainImage ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsDisplay;
