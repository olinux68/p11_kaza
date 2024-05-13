import React, { useEffect, useState } from "react";
import arrowLeft from "../../assets/img/arrowLeft.png";
import arrowRight from "../../assets/img/arrowRight.png";

const Slider = (props) => {
  const [index, setIndex] = useState(0);
  const [pics, setPics] = useState([props.pics]);

  useEffect(() => {
    setPics(props.pics);
  }, [props]);

  let length = pics?.length;

  function clickLeft() {
    setIndex(index === 0 ? length - 1 : index - 1);
  }

  function clickRight() {
    setIndex(index === length - 1 ? 0 : index + 1);
  }

  return (
    <div className="slider">
      <div className="slider__container">
        {length > 1 && (
          <>
            <div onClick={clickLeft} className="slider__container--left">
              <img
                className="slider__container--left--pic"
                src={arrowLeft}
                alt="slider a gauche"
              />
            </div>
            <div className="slider__container__count">
              <p>
                {index + 1}/{length}
              </p>
            </div>
            <div onClick={clickRight} className="slider__container--right">
              <img
                className="slider__container--right--pic"
                src={arrowRight}
                alt="slider a droite"
              />
            </div>
          </>
        )}
        <img className="slider__container__image" src={pics?.[index]} alt="" />
      </div>
    </div>
  );
};

export default Slider;