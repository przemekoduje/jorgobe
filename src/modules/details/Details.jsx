import './details.scss'
import details from '../../product-details'


export default function Details() {
    const benefits = details[0];
    return (
    <div className='details'> 
        <h5>Details</h5>
        <div className="d-content">
            <div className="d-columns">
                <div className="d01">
                    <span>
                        {benefits.d01}
                    </span>
                </div>
                <div className="d01_desc">
                    <span>
                        {benefits.d01_desc}
                    </span>
                </div>
            </div>
            <div className="d-columns">
                <div className="d02">
                    <span>
                        {benefits.d02}
                    </span>
                </div>
                <div className="d02_desc">
                    <span>
                        {benefits.d02_desc}
                    </span>
                </div>
            </div>
            <div className="d-columns">
                <div className="d03">
                    <span>
                        {benefits.d03}
                    </span>
                </div>
                <div className="d03_desc">
                    <span>
                        {benefits.d03_desc}
                    </span>
                </div>
            </div>
            
        </div>

    </div>
  )
}
