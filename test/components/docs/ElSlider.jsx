import React, { useEffect } from "react";
import { Slider } from "../../../fruitUI/dist/js/fruitui.modules"


const ElSlider = () => {
	useEffect(() => {
		Slider()
	}, [])
  return (
    <>
      <div className="slider">
      <div className="slides">
          <span className="slide">
            <img src="/img.jpg" />
          </span>
          <span className="slide">
            <img src="/img.jpg" />
          </span>
          <span className="slide">
            <img src="/img.jpg" />
          </span>
          <span className="slide">
            <img src="/img.jpg" />
          </span>
        </div>
        <span className="prev"></span>
        <span className="next"></span>
      </div>
    </>
  );
};

export default ElSlider;