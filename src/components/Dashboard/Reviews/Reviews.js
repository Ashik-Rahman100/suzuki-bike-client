import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [review, SetReview] = useState([]);
    useEffect(() =>{
     fetch('http://localhost:5000/reviews')   
    .then(res => res.json())
    .then(data => SetReview(data))
    },[]);
    return (
        <div>
            <h2 className='text-center mt-5 fw-bold'>REVIEWS</h2>
            <div className = 'container mx-auto row row-cols-1 row-cols-md-3 g-4 mt-5'>
                {
                    review.map(review => <Review key={review._id} review = {review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;