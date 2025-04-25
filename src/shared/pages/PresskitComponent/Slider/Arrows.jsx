import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
      <IoIosArrowBack />
      </span>
      <span className="next" onClick={nextSlide}>
      <IoIosArrowForward />
      </span>
    </div>
  );
}

export default Arrows;