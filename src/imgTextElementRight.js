import React from 'react';
import "./styles.css";

const ImgTextElementRight = ({ text, imgSrc }) => {
  return (
    <div className="txt-img-container">
      <div className="half-div text-div">
        <p>{text}</p>
      </div>
      <div className="half-div image-div">
        <img src={imgSrc} alt="Bild" />
      </div>
    </div>
  );
};

export default ImgTextElementRight;
