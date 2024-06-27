import './productDisplay_rp.scss';
import products from '../../productData';

// Funkcja do losowego wybierania 3 produktów
function getRandomProducts(products, num) {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
export default function ProductDisplay_rp() {

    // Losowo wybieramy 3 produkty
  const selectedProducts = getRandomProducts(products, 3);
  
  return (
    <div className='productdisplay'>
        {selectedProducts.map(product => (
        <div key={product.id} className="display">
          <img src={product.img} alt={product.text} />
          <div className="display-text">
            <span className='text'>{product.text}</span>
            <span className='price'>$ {product.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
