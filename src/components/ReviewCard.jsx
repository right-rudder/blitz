import React from "react";

const ReviewCard = ({ review, name }) => {
  return (
    <div className="bg-main-blue-100 max-w-sm lg:max-w-lg mx-10 p-10 flex flex-col gap-5 items-center h-full">
      <p className="lg:text-lg tracking-wider font-light line-clamp-6">
        {review}
      </p>

      <div className="flex">
        <svg className="size-8 text-yellow-500" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
          />
        </svg>
        <svg className="size-8 text-yellow-500" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
          />
        </svg>
        <svg className="size-8 text-yellow-500" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
          />
        </svg>
        <svg className="size-8 text-yellow-500" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
          />
        </svg>
        <svg className="size-8 text-yellow-500" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
          />
        </svg>
      </div>

      <p className="text-sm lg:text-base font-semibold">- {name}</p>
      <a href="#" target="_blank" className="text-sm text-main-blue-900">
        Read full review
      </a>
    </div>
  );
};

export default ReviewCard;
