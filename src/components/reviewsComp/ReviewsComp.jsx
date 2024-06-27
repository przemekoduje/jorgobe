import reviewsDesc from '../../reviews';
import StarRating from '../StarRating/StarRating';
import './reviewsComp.scss';
import { useState } from 'react';

export default function ReviewsComp() {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  // Calculate the indexes of the first and last reviews on the current page
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewsDesc.slice(indexOfFirstReview, indexOfLastReview);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(reviewsDesc.length / reviewsPerPage);



  return (
    <div className="reviews">
      <div className="reviews-container">
        {currentReviews.map((review) => (
          <div key={review.id} className="review">
            <hr />
            <StarRating rating={review.starRating} />
            <div className="reviewerName">{review.reviewerName}</div>
            <div className="review-desc-teaser">{review.revDescTeaser}</div>
            <div className="review-desc">{review.revDesc}</div>
            
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = String(index + 1).padStart(2, '0');
          
          return (
            <button
              key={index}
              className={`page-button ${index + 1 === currentPage ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>
    </div>
  );
}