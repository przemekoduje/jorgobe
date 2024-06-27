import StarRating from '../../components/StarRating/StarRating'
import ReviewsComp from '../../components/reviewsComp/ReviewsComp'
import './reviewsModule.scss'

export default function ReviewsModule() {
  return (
    <div className='reviewsModule'>
        <h5>What people are saying</h5>
        <div className="wrapper">
            <div className="r-left">
                <div className="stars">
                        <div className="starRating">
                            <StarRating rating={4.5} />
                        </div>
                        <div className="average">
                            <span>5.0 AVERAGE RATING</span>
                        </div>
                </div>
                <div className="h1plusspan">
                    <h1>Reviews</h1>
                    <span >(21)</span>
                </div>
                
                <button className='button-product'>WRITE A REVIEW</button>

            </div>
            <div className="r-right">
                <ReviewsComp />

            </div>
        </div>
        
        
    </div>
  )
}

