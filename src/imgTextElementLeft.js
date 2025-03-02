import React from "react";
import "./css/ImgTextElementRight.css";

const ImgTextElementLeft = ({ 
  imgSrcLeft, 
  textMiddleLeft, 
  textMiddleRight, 
  imgSrcRight, 
}) => {
  return (
    <div className="txt-img-container">
      {/* Linkes Bild mit Text unten */}
      <div className="half-div image-div right">
        <img 
          src={imgSrcLeft} 
          alt="Bild 1" 
        />        
      </div>

      {/* Text in der Mitte */}
      <div className="text-div text-left-low">
        <p>{textMiddleLeft}</p>
      </div>
      <div className="text-div text-right">
        <p>{textMiddleRight}</p>
      </div>

      {/* Rechtes Bild mit Text oben */}
      <div className="half-div image-div left">
        <img src={imgSrcRight} alt="Bild 2" />
      </div>
    </div>
  );
};

export default ImgTextElementLeft;
