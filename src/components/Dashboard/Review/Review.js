import React from 'react';
import Rating from 'react-rating';
import './Review.css';
const Review = (props) => {
    const {name,image,feedback,rating} = props.review;
    return (
        <div>
            <div className="card" >
              <img src={image} className="card-img-top  rounded-circle w-75 mx-auto"  alt="..."/>
             <div className="card-body">
              <h5 className="card-title " >{name}</h5>
              <Rating 
              initialRating ={rating}
              readonly
              emptySymbol ="far fa-star text-warning"
              fullSymbol ="fas fa-star text-warning"
              />
              <p className="card-text"><span>"{feedback}"</span></p>

            </div>
           </div>
        </div>
    );
};

export default Review;