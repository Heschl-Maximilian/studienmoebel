import React from 'react';
import "./css/ImgTextElementLeft.css"; // Importiere das neue Stylesheet

const ImgTextElementLeft = ({ textLeft, imgSrcLeft, textRight, imgSrcRight }) => {
  return (
    <div className="txt-img-container">
      <div className="half-div image-div">
        <img src={imgSrcLeft} alt="Bild 1" />
      </div>
      <div className=" text-div text-left">
        <p>{textLeft}</p>
      </div>
      <div className="text-div text-right">
        <p>{textRight}</p>
      </div>
      <div className="half-div image-div">
        <img src={imgSrcRight} alt="Bild 2" />
      </div>
    </div>
  );
};

export default ImgTextElementLeft;
