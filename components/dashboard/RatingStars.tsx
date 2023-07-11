import React from 'react';
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';
import { RatingStarsProps } from '@/helper/interfaces';

const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  onChangeRating,
}) => {
  const handleClick = (selectedRating: number) => {
    onChangeRating(selectedRating);
  };

  return (
    <div className="flex items-center justify-center my-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
        >
          {star <= rating ? (
            <RiStarSFill className="text-yellow-500 text-4xl" />
          ) : (
            <RiStarSLine className="text-gray-400 text-4xl" />
          )}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
