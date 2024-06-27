import './benefits.scss';
import details from '../../product-details'

export default function Benefits() {
  
    const product = details[0]; // Założenie, że mamy tylko jeden produkt. Można to zmienić, aby dynamicznie wybierać produkt.
  return (
    <div className='benefits'>
        <h5>Benefits</h5>
        <div className="left">
            
            <img src={product.img5} alt="" />
        </div>
        <div className="right">
            <div className="wrapper">
                <h1>{product.b_h1}</h1>
        
                <div className="b01">
                    <span>
                        {product.b01}
                    </span>
                </div>
                <div className="b01_desc">
                    <span>
                        {product.b01_desc}
                    </span>

                </div>
                <div className="b02">
                    <span>
                        {product.b02}
                    </span>
                </div>
                <div className="b02_desc">
                    <span>
                        {product.b02_desc}
                    </span>

                </div>
                <div className="b03">
                    <span>
                        {product.b03}
                    </span>
                </div>
                <div className="b03_desc">
                    <span>
                        {product.b03_desc}
                    </span>

                </div>            
            </div>
        </div>
    </div>
  )
}
