import { useEffect, useState } from "react";
import SliderContent from "./PresskitComponent/Slider/SliderContent";
import Dots from "./PresskitComponent/Slider/Dots";
import Arrows from "./PresskitComponent/Slider/Arrows";
import sliderImage from "./PresskitComponent/Slider/sliderImage";
import "../css/PressKit.css";
import Grid from "./PresskitComponent/Grid/GridComponent";
import Recommand from "./PresskitComponent/Recommand/Recommend";


const len = sliderImage.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div>
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    
    </div>
      <Grid/>
      <Recommand/>
    </div>
    
  );
}

export default Slider;
