
import ProductDetailsDescription from '../../components/productDetailsDescription/productDetailsDescription';
import ProductDetailsDisplay from '../../components/productDetailsDisplay/ProductDetailsDisplay';
import './productDetails.scss';

const ProductDetails = () => {
  return (
    <div className="productDetails">
      <div className="pd_display">
        <ProductDetailsDisplay />
      </div>
      <div className="description">
        <ProductDetailsDescription />
      </div>
    </div>
  );

}
export default ProductDetails;