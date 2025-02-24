import React from 'react';
import "./css/ImgTextElementRight.css"; // Importiere das neue Stylesheet

const ImgTextElementRight = ({ textLeft, imgSrcLeft, textMiddleLeft, textMiddleRight, textRight, imgSrcRight }) => {
  return (
    <div className="txt-img-container">
      {/* Linkes Bild mit Text unten */}
      <div className="half-div image-div left">
        <img src={imgSrcLeft} alt="Bild 1" />
        <p className="image-text white bottom">{textLeft}</p>
      </div>

      {/* Text in der Mitte */}
      <div className=" text-div text-left">
        <p>{textMiddleLeft}</p>
      </div>
      <div className="text-div text-right">
        <p>{textMiddleRight}</p>
        </div>
    
      {/* Rechtes Bild mit Text oben */}
      <div className="half-div image-div right">
        <img src={imgSrcRight} alt="Bild 2" />
        <p className="image-text black top">{textRight}</p>
      </div>
    </div>
  );
};

export default ImgTextElementRight;
