import StarRating from '../StarRating/StarRating';
import './productDetailsDescription.scss';

export default function productDetailsDescription() {
    return (
        <div className="product-detail-description">
            <div className="pagination">
                <span>
                    <p>Homepage / </p>
                    <p> All Products / </p>
                    <p style={{fontWeight: "bold"}}> Niacinamide Peel Off Mask</p>
                </span>
            </div>
            <div className="pdd-text">
                <h1>Nacinamide Peel Off Mask</h1>
            </div>
            <div className="stars">
                <div className="starRating">
                    <StarRating rating={4.5} />
                </div>
                <div className="starCount">
                    <span>(21)</span>
                </div>
            </div>
            <div className="capacity">
                <span>85 ml</span>
            </div>
            <div className="pdd-description">
                <span>This natural peel-off mask with its high concentration of niacinamide (vitamin B3) has been specially developed to deep-cleanse pores, reduce sebum production and minimise pore size.</span>
    
            </div>
            <div className="facts">
                <span>MADE WITH...  Cocos Nucifera Fruit, Niacinamide,  Dragons Blood Tree, Agarikon Mushrooms, Larch-Bark, Active Carbon</span>
            </div>
            <div className="price">
                <span>$27.00</span>
            </div>
            <button>ADD TO BAG</button>
    
        </div>
    );
}


