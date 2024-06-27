import './modulDisplay.scss';

export default function ModulDisplay({ products }) {
  console.log('Rendering ModulDisplay with products:', products);
  return (
    <div className='productdisplay2'>
      {products.map(product => (
        <div key={product.id} className="display2">
          <img src={product.img} alt={product.text} />
          <div className="display-text2">
            <span className='text2'>{product.text}</span>
            <span className='price2'>$ {product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
