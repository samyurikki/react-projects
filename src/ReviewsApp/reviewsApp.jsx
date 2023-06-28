import { useState } from "react";
import reviews from "./Data/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Review from "./Review";
function ReviewsApp() {
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => {
      return checkNumber(prevIndex + 1);
    });
  };

  const handlePrevClick = () => {
    setIndex((prevIndex) => {
      return checkNumber(prevIndex - 1);
    });
  };

  const handleSurpriseClick = () => {
    setIndex((prevIndex) => {
      let ranNum = Math.floor(Math.random() * reviews.length);
      if (ranNum === prevIndex) {
        ranNum = ranNum + 1;
      }
      return setIndex(checkNumber(ranNum));
    });
  };
  return (
    <>
      <Review {...reviews[index]} />
      <FaChevronLeft onClick={handlePrevClick} />
      <FaChevronRight onClick={handleNextClick} />
      <br />
      <button onClick={handleSurpriseClick}>Surprise Me</button>
    </>
  );
}

export default ReviewsApp;
