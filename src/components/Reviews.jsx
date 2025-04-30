import React from "react";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
import reviews from "../data/reviews.js";

const Reviews = () => {
  return (
    <>
      <Marquee autoFill={true} pauseOnHover={true}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review.review} name={review.name} />
        ))}
      </Marquee>
    </>
  );
};

export default Reviews;
