import ProductDisplay_fp from "../../components/productDisplay_fp/ProductDisplay_fp";
import "./featuredProducts.scss";

export default function FeaturedProducts() {
  return (
    <div className="featuredproducts">
      <h5>Featured Products</h5>
      <div className="content">
        <div className="top">
          <div className="display">
            We believe in the power of both nature and science. Based in
            Denmark, we draw inspiration for our products from the natural
            beauty and simplicity of the Nordic lifestyle.
          </div>
          <div className="images">
            <img src="./assets/images/fp1.png" alt="" className="one" />
            <img src="./assets/images/fp2.png" alt="" className="two" />
            <img src="./assets/images/fp3.png" alt="" className="three" />
            <img src="./assets/images/fp4.png" alt="" className="four" />
          </div>
          <button className="button-global">DISCOVER ALL PRODUCTS</button>
        </div>
        <div className="bottom">
          <div className="fp-slider">
            <ProductDisplay_fp />
          </div>
        </div>
      </div>
    </div>
  );
}
